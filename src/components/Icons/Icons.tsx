import "./icons.css"

type IconsProps = {
    src: string,
    alt: string,
    iconsClic: (alt: string) => void,
}

export function Icons({src, alt, iconsClic}: IconsProps ){
    function click(){
        iconsClic(alt)
    }

    return (
        <button className="button" onClick={click}><img className="icons" src={src} alt={alt} /></button>
    )
}