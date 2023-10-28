import './App.css';
import {Auth} from "../src/pages/auth/index"
import { BrowserRouter , Route , Routes } from 'react-router-dom';
import { UploadPage } from '../src/pages/uploadPage/index';
import MyMangas from './pages/myMangas';



function App() {
  return (
    <div className="App">
      
      <Routes>
        <Route path="/" element={<Auth/>}/>
        <Route path="/uploadPage" element={<UploadPage/>}/>
        <Route path="/myMangas" element={<MyMangas/>}/>
      </Routes>
    </div>
  );
}

export default App;
