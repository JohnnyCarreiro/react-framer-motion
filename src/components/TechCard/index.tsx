import { useMotionValue, useTransform } from 'framer-motion'
import { ReactNode } from 'react'

import {
  CardWrapper,
  TechContainer,
  CircleWrapper,
  Circle,
  TopContainer,
  BottomContainer,
  TechTitle,
  TechWrapper,
  Tech
} from './styles'
import TechDetails from './TechDetails'

interface TechCardProps {
  children?: ReactNode;
}

function TechCard({ children }: TechCardProps) {

  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const rotateX = useTransform(y,[-100, 100], [30, -30])
  const rotateY= useTransform(x,[-100, 100], [-30, 30])

  return (
    <CardWrapper>
      <TechContainer
        style={{ x, y, rotateX, rotateY, z:100 }}
        drag
        dragElastic={0.16}
        dragConstraints={{
          top: 0,
          right: 0,
          left: 0,
          bottom: 0
        }}
        whileTap={{ cursor:'grabbing' }}
      >
        <TopContainer>
          <CircleWrapper>
            <Circle />
          </CircleWrapper>
          <TechWrapper>
            <Tech
              style={{
                x,
                y,
                rotateX,
                rotateY,
                z: 100000
              }}
              drag
              dragElastic={0.12}
              whileTap={{ cursor: "grabbing" }}
            >
              <img src="/images/typescript.svg" alt="typescript logo"/>
            </Tech>
          </TechWrapper>
          <TechTitle>Typescript</TechTitle>
      </TopContainer>
      <BottomContainer>
        <TechDetails/>
      </BottomContainer>
      </TechContainer>
    </CardWrapper>
  );
};

export default TechCard;
