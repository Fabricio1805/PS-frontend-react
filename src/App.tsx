import { useState } from 'react';
import { Input } from './components/input/Input'
import { api } from './services/apiClient';
import GlobalStyle from './styles/GlobalStyle';
import logo from '../public/logo.svg';

import * as C from './App';
  
  
function App() {

  const [startDate, setStarDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [operatorName, setOperatorName] = useState("");
      
  /*const test = async () => {
    
   await api.get("/").then((res) => {
      console.log(res.data) 
   });
  }
  console.log(test());*/
  
  const handleFilter = () => {
    console.log("funcionou");6.
  }

  console.log(startDate)
    console.log(endDate);
      console.log(operatorName);


  return (
    <C.Container>
      <img src={logo}/>
      <C.ContainerFilter>
        <label htmlFor="">
          Data de início
          <Input
            type="date"
            value={startDate}
            onChange={(e) => setStarDate(e.target.value)}
          />
        </label>

        <label htmlFor="">
          Data de fim
          <Input
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
          />
        </label>

        <label htmlFor="">
          Nome do operador transacionado
          <Input
            type="text"
            value={operatorName}
            onChange={(e) => setOperatorName(e.target.value)}
          />
        </label>

        <C.Button onClick={handleFilter}>Pesquisar</C.Button>
      </C.ContainerFilter>

      <C.Info>
        <p>Saldo total: R$ 50,00</p>
        <p>Saldo no periodo: R$ 50,00</p>
      </C.Info>

      <C.ContainerTable>
        <table>
          <thead>
            <C.Tr>
              <C.Th>Dados</C.Th>
              <C.Th>Valencia</C.Th>
              <C.Th>Tipo</C.Th>
              <C.Th>Nome operador transacionado</C.Th>
            </C.Tr>
          </thead>

          <tbody>
            <C.Tr>
              <C.td>14/02/2019/</C.td>
              <C.td>R$ 30895,46</C.td>
              <C.td>Depósito</C.td>
              <C.td>Fulano</C.td>
            </C.Tr>
          </tbody>
        </table>
      </C.ContainerTable>

      <GlobalStyle />
    </C.Container>
  );
}

export default App
