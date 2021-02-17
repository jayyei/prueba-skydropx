import { useState, useEffect } from 'react';
import styles from './card.module.css';
import Button from './components/button/button';
import Title from './components/title-card/title-card';
import Description from './components/description/description';

// generic card for tv shows
const Card = ({info}) => {
    // state for title
    const [title, setTitle] = useState('');
    
    // state for description
    const [overview, setOverview] = useState('');

    // state for poster
    const [poster, setPoster] = useState('');

    // state for vote average
    const [voteAverage, setVoteAverage] = useState('')

    //useEffect for get Data
    useEffect(()=>{
        setTitle(info['original_name']);
        setOverview(info['overview']);
        setVoteAverage(info['vote_average'])
        setPoster(`https://image.tmdb.org/t/p/w300/${info['poster_path']}`);
    }, [info]);

    return (
        <div className={styles['card-container']}>
            <div className={styles['card-left']}>
                <Title
                 text={title}
                />
                <div className={styles['card-info']}>
                    <p>Calificación: {voteAverage}</p>
                </div>
                <div className={styles['card-description']}>
                    <Description
                        text={overview}
                    />
                </div>
                <div className={styles['card-buttons']}>
                    <Button
                        name='add'
                        label='ver mas'
                    />
                    <Button
                        name='favorite'
                        label='favoritos'
                    />
                </div>
            </div>
            <div className={styles['card-image']}>
                <img 
                    loading="lazy" 
                    src={poster}
                    onError={()=> setPoster('/no_image.png')}
                />
            </div>
        </div>
    );
}

export default Card;