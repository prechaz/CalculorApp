import React, { useEffect, useState } from 'react'
import style from './calculator.module.css'
import Theme from '../Theme/Theme.jsx'
import Input from '../Input/Input.jsx'
import Button from '../Button/Button.jsx'

function Calculator() {
    const[input, setInput] = useState('')
    const [theme, setTheme] = useState(1);

    // Effect to change the body background based on the theme
    useEffect(() => {
      if (theme === 1) {
        document.body.style.backgroundColor = 'hsl(222, 26%, 31%)'; // Theme 1 background
      } else if (theme === 2) {
        document.body.style.backgroundColor = 'hsl(0, 0%, 90%)'; // Theme 2 background
      } else if (theme === 3) {
        document.body.style.backgroundColor = 'hsl(268, 75%, 9%)'; // Theme 3 background
      }
    }, [theme]);
    return (
        <div className={style.calcBody}>
            <Theme theme={theme} setTheme={setTheme}/>
            <Input theme={theme} input={input} setInput={setInput}/>
            <Button  theme={theme} input={input} setInput={setInput}/>
            
        </div>
    )
}

export default Calculator
