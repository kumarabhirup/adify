import styled from 'styled-components'

// No one's using it LoL
export const Container = styled.main`
  font-family: 'SF Pro Text', 'SF Pro Icons', 'Helvetica Neue', 'Helvetica',
    'Arial', sans-serif;
  margin: 0 auto;
  padding: 0px;
  font-size: 16px;
  line-height: 1.65;
  text-align: center;

  h1 {
    margin-top: 70px;
    font-size: 45px;
  }

  a.nextApp {
    cursor: pointer;
    color: #0076ff;
    text-decoration: none;
    transition: all 0.2s ease;
    border-bottom: 1px solid white;
  }

  a.nextApp:hover {
    border-bottom: 1px solid #0076ff;
  }
`

export const Heading = styled.h1`
  text-align: center;
`

export const Subheading = styled.h2`
  text-align: center;
`

export const HeroFlex = styled.div`
  display: flex;
  justify-content: space-evenly;
`
