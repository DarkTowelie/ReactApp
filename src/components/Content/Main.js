import React from 'react'
import Content from './Content.js'
import Sidebar from './Sidebar.js'

const styles = {
    main: {
        display: 'flex',
        listStyle: 'none',
        margin: 0,
        padding: 0
    }
}

export default function Main(){
    return(
      <main style={styles.main}>
          <Content />
          <Sidebar />
      </main>
    );
}