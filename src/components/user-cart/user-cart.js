import React from 'react';
import './user-cart.scss'
import {Link} from "react-router-dom";

function UserCart(props) {
    return (
        <div style={{height:"20%"}}>
            <div>
                <Link to={"/example/profile"}style={{margin:"10px 20px  ",color:"white"}} className={"fa fa-user"} > مسعود رضا علائی زاده  </Link>
            </div>


        </div>
    );
}

export default UserCart;