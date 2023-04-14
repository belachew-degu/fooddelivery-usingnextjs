import Head from "next/head";
import Hero from "../components/Hero";
import Layout from "../components/Layout";
import Menu from "../components/Menu";
import Services from "../components/Services";
import { client } from "../lib/client";
import css from "../styles/Home.module.css";

export default function Home({pizzas}) {
  console.log(pizzas)
  return (
    <Layout home>
      <div className={css.container}>
        <Head>
          <title>FUDO</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/Logo.png" />
        </Head>
        {/* body */}
          <Hero/>
          <Services/>
          <Menu pizzas={pizzas}/>
      </div>
    </Layout>
  );
}

export const getServerSideProps = async () => {
  const query = '*[_type == "pizza" && !(_id in path("drafts.**"))]';
  const pizzas = await client.fetch(query);
  console.log(pizzas)
  return {
    props: {
      pizzas,
    },
  };
};

