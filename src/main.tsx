import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import Routes from './routes.tsx';
import { ArticlesContextProvider } from 'context/Articles.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ArticlesContextProvider>
      <Routes/>
    </ArticlesContextProvider>
  </StrictMode>
);