import React from 'react';
import {Text, View, Image} from 'react-native';
import {TopArtistInterface} from '../../../interfaces/TopArtistInterface/TopArtistInterface';
import styles from './../styles/ArtistCard';

interface PropsArtistCard {
  artistInfo: TopArtistInterface;
}

export const ArtistCard: React.FC<PropsArtistCard> = ({artistInfo}) => {
  return (
    <View style={{flexDirection: 'column'}}>
      <View style={styles.artistContentInfo}>
        <View style={styles.artistContentInfoContText}>
          <Text style={styles.artistName}>{artistInfo.nameArtist}</Text>
        </View>
        <Image
          style={styles.imageArtistCard}
          source={{
            uri: artistInfo.imgCover[1].url,
          }}
        />
      </View>
    </View>
  );
};
