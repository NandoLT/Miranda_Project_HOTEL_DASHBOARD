import { createContext } from "react";
import { initialState } from "../useReducer/authReducer";

export const authContext = createContext(initialState);