import { useContext } from 'react';
import { RouterContext } from './Router';

interface Props {
  path: string;
  component: React.ReactNode;
}

export default function Route({ path, component }: Props) {
  const currentPath = useContext(RouterContext);

  return <>{currentPath === path && component}</>;
}