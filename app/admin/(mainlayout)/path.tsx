'use client';
import { usePathname } from 'next/navigation';
import { pathTitle } from './header';

export default function PagePath(props: { id: string; title?: string }) {
  const router = usePathname();
  const setPathTitle = pathTitle((state) => state.setPathName);
  return <></>;
}
