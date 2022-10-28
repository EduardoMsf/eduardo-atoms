import { AccordionQuestions } from "./AccordionQuestions"

export const Questions = () => {

  const checked = 'https://res.cloudinary.com/dheyjds01/image/upload/v1666952310/atoms/checked_sgdd4m.png'
  return (
    <div className="questions">
        <div className="questions-container">
            <h2>Frequently asked questions</h2>
            <p>Have a presale question about our products and <br/> features?
                Or looking for a refund? We would love to hear <br/>what you
                concern is.
            </p>
            <div className="questions-list">
                <div className="questions-list-item">
                    <img src={checked} />
                    <p>Simple and Smart HTML code</p>
                </div>
                <div className="questions-list-item">
                    <img src={checked}  />
                    <p>Works reintegrated in any part of the layout</p>
                </div>
                <div className="questions-list-item">
                    <img src={checked}  />
                    <p>Reuse the elements from one design to another</p>
                </div>
            </div>
        </div>
        <AccordionQuestions />
    </div>
  )
}
