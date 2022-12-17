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