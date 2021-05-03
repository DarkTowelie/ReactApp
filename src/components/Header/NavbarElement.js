import React from 'react'

const styles = {
    li:{
        display: 'inline',
        padding: '10px',
        color: '#80DAEB',
        cursor: 'pointer'
    }
}

export default function NavbarElement(props) {
    return(
        <li style={styles.li}>{props.text}</li>
    );
}