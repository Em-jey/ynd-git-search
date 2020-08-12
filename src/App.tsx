import { hot } from 'react-hot-loader/root';
import { AppContainer } from 'react-hot-loader';
import React from 'react';
import { Provider } from 'react-redux';

import MainNavigatin from 'navigation';
import store from 'store';
import 'styles/main.scss';


const App: React.FunctionComponent = () => {
  return(
    <AppContainer>
      <Provider store={ store }>
        <MainNavigatin />
      </Provider>
    </AppContainer>
  );
};

export default hot(App);
