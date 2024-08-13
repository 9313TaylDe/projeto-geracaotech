import React, { useState } from "react";

export function ProfileSave() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const Save = () => {
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);
    alert("usuario criado");
  };
  return (
    <div>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={Save}>Cadastrar</button>
    </div>
  );
}
