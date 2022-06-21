// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.

export const environment = {
    production: false,
    hmr: false,
    appConfig: 'appconfig.json',
    currencyAPI:{
        'X-RapidAPI-Key': "910196889cmshbd50f6a50c2d860p1c89a7jsn31b9c4fc5d79",
        'X-RapidAPI-Host':"http://currency-converter5.p.rapidapi.com"
    }
};
