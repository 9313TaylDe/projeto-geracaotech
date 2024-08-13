import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import iconFacebook from "../assets/images/facebookLogin.svg";
import iconGmail from "../assets/images/gmailLogin.svg";
import SmallHeader from "../components/SmallHeader";
import Button from "../components/Button";

const CreateAccount = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log(data);
    navigate("/");
  };

  return (
    <>
      <SmallHeader />
      <div className="cadastre-page min-w-full min-h-full flex  flex-column relative">
        <div className="cadastro-container ">
          <form onSubmit={handleSubmit(onSubmit)}>
            <h3>Ciar conta</h3>
            <div className="container-form">
              <h4>Informacoes pessoais</h4>
              <hr />
              <div className="box-input">
                <p>Nome completo*</p>
                <input
                  className="input-nome_cadastro"
                  type="text"
                  placeholder="Digite o seu nome"
                  {...register("nome", { required: true })}
                />
              </div>
              <div className="box-input">
                <p>CPF*</p>
                <input
                  className="input-cpf_cadastro"
                  type="text"
                  placeholder="Digite o seu CPF"
                  {...register("cpf", { required: true })}
                />
              </div>
              <div className="box-input">
                <p>E-mail*</p>
                <input
                  className="input-email_cadastro"
                  type="email"
                  placeholder="Digite o seu e-mail"
                  {...register("email", { required: true })}
                />
              </div>
              <div className="box-input">
                <p>Celular*</p>
                <input
                  className="input-celular_cadastro"
                  type="celular"
                  placeholder="Digite seu número"
                  {...register("celular", { required: true })}
                />
              </div>
              <span className="termos-contrato flex flex-row align-content-center justify-content-center">
                <p>
                  <input type="checkbox" /> Quero receber por email ofertas e
                  novidades das lojas da Digital <br />
                  Store. A frequência de envios pode variar de acordo com a
                  interação
                  <br /> do cliente.
                </p>
              </span>
              <Button type="" color="pink">
                Criar
              </Button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CreateAccount;
