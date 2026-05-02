import { useState } from 'react'
import './App.css'
import { BackGround } from './components/BackGround/BackGround'
import { Icons } from './components/Icons/Icons'
import { ApplicationTest } from './components/applicationTest/ApplicationTest';
import { TaskBar } from './components/TaskBar/TaskBar';

function App() {
  const [activeIcons, setActiveIcons] = useState<string | null>(null);

  function whatIcons(i: string){
    if(i === activeIcons){
      setActiveIcons(null);
    }
    else {
      setActiveIcons(i)
    }
  }

  return (
    <>
      <BackGround />
      <div className='icons-container'>
        <Icons src='https://picsum.photos/71' alt='image1' iconsClic={whatIcons}/>
        <Icons src='https://picsum.photos/70' alt='image2' iconsClic={whatIcons} />
      </div>
      {activeIcons === "image1" && <ApplicationTest />}
      <footer>
        <TaskBar />
      </footer>
    </>
  )
}

export default App