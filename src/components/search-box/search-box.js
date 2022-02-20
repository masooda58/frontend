import React from 'react';
import'./search-box.scss'
import {TextBox,Button as TextBoxButton} from "devextreme-react";


function SearchBox(props) {
    return (
        <form className={"te1 te2"}>

            <TextBox style={{height:"56px"}}
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