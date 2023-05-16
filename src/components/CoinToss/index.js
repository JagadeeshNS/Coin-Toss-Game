// Write your code here
import {Component} from 'react'
import './index.css'

const headsImageUrl = 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
const TailsImageUrl = 'https://assets.ccbp.in/frontend/react-js/tails-img.png'

class CoinToss extends Component {
  state = {imageUrl: headsImageUrl, headsCount: 0, tailsCount: 0}

  onClickToss = () => {
    const {headsCount, tailsCount} = this.state
    const toss = Math.floor(Math.random() * 2)
    let latestImageUrl = ''
    let latestHeadCoins = headsCount
    let latestTailsCount = tailsCount

    if (toss === 0) {
      latestImageUrl = headsImageUrl
      latestHeadCoins += 1
    } else {
      latestImageUrl = TailsImageUrl
      latestTailsCount += 1
    }

    this.setState({
      imageUrl: latestImageUrl,
      headsCount: latestHeadCoins,
      tailsCount: latestTailsCount,
    })
  }

  render() {
    const {imageUrl, headsCount, tailsCount} = this.state
    const TotalCount = headsCount + tailsCount
    return (
      <div className="app-container">
        <div className="container">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="paragraph">Heads (or) Tails</p>
          <img src={imageUrl} alt="toss result" className="image" />
          <div>
            <button type="button" className="button" onClick={this.onClickToss}>
              Toss Coin
            </button>
          </div>
          <div className="span-container">
            <p className="span">Total: {TotalCount}</p>
            <p className="span">Heads: {headsCount}</p>
            <p className="span">Tails: {tailsCount}</p>
          </div>
        </div>
      </div>
    )
  }
}
export default CoinToss
