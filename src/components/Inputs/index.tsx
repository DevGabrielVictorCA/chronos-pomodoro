import styles from './styles.module.css'

type InputsProps = {
    // type: 'text' | 'number' | 'search'; // UnionType. Tipar o type do formulario para apenas o que ele deve aceitar
    id: string;
    labelTask?: string; // Torna opcional a existencia da prop dentro do componente em App
} & React.ComponentProps<'input'>;

// Intersection. Pega outras propriedades externas as que foram definidas por mim. Nesse caso, todas as propriedades do Input do HTML
export function Inputs({id, labelTask, type, ...rest} : InputsProps){
    return(
        <>
            {/* Condicional javascript. Elementos com mais de uma linha precisam de () */}
            {/* {labelTask ? <label htmlFor={id}>{labelTask}</label> : ''} */}


            { labelTask && <label htmlFor={id}>{labelTask}</label> } {/* Versão reduzida, condicional sem else */}
            <input className={styles.input} id={id} type={type} {...rest}/> {/* ...rest pega todas as demais propriedades que não foram listadas especificamente nas props e as adiciona, como title, required, disabled, etc */}
        </>
    )
}