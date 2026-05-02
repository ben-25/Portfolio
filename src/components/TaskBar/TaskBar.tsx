import './taskBar.css'
import { useEffect, useState } from "react"

export function TaskBar(){
    const [time, setTime] = useState<Date>(new Date());
    
    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date())
        }, 1000)
        return () => clearInterval(interval);
    }, []);

    return (
        <div className='task-bar'>
            <div className="task-button-container">
                <button>start</button>
                <button>credit</button>
                <button>paramettre</button>
            </div>
            <div className="time-container">
                <p>{time.toLocaleTimeString()}</p>
                <p>{time.toLocaleDateString()}</p>
            </div>
        </div>
    )
}