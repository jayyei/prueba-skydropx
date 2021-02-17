import styles from './title-card.module.css';

// Title card
const titleCard = ({
    text = 'Mision imposible skyfall'
}) => {
    return(
        <h1 className={styles['title-card']}>
            {text}
        </h1>
    );
}

export default titleCard;