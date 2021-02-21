import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';

// Services
import { getInfo }  from '../../services/tmdb';

// Components
import Layout from '../../components/layout';
import Card from '../../components/Card/card';
import Paginator from '../../components/Paginator/paginator'

// Styles
import styles from './index.module.css';

// Actions
import { activeShow, loading } from '../../actions/showActions';
import { reset, totalPages, Page } from '../../actions/paginationActions';



export default function ShowList() {

  const [dicType] = useState({
    popular: 'Shows mas populares',
    top_rated: 'Shows mas valorados',
    airing_today: 'Shows al aire'
  })

  // state for results
  const [results, setResults] = useState([])
  
  const dispatch = useDispatch();

  // extract query info
  const router = useRouter();
  const { type, title } = router.query;

  // get page info
  const page = useSelector( state => state.pagination.page);

  //load info
  useEffect(async ()=>{
    if (!type) return;
    dispatch(loading(true));
    const info = await getInfo(type, 'en-US', '1' );
    dispatch(Page(1));
    dispatch(activeShow(dicType[`${type}`]));
    setResults(info.results);
    dispatch(reset());
    dispatch(totalPages(info['total_pages']));
    dispatch(loading(false));
  }, [type]);

  // For pagination
  useEffect(async()=>{
    if(!type) return;
    dispatch(loading(true));
    const info = await getInfo(type, 'en-US', `${page}` );
    setResults(info.results);
    dispatch(loading(false));
  },[page, type])

  // info about order 
  const alpha = useSelector( state => state.pagination.alphabeticalOrder);
  const score = useSelector( state => state.pagination.scoreOrder);

  // useEffect Order by name or score
  useEffect(async()=>{
    if(!alpha && !score && !type) return;
    if(!alpha && !score && type) {
      dispatch(loading(true));
      const info = await getInfo(type, 'en-US', '1' );
      setResults(info.results);
      dispatch(loading(false));
      return;
    } 
    if(alpha && !score){
      const orderByAlpha = results.sort((a, b) =>{
        if (a.name > b.name ) return 1;
        if (a.name < b.name ) return -1;
        return 0;
      });
      setResults([...orderByAlpha]);
    }
    if(!alpha && score){
      const orderByScore= results.sort((a, b) =>{
        return a['vote_average'] - b['vote_average'];
      });
      // debugger
      setResults([...orderByScore].reverse());
    }
  },[alpha, score]);
  
  return (
    <Layout title={title}>
      <Paginator/>
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