import HomePage from "./components/homepage";
import AddPost from "./components/addpost";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/addpost' element={<AddPost/>}/>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
