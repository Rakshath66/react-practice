import './App.css';
import Cart from './components/Cart';
import Item from './components/Item';

function App() {
  return (
    <div className="App">
      <Item name="MacBook-Pro" price={1000}/>
      <Item name="Pendrive" price={100}/>
      <Cart />
    </div>
  );
}

export default App;
