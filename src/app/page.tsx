'use client';
import Image from "next/image";
import styles from "./page.module.css";
import React, { use, useEffect, useState } from "react";

export default function Home() {

  //let numero1 : number = 0;
  const [numero1, setNumero1] = React.useState<number>(0);
  //let numero2 : number = 0;
  const [numero2, setNumero2] = React.useState<number>(0);
  //let resultado : number = 0;
  const [resultado, setResultado] = useState<number>(0);
  const [mensaje, setMensaje] = useState<string>("");

  useEffect(() => {
    setResultado(numero1 + numero2);
  }, [numero1, numero2]);

  useEffect(() => {
    if(resultado > 10)
      setMensaje("El resultado es mayor a 10");
    else
      setMensaje("El resultado es menor o igual a 10");
  }, [resultado]);

  const capturarNumero1 = (element : any) => {
    //numero1 = element.target.value;
    setNumero1(Number(element.target.value));
  }

  const capturarNumero2 = (element : any) => {
    //numero2 = element.target.value;
    setNumero2(Number(element.target.value));
  }

  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          Get started by editing&nbsp;
          <code className={styles.code}>src/app/page.tsx</code>
        </p>
        <div>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{" "}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className={styles.vercelLogo}
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>

      <div className={styles.body}>
          <div>
            <label>Numero 1</label>
            <input type="number" onChange={capturarNumero1}/>
          </div>
          <div>
            <label>Numero 2</label>
            <input type="number" onChange={capturarNumero2}/>
          </div>
          <div>
            {/*<button onClick={() => {
              
              //resultado = Number(numero1) + Number(numero2);
              //var elemento = document.getElementById("resultado");
              //if(elemento != null)
                //elemento.innerHTML = resultado.toString();
            }}>Sumar</button>*/}
          </div>
          <hr className={styles.separator}></hr>
          <div id="resultado">
            {resultado}
          </div>
          <hr className={styles.separator}></hr>
          <div>
              <h5>{mensaje}</h5>
          </div>
      </div>
    </main>
  );
}
