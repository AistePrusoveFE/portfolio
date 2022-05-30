import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from './context/theme-context';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <BrowserRouter>
        <React.StrictMode>
            <ThemeProvider initialTheme=''>
                <App />
            </ThemeProvider>
        </React.StrictMode>
    </BrowserRouter>
);
