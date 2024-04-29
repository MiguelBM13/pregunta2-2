import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
    const [estudiante, setEstudiante] = useState({
        nombres: '',
        apellidos: '',
        fechaNacimiento: '',
        direccion: '',
        telefono: ''
    });
    const [mostrarDatos, setMostrarDatos] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setMostrarDatos(true);
        setTimeout(() => {
            setMostrarDatos(false);
            setEstudiante({
                nombres: '',
                apellidos: '',
                fechaNacimiento: '',
                direccion: '',
                telefono: ''
            });
        }, 7000);
    };

    const handleChange = (e) => {
        setEstudiante({ ...estudiante, [e.target.name]: e.target.value });
    };

    return (
        <div className="App">
            <h1>Registro de Estudiante</h1>
            {!mostrarDatos ? (
                <form onSubmit={handleSubmit}>
                    <label>
                        Nombres:
                        <input type="text" name="nombres" value={estudiante.nombres} onChange={handleChange} />
                    </label>
                    <label>
                        Apellidos:
                        <input type="text" name="apellidos" value={estudiante.apellidos} onChange={handleChange} />
                    </label>
                    <label>
                        Fecha de Nacimiento:
                        <input type="date" name="fechaNacimiento" value={estudiante.fechaNacimiento} onChange={handleChange} />
                    </label>
                    <label>
                        Dirección:
                        <input type="text" name="direccion" value={estudiante.direccion} onChange={handleChange} />
                    </label>
                    <label>
                        Teléfono:
                        <input type="tel" name="telefono" value={estudiante.telefono} onChange={handleChange} />
                    </label>
                    <button type="submit">Registrar</button>
                </form>
            ) : (
                <div>
                    <h2>Datos del Estudiante:</h2>
                    <p><strong>Nombres:</strong> {estudiante.nombres}</p>
                    <p><strong>Apellidos:</strong> {estudiante.apellidos}</p>
                    <p><strong>Fecha de Nacimiento:</strong> {estudiante.fechaNacimiento}</p>
                    <p><strong>Dirección:</strong> {estudiante.direccion}</p>
                    <p><strong>Teléfono:</strong> {estudiante.telefono}</p>
                </div>
            )}
        </div>
    );
}

export default App;

