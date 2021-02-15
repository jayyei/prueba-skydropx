
import styles from './button.module.css'
import Link from 'next/link'

const Button = ({
    text='Hello'
}) => {
    return (
        <Link href="/home">
            <button className={styles.button}>
                {text}
            </button>
        </Link>
    );
}

export default Button;