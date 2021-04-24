import React from 'react'
import Navbar from './Navbar.js'
import Form from './Form.js'

const styles = {
    header:{
        backgroundColor: '#2F353B',
        padding: '30px',
        height: '20px'
    }
}

export default function Header() {
    return(
        <header style={styles.header}>
            <Navbar />
            <Form />
        </header>
    );
}