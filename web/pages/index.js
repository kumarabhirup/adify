import Head from 'next/head'
import styled from 'styled-components'

const Container = styled.main`
  font-family: 'SF Pro Text', 'SF Pro Icons', 'Helvetica Neue', 'Helvetica',
    'Arial', sans-serif;
  padding: 20px 20px 60px;
  max-width: 680px;
  margin: 0 auto;
  font-size: 16px;
  line-height: 1.65;
  text-align: center;

  h1 {
    margin-top: 70px;
    font-size: 45px;
  }
  a {
    cursor: pointer;
    color: #0076ff;
    text-decoration: none;
    transition: all 0.2s ease;
    border-bottom: 1px solid white;
  }
  a:hover {
    border-bottom: 1px solid #0076ff;
  }
`

export default function HomePage() {
  console.log(process.env.GA_TRACKING_ID) // env does not work. issue 👉 https://github.com/zeit/next.js/issues/7320

  return (
    <Container>
      <Head>
        <title>Next.js on Now</title>
      </Head>
      <h1>Next.js on Now</h1>
      <h2>
        Developed & Deployed with{' '}
        <a
          href="https://zeit.co/docs"
          target="_blank"
          rel="noreferrer noopener"
        >
          ZEIT Now
        </a>
        !
      </h2>
    </Container>
  )
}
