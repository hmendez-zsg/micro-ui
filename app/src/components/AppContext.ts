import { createContext } from "react";
import { IAppContext } from "./types";

const appContext: IAppContext = window.__MICRO_UI_CONTEXT__ || {};

const AppContext: any = createContext<IAppContext>({ ...appContext });

export const AppContextProvider = AppContext.Provider;
export const AppContextConsumer = AppContext.Consumer;
export default AppContext;