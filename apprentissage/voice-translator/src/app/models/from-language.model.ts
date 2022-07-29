export class FromLanguage
{
    // cette classe contient les données de chaque
    // acceptée comme origine et nécéssaire
    // à la fabrication des options de l'élément select
    // de gauche ainsi qu'à l'appel de l'API de traduction.
    // La propriété unique 'list' de cette classe contient
    // un tableau d'objets contenant chacun 2 props:
    // langue et code

    public list:any[] = [
        {langue: 'Français', code: 'fr'},
        {langue: 'Anglais', code: 'en'},
        {langue: 'Espagnol', code: 'es'},
        {langue: 'Italien', code: 'it'},
        {langue: 'Allemand', code: 'de'},
        {langue: 'Pays-Bas', code: 'nl'},
    ]
}