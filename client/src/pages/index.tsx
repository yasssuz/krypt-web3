import type { NextPage } from "next";

import Navbar from "../components/common/navbar";
import Hero from "../components/home/hero";

const Home: NextPage = () => {
  return (
    <main className='min-h-screen'>
      <section className='gradient-bg-welcome'>
        <Navbar />
        <Hero />
      </section>
    </main>
  );
};

export default Home;
