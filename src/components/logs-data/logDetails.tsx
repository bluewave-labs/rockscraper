import { Button } from '@bluewavelabs/prism-ui';
import codeToHtml from '@src/utils/codeToHtml';
import { QueryData } from '@src/utils/interfaces';
import { useEffect, useState } from 'react';
import sanitize from 'sanitize-html';
import { Drawer } from '../ui/drawer';

const LogDetails = ({
  selectedLog,
  setSelectedLog,
}: {
  selectedLog: QueryData | null;
  setSelectedLog: (val: QueryData | null) => void;
}) => {
  const [content, setContent] = useState<string>('');

  const getContent = async () => {
    if (!selectedLog) return;
    const content = selectedLog?.extracted_content.map((it) =>
      Object.entries(it)
        .filter(([key]) => !['index', 'tags'].includes(key))
        .reduce((acc, [key, value]) => ({ ...acc, [key]: value }), {})
    );
    const contentString = JSON.stringify(content, null, 2);
    const html = await codeToHtml(contentString);
    setContent(html);
  };

  useEffect(() => {
    getContent();
  }, [selectedLog]);

  const buildName = () => {
    if (!selectedLog) return '';
    return selectedLog?.url
      .replace(/https?:\/\//, '')
      .replaceAll('/', '_')
      .replaceAll('.', '-');
  };

  const hasMarkdown =
    selectedLog?.markdown &&
    selectedLog.markdown.replaceAll('\n', '').length > 0 &&
    !selectedLog.markdown.startsWith('www');
  const hasHtml = selectedLog?.html.startsWith('<html>');

  const handleDownload = (type: 'md' | 'html') => {
    if (!selectedLog) return;
    const fileName = `${buildName()}.${type}`;
    const fileContent = type === 'md' ? selectedLog.markdown : selectedLog.html;

    // Create a blob from the content
    const blob = new Blob([fileContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);

    // Create a temporary link and trigger download
    const a = document.createElement('a');
    a.href = url;
    a.download = fileName;
    document.body.appendChild(a);
    a.click();

    // Cleanup
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <Drawer open={!!selectedLog} onOpenChange={(val) => setSelectedLog(val ? selectedLog : null)}>
      <div className="flex flex-col gap-2 text-sm">
        <p>
          <strong>URL:</strong> {selectedLog?.url}
        </p>
        {selectedLog?.date ? (
          <p>
            <strong>Date:</strong> {new Date(selectedLog.date).toLocaleString()}
          </p>
        ) : null}
        <div className="h-[71vh] overflow-y-auto grow relative bg-gray-100 p-4 rounded-md font-mono">
          <p
            className="text-xs flex flex-col gap-2 "
            dangerouslySetInnerHTML={{
              __html: sanitize(content),
            }}
          />
        </div>

        <div className="flex gap-2 items-center justify-center mt-4">
          {hasMarkdown ? <Button onClick={() => handleDownload('md')}>Download markdown</Button> : null}
          {hasHtml ? <Button onClick={() => handleDownload('html')}>Download html</Button> : null}
        </div>
      </div>
    </Drawer>
  );
};

export default LogDetails;
