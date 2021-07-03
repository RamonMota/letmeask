import {Link} from 'react-router-dom'
import illustrationImg from '../assets/images/illustration.svg';
import LogoImg from '../assets/images/logo.svg';

import '../styles/auth.scss'
import { Button } from '../components/Button'


export function NewRoom() {
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
                    <h2>Criar uma nova sala</h2>
                    <div className="separator">ou entre em uma sala</div>
                    <form>
                        <input 
                        type="text"
                        placeholder="Nome da Sala"
                        />
                        <Button type="submit" >
                            Criar sala
                        </Button>
                    </form>
                        <p>Quer entrar em uma sala existente <Link to="/">clique aqui</Link></p>
                </div>
            </main>
        </div>
    )
}