import { TimerIcon } from 'lucide-react'
import styles from './styles.module.css'

// type LogoProps = { /* Tipagem das propriedades da função com typescript */
//     children: React.ReactNode;
// }

export function Logo(){
    // const classes = 'logo';
    // console.log(props); props = {children} destructuring
    return <div className={`${styles.logo} ${styles.pink}`}>
        <a href="#" className={styles.logoLink}>
            <TimerIcon size={64}/>
            <span>Chronos</span>
        </a>
    </div>
}