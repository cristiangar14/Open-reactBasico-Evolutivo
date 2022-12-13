/**
 * Componente que va a contoner un formulario para autentificacion de usuarios
 */

import React, { useState } from 'react';

const LoginForm = () => {

    const initialCredentials = [
        {
            user: '',
            password: '',
        }
    ]

    const [credencials, setCredencials] = useState(initialCredentials);


    return (
        <div>
            
        </div>
    );
}

export default LoginForm;
