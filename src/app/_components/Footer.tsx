import React from 'react';
import styles from './modules/sidebar.module.scss'


export default function Footer () {
    return (
        <footer className = {styles.footer}>
            <div className = 'foreground'>This is the footer</div>
            <div className='foreground'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae nobis delectus ea libero vero odit quasi doloribus optio aspernatur, dolorum consectetur veniam nam sapiente ut dolorem ipsa labore aperiam quis! Esse, iusto. Officiis aliquid suscipit doloremque quas exercitationem esse quod tempora labore. Non alias provident exercitationem maxime laudantium totam eum.</div>
        </footer>
    )
}