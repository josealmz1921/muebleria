import React,{useState} from 'react';

function App() {

  const [lista, guarsarLista] = useState([]);

  const generarLista = (valor) =>{
    guarsarLista([...lista,valor]);
    console.log(lista);
  }

  return (
    <div>
      <button
      onClick={() => generarLista(1)}
      >Lista</button>
      {lista.map(item => (
        <p>{item}</p>
      ))}
    </div>
  );
}

export default App;
