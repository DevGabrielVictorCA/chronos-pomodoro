import { Container } from './components/container'

import "./styles/theme.css"
import "./styles/global.css"
import { Heading } from './components/Heading'

// Nome da function sempre em pascal case. Ex: ExemploDeNome
export function App(){ // Export nomeado diretamente da função
    // console.log('oi')

    return(
        // Os elementos devem estar envoltos por apenas um elemento pai
        <> 
            {/* <Heading>
                Olá Mundo1
                <button>
                    <TimerIcon />
                </button>
            </Heading> Propriedades e Children */}

            <Container>
                <Heading>Testando o meu componente Heading</Heading>
            </Container>

            <Container>
                <Heading>MENU</Heading>
            </Container>

            <Container>
                <Heading>FORM</Heading>
            </Container>

            <Container>
                <Heading>FOOTER</Heading>
            </Container>
        </>
    );
}

// export default App - Export não nomeado
