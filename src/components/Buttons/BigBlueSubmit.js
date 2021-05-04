import React from 'react'

export default function BigBlueButton()
{
    const [bgColor, setBgColor] = React.useState('#80DAEB');

    const buttonStyles = 
    {
        width:"100px",
        height: "30px",
        borderRadius: "5px",
        fontSize: "15px",
        marginLeft: "20px",
        backgroundColor: `${bgColor}`,
        cursor: 'pointer'
    }

    return(
        <input value='SUBMIT' type='submit' style={buttonStyles}
                onMouseEnter = {() => setBgColor("#a1e7ff")}
                onMouseLeave = {() => setBgColor("#80DAEB")}
        ></input>
    );
}