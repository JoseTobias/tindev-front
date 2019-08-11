import React, { useState } from 'react';
import './login.css';

import api from '../services/api';
import logo from '../assets/logo.svg';

export default function Login({ history }) {
  var [username, setUsername] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();

    // Cadastra um dev
    const response = await api.post('/devs', {
        username,
    });
    const { _id } = response.data;

    // redireciona para a seguinte pagina
    history.push(`/dev/${_id}`);
  }
  return (
    <div className="login-container">
      <form onSubmit={handleSubmit}>
        <img src={logo} alt="Tindev"></img>
        <input 
          type="text"
          placeholder="Digite seu usuáio do Github"
          value={username}
          onChange={e => setUsername(e.target.value)} />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}
  
  