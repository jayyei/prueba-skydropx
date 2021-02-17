
import styles from './button.module.css';
import Link from 'next/link';

const Button = ({
    text='Hello',
    href='/'
}) => {
    return (
        <Link href={href}>
            <button className={styles.button}>
                {text}
            </button>
        </Link>
    );
}

export default Button;