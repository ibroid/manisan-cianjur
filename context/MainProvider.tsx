import { Children, createContext, Dispatch, ReactNode, useReducer } from "react";
import { Snackbar } from "react-native-paper";

export type SnackBarContextType = {
  message: String
  show: boolean
}

export type MainContextType = {
  Snackbar: SnackBarContextType,
  LoadingScreen: boolean
}

export type MainActionReducerType = {
  type: "SNACKBAR" | "LOADING_SCREEN",
  payload: any
}

export const MainContext = createContext<{ state: MainContextType, destate: Dispatch<MainActionReducerType> }>({
  state: {
    Snackbar: {
      message: "",
      show: false
    },
    LoadingScreen: false
  },
  destate() {

  },
})

export type MainProviderProps = {
  children: React.ReactNode;
}

function mainReducer(state: MainContextType, action: MainActionReducerType): MainContextType {
  if (action.type == "SNACKBAR") {
    const payload = action.payload as SnackBarContextType
    return {
      ...state,
      Snackbar: {
        message: payload.message,
        show: payload.show
      }
    }
  }
  if (action.type = "LOADING_SCREEN") {
    return {
      ...state, LoadingScreen: action.payload
    }
  }
  return state;
}

export function MainProvider({ children }: MainProviderProps) {

  const [state, destate] = useReducer(mainReducer, {
    Snackbar: {
      message: "",
      show: false
    },
    LoadingScreen: false
  })

  return <MainContext.Provider value={{ state, destate }} >{children}</MainContext.Provider>
}