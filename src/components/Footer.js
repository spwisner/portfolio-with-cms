import React from 'react'
import { Link } from 'gatsby'

import logo from '../img/logo.svg'
import facebook from '../img/social/facebook.svg'
import instagram from '../img/social/instagram.svg'
import twitter from '../img/social/twitter.svg'
import vimeo from '../img/social/vimeo.svg'

export default function Footer() {
  const date = new Date();
  return (
    <footer className="footer has-background-black has-text-white-ter" style={{paddingTop: '3em', paddingBottom: '3em'}}>
      <div className="content has-text-centered has-background-black has-text-white-ter">
          &copy; {date.getFullYear()} Steve Wisner
      </div>
  </footer>
  )
}

