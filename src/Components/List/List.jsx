import { Button } from "react-bootstrap";
import React, { useState, useEffect } from "react";

function List() {
  const [data, setData] = useState([]);

  useEffect(() => {
    let eventSource = new EventSource(
      "https://syooklvltwo.herokuapp.com/stream"
    );
    eventSource.onmessage = (e) => updateProdutList(e.data);
  }, []);

  const updateProdutList = (product) => {
    let val = JSON.parse(product);
    let temp = [...val,...data]
    setData(temp);
  };

  return (
    <div>
      <Button
        variant="danger"
        onClick={() => {
          localStorage.clear();
          window.location.replace('/login');
        }}
      >
        Logout
      </Button>
      <table className="table table-hover">
        <thead className="thead-dark">
          <tr>
            <th>Name</th>
            <th>Origin</th>
            <th>Destination</th>
            <th>time</th>
          </tr>
        </thead>
        <tbody>
          {data && data.map((p) => (
            <tr key={p.Id}>
              <td>{p.name}</td>
              <td>{p.origin}</td>
              <td>{p.destination}</td>
              <td>{p.timestamp}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default List;
