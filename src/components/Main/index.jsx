import React from "react";
import "./main.scss";
import Form from "../Form";

const Main = () => {
  return (
    <main className="main">
      <section className="featured">
        <h2>Você está a poucos passos de otimizar suas campanhas!</h2>
        <p>
          Queremos conhecer mais sobre sua empresa para melhorar sua experiência
          com a Voxus.
        </p>
      </section>

      <Form></Form>
    </main>
  );
};

export default Main;
