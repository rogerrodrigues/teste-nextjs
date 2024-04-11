// import Head from "next/head";
import Image from "next/image";
import styles from "../../../styles/page.module.scss";
import logoImg from "../../../public/logo.svg";
import Link from "next/link";
import { FormEvent, useContext, useState } from "react";
import { toast } from "react-toastify";
import { AuthContext } from "@/contexts/AuthContext";
import Head from "next/head";
// import { AuthContext } from "@/contexts/AuthContext";
// import { Input } from "@/components/ui/Input";
// import { Button } from "@/components/ui/Button";
// import { Header } from "@/components/Header";
// import { canSSRAuth } from "@/utils/canSSRAuth";

export default function SingUp() {
  const { singUp } = useContext(AuthContext);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const [isAuthUser, setIsAuthUser] = useState(true);//arrumar o estado

  async function handleSingUp(event: FormEvent) {
    event.preventDefault();

    if (name === "" || email === "" || password === "") {
      toast.warning("Preencha todos os campos");
      return;
    }

    setLoading(true);

    let data = {
      name,
      email,
      password,
    };

    // await singUp(data);

    setLoading(false);
  }
  return (
    <>
      <Head>
        <title>Faça seu cadastro agora!</title>
      </Head>
      {/* {isAuthUser && <Header />} */}
      <div>
        {/* <Image src={logoImg} alt="Sujeito Pizza" /> */}
        <div>
          <h1>Criando sua conta</h1>
          <form onSubmit={handleSingUp}>
            <input
              placeholder="Digite seu Nome"
              type="text"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
            <input
              placeholder="Digite seu cpf"
              type="text"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
            <input
              placeholder="Digite sua senha"
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
            <button type="submit">
              cadastrar
            </button>
          </form>
          <div>
            <span > Já possui uma conta?</span>
            <Link href="/">
              <span> Faça login!</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
