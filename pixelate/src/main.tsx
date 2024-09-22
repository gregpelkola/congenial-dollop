import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { CssBaseline } from '@mui/material';

const container = document.getElementById('root');
const root = createRoot(container!); // createRoot(container!) if you use TypeScript
root.render(
    <React.StrictMode>
        <CssBaseline />
        <App />
    </React.StrictMode>
);