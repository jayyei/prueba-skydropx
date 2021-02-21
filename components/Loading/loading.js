import { useSelector } from 'react-redux';
import styles from './loading.module.css';
const Loading = () => {

    const isLoading = useSelector( state => state.show.isLoading);

    if(isLoading)
        return(
            <div className={styles.container}>
                <div className={styles.spinner}>
                </div>
            </div>
        );
    return null;
}

export default Loading;