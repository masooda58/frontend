import React from 'react';

import './brand-name.css'
//  نوشتن برند با فونت
function BrandName(props) {
    return (

      <span className={"logofont"}>
          <span style={{color:'#ff5722' }}> بورس</span>
          <span style={{color:'#1C91BC'}}>یار</span>

      </span>


);
}

export default BrandName;