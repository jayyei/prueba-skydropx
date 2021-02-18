import { useState, useEffect } from 'react';
import styles from './header.module.css';

// Components
import Button from './components/button/button';
import Info from './components/info/info';


// principal header
const Header = (props) => {
    
    // titles
    const [titles] = useState(['Shows mas populares', 'Shows mas valorados', 'Shows al aire'])

    // Principal routes
    const [btnRoutes] = useState([
        { href: `/popular?title=${titles[0]}`, text: titles[0] },
        {href: `/top_rated?title=${titles[1]}`, text: titles[1] },
        {href: `/airing_today?title=${titles[2]}`, text: titles[2] }
    ]);

    return(
        <header 
         style={{backgroundColor: '#032541', padding: '0.5rem'}}
         className={styles['flex-parent']}
        >
            <Info text='Test-Skydropx'/>
            <div
             className={styles['flex-parent']}
            >
                {btnRoutes.map((e,i) =>(
                    <Button 
                     key={i}
                     href={e.href}
                     text={e.text}
                    />
                ))}
            </div>
        </header>
    );
}


export default Header;