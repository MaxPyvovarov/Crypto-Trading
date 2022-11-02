import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

export const Animation = {
	hidden: {
		opacity: 0,
	},
	visible: {
		opacity: 1,
	},
};

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
