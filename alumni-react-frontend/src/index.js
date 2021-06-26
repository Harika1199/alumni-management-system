import './index.css';
import reportWebVitals from './reportWebVitals';
import Routes from './route';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import RootReducer from './rootReducer';
import { createStore } from 'redux';


//root element of the project
const rootElement = document.getElementById('root');

//Create Store
const store = createStore(RootReducer);

export function renderApp() {

    return (
        <Provider store={store}>
            <Routes />
        </Provider>)
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
