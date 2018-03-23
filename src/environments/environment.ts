// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyDypzjZ3yd_CkVgjtgtt6s2_YeQPEbOkTI',
    authDomain: 'tik-webapp.firebaseapp.com',
    databaseURL: 'https://tik-webapp.firebaseio.com',
    projectId: 'tik-webapp',
    storageBucket: 'tik-webapp.appspot.com',
    messagingSenderId: '473719203762'
  }
};
