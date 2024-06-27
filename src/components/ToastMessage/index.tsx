// components/ToastMessage.tsx
import React from "react";
import { IToastMessage } from "@/types/toast-message";
import styles from "./style.module.css";

type ToastMessageProps = {
  content: IToastMessage;
};

export const ToastMessage: React.FC<ToastMessageProps> = ({
  content: data,
}) => {
  return (
    <div
      className={styles.container}
      data-toast-type={data.type}
      data-toast-id={data.id}
    >
      <span data-content>{data.message}</span>

      <span data-close>╳</span>
    </div>
  );
};
