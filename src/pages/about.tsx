import { observer } from 'mobx-react'
import React, { Component } from 'react'
import { storeAbout } from 'store/about'

// @inject('store')s
@observer
export class About extends Component {
  /**
   * changeDate
   */
  public changeDate = () => {
    storeAbout.setName()
    // this.setState({})
  }

  /**
   * render
   */
  render() {
    return (
      <div>
        <button onClick={this.changeDate}>click</button>
        <p>{storeAbout.name}</p>
      </div>
    )
  }
}
