import {
  BrowserRouter,
} from 'react-router-dom';
import { AlbumRoutes } from 'routes';

const App = () => (
  <BrowserRouter>
    <AlbumRoutes />
  </BrowserRouter>
);

export default App;
