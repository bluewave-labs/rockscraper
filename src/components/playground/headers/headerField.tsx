import { Input } from '@bluewavelabs/prism-ui';
import { ChangeEvent } from 'react';
import { usePlayground } from '../context';
import style from './headers.module.scss';

const HeaderField = ({ id, headerKey, value }: { id: string; headerKey: string; value: string }) => {
  const { headers, setHeaders } = usePlayground();

  const handleChange = (e: ChangeEvent<HTMLInputElement>, id: string) => {
    const { name, value } = e.target;
    let newHeader = headers.find((header) => header.id === id);
    const index = headers.findIndex((header) => header.id === id);
    if (!newHeader) return;
    if (name === 'key') {
      newHeader = {
        ...newHeader,
        key: value,
      };
    } else {
      newHeader = {
        ...newHeader,
        value: value,
      };
    }
    const newHeaders = [...headers];
    newHeaders[index] = newHeader;
    setHeaders(newHeaders);
  };

  return (
    <div key={id} className="flex gap-4 mb-4 flex-col md:flex-row">
      <Input
        placeholder="Header name"
        id={`key-${id}`}
        value={headerKey}
        name="key"
        onChange={(e) => handleChange(e, id)}
        variant="no-label"
      />
      <Input
        placeholder="Header value"
        id={`value-${id}`}
        value={value}
        name="value"
        onChange={(e) => handleChange(e, id)}
        variant="no-label"
      />
    </div>
  );
};

export default HeaderField;
