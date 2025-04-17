import { useEffect, useState } from 'react';
import { Progress } from '../ui/progress';
import { usePlayground } from './context';

const ProgressBar = () => {
  const { start, end } = usePlayground();
  const [progress, setProgress] = useState(0);
  const EXPECTED_DURATION = 15000;

  useEffect(() => {
    if (start && end) {
      setProgress(100);
    } else if (start) {
      const interval = setInterval(() => {
        const elapsed = Date.now() - start.getTime();
        const newProgress = Math.min((elapsed / EXPECTED_DURATION) * 100, 99);
        setProgress(newProgress);
      }, 100);
      return () => clearInterval(interval);
    }
  }, [start, end]);

  return <Progress value={progress} />;
};

export default ProgressBar;
