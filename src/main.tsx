import { createRoot } from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import App from './App.tsx';
import './index.css';
import { Toaster } from 'sonner';

createRoot(document.getElementById('root')!).render(
  <HelmetProvider>
    <App />
    <Toaster richColors position="top-center" />
  </HelmetProvider>
);

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
      .then(registration => {
        console.log('Service Worker registered with scope:', registration.scope);
      }) // <-- fixed this line
      .catch(error => {
        console.error('Service Worker registration failed:', error);
      });
  });
}

window.addEventListener('appinstalled', () => {
  console.log('PWA was installed');
  localStorage.setItem('pwaInstalled', 'true');
});
