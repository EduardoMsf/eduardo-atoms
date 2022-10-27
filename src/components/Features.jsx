import { data } from "../data/data"
import { FeaturesItems } from "./FeaturesItems"

export const Features = () => {
  return (
    <div>
      <h1 style={{textAlign:'center'}}>Features Designed for you</h1>
      <hr style={{width:'64px'}}/>
      <p>We belive we have created the most efficient SaaS landing page for your users. Landing page <br/>
        with features that will convince you to use it for your SaaS business.
      </p>
      <div style={{display:'flex', flexWrap:'wrap', justifyContent:'space-evenly'}}>
        {
          data.map( feature => (
            <div  key={feature.id} style={{width:'350px'}}>
              <FeaturesItems iconUrl={feature.iconUrl} title={feature.title} text={feature.text}/>
            </div>
          ))
        }
      </div>
    </div>
  )
}
