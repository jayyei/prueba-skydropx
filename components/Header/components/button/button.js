
import styles from './button.module.css';
import Link from 'next/link';
// from Redux;
import { useDispatch, useSelector } from 'react-redux';
// From actions
import { activeShow } from '../../../../actions/showActions';
import { useEffect, useState } from 'react';


const Button = ({ text='Hello',href='/' }) => {
    const [selected, setSelected] = useState('Hello');

    const dispatch = useDispatch();
    // get active name of show type
    const showType = useSelector( state => state.show.showType);
    
    // update the selected show for rerendering element 
    useEffect(()=> {
        setSelected(showType);
    },[showType]);

    return (
        <Link href={href}>
            <button 
             onClick={()=> dispatch(activeShow(text))}
             className={`${styles.button} ${selected === text? styles.active : ''}`}
            >
                {text}
            </button>
        </Link>
    );
}

export default Button;