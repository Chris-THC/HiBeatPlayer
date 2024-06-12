import React from 'react';
import {Text, View} from 'react-native';
import {useTopArtistGlobal} from '../../hooks/useTopArtist/TopArtist';
import styles from './styles/TopArtistSryles';
import {ArtistCard} from './components/ArtistCard';

export const TopArtistComponent = () => {
  const {data: Top10, isLoading: isLoadingTop10} = useTopArtistGlobal();

  if (isLoadingTop10) {
    return (
      <View>
        <Text>Loading</Text>
      </View>
    );
  }

  
  

  return (
    <View style={styles.topArtistContent}>
      {Top10?.map((artistItem, index) => (
        <ArtistCard key={index} artistInfo={artistItem} />
      ))}
    </View>
  );
};
