import { useState, useEffect } from "react";

export const useCopyClipboard = (interval = 2000) => {
  const [isCopied, setIsCopied] = useState(false);

  const copyClipboard = (value) => {
    if (value.trim().length > 0) {
      navigator.clipboard.writeText(value);
      setIsCopied(true);
    }
  };

  useEffect(() => {
    let timerId;
    if (interval && isCopied) {
      timerId = setTimeout(() => {
        setIsCopied(false);
      }, interval);
    }

    return () => {
      clearTimeout(timerId);
    };
  }, [isCopied, interval]);

  return [copyClipboard, isCopied];
};
