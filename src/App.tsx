import React from "react";
import "./App.css";
import { UserContextProvider } from "./context/userContext";
import { User } from "./context/user";

function App() {
  return <UserContextProvider> <User /> </UserContextProvider>
}

export default App;
