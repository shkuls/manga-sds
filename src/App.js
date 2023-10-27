import './App.css';
import {Auth} from "../src/pages/auth/index"
import { BrowserRouter , Route , Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Auth/>}/>
        <Route path="/exp" element={<p>hey</p>}/>
      </Routes>
    </div>
  );
}

export default App;
