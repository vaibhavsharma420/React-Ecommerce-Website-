import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from '../reducer/CartReducer';

const CartContext= createContext();

 /*const getLocalCardData=()=>{
    let localData = localStorage.getItem('vaibhavStore');
    if(localData==[]){
    return [];
    }
    else
    {
    return JSON.parse (localData) ;
    }
};*/

const initialState={
    //cart: getLocalCardData(),
    cart:[],
    total_item:'',
    total_amount:'',
    shipping_fee:50000,
};

const CartProvider= ({children})=>{

    const [state, dispatch]= useReducer(reducer,initialState);

    const addToCart=(id, color, amount, product)=>{
        dispatch({type:'ADD_TO_CART' , payload:{id, color, amount, product}});
    };

    const removeItem=(id)=>{
        dispatch({type:"REMOVE_ITEM", payload:id})
    };

    const setIncrease=(id)=>{
        dispatch({type:"SET_INCREASE", payload:id})
    };
    const setDecrease=(id)=>{
        dispatch({type:"SET_DECREASE", payload:id})
    };



    const clearCart=()=>{
        dispatch({type:'CLEAR_CART'});
    };

    useEffect(()=>{
        dispatch({type:"CART_TOTAL_ITEMS"});
        dispatch({type:"CART_TOTAL_AMOUNT"})
        localStorage.setItem('vaibhavStore', JSON.stringify(state.cart))
    },[state.cart]);

    return <CartContext.Provider value={{...state, addToCart, removeItem,clearCart,setDecrease,setIncrease}}>
        {children}
    </CartContext.Provider>
}

const useCartContext=()=>{
    return useContext(CartContext);
}

export {CartProvider, useCartContext};