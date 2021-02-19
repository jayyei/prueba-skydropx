import { useSelector } from 'react-redux';
import styles from './description.module.css';


const Description = () => {

    const showDetail = useSelector(state => state.show.showDetail);

    return(
        <div className={styles.description}>
            {showDetail && 
            <>
                <p>{showDetail['tagline']}</p>
                <h2>Descripción</h2>
                <p>
                    {showDetail['overview']}  
                </p>
            </>}
        </div>
    );
}

export default Description;