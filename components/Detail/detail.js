import BackContainer from './components/back-container/back-container';
import { DetailContext } from '../../pages/show/[id]';
import { useEffect, useState } from 'react';

import styles from './detail.module.css';

import Poster from './components/poster/poster';
import Title from './components/title/title';
import Buttons from './components/buttons/buttons';
import Descripción from './components/description/description';
import Description from './components/description/description';

const Detail = () => {

    return (
        <BackContainer>
            <div 
             id='detailContainer'
             className={styles['detail-container']}
            >
                <Poster/>
                <div>
                    <Title/>
                    <Buttons/>
                    <Description/>
                </div>
            </div>
        </BackContainer>
    );
}

export default Detail;