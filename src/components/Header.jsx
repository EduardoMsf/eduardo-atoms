import { CreditSimulator } from "./CreditSimulator"

export const Header = () => {
  return (
    <div className="header" style={{width:'100%'}}>
      <div style={{display:'flex', justifyContent: 'center', alignItems:'center'}}>
        <div style={{width:'200px'}}>
          <img src="https://res.cloudinary.com/dheyjds01/image/upload/v1666797756/atoms/clients-logo3_mzcrd2.png"/>
        </div>
        <div style={{display:'flex',width:'100%', justifyContent: 'space-evenly', alignItems:'center'}}>
          <div>
            <ul style={{display:'flex', listStyle:'none'}}>
              <li style={{margin: '32px'}}>HOME</li>
              <li style={{margin: '32px'}}>FEATURES</li>
              <li style={{margin: '32px'}}>PRICING</li>
              <li style={{margin: '32px'}}>CONTACT</li>
            </ul>
          </div>
          <div>
            <button>LOGIN</button>
            <button>GET STARTED</button>
          </div>
        </div>
      </div>
      <div className="header-content" style={{display:'flex'}}>
        <div className="header-info" style={{marginRight: '32px'}}>
          <h1>Build applications <span>faster</span></h1>
          <p>Hire experts & get your job done. The right IT security<br/>
            solutions. Protect your clients and computer systems from <br/>
            hackers and fight againts malware.
          </p>
          <p>For as low as <span>$0.95</span> per user account</p>
          <button>Watch demo <img src='https://res.cloudinary.com/dheyjds01/image/upload/v1666798309/atoms/btn-play_mk2c2t.png'/></button>
          <button>Start now</button>
        </div>
        <CreditSimulator />
      </div>
    </div>
  )
}
