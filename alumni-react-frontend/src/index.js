import './index.css';
import reportWebVitals from './reportWebVitals';
import Routes from './route';
import { render } from 'react-dom';


//root element of the project
const rootElement = document.getElementById('root');


export function renderApp() {

    return <Routes />
}
render(renderApp(), (rootElement));
// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
