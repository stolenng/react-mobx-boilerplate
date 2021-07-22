import { createContext } from "react";
import MainStore from "../stores/root-store";

export const StoreContext = createContext<MainStore>({} as MainStore);
export const StoreProvider = StoreContext.Provider;
