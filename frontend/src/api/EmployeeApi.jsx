import { useEffect, useState } from "react";
import Login from "../pages/Login.jsx";

export default function Config() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/employee")
      .then((res) => res.json())
      .then((data) => {
        setEmployees(data);
      })
      .catch((error) => console.error("Fehler beim laden: ", error));
  }, []);

  console.log("### employye daten: ", employees);

  return (
    <div>
      <h1>Hier sind die Daten der Mitarbeiter</h1>
      {employees.map((employee) => (
        <div key={employee.id}>
          <h2>{employee.firstName}</h2>
        </div>
      ))}
      <Login employees={employees} />
    </div>
  );
}
