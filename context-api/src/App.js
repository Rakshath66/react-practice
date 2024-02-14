import { useContext } from 'react';
import './App.css';
import Counter from './components/Counter';
import { CounterContext } from './context/Counter';

function App() {
  //acessing state data inside context
  const counterState = useContext(CounterContext);
  return (
    <div className="App">
      <h1>Count is {counterState.count}</h1>
      <Counter />
      <Counter />
      <Counter />
      <Counter />
    </div>
  );
}

export default App;
