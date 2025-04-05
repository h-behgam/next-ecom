import { createContext, Dispatch, useEffect, useReducer } from 'react';

// تعریف `Provider` برای `CartContext`
interface CartProvideProps {
  children: React.ReactNode;
}

// تعریف نوع State برای سبد خرید
interface CartState {
  id: number;
  qty?: number;
  name: string;
  price: number;
  image: string;
}

// مقدار اولیه State
const initialState: CartState[] = JSON.parse(
  localStorage.getItem('cart') || '[]',
);

// تعریف نوع Action‌ ها برای سبد خرید
type CartActions = {
  type:
    | 'ADD_TO_CART'
    | 'REMOVE_TO_CART'
    | 'INCREASE_QTY'
    | 'DECREASE_QTY'
    | 'SET_FROM_LOCAL'
    | 'CLEAR_CART';
  payload: CartState;
};

// تعریف نوع مقدار Context
type CartContextType = {
  cartState: CartState[];
  cartDispatch: Dispatch<CartActions>;
};

// ایجاد Reducer برای مدیریت سبد خرید
const cartReducer = (state: CartState[], action: CartActions) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return [
        ...state,
        {
          id: action.payload.id,
          qty: 1,
          price: action.payload.price,
          name: action.payload.name,
          image: action.payload.image,
        },
      ];
    case 'REMOVE_TO_CART':
      const isLastOne =
        state.find((item) => item.id === action.payload?.id)?.qty === 1;

      if (isLastOne)
        return state.filter((item) => item.id != action.payload.id);

      return state.map((item) =>
        item.id === action.payload.id
          ? { ...item, qty: item.qty ? item.qty - 1 : 0 }
          : item,
      );
    case 'INCREASE_QTY':
      return state.map((item) =>
        item.id === action.payload.id
          ? { ...item, qty: item.qty ? item.qty + 1 : 0 }
          : item,
      );
    case 'DECREASE_QTY':
      return state.map((item) =>
        item.id === action.payload.id
          ? { ...item, qty: item.qty ? item.qty - 1 : 0 }
          : item,
      );

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

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartState));
  }, [cartState]);

  return (
    <CartContext.Provider value={{ cartState, cartDispatch }}>
      {children}
    </CartContext.Provider>
  );
};
