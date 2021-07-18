import React, { useReducer, createContext } from "react";

const Ctx = createContext();

const { Provider } = Ctx;

const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case Types.SIDE_NAV_EXPANDED: {
        return {...state, sideNavExpanded: action.payload}
      }

      case Types.DROPDOWN_CLICKED: {
        return {...state, dropdownClicked: action.payload}
      }
      case Types.LOADING_START: {
        return  {...state, isLoading: true };
      }

      case Types.LOADING_DONE: {
        return  {...state, isLoading: false };
      }

      case Types.LOGIN_SUBMIT: {
        return {...state, loggedIn: true };
      }

      case Types.LOGOUT_SUBMIT: {
        return {...state, loggedIn: false, loggingOut: action.loggingOut };
      }

      case Types.SET_ERROR: {
        return {...state, error: {status: true, message: action.payload}}
      }

      case Types.REMOVE_ERROR: {
        return {...state, error: {status: false, message: action.payload}}
      }

      default:
        throw new Error("Action does not exist.");
    }
  }, []);

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { Ctx, StateProvider };

export const Types = {
  LOADING_START: "LOADING_START",
  LOADING_DONE: "LOADING_DONE",
  LOGIN_SUBMIT: "LOGIN_SUBMIT",
  LOGOUT_SUBMIT: "LOGOUT_SUBMIT",
  SET_ERROR: "SET_ERROR",
  REMOVE_ERROR: "REMOVE_ERROR",
  SIDE_NAV_EXPANDED: "SIDE_NAV_EXPANDED",
  DROPDOWN_CLICKED: "DROPDOWN_CLICKED",
};
