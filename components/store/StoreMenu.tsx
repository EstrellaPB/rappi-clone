import { useState } from 'react';
import { Image, LayoutChangeEvent, Pressable, StyleSheet, Text, View } from 'react-native';
import Animated from 'react-native-reanimated';

interface Props {
  categories: Array<{ id: string | number; name: string; dishes: string[] }>;
  tabStyle?: Record<string, unknown>;
  onLayout?: ((event: LayoutChangeEvent) => void) | undefined;
}
export default function StoreMenu({ categories, tabStyle, onLayout }: Props) {
  const [selectedCategory, setSelectedCategory] = useState<string | number>('1');

  return (
    <View style={{ zIndex: 10 }} onLayout={onLayout}>
      <Animated.ScrollView horizontal showsHorizontalScrollIndicator={false} style={[styles.categoriesContainer, tabStyle]} scrollEventThrottle={16} >
        {categories.map((category) => (
          <View style={styles.categoryButton} key={category.id}>
            <Pressable
              onPress={() => setSelectedCategory(category.id)}
              style={{ flex: 1, justifyContent: 'center', paddingVertical: 10, paddingHorizontal: 16 }}
            >
              <Text style={getCategoryStyles(selectedCategory, category.id).title}>{category.name}</Text>
            </Pressable>
            <View style={getCategoryStyles(selectedCategory, category.id).borderButton} />
          </View>
        ))}
      </Animated.ScrollView>
      <View>
        {categories
          .find((c) => c.id === selectedCategory)
          ?.dishes?.map((dish, index) => (
            <View
              style={{
                flexDirection: 'row',
              }}
              key={index}
            >
              <Image source={require('@/assets/images/balance-03.jpg')} style={{ height: 200, width: 150 }} />
              <Text key={index}>{dish}</Text>
            </View>
          ))}
      </View>
    </View>
  );
}

const getCategoryStyles = (selectedCategory: string | number, categoryId: string | number) => {
  let currentCategory = selectedCategory === categoryId;
  return {
    title: [styles.categoryTitle, currentCategory ? styles.selectedCategoryTitle : {}],
    borderButton: [styles.categoryBorder, currentCategory ? styles.selectedCategoryBorder : {}],
  };
};
const styles = StyleSheet.create({
  categoryButton: {
    backgroundColor: 'white',
  },
  categoriesContainer: {
    height: 60,
    zIndex: 10,
    position: 'absolute'
  },

  categoryTitle: {
    fontSize: 16,
    fontWeight: '600',
    backgroundColor: 'yellow',
  },

  selectedCategoryTitle: {
    color: '#36d686',
  },
  categoryBorder: {
    borderTopWidth: 5,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderColor: 'transparent',
  },
  selectedCategoryBorder: {
    borderColor: '#36d686',
  },
});
