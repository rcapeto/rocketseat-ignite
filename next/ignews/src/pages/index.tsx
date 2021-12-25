import { NextPage, GetStaticProps } from 'next';
import Head from 'next/head';

import styles from '../../styles/home.module.scss';
import { SubscribeButton } from '../components/SubscribeButton';
import { useApi } from '../services/api';
import { formatPrice } from '../utils';

interface Props {
  product: {
    priceId: string;
    amout: string;
  } | null;
};

const Home: NextPage<Props> = ({ 
  product
}) => {
  return (
    <>
      <Head>
        <title>Home | ig.news</title>
      </Head>

      <main className={styles.contentContainer}>
        <section className={styles.hero}>
          <span>👏🏻 Hey, welcome</span>

          <h1>News about the <span>React</span> world.</h1>

          <p>
            Get access to all the publications <br />
            <span data-id={product?.priceId}>for {product?.amout} month</span>
          </p>

          <SubscribeButton 
            priceId={product?.priceId ?? ''}
          />
        </section>

        <img src="/images/avatar.svg" alt="Girl coding" />
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps = async context => {
  const { getPrice } = useApi();
  const hours_24 =  60 * 60 * 24;

  const data = await getPrice();

  if(data && !data.error) {
    const { price } = data;

    const amout = formatPrice((price.unit_amount ?? 0 / 100), 'en-US', 'USD');

    const product = {
      priceId: price.id,
      amout
    };

    return {
      props: {
        product
      },
      revalidate: hours_24 //24 hours
    }
  } 

  return {
    props: {
      product: null,
    },
    revalidate: hours_24 //24 hours
  }
};

export default Home
