import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import styles from './poster.module.css';

const Poster = ({src='', onError=()=>{}}) => {

    const [poster, setPoster] = useState('');

    const showDetail = useSelector(state => state.show.showDetail);

    useEffect(()=>{
        if (!showDetail) return;
        setPoster(`https://image.tmdb.org/t/p/w780/${showDetail['poster_path']}`)
    },[showDetail]);

    return (
        <img className={styles.poster}
            loading="lazy"
            src={poster}
            onError={()=> setPoster('/no_image.png')}
        />
    );
}

export default Poster;