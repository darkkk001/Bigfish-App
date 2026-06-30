import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'live.bigfish.terminal',
  appName: 'BigFish Terminal',
  webDir: 'www',
  // Load the live SSR portal directly (full feature parity). The native shell adds
  // push notifications, splash, status-bar styling, etc. on top.
  server: {
    // Open straight into the Terminal (what "Launch Terminal" leads to) — not the marketing homepage.
    // /portal is auth-guarded: logged in -> terminal immediately; logged out -> /login?next=/portal.
    // CANONICAL host (www) — bigfish.live 308-redirects to www, which would bounce the WebView to the browser.
    url: 'https://www.bigfish.live/portal',
    cleartext: false,
    androidScheme: 'https',
    // Keep BOTH hosts inside the in-app WebView (don't bounce to the system browser).
    allowNavigation: ['www.bigfish.live', 'bigfish.live'],
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
