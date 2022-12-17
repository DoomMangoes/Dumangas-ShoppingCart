import { useContext } from 'react';
import { CartContext } from '../useContext';
import { ProductsWrapper, Title, CheckOutTable, OrderButton } from './CheckOut.styled';


export const CheckOut = () => {
  const {products, total} = useContext(CartContext);
  const tableHead = ["Item", "Price", "Quantity", "Amount"];
 
  return (
    <>
      <Title>Check out Cart</Title>
      <ProductsWrapper>
      <CheckOutTable>
        <thead>
          <tr>
          {tableHead.map(head => <th>{head}</th>)}
          </tr>
         </thead>
          <tbody>
            {products.map(product => 
                <tr key={product.id}>
                <td>{product.name} </td>
                <td>${product.price}.00 </td>
                <td>{product.quantity} </td>
                <td> ${product.price * product.quantity}.00 </td>
               </tr>
               )}

           { (total != 0) && <tr>
              <td></td>
              <td></td>
              <td>Total Amount:</td>
              <td>${total}.00</td>
              </tr> 
              
          }  
          </tbody>
        
      </CheckOutTable>

     {total != 0 &&
      <OrderButton onClick={() =>  alert('Items are scheduled for delivery!')}>
      <p>Order Items</p>
    </OrderButton>
    }
      </ProductsWrapper>
    </>
  );
};