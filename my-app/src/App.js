import React from 'react';
import logo from './logo.svg';
import './App.css';

//без использования jsx
export const App = () => {
	return React.createElement(
		'div',
		{ className: 'App' },
		React.createElement('header', { className: 'App-header' }, [
			React.createElement(
				'img',
				{ src: logo, className: 'App-logo', alt: 'logo' },
				null,
			),
			React.createElement(
				'p',
				null,
				'Edit <code>src/App.js</code> and save to reload.',
			),
			React.createElement(
				'a',
				{
					className: 'App-link',
					href: 'https://reactjs.org',
					target: '_blank',
					rel: 'noopener noreferrer',
				},
				'Learn React',
			),
			React.createElement(
				'div',
				{ className: 'App-date' },
				`${new Date().getFullYear()}`,
			),
		]),
	);
};

// // функция App - декларативный стиль, т.к. в коде описывается только финальный результат отрисовки, который хотим получить на выходе
// export const App = () => {
// 	return (
// 		<div className="App">
// 			<header className="App-header">
// 				<img src={logo} className="App-logo" alt="logo" />
// 				<p>
// 					Edit <code>src/App.js</code> and save to reload.
// 				</p>
// 				<a
// 					className="App-link"
// 					href="https://reactjs.org"
// 					target="_blank"
// 					rel="noopener noreferrer"
// 				>
// 					Learn React
// 				</a>
// 				{/* отображение даты - декларативный стиль, т.к. обращение к уже готовым методам */}
// 				<div className="App-date">{new Date().getFullYear()}</div>
// 			</header>
// 		</div>
// 	);
// };
