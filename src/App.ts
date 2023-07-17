import styled from "styled-components";

export const Button = styled.button`
  background-color: green;
  border: 0;
  align-items: center;
  padding: 15px;
  border-radius: 15px;
  color: #fff;
  font-weight: bold;
  margin-top: 10px;
`;

export const Container = styled.header`
  height: 198px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`; 



export const Info = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  p {
    margin: 5px;
  }

  b {
    font-size: 1.3rem;
  }
`;


export const ContainerFilter = styled.div`
  margin: 20px;
  label {
    display: block;
    color: #fff;
  }
`;


export const ContainerTable = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  table {
    border-collapse: collapse;
    margin: auto;
    background-color: #FFF;
    width: 70%;
  }
`;


export const Tr = styled.tr`
`;

export const Th = styled.th`
  padding: 10px;
  text-align: center;
  width: 120px;
  font-weight: bold;
`;

export const td = styled.td`
  padding: 10px;
  text-align: center;
  width: 120px;
`;