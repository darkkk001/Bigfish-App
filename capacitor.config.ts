import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'live.bigfish.terminal',
  appName: 'BigFish Terminal',
  webDir: 'www',
  // Load the live SSR portal directly (full feature parity). The native shell adds
  // push notifications, splash, status-bar styling, etc. on top.
  server: {
    url: 'https://bigfish.live',
    cleartext: false,
    androidScheme: 'https',
  },
  backgroundColor: '#0a0d14',
  plugins: {
    PushNotifications: { presentationOptions: ['badge', 'sound', 'alert'] },
    SplashScreen: {
      launchShowDuration: 1500,
      backgroundColor: '#0a0d14',
      showSpinner: false,
      androidScaleType: 'CENTER_CROP',
    },
    StatusBar: { style: 'DARK', backgroundColor: '#0a0d14' },
  },
};

export default config;
