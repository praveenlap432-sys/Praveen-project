import React, { useEffect } from 'react'

function receive(counter) {

useEffect(()=>{
    document.title=`count ${counter}`
})
  
}

export default receive