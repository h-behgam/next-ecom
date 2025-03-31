import { createContext, Dispatch, useReducer } from 'react';

// تعریف `Provider` برای `CartContext`
interface CartProvideProps {
  children: React.ReactNode;
}

// تعریف نوع State برای سبد خرید
interface CartState {
  id: number;
  qty: number;
}

// مقدار اولیه State
const initialState: CartState = { id: 0, qty: 0 };

// تعریف نوع Action‌ ها برای سبد خرید
type CartActions = {
  type: 'ADD_TO_CART' | 'REMOVE_TO_CART' | 'UPDATE_QTY' | 'CLEAR_CART';
  payload?: CartState;
};

// تعریف نوع مقدار Context
type CartContextType = {
  cartState: CartState;
  cartDispatch: Dispatch<CartActions>;
};

// ایجاد Reducer برای مدیریت سبد خرید
const cartReducer = (state: CartState, action: CartActions) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return { ...state };
    case 'REMOVE_TO_CART':
      return { ...state };
    case 'UPDATE_QTY':
      return { ...state };
    case 'CLEAR_CART':
      return { ...state };

    default:
      return state;
  }
};

// ایجاد context برای سبد خرید و مقدار دهی اولیه آن به undefined
export const CartContext = createContext<CartContextType | undefined>(
  undefined,
);

// ایجاد Provider برای سبد خرید
export const CartProvider: React.FC<CartProvideProps> = ({
  children,
}: CartProvideProps) => {
  const [cartState, cartDispatch] = useReducer(cartReducer, initialState);
  return (
    <CartContext.Provider value={{ cartState, cartDispatch }}>
      {children}
    </CartContext.Provider>
  );
};
