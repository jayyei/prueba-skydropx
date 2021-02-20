import Layout from '../../../components/layout';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import Detail from '../../../components/Detail/detail';

// Services
import { getInfo }  from '../../../services/tmdb';

//actions 
import { showDetail } from '../../../actions/showActions';


export default function ShowDetail() {
    
    const router = useRouter();
    const dispatch = useDispatch();
    const { id, q } = router.query;

    useEffect(async ()=>{
        if(!id) return;
        const response = await getInfo(id);
        console.log(response);
        dispatch(showDetail(response));
    },[id]);

    return (
        <Layout title='Listado de Tv shows'>
            <Detail/>
        </Layout>
    );
}