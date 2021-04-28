import React from 'react'
import Card from '../Card/Card.js'

const styles = {
    sidebar: {
        width:'30%',
        height: '700px',
        backgroundColor:'#C7D0CC',
        boxSizing: 'border-box',
        border: 'solid 1px black',
        borderRight: '0'
    },

    news:{
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap'
    }


}

export default function Sidebar(){
    return(
      <div style={styles.sidebar}>
          <div style={styles.news}>
            <Card />
            <Card />
          </div>
      </div>
    );
}