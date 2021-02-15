import { useState, useEffect } from 'react';
import styles from './header.module.css';

// Components
import Button from './components/button/button';
import Info from './components/info/info';

// Services
import { getInfo }  from '../../services/tmdb'


// principal header
const Header = (props) => {
    
    // Principal routes
    const [btnRoutes] = useState([
        {href: '/popular', text: 'Shows mas populares'},
        {href: 'top_rated', text: 'Shows mas valorados'},
        {href: 'airing_today', text: 'Shows al aire'}
    ])

    useEffect(async ()=>{
        const info = await getInfo('top_rated', 'en-US', '1' )
        console.log(info)
    },[])

    return(
        <header 
         style={{backgroundColor: '#032541', padding: '0.5rem'}}
         className={styles['flex-parent']}
        >
            <Info/>
            <div
             className={styles['flex-parent']}
            >
                {btnRoutes.map(e =>(
                    <Button 
                     href={e.href}
                     text={e.text}
                    />
                ))}
            </div>
        </header>
    );
}


export default Header;