import React from 'react'

const styles = {
    li:{
        display: 'inline',
        padding: '10px',
        color: '#80DAEB',
        cursor: 'pointer'
    }
}

export default function NavbarElement(text) {
    return(
        <li style={styles.li}>{text.text}</li>
    );
}