import * as React from "react"
import { graphql } from "gatsby"

// 🚧 You can adjust this query, adding only what you need
// from your sourced Drupal content.
export const query = graphql`
  query {
    allNodeArticle {
      edges {
        node {
          id
          title
        }
      }
    }
  }
`

const IndexPage = ({ data }) => {
  // 🚧 You can build a POC for the pricing page here, using
  // React components, you might want to put your components
  // in a components directory and import them at the top of the file

  // 🚧 You get access to your query here on data.anythingyouwant...
  return (
    <main>
      {data.allNodeArticle.edges.map((article, i) =>
        <article key={i}>
          <h1>{article.node.title}</h1>
        </article>
       )}
    </main>
  )
}

export default IndexPage
