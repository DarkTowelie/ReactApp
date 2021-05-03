import React from 'react'

const styles = {
    card: {
        width: '200px',
        height: '200px',
        backgroundColor: 'white',
        color: 'black',
        marginTop: '25px',
        textAlign: 'center',
        paddingTop: '10px',
        paddingBottom: '10px',
        boxSizing: 'border-box',
        boxShadow: 'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px'
    },

    img: 
    {
        width: '180px'
    },

    button:
    {
        width: '110px',
        height: '25px',
        cursor: 'pointer'
    }
}

export default function Card(props){
    return(
      <div style={styles.card}>
          {props.text}
          <img style={styles.img} src= {props.img} ></img>
          <button style={styles.button}>CONTACT US</button>
      </div>
    );
}