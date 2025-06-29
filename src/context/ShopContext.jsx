import { createContext, useEffect, useState } from "react";
import { products } from "../assets/assets";
import { useSearchParams } from "react-router-dom";
import { toast } from "react-toastify";

export const ShopContext = createContext()

const ShopContextProvider = (props)=>{

    const currency ='$';
    const delivery_fee = 10;
    const [cartItems , setItems] = useState({})

    const addCart = async (itemId,size )=> {

        if (!size) {
            toast.error("Select Product Size")
            return;
            
        }
            let cartData = structuredClone(cartItems);
            if (cartData[itemId]) {
                if (cartData[itemId][size]) {

                cartData[itemId][size] += 1;
                
                
            }else{
                cartData[itemId][size] = 1;
            }
            }
          
            
            else{
                cartData[itemId] ={}
                cartData[size] = 1
            }
              setItems(cartData)
    }
    const getCartCount =  ()=>{
        let total = 0;
        for(const items in cartItems){
            for( const item in cartItems[items]){
                try {
                    if (cartItems[items][item] > 0) {
                        total += cartItems[items][item];

                        
                    }
                } catch (error) {
                    
                }
            }
        }

        return total
    }
    const updateQua = async (itemId,size,quantity)=>{
        let cartData =  structuredClone(cartItems)
        cartData[itemId][size] = quantity;

        setItems(cartData);
    }

    const value ={
        products, currency, delivery_fee,
        cartItems,addCart,
        getCartCount,updateQua
    }

    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;