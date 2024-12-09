import logo from './logo.svg';
import './App.css';

// функция App - декларативный стиль, т.к. в коде описывается только финальный результат отрисовки, который хотим получить на выходе
export const App = () => {
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>
				{/* отображение даты - декларативный стиль, т.к. обращение к уже готовым методам */}
				<div className="App-date">{new Date().getFullYear()}</div>
			</header>
		</div>
	);
};
