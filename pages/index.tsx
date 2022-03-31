import Head from 'next/head'
import React, { useState } from 'react'
import { Header } from '../components/Header';
import { Rules } from '../components/Rules';
import { Play } from '../components/Play';
import { Results } from '../components/Results';
// import styles from '../styles/Home.module.css'
 
export default function Home() {
  const [advancedMode, setAdvancedMode] = useState(false);
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(-1);
  const [score, setScore] = useState(0);

  function changeModes(event: React.MouseEvent){
    event.preventDefault();
    setAdvancedMode(!advancedMode); //alerts button
  }

  return (
    <div >
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header advanced={advancedMode} score={score} />
      <footer>
        <div onClick={changeModes} className="modes">
          {advancedMode ? "Normal" : "Advanced"} Mode
        </div>
        <div className="rules" onClick={() => setOpen(!open)}>
          Rules
        </div>
      </footer>

      { selected >= 0 ? (
        <Results 
          advanced={advancedMode}
          selected={selected}
          setselected={(value) => setSelected(value)}
          setscore={setScore}
        />
      ) : (
        <Play
          setselected={(value) => setSelected(value)}
          advanced={advancedMode}
        />
      )}

      <Rules 
        open={open}
        advanced={advancedMode}
        setopen={() => setOpen(!open)}
      />
    </div>
  )
}
