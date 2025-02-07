// creating an array and passing the number, questions, options, and answers
let questions = [
    {
    numb: 1,
    question: "A combien est estimé le coût de la cybercriminalité pour l’économie mondiale  ? ",
    answer: "1 000 milliards de dollars",
    textereponse: "Selon une étude réalisée par McAfee, basée sur les chiffres de 2019, la cybercriminalité dans son ensemble coûte plus de 1 000 milliards de dollars par an à l’économie mondiale, soit 50 % de plus qu’en 2018.",
    options: [
      "100 milliards de dollars",
      "1 000 milliards de mille sabords",
      "1 000 milliards de dollars",
      "10 000 milliards de dollars",
    ]
  },
    {
    numb: 2,
    question: "En France, par combien a été multiplié le nombre de cyberattaques en 2020 ?",
    answer: "Par 4",
    textereponse: "L’année 2020 n’a pas seulement été marquée par la crise sanitaire mais aussi par une augmentation massive des cyberattaques qui ont été multipliées par 4 d’après l’Autorité Nationale de la Sécurité des Systèmes d’Information (ANSSI).",
    options: [
      "Par 2",
      "Par 3",
      "Par 4",
      "Par Toutatis !"
    ]
  },
    {
    numb: 3,
    question: "Dans quelle proportion le facteur humain est-il impliqué dans les cyberincidents ?",
    answer: "90 %",
    textereponse: "Selon une étude d'IBM, l'erreur humaine est impliquée dans plus de 90 % des incidents de sécurité que ce soit par négligence, par ignorance ou par malveillance (clic sur un email frauduleux, consultation d'un site web suspect, activation d’un virus, etc.).",
    options: [
      "Quoi ?! Le facteur est déjà passé ?",
      "30 %",
      "60 %",
      "90 %"
    ]
  },
    {
    numb: 4,
    question: "Quelles sont les bonnes pratiques à respecter pour un mot de passe sécurisé ?",
    answer: "Toutes ces propositions",
    textereponse: "Un mot de passe doit toujours rester confidentiel. Jamais aucune entreprise ou administration n’est censée vous le demander, que ce soit par téléphone ou par email. Autrement, il peut s’agir d’une tentative d’arnaque par hameçonnage.",
    options: [
      "Utiliser un mot de passe différent pour chaque accès",
      "Choisir un mot de passe long et complexe avec différents types de caractères",
      "Changer régulièrement de mot de passe, surtout en cas de doute",
      "Toutes ces propositions"
    ]
  },
    {
    numb: 5,
    question: "Comment faire pour gérer de manière sécurisée tous vos mots de passe ?",
    answer: "Utiliser un gestionnaire de mots de passe",
    textereponse: "Qui n’a jamais douté ou oublié un de ses mots de passe ? Ne commettez pas cette erreur fréquente de les inscrire sur un Post-it à la vue de tous. Privilégiez plutôt un gestionnaire de mots de passe pour les avoir toujours à portée, de manière sécurisée.",
    options: [
      "Les noter dans un fichier Excel",
      "Pas besoin c’est toujours le même",
      "Utiliser un gestionnaire de mots de passe",
      "Les noter sur un Post-it collé à l’écran du PC"
    ]
  },

  {
  numb: 6,
  question: "Qu’est-ce que l’hameçonnage, aussi appelé phishing ?",
  answer: "Une pratique d’emailing malveillante pour obtenir vos données personnelles",
  textereponse: "L’hameçonnage consiste à envoyer des emails frauduleux en se faisant passer pour un tiers de confiance afin d’obtenir un mot de passe ou des coordonnées bancaires. Cette technique est utilisée par nos <a href='https://www.on-x.com/pentest' target='_blank'>hackers éthiques</a> (Pentesters) pour mesurer votre niveau de sécurité.",
  options: [
    "Une technique de pêche suédoise",
    "Une pratique d’emailing malveillante pour obtenir vos données personnelles",
    "Un logiciel de cybersécurité pour lister les vulnérabilités",
    "Un type de cyberattaque qui prend en otage vos données "
  ]
  },
  
  {
    numb: 7,
    question: "Qu’est-ce qu’un rançongiciel, aussi appelé ransomware ?",
    answer: "Un logiciel malveillant vous empêchant d’accéder à vos données afin de vous extorquer de l’argent",
    textereponse: "Un rançongiciel est un logiciel malveillant qui chiffre l’ensemble des données d’une victime et lui demande une rançon en échange du mot de passe de déchiffrement. Nos <a href='https://www.on-x.com/pentest' target='_blank'>experts en sécurité</a> sont en mesure de vous préparer à cette cybermenace et à y faire face.",
    options: [
      "Un jeu de simulation de kidnapping",
      "Une application mobile de paiement collaboratif",
      "Une technique de prise d’otage souvent utilisée dans NCIS",
      "Un logiciel malveillant vous empêchant d’accéder à vos données afin de vous extorquer de l’argent"
    ]
    },

    {
      numb: 8,
      question: "Quelles sont les sanctions maximales en cas de non-respect du RGPD ?",
      answer: "20 millions d’euros ou 4 % du chiffre d’affaires",
      textereponse: "En France, les sanctions liées au RGPD sont délivrées par l’autorité de contrôle compétente qu’est la CNIL. En fonction du manquement constaté, les amendes administratives peuvent s’élever jusqu’à 20 millions d’euros ou 4 % du chiffre d’affaires.",
      options: [
        "20 millions d’euros ou 4 % du chiffre d’affaires",
        "Aucune idée car mon entreprise est bien évidemment conforme",
        "10 000 euros par violation",
        "Aucun risque car de toute manière il n’y a pas de contrôle"
      ]
      },

      {
        numb: 9,
        question: "Quelles sont les obligations imposées par le RGPD ?",
        answer: "Toutes ces propositions",
        textereponse: "Le RGPD a pour vocation de garantir la protection des données personnelles détenues par toutes organisations. Mais son périmètre ne s’arrête pas là, les données confiées à des sous-traitants sont toujours sous votre responsabilité. Pour en savoir plus découvrez notre newsletter <a href='https://www.on-x.com/dpo-les-bons-tuyaux/' target='_blank'> DPO Les Bons Tuyaux.</a>",
        options: [
          "Protéger les données des clients et prospects",
          "Recueillir le consentement des internautes pour le dépôt des cookies",
          "Contrôler la conformité des sous-traitants",
          "Toutes ces propositions"
        ]
        },

        {
          numb: 10,
          question: "Qu’est-ce qu’un MDR ?",
          answer: "Un service managé de détection et de réponse aux cybermenaces avancées",
          textereponse: "Le MDR (Managed Detection & Response) est une <a href='https://www.on-x.com/mdr' target='_blank'>solution managée</a> par nos équipes cyber pour protéger en temps réel vos terminaux et systèmes d’information des menaces avancées. Elle dispose de fonctionnalités de détection, d’investigation et de remédiation.",
          options: [
            "Un petit comique",
            "Un service managé de détection et de réponse aux cybermenaces avancées",
            "Une méthode de piratage indétectable par vos antivirus",
            "La réponse D"
          ]
          },
];