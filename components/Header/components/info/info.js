import styles from './info.module.css'


const Info = ({
    text='informa'
}) => {
    return (
        <h1 className={styles['gradient-text']}>{text}</h1>
    );
}

export default Info;