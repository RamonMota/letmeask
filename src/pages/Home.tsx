import {useHistory} from 'react-router-dom'

import illustrationImg from '../assets/images/illustration.svg';
import LogoImg from '../assets/images/logo.svg';
import googleIconImg from '../assets/images/google-icon.svg';

import '../styles/auth.scss'
import { Button } from '../components/Button'


export function Home() {
    const history = useHistory();

    function navegateToNewRoom() {
        history.push('/rooms/new')
    }
    return (
        <div id="page-auth">
            <aside>
                <img src={illustrationImg} alt="Illustrator banner" />
                <strong>
                    Toda pergunta tem uma resposta.
                </strong>
                <p>
                    Aprenda e compartilhe conhecimento
                    com outras pessoas
                </p>
            </aside>
            <main>
                <div className="main-content">
                    <img src={LogoImg} alt="LatmeAsk's Logo" />
                    <button onClick={navegateToNewRoom} className="create-room-google">
                        <img src={googleIconImg} alt="Google's logo" />
                        Crie sua sala com o Google
                    </button>
                    <div className="separator">ou entre em uma sala</div>
                    <form>
                        <input 
                        type="text"
                        placeholder="Digite o código da sala"
                        />
                        <Button type="submit" >
                            Entrar na sala
                        </Button>
                    </form>
                </div>
            </main>
        </div>
    )
}