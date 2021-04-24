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

let textList = ['HOME', 'AUTHOR', 'WORK', 'ABOUT US'];
export default function Navbar() {
    return(
        <ul style={styles.ul}>
            {
                textList.map(element => {return <NavbarElement text = {element}/>})
            }
        </ul>
    );
}