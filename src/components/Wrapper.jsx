"use client"
import { store } from "@/store";
import { Provider } from "react-redux";

export const Wrapper = ({ children }) => {
  return (
    <Provider store={store}>
      <div>{children}</div>;
    </Provider>
  );
};
