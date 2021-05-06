import TechCard from '@/components/TechCard'
import Head from 'next/head'
import { Container } from '../styles/Home'

export default function Home() {
  return (
    <Container>
      <Head>
        <title>Template Next Tipescript</title>
      </Head>
      <TechCard>
        <img src="/images/typescript.svg" alt="typescript logo"/>
      </TechCard>
    </Container>
  )
}
