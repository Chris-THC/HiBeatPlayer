/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {QueryClientProvider} from '@tanstack/react-query';
import queryClient from './src/services/reactQueryClient/QueryClient.ts';
import TrackPlayer from 'react-native-track-player';
import {PlaybackService} from './src/services/trackPlayerService/TrackPlayerService';

const MainApp = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  );
};

AppRegistry.registerComponent(appName, () => MainApp);

// This line is required for track player to work
TrackPlayer.registerPlaybackService(() => PlaybackService);