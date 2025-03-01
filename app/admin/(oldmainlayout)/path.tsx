'use client';
import { pathTitle } from './header';
import { useEffect } from 'react';

export default function PagePath(props: {
  id: string;
  title?: string;
  subtitle?: string;
}) {
  const setPathTitle = pathTitle((state) => state.setPathName);

  useEffect(() => {
    setPathTitle(props.title, props.subtitle);
  }, [props]);
  return <></>;
}
