import {Component} from 'react'
import Welcome from './components/Welcome'

import './App.css'

class App extends Component {
  state = {isSubscribed: false}

  onChange = () => {
    this.setState(prevState => ({isSubscribed: !prevState.isSubscribed}))
  }

  getButtonText = () => {
    const {isSubscribed} = this.state
    return isSubscribed ? 'Subscribed' : 'Subscribe'
  }

  render() {
    const buttonText = this.getButtonText()
    return (
      <div className="bg-container">
        <h1 className="heading">Welcome</h1>
        <p className="heading-2">Thank you! Happy Learning</p>
        <button className="button" onClick={this.onChange} type="button">
          {buttonText}
        </button>
      </div>
    )
  }
}

export default App
