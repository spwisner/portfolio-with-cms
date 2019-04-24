import React from 'react'
import PropTypes from 'prop-types'
import { IndexPageTemplate } from '../../templates/index-page'

const IndexPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(['data']).toJS()
  
  if (data) {
    return (
      <IndexPageTemplate
        title={data.title}
        subheading={data.subheading}
        image={data.image}
        about={data.about || {}}
        contact={data.contact || {}}
        skills={data.skills || { blurbs: [] }}
      />
    )
  } else {
    return (<div>Loading...</div>)
  }
}

IndexPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default IndexPagePreview
