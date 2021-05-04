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