import { QueryClient, QueryClientProvider } from 'react-query';

import { Layout } from './layouts';
import { ThemeConfig } from './theme';
import { AppProvider } from './contexts/AppContext';
import Main from './pages/Main';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000,
      retry: false,
      refetchOnReconnect: false,
      refetchOnWindowFocus: false,
    },
  },
});

export const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <AppProvider>
        <ThemeConfig>
          <Layout>
            <Main />
          </Layout>
        </ThemeConfig>
      </AppProvider>
    </QueryClientProvider>
  );
};
