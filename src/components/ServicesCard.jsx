
export const ServicesCard = (props) => {

  const { icon, title, text, buttonText } = props
  return (
    <div className="services-card">
      <div>
        <img src={icon}/>
      </div>
      <div>
        <h2>{title}</h2>
        <hr/>
      </div>
      <div>
        <p>{text}</p>
      </div>
      <div>
        <button>{buttonText}</button>
      </div>
    </div>
  )
}
