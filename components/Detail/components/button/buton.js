import styles from './button.module.css';


const Button = ({icon='favorite'}) => {
    return(
        <button className={styles['button-detail']}>
            <span className={`material-icons ${styles['icon-detail']}`}>
                {icon}
            </span>
        </button>
    );
};

export default Button;