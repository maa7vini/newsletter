import './App.css';

import imgDesktop from './assets/illustration-sign-up-desktop.svg'
import imgMobile from './assets/illustration-sign-up-mobile.svg'
import iconConfirmation from './assets/icon-success.svg'

import { useState } from 'react';

function App() {

  const [ inputErr, setInputErr ] = useState('')

  const [ styleErrInput, setStyleErrInput ] = useState("containerLeftInput input")

  const [ styleErrLabel, setStyleErrLabel ] = useState("containerLeftInput label")

  const [ excludingContainer, setExcludingContainer ] = useState("containerNewsletter")

  const [ showContainer, setShowContainer ] = useState("containerConfirmation")

  const handleInput = (e) => {
    setInputErr(e.target.value)
  }

  const changeStyle = () => {
    setStyleErrInput("containerLeftInputError input")
    setStyleErrLabel("containerLeftInputError label")
  }

  function verifyInput(){
    if(inputErr != 'admin@gmail.com'){
      changeStyle()
    }else{
      setExcludingContainer("excludingContainer")
      setShowContainer("showContainer")
    }
  }

  function refresh(){
    window.location.reload()
  }

  return (
    <div className="App">

      <div className={showContainer}>

        <div className="confirmationTxt"> 
          <img src={iconConfirmation} alt='Icon de confirmação'/>

          <h1> Thanks for <br /> subscribing! </h1>

          <p> A confirmation email has been sent to <br /> 
          <span style={{fontWeight: "bold"}}> {inputErr} </span>. Please open it and click <br />
          the button inside to confirm your subscription </p>

          <button onClick={refresh} > Dismiss message </button>
        </div>

      </div>

      <div className={excludingContainer}>
        <div className='containerLeft'>

          <div className='containerLeftTxt'>

            <h1> Stay updated! </h1>

            <p> Join 60,000+ product managers receiving monthly updates on: </p>

            <ul>
              <li> Product discovery and building what matters </li>
              <li> Measuring to ensure updates are a success </li>
              <li> And much more! </li>
            </ul>

            <div className={styleErrInput}>

              <label className={styleErrLabel}> Email address </label>
              <input 
              placeholder='email@company.com' 
              type='email'
              value={inputErr}
              onChange={handleInput} />

            </div>

            <button onClick={verifyInput}> Subscribe to monthly newsletter </button>

          </div>

        </div>

        <div className='containerRight'>
          <picture>
            <source srcSet={imgDesktop} media='(min-width: 850px)' />

            <img src={imgMobile} />
          </picture>
        </div>
      </div>
    </div>
  );
}

export default App;
