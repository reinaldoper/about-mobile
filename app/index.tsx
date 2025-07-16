import { View, Text, Image, ScrollView, FlatList } from 'react-native';
import { styles } from '../styles/HomeStyle';
import React from 'react';
import eu from '../assets/images/engenheiro_software.jpg';
import { tecnologys } from '../constants/Tecnology';
import { Ionicons } from '@expo/vector-icons';
import { tecnologyTypes } from '../types/typeHome';
import { tintColorLight } from '@/constants/Colors';


export default function HomeScreen() {

  const Item = ({titulo, src}: tecnologyTypes) => (
  <View style={styles.item}>
    <Text style={styles.title}>
      <Ionicons name="code-slash" size={24} color={tintColorLight} /> {titulo}
    </Text>
    <Image source={{ uri: src }} style={styles.image} />
  </View>
);
  return (
    <View style={styles.container}>
      <View style={styles.imageBackGround}>
        <Image source={eu} style={styles.image} />
      </View>
      <Text style={styles.about}>
        Olá, eu sou Reinaldo!<Text style={styles.software}>Engenheiro de software.</Text>
      </Text>
        <FlatList
          style={styles.scrollView}
          ListHeaderComponent={() => <Text style={styles.flastList}>Minhas Tecnologias</Text>}
          data={tecnologys}
          renderItem={({ item }) => <Item titulo={item.titulo} src={item.src} />}
          keyExtractor={item => item.id.toString()}
        />
    </View>
  );
}
