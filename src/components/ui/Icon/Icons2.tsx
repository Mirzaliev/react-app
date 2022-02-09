import React, { useEffect, useRef, useState } from 'react';

interface UseDynamicSVGImportOptions {
  onCompleted?: (
    name: string,
    SvgIcon: React.FC<React.SVGProps<SVGSVGElement>> | undefined
  ) => void;
  onError?: (err: Error) => void;
}

export function useDynamicSVGImport
(name: string, options: UseDynamicSVGImportOptions = {}) {
  const ImportedIconRef = useRef<React.FC<React.SVGProps<SVGSVGElement>>>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error>();

  const { onCompleted, onError } = options;
  useEffect(() => {
    setLoading(true);
    const importIcon = async (): Promise<void> => {
      try {
        ImportedIconRef.current = (await import(`../../../assets/icons/${name}.svg`)).ReactComponent;
        onCompleted?.(name, ImportedIconRef.current);
      } catch (err) {
        // @ts-ignore
        onError?.(err);
        // @ts-ignore
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    importIcon();
  }, [name, onCompleted, onError]);

  return { error, loading, SvgIcon: ImportedIconRef.current };
}
