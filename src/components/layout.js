import React from 'react'

import Header from '../components/header'
import Footer from '../components/footer'

import './layout.css'

import '@fortawesome/fontawesome-svg-core/styles.css'
import { config } from '@fortawesome/fontawesome-svg-core'
config.autoAddCss = false

const layout = ({ children }) => {
    return (
        <div>
             <Header />

             {children}

             <Footer />
        </div>
    )
}

export default layout

