// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyB3N5-cHrb1OuaRQG2N-KtmqFvBbt9GSbI',
    authDomain: 'chat-demo-66ed9.firebaseapp.com',
    databaseURL: 'https://chat-demo-66ed9.firebaseio.com',
    projectId: 'chat-demo-66ed9',
    storageBucket: 'chat-demo-66ed9.appspot.com',
    messagingSenderId: '189796401125'
  }
};
