import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

// Services
import { getInfo }  from '../../services/tmdb';

// Components
import Layout from '../../components/layout';
import Card from '../../components/Card/card';

// Styles
import styles from './index.module.css';



export default function ShowList() {

  // state for results
  const [results, setResults] = useState([])
  
  const router = useRouter();
  const { type, title } = router.query;

  useEffect(async ()=>{
    if (!type) return;
    const info = await getInfo(type, 'en-US', '1' );
    setResults(info.results)
  }, [type]);
  
  return (
    <Layout title={title}>
      <div className={styles.parent}>
        {results && results.map(e => (
          <Card
            info={e}
            key={e.id}
          />
        ))}
      </div>
    </Layout>
  )
}