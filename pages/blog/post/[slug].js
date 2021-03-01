import React, { Component } from 'react'

class Post extends Component {
  static async getInitialProps({ query }) {
    const { slug } = query
    const post = await import(`../../../content/posts/${slug}.md`).catch((error) => null)

    return { post }
  }
  render() {
    if (!this.props.post) return <div>not found</div>

    const {
      html,
      attributes: { thumbnail, title },
    } = this.props.post.default

    return (
      <>
        <article>
          <h1>{title}</h1>
          <img src={thumbnail} />
          <div dangerouslySetInnerHTML={{ __html: html }} />
        </article>
        <style jsx>{`
          article {
            margin: 0 auto;
          }
          h1 {
            text-align: center;
          }
        `}</style>
      </>
    )
  }
}

export default Post
