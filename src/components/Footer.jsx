
export const Footer = () => {
  return (
    <div className="footer" id="contact">
      <div className="footer-lateral">
        <h3 className="footer-lateral-title">Lateral</h3>
        <p>
            Copyright © 2018 LATERAL<br/>
            All rights reserved. Proudly made in México.
        </p>
        <div className="footer-icons">
            <div>
                <img src='https://res.cloudinary.com/dheyjds01/image/upload/v1666961119/atoms/twitter_gnpckq.png' />
            </div>
            <div>
                <img src='https://res.cloudinary.com/dheyjds01/image/upload/v1666961109/atoms/facebook_wcb3jj.png'/>
            </div>
            <div>
                <img src='https://res.cloudinary.com/dheyjds01/image/upload/v1666961114/atoms/linkedin_r3xran.png'/>
            </div>
        </div>
      </div>
      <div>
        <h3>Company</h3>
        <ul>
          <li>About</li>
          <li>Carrers</li>
          <li>Awards</li>
          <li>User Program</li>
          <li>Locations</li>
        </ul>
      </div>
      <div>
        <h3>Products</h3>
        <ul>
          <li>Integrations</li>
          <li>API</li>
          <li>Pricing</li>
          <li>Documentation</li>
          <li>Release Notes</li>
        </ul>
      </div>
      <div>
        <h3>support</h3>
        <ul>
          <li>Contact</li>
          <li>FAQ</li>
          <li>Press</li>
          <li className="hidden">Press</li>
          <li className="hidden">Press</li>
        </ul>
      </div>
    </div>
  )
}
