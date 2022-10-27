
export const FeaturesItems = (props) => {
  const {iconUrl='', title, text} = props
  return (
    <div>
      <div>
        <img src={iconUrl}/>
      </div>
      <div>
        <h3>{title}</h3>
      </div>
      <div>
        <p>{text}</p>
      </div>
    </div>
  )
}
