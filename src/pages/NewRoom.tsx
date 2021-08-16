import { FormEvent, useState } from 'react'
import {Link, useHistory} from 'react-router-dom'
import illustrationImg from '../assets/images/illustration.svg';
import LogoImg from '../assets/images/logo.svg';

import '../styles/auth.scss'
import { Button } from '../components/Button'
import { useAuth } from '../hooks/useAuth';
import { database } from '../services/firebase'


export function NewRoom() {
    const {user} = useAuth()
    const history = useHistory()
    

    const [newRoom, setNewRoom] = useState('');

    async function hundleCreateRoom(event: FormEvent) {
        event.preventDefault();

        if( newRoom.trim() == "") {
            return
        }

        const roomRef = database.ref('rooms');

        const firebaseRoom = await roomRef.push({
            title: newRoom,
            authorId:user?.id,
        });

        history.push(`/rooms/${firebaseRoom.key}`)
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
                    <h2>Criar uma nova sala</h2>
                    <div className="separator">ou entre em uma sala</div>
                    <form onSubmit={hundleCreateRoom}>
                        <input 
                        type="text"
                        placeholder="Nome da Sala"
                        onChange={event => setNewRoom(event.target.value)}
                        value={newRoom}
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