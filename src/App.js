import { useEffect, useState } from 'react';
import './App.css';
import Popup from './component/popup';
import Thumoi from './component/thumoi';

function App() {
  const [display, setDisplay] = useState(false)
  useEffect(() => {
    localStorage.getItem("nameF10") && setDisplay(true)
  })
  return (
    <div className="App">
      {display ? <Thumoi /> : <Popup />
      }

    </div>
  );
}

export default App;
