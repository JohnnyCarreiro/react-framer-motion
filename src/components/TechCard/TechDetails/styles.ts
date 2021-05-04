import styled from 'styled-components'

export const DetailsContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 2.5em 6px 0 6px;
  line-height: 1.4;
`;

export const MediumText = styled.span`
  font: 700 1.125rem/1.5rem Roboto, sans-serif;
  text-transform: uppercase;
  color: var(--white);
`

export const SmallText = styled.span`
  font: ${({theme})=> theme.texts.small_text};
  text-transform: uppercase;
  color: var(--white);
`

export const RegularText = styled.span`
  font: ${({theme})=> theme.texts.main_text};
  text-transform: uppercase;
  color: var(--white);
`

export const SpaceHorizontalContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const KnowMoreButton = styled.button`
  padding: 10px 16px;
  background-color: #007acc;
  color: var(--white);
  text-decoration: uppercase;
  font: 700 1rem/1.25rem Roboto, sans-serif;
  border: 2px solid transparent;
  border-radius: 0.25rem;
  outline: none;
  cursor: pointer;
  transition: all 290ms ease-in-out;

  &:hover {
    background-color: transparent;
    color: #007acc;
    border: 2px solid #007acc;
  }
`
