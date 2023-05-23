import './App.css';
import CreateFaceMask from './component/CreateFaceMask';
import ListProduct from './component/ListProduct';
import { Routes, Route } from "react-router-dom";
import UpdateFaceMask from './component/UpdateFaceMask';

function App() {
  return (
    <Routes>
      <Route path="" element={<ListProduct />} />
      <Route path="/creatFaceMask" element={<CreateFaceMask />} />
      <Route path="/updateFaceMask/:id" element={<UpdateFaceMask />} />
    </Routes>
  );
}

export default App;
