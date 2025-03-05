import {Injectable, signal} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  produits = signal([
    {
      "id": 1,
      "titre": "T-shirt en coton",
      "description": "Un t-shirt confortable en coton bio.",
      "prix": 19.99,
      "quantite_en_stock": 50
    },
    {
      "id": 2,
      "titre": "Jean slim",
      "description": "Jean slim fit pour un look moderne.",
      "prix": 49.99,
      "quantite_en_stock": 30
    },
    {
      "id": 3,
      "titre": "Chaussures de sport",
      "description": "Chaussures de sport pour hommes et femmes.",
      "prix": 79.99,
      "quantite_en_stock": 20
    },
    {
      "id": 4,
      "titre": "Sac à dos",
      "description": "Sac à dos pratique pour le quotidien.",
      "prix": 39.99,
      "quantite_en_stock": 40
    },
    {
      "id": 5,
      "titre": "Montre connectée",
      "description": "Montre intelligente avec suivi d'activité.",
      "prix": 129.99,
      "quantite_en_stock": 15
    },
    {
      "id": 6,
      "titre": "Casque audio",
      "description": "Casque audio sans fil avec réduction de bruit.",
      "prix": 99.99,
      "quantite_en_stock": 25
    },
    {
      "id": 7,
      "titre": "Lunettes de soleil",
      "description": "Lunettes de soleil polarisées.",
      "prix": 29.99,
      "quantite_en_stock": 60
    },
    {
      "id": 8,
      "titre": "Portefeuille en cuir",
      "description": "Portefeuille en cuir véritable.",
      "prix": 34.99,
      "quantite_en_stock": 35
    },
    {
      "id": 9,
      "titre": "Parfum pour homme",
      "description": "Parfum masculin, notes boisées.",
      "prix": 59.99,
      "quantite_en_stock": 20
    },
    {
      "id": 10,
      "titre": "Robe d'été",
      "description": "Robe légère pour l'été.",
      "prix": 29.99,
      "quantite_en_stock": 45
    },
    {
      "id": 11,
      "titre": "Chemise à carreaux",
      "description": "Chemise à carreaux en flanelle.",
      "prix": 39.99,
      "quantite_en_stock": 30
    },
    {
      "id": 12,
      "titre": "Pull en laine",
      "description": "Pull chaud en laine mélangée.",
      "prix": 49.99,
      "quantite_en_stock": 25
    },
    {
      "id": 13,
      "titre": "Écharpe tricotée",
      "description": "Écharpe tricotée main.",
      "prix": 19.99,
      "quantite_en_stock": 50
    },
    {
      "id": 14,
      "titre": "Bonnet d'hiver",
      "description": "Bonnet chaud pour l'hiver.",
      "prix": 14.99,
      "quantite_en_stock": 60
    },
    {
      "id": 15,
      "titre": "Gants en cuir",
      "description": "Gants en cuir pour homme.",
      "prix": 29.99,
      "quantite_en_stock": 30
    },
    {
      "id": 16,
      "titre": "Ceinture réversible",
      "description": "Ceinture réversible noir/marron.",
      "prix": 24.99,
      "quantite_en_stock": 40
    },
    {
      "id": 17,
      "titre": "Cravate en soie",
      "description": "Cravate en soie pour occasions spéciales.",
      "prix": 39.99,
      "quantite_en_stock": 20
    },
    {
      "id": 18,
      "titre": "Baskets vintage",
      "description": "Baskets au style vintage.",
      "prix": 69.99,
      "quantite_en_stock": 25
    },
    {
      "id": 19,
      "titre": "Veste en jean",
      "description": "Veste en jean délavé.",
      "prix": 59.99,
      "quantite_en_stock": 30
    },
    {
      "id": 20,
      "titre": "Sweat à capuche",
      "description": "Sweat à capuche confortable.",
      "prix": 34.99,
      "quantite_en_stock": 45
    },
    {
      "id": 21,
      "titre": "Pantalon de jogging",
      "description": "Pantalon de jogging pour le sport.",
      "prix": 29.99,
      "quantite_en_stock": 50
    },
    {
      "id": 22,
      "titre": "Short de bain",
      "description": "Short de bain pour homme.",
      "prix": 24.99,
      "quantite_en_stock": 35
    },
    {
      "id": 23,
      "titre": "Chaussettes hautes",
      "description": "Chaussettes hautes en coton.",
      "prix": 9.99,
      "quantite_en_stock": 60
    }])

  ajouterUnProduit(nouveauProduit: any){
    this.produits.update((old) => [...old, nouveauProduit])
  }
}
