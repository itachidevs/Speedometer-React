// Write your code here
import {Component} from 'react'

import './index.css'

class Speedometer extends Component {
  state = {speed: 0}

  Accelerate = () => {
    this.setState(previousSpeed => ({speed: previousSpeed.speed + 10}))
    const {speed} = this.state
    if (speed >= 200) {
      this.setState(previousSpeed => ({speed: 200}))
    }
  }

  ApplyBreak = () => {
    this.setState(previousSpeed => ({speed: previousSpeed.speed - 10}))
    const {speed} = this.state
    if (speed <= 0) {
      this.setState(previousSpeed => ({speed: 0}))
    }
  }

  render() {
    const {speed} = this.state
    return (
      <div className="container">
        <h1 className="container-heading">SPEEDOMETER</h1>
        <img
          className="middle-image"
          alt="speedometer"
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
        />
        <div className="details-container">
          <h1 className="details-container-heading">Speed is {speed}mph</h1>
          <p className="instruction">Min Limit is 0mph, Max Limit is 200mph</p>
          <div className="btn-container">
            <button type="button" className="btn" onClick={this.Accelerate}>
              Accelerate
            </button>
            <button
              type="button"
              className="btn-outline"
              onClick={this.ApplyBreak}
            >
              Apply Brake
            </button>
          </div>
        </div>
      </div>
    )
  }
}
export default Speedometer
