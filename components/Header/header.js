import Button from './components/button/button';
import Info from './components/info/info';
import styles from './header.module.css';
const Header = (props) => {
    return(
        <header 
         style={{backgroundColor: '#032541'}}
         className={styles['flex-parent']}
        >
            <Info/>
            <div
             className={styles['flex-parent']}
            >
                <Button/>
                <Button/>
                <Button/>
            </div>
        </header>
    );
}


export default Header;