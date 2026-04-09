import styles from './styles.module.css'

type ButtonsProps = {
    icon: React.ReactNode // Funciona como children
    color?: 'green' | 'red';
} & React.ComponentProps<'button'>;

export function Buttons({icon, color='green', ...props} : ButtonsProps){ // Assume verde como padrão.
    return(
        <button className={`${styles.button} ${styles[color]}`} {...props}> {icon} </button>
    )
}