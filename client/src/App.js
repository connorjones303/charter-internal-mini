import AppRoutes from './AppRoutes';
import { AppContextProvider } from './AppContextProvider';

export default function App() {
  return (
    <AppContextProvider>
      <AppRoutes />
    </AppContextProvider>
  );
}