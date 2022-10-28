
export const FeaturesItems = (props) => {
  const {iconUrl='', title, text, span=''} = props
  return (
    <div>
      <div>
        <img src={iconUrl}/>
      </div>
      <div>
        <h3><span>{span}</span> {title}</h3>
        <hr style={{margin: '0'}}/>
      </div>
      <div>
        <p>{text}</p>
      </div>
    </div>
  )
}
