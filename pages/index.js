import Layout from '../components/layout';
import styles from '../styles/home.module.css';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

// Actions
import { activeShow } from '../actions/showActions';

export default function Home() {

  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(activeShow(''));
  },[])

  return (
    <Layout title='Listado de Tv shows'>
      <div className={styles.home}>
        <h1 className={styles['gradient-text']}>
            Test API TMDB
        </h1>
      </div>
    </Layout>
  )
}
