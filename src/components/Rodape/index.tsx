import styles from './styles.module.css'

export function Rodape(){
    return (
        <footer className={styles.rodape}>
            <a href="#">Entenda a técnica pomodoro 🍅</a>
            <a href="#">Chronos Pomodoro &copy; {new Date().getFullYear()} - Feito com 💚</a>
        </footer>
    );
}