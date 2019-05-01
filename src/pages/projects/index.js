import React from 'react'

import Layout from '../../components/Layout'
import BlogRoll from '../../components/BlogRoll'

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <section className="section" style={{paddingTop: '0'}}>
          <div className="container">
            <div className="content">
            <div
              className="full-width-image-container margin-top-0 margin-bottom-0 custom-section-header"
            >
              <h1
                className="custom-section-h1"
                style={{
                  padding: '1rem',
                }}
              >
                Latest Projects
              </h1>
            </div>
              <BlogRoll />
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}
