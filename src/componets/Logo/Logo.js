import React  from 'react';
import logo from '../assets/walmart.png'

const Logo = ({small = false, big = false})=> {

    let src = logo
    let alt = 'small'
    let style = {
        width: '100%',
        height: '100%'
    }
    let classNam = 'logo-small'

    if(small){
        style = {
            width: '175px',
            height: 'auto'
        }
    }
    else{
        alt= 'big'
        classNam= 'logo-big'
    }

    return(
        <div className='logo-container'>
            <img src={src} style={style} alt={alt} className={classNam}></img>
        </div>
    )
}

export default Logo