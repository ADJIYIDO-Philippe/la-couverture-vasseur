import Image from "next/image";
import styles from "./page.module.css";

/* =====================================================
   METADATA — title, description, canonical, Open Graph
   Remplace le domaine par le vrai domaine Vercel/Netlify
   une fois déployé.
====================================================== */
export const metadata = {
  title: "Couvreur Angers 49 — Toiture Ardoise Maine-et-Loire | Couverture Vasseur",
  description:
    "Couvreur artisan à Angers, spécialiste de l'ardoise naturelle depuis 12 ans. Réfection, réparation et zinguerie. RGE Qualibat, décennale AXA. Devis gratuit sous 48h au 02 41 87 34 12.",
  alternates: {
    canonical: "https://www.couverture-vasseur.fr",
  },
  openGraph: {
    title: "Couvreur Angers 49 — Toiture Ardoise | Couverture Vasseur",
    description:
      "Couvreur artisan à Angers, spécialiste de l'ardoise naturelle. RGE Qualibat, décennale AXA, devis gratuit sous 48h.",
    url: "https://www.couverture-vasseur.fr",
    siteName: "Couverture Vasseur",
    locale: "fr_FR",
    type: "website",
  },
};

const services = [
  {
    number: "01",
    title: "Réfection de toiture",
    text: "Réfection complète ou partielle de toitures en ardoise, avec une attention particulière portée à l'étanchéité, aux finitions et au respect du bâti angevin.",
    image: "/images/toiture-angers.WEBP",
  },
  {
    number: "02",
    title: "Réparation & recherche de fuite",
    text: "Une infiltration, une ardoise déplacée ou un défaut d'étanchéité ? Nous identifions l'origine du problème avant d'intervenir.",
    image: "/images/imag2.jpeg",
  },
  {
    number: "03",
    title: "Couverture ardoise",
    text: "L'ardoise naturelle est au cœur de notre savoir-faire. Pose, remplacement et rénovation dans le respect des techniques traditionnelles.",
    image: "/images/couvertureardoise.JPEG",
  },
  {
    number: "04",
    title: "Zinguerie",
    text: "Gouttières, chéneaux, descentes, noues et raccords : des ouvrages de zinguerie conçus pour accompagner durablement votre couverture.",
    image: "/images/zinguerie.WEBP",
  },
  {
    number: "05",
    title: "Démoussage & entretien",
    text: "Nettoyage, traitement et contrôle de la couverture pour ralentir son vieillissement et préserver son étanchéité.",
    image: "/images/toiture-angers.jpg",
  },
  {
    number: "06",
    title: "Fenêtres de toit",
    text: "Pose et remplacement de fenêtres de toit pour apporter lumière et confort aux combles tout en conservant une intégration soignée.",
    image: "/images/couverture-ardoise.jpg",
  },
  {
    number: "07",
    title: "Isolation des combles",
    text: "Une toiture performante passe aussi par une isolation adaptée. Nous vous accompagnons dans vos projets d'amélioration du confort.",
    image: "/images/artisan-couvreur.JFIF",
  },
];

const projects = [
  {
    location: "ANGERS · 2026",
    title: "Réfection d'une couverture en ardoise",
    text: "Dépose de l'ancienne couverture, contrôle du support, remplacement des éléments défectueux et pose d'une nouvelle couverture.",
    image: "/images/realisation-angers.jpg",
    alt: "Réfection d'une toiture en ardoise à Angers",
  },
  {
    location: "TRÉLAZÉ · 2026",
    title: "Reprise de zinguerie",
    text: "Réfection des évacuations d'eau et traitement des points sensibles pour améliorer durablement l'étanchéité.",
    image: "/images/realisation-trelaze.jpg",
    alt: "Travaux de zinguerie à Trélazé",
  },
  {
    location: "AVRILLÉ · 2026",
    title: "Réparation après infiltration",
    text: "Recherche de fuite et réparation ciblée de la couverture afin de sécuriser durablement la toiture.",
    image: "/images/realisation-avrille.jpg",
    alt: "Réparation de toiture après infiltration à Avrillé",
  },
];

const locations = [
  "Angers",
  "Avrillé",
  "Beaucouzé",
  "Les Ponts-de-Cé",
  "Trélazé",
  "Saint-Barthélemy-d'Anjou",
  "Écouflant",
];

