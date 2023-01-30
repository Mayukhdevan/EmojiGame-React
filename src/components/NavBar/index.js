import './index.css'

const NavBar = props => {
  const {score, topScore, result} = props

  const scoreBoard =
    result === undefined ? (
      <div className="scores-container">
        <p>Score: {score}</p>
        <p>Top Score: {topScore}</p>
      </div>
    ) : null

  return (
    <div className="navbar-section">
      <div className="logo-container">
        <img
          className="logo-img"
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
        />
        <h1 className="logo-text">Emoji Game</h1>
      </div>
      {scoreBoard}
    </div>
  )
}

export default NavBar
