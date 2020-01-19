import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout_org"
import Image from "../components/image"
import SEO from "../components/seo"

type Props = {
  location: Location,
};

const IndexPage = (props: Props) => (
  <Layout location={props.location}>
    <SEO title="Home" />
    {console.log(props.location)}
    <p>props.location.pathname is {props.location.pathname}</p>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)


export default IndexPage
