import { useCallback, useEffect, useState } from 'react';
import styles from './description.module.css';

// Title card
const titleCard = ({
    text = 'A Few words about the tv show'
}) => {

    const [titleMin, setTitleMin] = useState('');

    const handleText = useCallback(
        (txt)=> txt.slice(0, 60).concat('', '...'), []);

    useEffect(() =>{
        setTitleMin(handleText(text))
    },[text])

    return(
        <p className={styles['description']}>
            {titleMin}
        </p>
    );
}

export default titleCard;