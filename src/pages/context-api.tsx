/**
 * Context Api
 *
 * - Criar um contexto para exibir mensagens de sucesso e erro
 * - Criar um componente para exibir as mensagens
 * - Criar um hook para disparar e consumir as mensagens
 * - Disparar as mensagens a partir dos botões abaixo
 */

// pages/context-api.tsx
// pages/context-api.tsx
import React from "react";
import styles from "@/styles/context-api.module.css";
import { useToast } from "../components/ToastMessage/ToastContext";
import ToastContainer from "../components/ToastMessage/ToastContainer";

const ContextApi: React.FC = () => {
  const { addSuccessMessage, addErrorMessage, messages } = useToast();

  function handleSuccessButtonClick() {
    addSuccessMessage("Mensagem de sucesso");
  }

  function handleErrorButtonClick() {
    addErrorMessage("Mensagem de erro");
  }

  return (
    <>
      <div className={styles.container}>
        <button type="button" onClick={handleSuccessButtonClick}>
          Disparar mensagem de sucesso
        </button>
        <button type="button" onClick={handleErrorButtonClick}>
          Disparar mensagem de erro
        </button>
      </div>

      {messages.length && <ToastContainer messages={messages} />}
    </>
  );
};

export default ContextApi;