const faq = [
  {
    question: "Quel est le délai pour obtenir un devis ?",
    answer:
      "Après votre première demande, nous échangeons avec vous afin de comprendre votre projet. Une visite de la toiture permet ensuite d'établir une proposition adaptée, transmise sous 48 h.",
  },
  {
    question: "Intervenez-vous pour une fuite de toiture ?",
    answer:
      "Oui. Nous intervenons pour rechercher l'origine d'une infiltration et réaliser les réparations nécessaires afin de sécuriser la couverture, 7 jours sur 7 en cas d'urgence.",
  },
  {
    question: "Travaillez-vous uniquement sur les toitures en ardoise ?",
    answer:
      "L'ardoise naturelle constitue une spécialité de Couverture Vasseur. Nous réalisons également des travaux de réparation, de zinguerie, d'entretien et d'amélioration de toiture, y compris en zinc et en tuile.",
  },
  {
    question: "Comment savoir s'il faut réparer ou refaire une toiture ?",
    answer:
      "Une inspection permet d'évaluer l'état général de la couverture, des crochets, du support, du liteaunage, des raccords et des points singuliers. Nous déterminons ensuite si une réparation ciblée suffit ou si une réfection est préférable.",
  },
  {
    question: "Le devis est-il gratuit ?",
    answer:
      "Oui. La première étude de votre projet est réalisée sans engagement et le devis vous est adressé sous 48 h. Il détaille les travaux proposés et les solutions retenues.",
  },
  {
    question: "Dans quelles communes intervenez-vous ?",
    answer:
      "Nous intervenons à Angers et dans un rayon d'environ 30 km, notamment à Avrillé, Beaucouzé, Les Ponts-de-Cé, Trélazé, Saint-Barthélemy-d'Anjou et Écouflant.",
  },
  {
    question: "Quel est le prix d'une réfection de toiture ?",
    answer:
      "Le prix dépend notamment de la surface, de l'accessibilité, de l'état du support, du matériau, de la zinguerie et de la complexité du bâtiment. Un devis après visite permet d'obtenir une estimation réellement adaptée.",
  },
  {
    question: "Que faire en cas de fuite pendant un épisode de pluie ?",
    answer:
      "Contactez-nous rapidement. Une première sécurisation peut être nécessaire avant la recherche précise de l'origine de l'infiltration et la réparation de la couverture.",
  },
];

