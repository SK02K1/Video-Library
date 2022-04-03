import { useState, useEffect } from 'react';

export const useDocumentTitle = (title) => {
  const [documentTitle, setDocumentTitle] = useState(title);

  useEffect(() => {
    document.title = `${documentTitle} | Focus TV`;
  }, [documentTitle]);

  return { documentTitle, setDocumentTitle };
};
