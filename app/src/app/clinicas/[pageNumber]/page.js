import React from "react";
import Card from "@/components/Usuarios/Home/Card";
import Slogan from "@/components/Usuarios/Home/Slogan";
import Filtros from "@/components/Usuarios/Home/Filtros";
import Header from "@/components/Usuarios/Header";
import Footer from "@/components/Usuarios/Footer";
import ButtonSearch from "@/components/Usuarios/Home/ButtonSearch";
import "@/components/Usuarios/Home/css/Home.css";
import "@/components/Usuarios/css/Layout.css";
import ClinicaService from "@/services/ClinicaService";
export default async function PageNumber({ params }) {
  const informacao = await ClinicaService.pegarClinicas();

  return (
    <>
      <Header />
      <div className="containers">
        <Slogan />
        <ButtonSearch />
        <Filtros />
      </div>
      <Card pageNumber={params.pageNumber} informacao={informacao} />
      <Footer />
    </>
  );
}
