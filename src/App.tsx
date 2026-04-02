import { Heading } from "./components/Heading";

import "./styles/theme.css"
import "./styles/global.css"

// Nome da function sempre em pascal case. Ex: ExemploDeNome
export function App(){ // Export nomeado diretamente da função
    // console.log('oi')

    return(
        // Os elementos devem estar envoltos por apenas um elemento pai
        <> 
            <Heading attr={123} attr2='String'>Olá Mundo1</Heading> {/* Propriedades e Children*/}
            {/* <Heading>Olá Mundo2</Heading> 
            <Heading>Olá Mundo3</Heading>  */}
            <br />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde saepe numquam laudantium minus sunt maxime ipsum officiis cupiditate maiores explicabo beatae obcaecati dicta libero exercitationem ullam, aperiam repellat provident corporis.</p>
            <p>Quo deleniti similique consectetur id asperiores doloribus maxime rem magnam! Commodi accusamus architecto magnam deserunt temporibus nobis sit iste nihil molestias! Ipsa ad accusantium laboriosam aperiam aut aliquam, maiores excepturi!</p>
        </>
    );
}

// export default App - Export não nomeado
