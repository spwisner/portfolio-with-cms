import React from 'react'

import Layout from '../../components/Layout'
import BlogRoll from '../../components/BlogRoll'

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <div
          className="full-width-image-container margin-top-0 margin-bottom-0 custom-section-header"
        >
          <h1
            className="has-text-weight-bold is-size-1 custom-section-h1"
            style={{
              padding: '1rem',
            }}
          >
            Latest Projects
          </h1>
        </div>
        <section className="section">
          <div className="container">
            <div className="content">
              <BlogRoll />
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}
