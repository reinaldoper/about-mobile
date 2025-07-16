import React, { useState } from 'react';
import {
  View,
  Text,
  FlatList,
  Pressable,
  Linking,
  ListRenderItem,
} from 'react-native';
import { projetos } from '@/constants/projetos';
import { styles } from '../styles/ProjectStyle';
import { typeProject, ProjectCategory, categories } from '@/types/typeProjects';


export default function ProjectsScreen() {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory | null>(null);

  const handlePressCategory = (key: ProjectCategory) => {
    setSelectedCategory((prev) => (prev === key ? null : key));
  };

  const renderProject: ListRenderItem<typeProject> = ({ item }) => (
    <Pressable
      onPress={() => Linking.openURL(item.link)}
      style={styles.card}
    >
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.description}>{item.description}</Text>
      <Text style={styles.date}>{item.date}</Text>
      <Text style={styles.link}>Ver projeto</Text>
    </Pressable>
  );

  const projectsToShow: typeProject[] = selectedCategory
    ? projetos[selectedCategory]
    : [];

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Projetos</Text>

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
          data={projectsToShow}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderProject}
          contentContainerStyle={styles.listContent}
        />
      )}
    </View>
  );
}
