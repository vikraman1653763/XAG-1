import React from 'react';

function BatteryUpdate() {
  return (
    <div className="battery-form">
      <form>
        <label htmlFor="name">Name:
          <input type="text" name="name" id="name" />
        </label>
        <label htmlFor="model">Model:
          <input type="text" name="model" id="model" />
        </label>
        <label htmlFor="price">Price:
          <input type="number" name="price" id="price" />
        </label>
        <label htmlFor="description">Description:
          <textarea name="description" id="description" />
        </label>
        <label htmlFor="connector">Connector:
          <input type="text" name="connector" id="connector" />
        </label>
        <label htmlFor="ratedVoltage">Rated Voltage:
          <input type="text" name="ratedVoltage" id="ratedVoltage" />
        </label>
        <label htmlFor="capacity">Capacity (Ah):
          <input type="text" name="capacity" id="capacity" />
        </label>
        <label htmlFor="wattage">Wattage:
          <input type="text" name="wattage" id="wattage" />
        </label>
        <label htmlFor="cellRatedVoltage">Cell Rated Voltage:
          <input type="text" name="cellRatedVoltage" id="cellRatedVoltage" />
        </label>
        <label htmlFor="cells">Cells:
          <input type="text" name="cells" id="cells" />
        </label>
        <label htmlFor="dimensions">Dimensions:
          <input type="text" name="dimensions" id="dimensions" />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default BatteryUpdate;
