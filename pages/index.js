import Layout from '../components/layout';
import Card from '../components/Card/card';
import styles from '../styles/home.module.css';

export default function Home() {
  return (
    <Layout title='Listado de Tv shows'>
      <div className={styles.home}>
        <h1 className={styles['gradient-text']}>
            Test API TMDB
        </h1>
        <div>
          <p className={styles['gradient-text']}>
            Consulte los programas de TV mas populares, mas valorados y en emision en el menu superior
          </p>
        </div>
      </div>
    </Layout>
  )
}
