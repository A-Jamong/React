import React, { useCallback, useEffect } from 'react';

function useToogle(initialValue = false, callback) {
  const [isToggle, setIsToggle] = setIsToggle(initialValue);

  useCallback(setIsToggle, []);

  useEffect(() => {
    callback?.(isToggle);
  }, [isToggle]);

  return [isToggle, setIsToggle];
}

export default useToogle;