export default function Home() {
  /* =====================================================
     JSON-LD — RoofingContractor + FAQPage
     À dupliquer/adapter si les pages prestation et ville
     doivent aussi porter leur propre schema.
  ====================================================== */
  const businessJsonLd = {
    "@context": "https://schema.org",
    "@type": "RoofingContractor",
    name: "Couverture Vasseur",
    image: "https://www.couverture-vasseur.fr/images/logo-vasseur.png",
    url: "https://www.couverture-vasseur.fr",
    telephone: "+33241873412",
    priceRange: "€€",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Angers",
      addressRegion: "Maine-et-Loire",
      postalCode: "49000",
      addressCountry: "FR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 47.4784,
      longitude: -0.5632,
    },
    areaServed: locations,
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
      ],
      opens: "08:00",
      closes: "18:00",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "47",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Prestations de couverture",
      itemListElement: services.map((service) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service.title,
          description: service.text,
        },
      })),
    },
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <main className={styles.page}>

      {/* JSON-LD structuré, injecté côté serveur */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(businessJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* =====================================================
          HEADER
          Le bouton mobile est un <label> lié à une checkbox
          cachée : le menu reste utilisable sans JavaScript et
          la nav reste dans le HTML servi (donc indexable).
          CSS à ajouter — voir note en fin de réponse.
      ====================================================== */}
      <header className={styles.header}>
        <div className={styles.container}>

          <a href="#top" className={styles.logo}>
            <Image
              src="/images/logo-vasseur.png"
              alt="Couverture Vasseur"
              width={120}
              height={77}
              priority
            />
          </a>

          <input
            type="checkbox"
            id="nav-toggle"
            className={styles.navToggleInput}
          />

          <nav
            className={styles.nav}
            aria-label="Navigation principale"
            id="site-nav"
          >
            <a href="#expertise">Expertise</a>
            <a href="#services">Prestations</a>
            <a href="#realisations">Réalisations</a>
            <a href="#entreprise">L&apos;entreprise</a>
            <a href="#contact">Contact</a>
          </nav>

          <a
            href="tel:0241873412"
            className={styles.phone}
          >
            <span>02 41 87 34 12</span>
            <small>Appeler maintenant</small>
          </a>

          <label
            htmlFor="nav-toggle"
            className={styles.menuButton}
            aria-label="Ouvrir le menu"
            aria-controls="site-nav"
          >
            ☰
          </label>

        </div>
      </header>

      <div id="top"></div>


      {/* =====================================================
          HERO
      ====================================================== */}
      <section className={styles.hero}>

        {/* IMAGE DE FOND */}
        <div className={styles.heroImage}>
          <Image
            src="/images/hero.jpg"
            alt="Toiture en ardoise à Angers"
            fill
            priority
            sizes="100vw"
          />
        </div>

        {/* VOILE SOMBRE */}
        <div className={styles.heroOverlay}></div>

        {/* CONTENU */}
        <div className={styles.container}>

          <div className={styles.heroContent}>

            <span className={styles.eyebrow}>
              COUVREUR À ANGERS · MAINE-ET-LOIRE
            </span>

            <h1>
              Couvreur à Angers,
              <br />
              <em>spécialiste de l&apos;ardoise naturelle.</em>
            </h1>

            <p className={styles.heroText}>
              Réfection, réparation et entretien de toiture à Angers et dans
              les communes voisines. Un savoir-faire artisanal au service de
              toitures conçues pour durer.
            </p>

            {/* BLOC DEVIS — texte explicite, pas seulement un lien */}
            <div className={styles.devisBadge}>
              <strong>Devis gratuit sous 48 h</strong>
              <span>Étude sans engagement, réponse rapide</span>
            </div>

            {/* BOUTONS */}
            <div className={styles.heroButtons}>

              <a
                href="#contact"
                className={styles.primaryButton}
              >
                Demander un devis
                <span>→</span>
              </a>

              <a
                href="#services"
                className={styles.secondaryButton}
              >
                Découvrir nos prestations
              </a>

            </div>

            {/* STATISTIQUES */}
            <div className={styles.heroStats}>

              <div className={styles.stat}>
                <strong>12</strong>
                <span>ans d&apos;expérience</span>
              </div>

              <div className={styles.stat}>
                <strong>4,9/5</strong>
                <span>47 avis Google</span>
              </div>

              <div className={styles.stat}>
                <strong>30 km</strong>
                <span>autour d&apos;Angers</span>
              </div>

            </div>

          </div>
        </div>

        {/* INDICATEUR DE SCROLL */}
        <a
          href="#expertise"
          className={styles.heroScroll}
          aria-label="Découvrir la suite"
        >
          <span></span>
          DÉCOUVRIR
        </a>

      </section>


      {/* =====================================================
          TRUST BAR
      ====================================================== */}
      <section className={styles.trustBar}>

        <div className={styles.container}>

          <div className={styles.trustItem}>
            <span>01</span>

            <div>
              <strong>RGE Qualibat</strong>
              <small>Qualification professionnelle</small>
            </div>
          </div>

          <div className={styles.trustItem}>
            <span>02</span>

            <div>
              <strong>Décennale AXA</strong>
              <small>Travaux couverts</small>
            </div>
          </div>

          <div className={styles.trustItem}>
            <span>03</span>

            <div>
              <strong>47 avis Google</strong>
              <small>4,9 / 5 de satisfaction</small>
            </div>
          </div>

          <div className={styles.trustItem}>
            <span>04</span>

            <div>
              <strong>Devis gratuit sous 48 h</strong>
              <small>Étude de votre projet</small>
            </div>
          </div>

        </div>

      </section>


      {/* =====================================================
          EXPERTISE
      ====================================================== */}
      <section
        className={styles.section}
        id="expertise"
      >
        <div className={styles.container}>

          <span className={styles.sectionLabel}>
            01 — NOTRE EXPERTISE
          </span>

          <div className={styles.sectionHeader}>

            <div>
              <h2>
                Une toiture angevine mérite un{" "}
                <em>savoir-faire local.</em>
              </h2>
            </div>

            <div className={styles.sectionHeaderText}>

              <p>
                À Angers, l&apos;ardoise fait partie du paysage. Des maisons
                anciennes du centre-ville aux habitations des communes
                voisines, chaque toiture possède ses propres contraintes.
              </p>

              <p>
                Notre approche repose sur une idée simple : observer,
                diagnostiquer et proposer la solution réellement nécessaire.
              </p>

            </div>

          </div>


          <div className={styles.expertiseGrid}>

            <div className={styles.expertiseImage}>

              <Image
                src="/images/expertise.JPEG"
                alt="Couverture en ardoise traditionnelle à Angers"
                fill
                sizes="(max-width: 900px) 100vw, 55vw"
              />

              <div className={styles.imageCaption}>
                <span>MATIÈRE</span>
                <strong>ARDOISE</strong>
                <small>
                  Une signature architecturale de l&apos;Anjou
                </small>
              </div>

            </div>


            <div className={styles.expertiseContent}>

              <span className={styles.smallLabel}>
                L&apos;EXPERTISE VASSEUR
              </span>

              <h3>
                Comprendre une toiture avant
                <br />
                de la transformer.
              </h3>

              <p>
                Une réfection de toiture ne consiste pas simplement à
                remplacer des ardoises. L&apos;état du support, les crochets,
                le liteaunage, les raccords en zinc, les noues et les points
                singuliers doivent être examinés.
              </p>

              <p>
                Cette connaissance du bâti permet de distinguer une réparation
                ciblée d&apos;une réfection complète et d&apos;éviter des
                travaux inutiles.
              </p>

              <h3>Ardoise, zinc ou tuile : un choix qui dépend du bâti</h3>

              <p>
                En Anjou, l&apos;ardoise naturelle domine sur les toitures à
                forte pente du centre ancien et s&apos;impose souvent en
                secteur sauvegardé, sous contrainte des Bâtiments de France.
                Le zinc intervient sur les points singuliers — noues,
                arêtiers, habillages — quand la tuile reste réservée aux
                extensions plus récentes ou aux pentes plus faibles. Nous
                vous orientons vers le matériau réellement adapté à votre
                maison, pas vers celui qui arrange le chantier.
              </p>

              <ul className={styles.checkList}>
                <li>Diagnostic précis de la couverture</li>
                <li>Respect du bâti existant</li>
                <li>Finitions de zinguerie soignées</li>
                <li>Solutions adaptées à chaque toiture</li>
              </ul>

              <a
                href="#contact"
                className={styles.textLink}
              >
                Parler de votre toiture →
              </a>

            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          SERVICES
      ====================================================== */}
      <section
        className={`${styles.section} ${styles.servicesSection}`}
        id="services"
      >
        <div className={styles.container}>

          <span className={styles.sectionLabel}>
            02 — NOS PRESTATIONS
          </span>

          <div className={styles.sectionHeader}>

            <div>
              <h2>
                Du diagnostic à la{" "}
                <em>dernière finition.</em>
              </h2>
            </div>

            <p>
              Couverture, réparation, zinguerie ou entretien : nous intervenons
              sur les éléments qui assurent la protection et la longévité de
              votre maison.
            </p>

          </div>


          <div className={styles.servicesGrid}>

            {services.map((service) => (

              <article
                className={styles.serviceCard}
                key={service.number}
              >

                <div className={styles.serviceImage}>
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 700px) 100vw, 33vw"
                  />
                </div>

                <div className={styles.serviceContent}>

                  <div className={styles.serviceTop}>
                    <span>{service.number}</span>
                    <span>↗</span>
                  </div>

                  <h3>{service.title}</h3>

                  <p>{service.text}</p>

                </div>

              </article>

            ))}

          </div>

        </div>
      </section>


      {/* =====================================================
          REALISATIONS
      ====================================================== */}
      <section
        className={styles.section}
        id="realisations"
      >
        <div className={styles.container}>

          <span className={styles.sectionLabel}>
            03 — RÉALISATIONS
          </span>

          <div className={styles.sectionHeader}>

            <div>
              <h2>
                Des chantiers qui parlent{" "}
                <em>d&apos;eux-mêmes.</em>
              </h2>
            </div>

            <p>
              Chaque chantier est différent. Nous mettons en avant le
              contexte, le problème rencontré et la solution apportée.
            </p>

          </div>


          <div className={styles.projectsGrid}>

            {projects.map((project, index) => (

              <article
                className={`${styles.projectCard} ${
                  index === 0 ? styles.projectFeatured : ""
                }`}
                key={project.title}
              >

                <div className={styles.projectImage}>

                  <Image
                    src={project.image}
                    alt={project.alt}
                    fill
                    sizes={
                      index === 0
                        ? "(max-width: 800px) 100vw, 60vw"
                        : "(max-width: 800px) 100vw, 40vw"
                    }
                  />

                  <span className={styles.projectTag}>
                    {project.location}
                  </span>

                </div>

                <div className={styles.projectInfo}>

                  <span>{project.location}</span>

                  <h3>{project.title}</h3>

                  <p>{project.text}</p>

                </div>

              </article>

            ))}

          </div>

        </div>
      </section>


      {/* =====================================================
          ENTREPRISE
      ====================================================== */}
      <section
        className={styles.aboutSection}
        id="entreprise"
      >
        <div className={styles.container}>

          <div className={styles.aboutImage}>

            <Image
              src="/images/equipe.jpg"
              alt="Artisan couvreur au travail"
              fill
              sizes="(max-width: 900px) 100vw, 50vw"
            />

            <div className={styles.aboutImageOverlay}>
              <strong>12</strong>
              <span>ANNÉES DE MÉTIER</span>
            </div>

          </div>


          <div className={styles.aboutContent}>

            <span className={styles.sectionLabel}>
              04 — L&apos;ENTREPRISE
            </span>

            <h2>
              Derrière chaque toiture,
              <br />
              il y a <em>un artisan.</em>
            </h2>

            <p className={styles.aboutLead}>
              Julien Vasseur travaille avec trois compagnons et accompagne
              depuis 12 ans les propriétaires dans leurs projets de toiture à
              Angers et dans le Maine-et-Loire.
            </p>

            <p>
              Notre métier demande de la précision, de l&apos;expérience et
              une vraie connaissance du bâti. Nous privilégions les échanges
              directs, les explications claires et les travaux réalisés avec
              soin.
            </p>


            <div className={styles.aboutStats}>

              <div>
                <strong>12</strong>
                <span>ans de métier</span>
              </div>

              <div>
                <strong>3</strong>
                <span>compagnons</span>
              </div>

              <div>
                <strong>4,9</strong>
                <span>note Google</span>
              </div>

            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          MÉTHODE
      ====================================================== */}
      <section className={styles.section}>

        <div className={styles.container}>

          <span className={styles.sectionLabel}>
            05 — NOTRE MÉTHODE
          </span>

          <div className={styles.sectionHeader}>

            <div>
              <h2>
                Un chantier clair,
                <br />
                <em>du premier appel à la réception.</em>
              </h2>
            </div>

            <p>
              Chaque étape est expliquée pour que vous sachiez précisément
              comment votre projet va avancer.
            </p>

          </div>


          <div className={styles.processGrid}>

            <div className={styles.processItem}>
              <span>01</span>
              <h3>Vous nous contactez</h3>
              <p>
                Téléphone ou formulaire : nous échangeons sur votre problème
                ou votre projet.
              </p>
            </div>

            <div className={styles.processItem}>
              <span>02</span>
              <h3>Nous examinons la toiture</h3>
              <p>
                Une visite permet d&apos;identifier les travaux réellement
                nécessaires.
              </p>
            </div>

            <div className={styles.processItem}>
              <span>03</span>
              <h3>Vous recevez le devis</h3>
              <p>
                Les travaux proposés sont détaillés, sous 48 h, afin que vous
                sachiez précisément ce qui sera réalisé.
              </p>
            </div>

            <div className={styles.processItem}>
              <span>04</span>
              <h3>Nous réalisons les travaux</h3>
              <p>
                Notre équipe intervient avec une attention particulière aux
                finitions et à la propreté du chantier.
              </p>
            </div>

            <div className={styles.processItem}>
              <span>05</span>
              <h3>Nous réceptionnons ensemble</h3>
              <p>
                Un dernier passage pour vérifier la conformité des travaux
                et répondre à vos questions.
              </p>
            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          BUDGET
      ====================================================== */}
      <section className={styles.priceSection}>

        <div className={styles.container}>

          <div className={styles.priceBox}>

            <div>
              <span className={styles.sectionLabel}>
                06 — BUDGET
              </span>

              <h2>
                Combien coûte une{" "}
                <em>toiture ?</em>
              </h2>
            </div>


            <div>

              <p>
                Il n&apos;existe pas de prix unique pour une toiture. La
                surface, l&apos;accessibilité, l&apos;état du support, le
                matériau choisi, les éléments de zinguerie et la complexité
                du bâtiment influencent directement le montant du chantier.
              </p>

              <p>
                C&apos;est pourquoi nous privilégions un devis détaillé après
                examen de la toiture plutôt qu&apos;une estimation
                approximative.
              </p>

              <a
                href="#contact"
                className={styles.primaryButton}
              >
                Obtenir mon devis
                <span>→</span>
              </a>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          GARANTIES
      ====================================================== */}
      <section className={styles.section}>

        <div className={styles.container}>

          <span className={styles.sectionLabel}>
            07 — GARANTIES
          </span>

          <div className={styles.sectionHeader}>

            <div>
              <h2>
                Des engagements{" "}
                <em>concrets.</em>
              </h2>
            </div>

          </div>


          <div className={styles.guaranteesGrid}>

            <div>
              <span>01</span>
              <h3>Garantie décennale</h3>
              <p>
                Vos travaux bénéficient d&apos;une couverture décennale
                adaptée aux interventions réalisées.
              </p>
            </div>

            <div>
              <span>02</span>
              <h3>Devis détaillé sous 48 h</h3>
              <p>
                Les travaux proposés sont expliqués avant toute intervention.
              </p>
            </div>

            <div>
              <span>03</span>
              <h3>Intervention d&apos;urgence 7 j / 7</h3>
              <p>
                En cas de fuite, nous pouvons intervenir pour sécuriser la
                situation et identifier le problème.
              </p>
            </div>

            <div>
              <span>04</span>
              <h3>Travail artisanal</h3>
              <p>
                Une équipe à taille humaine pour conserver un suivi direct de
                votre chantier.
              </p>
            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          ZONE LOCALE
      ====================================================== */}
      <section
        className={styles.localSection}
        id="zone"
      >
        <div className={styles.container}>

          <div className={styles.localContent}>

            <span className={styles.sectionLabel}>
              08 — ZONE D&apos;INTERVENTION
            </span>

            <h2>
              Couvreur à Angers
              <br />
              et <em>30 km autour.</em>
            </h2>

            <p>
              Nous intervenons à Angers et dans les communes voisines pour les
              travaux de couverture, rénovation, réparation, zinguerie et
              entretien de toiture.
            </p>

          </div>


          <div className={styles.locationList}>

            {locations.map((location, index) => (

              <div key={location}>
                <span>
                  {String(index + 1).padStart(2, "0")}
                </span>

                <strong>{location}</strong>
              </div>

            ))}

          </div>

        </div>
      </section>


      {/* =====================================================
          FAQ
          Questions passées en H3 (balisage requis) + JSON-LD
          FAQPage injecté plus haut dans le composant.
      ====================================================== */}
      <section
        className={styles.section}
        id="faq"
      >
        <div className={styles.container}>

          <div className={styles.faqLayout}>

            <div className={styles.faqIntro}>

              <span className={styles.sectionLabel}>
                09 — FAQ
              </span>

              <h2>
                Vos questions,
                <br />
                nos <em>réponses.</em>
              </h2>

              <p>
                Une question sur une fuite, une rénovation ou le déroulement
                d&apos;un chantier ? Retrouvez ici les réponses aux questions
                les plus fréquentes.
              </p>

            </div>


            <div className={styles.faqList}>

              {faq.map((item) => (

                <details key={item.question}>

                  <summary>
                    <h3>{item.question}</h3>
                    <b aria-hidden="true">+</b>
                  </summary>

                  <p>{item.answer}</p>

                </details>

              ))}

            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          CONTACT
      ====================================================== */}
      <section
        className={styles.contactSection}
        id="contact"
      >
        <div className={styles.container}>

          <div className={styles.contactIntro}>

            <span className={styles.sectionLabel}>
              10 — VOTRE PROJET
            </span>

            <h2>
              Votre toiture mérite
              <br />
              <em>un vrai diagnostic.</em>
            </h2>

            <p>
              Parlez-nous de votre projet. Réfection, fuite, zinguerie,
              entretien ou simple besoin de conseil : nous vous répondons
              avec une solution adaptée.
            </p>

            {/* BLOC DEVIS — répété en bas de page, comme en haut */}
            <div className={styles.devisBadge}>
              <strong>Devis gratuit sous 48 h</strong>
              <span>Sans engagement</span>
            </div>

            <a
              href="tel:0241873412"
              className={styles.contactPhone}
            >
              02 41 87 34 12
            </a>

            <span className={styles.contactNote}>
              Disponible pour vos demandes de couverture à Angers et autour.
            </span>

          </div>


          <form
            className={styles.contactForm}
            action="#"
            method="post"
          >

            <div className={styles.formRow}>

              <label>
                Nom

                <input
                  type="text"
                  name="name"
                  placeholder="Votre nom"
                  required
                />
              </label>

              <label>
                Téléphone

                <input
                  type="tel"
                  name="phone"
                  placeholder="Votre numéro"
                  required
                />
              </label>

            </div>


            <label>
              Email

              <input
                type="email"
                name="email"
                placeholder="vous@exemple.fr"
                required
              />
            </label>


            <label>
              Votre projet

              <select
                name="project"
                defaultValue=""
                required
              >
                <option value="" disabled>
                  Sélectionnez une prestation
                </option>

                <option>Réfection de toiture</option>
                <option>Réparation / fuite</option>
                <option>Couverture ardoise</option>
                <option>Zinguerie</option>
                <option>Démoussage / entretien</option>
                <option>Fenêtre de toit</option>
                <option>Isolation des combles</option>
              </select>
            </label>


            <label>
              Décrivez votre besoin

              <textarea
                name="message"
                rows="6"
                placeholder="Parlez-nous de votre toiture ou de votre projet..."
                required
              ></textarea>
            </label>


            <button
              type="submit"
              className={styles.primaryButton}
            >
              Demander mon devis
              <span>→</span>
            </button>

            <small>
              Votre demande est sans engagement. Les informations transmises
              servent uniquement à vous recontacter au sujet de votre projet.
            </small>

          </form>

        </div>
      </section>


      {/* =====================================================
          FOOTER
      ====================================================== */}
      <footer className={styles.footer}>

        <div className={styles.container}>

          <div className={styles.footerTop}>

            <div className={styles.footerBrand}>

              <a
                href="#top"
                className={styles.footerLogo}
              >
                <Image
                  src="/images/logo-vasseur.png"
                  alt="Couverture Vasseur"
                  width={130}
                  height={84}
                />
              </a>

              <p>
                Artisan couvreur à Angers,
                <br />
                spécialiste de l&apos;ardoise.
              </p>

            </div>


            <div className={styles.footerColumn}>

              <span>PRESTATIONS</span>

              <a href="#services">
                Réfection toiture
              </a>

              <a href="#services">
                Réparation & fuite
              </a>

              <a href="#services">
                Couverture ardoise
              </a>

              <a href="#services">
                Zinguerie
              </a>

            </div>


            <div className={styles.footerColumn}>

              <span>ZONE</span>

              {locations.slice(0, 5).map((location) => (
                <a
                  href="#zone"
                  key={location}
                >
                  {location}
                </a>
              ))}

            </div>


            <div className={styles.footerColumn}>

              <span>CONTACT</span>

              <a href="tel:0241873412">
                02 41 87 34 12
              </a>

              <a href="#contact">
                Demander un devis
              </a>

              <a href="#faq">
                Questions fréquentes
              </a>

            </div>

          </div>


          <div className={styles.footerBottom}>

            <span>
              © 2026 Couverture Vasseur
            </span>

            <span>
              Angers · Maine-et-Loire (49)
            </span>

            <span>
              Mentions légales · Politique de confidentialité
            </span>

          </div>

        </div>

      </footer>

    </main>
  );
}