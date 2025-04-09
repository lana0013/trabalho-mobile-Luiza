import { Linking, Image, StyleSheet, Platform, TouchableOpacity, Alert } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  const handleButtonPress = () => {
    const url = 'https://science.nasa.gov/universe/'; // Substitua pela URL que você deseja abrir
    Linking.openURL(url).catch((err) => {
      console.error("Erro ao abrir a URL:", err);
      Alert.alert('Erro', 'Não foi possível abrir a URL.');
    });
  };

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/universo.png')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <HelloWave />
        <ThemedText type="title">Universo</ThemedText>
        <HelloWave />
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Espaço Sideral</ThemedText>
        <ThemedText>
          Região do Universo que não é ocupada por corpos celestes, sendo um ambiente próximo do vácuo perfeito, sem atrito, o que permite que estrelas, planetas e satélites se movimentem livremente. 
          <ThemedText type="defaultSemiBold">
            {Platform.select({
              ios: 'cmd + d',
              android: 'cmd + m',
            })}
          </ThemedText>{' '}
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Corpos Celestes</ThemedText>
        <ThemedText>
          Todos os objetos que existem no espaço sideral, como estrelas, planetas, asteroides, cometas, meteoritos, satélites naturais e artificiais
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Sistema Solar</ThemedText>
        <ThemedText>Conjunto de corpos celestes que orbitam o Sol, a estrela central do sistema. É composto por planetas, planetas anões, asteroides, cometas, meteoroides, luas e outros. </ThemedText>
        <ThemedText>
          When you're ready, run{' '}
          <ThemedText type="defaultSemiBold">npm run reset-project</ThemedText> to get a fresh{' '}
          <ThemedText type="defaultSemiBold">app</ThemedText> directory. This will move the current{' '}
          <ThemedText type="defaultSemiBold">app</ThemedText> to{' '}
          <ThemedText type="defaultSemiBold">app-example</ThemedText>.
        </ThemedText>
      </ThemedView>
      
      {/* Adicionando o botão aqui */}
      <ThemedView style={styles.buttonContainer}>
        <TouchableOpacity onPress={handleButtonPress} style={styles.button}>
          <ThemedText style={styles.buttonText}>Saiba mais</ThemedText>
        </TouchableOpacity>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  buttonContainer: {
    margin: 16, // Adiciona margem ao redor do botão
  },
  button: {
    backgroundColor: '#007BFF', // Cor de fundo do botão
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF', // Cor do texto do botão
    fontSize: 16,
  },
  reactLogo: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: '100%',
    height: '100%',
  },
});