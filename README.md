# README - Aplicativo Universo

## Visão Geral
O aplicativo Universo é um aplicativo móvel desenvolvido em React Native que oferece informações fascinantes sobre o universo, corpos celestes e nosso sistema solar. Organizado em três telas principais, o app combina dados científicos com uma interface visual atraente para proporcionar uma experiência educativa e envolvente.

## Telas Principais

### 1. HomeScreen (Universo)
- **Conteúdo**: Apresenta conceitos fundamentais sobre o universo, espaço sideral e corpos celestes.
- **Recursos**:
  - Imagem de fundo temática do universo
  - Seções organizadas com informações sobre:
    - Espaço Sideral
    - Corpos Celestes
    - Sistema Solar
  - Botão "Saiba mais" que redireciona para o site da NASA
- **Tecnologias**:
  - Componentes personalizados (HelloWave, ThemedText, ThemedView)
  - ParallaxScrollView para efeito visual
  - Linking para abrir URLs externas

### 2. CelestialBodiesScreen (Corpos Celestes)
- **Conteúdo**: Detalha diversos tipos de corpos celestes com imagens e descrições.
- **Recursos**:
  - Integração com a API da NASA (APOD - Astronomy Picture of the Day)
  - Galeria horizontal de corpos celestes com:
    - Estrelas
    - Satélites
    - Planetas
    - Asteroides
    - Cometas
    - Meteoros
    - Meteoritos
  - Seção de curiosidades astronômicas
  - Links para recursos externos (NASA, ESA, etc.)
- **Tecnologias**:
  - Fetch API para consumir dados da NASA
  - Collapsible para seções expansíveis
  - ScrollView horizontal para a galeria
  - Componente ExternalLink

### 3. SolarSystemScreen (Sistema Solar)
- **Conteúdo**: Informações detalhadas sobre cada planeta do nosso sistema solar.
- **Recursos**:
  - Perfil completo de cada corpo do sistema solar:
    - Sol
    - Mercúrio
    - Vênus
    - Terra
    - Marte
    - Júpiter
    - Saturno
    - Urano
    - Netuno
    - Plutão (planeta anão)
  - Imagens ilustrativas de cada planeta
  - Dados sobre características únicas e curiosidades
  - Link para mais informações no site da NASA
- **Tecnologias**:
  - Componente Collapsible para cada planeta
  - Imagens otimizadas
  - Estilização consistente com as outras telas

## Dependências Principais
- React Native
- React Navigation (para navegação entre telas)
- API da NASA (para a imagem astronômica do dia)

## Licença
[MIT License] - Consulte o arquivo LICENSE para mais detalhes.

![Imagem do App](mobile/assets/images/print.png)  
![Imagem do App](mobile/assets/images/print2.png)  
![Imagem do App](mobile/assets/images/print3.png)  
![Imagem do App](mobile/assets/images/print4.png)  
![Imagem do App](mobile/assets/images/print5.png)  
![Imagem do App](mobile/assets/images/print6.png)

