import React, { Fragment,useState } from 'react';
import Header from './Header';
import Menulateral from './Menulateral';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPlus,faTrashAlt,faPencilAlt} from '@fortawesome/free-solid-svg-icons';

const Productos = ({history}) => {

    return (
        <Fragment>
            <Header/>
                <div className="generarlContainer">
                    <Menulateral/>
                    <div className="principalContainer">
                        <div className="nav-table">
                            <button 
                            className="btn btn-blue"
                            onClick={()=>{
                                history.push('/admin/nuevoproducto');
                            }}
                            ><FontAwesomeIcon icon={faPlus}/> Agregar productos </button>
                        </div>
                        <div className="table-container">
                            <table>
                                <thead>
                                    <tr>
                                        <td>Nombre</td>
                                        <td>Costo</td>
                                        <td>Categoria</td>
                                        <td className="text-center">Acciones</td>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Cama matrimonial spring air</td>
                                        <td>$ 1500.00</td>
                                        <td>Colchones</td>
                                        <td className="button-table">
                                            <button className="btn btn-delete"><FontAwesomeIcon icon={faTrashAlt}/></button>
                                            <button
                                            className="btn btn-edit"
                                            onClick={()=>{
                                                history.push('/admin/editarproducto');
                                            }}
                                            ><FontAwesomeIcon icon={faPencilAlt}/></button>
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
 
export default Productos;