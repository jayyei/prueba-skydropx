// from Redux;
import { useDispatch, useSelector } from 'react-redux';

import styles from './card.module.css';
import Button from './components/button/button';
import Title from './components/title-card/title-card';
import Description from './components/description/description';
import { useRouter } from 'next/router'
// actions
import { idShow, favoriteShow } from '../../actions/showActions';
import { useEffect, useState } from 'react';


// generic card for tv shows
const Card = ({info}) => {

    const [poster, setPoster] = useState('');

    const dispatch = useDispatch();
    const router = useRouter();

    const favorite = useSelector( state => state.show.favoriteShows.find(e => e === info['id']))

    useEffect(()=>{
        setPoster(`https://image.tmdb.org/t/p/w300/${info['poster_path']}`)
    },[info])

    // for store the id show in redux and redirect to detail page
    const handleAdd = () => {
        dispatch(idShow(info['id']));
        router.push(`/show/${info['id']}`)
    };
    
    const handleFavorite = () => {
        dispatch(favoriteShow(info['id']));
    };

    return (
        <div className={styles['card-container']}>
            <div className={styles['card-left']}>
                <Title
                 text={info['original_name']}
                />
                <div className={styles['card-info']}>
                    <p>Calificación: {info['vote_average']}</p>
                </div>
                <div className={styles['card-description']}>
                    <Description
                        text={info['overview']}
                    />
                </div>
                <div className={styles['card-buttons']}>
                    <Button
                        name='add'
                        label='ver mas'
                        handleClick={handleAdd}
                    />
                    <Button
                        name='favorite'
                        label='favoritos'
                        isFavorite={favorite}
                        handleClick={handleFavorite}
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