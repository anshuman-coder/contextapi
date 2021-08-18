import React from "react";
import Navbar from "./Components/Navbar";
import TodosList from "./Components/TodosList";
import  AuthContextProvider  from "./Contexts/AuthContext";
import ThemeContextProvider from "./Contexts/ThemeContext";



function App() {
  return (
    <div className="App">
      <div className="ui raised very padded text container segment" >
        <AuthContextProvider>
          <ThemeContextProvider>
            <Navbar />
            <TodosList />
          </ThemeContextProvider>
        </AuthContextProvider>
      </div>
    </div>
  );
}

export default App;
