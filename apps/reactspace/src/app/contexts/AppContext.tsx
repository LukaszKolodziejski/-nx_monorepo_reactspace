import { createContext, ReactNode, useEffect, useState } from 'react';

import { useList } from '../hooks/useList';
import { AppContextType } from './types';

const AppContext = createContext<AppContextType | null>(null);

const AppProvider = ({ children }: { children: ReactNode }) => {
  const { data, isLoading, isError } = useList();

  const [appListData, setAppListData] = useState<any>(null);

  useEffect(() => {
    setAppListData({ data, isLoading, isError });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  return (
    <AppContext.Provider value={{ ...appListData }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
