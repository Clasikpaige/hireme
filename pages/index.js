import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";
import FeedbackForm from "@components/FeedbackForm";
import JokeBlock from "@components/JokeBlock";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Paige Henry</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Paige Henry" />
        <hr />
        <p className="description">
          Reach me: fill in your necessary detailes! When you fill this out, and submit
          I will reach out back to you as quick as possible.
        </p>
        <FeedbackForm />
        <JokeBlock />
      </main>
      <Footer />
    </div>
  );
}
