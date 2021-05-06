import React from 'react'
import Tr from './tr.js'
import '../../css/table.css'

const styles = {
    div: {
        width:'70%',
        height: '700px',
        backgroundColor:'#C7D0CC',
        boxSizing: 'border-box',
        border: 'solid 1px black'
    }
}

let trees = [
    {id: 1, name: 'Birch', height: 45},
    {id: 2, name: 'Pine', height: 63},
    {id: 3, name: 'Oak', height: 35}
];



export default function Content(){
    return(
    <div style={styles.div}>
        <table>
            <tr>
                <th><p>Tree</p></th>
                <th><p>Av. height [m]</p></th>
            </tr>
            {
                trees.map(element => {return<Tr name = {element.name} height = {element.height} key={element.id}/>})
            }
        </table>
    </div>
    );
}