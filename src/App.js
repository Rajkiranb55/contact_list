import Nav from "./components/Nav";
import { Route, Routes, Link } from "react-router-dom";
import HomePage from "./components/HomePage";
import { useDispatch } from "react-redux";
import React, { useEffect, useState } from "react";
import AddContact from "./components/AddContact";
import EditContact from "./components/EditContact";
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const data = [];
    const promise = async () => {
      await fetch("https://jsonplaceholder.typicode.com/users/")
        .then((response) => response.json())
        .then((json) => {
          json.map((contact) => {
            data.push({
              id: contact.id,
              name: contact.name,
              number: contact.phone,
              email: contact.email,
            });
          });
        });
      dispatch({ type: "FETCH_CONTACTS", payload: data });
    };
    promise();
  }, []);

  return (
    <div className="App">
      <div className="Container">
        <Nav />
        <Routes>
          <Route path="/add" element={<AddContact />}></Route>
          <Route exact path="/contact_list" element={<HomePage />}></Route>
          <Route path="/edit/:id" element={<EditContact />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
