import React from 'react'
import NavbarElement from './NavbarElement.js'

const styles = {
    ul:{
        listStyle: 'none',
        float: 'left',
        padding: '0',
        margin: '0'
    }
}

let textList = [
    {id: 1, name: 'HOME'},
    {id: 2, name: 'AUTHOR'},
    {id: 3, name: 'WORK'},
    {id: 4, name: 'ABOUT US'}
];
export default function Navbar() {
    return(
        <ul style={styles.ul}>
            {
                textList.map(element => {return <NavbarElement text = {element.name} key = {element.id}/>})
            }
        </ul>
    );
}