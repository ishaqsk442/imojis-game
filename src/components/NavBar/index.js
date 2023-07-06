// Write your code here.

import './index.css'

const NavBar = props => {
  const {score, isGameInProgress, topScore} = props

  return (
    <nav className="nav-cont">
      <div className="title-score-cont">
        <div className="title-cont">
          <img
            className="emoji"
            src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
            alt="emoji logo"
          />
          <h1>Emoji Game</h1>
        </div>
        {isGameInProgress && (
          <div className="score-cont">
            <p className="score">Score: {score}</p>
            <p className="score">Top Score: {topScore}</p>
          </div>
        )}
      </div>
    </nav>
  )
}
export default NavBar
