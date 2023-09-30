import React, { useEffect, useState } from 'react';
import styles from './seccionContactos.module.css';

const ContactosPage = () => {
const [contactos, setContactos] = useState<{ _id: string, name: string, email: string, message: string }[]>([]);


  useEffect(() => {
    obtenerContactos();
  }, []);

  const obtenerContactos = async () => {
    try {
      const response = await fetch('http://localhost:8380/api/contactos');
      if (response.ok) {
        const data = await response.json();
        setContactos(data);
      } else {
        console.log('Error al obtener los contactos');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const numContactos = contactos.length;

  return (
    <div id='contenedor' className={styles.contenedor}>
      <h2 id='cantContactos' className={styles.cantContactos}>
        Tienes {numContactos} contactos:
      </h2>
      <ul id='listaContactos' className={styles.listaContactos}>
        {contactos.map((contacto) => (
          <li
            id='elementoContactos'
            key={contacto._id}
            className={styles.elementoContactos}
          >
            {contacto.name} - {contacto.email} - {contacto.message}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactosPage;
