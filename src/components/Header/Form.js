import React from 'react'
import BigBlueSubmit from '../Buttons/BigBlueSubmit.js'

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
        backgroundColor: '#80DAEB',
        cursor: 'pointer'
    }
}

export default function Form() {
    return(
        <form style={styles.form}>
            <input style={styles.input} type='text'></input>
            <BigBlueSubmit/>
        </form>
    );
}