import { StyleSheet, Image, Platform } from 'react-native';
import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { HelloWave } from '@/components/HelloWave';
import { ThemedView } from '@/components/ThemedView';

export default function TabTwoScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
      headerImage={
        <Image
          source={require('@/assets/images/solarsystem.png')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <HelloWave />
          <ThemedText type="title">Sistema Solar</ThemedText>
        <HelloWave />
      </ThemedView>
      
      <ThemedText>
        Nosso sistema solar consiste em uma estrela média chamada Sol, os planetas Mercúrio, Vênus, Terra, Marte, Júpiter, Saturno, Urano, Netuno e Plutão. Inclui também os satélites dos planetas, inúmeros cometas, asteroides e meteoroides.
      </ThemedText>

      <Collapsible title="Sol">
      <Image
        source={{ uri: 'https://images-assets.nasa.gov/image/PIA03149/PIA03149~thumb.jpg' }}
        style={styles.planetImage}
      />
        <ThemedText>
          O Sol é a estrela central do nosso sistema solar, responsável por 99,86% da massa do sistema. É uma esfera quase perfeita de plasma quente, com movimentos de convecção que geram um campo magnético.
        </ThemedText>
      </Collapsible>

      <Collapsible title="Mercúrio">
      <Image
        source={{ uri: 'data:image/jpeg;base64,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' }}
        style={styles.planetImage}
      />
        <ThemedText>
          O planeta mais próximo do Sol e o menor do sistema solar. Sua superfície é marcada por crateras e não possui satélites naturais. Um dia em Mercúrio dura 59 dias terrestres.
        </ThemedText>
      </Collapsible>

      <Collapsible title="Vênus">
      <Image
        source={{ uri: 'data:image/jpeg;base64,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' }}
        style={styles.planetImage}
      />
        <ThemedText>
          O segundo planeta do sistema solar, conhecido como estrela da manhã ou estrela da tarde. Tem uma atmosfera densa de CO₂ que causa um intenso efeito estufa, tornando-o o planeta mais quente.
        </ThemedText>
      </Collapsible>

      <Collapsible title="Terra">
      <Image
        source={{ uri: 'https://images-assets.nasa.gov/image/GSFC_20171208_Archive_e002131/GSFC_20171208_Archive_e002131~orig.jpg' }}
        style={styles.planetImage}
      />
        <ThemedText>
          Nosso planeta é o maior dos planetas rochosos e o único conhecido por abrigar vida. Cerca de 71% de sua superfície é coberta por água. Possui um satélite natural, a Lua.
        </ThemedText>
      </Collapsible>

      <Collapsible title="Marte">
      <Image
        source={{ uri: 'https://images-assets.nasa.gov/image/PIA00407/PIA00407~orig.jpg' }}
        style={styles.planetImage}
      />
        <ThemedText>
          Conhecido como "Planeta Vermelho" devido ao óxido de ferro em sua superfície. Tem a montanha mais alta do sistema solar (Olympus Mons) e dois pequenos satélites: Fobos e Deimos.
        </ThemedText>
      </Collapsible>

      <Collapsible title="Júpiter">
      <Image
        source={{ uri: 'data:image/jpeg;base64,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' }}
        style={styles.planetImage}
      />
        <ThemedText>
          O maior planeta do sistema solar, um gigante gasoso com uma massa 2,5 vezes a de todos os outros planetas juntos. Possui 79 luas conhecidas, incluindo as quatro grandes luas galileanas.
        </ThemedText>
      </Collapsible>

      <Collapsible title="Saturno">
      <Image
        source={{ uri: 'https://static.todamateria.com.br/upload/pl/an/planeta-saturno-og.jpg' }}
        style={styles.planetImage}
      />
        <ThemedText>
          Famoso por seus anéis impressionantes, compostos principalmente de partículas de gelo. É o segundo maior planeta e possui 82 luas confirmadas, sendo Titã a maior delas.
        </ThemedText>
      </Collapsible>

      <Collapsible title="Urano">
      <Image
        source={{ uri: 'https://images-assets.nasa.gov/image/PIA18182/PIA18182~orig.jpg' }}
        style={styles.planetImage}
      />
        <ThemedText>
          Um gigante de gelo com uma característica inclinação axial de 98 graus, fazendo com que ele orbite o Sol "de lado". Tem 27 luas conhecidas e um sistema de anéis fraco.
        </ThemedText>
      </Collapsible>

      <Collapsible title="Netuno">
      <Image
        source={{ uri: 'https://images-assets.nasa.gov/image/PIA01492/PIA01492~orig.jpg' }}
        style={styles.planetImage}
      />
        <ThemedText>
          O planeta mais distante do Sol (desde a reclassificação de Plutão) e o mais ventoso, com ventos que podem atingir 2.100 km/h. Tem 14 luas conhecidas e um sistema de anéis.
        </ThemedText>
      </Collapsible>

      <Collapsible title="Plutão">
      <Image
        source={{ uri: 'https://images-assets.nasa.gov/image/PIA19952/PIA19952~orig.jpg' }}
        style={styles.planetImage}
      />
        <ThemedText>
          Classificado como planeta anão desde 2006, Plutão é o maior objeto conhecido no Cinturão de Kuiper. Possui cinco luas, sendo Caronte a maior, com cerca de metade do tamanho de Plutão.
        </ThemedText>
        <ExternalLink href="https://solarsystem.nasa.gov/">
          <ThemedText type="link">Mais informações no site da NASA</ThemedText>
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
  planetImage: {
    width: 200,
    height: 200,
    alignSelf: 'center',
    marginVertical: 10,
  },
});