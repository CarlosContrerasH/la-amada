import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import PreviewCompatibleImage from './PreviewCompatibleImage'

import Masonry from 'react-masonry-css'

function GetFormattedDate(date) {
  
 

return(((date.getMonth() > 8) ? (date.getMonth() + 1) : ('0' + (date.getMonth() + 1))) + '/' + ((date.getDate() > 9) ? date.getDate() : ('0' + date.getDate())) + '/' + date.getFullYear().toString().substring(2,4));



}

const breakpointColumnsObj = {
  default: 2,
 
  500: 1
};

class BlogRoll extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
 
    }}


    componentDidMount(){

      window.addEventListener("storage",(e) => {
        console.log('roll-mount!',window.localStorage.eng)
     });
     
    }


    componentWillUnmount(){
      window.removeEventListener("storage",(e) => {
        console.log('roll-mount!',window.localStorage.eng)
     });
     
    }
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark
   
    return (
      window.localStorage.eng=='false'?  <Masonry
      breakpointCols={breakpointColumnsObj}
      className="my-masonry-grid"
      columnClassName="my-masonry-grid_column">
      {posts &&
          posts.map(({ node: post }) => (
            !post.frontmatter.tags.includes('espanol')?
            <div className="post" key={post.id}>
             
              <article
                className={`blog-list-item tile is-child box notification ${
                  post.frontmatter.featuredpost ? 'is-featured' : ''
                }`}
              >
                <header>
                  {post.frontmatter.featuredimage ? (
                    <div className="featured-thumbnail">
                      <Link
                      className="title has-text-primary is-size-4"
                      to={post.fields.slug}
                    > <PreviewCompatibleImage
                        imageInfo={{
                          image: post.frontmatter.featuredimage,
                          alt: `featured image thumbnail for post ${post.frontmatter.title}`,
                        }}
                      /></Link> 
                    </div>
                  ) : null}
                  <div className="post-meta">
                  <div className="date">
                    
                      {GetFormattedDate(new Date(post.frontmatter.date))}
                    </div>
                    <Link
                      className="title has-text-primary is-size-4"
                      to={post.fields.slug}
                    >
                      <h3>{post.frontmatter.title}</h3>
                    </Link>
                    <Link className="read-more" to={post.fields.slug}>
                 Read More 
                  </Link>
                   
                  </div>
                </header>
            
              </article>
            </div>:""
          ))}
      </Masonry>: <Masonry
      breakpointCols={breakpointColumnsObj}
      className="my-masonry-grid"
      columnClassName="my-masonry-grid_column">
      {posts &&
          posts.map(({ node: post }) => (
            post.frontmatter.tags.includes('espanol')?
            <div className="post" key={post.id}>
             
              <article
                className={`blog-list-item tile is-child box notification ${
                  post.frontmatter.featuredpost ? 'is-featured' : ''
                }`}
              >
                <header>
                  {post.frontmatter.featuredimage ? (
                    <div className="featured-thumbnail">
                      <Link
                      className="title has-text-primary is-size-4"
                      to={post.fields.slug}
                    > <PreviewCompatibleImage
                        imageInfo={{
                          image: post.frontmatter.featuredimage,
                          alt: `featured image thumbnail for post ${post.frontmatter.title}`,
                        }}
                      /></Link> 
                    </div>
                  ) : null}
                  <div className="post-meta">
                  <div className="date">
                    
                      {GetFormattedDate(new Date(post.frontmatter.date))}
                    </div>
                    <Link
                      className="title has-text-primary is-size-4"
                      to={post.fields.slug}
                    >
                      <h3>{post.frontmatter.title}</h3>
                    </Link>
                    <Link className="read-more" to={post.fields.slug}>
                Ver Mas
                  </Link>
                   
                  </div>
                </header>
            
              </article>
            </div>:""
          ))}
      </Masonry>
    )
  }
}

BlogRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default (props) => (
  <StaticQuery 
  eng={props.eng}
    query={graphql`
      query BlogRollQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
        ) {
          edges {
            node {
              excerpt(pruneLength: 400)
              id
              fields {
                slug
              }
              frontmatter {
                title
                templateKey
                tags
                date(formatString: "MMMM DD, YYYY")
                featuredpost
                featuredimage {
                  childImageSharp {
                    fluid( quality: 50) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <BlogRoll data={data} count={count} />}
  />
)
