import React from 'react';
import { Link, graphql } from 'gatsby';

import Bio from '../components/Bio';
import Layout from '../components/Layout';
import SEO from '../components/seo';
import HeroIntro from '../components/HeroIntro';
import Navbar from '../components/Navbar';
import { rhythm } from '../utils/typography';

import Section2 from '../components/homeSections/Section2';
import Section3 from '../components/homeSections/Section3';
import PoweredBy from '../components/homeSections/PoweredBy';
import TopicsOverview from '../components/homeSections/TopicsOverview';
import BootcampDetails from '../components/homeSections/BootcampDetails';
import ContactSection from '../components/ContactSection';

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props;
    const siteTitle = data.site.siteMetadata.title;
    const posts = data.allMdx.edges;

    return (
      <>
        <SEO title="FullStack Bootcamp" keywords={[`blog`, `gatsby`, `javascript`, `react`]} />
        <Navbar />
        <HeroIntro />
        <Section2 />
        <Section3 />
        <TopicsOverview />
        <BootcampDetails />
        <PoweredBy />
        <ContactSection />
        <Layout location={this.props.location} title={siteTitle}>
          {posts.map(({ node }) => {
            const title = node.frontmatter.title || node.fields.slug;
            return (
              <div key={node.fields.slug}>
                <h3
                  style={{
                    marginBottom: rhythm(1 / 4),
                  }}
                >
                  <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
                    {title}
                  </Link>
                </h3>
                <small>{node.frontmatter.date}</small>
                <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
              </div>
            );
          })}
        </Layout>
      </>
    );
  }
}

export default BlogIndex;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
          }
        }
      }
    }
  }
`;
