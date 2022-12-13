import React from 'react'

import Newscomponent from './newscomponent'
 
 
 export default function Specificnews(props) {
 
  
  
   return (
    <Newscomponent  noofitem={12} genre={props.type} api={props.apiKey} />
   )
 }
 