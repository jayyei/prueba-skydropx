import styles from './fact.module.css';

const Fact = ({children}) => {
    return (
        <span className={styles.fact}>
            {children}
        </span>
    );
}

export default Fact;