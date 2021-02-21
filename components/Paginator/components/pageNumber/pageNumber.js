import { useSelector, useDispatch } from 'react-redux';
import Button from '../button/button';

// Actions
import { Page } from '../../../../actions/paginationActions';
import { useCallback, useEffect, useState } from 'react';
const pageNumber = () => {

    const [totalState, setTotalState] = useState(1);
    const dispatch = useDispatch();

    const total = useSelector( state => state.pagination.total);

    const page = useSelector( state => state.pagination.page);

    useEffect(()=>{
        setTotalState(total);
    },[total])

    const handleAdd = useCallback(() => {
        let sumPage = page + 1;
        if(sumPage > totalState) {
            return;
        }
        dispatch(Page(sumPage));
    },[totalState, page, dispatch])

    const handleRes = useCallback(() => {
        let resPage = page - 1;
        if(resPage > 0) {
            dispatch(Page(resPage));
        }
    },[page])

    return(
        <div style={{marginRight: '2rem'}}>
            <span>página</span>
            <Button 
             handleClick={handleRes}
             text={'-'}
            />
            <Button 
             className={'no-border'}
             text={page}
            />
            <Button 
             handleClick={handleAdd}
             text={'+'}
            />
        </div>
    );
}

export default pageNumber;