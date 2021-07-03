import { ButtonHTMLAttributes } from 'react'
import '../styles/button.scss'

type Buttonprops = ButtonHTMLAttributes<HTMLButtonElement>;

export function Button(props: Buttonprops) {
    return (
        <button className="button" {...props}/>
    )
}