import Form from './Form';
import React from 'React';
import ReactDOM from 'ReactDOM';

import {AppContainer} from 'react-hot-loader';

function render(App) {
  ReactDOM.render(
    <AppContainer>
      <App />
    </AppContainer>,
    document.getElementById('root')
  );
}

if (module.hot) {
  module.hot.accept('./Form', () => {
    render(Form);
  });
}

render(Form);
