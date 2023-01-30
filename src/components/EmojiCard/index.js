import './index.css'

const EmojiCard = props => {
  const {emojiItem, updateScore} = props
  const {emojiName, emojiUrl, id} = emojiItem

  const updateEmoji = () => updateScore(id)

  return (
    <li className="emoji-card">
      <button type="button" className="emoji-button" onClick={updateEmoji}>
        <img className="emoji-img" src={emojiUrl} alt={emojiName} />
      </button>
    </li>
  )
}

export default EmojiCard
