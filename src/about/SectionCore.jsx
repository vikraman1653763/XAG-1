import React from 'react'
const coreValues=[
    {
        "value": "Customer Focus",
        "description": "Putting the customer at the center of everything we do."
      },
      {
        "value": "Innovation",
        "description": "Constantly seeking new and better ways to achieve our goals."
      },
      {
        "value": "Integrity",
        "description": "Maintaining the highest standards of honesty and ethical behavior."
      }
]
function SectionCore() {
  return (
    <div className='coreSection'>

         <div className="head">
        <h2 className="heading"> Our</h2>
        <div className="misson-texteffect">
          <h2 data-aos="fade-down">Core Value</h2>
        </div>
      </div>
      <div className="content">
      {coreValues.map((values,index)=>(
                <div data-aos="fade-up" className="card"  key={index}>
                    <h2 data-aos="fade-up">#{index+1}</h2>
                    <h3 data-aos="fade-up">“{values.value}</h3>
                    <p data-aos="fade-up">{values.description}</p>
                </div>
      ))
    }
    </div>
</div>
  )
}

export default SectionCore
