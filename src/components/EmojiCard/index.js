// Write your code here.

import './index.css'

const EmojiCard = props => {
  const {emojiDetails, emojiClick, key} = props
  console.log(key)

  const {id, emojiName, emojiUrl} = emojiDetails

  const onClickEmoji = () => {
    emojiClick(id)
  }

  return (
    <li id={id} className="emoji-card">
      <button type="button" className="emoji-btn" onClick={onClickEmoji}>
        <img src={emojiUrl} alt={emojiName} className="emoji-icon" />
      </button>
    </li>
  )
}
export default EmojiCard
