
import {QueryClient, QueryClientProvider} from '@tanstack/react-query'
import Excuse from './Excuse';
const client = new QueryClient;
const App = () => {
  return (
    <QueryClientProvider client={client}>
      <Excuse />
    </QueryClientProvider>
  );
};

export default App;