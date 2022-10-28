export const PricingItemPro = (props) => {

    const { title='', cost='', user='', members='', api=false, dev=false, test=false, icon='', iconWhite=''} = props
    return (
      <div className="pricing-item-pro">
        <h2>{title}</h2>
        <hr/>
        <div>
          <h3>$<span>{cost}</span> / month</h3>
        </div>
        <div className="pricing-list">
          <div className="pricing-item-li">
              <img src={iconWhite}  />
              <p><span>{user}</span> User Account</p>
          </div>
          <div className="pricing-item-li">
              <img src={iconWhite} />
              <p><span>{members}</span> Team Members</p>
          </div>
          <div className="pricing-item-li">
              <img src={iconWhite} />
              <p><span>Unlimited</span> Email Accounts</p>
          </div>
          <div className="pricing-item-li">
              <img src={iconWhite} />
              <p>Set and Manage Permissions</p>
          </div>
          <div className="pricing-item-li">
              {api ? <img src={iconWhite} /> : <img src={icon}/>}
              <p className={api ? '' : 'line-through'}>API & extension support</p>
          </div>
          <div className="pricing-item-li">
              {dev ? <img src={iconWhite} /> : <img src={icon}/>}
              <p className={dev ? '' : 'line-through'}>Developer support</p>
          </div>
          <div className="pricing-item-li">
              <p className={test ? '' : 'line-through'}>A / B Testing</p>
          </div>
        </div>
        <div className="pricing-btn-container">
          <button>Sign up</button>
        </div>
      </div>
    )
  }