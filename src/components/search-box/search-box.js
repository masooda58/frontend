import React from 'react';
import'./search-box.scss'
import {TextBox,Button as TextBoxButton} from "devextreme-react";
import Button from "devextreme-react/button";

function SearchBox(props) {
    return (
        <form className={"te1"}>

            <TextBox style={{height:"56px"}} className={"te2"}
                     placeholder="نام نماد را وارد کنید"
                     stylingMode="filled"
                     mode="search"
                     width="100%"

            >
            </TextBox>


        </form>
    );
}

export default SearchBox;