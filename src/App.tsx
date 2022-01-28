import React from 'react';
import { Layout } from "./layout/Layout/Layout";
import {
  Routes,
  Route,
  BrowserRouter
} from "react-router-dom";
import { Home, Login } from "./page";
import { NotFound } from "./page";

function App() {
  return (<BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Route>
      <Route path="/login" element={<Login/>}>
        <Route path=":userId" element={<Login />} />
      </Route>
    </Routes>
  </BrowserRouter>);
}

export default App;
