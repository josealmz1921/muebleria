import React from 'react';
import {Link} from 'react-router-dom';
const Login = () => {
    return (
        <div className="login">
            <form className="form-login">
                <h1 className="text-with text-center">Inicio de sesión</h1>
                <input placeholder="Usuario" type="text" />
                <input placeholder="Contraseña" type="password"/>
                <button className="btn btn-blue">Iniciar Sesión</button>
            </form>
            <Link to={'/admin/productos'}>Productos</Link>
            <Link to={'/admin/sucursales'}>Sucursales</Link>
        </div>
     );
}
 
export default Login;