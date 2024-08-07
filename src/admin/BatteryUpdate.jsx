import React from 'react';

function BatteryUpdate() {
  return (
    <div className="battery-form">
      <form>
        <label  htmlFor="name">
          <span>Name:</span>
          <ul>
            <li>Enter the product name</li>
          </ul>
          <input type="text" name="name" id="name" placeholder="EG: X Power Plus" required />
        </label>
        
        <label htmlFor="model">
          <span>Model:</span>
          <ul>
            <li>Enter the model name</li>
          </ul>
          <input type="text" name="model" id="model" placeholder="EG: ZXGT-6S54Ah" required />
        </label>
        
        <label htmlFor="price">
          <span>Price:</span>
          <ul>
            <li>Price should be in INR</li>
            <li>Do not use ₹ symbol</li>
          </ul>
          <input type="number" name="price" id="price" placeholder="EG: 35,000" required />
        </label>
        
        <label htmlFor="description">
          <span>Description:</span>
          <ul>
            <li>Enter the description of the product</li>
          </ul>
          <textarea name="description" id="description" placeholder="Product description" required />
        </label>
        

      <fieldset>
      <span>Connector:</span>
    
      <label className='connector-check'>
        <input  type='checkbox'name='connector' value='1'/> connector 1
      </label>
      <label className='connector-check'>
        <input  type='checkbox'name='connector' value='2'/> connector 2
      </label>
      <label className='connector-check'>
        <input type='checkbox'name='connector' value='3'/> connector 3
      </label>

      </fieldset>
     
     



        
        <label htmlFor="ratedVoltage">
          <span>Rated Voltage:</span>
          <ul>
            <li>Enter voltage value with V</li>
          </ul>
          <input type="text" name="ratedVoltage" id="ratedVoltage" placeholder="EG: 22V" required />
        </label>
        
        <label htmlFor="capacity">
          <span>Capacity (Ah):</span>
          <ul>
            <li>Enter capacity value with Ah</li>
          </ul>
          <input type="text" name="capacity" id="capacity" placeholder="EG: 54 Ah" required />
        </label>
        
        <label htmlFor="wattage">
          <span>Wattage:</span>
          <ul>
            <li>Enter wattage value with Wh</li>
          </ul>
          <input type="text" name="wattage" id="wattage" placeholder="EG: 1198.8Wh" required />
        </label>
        
        <label htmlFor="cellRatedVoltage">
          <span>Cell Rated Voltage:</span>
          <ul>
            <li>Enter value with V</li>
          </ul>
          <input type="text" name="cellRatedVoltage" id="cellRatedVoltage" placeholder="EG: 3.7V" required />
        </label>
        
        <label htmlFor="cells">
          <span>Cells:</span>
          <ul>
            <li>Number of cells</li>
            <li>Do not type "cells"</li>
          </ul>
          <input type="text" name="cells" id="cells" placeholder="EG: 6" required />
        </label>
        
        <label htmlFor="dimensions">
          <span>Dimensions:</span>
          <ul>
            <li>FORMAT: length X width X height</li>
            <li>Type "mm" at the end</li>
          </ul>
          <input type="text" name="dimensions" id="dimensions" placeholder="EG: 150x50x30mm" required />
        </label>

        <label htmlFor="image">
          <span>Product image:</span>
          <ul>
            <li>It should be in 1920 X 1080 size</li>
            <li>Use webp format</li>
          </ul>
          <input type="file" name="image" id="image" required />
        </label>
        
        <input className='battery-submit' type="submit" value="Submit" />

      </form>
    </div>
  );
}

export default BatteryUpdate;
