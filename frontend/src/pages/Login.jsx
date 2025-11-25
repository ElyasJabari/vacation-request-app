import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login({ employees }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  console.log("### mail: ", email);
  console.log("### Password: ", password);

  const handleLogin = () => {
    const user = employees.find(
      (emp) => emp.email === email && emp.passwordHash === password
    );

    if (user) {
      if (user.role === "Admin") {
        navigate("admin");
      } else {
        navigate("employee");
      }
    } else {
      setError("E-Mail oder Passwort falsch");
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <div>
        <label>E-Mail:</label>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label>Passwort:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <button onClick={handleLogin}>Einloggen</button>
    </div>
  );
}
