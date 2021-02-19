import styles from './title.module.css';
import Fact from '../fact/fact';
import { useSelector } from 'react-redux';
import { useCallback } from 'react';

const Title = () => {

    const showDetail = useSelector(state => state.show.showDetail);
    
    const handleRunTime = useCallback(()=>{
        let duration = showDetail['episode_run_time'][0];
        if(duration >= 60 && duration % 60 === 0) {
            return `${parseInt(duration/60)}h`
        }
        if(duration >= 60 && duration % 60 > 0) {
            return `${parseInt(duration/60)}h ${duration% 60}m`
        }
        console.log(duration)
        return `${duration}m`
    },[showDetail])

   

    return(
        <div className={styles['first-section']}>  
            {showDetail && 
            <>
                <h1>{showDetail['name']}</h1>
                <div>
                    <Fact>{showDetail['first_air_date']?.replace(/-/g,'/')}</Fact>
                    <Fact>{showDetail['genres']?.map(e=> e.name).join(', ')}</Fact>
                    <Fact>{handleRunTime()}</Fact>
                </div>
            </>}
        </div>
    );
}

export default Title;