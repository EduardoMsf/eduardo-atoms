import { useState } from "react"


export const CreditSimulator = () => {
  const [cash, setCash] = useState(90000)
  const [rate, setRate] = useState(8.9)
  return (
    <div>
      <div>
        <div>
          <h1>Simulador de crédito</h1>
          <hr/>
          <h4>Monto Deseado</h4>
          <progress max='100000' value={cash}></progress>
  
          <h4>Tasa anual</h4>
          <progress max='100' value={rate}></progress>
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
      </div>
    </div>
  )
}
