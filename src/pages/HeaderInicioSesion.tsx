import {FC, memo} from 'react';
import styles from "./HeaderInicioSesion.module.css"

const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    window.location.href = "http://localhost:3000/login";
  };


const HeaderInicioSesion: FC = memo(() => (
    <div className={styles.contenedorInicioSesion}>
    <button className={styles.botonHeaderInicioSesion} onClick={handleLogout}>
    Cerrar sesión

  </button>
  </div>

));

HeaderInicioSesion.displayName = 'HeaderInicioSesion';
export default HeaderInicioSesion;
