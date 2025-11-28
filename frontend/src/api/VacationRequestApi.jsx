import { useEffect, useState } from "react";

export default function VacationRequestApi({ onDataLoaded }) {
  const [vacationData, setVacationData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/vacation")
      .then((res) => res.json())
      .then((data) => {
        setVacationData(data);
        onDataLoaded(data);
      })
      .catch((error) => console.error("Fehler beim laden: ", error));
  }, []);

  console.log("### VacationRequest: ", vacationData);
  return null;
}
