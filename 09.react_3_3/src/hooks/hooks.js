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

export const useMobileDecect = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const userAgent = navigator.userAgent;
    const mobRegex =
      /android|webos|iphone|ipod|blackberry|iemobile|opera mini/i;
    const isMaxWidth768 = window.matchMedia(
      "only screen and (max-width: 768px)"
    ).matches;

    const isPointerCoarse = window.matchMedia("(any-pointer: coarse)").matches;

    setIsMobile(
      isMaxWidth768 && isPointerCoarse && mobRegex.test(userAgent.toLowerCase())
    );
  }, [isMobile]);

  return [isMobile];
};
