export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  category: string;
  imageUrl: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'comment-choisir-son-masque',
    title: 'Comment bien choisir son masque selon la situation ?',
    excerpt: 'FFP2, chirurgical, en tissu... Découvrez notre guide complet pour faire le bon choix en fonction de vos besoins et de votre environnement.',
    content: `
      <h2>Les différents types de masques</h2>
      <p>Avec l'évolution constante des normes sanitaires, il peut être difficile de savoir quel masque porter. Le masque chirurgical de Type IIR offre une excellente protection contre les projections et est idéal pour les lieux publics modérément fréquentés. Il est léger, confortable et assure une filtration bactérienne supérieure à 98%.</p>
      
      <h2>Quand privilégier le masque FFP2 ?</h2>
      <p>Le masque FFP2 est recommandé dans les environnements clos, denses ou à haut risque. Contrairement au masque chirurgical qui protège principalement les autres, le FFP2 protège également le porteur en filtrant au moins 94% des aérosols. Son ajustement hermétique au visage est la clé de son efficacité.</p>
      
      <h2>L'importance du confort</h2>
      <p>Un masque très filtrant mais inconfortable risque d'être manipulé souvent ou retiré prématurément, annulant ainsi son efficacité. Privilégiez des masques doux pour la peau avec des élastiques confortables, comme ceux proposés par HantaProtect.</p>
    `,
    date: '2026-05-12',
    category: 'Guide Pratique',
    imageUrl: '/blog/choisir-masque.png'
  },
  {
    slug: 'nouvelles-normes-2026',
    title: 'Les nouvelles normes européennes pour les masques médicaux',
    excerpt: 'Tout ce que vous devez savoir sur la réglementation EN 14683:2019+AC:2019 et ce que cela change pour votre protection quotidienne.',
    content: `
      <h2>Comprendre la norme EN 14683:2019+AC:2019</h2>
      <p>Cette norme définit les exigences de conception, de performance et les méthodes d'essai pour les masques à usage médical. Elle garantit que le masque limite la transmission des agents infectieux des professionnels de la santé vers les patients et inversement.</p>
      
      <h2>Qu'est-ce que le Type IIR ?</h2>
      <p>Les masques se divisent en plusieurs catégories : Type I, Type II et Type IIR. Le "R" signifie que le masque résiste aux projections (Splash Resistance). C'est le plus haut niveau de protection pour un masque chirurgical, et c'est le standard que nous appliquons chez HantaProtect.</p>
      
      <h2>Comment vérifier la conformité ?</h2>
      <p>Recherchez toujours le marquage CE sur l'emballage et assurez-vous que la mention de la norme y figure. Un masque non certifié peut donner une fausse impression de sécurité tout en offrant une filtration quasi nulle.</p>
    `,
    date: '2026-04-28',
    category: 'Actualités',
    imageUrl: '/blog/normes-ce.png'
  },
  {
    slug: 'duree-vie-masque-ffp2',
    title: 'Quelle est la véritable durée de vie d\'un masque FFP2 ?',
    excerpt: 'Au-delà des 8 heures recommandées, quels sont les signes qui montrent que votre masque FFP2 n\'est plus efficace ?',
    content: `
      <h2>La règle des 8 heures</h2>
      <p>Les autorités sanitaires s'accordent pour dire qu'un masque FFP2 peut être porté jusqu'à 8 heures d'affilée. Cependant, cette durée est maximale et peut varier selon les conditions d'utilisation.</p>
      
      <h2>Quand faut-il changer son masque ?</h2>
      <p>Vous devez immédiatement remplacer votre masque FFP2 si :</p>
      <ul>
        <li>Il est devenu humide suite à la respiration ou la transpiration.</li>
        <li>Il est visiblement souillé, taché ou endommagé.</li>
        <li>Il ne s'ajuste plus parfaitement à votre visage (élastiques détendus).</li>
        <li>Vous ressentez une résistance respiratoire accrue.</li>
      </ul>
      
      <h2>Peut-on réutiliser un masque FFP2 ?</h2>
      <p>Les masques FFP2 vendus par HantaProtect sont à usage unique (marquage "NR" pour Non Réutilisable). Bien qu'il existe des méthodes de décontamination étudiées en milieu hospitalier lors de pénuries, elles ne sont pas recommandées pour le grand public.</p>
    `,
    date: '2026-03-15',
    category: 'Conseils Santé',
    imageUrl: '/blog/ffp2-detail.png'
  },
  {
    slug: 'masque-ffp2-vs-chirurgical',
    title: 'FFP2 vs Masque Chirurgical : Quelle est la réelle différence ?',
    excerpt: 'Comparaison technique approfondie entre les masques chirurgicaux de Type IIR et les masques FFP2 pour vous aider à choisir la meilleure protection.',
    content: `
      <h2>Deux approches de protection différentes</h2>
      <p>Le masque chirurgical est conçu pour empêcher les gouttelettes émises par le porteur de contaminer l'entourage. Le masque FFP2, quant à lui, est un appareil de protection respiratoire qui filtre l'air inhalé par le porteur.</p>
      
      <h2>Efficacité de filtration</h2>
      <p>Alors que le masque Type IIR excelle dans la filtration bactérienne (>98%), le masque FFP2 offre une protection supérieure contre les particules fines et les aérosols (>94% de filtration des particules de 0,3 micron). Pour une protection maximale contre les virus aériens, le FFP2 est le choix supérieur.</p>
      
      <h2>Étanchéité et ajustement</h2>
      <p>L'avantage majeur du FFP2 réside dans sa forme qui épouse les contours du visage, limitant les fuites d'air non filtré sur les côtés, contrairement au masque chirurgical qui reste plus lâche.</p>
    `,
    date: '2026-05-20',
    category: 'Guide Pratique',
    imageUrl: '/blog/ffp2-vs-chirurgical.png'
  },
  {
    slug: 'protection-enfants-masques',
    title: 'Comment protéger efficacement vos enfants avec des masques adaptés',
    excerpt: 'Le guide complet pour choisir et faire porter un masque à vos enfants tout en assurant leur confort et leur sécurité.',
    content: `
      <h2>Un masque à la bonne taille</h2>
      <p>L'erreur la plus fréquente est de faire porter un masque adulte à un enfant. Les fuites d'air sur les côtés rendent la protection quasi nulle. Il est crucial de choisir des modèles spécifiquement conçus pour les visages plus petits.</p>
      
      <h2>Éduquer par le jeu</h2>
      <p>Expliquez à vos enfants l'importance du masque avec des mots simples. Montrez l'exemple et transformez le port du masque en un geste positif pour protéger les grands-parents et les amis.</p>
      
      <h2>Le confort pour une meilleure acceptation</h2>
      <p>Privilégiez les masques avec des barrettes nasales ajustables et des élastiques doux qui ne tirent pas sur les oreilles. Un enfant qui se sent à l'aise oubliera plus facilement qu'il porte un masque.</p>
    `,
    date: '2026-05-25',
    category: 'Conseils Santé',
    imageUrl: '/blog/enfant-protection.png'
  },
  {
    slug: 'achat-masques-gros-entreprises',
    title: 'Guide pour l\'achat de masques en gros : Conseils pour les entreprises',
    excerpt: 'Optimisez vos coûts et assurez la sécurité de vos employés avec nos conseils pour les achats en volume de matériel de protection.',
    content: `
      <h2>Anticiper les besoins de vos collaborateurs</h2>
      <p>Une gestion saine des stocks est primordiale. Calculez votre consommation mensuelle en tenant compte du renouvellement nécessaire des masques (toutes les 4h pour le chirurgical, 8h pour le FFP2) afin d'éviter les ruptures de stock critiques.</p>
      
      <h2>Vérifier les certifications en volume</h2>
      <p>Lors d'achats en gros, exigez les rapports de tests et les certificats de conformité CE. Ne faites aucun compromis sur la sécurité de vos équipes. Chez HantaProtect, nous fournissons toute la documentation nécessaire pour chaque lot.</p>
      
      <h2>Les avantages fiscaux et logistiques</h2>
      <p>Les achats en gros permettent non seulement de réduire le coût unitaire mais aussi de simplifier la logistique de réception. Contactez notre service B2B pour obtenir un devis personnalisé adapté à la taille de votre entreprise.</p>
    `,
    date: '2026-05-30',
    category: 'B2B',
    imageUrl: '/blog/stock-entreprises.png'
  }
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find(post => post.slug === slug);
}
