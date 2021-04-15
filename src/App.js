import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Login from './components/Login';
import Productos from './components/Productos';
import Sucursales from './components/Sucursales';
import Empleados from './components/Empleados'; 
import Clientes from './components/Clientes';
import Ventas from './components/Ventas';
import Categorias from './components/Categorias';
import Nuevoproducto from './components/Nuevoproducto';
import Editarproducto from './components/Editarproducto';
import Inicioadmin from './components/Inicioadmin';

function App() {

  return (
    <Router>
      {/* <Provider store={store}> */}
        <div className="container mt-5">
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/admin/productos" component={Productos} />
            <Route exact path="/admin/sucursales" component={Sucursales} />
            <Route exact path="/admin/empleados" component={Empleados} />
            <Route exact path="/admin/clientes" component={Clientes} />
            <Route exact path="/admin/ventas" component={Ventas} />
            <Route exact path="/admin/categorias" component={Categorias} />
            <Route exact path="/admin/nuevoproducto" component={Nuevoproducto} />
            <Route exact path="/admin/editarproducto" component={Editarproducto}/>
            <Route exact path="/admin/" component={Inicioadmin}/>
          </Switch>
        </div>
      {/* </Provider> */}
    </Router> 
  );
}

export default App;
