import { createContext, Dispatch, useReducer } from 'react';

// تعریف `Provider` برای `MenuContext`
interface MenuProvideProps {
  children: React.ReactNode;
}

// تعریف نوع State برای منو
interface MenuState {
  isOpen: boolean;
}

// مقدار اولیه State
const initialMenuState: MenuState = { isOpen: false };

// تعریف نوع Action‌ها برای باز و بسته کردن منو
type MenuAction =
  | { type: 'OPEN_MENU' }
  | { type: 'TOGGLE_MENU' }
  | { type: 'CLOSE_MENU' };

// ایجاد Reducer برای مدیریت منو
const menuReducer = (state: MenuState, action: MenuAction): MenuState => {
  switch (action.type) {
    case 'TOGGLE_MENU':
      return { isOpen: !state.isOpen };
    case 'OPEN_MENU':
      return { isOpen: true };
    case 'CLOSE_MENU':
      return { isOpen: false };
    default:
      return state;
  }
};

// تعریف نوع مقدار Context
interface MenuContextType {
  menuState: MenuState;
  menuDispatch: Dispatch<MenuAction>;
}
export const MenuContext = createContext<MenuContextType | undefined>(
  undefined,
);

export const MenuProvider: React.FC<MenuProvideProps> = ({
  children,
}: MenuProvideProps) => {
  const [menuState, menuDispatch] = useReducer(menuReducer, initialMenuState);
  return (
    <MenuContext.Provider value={{ menuState, menuDispatch }}>
      {children}
    </MenuContext.Provider>
  );
};
