import { useEffect, useRef, useState } from "react"


export const CreditSimulator = () => {
  const [cash, setCash] = useState(10000)
  const [rate, setRate] = useState(5)
  const inputCashRef = useRef()
  const inputRateRef = useRef()

  return (
    <div style={{backgroundColor: 'white', borderRadius: '5px'}}>
      <div>
        <div>
          <h1>Simulador de crédito</h1>
          <hr style={{width:'64px'}}/>
          <h4>Monto Deseado</h4>
          <span>{cash}</span>
          <input style={{width:'90%'}} ref={inputCashRef} type="range" name="" max="100000" min='10000'  step='1000' onInput={()=>setCash(inputCashRef.current.value)}/>
  
          <h4>Tasa anual</h4>
          <span>{rate}</span>
          <input style={{width:'90%'}} ref={inputRateRef} type="range" name="" max="100" min='5' step='.1' onInput={()=>setRate(inputRateRef.current.value)}/>
        </div>
        <div>
            <h3>Plazo en meses</h3>
            <div style={{display:'flex', justifyContent:'space-between'}}>
              <button style={{width: '65px', height:'65px',borderRadius:'50%', textAlign:'center'}}>12</button>
              <button style={{width: '65px', height:'65px', borderRadius:'50%'}}>24</button>
              <button style={{width: '65px', height:'65px', borderRadius:'50%'}}>36</button>
            </div>
            <hr/>
        </div>
        <div >
          <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', gap:'8px'}}>
            <p>Pago mensual</p>
            <span style={{textAlign:'center', border:'1px solid grey', width:'180px', height:'28px', borderRadius: '15px'}}>$880.67</span>
          </div>
          <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', gap:'8px'}}>
            <p>Comision de apertura</p>
            <span style={{textAlign:'center', border:'1px solid grey', width:'180px', height:'28px', borderRadius: '15px'}}>$348.00</span>
          </div>
          <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', gap:'8px'}}>
            <p>Monto neto depositado</p>
            <span style={{textAlign:'center', border:'1px solid grey', width:'180px', height:'28px', borderRadius: '15px'}}>$9652.00</span>
          </div>
          <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', gap:'8px'}}>
            <p>Total pagado</p>
            <span style={{textAlign:'center', border:'1px solid grey', width:'180px', height:'28px', borderRadius: '15px'}}>$10568.00</span>
          </div>
          <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', gap:'8px'}}>
            <p>Cat</p>
            <span style={{textAlign:'center', border:'1px solid grey', width:'180px', height:'28px', borderRadius: '15px'}}>15.71%</span>
          </div>
        </div>
        <div>
          <button>Solicitar mi crédito</button>
        </div>
      </div>
    </div>
  )
}
