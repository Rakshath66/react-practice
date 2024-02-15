import './App.css';
import MyButton from './components/Button';

function App() {
  return (
    <div className="App">
      {/* <MyButton text={"Click Me"}/> */}
      <MyButton onClick={() => alert("hi again")} text="Click Me Again!"/>
    </div>
  );
}

export default App;
