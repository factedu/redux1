
import {Provider} from 'react-redux'
import CountBy2 from './components/CountBy2';
import Counter from './components/Counter';
import CountMinusBtn from './components/CountMinusBtn';
import CountPlusBtn from './components/CountPlusBtn';
import store from './store';
function App() {
  return (
    <Provider store={store}>
      <Counter />
      <CountBy2 />
      <CountMinusBtn />
      <CountPlusBtn/>
    </Provider>
  );
}

export default App;
