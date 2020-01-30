// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  googleAuth: {
    protocol: 'https',
    baseUrl: 'identitytoolkit.googleapis.com',
    apiKey: 'AIzaSyAXQqmVN-cwMRFx8TaKNF9MgPKMk-HiW-s'
  },
  firebase: {
    protocol: 'https',
    baseUrl: 'recipe-book-backend-6e8e9.firebaseio.com',
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
