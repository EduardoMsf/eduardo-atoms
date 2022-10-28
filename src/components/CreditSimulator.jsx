import { useEffect, useRef, useState } from "react"


export const CreditSimulator = () => {
  const [cash, setCash] = useState(10000)
  const [rate, setRate] = useState(8.9)
  const [months, setMonths] = useState(12)
  const inputCashRef = useRef()
  const inputRateRef = useRef()
  const [monthlyPayment, setMonthlyPayment] = useState(0)
  const [ neto, setNeto] = useState(0)
  const [ total, setTotal] = useState(0)
  const commission = 348
  const cat = 15.71

  const getMonthlyPayment = () =>{
    let cashMonthly = (cash / months) 
    let rateToDec = rate / 100
    let monthlyRate = cashMonthly * rateToDec
    let aux = Math.round(monthlyRate)
    setMonthlyPayment(Math.round(monthlyRate + cashMonthly))
    setNeto(cash - commission)
    setTotal(aux + cash + commission)
  }

  useEffect(() => {
    getMonthlyPayment()
    
  }, [cash])

  useEffect(() => {
    getMonthlyPayment()
    
  }, [rate])

  useEffect(() => {
    getMonthlyPayment()
  }, [months])
  

  return (
    <div className="credit">
        <div>
          <h2>Simulador de crédito</h2>
          <hr style={{width:'64px'}}/>
          <div className="credit-cash">
            <span>${cash}</span>
            <h5>Monto Deseado</h5>
          </div>
          <input className="input-range" ref={inputCashRef} type="range" name="" max="100000" min='10000'  step='1000' onInput={()=>setCash(parseInt(inputCashRef.current.value))}/>
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
            <span >${monthlyPayment}</span>
            <span >${commission}</span>
            <span >${neto}</span>
            <span >${total}</span>
            <span >{cat}%</span>
          </div>
        </div>
        <div className="credit-req-btn">
          <button>Solicitar mi crédito</button>
        </div>  
    </div>
  )
}
