import { action, observable } from 'mobx'

class About {
  @observable
  public name: number = 0

  @action.bound
  public setName() {
    this.name = new Date().valueOf()
  }
}

export const storeAbout = new About()
