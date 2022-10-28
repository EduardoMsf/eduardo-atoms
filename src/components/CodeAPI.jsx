
export const CodeAPI = () => {
  return (
    <div className="code-api">
      <h1>Easy to use API</h1>
      <hr/>
      <p>
        Guide to setup and configuration. You can present below a guide and a 
        description of how your system congfiguration works and add some
         animated screens.
      </p>
      <div className="code-api-nav">
        <button>Initializing JS</button>
        <button>Configuration CSS</button>
        <button>Security Levels API</button>
      </div>
      <hr style={{width:'90%'}}/>

      <div className="code-api-container">
        <pre>
          <code>
            <span>{`$('.modal-toggle').on('click', function(e){`}</span><br/>
            &nbsp;&nbsp;&nbsp;e.preventDefault();<br/>
            &nbsp;&nbsp;&nbsp;var modalopen = $(this).data("openpopup");<br/>
            &nbsp;&nbsp;&nbsp;$('.modal--'+modalopen)-toggleClass('modal--visible');<br/>
            &nbsp;&nbsp;&nbsp;var modaltype = $(this).data("popup");<br/>
            &nbsp;&nbsp;&nbsp;$('.modal__content--'+modaltype).toggleClass('modal__content--visible');<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`$('.modal__switch').on('click', function(e) {`}<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$('.modal__content').removeClass('modal__content--visible');<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;var modaltypeb = $(this).data("popup");<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$('.modal__content--'+modaltypeb).toggleClass('modal__content--visible');<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`});`}<br/>
            {`});`}
          </code>
        </pre>
      </div>
      <div className="code-api-btn-container">
        <button className="code-api-btn">GET THE CODE</button>
        <button className="code-api-btn example-btn">RUN EXAMPLE</button>
      </div>
    </div>
  )
}
