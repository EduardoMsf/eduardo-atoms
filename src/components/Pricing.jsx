import { PricingItem } from "./PricingItem"
import { PricingItemPro } from "./PricingItemPro"

export const Pricing = () => {

  const checkedPricing = 'https://res.cloudinary.com/dheyjds01/image/upload/v1666947615/atoms/checked-pricing_f13l5u.png'
  const checkedPricingWhite = 'https://res.cloudinary.com/dheyjds01/image/upload/v1666949016/atoms/checked-pricing-white_apj4al.png'
  return (
    <div className="pricing" id="pricing">
      <h1>Flexible Pricing</h1>
      <hr/>
      <p>We belive we have created the most efficient SaaS landing page for your users. Landing page <br/>
        with features that will convince you to use it for your SaaS business.
      </p>
      <div className="pricing-nav">
        <button>Monthly</button>
        <button>Yearly</button>
      </div>
      <div className="pricing-list-cards">
        <PricingItem
          title='FREE'
          cost={0}
          user={1}
          members={10}
          icon={checkedPricing}
          iconWhite={checkedPricingWhite}
        />
        <PricingItem
          title='STARTUP'
          cost={29}
          user={10}
          members={100}
          icon={checkedPricing}
          iconWhite={checkedPricingWhite}
          api={true}
        />
        <PricingItemPro
          title='PRO'
          cost={49}
          user={50}
          members={500}
          icon={checkedPricing}
          iconWhite={checkedPricingWhite}
          api={true}
          dev={true}
        />
        <PricingItem
          title='ULTRA'
          cost='99'
          user='Unlimited'
          members='Unlimited'
          icon={checkedPricing}
          iconWhite={checkedPricingWhite}
          api={true}
          dev={true}
          test={true}
        />
      </div>
    </div>
  )
}
