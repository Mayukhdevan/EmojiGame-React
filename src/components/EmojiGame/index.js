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
import './index.css'
import NavBar from '../NavBar'
import EmojiCard from '../EmojiCard'
import WinOrLoseCard from '../WinOrLoseCard'

class EmojiGame extends Component {
  state = {score: 0, topScore: 0, emojiId: undefined, didWin: undefined}

  updateScore = id =>
    this.setState(prevState => {
      if (
        prevState.emojiId === undefined ||
        (prevState.emojiId !== id && prevState.score < 11)
      ) {
        return {score: prevState.score + 1, emojiId: id}
      }
      if (prevState.emojiId === id) {
        if (prevState.score > prevState.topScore) {
          return {
            score: 0,
            topScore: prevState.score,
            emojiId: undefined,
            didWin: false,
          }
        }
        return {score: 0, emojiId: undefined, didWin: false}
      }
      return {
        score: 0,
        topScore: prevState.score + 1,
        emojiId: undefined,
        didWin: true,
      }
    })

  newGame = () => this.setState({didWin: undefined})

  render() {
    const {score, topScore, didWin} = this.state
    const shuffledEmojisList = () => {
      const {emojisList} = this.props
      return emojisList.sort(() => Math.random() - 0.5)
    }

    const gameBoard = () => (
      <ul className="emoji-cards-container">
        {shuffledEmojisList().map(eachEmoji => (
          <EmojiCard
            key={eachEmoji.id}
            emojiItem={eachEmoji}
            updateScore={this.updateScore}
          />
        ))}
      </ul>
    )

    return (
      <div className="bg-container">
        <NavBar score={score} topScore={topScore} />
        {didWin === undefined ? (
          gameBoard()
        ) : (
          <WinOrLoseCard
            result={didWin}
            score={score}
            bestScore={topScore}
            newGame={this.newGame}
          />
        )}
      </div>
    )
  }
}

export default EmojiGame
