import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

const error = ({ location }) => {
    return (
        <Layout>
            <SEO pagetitle="ページが見つかりません" pagepath={location.pathname}/>
            <h1 style={{ padding: "20vh 0", textalign: "center"}}>
                お探しのページは見つかりませんでした
            </h1>
        </Layout>
    )
}

export default error
