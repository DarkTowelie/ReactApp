import React from 'react'
import Navbar from './Navbar.js'

const styles = {
    form:{
       float: 'right',
       margin: '-13px'
    },

    input:{
        width:"200px",
        height: "40px",
        borderRadius: "5px",
        fontSize: "25px",
        color: '#1A153F	'
    },

    button:{
        width:"100px",
        height: "30px",
        borderRadius: "5px",
        fontSize: "15px",
        marginLeft: "20px",
        backgroundColor: '#80DAEB'
    }
}

export default function Header() {
    return(
        <form style={styles.form}>
            <input style={styles.input} type='text'></input>
            <input style={styles.button} value='SUBMIT' type='submit'></input>
        </form>
    );
}