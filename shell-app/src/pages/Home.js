import React from 'react';
import styled from 'styled-components';

const HomeContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
`;

const Hero = styled.div`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 60px 40px;
  border-radius: 16px;
  text-align: center;
  margin-bottom: 40px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
`;

const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 20px;
`;

const Subtitle = styled.p`
  font-size: 1.3rem;
  opacity: 0.95;
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.6;
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  margin-top: 40px;
`;

const FeatureCard = styled.div`
  background: white;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
  }
`;

const FeatureIcon = styled.div`
  font-size: 3rem;
  margin-bottom: 15px;
`;

const FeatureTitle = styled.h3`
  color: #333;
  font-size: 1.5rem;
  margin-bottom: 10px;
`;

const FeatureDescription = styled.p`
  color: #666;
  line-height: 1.6;
`;

const TechStack = styled.div`
  background: white;
  padding: 30px;
  border-radius: 12px;
  margin-top: 40px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`;

const TechTitle = styled.h2`
  color: #333;
  margin-bottom: 20px;
  text-align: center;
`;

const TechList = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
`;

const TechBadge = styled.span`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 10px 20px;
  border-radius: 25px;
  font-weight: 600;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

function Home() {
  return (
    <HomeContainer>
      <Hero>
        <Title>🚀 Arquitectura de Microfrontends</Title>
        <Subtitle>
          Demostración de estilos aislados con Styled Components.
          Cada microfrontend mantiene su independencia visual sin conflictos de CSS.
        </Subtitle>
      </Hero>

      <FeaturesGrid>
        <FeatureCard>
          <FeatureIcon>🎨</FeatureIcon>
          <FeatureTitle>Estilos Aislados</FeatureTitle>
          <FeatureDescription>
            Styled Components genera clases únicas automáticamente, evitando
            conflictos de CSS entre microfrontends.
          </FeatureDescription>
        </FeatureCard>

        <FeatureCard>
          <FeatureIcon>🔧</FeatureIcon>
          <FeatureTitle>Independencia</FeatureTitle>
          <FeatureDescription>
            Cada equipo puede trabajar de forma autónoma en su microfrontend
            sin preocuparse por interferencias.
          </FeatureDescription>
        </FeatureCard>

        <FeatureCard>
          <FeatureIcon>⚡</FeatureIcon>
          <FeatureTitle>Integración Simple</FeatureTitle>
          <FeatureDescription>
            Los microfrontends se integran fácilmente en la aplicación
            contenedora manteniendo su identidad visual.
          </FeatureDescription>
        </FeatureCard>
      </FeaturesGrid>

      <TechStack>
        <TechTitle>🛠️ Stack Tecnológico</TechTitle>
        <TechList>
          <TechBadge>React 18</TechBadge>
          <TechBadge>Styled Components</TechBadge>
          <TechBadge>React Router</TechBadge>
          <TechBadge>CSS-in-JS</TechBadge>
          <TechBadge>Microfrontends</TechBadge>
        </TechList>
      </TechStack>
    </HomeContainer>
  );
}

export default Home;
