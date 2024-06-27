/**
 * Modal de confirmação
 *
 * - Crie um component para o modal de confirmação
 * - Utilize o código abaixo como base
 * - O modal deve ser aberto ao clicar no botão "Abrir modal de confirmação"
 * - O título deve ser "Confirmação"
 * - O conteudo deve ser dinâmico
 */

import { useState } from "react";
import styles from "@/styles/modal.module.css";
import { Modal } from "@/components/Modal";
import { isValidEmail } from "@/utils/email";

export default function Home() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");

  function handleModalConfirm() {
    if (validate()) {
      setModalIsOpen(false);
      alert("Confirmado");
    }
  }

  function handleModalClose() {
    setModalIsOpen(false);
    setName("");
    setEmail("");
    setNameError("");
    setEmailError("");
  }

  function validate() {
    let isValid = true;

    if (!name) {
      setNameError("Nome é obrigatório");
      isValid = false;
    }

    if (!email) {
      setEmailError("Email é obrigatório");
      isValid = false;
    } else if (!isValidEmail(email)) {
      setEmailError("Email inválido");
      isValid = false;
    }

    return isValid;
  }

  function modalConfirmationContent() {
    return (
      <div data-modal-content className={styles["modal-form"]}>
        <form onSubmit={(e) => e.preventDefault()}>
          <div>
            <label htmlFor="input-name">Nome</label>
            <input
              type="text"
              id="input-name"
              placeholder="Insira um nome"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
                setNameError("");
              }}
            />
            {nameError && (
              <span className={styles["error-message"]}>{nameError}</span>
            )}
          </div>

          <div>
            <label htmlFor="input-email">Email</label>
            <input
              type="email"
              id="input-email"
              placeholder="Insira um e-mail válido"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setEmailError("");
              }}
            />
            {emailError && (
              <span className={styles["error-message"]}>{emailError}</span>
            )}
          </div>
        </form>
      </div>
    );
  }

  return (
    <>
      <main className={styles.container}>
        <button type="button" onClick={() => setModalIsOpen(true)}>
          Abrir modal de confirmação
        </button>
      </main>

      <Modal
        isOpen={modalIsOpen}
        title="Confirmação"
        onClose={handleModalClose}
        onConfirm={handleModalConfirm}
      >
        {modalConfirmationContent()}
      </Modal>
    </>
  );
}
