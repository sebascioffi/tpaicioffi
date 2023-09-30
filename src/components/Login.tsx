import React, { useState } from "react";
import styles from './Login.module.css';

interface Props {}

const Login: React.FC<Props> = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const response = await fetch("http://localhost:8380/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ username, password })
      });

      if (response.ok) {
        console.log("Datos correctos");
        localStorage.setItem("isLoggedIn", "true");
        window.location.href = "http://localhost:3000/InicioSesion";
      } else {
        console.log("Datos incorrectos");
        alert('Los datos ingresados son incorrectos');
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div id="acceder" className={styles['login-container']}>
      <form className={styles['form-container']} onSubmit={handleSubmit}>
        <div className={styles["form-group"]}>
          <label className={styles['label-container']} htmlFor="username">Usuario:</label>
          <input
            className={styles['input-container']}
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className={styles["form-group"]}>
          <label className={styles['label-container']} htmlFor="password">Contraseña:</label>
          <input
            className={styles['input-container']}
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button className={styles['button-container']} type="submit">Iniciar Sesión</button>
      </form>
    </div>
  );
};

export default Login;   