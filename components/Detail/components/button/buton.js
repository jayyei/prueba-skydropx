import styles from './button.module.css';


const Button = ({icon='favorite', active=false, handleClick=()=>{}}) => {
    return(
        <button 
         onClick={handleClick}
         className={`${styles['button-detail']} ${active? styles['active'] : ''}`}
        >
            <span className={`material-icons ${styles['icon-detail']}`}>
                {icon}
            </span>
        </button>
    );
};

export default Button;