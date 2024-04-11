import { FormEvent, useContext, useState } from "react";
// import Head from "next/head";
// import Image from "next/image";
// import styles from "../../styles/page.module.scss";
import logoImg from "../../public/logo.svg";
import Link from "next/link";
import { AuthContext } from "@/contexts/AuthContext";
import { toast } from "react-toastify";
import { canSSRGuest } from "@/services/utils/canSSRGuest";
import Head from "next/head";
import * as S from './styles'
// import { Button } from "@/components/ui/Button";
// import { Input } from "@/components/ui/Input";

// import { AuthContext } from "@/contexts/AuthContext";
// import { toast } from "react-toastify";
// import { canSSRGuest } from "@/utils/canSSRGuest";
// import { Input } from "@/components/ui/Input";
// import { Button } from "@/components/ui/Button";

export default function Home() {
  const { singIn } = useContext(AuthContext);

  const [cpf, setCpf] = useState("");
  const [senha, setSenha] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSingIn(event: FormEvent) {
    event.preventDefault();

    if (cpf === "" || senha === "") {
      toast.warning("Preencha todos os campos");
      return;
    }

    setLoading(true);
    //teste
    let data = {
      // email: "", // Add the email property with an empty string value
      cpf,
      senha,
    };

    await singIn(data);

    setLoading(false);
  }

  return (
    <>
      <Head>
        <title>SynSaude - login</title>
      </Head>
      <S.Container >
        <div >
          <form onSubmit={handleSingIn}>
            <input
              placeholder="Digite seu cpf"
              type="text"
              value={cpf}
              onChange={(event) => setCpf(event.target.value)}
            />
            <input
              placeholder="Digite sua senha"
              type="password"
              value={senha}
              onChange={(event) => setSenha(event.target.value)}
            />
            <button type="submit">
              Acessar
            </button>
          </form>
          <div >
            <span > Não possui uma conta?</span>
            <Link href="/singup">
              <span> Cadastre-se!</span>
            </Link>
          </div>
        </div>
      </S.Container>
    </>
  );
}

export const getServerSideProps = canSSRGuest(async (ctx) => {
  return {
    props: {},
  };
});
