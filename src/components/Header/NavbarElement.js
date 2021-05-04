import React from 'react'

export default function NavbarElement(props) {
    const [Color, setColor] = React.useState('#80DAEB');

    const buttonStyles = 
    {
        display: 'inline',
        padding: '10px',
        cursor: 'pointer'
    }

    const linkStyles = 
    {
        color: `${Color}`,
        textDecoration: 'none'
    }

    return(
        <li style={buttonStyles}
            onMouseEnter = {() => setColor("#a1e7ff")}
            onMouseLeave = {() => setColor("#80DAEB")}
        ><a href="#" style={linkStyles}>{props.text}</a></li>
    );
}