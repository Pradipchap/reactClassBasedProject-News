import React from 'react'
import Newscomponent from './newscomponent'



export default function Specificnews() {
  return (
    <Newscomponent  noofitem={10} genre={'https://newsapi.org/v2/top-headlines?q=sports&apiKey=381e2704b183499ba83f6a3eb5043cca&'}/>
  )
}

