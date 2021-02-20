import { useState, useEffect, useCallback } from 'react';
import styles from './title-card.module.css';

// Title card
const titleCard = ({
    text = 'Mision imposible skyfall'
}) => {

    const [titleMin, setTitleMin] = useState('');

    const handleText = useCallback(
        (txt)=> {
            const REGEX_JAPANESE = /[\u3000-\u303f]|[\u3040-\u309f]|[\u30a0-\u30ff]|[\uff00-\uff9f]|[\u4e00-\u9faf]|[\u3400-\u4dbf]/;
            const REGEX_CHINESE = /[\u4e00-\u9fff]|[\u3400-\u4dbf]|[\u{20000}-\u{2a6df}]|[\u{2a700}-\u{2b73f}]|[\u{2b740}-\u{2b81f}]|[\u{2b820}-\u{2ceaf}]|[\uf900-\ufaff]|[\u3300-\u33ff]|[\ufe30-\ufe4f]|[\uf900-\ufaff]|[\u{2f800}-\u{2fa1f}]/u;
            if( REGEX_CHINESE.test(txt) || REGEX_JAPANESE.test(txt) ){
                return txt.slice(0, 15).concat('', '...');
            }
            if( txt.length > 35 ){
                return txt.slice(0, 35).concat('', '...');
            }
            return txt;
        }
    ,[]);

    useEffect(() =>{
        setTitleMin(handleText(text))
    },[text])

    return(
        <h1 className={styles['title-card']}>
            {titleMin}
        </h1>
    );
}

export default titleCard;