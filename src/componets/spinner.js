import React, { Component } from 'react'
import loading from './loading.gif'

const spinner = ()=>{
    return (
      <div>
          <img src={loading} ></img>
      </div>
    )
  
}

export default spinner