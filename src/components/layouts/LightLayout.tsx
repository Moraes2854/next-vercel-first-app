import React, { ReactElement } from 'react'
import { FC } from 'react';

interface LightLayoutProps{
  children: ReactElement;
}

export const LightLayout:FC<LightLayoutProps> = ({ children }) => {

  return (
    <div 
      style={{
        backgroundColor:'#eeeee4',
        borderRadius:'5px',
        color:'black',
        padding:'10px',
      }}
    >

      <h3> Light-Layout </h3>


      { children }

    </div>
  )
  
}
