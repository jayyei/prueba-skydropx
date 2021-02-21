import styles from './button.module.css';


const Button = ({
    text = 'Hello',
    className = '', 
    handleClick=()=>{},
    active = false
}) => {
    return(
        <button 
         onClick={handleClick}
         className={`${styles.button} ${styles['pulse']}
         ${styles[className]}
         ${active ? styles.active : ''}`}
         >
            {text}
        </button>
    );
}

export default Button;