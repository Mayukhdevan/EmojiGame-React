import {Component} from 'react'
import './index.css'
import NavBar from '../NavBar'
import EmojiCard from '../EmojiCard'
import WinOrLoseCard from '../WinOrLoseCard'

class EmojiGame extends Component {
  state = {score: 0, topScore: 0, emojiIdList: [], didWin: undefined}

  updateScore = id =>
    this.setState(prevState => {
      // On game case
      if (
        prevState.emojiIdList.length === 0 ||
        (!prevState.emojiIdList.includes(id) && prevState.score < 11)
      ) {
        return {
          score: prevState.score + 1,
          emojiIdList: [...prevState.emojiIdList, id],
        }
      } // Loosing case - 1
      if (prevState.emojiIdList.includes(id)) {
        // Loosing case - 2
        return {didWin: false}
      }
      //   Winning case
      return {
        score: prevState.score + 1,
        didWin: true,
      }
    })

  newGame = () =>
    this.setState(prevState => {
      if (prevState.score > prevState.topScore || prevState.score === 12) {
        return {
          topScore: prevState.score,
          score: 0,
          didWin: undefined,
          emojiIdList: [],
        }
      }

      return {score: 0, didWin: undefined, emojiIdList: []}
    })

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
        <NavBar score={score} topScore={topScore} result={didWin} />
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
