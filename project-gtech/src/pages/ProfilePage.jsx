import React from "react";
import { useLocation } from "react-router-dom";
import Footer from "../components/Footer";
import SmallHeader from "../components/SmallHeader";

const UserProfile = () => {
  const { state } = useLocation();
  const { nome, cpf, email, celular } = state || {};

  const onSubmit = (data) => {
    console.log(data);
    navigate("/meu-perfil", { state: data });
  };

  return (
    <>
      <SmallHeader />
      <div className="profile-page min-w-full min-h-full flex flex-column relative">
        <div className="profile-container">
          <h3>Meu Perfil</h3>
          <div className="profile-info">
            <p>
              <strong>Nome completo:</strong> {nome}
            </p>
            <p>
              <strong>CPF:</strong> {cpf}
            </p>
            <p>
              <strong>E-mail:</strong> {email}
            </p>
            <p>
              <strong>Celular:</strong> {celular}
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default UserProfile;
