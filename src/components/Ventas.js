import React, { Fragment,useState } from 'react';
import {Link} from 'react-router-dom';
import Header from './Header';
import Menulateral from './Menulateral';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTrashAlt} from '@fortawesome/free-solid-svg-icons';

const Ventas = () => {
    return (
        <Fragment>
            <Header/>
                <div className="generarlContainer">
                    <Menulateral/>
                    <div className="principalContainer">
                        <form className="filtros-ventas">
                            <select>
                                <option value="" disabled selected>--Sucursal</option>
                            </select>
                            <input type="date"/>
                            <input type="date"/>
                            <button className="btn btn-blue" type="submit">Buscar</button>
                        </form>
                        <div className="table-container">
                            <table>
                                <thead>
                                    <tr>
                                        <td>Producto</td>
                                        <td>Vendedor</td>
                                        <td>Tipo de pago</td>
                                        <td>Sucursal</td>
                                        <td>Precio</td>
                                        <td>Cantidad</td>
                                        <td>Fecha</td>
                                        <td>Acciones</td>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Cama matrimonial spring air</td>
                                        <td>Faustino Rodenas</td>
                                        <td>12 memese sin intereses</td>
                                        <td>Pachuca de soto</td>
                                        <td>$ 3600.00</td>
                                        <td className="text-center">2</td>
                                        <td>2021-04-14</td>
                                        <td className="button-table">
                                            <button className="btn btn-delete"><FontAwesomeIcon icon={faTrashAlt}/></button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Cama matrimonial spring air</td>
                                        <td>Faustino Rodenas</td>
                                        <td>12 memese sin intereses</td>
                                        <td>Pachuca de soto</td>
                                        <td>$ 3600.00</td>
                                        <td className="text-center">2</td>
                                        <td>2021-04-14</td>
                                        <td className="button-table">
                                            <button className="btn btn-delete"><FontAwesomeIcon icon={faTrashAlt}/></button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Cama matrimonial spring air</td>
                                        <td>Faustino Rodenas</td>
                                        <td>12 memese sin intereses</td>
                                        <td>Pachuca de soto</td>
                                        <td>$ 3600.00</td>
                                        <td className="text-center">2</td>
                                        <td>2021-04-14</td>
                                        <td className="button-table">
                                            <button className="btn btn-delete"><FontAwesomeIcon icon={faTrashAlt}/></button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
            </div>
        </Fragment>
    );
}
 
export default Ventas;