import { Container } from './components/Container'
import { Heading } from './components/Heading'
import { Logo } from "./components/Logo";
import { Menu } from "./components/Menu";
import { HistoryIcon, HomeIcon, PlayCircleIcon, SettingsIcon, SunIcon } from "lucide-react";

import "./styles/theme.css"
import "./styles/global.css"
import { CountDown } from './components/CountDown';
import { Inputs } from './components/Inputs';
import { Cycles } from './components/Cycles';
import { Buttons } from './components/Buttons';
import { Rodape } from './components/Rodape';

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
                <form className='form' action="">
                    <div className="formRow">
                        <Inputs 
                            type="text" 
                            id='input' 
                            labelTask='Task' 
                            title='Titulo Task' 
                            placeholder='Ex.: estudar para a prova'
                        />
                    </div>

                    <div className="formRow">
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>

                    <div className="formRow">
                        <Cycles />
                    </div>

                    <div className="formRow">
                        <Buttons icon={<><PlayCircleIcon /></>}/>
                    </div>
                </form>
            </Container>

            <Container>
                <Rodape />
            </Container>
        </>
    );
}

// export default App - Export não nomeado
