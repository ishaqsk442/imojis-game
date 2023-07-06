/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.

import {Component} from 'react'

import EmojiCard from '../EmojiCard'

import NavBar from '../NavBar'

import WinOrLoseCard from '../WinOrLoseCard'

import './index.css'

// import {createPublicKey} from 'crypto'

class EmojiGame extends Component {
  state = {
    clickedImojisList: [],
    topScore: 0,
    isGameInProgress: true,
  }

  resetGame = () => {
    this.setState({clickedImojisList: [], isGameInProgress: true})
  }

  renderScoreCard = () => {
    const {emojisList} = this.props
    const {clickedImojisList} = this.state
    const isWon = clickedImojisList.length === emojisList.length

    return (
      <WinOrLoseCard
        isWon={isWon}
        onClickPlayAgain={this.resetGame}
        score={clickedImojisList.length}
      />
    )
  }

  setTopScore = currentScore => {
    const {topScore} = this.state
    let newTopScore = topScore

    if (currentScore > topScore) {
      newTopScore = currentScore
    }
    this.setState({topScore: newTopScore, isGameInProgress: false})
  }

  onImojiClick = id => {
    const {emojisList} = this.props
    const {clickedImojisList} = this.state

    const isImojiPresent = clickedImojisList.includes(id)
    const clickedImojisLength = clickedImojisList.length

    if (isImojiPresent) {
      this.setTopScore(clickedImojisLength)
    } else {
      if (emojisList.length - 1 === clickedImojisLength) {
        this.setTopScore(emojisList.length)
      }
      this.setState(prevState => ({
        clickedImojisList: [...prevState.clickedImojisList, id],
      }))
    }
  }

  getShuffledEmojisList = () => {
    const {emojisList} = this.props

    return emojisList.sort(() => Math.random() - 0.5)
  }

  renderEmojiList = () => {
    const shuffledEmojisList = this.getShuffledEmojisList()

    return (
      <ul className="imoji-list-cont">
        {shuffledEmojisList.map(eachEmoji => (
          <EmojiCard
            key={eachEmoji.id}
            emojiDetails={eachEmoji}
            emojiClick={this.onImojiClick}
          />
        ))}
      </ul>
    )
  }

  render() {
    const {isGameInProgress, topScore, clickedImojisList} = this.state
    return (
      <div className="main">
        <NavBar
          score={clickedImojisList.length}
          isGameInProgress={isGameInProgress}
          topScore={topScore}
        />
        <div className="imoji-list-body">
          {isGameInProgress ? this.renderEmojiList() : this.renderScoreCard()}
        </div>
      </div>
    )
  }
}
export default EmojiGame
