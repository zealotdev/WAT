import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

import { Tabs } from '../components/tabs';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Next Tabs App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="m-auto py-20 md:p-20 flex justify-center">
        <Tabs>
          <div label="Tab One">
            <h1>TAB ONE</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit
              dignissimos provident quasi laudantium hic ullam consequuntur illo
              aliquid magni pariatur.
            </p>
          </div>
          <div label="Tab Two">
            <h1>TAB TWO</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit
              dignissimos provident quasi laudantium hic ullam consequuntur illo
              aliquid magni pariatur.
            </p>
          </div>
          <div label="Tab Three">
            <h1>TAB THREE</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit
              dignissimos provident quasi laudantium hic ullam consequuntur illo
              aliquid magni pariatur.
            </p>
          </div>
        </Tabs>
      </main>
    </div>
  );
}
