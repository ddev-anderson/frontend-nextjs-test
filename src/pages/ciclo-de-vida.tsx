/**
 * Ciclo de Vida
 *
 * - No evento de montagem deste component, deve ser registrados os seguintes events listeners:
 *  	- onCounterMount
 * 		- onCounterUnmount
 * 		- onCounterUpdate
 * - Os eventos devem ser disparados no componente Counter, seguindo o ciclo de vida do mesmo
 * - Ao atualizar o contador, deverá ser passado o valor atualizado no evento onCounterUpdate, e quando o valor
 * 		chegar a 10, o Counter deve ser desmontado.
 *
 * (Opcional)
 * - Ao observar os eventos, você verá que eles são disparados mais de uma vez, isso acontece porque o componente
 * 		Counter é desmontado e montado novamente, e os eventos são registrados novamente, isto é um problema comum
 * 		no nextjs, você deve resolver este problema.
 */

import { GetServerSideProps } from "next/types";
import styles from "@/styles/ciclo-de-vida.module.css";
import { Counter } from "@/components/Counter";
import { useEffect, useState } from "react";

type CicloDeVidaProps = {
  initialCount: number;
};

export default function CicloDeVida({ initialCount }: CicloDeVidaProps) {
  const [showCounter, setShowCounter] = useState(true);

  useEffect(() => {
    const onCounterMountHandler = () => {
      console.log("onCounterMount");
    };

    const onCounterUnmountHandler = () => {
      console.log("onCounterUnmount");
      setShowCounter(false);
    };

    const onCounterUpdateHandler = (event: CustomEvent) => {
      console.log("onCounterUpdate", event.detail.count);
      setShowCounter(true);
    };

    window.addEventListener("onCounterMount", onCounterMountHandler);
    window.addEventListener("onCounterUnmount", onCounterUnmountHandler);
    window.addEventListener("onCounterUpdate", onCounterUpdateHandler as any);

    return () => {
      window.removeEventListener("onCounterMount", onCounterMountHandler);
      window.removeEventListener("onCounterUnmount", onCounterUnmountHandler);
      window.removeEventListener(
        "onCounterUpdate",
        onCounterUpdateHandler as any
      );
    };
  }, []);

  return (
    <div className={styles.container}>
      <div>
        <button type="button" onClick={() => setShowCounter(true)}>
          Mostrar contador
        </button>

        {showCounter && (
          <>
            <h1>Exemplo de Ciclo de vida</h1>

            <div data-content>
              <Counter initialCount={initialCount} />
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps<
  CicloDeVidaProps
> = async () => {
  return {
    props: {
      initialCount: 0,
    },
  };
};
