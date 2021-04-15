import React, { Fragment,useState } from 'react';
import {Link} from 'react-router-dom';
import Header from './Header';
import Menulateral from './Menulateral';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTrash,faPencilAlt} from '@fortawesome/free-solid-svg-icons';


const Categorias = () => {
    return (
        <Fragment>
            <Header/>
                <div className="generarlContainer">
                    <Menulateral/>
                    <div className="principalContainer">
                        <form className="agregar-categoria">
                            <input type="text" placeholder="Nombre categoria"/>
                            <select>
                                <option value="" disabled selected>--Vincular categoria</option>
                                <option>Categoria de prueba</option>
                            </select>
                            <button className="btn btn-blue">Agregar</button>
                        </form>
                        <div className="listado-categorias">
                            <ul>
                                <li>
                                    <div className="categoria">
                                        <p>Categoria 1</p>
                                        <div className="buttons-contaier">
                                            <button className="btn"><FontAwesomeIcon icon={faPencilAlt}/></button>
                                            <button className="btn"><FontAwesomeIcon icon={faTrash}/></button>
                                        </div>
                                    </div>
                                    <ul>
                                        <li>
                                            <div className="subCategoria">
                                                <p>Producto 1</p>
                                                <div className="buttons-contaier">
                                                    <button className="btn btn-edit"><FontAwesomeIcon icon={faPencilAlt}/></button>
                                                    <button className="btn btn-delete"><FontAwesomeIcon icon={faTrash}/></button>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div>
                                            <div className="subCategoria">
                                                <p>Producto 2</p>
                                                <div className="buttons-contaier">
                                                    <button className="btn btn-edit"><FontAwesomeIcon icon={faPencilAlt}/></button>
                                                    <button className="btn btn-delete"><FontAwesomeIcon icon={faTrash}/></button>
                                                </div>
                                            </div>
                                            </div>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
            </div>
        </Fragment>
    );
}
 
export default Categorias;