"use client";
import React from "react";
import Card from "@/components/Usuarios/Card";
import Slogan from "@/components/Usuarios/Slogan";
import Filtros from "@/components/Usuarios/Filtros";
import Header from "@/components/Usuarios/Header";
import Footer from "@/components/Usuarios/Footer";
import ButtonSearch from "@/components/Usuarios/ButtonSearch";
import "../components/Usuarios/css/Home.css";
import FiltroService from "@/services/FiltroService";
export default async function CorpoHome() {
  const resultados = await FiltroService.pegarHospitaisEClincas();

  const clinicas = resultados.clinicas || [];
  const hospitais = resultados.hospitais || [];

  const informacao = [...clinicas, ...hospitais];

  informacao.map(info => {
    console.log("dados", info.nome);
  });
  return (
    <>
      <Header />
      <main>
        <Slogan />
        <ButtonSearch />
        <Filtros />
        <Card informacao={informacao} />
      </main>
      <Footer />
    </>
  );
}
