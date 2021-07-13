import logoImg from '../assets/images/logo.svg';
import { Button } from '../components/Button'


export function Room() {
    return(
        <div id="page-room">
            <header>
                <div className="content">
                    <img src={logoImg} alt="Letmeask"/>
                    <div>code</div>
                </div>
            </header>
            <main className="content">
                <div className="room-title">
                    <h1>React Room</h1>
                    <span>4 question</span>
                </div>

                <form>
                    <textarea 
                    placeholder="What is your question?"
                    />

                    <div className="form-footer">
                        <span>TO invite a question, <button>Sing in</button>.</span>
                        <Button type="submit">Send question</Button>
                    </div>
                </form>
            </main>
        </div>
    )
}
