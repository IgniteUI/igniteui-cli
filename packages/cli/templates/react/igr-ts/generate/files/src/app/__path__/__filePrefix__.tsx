import { useState } from 'react'
import style from './style.module.css';

export default function $(ClassName)() {
  const title = 'My Custom Component';

  return (
    <div>
      <h2 className={style.title}>{title}</h2>
    </div>
  )
}
