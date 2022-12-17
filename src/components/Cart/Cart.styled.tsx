import styled from 'styled-components';

export const Title = styled.p`
  font-weight: bold;
  font-size: 20px;
  margin-top: 20px;
`;

export const ProductsWrapper = styled.div`
  display: grid;
  width: fit-content;
  grid-template-columns: repeat(2, auto);
  gap: 20px;
`;

export const CheckoutButton = styled.div`
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

  export const QuantityDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5px auto;
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

  export const CartItem = styled.div`
  display:grid;
  `

  export const QuantityButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 20px;
  background: white;
  border-radius: 50%;
  padding: 5px;
  margin: 2px auto;
  cursor: pointer;
  :hover {
    transform: scale(1.2);
    transition: 1s;
  }
  p {
    font-size: 20px;
    margin: 0;
    color: #60c95d;
  }
`;




