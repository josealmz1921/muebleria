import React, { Fragment } from 'react';

const Agregarsucursal = () => {
    return ( 
        <Fragment>
            <Header/>
                <div className="generarlContainer">
                    <Menulateral/>
                    <div className="principalContainer">
                        <h3 className="text-center title-modal">Agregar sucursal</h3>
                        <form className="form-agregar">
                            <div className="item-form">
                                <label>Nombre producto</label>
                                <input type="text" placeholder="Nombre producto"/>
                            </div>
                            <div className="item-form">
                                <label>Cantidad</label>
                                <input type="text" placeholder="Cantidad"/>
                            </div>
                            <div className="item-form">
                                <label>Categoria</label>
                                <select>
                                    <option>--Selecione categoria</option>
                                </select>
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
 
export default Agregarsucursal;