import React from 'react'

const Controlls = ({change}) => {
  return (
    <div className="container">
        <button className="plant-btn mercury-btn " value="mercury" onClick={change} > 수성 </button>
        <button className="plant-btn venus-btn" value="venus" onClick={change} > 금성 </button>
        <button className="plant-btn earth-btn" value="earth" onClick={change} > 지구 </button>
        <button className="plant-btn mars-btn" value="mars" onClick={change} > 화성 </button>
        <button className="plant-btn jupiter-btn" value="jupiter" onClick={change} > 목성 </button>
        <button className="plant-btn saturn-btn" value="saturn" onClick={change} > 토성 </button>
        <button className="plant-btn uranus-btn" value="uranus" onClick={change} > 천왕성 </button>
        <button className="plant-btn neptune-btn" value="neptune" onClick={change} > 해왕성 </button>
        <button className="plant-btn moon-btn" value="moon" onClick={change} > 달 </button>
        <button className="plant-btn sun-btn" value="sun" onClick={change} > 태양 </button>
        <button className="plant-btn all-btn" value="all" onClick={change} > 전체 </button>
    </div>
  );
}

export default Controlls;