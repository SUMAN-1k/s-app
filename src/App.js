import logo from './logo.svg';
import './App.css';

function App() {

  function doit()
  {
      console.log("hey,you clicked me");
  }


  return(
  <button className="btt" name="butt" onClick={doit}>CLICK ME</button>
  )
}

export default App;
