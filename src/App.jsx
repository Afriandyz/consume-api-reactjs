import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users/")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <div>
        Hello World
        <ul>
          {data.map((data) => (
            <li key={data.id}>{data.name}</li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
