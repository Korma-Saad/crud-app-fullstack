import Nav from "./Nav";
import AddWorker from "./AddWorker";
import Workers from "./Workers";
import UpdateWorker from "./UpdateWorker";
import DeleteWorker from "./DeleteWorker";
import { BrowserRouter, Routes, Route } from "react-router-dom";
export default function Brain() {
    return (
  <BrowserRouter>
    <Routes>
      <Route element={<Nav />} path="/">
        <Route element={<Workers />}  path=""/>
        <Route element={<AddWorker />} path="addWorker" />
        <Route element={<UpdateWorker/>} path="updateWorker"></Route>
        <Route element={<DeleteWorker/>} path="deleteWorker"></Route>
      </Route>
    </Routes>
  </BrowserRouter>)
}
