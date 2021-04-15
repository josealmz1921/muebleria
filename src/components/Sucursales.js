import React, { Fragment,useState } from 'react';
import {Link} from 'react-router-dom';
import Header from './Header';
import Menulateral from './Menulateral';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPlus} from '@fortawesome/free-solid-svg-icons';



const Sucursales = () => {


    return (
        <Fragment>
            <Header/>
                <div className="generarlContainer">
                    <Menulateral/>
                    <div className="principalContainer">
                        <div className="nav-table">
                            <button className="btn btn-blue"><FontAwesomeIcon icon={faPlus}/> Agregar Sucursal </button>
                        </div>
                        <div className="table-container">
                            <table>
                                <thead>
                                    <tr>
                                        <td>Nombre</td>
                                        <td>Dirección</td>
                                        <td>Encargado</td>
                                        <td>Acciones</td>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Nombre</td>
                                        <td>Dirección</td>
                                        <td>Encargado</td>
                                        <td>Acciones</td>
                                    </tr>
                                    <tr>
                                        <td>Nombre</td>
                                        <td>Dirección</td>
                                        <td>Encargado</td>
                                        <td>Acciones</td>
                                    </tr>
                                    <tr>
                                        <td>Nombre</td>
                                        <td>Dirección</td>
                                        <td>Encargado</td>
                                        <td>Acciones</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
            </div>
        </Fragment>
    );
}
 
export default Sucursales;