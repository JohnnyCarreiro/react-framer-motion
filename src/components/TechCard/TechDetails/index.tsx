import { Marginer } from '@/components/Marginer';
import { ReactNode } from 'react';

import {  DetailsContainer, MediumText, KnowMoreButton, RegularText, SmallText, SpaceHorizontalContainer } from './styles';

interface TechDetailsProps {
  children?: ReactNode;
}

function TechDetails({ children }: TechDetailsProps) {
  return (
    <DetailsContainer>
      <SmallText>Javascript with superpowers</SmallText>
      <SpaceHorizontalContainer>
        <MediumText>Some other information</MediumText>
      </SpaceHorizontalContainer>
      <Marginer direction="vertical" margin="1.2em" />
      <SpaceHorizontalContainer>
        <SmallText>Your next lang</SmallText>
        <KnowMoreButton>More</KnowMoreButton>
      </SpaceHorizontalContainer>
    </DetailsContainer>
  );
};

export default TechDetails;
