import styles from './styles.module.css'

type HeadingProps = { /* Tipagem das propriedades da função com typescript */
    children: React.ReactNode;
}

export function Heading({children}: HeadingProps){
    // const classes = 'heading';
    // console.log(props); props = {children} destructuring
    return <div className={`${styles.heading} ${styles.pink}`}>{children}</div>
}