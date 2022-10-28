import { useEffect, useRef, useState } from "react"


export const CreditSimulator = () => {
  const [cash, setCash] = useState(10000)
  const [rate, setRate] = useState(5)
  const [months, setMonths] = useState(0)
  const inputCashRef = useRef()
  const inputRateRef = useRef()
  const buttonMonths12 = useRef()
  const buttonMonths24 = useRef()
  const buttonMonths36 = useRef()

  const onHandleActive12 = () =>{
    console.log(buttonMonths12.current.value)
    console.log(buttonMonths24.current.value)
    console.log(buttonMonths36.current.value)
  }
  const onHandleActive24 = () =>{
  }
  const onHandleActive36 = () =>{
   
  }

  return (
    <div className="credit">
        <div>
          <h2>Simulador de crédito</h2>
          <hr style={{width:'64px'}}/>
          <div className="credit-cash">
            <span>${cash}</span>
            <h5>Monto Deseado</h5>
          </div>
          <input className="input-range" ref={inputCashRef} type="range" name="" max="100000" min='10000'  step='1000' onInput={()=>setCash(inputCashRef.current.value)}/>
          <div className="credit-cash">
            <span>{rate}%</span>
            <h5>Tasa anual</h5>
          </div>
          <input className="input-range" ref={inputRateRef} type="range" name="" max="100" min='5' step='.1' onInput={()=>setRate(inputRateRef.current.value)}/>
          <hr style={{width:'90%'}}/>
        </div>
        <div>
            <h3>Plazo en meses</h3>
            <div className="credit-months" >
              <button onClick={()=>setMonths(12)} className="credit-months-btn">12</button>
              <button onClick={()=>setMonths(24)} className="credit-months-btn">24</button>
              <button onClick={()=>setMonths(36)} className="credit-months-btn">36</button>
            </div>
            <hr style={{width:'90%'}}/>
        </div>
        <div className="credit-simulator">
          <div className="credit-concepts">
            <p>Pago mensual</p>
            <p>Comision de apertura</p>
            <p>Monto neto depositado</p>
            <p>Total pagado</p>
            <p>Cat</p>
          </div>
          <div className="credit-data">
            <span >$880.67</span>
            <span >$880.67</span>
            <span >$880.67</span>
            <span >$880.67</span>
            <span >$880.67</span>
          </div>
        </div>
        <div className="credit-req-btn">
          <button>Solicitar mi crédito</button>
        </div>  
    </div>
  )
}
