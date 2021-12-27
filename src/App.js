import logo from "./logo.svg";
import "./App.css";
import Form from "./component/Form";
import Table from "./component/Table";
import Navbar from "./component/Navbar";
import Update from "./component/Update";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Errorpage from "./component/Errorpage";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Form />}></Route>
        <Route path="/allData" element={<Table />}></Route>
        <Route path="/edit/:id" element={<Update />}></Route>
        <Route path="*" element={<Errorpage />}></Route>
      </Routes>
    </>
  );
}

export default App;
