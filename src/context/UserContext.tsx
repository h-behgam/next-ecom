import { createContext, Dispatch, useReducer } from 'react';

// تعریف `Provider` برای `UserContext`
interface UserProvideProps {
  children: React.ReactNode;
}

// تعریف نوع State برای منو
interface UserState {
  isOpen: boolean;
}

// مقدار اولیه State
const InitialUserState: UserState = { isOpen: false };

// تعریف نوع Action‌ها برای باز و بسته کردن منو
type UserActions =
  | { type: 'OPEN_USER_MENU' }
  | { type: 'TOGGLE_USER_MENU' }
  | { type: 'CLOSE_USER_MENU' };

// تعریف نوع مقدار Context
const UserReducer = (state: UserState, action: UserActions): UserState => {
  switch (action.type) {
    case 'TOGGLE_USER_MENU':
      return { isOpen: !state.isOpen };
    case 'OPEN_USER_MENU':
      return { isOpen: true };
    case 'CLOSE_USER_MENU':
      return { isOpen: false };
    default:
      return state;
  }
};

// تعریف نوع مقدار Context
interface UserContextType {
  UserState: UserState;
  UserDispatch: Dispatch<UserActions>;
}

export const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: UserProvideProps) => {
  const [UserState, UserDispatch] = useReducer(UserReducer, InitialUserState);

  return (
    <UserContext.Provider value={{ UserState, UserDispatch }}>
      {children}
    </UserContext.Provider>
  );
};
