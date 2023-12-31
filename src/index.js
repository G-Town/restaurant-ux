import React from 'react';
// import ReactDOM from 'react-dom';
// ReactDOM.render is no longer supported in React 18. Use createRoot instead.
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';

// ReactDOM.render(<App />, document.getElementById('root'));
createRoot(document.getElementById('root')).render(<App />);