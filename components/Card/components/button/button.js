import styles from './button.module.css';


// button for generic card
const Button = ({
    name = 'add',
    label = 'Hello',
    isFavorite = false,
    handleClick = ()=>{}
}) => {
    return(
        <button 
         className={`${styles.button} ${isFavorite ? styles.active : ''}`}
         onClick={handleClick}
        >
            <i className="material-icons">{name}</i>
           <span>
                {label}
            </span> 
        </button>
    );
}

export default Button;