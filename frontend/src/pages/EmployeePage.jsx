import { useState } from "react";
import VacationRequestApi from "../api/VacationRequestApi";

export default function EmployeePage() {
  const [vacationData, setVacationData] = useState([]);
  const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

  const handleAddVacationData = (data) => {
    const filtered = data.filter((v) => v.employee.id === loggedInUser.id);
    setVacationData(filtered);
  };

  console.log("### employeepagedata: ", vacationData);

  return (
    <div>
      <VacationRequestApi onDataLoaded={handleAddVacationData} />
      <button>Neue Antrag</button>
      <h2>Urlaubsanfragen:</h2>
      {vacationData.length === 0 ? (
        <p>Keine Urlaubsanfragen vorhanden.</p>
      ) : (
        <ul>
          {vacationData.map((vacation) => (
            <li key={vacation.id}>
              {vacation.employee.firstName} {vacation.employee.lastName} <br />
              Urlaub von: {vacation.starDate} <br />
              Urlaub bis {vacation.enDate} <br />
              Resttage: {vacation.employee.remainingVacationDays} <br />
              Status: {vacation.status} <br />
              Kommentar: {vacation.comment} <br />
              Erstellt am: {vacation.createdAt} <br />
              <br />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
