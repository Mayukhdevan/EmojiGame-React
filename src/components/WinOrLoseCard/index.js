import './index.css'

const WinOrLoseCard = props => {
  const {result, score, bestScore, newGame} = props

  const restartGame = () => newGame()

  let cardImg
  let resultText
  let scoreType
  let scorePoints

  if (result === true) {
    cardImg = 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
    resultText = 'Won'
    scoreType = 'Best Score'
    scorePoints = bestScore
  } else {
    cardImg = 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'
    resultText = 'Lose'
    scoreType = 'Score'
    scorePoints = score
  }

  return (
    <div className="result-card">
      <img className="result-image" src={cardImg} alt="Result" />
      <p className="result-text">You {resultText}</p>
      <p className="score-type">{scoreType}</p>
      <p className="score-points">{scorePoints}/12</p>
      <button className="play-again-btn" type="button" onClick={restartGame}>
        Play Again
      </button>
    </div>
  )
}

export default WinOrLoseCard
