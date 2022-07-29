export class Api
{
    // cette classe contient une prop nommée 'list'
    // qui contient un objet présentant 2 propriétés:
    // - translationApi
    // - ttsApi
    // chacune de ces prop contient un objet qui stocke
    // les données nécéssaires à l'appel de chaque api

    public list: any = {
        // api de traduction
        translationApi: {
            apiRoot:  'https://libretranslate.de/translate',
            key: '',
            format: 'text',
        },

        // api de Text To Speech
        ttsApi: {
            apiRoot: 'https://api.voicers.org/?',
            key: 'XXXXXXXXXXXXXXXXXXXXXXX', // la clé api ici
            src: '',
            language: '',
            speechRate: '',
            audioCodec: 'mp3',
            audioFormat: '16khz_16bit_stereo',
            voice: '',
        }
    }
}