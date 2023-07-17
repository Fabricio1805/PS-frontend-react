import { useEffect, useState } from 'react';
import { Input } from './components/input/Input'
import { api } from './services/apiClient';
import GlobalStyle from './styles/GlobalStyle';
import logo from './assets/logo.svg';

import * as C from './App';
import { formatDate } from './utils/FormatDate';
import formatCurrency from './utils/formatCurrenct';
import { toast } from 'react-toastify';
  
interface ITransaction {
  id: number;
  data_transferencia: string;
  valor: number;
  tipo: string;
  nome_operador_transacao: string;
  conta_id: number;
}
  
function App() {

  const [startDate, setStarDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [operatorName, setOperatorName] = useState("");

  const [totalPeriod, setTotalPeriod] = useState<number>(0);
  const [total, setTotal] = useState<number>(0);

  const [transaction, setTransaction] = useState<ITransaction[]>([]);

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const response = await api.get("/");
        const data = response.data as ITransaction[];

        const total = data.reduce(
          (acc, allTransaction) => acc + allTransaction.valor,
          0
        );
        setTotal(total);
      } catch (error) {
        console.error(error);
      }
    };

    fetchTransactions().catch((error) => {
      console.error(error);
    });
  }, []);


  useEffect(() => {
    const calculateTotalValue = (transactions: ITransaction[]): number => {
      return transactions.reduce(
        (total, transaction) => total + transaction.valor,
        0
      );
    };

    setTotalPeriod(calculateTotalValue(transaction));
  }, [transaction]);


  const handleFilter = () => {
    switch (true) {
      case !!operatorName:
        api
          .get("/operatorName", { params: { nomeOperador: operatorName } })
          .then((res) => {
            setTransaction(res.data as ITransaction[]);
          })
          .catch(() => {
             toast.warn("Nenhuma Transação encontrada.");
          });
        break;
      case !!startDate && !!endDate:
        api
          .get("/betweenDate", {
            params: { startDate, endDate },
          })
          .then((res) => {
            setTransaction(res.data as ITransaction[]);
          })
          .catch(() => {
            toast.warn("Nenhuma Transação encontrada.");
          });
        break;
      case !!startDate && !!endDate && !!operatorName:
        api
          .get("/allParams", {
            params: { startDate, endDate, nomeOperador: operatorName },
          })
          .then((res) => {
            setTransaction(res.data as ITransaction[]);
          })
          .catch(() => {
             toast.warn("Nenhuma Transação não encontrada.");          });
        break;
      default:
        api
          .get("/")
          .then((res) => {
            setTransaction(res.data as ITransaction[]);
          })
          .catch(() => {
            toast.warn("Nenhuma Transação não encontrada.");
          });
        break;
    }
  };

  return (
    <>
      <C.Container>
        <img src={logo} />
        <GlobalStyle />
      </C.Container>

      <C.Content>
        <C.ContainerFilter>
          <label>Data de início</label>
          <Input
            type="date"
            value={startDate}
            onChange={(e) => setStarDate(e.target.value)}
          />
        </C.ContainerFilter>
        <C.ContainerFilter>
          <label htmlFor="">Data de fim</label>
          <Input
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
          />
        </C.ContainerFilter>

        <C.ContainerFilter>
          <label>Nome do operador transacionado</label>
          <Input
            type="text"
            value={operatorName}
            onChange={(e) => setOperatorName(e.target.value)}
          />
        </C.ContainerFilter>

        <C.Button onClick={handleFilter}>Pesquisar</C.Button>
      </C.Content>
      <C.Info>
        <p>Saldo total: </p>
        <b>{formatCurrency(total)}</b>

        <p>Saldo no periodo:</p>
        <b>{formatCurrency(totalPeriod)}</b>
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
            {transaction.map((trans) => {
              return (
                <C.Tr key={trans.id}>
                  <C.td>{formatDate(trans.data_transferencia)}</C.td>
                  <C.td>{formatCurrency(trans.valor)}</C.td>
                  <C.td>{trans.tipo}</C.td>
                  <C.td>{trans.nome_operador_transacao}</C.td>
                </C.Tr>
              );
            })}
          </tbody>
        </table>
      </C.ContainerTable>
    </>
  );
}

export default App
