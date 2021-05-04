import React from 'react'
import Card from '../Cards/Card.js'

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
let cards = [
    {id: 1, text: "Save nature", img: require("../../images/cards/Nature1.jpg").default},
    {id: 2, text: "Hiking trips", img: require("../../images/cards/Nature2.jpg").default},
    {id: 3, text: "Professional photos", img: require("../../images/cards/Nature3.jpg").default}
];
export default function Sidebar(){
    return(
      <div style={styles.sidebar}>
          <div style={styles.news}>
            {
               cards.map(element => {return <Card text = {element.text} img = {element.img} key = {element.id}/>})
            }
            
          </div>
      </div>
    );
}