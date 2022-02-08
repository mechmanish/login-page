import React from "react";
import './App.css';
import Login from "./component/fbLogin";

const App = () => {

  const loginData = [
    {
      id: 123,
      emailAdd : "abcd@gmail.com",
      phone_no : 9988776655,
      password : "aaaaa"
    },
    {
      id: 124,
      emailAdd : "abcde@gmail.com",
      phone_no : 9988776644,
      password : "bbbbb"
    },
    {
      id: 125,
      emailAdd : "abcdef@gmail.com",
      phone_no : 9988776633,
      password : "ccccc"
    },
    {
      id: 126,
      emailAdd : "abcdefg@gmail.com",
      phone_no : 9988776622,
      password : "ddddd"
    },
    {
      id: 127,
      emailAdd : "abcdefgh@gmail.com",
      phone_no : 9988776611,
      password : "eeeee"
    }
  ];



  return (
    <div className="App">
      <Login loginData={loginData} />
    </div>
  );
}

export default App;
