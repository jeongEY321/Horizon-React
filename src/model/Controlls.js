import React from 'react'

const Controlls = ({changeVal}) => {
  return (
    <div className="container">
        <button className="plant-btn mercury-btn " value="mercury" onClick={changeVal} > 수성 </button>
        <button className="plant-btn venus-btn" value="venus" onClick={changeVal} > 금성 </button>
        <button className="plant-btn earth-btn" value="earth" onClick={changeVal} > 지구 </button>
        <button className="plant-btn mars-btn" value="mars" onClick={changeVal} > 화성 </button>
        <button className="plant-btn jupiter-btn" value="jupiter" onClick={changeVal} > 목성 </button>
        <button className="plant-btn saturn-btn" value="saturn" onClick={changeVal} > 토성 </button>
        <button className="plant-btn uranus-btn" value="uranus" onClick={changeVal} > 천왕성 </button>
        <button className="plant-btn neptune-btn" value="neptune" onClick={changeVal} > 해왕성 </button>
        <button className="plant-btn moon-btn" value="moon" onClick={changeVal} > 달 </button>
        <button className="plant-btn sun-btn" value="sun" onClick={changeVal} > 태양 </button>
        <button className="plant-btn all-btn" value="all" onClick={changeVal} > 전체 </button>
    </div>
  );
}

export default Controlls;