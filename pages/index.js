import React from "react";
import Head from "next/head";
import Freelancers from "../Components/Freelancers/Freelancers";
import Services from "../Components/Services/Services";
import TrendingServices from "../Components/TrendingServices/TrendingServices";
import About from "../Components/About/About";
import AppDownload from "../Components/AppDownload/AppDownload";
import Hero from "../Components/Herosec/Hero";
import Leads from "../Components/Leads/Leads";
import Layout from "../Components/LayoutWrapper/Layout";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Canada Freelancer</title>
        <meta name="description" content="Generated by create next app" />
      </Head>

      <Layout>
        <Hero />

        <main>
          <Services />
          <Leads />
          <About />
          <TrendingServices />
          <Freelancers />
          <AppDownload />
        </main>
      </Layout>

      {/* <footer>
        <Footer />
      </footer> */}
    </div>
  );
}
