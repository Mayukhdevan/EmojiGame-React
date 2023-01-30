import './index.css'

const WinOrLoseCard = props => {
  const {result, score, newGame} = props

  const restartGame = () => newGame()

  let cardImg
  let resultText
  let scoreType

  if (result === true) {
    cardImg = 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
    resultText = 'Won'
    scoreType = 'Best Score'
  } else {
    cardImg = 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'
    resultText = 'Lose'
    scoreType = 'Score'
  }

  return (
    <div className="result-card">
      <img className="result-image" src={cardImg} alt="win or lose" />
      <div className="result-card-text-wrapper">
        <h1 className="result-text">You {resultText}</h1>
        <p className="score-type">{scoreType}</p>
        <p className="score-points">{score}/12</p>
        <button className="play-again-btn" type="button" onClick={restartGame}>
          Play Again
        </button>
      </div>
    </div>
  )
}

export default WinOrLoseCard

}

export default WinOrLoseCard
