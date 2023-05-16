import React from 'react'
import { useContext } from 'react';
import { myTheme as themes, ThemeContext } from '../Theme';

function Button({children, style, ...props}) {
  const {theme} = useContext(ThemeContext)
  return (
    <button style={{backgroundColor: themes[theme].buttonColor, ...style}} {...props} >{children}</button>
  )
}

export default Button