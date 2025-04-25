import {NavigationContainer} from '@react-navigation/native';
import RootNavigation from './example/router/rootNavigation';
import {Provider} from 'react-redux';
import {store} from './example/store';

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <RootNavigation />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
