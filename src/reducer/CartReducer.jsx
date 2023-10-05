import React from 'react'

const CartReducer = (state,action) => {
    if(action.type==="ADD_TO_CART"){
        let {id,color,amount,product}= action.payload;

        let existingProduct= state.cart.find((curElem)=>curElem.id===id+color);

        if(existingProduct){
          let updatedProduct= state.cart.map((curElem)=>{
            if(curElem.id===id+color){
              let newAmount= curElem.amount+amount;
              if(newAmount>= curElem.max)
              newAmount= curElem.max;
              return{
                ...curElem,
                amount: newAmount,
              }
            }
            else{
              return curElem;
            };
            
          });
          return {
            ...state,
            cart:updatedProduct,
          };
        }
        else{

        let cartProduct={
          id: id+color,
          name: product.name,
          color,
          amount,
          image: product.image[0].url,
          price:product.price,
          max:product.stock,
        }

        return {
          ...state,
          cart:[...state.cart, cartProduct],
        };
        }
    }

    if(action.type==="REMOVE_ITEM"){
      let updated= state.cart.filter((curElem)=>{
        curElem.id!==action.payload
      });
      return{
        ...state,
        cart:updated,
      }
    }

    if(action.type==="CLEAR_CART")
    {
      return{
        ...state,
        cart:[],
      }
    }
     
    if (action.type === "SET_INCREASE") {
      let updatedProduct = state.cart.map((curElem) => {
        if (curElem.id === action.payload) {
          let incAmount = curElem.amount + 1;
  
          if (incAmount >= curElem.max) {
            incAmount = curElem.max;
          }
  
          return {
            ...curElem,
            amount: incAmount,
          };
        } else {
          return curElem;
        }
      });
      return { ...state, cart: updatedProduct };
    }
   
    if (action.type === "SET_DECREASE") {
      let updatedProduct = state.cart.map((curElem) => {
        if (curElem.id === action.payload) {
          let decAmount = curElem.amount - 1;
  
          if (decAmount <= 1) {
            decAmount = 1;
          }
  
          return {
            ...curElem,
            amount: decAmount,
          };
        } else {
          return curElem;
        }
      });
      return { ...state, cart: updatedProduct };
    }

    if(action.type="CART_TOTAL_ITEMS")
    {
      let updatedItem= state.cart.reduce((initialVal,curElem)=>{
        let {amount}= curElem;
        initialVal= initialVal+amount;
        return initialVal;
      },0);
      return{
        ...state,
        total_item: updatedItem,
      }
    }

    if(action.type==="CART_TOTAL_AMOUNT"){
      let finAMount= state.cart.reduce((accu,curElem)=>{
        let {price, amount}= curElem; 
        accu= accu+ price*amount;
        return accu;
      },0);
      return{
        ...state,
        total_amount: finAMount,
      }
    }

    return state;
  
};

export default CartReducer;
