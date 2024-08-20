

const EmojiCard = (props) => {
    const {emoji, deleteEmoji} = props
  return (
    <li className="emoji-item">
      {emoji.emoji}
      <select>
        <option>Bad</option>
        <option>Okay</option>
        <option>Very good</option>
      </select>
      <button onClick={() => deleteEmoji(emoji.id)}>Delete</button>
    </li>
  )
}

export default EmojiCard