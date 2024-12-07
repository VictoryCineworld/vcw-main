import aditionalInfoData from '@data/aditional-info-data';
import React from 'react';

const ShopAditionalInfo = () => {
   
    return (
      <div
        className="tab-pane fade"
        id="nav-additional-info"
        role="tabpanel"
        aria-labelledby="nav-additional-info-tab"
      >
        <div className="product__desc-info">
          <ul>
            {aditionalInfoData.map((item) => (
              <li key={item.id}>
                <h6>{item.title}</h6>
                <span>{item.modelInfo}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
};

export default ShopAditionalInfo;