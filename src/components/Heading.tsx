import styles from './Heading.module.css'

export function Heading(props){
    // const classes = 'heading';
    // console.log(props);
    return <h1 className={`${styles.heading} ${styles.pink}`}>{props.children}</h1>
}