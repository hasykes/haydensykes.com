import PropTypes from 'prop-types'
import React from 'react'
import headshot from '../images/headshot-casual.jpg'

const Header = props => (
  <header id="header" style={props.timeout ? { display: 'none' } : {}}>
    <div className="logo">
      <img className="logo-image" src={headshot} alt='Hayden Sykes headshot'/>
    </div>
    <div className="content">
      <div className="inner">
        <h1>Hayden A. Sykes</h1>
        <p>Sales Engineer/Team Lead based in Atlanta, GA with a penchant for making things work.</p>
        <p>Need help demonstrating the value of your product/servive? <span className='clickable' onClick={() => props.onOpenArticle('contact')}>Let's get in touch!</span></p>
      </div>
    </div>
    <nav>
      <ul>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('intro')
            }}
          >
            Intro
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('work')
            }}
          >
            Work
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('about')
            }}
          >
            About
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('contact')
            }}
          >
            Contact
          </button>
        </li>
      </ul>
    </nav>
  </header>
)

Header.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool,
}

export default Header
