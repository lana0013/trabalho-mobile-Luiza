import { useState, useEffect } from 'react';
import { StyleSheet, Image, Platform, ActivityIndicator, ScrollView } from 'react-native';
import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { HelloWave } from '@/components/HelloWave';

type CelestialBody = {
  id: string;
  name: string;
  description: string;
  imageUrl?: string;
};

type APODData = {
  date: string;
  explanation: string;
  hdurl: string;
  media_type: string;
  service_version: string;
  title: string;
  url: string;
};

export default function CelestialBodiesScreen() {
  const [apodData, setApodData] = useState<APODData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const celestialBodies: CelestialBody[] = [
    {
      id: '1',
      name: 'Estrelas',
      description: 'São corpos celestes que emitem luz própria, como o Sol.',
      imageUrl: 'https://images-assets.nasa.gov/image/PIA03149/PIA03149~thumb.jpg'
    },
    {
      id: '2',
      name: 'Satélites',
      description: 'São corpos celestes que orbitam um planeta, como a Lua. ',
      imageUrl: 'https://images-assets.nasa.gov/image/GSFC_20171208_Archive_e001982/GSFC_20171208_Archive_e001982~orig.jpg'
    },
    {
      id: '3',
      name: 'Planetas',
      description: 'São corpos celestes que orbitam uma estrela, como a Terra. ',
      imageUrl: 'http://images-assets.nasa.gov/image/PIA14886/PIA14886~orig.jpg'
    },
    {
      id: '4',
      name: 'Asteroides',
      description: 'São corpos celestes rochosos que orbitam o Sol.',
      imageUrl: 'https://images-assets.nasa.gov/image/PIA24472/PIA24472~orig.jpg'
    },
    {
      id: '5',
      name: 'Cometas',
      description: 'Corpos celestes gelados que, perto do Sol, liberam gases e poeira.',
      imageUrl: 'https://images-assets.nasa.gov/image/PIA18641/PIA18641~orig.jpg'
    },
    {
      id: '6',
      name: 'Meteoros',
      description: 'Fragmentos de rocha e metal que entram na atmosfera da Terra.',
      imageUrl: 'https://assets.science.nasa.gov/dynamicimage/assets/science/psd/solar/bosf/images/1-3-leonid-danielsen1.jpeg?w=768&h=512&fit=clip&crop=faces%2Cfocalpoint'
    },
    {
      id: '7',
      name: 'Meteoritos',
      description: 'Meteoros que conseguem alcançar a superfície da Terra.',
      imageUrl: 'https://images-assets.nasa.gov/image/PIA07269/PIA07269~orig.jpg'
    }
  ];

  useEffect(() => {
    const fetchAPOD = async () => {
      try {
        const response = await fetch('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY');
        const data = await response.json();
        setApodData(data);
      } catch (err) {
        setError('Falha ao carregar a imagem astronômica do dia.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchAPOD();
  }, []);

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#0A3D91', dark: '#000033' }}
      headerImage={
        <Image
          source={require('@/assets/images/asteroides.png')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <HelloWave />
        <ThemedText type="title">Corpos Celestes</ThemedText>
        <HelloWave />
      </ThemedView>

      <Collapsible title="Imagem Astronômica do Dia (NASA APOD)" initiallyExpanded={true}>
        {loading ? (
          <ActivityIndicator size="large" color="#0A3D91" />
        ) : error ? (
          <ThemedText style={styles.errorText}>{error}</ThemedText>
        ) : apodData ? (
          <>
            <ThemedText type="subtitle">{apodData.title}</ThemedText>
            <ThemedText>{apodData.date}</ThemedText>
            {apodData.media_type === 'image' ? (
              <Image 
                source={{ uri: apodData.url }} 
                style={styles.apodImage}
                resizeMode="contain"
              />
            ) : (
              <ThemedText>O conteúdo de hoje é um vídeo. Assista no site da NASA.</ThemedText>
            )}
            <ExternalLink href="https://apod.nasa.gov/apod/astropix.html">
              <ThemedText type="link">Ver no site da NASA</ThemedText>
            </ExternalLink>
          </>
        ) : null}
      </Collapsible>

      <Collapsible title="Principais Corpos Celestes" initiallyExpanded={true}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.horizontalScroll}>
          {celestialBodies.map((body) => (
            <ThemedView key={body.id} style={styles.celestialCard}>
              {body.imageUrl && (
                <Image 
                  source={{ uri: body.imageUrl }} 
                  style={styles.celestialImage}
                  resizeMode="cover"
                />
              )}
              <ThemedText type="defaultSemiBold">{body.name}</ThemedText>
              <ThemedText numberOfLines={3} style={styles.descriptionText}>
                {body.description}
              </ThemedText>
            </ThemedView>
          ))}
        </ScrollView>
      </Collapsible>

      <Collapsible title="Curiosidades Astronômicas">
        <ThemedText>
          - O universo observável tem aproximadamente 93 bilhões de anos-luz de diâmetro.
        </ThemedText>
        <ThemedText>
          - A Estação Espacial Internacional orbita a Terra a cada 90 minutos.
        </ThemedText>
        <ThemedText>
          - Uma colher de chá de uma estrela de nêutrons pesaria cerca de 6 bilhões de toneladas.
        </ThemedText>
        <ThemedText>
          - Há mais estrelas no universo do que grãos de areia em todas as praias da Terra.
        </ThemedText>
      </Collapsible>

      <Collapsible title="Recursos para Explorar">
        <ExternalLink href="https://www.nasa.gov">
          <ThemedText type="link">Site Oficial da NASA</ThemedText>
        </ExternalLink>
        <ExternalLink href="https://www.esa.int">
          <ThemedText type="link">Agência Espacial Europeia (ESA)</ThemedText>
        </ExternalLink>
        <ExternalLink href="https://skyandtelescope.org">
          <ThemedText type="link">Sky & Telescope</ThemedText>
        </ExternalLink>
        <ExternalLink href="https://stellarium-web.org">
          <ThemedText type="link">Stellarium (Mapa Celeste Online)</ThemedText>
        </ExternalLink>
      </Collapsible>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  reactLogo: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: '100%',
    height: '100%',
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  apodImage: {
    width: '100%',
    height: 200,
    marginVertical: 10,
    borderRadius: 8,
  },
  explanationText: {
    marginVertical: 10,
    fontStyle: 'italic',
  },
  errorText: {
    color: 'red',
    textAlign: 'center',
  },
  horizontalScroll: {
    paddingVertical: 10,
  },
  celestialCard: {
    width: 150,
    marginRight: 15,
    padding: 10,
    borderRadius: 8,
    backgroundColor: '#f0f0f0',
  },
  celestialImage: {
    width: '100%',
    height: 100,
    borderRadius: 4,
    marginBottom: 8,
  },
  descriptionText: {
    fontSize: 12,
  },
});