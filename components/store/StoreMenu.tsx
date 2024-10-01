import { useState } from 'react';
import { Pressable, ScrollView, StyleSheet, Text } from 'react-native';

interface Props {
  categories: Array<{ id: string | number; name: string; dishes: string[] }>;
}
export default function StoreMenu({ categories }: Props) {
  const [selectedCategory, setSelectedCategory] = useState<string | number>('1');
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categoriesContainer}>
      {categories.map((category) => (
        <Pressable key={category.id} onPress={() => setSelectedCategory(category.id)} style={[styles.categoryButton]}>
          <Text style={styles.categoryTitle}>{category.name}</Text>
        </Pressable>
      ))}
    </ScrollView>
  );
}
// !styles for selected category JEJE
const getSelectedCategoryStyles = () => {};
const styles = StyleSheet.create({
  categoryButton: {
    padding: 10,
    marginHorizontal: 5,
    backgroundColor: 'white',
    justifyContent: 'center',
  },
  categoryButtonSticky: {
    position: 'absolute',
    top: 0,
  },
  categoriesContainer: {
    maxHeight: 50,
    // paddingVertical: 8,
    backgroundColor: 'red',
  },

  categoryTitle: {
    fontSize: 16,
    fontWeight: '600',
  },

  selectedCategory: {
    color: '#36d686',
  },
});
