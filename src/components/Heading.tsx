import styles from './Heading.module.css'

type HeadingProps = { /* Tipagem das propriedades da função com typescript */
    children: React.ReactNode;
}

export function Heading({children}: HeadingProps){
    // const classes = 'heading';
    // console.log(props); props = {children} destructuring
    return <h1 className={`${styles.heading} ${styles.pink}`}>{children}</h1>
}