import { registerApplication, start } from 'single-spa';

registerApplication({
  name: '@single-spa/welcome',
  app: () =>
    System.import(
      'https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js'
    ),
  activeWhen: (location) => location.pathname === '/',
});

registerApplication({
  name: '@nhanlnt/navbar',
  app: () => System.import('@nhanlnt/navbar'),
  activeWhen: ['/']
});

registerApplication({
  name: '@nhanlnt/chat',
  app: () => System.import('@nhanlnt/chat'),
  activeWhen: ['/chat']
});

registerApplication({
  name: '@nhanlnt/snippet',
  app: () => System.import('@nhanlnt/snippet'),
  activeWhen: ['/snippet']
});

start({
  urlRerouteOnly: true,
});
