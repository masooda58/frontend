import React from 'react';
import './brand-name.scss'
//  نوشتن برند با فونت
function BrandName(props) {

    return (
<div>
    {props.color==='logo' &&
        <span style={{padding:'5px',margin:"5px"}} className={"logofont"} >
          <span style={{color:'#ff5722' }}> بورس</span>
          <span style={{color:'#1C91BC'}}>یار</span>

      </span>

    }
    {!props.color &&
        <span className={"logofont"} >
          <span style={{color:props.color }}>بورسیار</span>


      </span>

    }
</div>





);
}

export default BrandName;