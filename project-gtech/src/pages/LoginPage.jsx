import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import iconFacebook from "../assets/images/facebookLogin.svg";
import iconGmail from "../assets/images/gmailLogin.svg";
import loginImageTenis from "../assets/images/tenisLogin.png";
import SmallHeader from "../components/SmallHeader";
import { useAuth } from "../components/AuthContext";
import Footer from "../components/Footer";

const LoginPage = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const { login } = useAuth();

  const onSubmit = (data) => {
    const { email, password } = data;

    const normalizedEmail = email.trim().toLowerCase();
    const normalizedPassword = password.trim();

    if (
      (normalizedEmail === "ola@gmail.com" && normalizedPassword === "123") ||
      (normalizedEmail === "geracaotech@gmail.com" &&
        normalizedPassword === "2024")
    ) {
      login();
      navigate("/home");
    } else {
      alert("Email ou senha incorretos");
    }
  };

  return (
    <>
      <div className="logo_login w-screen flex justify-content-center">
        <span>
          <SmallHeader />
        </span>
      </div>
      <div className="login-page min-w-full min-h-full flex relative">
        <div className="login-container">
          <form className="" onSubmit={handleSubmit(onSubmit)}>
            <div className="container-form">
              <div className="login-titulo">
                <h1>Acesse a suaconta</h1>
                <span className="container-cadastre">
                  <span className="cadastre-se">
                    Novo cliente? Então registre-se
                    <a className="aqui" href="/criar-nova-conta">
                      aqui
                    </a>
                  </span>
                </span>
              </div>
              <input
                className="input-email"
                type="text"
                placeholder="E-mail"
                {...register("email", { required: true })}
              />
              <input
                className="input-password"
                type="password"
                placeholder="Password"
                {...register("password", { required: true })}
              />
              <a className="esqueceu" href="/forgot-password">
                Esqueceu sua senha?
              </a>
              <button className="botao_entrar" type="submit">
                Login
              </button>
              <div className="social-icons">
                <a href="https://twitter.com">
                  <img src={iconFacebook} alt="Twitter" />
                </a>
                <a href="https://instagram.com">
                  <img src={iconGmail} alt="Instagram" />
                </a>
              </div>
            </div>
          </form>
        </div>
        <span className="Linha_vertical bg-black-alpha-50"></span>
        <div className="login-image">
          <img src={loginImageTenis} alt="Login" />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default LoginPage;
