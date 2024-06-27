// context/ToastContext.tsx
import React, { createContext, useContext, useState } from "react";
import { IToastMessage } from "@/types/toast-message";

type ToastContextType = {
  messages: IToastMessage[];
  addSuccessMessage: (message: string) => void;
  addErrorMessage: (message: string) => void;
};

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export const ToastProvider: React.FC<React.PropsWithChildren<{}>> = ({
  children,
}) => {
  const [messages, setMessages] = useState<IToastMessage[]>([]);

  const addSuccessMessage = (message: string) => {
    const newMessage: IToastMessage = {
      id: new Date().getTime().toString(),
      message,
      type: "success",
    };
    setMessages([...messages, newMessage]);
  };

  const addErrorMessage = (message: string) => {
    const newMessage: IToastMessage = {
      id: new Date().getTime().toString(),
      message,
      type: "error",
    };
    setMessages([...messages, newMessage]);
  };

  return (
    <ToastContext.Provider
      value={{ messages, addSuccessMessage, addErrorMessage }}
    >
      {children}
    </ToastContext.Provider>
  );
};

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used within a ToastProvider");
  }
  return context;
};
