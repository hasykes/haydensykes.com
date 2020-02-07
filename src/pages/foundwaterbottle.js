import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const FoundWaterBottle = () => (
  <Layout>
    <h1>You found my water-bottle!!!</h1>
<p>You're actually the 1000th person (rough estimate) to have found it.  I honestly don't know how I continue to lose it.</p>
<p>Would you mind contacting me via one of the following so I don't have to buy another?</p>    
<ul>
  <li>Call or Text: <a href="tel:+1-404-931-2658">404-931-2658</a></li>
  <li><a href="mailto:haydensykes13@gmail.com?Subject=Found%20your%20water%20bottle!&amp;body=You%20can%20grab%20it%20here:">haydensykes13@gmail.com</a></li>
</ul>

<p>I sincerely appreciate you helping me out!</p>
    <Link to="/">Go to my homepage</Link>
  </Layout>
)

export default FoundWaterBottle
