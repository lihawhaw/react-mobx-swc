import { observer } from 'mobx-react'
import { About } from 'pages/about'
import { HookPage } from 'pages/hook'
import React, { Component } from 'react'

@observer
export class APP extends Component {
  /**
   * render
   */
  public render() {
    return (
      <div>
        app1
        <About />
        <hr />
        <HookPage />
      </div>
    )
  }
}
