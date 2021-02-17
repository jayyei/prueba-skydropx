import styles from './info.module.css';
import Link from 'next/link';


// Info label
const Info = ({
    text='informa',
    href='/'
}) => {
    return (
        <Link href={href}>
            <h1 className={styles['gradient-text']}>
                {text}
            </h1>
        </Link>
    );
}

export default Info;