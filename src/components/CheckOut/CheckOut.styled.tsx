import styled from 'styled-components';

export const Title = styled.p`
  font-weight: bold;
  font-size: 20px;
  margin-top: 20px;
`;

export const ProductsWrapper = styled.div`
  display: grid;
  width: fit-content;
  grid-template-columns: repeat(1, auto);
  gap: 20px;
`;

export const CheckOutTable = styled.table`
  width:500px;
  height: auto;
  min-height: 25%;
  text-align: center;
  border: none;
  border-collapse: collapse;
  padding: 0;
  margin: 0;
  thead{
    background-color: #332d2d;
    height:50px;
    color: white;
  }
  tbody{
    height:50px;
    background-color: #ecedf0;
  }
  tr{
    border: 1px solid lightgray;
    height:50px;
  }
  
`;

export const OrderButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  width: 150px;
  height: 50px;
  background: #60c95d;
  border-radius: 10px;
  padding: 5px;
  cursor: pointer;
  :hover {
    background: #77c43b;
    transition: 0.3s;
  }
  p {
    font-size: 20px;
    margin: 0;
    color: white;
  }
  `
