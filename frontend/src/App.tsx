import { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [data, setData] = useState([]);
  const url = "http://localhost:4000/employees";

  const getData = async () => {
    try {
      const response = await fetch(url);
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  data.length > 0 && console.log(data[0]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
