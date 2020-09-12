import PropTypes from 'prop-types'
import React from 'react'
import pic01 from '../images/pic01.jpg'
import pic02 from '../images/pic02.jpg'
import pic03 from '../images/pic03.jpg'

class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      ></div>
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id="intro"
          className={`${this.props.article === 'intro' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Intro</h2>
          <span className="image main">
            <img src={pic01} alt="" />
          </span>
          <p>
            Working in Cloud Services for Manhattan Associates has been (and continues to be) a fantastic learning experience.  In my current role, I focus on improving our client's experience as we transition to a SaaS model.  Part of the fun of this role is that I am constantly challenged to learn new tech stacks and improve my technical knowledge to ensure client's succeed.
            Prior to this, I worked as an implementation consultant with expertise in our iSeries Warehouse Management Software.  If you're unfamiliar with IBM iSeries, have a look at my <a target="_blank" rel="noreferrer noopener"href="https://codepen.io/hasykes/full/wLomgm">Free Code Camp API project</a> which is inspiried by the iSeries design. 
          </p>
          <p>
            But, life's not all about work.  In my free time, I enjoy building all types of things; both physical and virtual.  On any given day I could be working on a craft with my Fiancée, building shelving for our home, or tinkering on the web to improve my skills.  
            If I'm not doing one of those, I'm probably listening to music, acting as sous-chef, or climbing.
          </p>
          {close}
        </article>

        <article
          id="work"
          className={`${this.props.article === 'work' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Work</h2>
          <span className="image main">
            <img src={pic02} alt="" />
          </span>
          <p>I'm actively looking to move my career into pre-sales engineering.  If you or your company are looking, I would love to talk about how I can support your Sales team.</p>
          <p className="center callToAction"><a onClick={() => {this.props.onOpenArticle('contact')}}>Contact Me</a></p>
          <p>
            I have held many roles throughout my career at Manhattan Associates, from Software Consultant to Client Owner to helping build and manage our Automated Regression Testing (ART) team.  Each position has come with its own set of inevitable challenges and rewards, best of all being the amazing people I work with daily.
          </p>
          <p>In my current role (Sole iSeries SaaS Client Owner and managing ART),  my ability to handle multiple complex problems is regularly challeneged.  As the sole iSeries Client Owner I am respobsible for maintaing customer environments across a swath of industries (from Grocery to Footwear to Dental supplies and more).  These customers trust Manhattan to provide an always ready and stable environment and I (along with my amazing team) ensure that promise is kept.  Furthermore, I am working to normalize the management of the iSeries environments to ensure alignment with our entire Managed Services business.  
          When not working on iSeries, I shift my focus to our global ART team, specifically working to build out ART for our Manhattan Active Omni (MAO) platform.  If you'd like to learn more about how we are using ART to improve our business, <a onClick={() => {this.props.onOpenArticle('contact')}}>please feel free to drop me a note.</a>
          </p>
          {close}
        </article>

        <article
          id="about"
          className={`${this.props.article === 'about' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">About</h2>
          <span className="image main">
            <img src={pic03} alt="" />
          </span>
          <p>
            Music is a big part of my day to day life.  If I'm working and something needs focus to be done, I immediately pick out an album, put on my headphones and get to work.  
          </p>
          <p>Here's an example of one band I can't get enough of right now:</p>
          <p className="center">
          <iframe  src="https://open.spotify.com/embed/track/6gSVpASv2ElWCX6cOqJWLM" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
          </p>
          {close}
        </article>

        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Contact</h2>
          <form name="contact" method="post" action="/submitted/" data-netlify="true" data-netlify-honeypot="bot-field" enctype="multipart/form-data">
            <input type="hidden" name="form-name" value="contact" />
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" required/>
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="email" name="email" id="email" required/>
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
            <ul className="actions">
              <li>
                <button type="submit" className="special" >Send Message</button>
              </li>
              <li>
                <input type="reset" value="Reset" />
              </li>
            </ul>
            <p class="hidden" hidden>
              <label>
               !!!Don't fill this out!!!
               <input name="bot-field"/>
               </label>
            </p>
          </form>
          <ul className="icons">
            <li>
              <a
                href="https://twitter.com/hayden_sykes"
                className="icon fa-twitter"
              >
                <span className="label">Twitter</span>
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/haydensykes" className="icon fa-facebook">
                <span className="label">Facebook</span>
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/haydenasykes/" className="icon fa-instagram">
                <span className="label">Instagram</span>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/hasykes"
                className="icon fa-github"
              >
                <span className="label">GitHub</span>
              </a>
            </li>
          </ul>
          {close}
        </article>
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
