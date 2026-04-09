import { Container } from './components/Container'
import { Heading } from './components/Heading'
import { Logo } from "./components/Logo";
import { Menu } from "./components/Menu";
import { HistoryIcon, HomeIcon, SettingsIcon, SunIcon } from "lucide-react";

import "./styles/theme.css"
import "./styles/global.css"
import { CountDown } from './components/CountDown';

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
                <Logo />
            </Container>

            <Container>
                <Menu>
                    <a href="#">
                        <HomeIcon />
                    </a>

                    <a href="#">
                        <HistoryIcon />
                    </a>

                    <a href="#">
                        <SettingsIcon />                    
                    </a>

                    <a href="#">
                        <SunIcon />
                    </a>
                </Menu>
            </Container>

            <Container>
                <CountDown />
            </Container>

            <Container>
                <Heading>FOOTER</Heading>
            </Container>
        </>
    );
}

// export default App - Export não nomeado
