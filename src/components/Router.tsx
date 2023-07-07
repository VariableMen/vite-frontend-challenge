import { createContext, useEffect, useState } from 'react';

interface Props {
  children: React.ReactNode;
}

export const RouterContext = createContext('');

export default function Router({ children }: Props) {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const handleOnPopstate = () => {
      setCurrentPath(window.location.pathname);
    };
    window.addEventListener('popstate', handleOnPopstate);
    return () => {
      window.removeEventListener('popstate', handleOnPopstate);
    };
  }, []);

  return (
    <RouterContext.Provider value={currentPath}>
      {children}
    </RouterContext.Provider>
  );
}