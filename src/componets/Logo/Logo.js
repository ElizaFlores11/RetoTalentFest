import React  from 'react';
import logo from '../assets/walmart.png'

const Logo = ({small = false, big = false})=> {

    let src = logo
    let alt = 'small'
    let style = {
        width: '100%',
        height: '100%'
    }

    if(small){
        src = src
    }
    else{
        src = src
        style = {
            width: '50%',
            height: '50%'
        }
        alt= 'big'
    }

    return(
        <div>
            <img src={src} style={style} alt={alt} ></img>
        </div>
    )
}

export default Logo