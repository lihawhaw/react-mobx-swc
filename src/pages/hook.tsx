import { observer } from 'mobx-react'
import React, { useState } from 'react'
import { storeAbout } from 'store/about'

export const HookPage = observer(() => {
  const [test, setState] = useState(0)
  const change = () => {
    storeAbout.setName()
    setState(new Date().valueOf())
  }
  return (
    <div>
      hook
      <p>
        <button onClick={change}>click</button>
        <p>{storeAbout.name}</p>
        <p>{test}</p>
      </p>
    </div>
  )
})
