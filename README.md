# foundations

To install dependencies:

```bash
bun install
```

To run:

```bash
bun run index.ts
```

This project was created using `bun init` in bun v1.4.2. [Bun](https://bun.com) is a fast all-in-one JavaScript runtime.


Exercice 2
    1. La propriété du résultat attendu
    2. Elle permet de ne garder que les membres dont le statut est "disponible"
    3. Elles produisent une nouvelle valeur

Exercice 3
    1. Toutes les fonctions de cette partie calculent une valeur
    2. L'instruction console.log ou console.table produit un effet observable à l'extérieur du calcul
    3. Pour la fonction createCrewCards oui mais pour les autres, le résultat dépend du paramètre passé en argument bien que pour un même paramètre, on aura toujours le même résultat

Exercice 4
    1. Car ces 2 objets n'ont pas les mêmes contenus ni les mêmes références
    2. Les équipes dont l'id n'est pas le bon et donc ne sont pas modifiées conservent leur référence, à l'inverse de l'équipe modifiée car addPartner crée un nouvel objet
    3. L'absence de mutation permet de faire exister les 2 états simultanément et donc de les comparer
    4. L'autre partie subirait alors la modification et cela pourrait engendrer des erreurs

Exercice 5
    1. La fonction describeMissionState décrit simplement le résultat à produire pour un état donné
    2. Un booléen ne donne que 2 valeurs (true ou false) or nous avons 3 états ce qui n'est pas judicieux si nous voulons que la réponse et les données soient spécifiques à l'état
    3. Les états incohérents sont : être en erreur mais avoir des données, être en erreur sans message, être en chargement mais avoir des données, être en chargement avec un message d'erreur, être en succès sans données et être en succès avec un message d'erreur

Exercice 6
    1. T représente le type de l'objet qui n'est pas imposée pour cette fonction
    2. extends { id: number } garantie que notre type possède une propriété id de type number
    3. Le retour peut être undefined car il est possible qu'il n'y ait aucun objet de type T dont l'id correspond à l'id en paramètre


Fonction hasSkill
    - Entrées : un CrewMember et un string représentant un skill
    - Sortie : un boolean (oui ou non le CrewMember possède ce skill)
    - Ne modifie pas ses arguments
    - Ne produit pas d'effet observable
    - Renvoie toujours le même résultat pour les mêmes entrées

Fonction removePartner
    - Entrées : une Team et un nombre représentant l'id du partner à enlever
    - Sortie : une Team
    - Ne modifie pas ses arguments
    - Renvoie un nouvel objet Team avec la Team de base mais où le partner avec l'id correspondant est retiré de la liste des partners, observable avec les console.log()
    - Renvoie toujours le même résultat pour les mêmes entrées


Bonus : tests unitaires
    Tests de la fonction describeMissionState (4 tests), hasSkill (2 tests) et removePartner (1 test)
    1. Car on veut que ce test produise un résultat immuable, le connecter au réseau ou à des données modifiables revient à dire que le résultat dépend de données extérieures pouvant être modifiées
    2. Une fonction pure est plus simple à tester car elle produira toujours le même résultat pour les mêmes entrées
    3. Pour s'assurer que le résultat est bien celui attendu et pour s'assurer que les données d'origine n'ont pas été modifiées

Bonus : chargement asynchrone
    

Utilisation de l'IA