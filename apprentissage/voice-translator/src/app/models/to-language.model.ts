export class ToLanguage
{
    // cette classe contient les données de chaque
    // langue acceptée comme langue traduction et nécessaire
    // à la fabrication des otpions de l'élément select
    // de droite ainsi qu'à l'appel de l'API de traduction.
    // La propriété unique 'list' de cette classe contient
    // un tableau d'objets contenant chacun 4 props:
    // langue, code, voiceCode, voice

    public list: any[] = [

        {langue: 'Français', code: 'fr', voiceCode: 'fr-fr', voice: 'Iva'},

        {langue: 'Anglais', code: 'en', voiceCode: 'en-gb', voice: 'Lily'},

        {langue: 'Espagnol', code: 'es', voiceCode: 'es-es', voice: 'Luna'},

        {langue: 'Italien', code: 'it', voiceCode: 'it-it', voice: 'Pietro'},

        {langue: 'Allemand', code: 'de', voiceCode: 'de-de', voice: 'Lina'},

        {langue: 'Pays-Bas', code: 'nl', voiceCode: 'nl-nl', voice: 'Bram'},

        {langue: 'Arabe', code: 'ar', voiceCode: 'ar-sa', voice: 'Salim'},

        {langue: 'Chinois', code: 'zh', voiceCode: 'zh-cn', voice: 'Shu'},

        {langue: 'Tchèque', code: 'cs', voiceCode: 'cs-cz', voice: 'Josef'},

        {langue: 'Danois', code: 'da', voiceCode: 'da-dk', voice: 'Freja'},

        {langue: 'Finlande', code: 'fi', voiceCode: 'fi-fi', voice: 'Aada'},

        {langue: 'Grec', code: 'el', voiceCode: 'el-gr', voice: 'Neo'},

        {langue: 'Hébreux', code: 'he', voiceCode: 'he-il', voice: 'Rami'},

        {langue: 'Hindi', code: 'hi', voiceCode: 'hi-in', voice: 'Puja'},

        {langue: 'Hongrois', code: 'hu', voiceCode: 'hu-hu', voice: 'Mate'},

        {langue: 'Indonesien', code: 'id', voiceCode: 'id-id', voice: 'Intan'},

        {langue: 'Japon', code: 'ja', voiceCode: 'ja-jp', voice: 'Fumi'},

        {langue: 'Koréen', code: 'ko', voiceCode: 'ko-kr', voice: 'Nari'},

        {langue: 'Portugais', code: 'pt', voiceCode: 'pt-pt', voice: 'Leonor'},

        {langue: 'Portugais', code: 'ru', voiceCode: 'ru-ru', voice: 'Peter'},

        {langue: 'Slovaque', code: 'sk', voiceCode: 'sk-sk', voice: 'Beda'},

    ]
}