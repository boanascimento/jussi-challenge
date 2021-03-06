import styled, { createGlobalStyle } from 'styled-components'

export const Container = styled.div`
  font-family: 'Barlow';
`

export const AppRoot = createGlobalStyle`
  html * {
    @import url('https://fonts.googleapis.com/css2?family=Barlow:wght@100&display=swap');
    font-family: 'Barlow', sans-serif;
    font-size: 16px;
    outline: none;
    border: none;
  }

  html {
    scroll-behavior: smooth;
  }

  button {
    background-color: transparent;
  }

  h2 {
    font-size: 2rem;
    margin: 1rem 0;
  }

  h2, p {
    text-align: left;
  }

`

export {}
