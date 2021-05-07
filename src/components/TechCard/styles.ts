import styled from 'styled-components'
import { animated } from 'react-spring'

export const CardWrapper = styled.div`
  width:100%;
  perspective:2000;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const TechContainer = styled(animated.div)`
  width: 285px;
  height: 500px;
  display: flex;
  flex-direction: column;
  border-radius:24px;
  box-shadow: 0 2px 7px 1px rgba(31, 31, 31, 0.2);
  background-color: #1D1F21;
  color: var(--white);
  position: relative;
`

export const CircleWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  min-width: 100%;
  min-height: 100%;
  overflow: hidden;
  border-top-right-radius: 25px;
`

export const Circle = styled.div`
  position: absolute;
  width: 350px;
  height: 350px;
  top: -4.2em;
  right: -10em;
  z-index: 5;
  background-color: #80ccff;
  border-radius: 50%;
`

export const TopContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  flex: 1.2;
  position: relative;
  align-items: center;
  justify-content: flex-end;
  padding: 1em 15px;
`
export const BottomContainer = styled.div`
  display: flex;
  flex: 0.8;
  padding: 0 1em;
`

export const TechTitle = styled.h2`
  color: var(--white);
  text-transform: uppercase;
  margin: 0;
  z-index: 10;
  font: ${({theme})=> theme.texts.title};
`
export const TechWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Tech = styled(animated.div)`
  width: auto;
  height: 190px;
  z-index: 99;
  user-select: none;

  img {
    width: auto;
    height: 100%;
    user-select: none;
  }
`
