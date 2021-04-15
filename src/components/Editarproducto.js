import React, { Fragment,useState } from 'react';
import {Link} from 'react-router-dom';
import Header from './Header';
import Menulateral from './Menulateral';

const Nuevoproducto = () => {
    return (
        <Fragment>
            <Header/>
                <div className="generarlContainer">
                    <Menulateral/>
                    <div className="principalContainer">
                        <h3 className="text-center title-modal">Agregar producto</h3>
                        <form className="form-agregar">
                            <div className="item-form">
                                <label>Nombre producto</label>
                                <input type="text" placeholder="Nombre producto"/>
                            </div>
                            <div className="item-form">
                                <label>Precio</label>
                                <input type="number" step=".01" placeholder="Precio"/>
                            </div>
                            <div className="item-form">
                                <label>Categoria</label>
                                <select>
                                    <option>--Selecione categoria</option>
                                </select>
                            </div>
                            <div className="item-form">
                                <label>Descripción corta</label>
                                <textarea placeholder="Descripción corta"></textarea>
                            </div>
                            <div className="item-form">
                                <label>Descripción larga</label>
                                <textarea placeholder="Descripción larga"></textarea>
                            </div>
                            <div className="btn-form">
                                <button
                                    className="btn btn-blue"
                                    type="submit"
                                >
                                    Guardar
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
        </Fragment>
    );
}
 
export default Nuevoproducto;