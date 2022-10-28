
export const ServicesCardSales = (props) => {
  const { icon, title, text, buttonText } = props
  return (
    <div className="services-card-sales">
      <div className="services-card-sales-icon">
        <img src={icon}/>
      </div>
      <div className="services-card-sales-content">
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
    </div>
  )
}
