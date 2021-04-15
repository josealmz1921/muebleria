import React from 'react';
import {Link} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faHome,faStore,faUserAlt,faMoneyBillWave,faBoxOpen,faNetworkWired,faBriefcase} from '@fortawesome/free-solid-svg-icons'

const Menulateral = () => {
    return ( 
        <div className="menuLateral">
            <Link to={'/'}>
                <div>
                    <p><FontAwesomeIcon icon={faHome} /></p>
                    <p>Inicio</p>
                </div>
            </Link>
            <Link to={'/admin/sucursales'}>
                <div>
                    <p><FontAwesomeIcon icon={faStore} /></p>
                    <p>Sucursales</p>
                </div>
            </Link>
            <Link to={'/admin/clientes'}>
                <div>
                    <p><FontAwesomeIcon icon={faUserAlt} /></p>
                    <p>Clientes</p>
                </div>
            </Link>
            <Link to={'/admin/ventas'}>
                <div>
                    <p><FontAwesomeIcon icon={faMoneyBillWave} /></p>
                    <p>Ventas</p>
                </div>
            </Link>
            <Link to={'/admin/productos'}>
                <div>
                    <p><FontAwesomeIcon icon={faBoxOpen} /></p>
                    <p>Productos</p>
                </div>
            </Link>
            <Link to={'/admin/categorias'}>
                <div>
                    <p><FontAwesomeIcon icon={faNetworkWired} /></p>
                    <p>Categorias</p>
                </div>
            </Link>
            <Link to={'/admin/empleados'}>
                <div>
                    <p><FontAwesomeIcon icon={faBriefcase} /></p>
                    <p>Empleados</p>
                </div>
            </Link>
            <Link to={'/admin/'}>
                <div>
                    <p><FontAwesomeIcon icon={faBriefcase} /></p>
                    <p>Pruebas</p>
                </div>
            </Link>
        </div>
     );
}
 
export default Menulateral;