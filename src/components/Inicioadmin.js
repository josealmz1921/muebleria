import React, { Fragment } from 'react';
import Header from './Header';
import Menulateral from './Menulateral';

const Inicioadmin = () => {

    return ( 
        <Fragment>
            <Header/>
            <div className="generarlContainer">
                <Menulateral/>
                <div className="principalContainer">
                    
                </div>
            </div>
        </Fragment>
    );
}
 
export default Inicioadmin;