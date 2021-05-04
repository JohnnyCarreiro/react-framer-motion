import { ReactNode } from 'react'

import { TechContainer, CircleWrapper, Circle, TopContainer, BottomContainer, TechTitle, TechWrapper, Tech } from './styles'

interface TechCardProps {
  children?: ReactNode;
}

function TechCard({ children }: TechCardProps) {
  return (
    <TechContainer>
      <TopContainer>
        <CircleWrapper>
          <Circle />
        </CircleWrapper>
        <TechWrapper>
          <Tech>
            <img src="/images/typescript.svg" alt="typescript logo"/>
          </Tech>
        </TechWrapper>
        <TechTitle>Typescript</TechTitle>
     </TopContainer>
     <BottomContainer>
       Bottom informations!
     </BottomContainer>
    </TechContainer>
  );
};

export default TechCard;
