import { render } from "react-dom";
import App from './App';

import './styles/reset.css';
import './styles/style.css';

if (module.hot) {
     module.hot.accept();
}

render(<App />, document.querySelector('.root'));