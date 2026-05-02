import heroBg from '../../assets/hero-background.jpg'
import './backGround.css'

export function BackGround(){
    return (
        <img className='background' src={heroBg} alt="fond d'ecran" />
    )
}