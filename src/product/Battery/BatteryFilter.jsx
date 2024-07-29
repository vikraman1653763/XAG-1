import React from 'react'

function BatteryFilter() {
  return (
    <div className="filter-section">
        <div className="filter-group">

        <h4>Filter Batteries</h4>
      <input id='4s' type='checkbox' checked={type.includes('4s')} onChange={()=>{handleTypeChange("4s")}}/>
      <label htmlFor='4s'> <div className="tick_mark"></div></label><span>4s</span>

      <input id='6s' type='checkbox' checked={type.includes('6s')} onChange={()=>{handleTypeChange("6s")}}/>
      <label htmlFor='6s'> <div className="tick_mark"></div></label><span>6s</span>

      <input id='7s' type='checkbox' checked={type.includes('7s')} onChange={()=>{handleTypeChange("7s")}}/>
      <label htmlFor='7s'> <div className="tick_mark"></div></label><span>7s</span>

      <input id='7s' type='checkbox' checked={type.includes('7s')} onChange={()=>{handleTypeChange("7s")}}/>
      <label htmlFor='7s'> <div className="tick_mark"></div></label><span>7s</span>

      <input id='7s' type='checkbox' checked={type.includes('7s')} onChange={()=>{handleTypeChange("7s")}}/>
      <label htmlFor='7s'> <div className="tick_mark"></div></label><span>7s</span>


        </div>
    </div>
  )
}

export default BatteryFilter
