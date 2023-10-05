import React from 'react'
const Filter_Reducer = (state,action) => {
  switch(action.type){
    case "LOAD_FILTER_PRODUCTS":
        let priceArr= action.payload.map((curElem)=>curElem.price);
        let maxPrice= Math.max(...priceArr);

        return{
            ...state,
            filter_products: [...action.payload],
            all_products: [...action.payload],
            filters: {...state.filters, maxPrice, price: maxPrice}
        };
    case "SET_GRID_VIEW":
        return {
            ...state,
        grid_view: true
        }
    case "SET_LIST_VIEW":
        return {
            ...state,
            grid_view: false
            }
    case 'GET_SORT_VALUE':
        return{
            ...state,
            sorting_product: action.payload,
        };
    case 'UPDATE_FILTER_VALUE':
        const {name, value}= action.payload; 
        return{
            ...state,
            filters:{
                ...state.filters,
                [name]:value,
            }

        };
    case "FILTER_PRODUCTS":
        let {all_products}= state;
        let tempFilterProduct= [...all_products];

        const {text, category,company, color, price}= state.filters;

        if (text) {
            tempFilterProduct = tempFilterProduct.filter((curElem) => {
              return curElem.name.toLowerCase().includes(text);
            });
          }
          if (category !== "all") {
            tempFilterProduct = tempFilterProduct.filter(
              (curElem) => curElem.category === category
            );
          }
          if (company !== "all") {
            tempFilterProduct = tempFilterProduct.filter(
              (curElem) => curElem.company.toLowerCase() === company.toLowerCase()
            );
          }
          if (color !== "all") {
            tempFilterProduct = tempFilterProduct.filter((curElem) =>
              curElem.colors.includes(color)
            );
          }
          if(price===0){
            tempFilterProduct = tempFilterProduct.filter((curElem) =>
              curElem.price===price
            );
          }
          else(price)
          {
            tempFilterProduct = tempFilterProduct.filter((curElem) =>
              curElem.price<=price
            );
          }
        return{
            ...state,
            filter_products: tempFilterProduct,

        };
    case 'CLEAR_FILTER':
        return{
            ...state,
            filters:{
                ...state.filters,
                text:'',
                category: 'all',
                company:'all',
                color:'all',
                maxPrice:0,
                price: state.filters.maxPrice,
                minPrice: state.filters.maxPrice,    
                    },
                };
    
    case "SORTING_PRODUCTS":
        let newSortData;
        let tempSortProduct= [...action.payload];

        if(state.sorting_product==='a-z'){
            newSortData= tempSortProduct.sort((a,b)=>
               a.name.localeCompare(b.name)
            );
        }
        if(state.sorting_product==='z-a'){
            newSortData= tempSortProduct.sort((b,a)=>
               a.name.localeCompare(b.name)
            );
        }
        if(state.sorting_product==='lowest'){
            const sortingProducts=(a,b)=>{
                return a.price- b.price;
            };
            newSortData= tempSortProduct.sort(sortingProducts);
        }
        if(state.sorting_product==='highest'){
            const sortingProducts=(a,b)=>{
                return b.price- a.price;
            };
            newSortData= tempSortProduct.sort(sortingProducts);
        } 

        /*const {filter_products, sorting_product} = state;
        let tempSortProduct= [...filter_products];

        const sortingProducts=(a,b)=>{
            if(sorting_product==='lowest'){
            return a.price-b.price;
            }
            if(sorting_product==='highest'){
                return b.price-a.price;
            }
            if(sorting_product==='a-z'){
                return a.name.localeCompare(b.name);
            }
            if(sorting_product==='z-a'){
                return b.name.localeCompare(a.name);
            }
        };

        newSortData= tempSortProduct.sort(sorting_product);*/
            return{
                ...state,
                filter_products: newSortData,
            }
            




    default:
        return state;
  }
  
}

export default Filter_Reducer;
