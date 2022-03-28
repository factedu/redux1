
import {Provider} from 'react-redux'
import { BrowserRouter } from 'react-router-dom';
import CountBy2 from './components/CountBy2';
import Counter from './components/Counter';
import CountMinusBtn from './components/CountMinusBtn';
import CountPlusBtn from './components/CountPlusBtn';
import RootRouter from './screens/rootRouter';
import store from './store';
function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <RootRouter/>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
