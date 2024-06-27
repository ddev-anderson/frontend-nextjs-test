/**
 * Formulário
 *
 * - Primeiramente vá até /src/pages/api/users/create.ts e implemente a API
 * - Deve ser implementado utilizando a lib react-hook-form
 * - O formulário deve ter os seguintes campos: nome, e-mail
 * - Os dois campos são obrigatórios e precisam de validação
 * - Ao dar 'submit', deve ser feito uma request para /api/users/create
 * - Lide com os possíveis erros
 */

import styles from "@/styles/formulario.module.css";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { isValidEmail } from "@/utils/email";

export default function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const [errorMessage, setErrorMessage] = useState("");

  const onSubmit = async (data: any) => {
    try {
      const response = await fetch("/api/users/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        setErrorMessage("Erro ao adicionar o usuário");
      } else {
        alert("Usuário adicionado com sucesso");
        reset();
      }
    } catch (error) {
      console.error("Erro ao adicionar usuário:", error);
      setErrorMessage("Erro ao adicionar usuário");
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            type="text"
            placeholder="Name"
            {...register("name", { required: true })}
          />
          {errors.name && <p className={styles.error}>Nome é obrigatório</p>}

          <input
            type="email"
            placeholder="E-mail"
            {...register("email", {
              required: true,
              validate: isValidEmail,
            })}
          />
          {errors.email?.type === "required" && (
            <p className={styles.error}>E-mail é obrigatório</p>
          )}
          {errors.email?.type === "validate" && (
            <p className={styles.error}>E-mail inválido</p>
          )}

          <button type="submit">Enviar</button>
        </form>
        {errorMessage && (
          <div>
            <p>{errorMessage}</p>
          </div>
        )}
      </div>
    </div>
  );
}
