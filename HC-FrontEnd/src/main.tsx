import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './globals.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './routes/Home/index.tsx';
import Integrantes from './routes/Integrantes/index.tsx';
import FAQ from './routes/FAQ/index.tsx';
import Error from './routes/Error/index.tsx';
import Contato from './routes/Contato/index.tsx';
import Solucao from './routes/Solucao/index.tsx';

const router = createBrowserRouter([
  {path: "/", element: <App/>, errorElement: <Error/>, children: [
    {path: "/", element: <Home/>},
    {path: "/integrantes", element: <Integrantes/>},
    {path: "/faq", element: <FAQ/>},
    {path: "/contato", element: <Contato/>},
    {path: "/acessibilidade", element: <Solucao/>},
    {path: "/videos", element: <Solucao/>}
  ]}
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
);