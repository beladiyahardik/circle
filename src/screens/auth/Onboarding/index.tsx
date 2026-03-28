import React, { useRef, useState } from 'react';
import {
  Dimensions,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const SLIDES = [
  {
    id: '1',
    title: 'Hello, Circle.',
    description: 'Your private space for\nyour favorite people.',
    isDark: true,
  },
  {
    id: '2',
    title: 'Who’s in your circle?',
    description: 'Add 3 or more people to begin.',
    isDark: false,
    inputs: ['Emily', 'David', 'Samantha'],
  },
  {
    id: '3',
    title: 'Name Your Circle',
    description: 'Give your group a name.',
    isDark: false,
    placeholder: 'Weekend Getaway',
  },
];

const { width, height } = Dimensions.get('window');

const PRIMARY_COLOR = '#0064e0';

const Onboarding = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef<FlatList>(null);

  const handleNext = () => {
    if (currentIndex < SLIDES.length - 1) {
      flatListRef.current?.scrollToIndex({ index: currentIndex + 1 });
    }
  };

  const renderItem = ({ item }: { item: (typeof SLIDES)[0] }) => (
    <View
      style={[
        styles.slide,
        { backgroundColor: item.isDark ? PRIMARY_COLOR : '#fff' },
      ]}
    >
      <SafeAreaView style={styles.container}>
        <View style={styles.content}>
          <Text
            style={[styles.title, { color: item.isDark ? '#fff' : '#000' }]}
          >
            {item.title}
          </Text>
          <Text
            style={[
              styles.description,
              { color: item.isDark ? '#fff' : '#666' },
            ]}
          >
            {item.description}
          </Text>

          {/* Render inputs only for the second/third slides */}
          {item.inputs &&
            item.inputs.map((name, i) => (
              <View key={i} style={styles.inputBox}>
                <Text>{name}</Text>
              </View>
            ))}
          {item.placeholder && (
            <TextInput
              style={styles.inputField}
              placeholder={item.placeholder}
            />
          )}
        </View>

        <View style={styles.footer}>
          <TouchableOpacity
            style={[
              styles.button,
              { backgroundColor: item.isDark ? '#fff' : PRIMARY_COLOR },
            ]}
            onPress={handleNext}
          >
            <Text
              style={[
                styles.buttonText,
                { color: item.isDark ? PRIMARY_COLOR : '#fff' },
              ]}
            >
              {currentIndex === SLIDES.length - 1 ? 'Finish' : 'Next'}
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </View>
  );

  return (
    <FlatList
      ref={flatListRef}
      data={SLIDES}
      renderItem={renderItem}
      horizontal
      pagingEnabled
      showsHorizontalScrollIndicator={false}
      bounces={false}
      onMomentumScrollEnd={e => {
        setCurrentIndex(Math.round(e.nativeEvent.contentOffset.x / width));
      }}
    />
  );
};

export default Onboarding;

const styles = StyleSheet.create({
  slide: { width, height },
  container: { flex: 1, justifyContent: 'space-between', padding: 30 },
  content: { marginTop: 80 },
  title: { fontSize: 32, fontWeight: 'bold', marginBottom: 10 },
  description: { fontSize: 18, lineHeight: 24, marginBottom: 30 },
  inputBox: {
    padding: 15,
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    marginBottom: 10,
  },
  inputField: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 15,
    borderRadius: 8,
    fontSize: 16,
  },
  footer: { marginBottom: 30 },
  button: {
    height: 55,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: { fontSize: 18, fontWeight: 'bold' },
});
