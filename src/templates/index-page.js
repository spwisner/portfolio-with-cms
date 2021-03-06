import React, {useRef, useState, useEffect} from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'
import Features from '../components/Features'
import BlogRoll from '../components/BlogRoll'
import Contact from '../components/Contact'

export function IndexPageTemplate ({
  title,
  subheading,
  image,
  about,
  contact,
  skills,
}){

  const [height, setHeight] = useState(0)
  
  useEffect(() => {
    const handleResize = () => {
      setHeight(window.innerHeight)
    }

    setHeight(window.innerHeight)
    
    window.addEventListener('resize', handleResize)
    return () => { window.removeEventListener('resize', handleResize) }
  }, [])
  
  return (
  <div>
    <div
      className={`full-width-image margin-top-0 profile-image ${height < 500 ? 'static-profile-image' : ''}`}
      style={{
        maxWidth: '100%',
        backgroundImage: `url(${
          !!image.childImageSharp ? image.childImageSharp.fluid.src : image
        })`,
      }}
    >
      <div
        className="profile-text-container"
        style={{
          display: 'flex',
          height: '150px',
          lineHeight: '1',
          justifyContent: 'space-around',
          alignItems: 'left',
          flexDirection: 'column',
        }}
      >
        <h1
          className="has-text-weight-bold is-size-3-mobile is-size-2-tablet is-size-1-widescreen has-text-centered"
          style={{
            boxShadow:
              'rgb(19.6, 24.3, 16.1) 0.5rem 0px 0px, rgb(19.6, 24.3, 16.1) -0.5rem 0px 0px',
            backgroundColor: 'rgb(19.6, 24.3, 16.1)',
            color: 'white',
            lineHeight: '1',
            padding: '0.25em',
          }}
        >
          {title}
        </h1>
        <h3
          className="has-text-weight-bold has-text-centered is-size-5-mobile is-size-5-tablet is-size-4-widescreen"
          style={{
            boxShadow:
              'rgb(19.6, 24.3, 16.1) 0.5rem 0px 0px, rgb(19.6, 24.3, 16.1) -0.5rem 0px 0px',
            backgroundColor: 'rgb(19.6, 24.3, 16.1)',
            color: 'white',
            lineHeight: '1',
            padding: '0.25em',
          }}
        >
          {subheading}
        </h3>
      </div>
    </div>
    <section className="section section--gradient">
      <div className="container">
        <div className="section">
          <div className="columns">
            <div className="column is-5 is-offset-1">
              <div className="content">
                <div className="content">
                  <div className="tile">
                    <h1 className="title">{about.title}</h1>
                  </div>
                  <div className="tile">
                    <p>{about.description}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="column is-5 is-offset-1">
              <div className="content">
                <div className="content">
                  <div className="tile">
                    <h1 className="title">{contact.title}</h1>
                  </div>
                  <Contact />
                </div>
              </div>
            </div>
          </div>
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div className="content">
                <div className="content">
                  <div className="tile">
                    <h1 className="title">{skills.title}</h1>
                  </div>
                  <div className="tile">
                    <h3>{skills.subtitle}</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div className="content">
                <Features gridItems={skills.blurbs} />
                <div className="column is-12">
                  <h3 className="has-text-weight-semibold is-size-2">
                    Latest Projects
                  </h3>
                  <BlogRoll />
                  <div className="column is-12 has-text-centered">
                    <Link className="btn" to="/projects">
                      All Projects
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
  )
}

IndexPageTemplate.propTypes = {
  title: PropTypes.string,
  subheading: PropTypes.string,
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  about: PropTypes.object,
  skills: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <IndexPageTemplate
        title={frontmatter.title}
        subheading={frontmatter.subheading}
        image={frontmatter.image}
        about={frontmatter.about}
        contact={frontmatter.contact}
        skills={frontmatter.skills}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        subheading
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        about {
          title
          description
        }
        contact {
          title
          location
        }
        skills {
          title
          subtitle
          blurbs {
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            text
          }
        }
      }
    }
  }
`
