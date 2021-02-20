import styles from './paginator.module.css';

//Components
import Button from './components/button/button';

// Redux
import { useDispatch, useSelector } from 'react-redux';

// Pagination Actions
import { activeAlpha, activeScore } from '../../actions/paginationActions';
import { useEffect, useState } from 'react';


const Paginator = () => {
    const [alpha, setAlpha] = useState(false);
    const [score, setScore] = useState(false);

    const dispatch = useDispatch();

    const isAlpha = useSelector( state => state.pagination.alphabeticalOrder);
    const isScore = useSelector( state => state.pagination.scoreOrder);

    useEffect(()=>{
        setAlpha(isAlpha);
    },[isAlpha])

    useEffect(()=>{
        setScore(isScore);
    },[isScore])

    const handleAlpha = () => {
        dispatch(activeAlpha())
    };

    const handleScore = () => {
        dispatch(activeScore())
    };
    
    return (
        <div className={styles.paginator}>
            <span>Ordenar</span>
            <Button
             active={alpha} 
             handleClick={handleAlpha}
             text={'alfabéticamente'}/>
            <Button
             active={score} 
             handleClick={handleScore}
             text={'puntuación'}/>
        </div>
    );
}

export default Paginator;