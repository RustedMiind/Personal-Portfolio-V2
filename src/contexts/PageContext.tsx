import React, { useRef } from "react";

export const Context = React.createContext<
  [PageContextType, React.Dispatch<ActionType>]
>([{ isLoading: false }, () => {}]);

type PageContextType = {
  isLoading: boolean;
};

function PageContext({ children }: PropsType) {
  const [state, dispatch] = React.useReducer(reducer, { isLoading: false });
  return (
    <Context.Provider value={[state, dispatch]}>{children}</Context.Provider>
  );
}

type PropsType = {
  children: JSX.Element;
};
type ActionType = {
  type: "SET_LOADING" | "SET_NOT_LOADING";
};

function reducer(state: PageContextType, action: ActionType): PageContextType {
  switch (action.type) {
    case "SET_LOADING":
      return { ...state, isLoading: true };
    case "SET_NOT_LOADING":
      return { ...state, isLoading: false };
    default:
      return state;
  }
}
export default PageContext;
