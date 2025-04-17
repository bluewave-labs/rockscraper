import { Button } from '@bluewavelabs/prism-ui';
import { cn } from '@src/lib/utils';
import { X } from 'lucide-react';
import { useEffect, useRef } from 'react';

export const Drawer = ({
  open,
  onOpenChange,
  children,
}: {
  open: boolean;
  onOpenChange: (val: boolean) => void;
  children: React.ReactNode;
}) => {
  const drawerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (drawerRef.current && !drawerRef.current.contains(event.target as Node)) {
        onOpenChange(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div
      className={cn(
        'w-screen h-screen fixed inset-0 z-50 flex items-end bg-gray-100/50 backdrop-blur-sm transition-all duration-300',
        open ? 'visible opacity-100' : 'invisible opacity-0'
      )}
    >
      <div
        ref={drawerRef}
        className={cn(
          'absolute right-0 top-0 w-full max-w-md h-full bg-gray-90 text-gray-10 p-4 transition-transform duration-300',
          open ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <Button onClick={() => onOpenChange(false)} rounded="full" variant="ghost" className="absolute top-4 right-4">
          <X className="h-4 w-4" />
          <span className="sr-only">Close</span>
        </Button>
        <div className="w-full h-full p-4 overflow-auto">{children}</div>
      </div>
    </div>
  );
};
