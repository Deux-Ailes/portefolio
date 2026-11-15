// All site copy, in French and English. Edit here to update the site.

export const links = {
  email: 'clerice.elliot@outlook.fr',
  linkedin: 'https://www.linkedin.com/in/elliot-clerice/',
  github: 'https://github.com/Deux-Ailes',
  cv: 'files/CV_Elliot_Clerice.pdf',
}

export const content = {
  fr: {
    nav: {
      expertise: 'Expertise',
      cases: 'Réalisations',
      experience: 'Parcours',
      education: 'Formation',
      contact: 'Me contacter',
      langLabel: 'Langue du site',
    },
    hero: {
      title: 'La cybersécurité, du besoin au code.',
      text: "Ingénieur cybersécurité et concepteur logiciel. Six ans d'expérience, aujourd'hui chef de projet IAM/PAM pour des grands comptes internationaux.",
      cv: 'Télécharger le CV',
      photoAlt: 'Portrait de Elliot Clerice',
    },
    proof: [
      { text: 'Plus de ' },
      { text: '6 clients grands comptes', strong: true },
      { text: ' déployés en contexte international, ' },
      { text: '100 % des licences', strong: true },
      { text: ' renouvelées, ' },
      { text: "14 % du chiffre d'affaires", strong: true },
      { text: " de l'éditeur." },
    ],
    expertise: {
      title: 'Trois métiers, un seul interlocuteur.',
      items: [
        {
          title: 'Cybersécurité',
          text: 'Déploiement et personnalisation de solutions IAM/PAM : interfaces de conformité DORA et NIS2, automatisations sur mesure, optimisation du cycle de vie des ressources.',
          stack: 'IAM, PAM, DORA, NIS2, CyberArk Defender',
        },
        {
          title: 'Conception logicielle',
          text: "Développement back-end Java, de la modélisation des données jusqu'à l'API.",
          stack: 'Java 8, 11 et 17, Spring Boot, Hibernate, PostgreSQL, API REST',
        },
        {
          title: 'Gestion de projet',
          text: 'Capture de besoins, gestion des risques, formation et coordination entre consultants, R&D et équipes métier.',
          stack: 'Grands comptes, POC, Formation, International',
        },
      ],
    },
    cases: {
      title: 'Réalisations',
      beforeLabel: 'Avant',
      afterLabel: 'Après',
      resultLabel: 'Résultat',
      roleLabel: 'Mon rôle',
      stackLabel: 'Outils',
      items: [
        {
          title: 'Des accès à privilèges accordés en 3 minutes au lieu de 24 heures',
          client: 'Opérateur télécom britannique',
          metric: { before: '24 h', after: '3 min', label: 'pour déléguer des droits sur un compte à privilèges' },
          paragraphs: [
            "Chaque demande d'accès à un compte PAM passait par un ticket Helix validé à la main : une personne vérifiait chaque règle, une par une, auprès de plusieurs sources.",
            "J'ai conçu un moteur de décision qui applique ces règles automatiquement et les expose à l'utilisateur, qui sait pourquoi un accès est accordé ou refusé. Il croise Helix, CyberArk et des référentiels externes, en ne récupérant les données qu'au moment où une décision en a besoin, ce qui évite les requêtes inutiles et la saturation des API.",
            "Les droits sont accordés en just-in-time. Les sessions CyberArk ouvertes sont surveillées et revalidées par le moteur, qui confirme leur légitimité auprès des sources externes.",
            'Décisions, validations et erreurs sont remontées via Logstash, et les gestionnaires PAM et Helix suivent les sessions en cours grâce à des indicateurs dédiés.',
          ],
          role: "Chef de projet. Conception du moteur de décision, de l'agrégation des données et des écrans de gouvernance.",
          stack: 'CyberArk, Helix, Logstash',
        },
        {
          title: 'Une gouvernance complète des comptes à privilèges, alignée sur NIS2',
          client: 'Assureur français',
          result: "Une visibilité complète, de bout en bout, sur chaque compte, pour prouver la conformité NIS2 en cas d'audit.",
          paragraphs: [
            'NIS2 impose de suivre de bout en bout les comptes à hauts privilèges. Or les référentiels se multipliaient : comptes coffrés dans CyberArk, bases de données, serveurs, cas particuliers.',
            "J'ai automatisé la récupération de ces référentiels et des comptes CyberArk, puis croisé l'ensemble des données pour les restituer dans quatre écrans que j'ai conçus.",
          ],
          pointsTitle: 'Quatre écrans de gouvernance',
          points: [
            'Comptes personnels',
            'Comptes de bases de données',
            'Évolution des taux de conformité par périmètre',
            'Configuration des seuils et des périmètres',
          ],
          role: "Chef de projet. Conception des interfaces, agrégation des données en SQL, API et récupération des référentiels.",
          stack: 'CyberArk, SQL, API',
        },
        {
          title: 'Refonte du module de gestion du temps et de la déclaration de présence',
          client: 'Kelio, éditeur de logiciels',
          result: 'Les actions les plus utilisées par les salariés et les exploitants en moins de 3 clics, et un calculateur plus performant.',
          paragraphs: [
            "L'interface de gestion du temps et de déclaration de présence avait vieilli : elle n'était plus en phase avec les standards de qualité ni avec les attentes en matière d'UX/UI. Le front et le back ont été entièrement revus.",
            "J'ai pris en charge tout le back-end lié à cette refonte, du bean à la fabrique Hibernate. Il est découpé en 4 services unitaires, 1 service applicatif et une dizaine d'objets Hibernate.",
            'Les tests sont devenus plus complets, avec du bout en bout et du mock, via JUnit 4 et Mockito.',
            "Des tests de performance sur plus de 50\u00a0000 salariés ont mené à une analyse des requêtes pour optimiser les temps de réponse.",
          ],
          role: "Développeur back-end au sein d'une équipe de 10 personnes.",
          stack: 'Java, Spring Boot, Hibernate, JUnit 4, Mockito',
        },
      ],
    },
    experience: {
      title: 'Parcours',
      jobs: [
        {
          period: 'Depuis juillet 2025',
          company: 'Ignimission',
          role: 'Chef de projet cybersécurité, consultant grands comptes',
          points: [
            "Coordination du déploiement du logiciel de l'éditeur chez plus de 6 clients grands comptes, avec 100 % de renouvellement des licences.",
            'Gestion de la phase de build sur trois environnements, de la capture du besoin à la réalisation de fonctions personnalisées : interfaces de conformité DORA/NIS2, automatisations IAM/PAM, optimisation du cycle de vie des ressources.',
            "Taux d'activité (TACE) supérieur à 95 % sur l'activité de consultant.",
            'Contribution à la R&D : documentation, outils internes pour accélérer les développements spécifiques, standardisation des échanges entre consultants et R&D.',
          ],
        },
        {
          period: 'Septembre 2023 - juillet 2025',
          company: 'Kelio',
          role: 'Concepteur développeur logiciel',
          points: [
            "Développement de nouvelles fonctionnalités de gestion du temps au sein d'une équipe de 10 personnes, en Java, Spring Boot et GWT.",
            'Refonte complète de la formation back-end destinée aux nouveaux arrivants.',
            "Rédaction de documentation interne pour accélérer l'adoption de composants logiciels.",
          ],
        },
      ],
    },
    highlights: {
      title: 'Également',
      items: [
        "Participation à des POC auprès de sociétés internationales, dont l'un a débouché sur un projet complet de 6 mois.",
        "Conception d'un outil de gestion administrative on-premise pour les accueils de loisirs (ALSH).",
      ],
    },
    education: {
      title: 'Formation',
      items: [
        {
          title: "Diplôme d'ingénieur généraliste en sciences de l'informatique",
          place: 'ESEO, Angers. En alternance.',
          period: '2020 - 2023',
        },
        {
          title: 'DUT Génie électrique et informatique industrielle',
          place: 'Angers',
          period: '2018 - 2020',
        },
      ],
      certsTitle: 'Certifications',
      certs: [
        { title: 'CyberArk Defender', period: '2025' },
        { title: 'TOEIC, 940 / 990', period: '2021' },
      ],
      langsTitle: 'Langues',
      langs: [
        { title: 'Français', level: 'Natif' },
        { title: 'Anglais', level: 'Bilingue' },
      ],
    },
    contact: {
      title: 'Un projet, un poste, une question ?',
    },
    footer: 'Trélazé, France',
  },

  en: {
    nav: {
      expertise: 'Expertise',
      cases: 'Case studies',
      experience: 'Experience',
      education: 'Education',
      contact: 'Contact me',
      langLabel: 'Site language',
    },
    hero: {
      title: 'Cybersecurity, from need to code.',
      text: 'Cybersecurity engineer and software designer. Six years of experience, now leading IAM/PAM projects for international key accounts.',
      cv: 'Download résumé',
      photoAlt: 'Portrait of Elliot Clerice',
    },
    proof: [
      { text: 'More than ' },
      { text: '6 key account clients', strong: true },
      { text: ' deployed in an international setting, ' },
      { text: '100% of licences', strong: true },
      { text: ' renewed, ' },
      { text: '14% of the vendor\u2019s revenue', strong: true },
      { text: '.' },
    ],
    expertise: {
      title: 'Three roles, one point of contact.',
      items: [
        {
          title: 'Cybersecurity',
          text: 'Deployment and customisation of IAM/PAM solutions: DORA and NIS2 compliance interfaces, tailored automations, resource lifecycle optimisation.',
          stack: 'IAM, PAM, DORA, NIS2, CyberArk Defender',
        },
        {
          title: 'Software design',
          text: 'Java back-end development, from data modelling to the API.',
          stack: 'Java 8, 11 and 17, Spring Boot, Hibernate, PostgreSQL, REST APIs',
        },
        {
          title: 'Project management',
          text: 'Requirements gathering, risk management, training and coordination between consultants, R&D and business teams.',
          stack: 'Key accounts, POC, Training, International',
        },
      ],
    },
    cases: {
      title: 'Case studies',
      beforeLabel: 'Before',
      afterLabel: 'After',
      resultLabel: 'Result',
      roleLabel: 'My role',
      stackLabel: 'Tools',
      items: [
        {
          title: 'Privileged access granted in 3 minutes instead of 24 hours',
          client: 'British telecom operator',
          metric: { before: '24 h', after: '3 min', label: 'to delegate rights on a privileged account' },
          paragraphs: [
            'Every request for access to a PAM account went through a Helix ticket validated by hand: someone checked each rule, one by one, against several sources.',
            'I designed a decision engine that applies those rules automatically and exposes them to the user, who knows why access is granted or denied. It combines Helix, CyberArk and external repositories, fetching data only when a decision needs it, which avoids unnecessary requests and API overload.',
            'Rights are granted just in time. Open CyberArk sessions are monitored and revalidated by the engine, which confirms their legitimacy against the external sources.',
            'Decisions, validations and errors are reported through Logstash, and PAM and Helix managers follow ongoing sessions through dedicated indicators.',
          ],
          role: 'Project manager. Designed the decision engine, the data aggregation and the governance screens.',
          stack: 'CyberArk, Helix, Logstash',
        },
        {
          title: 'End-to-end governance of privileged accounts, aligned with NIS2',
          client: 'French insurance group',
          result: 'Full end-to-end visibility on every account, to prove NIS2 compliance in the event of an audit.',
          paragraphs: [
            'NIS2 requires privileged accounts to be tracked end to end. Yet the repositories kept multiplying: accounts vaulted in CyberArk, databases, servers, special cases.',
            'I automated the retrieval of those repositories and of the CyberArk accounts, then cross-referenced all the data to present it in four screens that I designed.',
          ],
          pointsTitle: 'Four governance screens',
          points: [
            'Personal accounts',
            'Database accounts',
            'Compliance rate trends by scope',
            'Threshold and scope configuration',
          ],
          role: 'Project manager. Designed the interfaces, the SQL data aggregation, the APIs and the repository retrieval.',
          stack: 'CyberArk, SQL, API',
        },
        {
          title: 'Redesign of the time management and attendance declaration module',
          client: 'Kelio, software vendor',
          result: 'The actions employees and operators use most in fewer than 3 clicks, and a faster calculation engine.',
          paragraphs: [
            'The time management and attendance declaration interface had aged: it no longer met quality standards or UX/UI expectations. Both the front end and the back end were fully reworked.',
            'I handled the entire back end of this redesign, from the beans to the Hibernate factory. It is split into 4 unit services, 1 application service and about ten Hibernate objects.',
            'Testing became more thorough, with end-to-end tests and mocks, using JUnit 4 and Mockito.',
            'Performance tests on more than 50,000 employees led to query analysis to optimise response times.',
          ],
          role: 'Back-end developer within a team of 10.',
          stack: 'Java, Spring Boot, Hibernate, JUnit 4, Mockito',
        },
      ],
    },
    experience: {
      title: 'Experience',
      jobs: [
        {
          period: 'Since July 2025',
          company: 'Ignimission',
          role: 'Cybersecurity project manager, key account consultant',
          points: [
            "Coordinated the rollout of the vendor's software at more than 6 key account clients, with a 100% licence renewal rate.",
            'Ran the build phase across three environments, from requirements gathering to custom features: DORA/NIS2 compliance interfaces, IAM/PAM automations, resource lifecycle optimisation.',
            'Billable utilisation rate above 95% as a consultant.',
            'Contributed to R&D: documentation, internal tooling to speed up custom developments, standardised exchanges between consultants and R&D.',
          ],
        },
        {
          period: 'September 2023 - July 2025',
          company: 'Kelio',
          role: 'Software design engineer',
          points: [
            'Built new time management features within a team of 10, in Java, Spring Boot and GWT.',
            'Fully redesigned the back-end training programme for new hires.',
            'Wrote internal documentation to speed up the adoption of software components.',
          ],
        },
      ],
    },
    highlights: {
      title: 'Also',
      items: [
        'Took part in POCs with international companies, one of which led to a full 6-month project.',
        'Designed an on-premise administrative management tool for children’s leisure centres.',
      ],
    },
    education: {
      title: 'Education',
      items: [
        {
          title: 'Engineering degree in computer science',
          place: 'ESEO, Angers. Work-study programme.',
          period: '2020 - 2023',
        },
        {
          title: 'Two-year technical degree in electrical engineering and industrial computing',
          place: 'Angers',
          period: '2018 - 2020',
        },
      ],
      certsTitle: 'Certifications',
      certs: [
        { title: 'CyberArk Defender', period: '2025' },
        { title: 'TOEIC, 940 / 990', period: '2021' },
      ],
      langsTitle: 'Languages',
      langs: [
        { title: 'French', level: 'Native' },
        { title: 'English', level: 'Bilingual' },
      ],
    },
    contact: {
      title: 'A project, a role, a question?',
    },
    footer: 'Trélazé, France',
  },
}
