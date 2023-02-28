import React from 'react';
import { NativeRouter, Route, Routes } from 'react-router-native';
import Settings from './src/views/Settings';
import ProfileSetup from './src/views/ProfileSetup';
import SetupBluetooth from './src/views/SetupBluetooth';
import HomeScreen from './src/views/HomeScreen';

export const App: React.FC = ({}) => {
  return (
    <NativeRouter>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/onboard/profile" element={<ProfileSetup />} />
        <Route path="/onboard/bt" element={<SetupBluetooth />} />
      </Routes>
    </NativeRouter>
  );
};

export default App;