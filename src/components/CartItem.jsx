import React from 'react'
import FormPrice from '../helpers/FormPrice';
import CartAmountToggle from './CartAmountToggle';
import {MdDelete} from 'react-icons/md';
import {useCartContext} from "../context/Cart_Context";
import { Button } from 'bootstrap';

const CartItem = ({id, name, image, color, price, amount }) => {
    const {removeItem,setDecrease,setIncrease}= useCartContext();

   // const setDecrease=()=>{
        //amount>1 ? (amount - 1): (1);
   // };

    //const setIncrease=()=>{
     //   amount < max? (amount + 1): (max);
  //  };
  return (
    <div className='cart_heading grid grid-five-column'>
        <div className='cart-image--name'>
            <div>
                <figure>
                    <img src={image} alt={id}/>
                </figure>
            </div>
            <div>
                <p>{name}</p>
                <div className='color-div'>
                    <p>Color:</p>
                    <div className='color-style' style={{backgroundColor:color, color:color}}></div>
                </div>
            </div>

        </div>
        <div className='cart-hide'>
           <p><FormPrice price={price}/></p> 
        </div>
        

        <CartAmountToggle
                amount={amount}
                setDecrease={()=>setDecrease(id)}
                setIncrease={()=>setIncrease(id)}
        />
    <div className='cart-hide'>
        <p><FormPrice price={price*amount} /></p>
    </div>

    <div>
        <MdDelete className='remove_icon' onClick={()=>removeItem(id)}/>
    </div>

    

    </div>
  )
}

export default CartItem;
