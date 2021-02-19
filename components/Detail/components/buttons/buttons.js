import Percentage from '../percentage/percentage';
import Button from '../button/buton';
import { useSelector } from 'react-redux';
import styles from './buttons.module.css';

const Buttons = () => {

    const showDetail = useSelector(state => state.show.showDetail);

    return(
        <>
           {showDetail && 
           <div className={styles.buttons}>
                <Percentage unit={showDetail['vote_average']*10}/>
                <Button />
                <Button icon='arrow_back'/>
            </div>}
        </>
    );
}

export default Buttons;