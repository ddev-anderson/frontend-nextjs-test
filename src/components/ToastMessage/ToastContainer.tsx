// components/ToastContainer.tsx
import React from "react";
import { IToastMessage } from "@/types/toast-message";
import { ToastMessage } from ".";
import styles from "@/styles/toast-container.module.css";

type ToastContainerProps = {
  messages: IToastMessage[];
};

const ToastContainer: React.FC<ToastContainerProps> = ({ messages }) => {
  return (
    <div className={styles["toast-container"]}>
      {messages.map((message) => (
        <ToastMessage key={message.id} content={message} />
      ))}
    </div>
  );
};

export default ToastContainer;
