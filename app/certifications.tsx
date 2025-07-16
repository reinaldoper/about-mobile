import React, { useState } from 'react';
import {
  View,
  Text,
  FlatList,
  Pressable,
  Linking,
  ListRenderItem,
} from 'react-native';
import { certificates } from '@/constants/certifications';
import { styles } from '../styles/CertificateStyle';
import { typeCertificate, CategoryKey, categories } from '../types/typeCertificate';

export default function CertificationsScreen() {
  const [selectedCategory, setSelectedCategory] = useState<CategoryKey | null>(null);

  const handlePressCategory = (categoryKey: CategoryKey) => {
    setSelectedCategory((prev) => (prev === categoryKey ? null : categoryKey));
  };

  const renderCertificate: ListRenderItem<typeCertificate> = ({ item }) => (
    <Pressable
      onPress={() => Linking.openURL(item.link)}
      style={styles.card}
    >
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.description}>{item.description}</Text>
      <Text style={styles.date}>{item.date}</Text>
      <Text style={styles.link}>Ver certificado</Text>
    </Pressable>
  );

  const certificatesToShow: typeCertificate[] = selectedCategory
    ? certificates[selectedCategory]
    : [];

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Meus Certificados</Text>

      <View style={styles.buttonsContainer}>
        {categories.map((cat) => (
          <Pressable
            key={cat.key}
            onPress={() => handlePressCategory(cat.key)}
            style={[
              styles.categoryButton,
              selectedCategory === cat.key && styles.activeCategoryButton,
            ]}
          >
            <Text
              style={[
                styles.categoryButtonText,
                selectedCategory === cat.key && styles.activeCategoryButtonText,
              ]}
            >
              {cat.label}
            </Text>
          </Pressable>
        ))}
      </View>

      {selectedCategory && (
        <FlatList
          data={certificatesToShow}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderCertificate}
          contentContainerStyle={styles.listContent}
        />
      )}
    </View>
  );
}
