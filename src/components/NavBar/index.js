import './index.css'

const NavBar = props => {
  const {score, topScore} = props

  return (
    <div className="navbar-section">
      <div className="logo-container">
        <img
          className="logo"
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
        />
        <p className="logo-text">Emoji Game</p>
      </div>
      <div className="scores-container">
        <p>Score: {score}</p>
        <p>Top Score: {topScore}</p>
      </div>
    </div>
  )
}

export default NavBar
