import { useState } from 'react'
import './App.css'
import { Hero } from './components/hero/Hero'
import { Icons } from './components/Icons/Icons'
import { ApplicationTest } from './components/applicationTest/ApplicationTest';

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
      <Hero />
      <div className='icons-container'>
        <Icons src='https://picsum.photos/71' alt='image1' iconsClic={whatIcons}/>
        <Icons src='https://picsum.photos/70' alt='image2' iconsClic={whatIcons} />
      </div>
      {activeIcons === "image1" && <ApplicationTest />}
    </>
  )
}

export default App