# Documentation

## Sommaire

- [Explication](#explication)
- [Ajouter un nouveau projet](#ajouter-un-nouveau-projet)
- [Exemple type](#exemple-type)

## Explication

Afin d'ajouter un nouveau projet au portfolio il suffit de ce rendre dans le fichier `projects.ts`.

Il se situe au chemin suivant : `src/data/projects.ts`.

Une fois dans ce fichier, on retrouve ceci :

```typescript
export const projects : Array<ProjectType> = [
  {
    ...
  }
]
```

C'est à l'intérieur que l'on vas mettre tous les projets que l'on souhaite faire apparaître dans le portfolio.

## Ajouter un nouveau projet

Pour ajouter un nouveau projet, il faut suivre un structure bien particulière.

Tout d'abord un projet correspond à ceci `{}`, à l'intérieur de ces accolades nous allons mettre toutes les informations sur le projet.

**_Il est important de mettre une virgule à chaque fin de ligne d'information._**

Dans l'ordre :

> id: 1

Ici il faut mettre obligatoire un nombre, le nombre le plus petit apparaitra en premier dans l'affichage, et il faut aussi que les nombres ce suivent et qu'il n'y est pas de doublon.

> title: exemple

Ici il faut mettre une chaîne de caractère, ce titre apparaîtra sur les cards et dans la page du projet.

> imgPath: /assets/projects/exemple/exemple-vignette.png

Ici il faut mettre le chemin vers l'image qui sert du vignette pour le projet, cette image apparaîtra sur la card.

> mainsTag: ['EXEMPLE', 'EXEMPLE']

Ici il faut mettre les tags principaux du projet qui apparaîtront sur la card du projet, il faut suivre le format ci-dessus.

> secondsTags: ['EXEMPLE', 'EXEMPLE']

Ici c'est exactement la même chose que mainsTag, sauf qu'ici il s'agit des tags secondaires du projet.

> filter: 'ALL'

Ici il faut **_impérativement_** mettre comme dans l'exemple ci-dessus.

> imgAccueil: /assets/projects/exemple/exemple-accueil.png

Ici il faut mettre le chemin d'accès à l'image qui apparaîtra tout en haut de la page du projet.

> client: ['CLIENTS :', 'EXEMPLE', 'EXEMPLE','EXEMPLE',]

Ici il faut mettre la liste des clients du projets, en suivant le format ci-dessus, il faut également **_impérativement_** mettre CLIENTS au début de la liste.

> role: ['ROLE :', 'EXEMPLE', 'EXEMPLE','EXEMPLE',]

Ici il faut mettre la liste des rôles du projets, en suivant le format ci-dessus, il faut également **_impérativement_** mettre ROLE au début de la liste.

> credits: ['CREDITS :', 'EXEMPLE', 'EXEMPLE','EXEMPLE',]

Ici il faut mettre la liste des crédits du projets, en suivant le format ci-dessus, il faut également **_impérativement_** mettre CREDITS au début de la liste.

> description:

    [
      {
        title: `EXEMPLE`,
        desc: `lorem ipsum dolore`,
        side: 'left',
      },
      {
        title: `EXEMPLE`,
        desc: `lorem ipsum dolore`,
        side: 'right',
      },
      {
        title: `EXEMPLE`,
        desc: `lorem ipsum dolore`,
        side: 'left',
      },
    ]

Ici il s'agit de la liste des textes d'informations présent sur la page du projet, on peut en mettre autant que l'on souhaite, suffit de suivre l'exemple ci-desuss. `title` correspond au titre du paragraphe, `desc` correspond au texte, et `side` ne prend que `left` ou `right`, cela correspond à l'alignement du paragraphe dans la page.

> renduFinal: true

Ici on indique si l'on souhaite faire apparaître le bloc de rendu final qui permet de montrer une photo ou bien une vidéo, si l'on ne souhaite pas le faire apparaître on remplace `true` par `false`.

> typeRenduFinal: 'video'

Ici on indique le type du bloc rendu final, si l'on souhaite faire apparaître une photo alors on met `'img'` sinon si l'on souhaite faire apparaître une vidéo on met `'video'`.

---

Dans le cas où l'on souhaite faire apparaître une photo et que l'on a spécifier `typeRenduFinal: 'img'`, il faut que l'on ajoute deux lignes supplémentaires :

- `imagePathRenduFinal: '/assets/projects/exemple/exemple-renduFinal.png'`

Ici on met le chemin vers la photo que l'on souhaite faire apparaître.

- `hrefButtonRenduFinal: 'cuicuitedays.fr'`

Ici on met l'url du bouton qui permet de voir le projet.

---

Dans le cas où l'on souhaite faire apparaître une vidéo et que l'on a spécifier `typeRenduFinal: 'video'`, il faut que l'on ajoute une ligne supplémentaire :

- `videoPathRenduFinal: '/assets/projects/exemple/exemple-renduFinal.mp4'`

Ici on met le chemin vers la photo que l'on souhaite faire apparaître.

---

On continue avec la suite des informations à mettre.

> renduFinalArray: true

Ici on indique si l'on souhaite faire apparaître la galerie de photo, on met `true` si on veut l'afficher et `false` si on ne veut pas.

---

Dans le cas où l'on souhaite faire apparaître la galerie de photo, il faut rajouter une ligne supplémentaire :

> renduFinalArray :

    [
      [
        `/assets/projects/exemple/rendu-final10.png`,
      ],
      [
        `/assets/projects/exemple/rendu-final10.png`,
        `/assets/projects/exemple/rendu-final9.png`,
      ],
      [
        `/assets/projects/exemple/rendu-final8.png`,
        `/assets/projects/exemple/rendu-final7.png`,
        `/assets/projects/exemple/rendu-final6.png`,
      ],
    ]

Comme ci dessus, un `[]` correspond à une ligne dans la galerie, une ligne peut contenir une, deux ou trois photo maximum, il suffit de mettre trois chemins vers des photos pour faire apparaître trois photos, même chose pour en mettre deux ou une.

## Exemple type

Voici un exemple type de projet :

```
{
    id: 0,
    title: `EXEMPLE`,
    imgPath: '/assets/projects/exemple/exemple-vignette.png',
    mainsTag: ['EXEMPLE', 'EXEMPLE'],
    secondsTags: ['EXEMPLE', 'EXEMPLE'],
    filter: 'ALL',
    imgAccueil: '/assets/projects/exemple/exemple-accueil.png',
    client: [
      `CLIENTS :`,
      `EXEMPLE`,
      `EXEMPLE`,
      `EXEMPLE`,
    ],
    role: [
      `ROLE :`,
      `EXEMPLE`,
      `EXEMPLE`,
      `EXEMPLE`,
      `EXEMPLE`,
    ],
    credits: [`CREDITS :`, 'EXEMPLE', 'EXEMPLE'],
    description: [
      {
        title: `EXEMPLE`,
        desc: `Lorem ipsum dolore`,
        side: 'left',
      },
      {
        title: `EXEMPLE`,
        desc: `Lorem ipsum dolore`,
        side: 'right',
      },
      {
        title: `EXEMPLE`,
        desc: `Lorem ipsum dolore`,
        side: 'left',
      },
    ],
    renduFinal: true,
    videoPathRenduFinal: `/assets/projects/exemple/exemple-video.mp4`,
    typeRenduFinal: 'video',
    renduFinalArray: true,
    renduFinalContent: [
      [
        `/assets/projects/exemple/rendu-final10.png`,
        `/assets/projects/exemple/rendu-final9.png`,
      ],
      [
        `/assets/projects/exemple/rendu-final8.png`,
        `/assets/projects/exemple/rendu-final7.png`,
        `/assets/projects/exemple/rendu-final6.png`,
      ],
      [
        `/assets/projects/exemple/rendu-final5.png`,
        `/assets/projects/exemple/rendu-final4.png`,
      ],
      [
        `/assets/projects/exemple/rendu-final3.png`,
        `/assets/projects/exemple/rendu-final2.png`,
      ],
    ],
  }
```
