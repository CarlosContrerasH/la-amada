import React from 'react'

import Layout from '../../components/Layout'
import BlogRoll from '../../components/BlogRoll'

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <div className="bg-sand editorial">
  <h1>Editorial</h1>
  <BlogRoll /></div>
      </Layout>
    )
  }
}
