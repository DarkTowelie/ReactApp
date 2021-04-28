import React from 'react'

const styles = {
    card: {
        width: '200px',
        height: '200px',
        backgroundColor: 'grey',
        marginTop: '25px'
    }
}

export default function Card(){
    return(
      <div style={styles.card}>
          НОВОСТИ
      </div>
    );
}