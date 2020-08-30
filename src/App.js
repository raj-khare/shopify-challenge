import React from "react";
import Home from "./containers/Home";
import Nomination from "./containers/Nomination";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import { ToastContainer, Slide } from "react-toastify";
function App() {
  return (
    <div className="App">
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        transition={Slide}
        rtl={false}
        pauseOnFocusLoss={false}
        draggable={false}
        pauseOnHover={false}
      />
      <Home />
      <Nomination />
    </div>
  );
}

export default App;
