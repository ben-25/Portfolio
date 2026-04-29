import heroBg from '../../assets/hero-background.jpg'
import './hero.css'

export function Hero(){
    return (
        <img className='background' src={heroBg} alt="fond d'ecran" />
    )
}