// "Production" enabled environment

export const environment = {
    production: true,
    hmr: false,
    appConfig: 'appconfig.production.json',
    remoteServiceBaseUrl: "http://facturi.ma:8000",
    apiUrl: "facturi.ma:8000/api/",
    currencyAPI:{
        'X-RapidAPI-Key': "910196889cmshbd50f6a50c2d860p1c89a7jsn31b9c4fc5d79",
        'X-RapidAPI-Host':"http://currency-converter5.p.rapidapi.com"
    }
};

