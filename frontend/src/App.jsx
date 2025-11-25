import { BrowserRouter, Routes, Route } from "react-router-dom";
import EmployeeApi from "./api/EmployeeApi";
import AdminPage from "./pages/AdminPage";
import EmployeePage from "./pages/EmployeePage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<EmployeeApi />}></Route>
          <Route path="/admin" element={<AdminPage />}></Route>
          <Route path="/employee" element={<EmployeePage />}></Route>
        </Routes>
      </BrowserRouter>
      <div></div>
    </>
  );
}
export default App;
