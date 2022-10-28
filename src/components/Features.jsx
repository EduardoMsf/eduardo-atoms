import { data } from "../data/data"
import { FeaturesItems } from "./FeaturesItems"

export const Features = () => {
  return (
    <div className="features">
      <h1 >Features Designed for you</h1>
      <hr />
      <p>We belive we have created the most efficient SaaS landing page for your users. Landing page <br/>
        with features that will convince you to use it for your SaaS business.
      </p>
      <div className="features-items">
        {
          data.map( feature => (
            <div  key={feature.id}>
              <FeaturesItems iconUrl={feature.iconUrl} title={feature.title} text={feature.text} span={feature.span}/>
            </div>
          ))
        }
      </div>
    </div>
  )
}
