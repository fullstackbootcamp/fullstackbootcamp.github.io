/** @jsx jsx */
import { jsx } from '@emotion/core';

import React from 'react';
import { Link, graphql } from 'gatsby';
import styled from '@emotion/styled';

import Bio from '../components/Bio';
import Layout from '../components/Layout';
import SEO from '../components/seo';
import HeroIntro from '../components/HeroIntro';
import Navbar from '../components/Navbar';
import { rhythm } from '../utils/typography';
import { RedText } from '../components/typo';

import Section2 from '../components/homeSections/Section2';
import Section3 from '../components/homeSections/Section3';
import PoweredBy from '../components/homeSections/PoweredBy';
import TopicsOverview from '../components/homeSections/TopicsOverview';
import BootcampDetails from '../components/homeSections/BootcampDetails';
import ContactSection from '../components/ContactSection';
import { FluidContainer } from '../components/Components';

const Blog = styled.div`
  margin-bottom: ${rhythm(1.2)};
`;

const BlogHeader = styled.h2`
  color: #fff;
`;
const BlogTitle = styled.h3`
  color: #fff;
  margin-bottom: 0;
`;

const BlogDate = styled.small`
  color: #cc0000;
  margin-bottom: ${rhythm(1)};
`;

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props;
    const siteTitle = data.site.siteMetadata.title;
    const posts = data.allMdx.edges;

    return (
      <>
        <SEO
          title="FullStack Bootcamp"
          keywords={[`fullstack`, `bootcamp`, `ruby`, `ruby on rails`, `blog`, `gatsby`, `javascript`, `react`]}
        />
        <Navbar />
        <HeroIntro />
        <Section2 />
        <Section3 />
        <TopicsOverview />
        <BootcampDetails />
        <ContactSection />
        <PoweredBy />
        <FluidContainer backgroundColor="#000" color="#fff">
          <Layout location={this.props.location} title={siteTitle}>
            <BlogHeader>
              Articles<RedText>.</RedText>
            </BlogHeader>
            {posts.map(({ node }) => {
              const title = node.frontmatter.title || node.fields.slug;
              return (
                <Blog key={node.fields.slug}>
                  <BlogTitle>
                    <Link
                      css={{
                        boxShadow: `none`,
                        color: '#fff',
                        textDecoration: 'none',
                        transition: 'all 300ms ease',
                        '&:hover': { color: '#cc0000' },
                      }}
                      to={node.fields.slug}
                    >
                      {title}
                    </Link>
                  </BlogTitle>
                  <BlogDate>{node.frontmatter.date}</BlogDate>
                  <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
                </Blog>
              );
            })}
          </Layout>
        </FluidContainer>
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
