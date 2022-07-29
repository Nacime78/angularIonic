import { ToLanguage } from './../models/to-language.model';
import { FromLanguage } from './../models/from-language.model';
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { TranslationService } from './../services/traduction.service';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit, AfterViewInit {
  // recupération des référence d'éléments HTML
  // récuperation du select de langue FROM (select de gauche):
  @ViewChild('fromLanguage', {read: ElementRef}) fromLanguageRef!: ElementRef
  // récupération du select de langue TO (select de droite)
  @ViewChild('toLanguage', {read: ElementRef}) toLanguageRef!: ElementRef
  // récupération du texteArea ou l'utilisateur tape le texte à traduire
  @ViewChild('textToTranslate', {read: ElementRef}) textToTranslateRef!: ElementRef
  // récupération du texteArea ou on peut lire le texte traduit
  @ViewChild('translatedText', {read: ElementRef}) translatedTextRef!: ElementRef
  // declaration des propriétés de la classe tab1 page
  // la prop suivante contient un objet de type FromLanguage
  // qui liste les données concernant les langues de départ
  public listFromLanguage!: FromLanguage
  // la prop suivante contient un objet de type ToLanguage
  // qui liste les données concernant les langues de traduction
  public listToLanguage!: ToLanguage
  // Contient l'élément natif select de gauche
  private fromLanguage!: HTMLSelectElement
  // Contient l'élément natif select de droite
  private toLanguage!: HTMLSelectElement
  // Contient l'élément natif textearea ou l'utilisateur tape le texte à traduire
  private textToTranslate!: HTMLTextAreaElement
  // Contient l'élément natif textearea ou on peut lire le texte traduit
  private translatedText!: HTMLTextAreaElement
  // declencheur de spinner de chargement
  public loading!: boolean;
  constructor(
    private translationService: TranslationService
  ) {
    this.listFromLanguage = new FromLanguage()
    this.listToLanguage = new ToLanguage()
    console.log('this.listToLanguage:', this.listToLanguage)
  }
  ngOnInit() {
    this.loading = false;
  }
  ngAfterViewInit(): void {
    // récupération de l'élément select de gauche
    // juste après l'affichage de l'onglet tab1
    this.fromLanguage = this.fromLanguageRef.nativeElement
    console.log(this.fromLanguage)
    // définition de la valeur sélectionnée dans
    // le select de gauche
    this.fromLanguage.value = 'fr'
    console.log(this.fromLanguage.value)
    // récupération de l'élément select de droite
    // juste après l'affichage de l'onglet tab1
    this.toLanguage = this.toLanguageRef.nativeElement
    console.log(this.toLanguage)
    // définition de la valeur sélectionnée dans
    // le select de gauche
    this.toLanguage.value = 'en'
    console.log(this.toLanguage.value)
    // récupération de l'élément textearea natif dans
    // la propriété this.textToTranslate
    this.textToTranslate = this.textToTranslateRef.nativeElement
    console.log(this.textToTranslate)
    // récupération de l'élément textearea natif dans
    // la propriété this.translatedText
    this.translatedText = this.translatedTextRef.nativeElement
    console.log(this.translatedText)
  }
  sendText() {
    console.log('Texte à traduire: ', this.textToTranslate.value)
    console.log('code de la langue de depart', this.fromLanguage.value)
    console.log('code de la langue de traduction', this.toLanguage.value)
    if(this.textToTranslate.value === '') {
      return
    }
    // ici le code d'envoi vers l'api de traduction...
    const params = this.translationService.getParams(
      this.textToTranslate.value,
      this.fromLanguage.value,
      this.toLanguage.value
    )
    console.log(params);
    this.translationService.translateTxt(params).subscribe({
      next: (res: any) => {
        console.log(res)
        this.translatedText.value = res.translatedText
      }
    })
  }
}