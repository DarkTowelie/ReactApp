import React from 'react'

export default function BlueButton()
{
    const [bgColor, setBgColor] = React.useState('#80DAEB');

    const buttonStyles = 
    {
        width: '110px',
        height: '25px',
        cursor: 'pointer',
        backgroundColor: `${bgColor}`,
        borderRadius: "5px"
    }

    return(
        <button style={buttonStyles}
                onMouseEnter = {() => setBgColor("#a1e7ff")}
                onMouseLeave = {() => setBgColor("#80DAEB")}
        >
            CONTACT US</button>
    );
}