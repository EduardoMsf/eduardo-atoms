import { ServicesCard } from "./ServicesCard"
import { ServicesCardSales } from "./ServicesCardSales"

export const Services = () => {
  const iconSupp = 'https://res.cloudinary.com/dheyjds01/image/upload/v1666954188/atoms/support-64_htiawb.png'
  const iconMedia = 'https://res.cloudinary.com/dheyjds01/image/upload/v1666954181/atoms/globe-64_tpvziw.png'
  const iconSales = 'https://res.cloudinary.com/dheyjds01/image/upload/v1666954194/atoms/wallet-64_xojybu.png'
  return (
    <div className="services">
      <div className="services-card-container">
        <ServicesCard 
          icon={iconSupp} 
          title='Help & Support' 
          text='Our 24/7 support team is here to help you and make sure our product is up to date'
          buttonText='suppor@supportemail.com'
        />
        <ServicesCard 
          icon={iconMedia} 
          title='Media & Press' 
          text='Online awards and publications. Get our media  resources and learn about out company'
          buttonText='media@youremail.com'
        />
        <ServicesCardSales 
          icon={iconSales} 
          title='Sales' 
          text='Have a presale question about our   products and features? Or looking for a   refund?'
          buttonText='sales@salesemail.com'
        />
      </div>
      <div className="services-sponsors">
        <div>
            <img src='https://res.cloudinary.com/dheyjds01/image/upload/v1666957886/atoms/clients-logo1_yoavge.png'/>
        </div>
        <div>
            <img src='https://res.cloudinary.com/dheyjds01/image/upload/v1666957895/atoms/clients-logo2_henea7.png'/>
        </div>
        <div>
            <img src='https://res.cloudinary.com/dheyjds01/image/upload/v1666957899/atoms/clients-logo3_sweztc.png'/>
        </div>
        <div>
            <img src='https://res.cloudinary.com/dheyjds01/image/upload/v1666957902/atoms/clients-logo4_cy3htn.png'/>
        </div>
        <div>
            <img src='https://res.cloudinary.com/dheyjds01/image/upload/v1666957905/atoms/clients-logo5_xpfihu.png'/>
        </div>
      </div>
    </div>
  )
}
