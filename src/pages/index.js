import * as React from "react"
import { graphql } from "gatsby"


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
