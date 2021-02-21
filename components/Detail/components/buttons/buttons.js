import Percentage from '../percentage/percentage';
import Button from '../button/buton';
import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import styles from './buttons.module.css';
import { useRouter } from 'next/router';

// actions
import { favoriteShow } from '../../../../actions/showActions';

const Buttons = () => {
    
    const [isActive, setIsActive] = useState(false);
    
    const dispatch = useDispatch();
    const router = useRouter();

    const showDetail = useSelector(state => state.show.showDetail);
    const favoriteShows = useSelector(state => state.show.favoriteShows);

    useEffect(()=>{
        const showInFavorites = favoriteShows.find(id => id === showDetail.id);
        setIsActive(showInFavorites ? true : false);
    },[showDetail, favoriteShows]);

    // For add a show to favorites
    const handleFavorite = () => {
        dispatch(favoriteShow(showDetail['id']));
    };

    // Just go back
    const handleBack = () => {
        router.back()
    }

    return(
        <>
           {showDetail && 
           <div className={styles.buttons}>
                <Percentage unit={showDetail['vote_average']*10}/>
                <Button 
                 handleClick={handleFavorite}
                 active={isActive} 
                />
                <Button 
                 handleClick={handleBack}
                 icon='arrow_back'
                />
            </div>}
        </>
    );
}

export default Buttons;