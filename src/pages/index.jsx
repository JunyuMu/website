import { Fragment } from "react";
import Head from "next/head";

function Home() {
  return (
    <Fragment>
      <Head>
        <meta
          name="description"
          content="Hey there, I'm Junyu Mu. Just another full stack engineer."
        />
        <title>Junyu Mu</title>
        <link rel="stylesheet" href="/styles/hack.css" />
      </Head>
      <main className="hack container">
        <section>
          <h1>Junyu Mu's Page</h1>
          <p>Hey there, I'm Junyu Mu. Just another full stack engineer.</p>
        </section>
        <section>
          <h2>Portfolios</h2>
          <ul>
            <li>
              <p>
                <strong>2019</strong>
              </p>
              <ul>
                <li>
                  <p>A simple but elegant blogging platform.</p>
                  <p>
                    <a href="///note.ink" target="_blank">
                      note.ink
                    </a>
                  </p>
                </li>
              </ul>
            </li>
          </ul>
        </section>
        <section>
          <h2>Contact Me</h2>
          <ul>
            <li>
              <a href="mailto:me@junyu.dev">me@junyu.dev</a>
            </li>
            <li>
              <a href="///note.ink/@Junyu" target="_blank">
                note.ink
              </a>
            </li>
            <li>
              <a href="https://github.com/JunyuMu" target="_blank">
                Github
              </a>
            </li>
          </ul>
        </section>
        <hr />
        <footer>
          <p>© 2020 Junyu Mu. All rights reserved.</p>
        </footer>
      </main>
    </Fragment>
  );
}

export default Home;
