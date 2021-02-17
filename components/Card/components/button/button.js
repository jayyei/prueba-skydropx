import styles from './button.module.css';


// button for generic card
const Button = ({
    name = 'add',
    label = 'Hello'
}) => {
    return(
        <button className={styles.button}>
            <i className="material-icons">{name}</i>
           <span>
                {label}
            </span> 
        </button>
    );
}

export default Button;