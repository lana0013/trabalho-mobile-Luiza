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

## Componentes Personalizados
O aplicativo utiliza vários componentes customizados para manter consistência visual e funcional:

- **HelloWave**: Componente de saudação animado
- **ThemedText**: Texto com estilos temáticos pré-definidos (título, subtítulo, etc.)
- **ThemedView**: Container com estilo temático
- **ParallaxScrollView**: ScrollView com efeito parallax para a imagem de cabeçalho
- **Collapsible**: Seção expansível/colapsável para organizar conteúdo
- **ExternalLink**: Componente para links externos com estilo consistente

## Estilos e Temas
O aplicativo utiliza StyleSheet para estilização, com:
- Estilos consistentes para títulos, subtítulos e texto normal
- Imagens responsivas
- Layout flexível para diferentes tamanhos de tela

## Dependências Principais
- React Native
- React Navigation (para navegação entre telas)
- API da NASA (para a imagem astronômica do dia)

## Licença
[MIT License] - Consulte o arquivo LICENSE para mais detalhes.