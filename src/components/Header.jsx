import { CreditSimulator } from "./CreditSimulator"

export const Header = () => {
  return (
    <div className="header" >
      <div className="header-nav" >
        <div>
          <img src="https://res.cloudinary.com/dheyjds01/image/upload/v1666797756/atoms/clients-logo3_mzcrd2.png"/>
        </div>
        <div className="header-nav__menu" >
          <div>
            <ul >
              <li><a href="#">HOME</a></li>
              <li><a href="#features">FEATURES</a></li>
              <li><a href="#pricing">PRICING</a></li>
              <li><a href="#contact">CONTACT</a></li>
            </ul>
          </div>
          <div>
            <button className="btn login">LOGIN</button>
            <button className="btn">GET STARTED</button>
          </div>
        </div>
      </div>
      <div className="header-content">
        <div className="header-info">
          <h1>Build applications <span>faster</span></h1>
          <p>Hire experts & get your job done. The right IT security<br/>
            solutions. Protect your clients and computer systems from <br/>
            hackers and fight againts malware.
          </p>
          <p>For as low as <span>$0.95</span> per user account</p>
          <div className="header-btn-info">
            <button className="btn-info demo"><span>Watch demo </span><img src='https://res.cloudinary.com/dheyjds01/image/upload/v1666798309/atoms/btn-play_mk2c2t.png'/></button>
            <button className="btn-info start">Start now</button>
          </div>
        </div>
        <CreditSimulator />
      </div>
    </div>
  )
}
