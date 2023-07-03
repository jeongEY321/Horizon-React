import React from 'react'

const Controlls = () => {
  return (
    <div className="container">
        <button className=".plant-btn mercury-btn " value="mercury"> 수성 </button>
        <button className=".plant-btn venus-btn" value="venus"> 금성 </button>
        <button className=".plant-btn earth-btn" value="earth"> 지구 </button>
        <button className=".plant-btn mars-btn" value="mars"> 화성 </button>
        <button className=".plant-btn jupiter-btn" value="jupiter"> 목성 </button>
        <button className=".plant-btn saturn-btn" value="saturn"> 토성 </button>
        <button className=".plant-btn uranus-btn" value="uranus"> 천왕성 </button>
        <button className=".plant-btn neptune-btn" value="neptune"> 해왕성 </button>
        <button className=".plant-btn moon-btn" value="moon"> 달 </button>
        <button className=".plant-btn sun-btn" value="sun"> 태양 </button>
        <button className=".plant-btn all-btn" value="all"> 전체 </button>
    </div>
  );
}

export default Controlls;