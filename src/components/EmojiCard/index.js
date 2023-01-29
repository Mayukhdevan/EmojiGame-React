import './index.css'

const EmojiCard = props => {
  const {emojiItem, updateScore} = props
  const {emojiName, emojiUrl, id} = emojiItem

  const updateEmoji = () => updateScore(id)

  return (
    <button type="button" className="emoji-button" onClick={updateEmoji}>
      <li className="emoji-card">
        <img className="emoji-img" src={emojiUrl} alt={emojiName} />
      </li>
    </button>
  )
}

export default EmojiCard
