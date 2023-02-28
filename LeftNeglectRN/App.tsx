import React from 'react';
import { NativeRouter, Route, Routes, Link } from 'react-router-native';
import GlassesSettings from './src/views/GlassesSettings';
import ProfileSetup from './src/views/ProfileSetup';
import ReminderSettings from './src/views/ReminderSettings';
import SetupBluetooth from './src/views/SetupBluetooth';
import HomeScreen from './src/views/HomeScreen';

export const App: React.FC = ({}) => {
  return (
    <NativeRouter>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/settings/glasses" element={<GlassesSettings />} />
        <Route path="/settings/reminders" element={<ReminderSettings />} />
        <Route path="/onboard/profile" element={<ProfileSetup />} />
        <Route path="/onboard/bt" element={<SetupBluetooth />} />
      </Routes>
    </NativeRouter>
  );
};

export default App;