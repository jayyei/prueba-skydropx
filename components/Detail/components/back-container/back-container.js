import { useSelector } from 'react-redux';

const backContainer = ({img='', children}) => {

    const showDetail = useSelector(state => state.show.showDetail);

    return (
        <div className={'back-img'}>
            {showDetail && <style jsx='true'>{`
                .back-img {
                    background-image: url("https://image.tmdb.org/t/p/w1280${showDetail['poster_path']}");
                    color: white;
                    background-repeat: no-repeat;
                    background-size: cover;
                    background-color: black;
                    opacity: 0.7;
                    z-index: -2;
                    height: 100vh;
                }
                @media(max-width: 800px) {
                    .back-img {
                        height: auto;
                    }
                }
            `}</style>}
            {children}
        </div>
    );
}

export default backContainer;