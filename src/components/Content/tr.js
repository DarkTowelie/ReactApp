import React from 'react'

export default function Tr(props)
{
    return(
        <tr>
            <td>{props.name}</td>
            <td>{props.height}</td>
        </tr>
    );
}