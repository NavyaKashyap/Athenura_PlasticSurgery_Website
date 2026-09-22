/* =========================================================
   ATHENURA CLINIC — SERVICES PAGE JAVASCRIPT
   Vanilla JS, Editorial Services Panel, Detail Modal, Finder
   ========================================================= */

(function () {
  'use strict';

  var root = document.getElementById('services-page') || document.body;
  if (!root) return;

  /* ---------------------------------------------------------
     SERVICE DATA — Grouped by category, in display order.
     Single source of truth for the carousel, modal and finder.
  --------------------------------------------------------- */

  var SERVICES = {
    rhinoplasty: {
      name: 'Rhinoplasty',
      category: 'face',
      type: 'surgical',
      goals: ['refine', 'restore'],
      image: 'images/services/rhinoplasty-reference.png',
      meta: 'Face & Facial • Surgical',

      desc: 'Rhinoplasty is a cosmetic and functional procedure designed to reshape the nose and improve its proportion with the rest of the face. It can address concerns such as the size, shape, bridge, tip, or overall symmetry of the nose.',

      addresses: [
        'Nose reshaping and refinement',
        'Correction of nasal asymmetry',
        'Improvement of facial balance',
        'Can help improve nasal breathing'
      ],

      overview: 'Rhinoplasty is a cosmetic and functional procedure designed to reshape the nose and improve its proportion with the rest of the face.',
      whoFor: 'Those seeking a nose shape that feels more in harmony with their features, or improved breathing function.',
      benefits: [
        'Nose reshaping and refinement',
        'Correction of nasal asymmetry',
        'Improvement of facial balance',
        'Can help improve nasal breathing'
      ],
      recovery: 'Initial swelling and bruising typically ease within 1–2 weeks, with final results refining over several months.'
    },

    facelift: {
      name: 'Facelift',
      category: 'face',
      type: 'surgical',
      goals: ['restore', 'rejuvenate'],
      image: 'images/services/facelift.png',
      meta: 'Face & Facial • Surgical',

      desc: 'A facelift is designed to address visible signs of facial aging by tightening and repositioning underlying tissues and removing excess skin. It helps restore smoother contours while maintaining a natural-looking appearance.',

      addresses: [
        'Tightens loose facial skin',
        'Reduces sagging and wrinkles',
        'Enhances facial contours',
        'Creates a refreshed, youthful appearance'
      ],

      overview: 'A facelift is designed to address visible signs of facial aging by tightening and repositioning underlying tissues and removing excess skin.',
      whoFor: 'Those noticing sagging skin, jowls or a loss of definition along the jawline and neck.',
      benefits: [
        'Tightens loose facial skin',
        'Reduces sagging and wrinkles',
        'Enhances facial contours',
        'Creates a refreshed, youthful appearance'
      ],
      recovery: 'Most visible swelling and bruising subside within 2–3 weeks; full recovery continues over several months.'
    },

    eyelid: {
      name: 'Eyelid Surgery',
      category: 'face',
      type: 'surgical',
      goals: ['refine', 'rejuvenate'],
      image: 'images/services/eyelid.png',
      meta: 'Face & Facial • Surgical',

      desc: 'Eyelid surgery enhances the appearance of the eyes by addressing excess skin, puffiness, and unwanted tissue around the upper or lower eyelids. The procedure can create a brighter and more rested appearance.',

      addresses: [
        'Upper eyelid surgery',
        'Lower eyelid surgery',
        'Reduction of excess skin and puffiness',
        'More youthful-looking eyes'
      ],

      overview: 'Eyelid surgery enhances the appearance of the eyes by addressing excess skin, puffiness, and unwanted tissue around the upper or lower eyelids.',
      whoFor: 'Those with heaviness, hooding or under-eye puffiness that makes the eyes look tired.',
      benefits: [
        'Upper eyelid surgery',
        'Lower eyelid surgery',
        'Reduction of excess skin and puffiness',
        'More youthful-looking eyes'
      ],
      recovery: 'Swelling and bruising generally improve within 1–2 weeks.'
    },

    'brow-lift': {
      name: 'Browlift',
      category: 'face',
      type: 'surgical',
      goals: ['refine', 'rejuvenate'],
      image: 'images/services/brow-lift.png',
      meta: 'Face & Facial • Surgical',

      desc: 'A browlift helps create a more youthful and refreshed appearance by lifting drooping eyebrows and smoothing the forehead area. It can reduce the appearance of forehead wrinkles and improve the overall appearance around the eyes.',

      addresses: [
        'Lifts drooping eyebrows',
        'Reduces forehead wrinkles',
        'Improves upper-face appearance',
        'Creates a more refreshed look'
      ],

      overview: 'A browlift helps create a more youthful and refreshed appearance by lifting drooping eyebrows and smoothing the forehead area.',
      whoFor: 'Those with a heavy, low or furrowed brow that adds an appearance of tiredness or frustration.',
      benefits: [
        'Lifts drooping eyebrows',
        'Reduces forehead wrinkles',
        'Improves upper-face appearance',
        'Creates a more refreshed look'
      ],
      recovery: 'Swelling typically improves within 1–2 weeks, with final results settling over 2–3 months.'
    },

    'neck-lift': {
      name: 'Neck Lift',
      category: 'face',
      type: 'surgical',
      goals: ['restore', 'refine'],
      image: 'images/services/neck-lift.png',
      meta: 'Face & Facial • Surgical',

      desc: 'A neck lift helps improve loose or sagging skin around the neck and jawline. By tightening the skin and underlying tissues, the procedure can create a smoother neck contour and a more defined jawline.',

      addresses: [
        'Tightens loose neck skin',
        'Improves jawline definition',
        'Reduces the appearance of neck bands',
        'Creates a smoother neck contour'
      ],

      overview: 'A neck lift helps improve loose or sagging skin around the neck and jawline by tightening the skin and underlying tissues.',
      whoFor: 'Those with sagging neck skin, a "turkey neck" appearance, or vertical muscle banding.',
      benefits: [
        'Tightens loose neck skin',
        'Improves jawline definition',
        'Reduces the appearance of neck bands',
        'Creates a smoother neck contour'
      ],
      recovery: 'Initial swelling settles within 2–3 weeks, with continued refinement over several months.'
    },

    otoplasty: {
      name: 'Otoplasty',
      category: 'face',
      type: 'surgical',
      goals: ['refine'],
      image: 'images/services/otoplasty.png',
      meta: 'Face & Facial • Surgical',

      desc: 'Otoplasty is a cosmetic procedure that reshapes, repositions, or reduces the size of the ears to create better balance with the face. It can address prominent or asymmetrical ears while aiming for a natural-looking result.',

      addresses: [
        'Reshapes prominent ears',
        'Improves ear symmetry',
        'Repositions ears closer to the head',
        'Creates better facial proportion'
      ],

      overview: 'Otoplasty is a cosmetic procedure that reshapes, repositions, or reduces the size of the ears to create better balance with the face.',
      whoFor: 'Those self-conscious about prominent, asymmetric or misshapen ears.',
      benefits: [
        'Reshapes prominent ears',
        'Improves ear symmetry',
        'Repositions ears closer to the head',
        'Creates better facial proportion'
      ],
      recovery: 'Most swelling resolves within 1–2 weeks; a protective headband is typically worn briefly after surgery.'
    },

    'fat-transfer-face': {
      name: 'Fat Transfer To Face',
      category: 'face',
      type: 'surgical',
      goals: ['restore', 'refine'],
      image: 'images/services/fat-transfer-face.png',
      meta: 'Face & Facial • Surgical',

      desc: 'Fat transfer to the face uses the patient\'s own carefully processed fat to restore lost volume and enhance facial contours. It can be used in areas such as the cheeks, temples, lips, or other areas requiring subtle volume enhancement.',

      addresses: [
        'Restores lost facial volume',
        'Enhances cheeks and facial contours',
        'Uses the patient\'s own fat',
        'Provides natural-looking rejuvenation'
      ],

      overview: 'Fat transfer to the face uses the patient\'s own carefully processed fat to restore lost volume and enhance facial contours.',
      whoFor: 'Those seeking a fuller, more youthful facial contour using their own tissue rather than synthetic fillers.',
      benefits: [
        'Restores lost facial volume',
        'Enhances cheeks and facial contours',
        'Uses the patient\'s own fat',
        'Provides natural-looking rejuvenation'
      ],
      recovery: 'Swelling and mild bruising typically ease within 1–2 weeks, with final results settling over a few months.'
    },

    'chin-jawline': {
      name: 'Chin & Jawline Surgery',
      category: 'face',
      type: 'surgical',
      goals: ['contour', 'refine'],
      image: 'images/services/chin-jawline.png',
      meta: 'Face & Facial • Surgical',
      desc: 'Mentoplasty and jawline sculpting to strengthen facial profile definition and lower-face symmetry.',
      addresses: [
        'A weak or recessed chin',
        'An undefined jawline',
        'Facial profile imbalance'
      ],
      overview: 'Chin and jawline procedures reshape or augment the lower face to improve overall facial balance and profile.',
      whoFor: 'Those seeking a stronger, more defined chin or jawline in proportion with the rest of the face.',
      benefits: [
        'Enhanced profile and facial balance',
        'Can be combined with neck contouring',
        'Tailored to your bone structure'
      ],
      recovery: 'Swelling typically improves over 2–3 weeks, with final contour visible after a few months.'
    },

    liposuction: {
      name: 'Liposuction',
      category: 'body',
      type: 'surgical',
      goals: ['contour', 'refine'],
      image: 'images/services/liposuction.png',
      meta: 'Body Contouring • Surgical',
      desc: 'Contour targeted areas by removing stubborn, diet-resistant fat deposits.',
      addresses: [
        'Stubborn, diet-resistant fat pockets',
        'Uneven body contour',
        'Localized fullness in specific areas'
      ],
      overview: 'Liposuction removes localized, diet- and exercise-resistant fat to improve body contour.',
      whoFor: 'Those at a stable weight looking to refine specific areas rather than achieve overall weight loss.',
      benefits: [
        'Targeted body contouring',
        'Minimally invasive technique options',
        'Can treat multiple areas in one visit'
      ],
      recovery: 'Compression garments are typically worn for a few weeks; most swelling resolves within 4–6 weeks.'
    },

    'tummy-tuck': {
      name: 'Tummy Tuck',
      category: 'body',
      type: 'surgical',
      goals: ['contour', 'restore'],
      image: 'images/services/tummy-tuck.png',
      meta: 'Body Contouring • Surgical',
      desc: 'Tighten abdominal muscles and skin for a firmer, smoother midsection.',
      addresses: [
        'Loose or excess abdominal skin',
        'Separated abdominal muscles (diastasis recti)',
        'Stubborn lower-abdomen fullness'
      ],
      overview: 'A tummy tuck (abdominoplasty) tightens abdominal muscles and removes excess skin for a firmer midsection.',
      whoFor: 'Those with abdominal laxity following pregnancy or significant weight change.',
      benefits: [
        'Firmer, flatter abdominal profile',
        'Can address muscle separation',
        'Often combined with liposuction'
      ],
      recovery: 'Initial recovery typically spans 2–3 weeks, with strenuous activity resuming after 4–6 weeks.'
    },

    'body-lift': {
      name: 'Body Lift',
      category: 'body',
      type: 'surgical',
      goals: ['contour', 'restore'],
      image: 'images/services/body-lift.png',
      meta: 'Body Contouring • Surgical',
      desc: 'Comprehensive lift removing excess skin around the abdomen, hips and thighs.',
      addresses: [
        'Excess skin after major weight loss',
        'Sagging across the abdomen, hips and thighs',
        'Loss of overall body contour'
      ],
      overview: 'A body lift addresses loose skin across multiple areas, often following significant weight loss.',
      whoFor: 'Those with excess, sagging skin after major weight loss who want a smoother overall contour.',
      benefits: [
        'Addresses multiple areas in one plan',
        'Improves overall body contour',
        'Can be staged for safety'
      ],
      recovery: 'Recovery is more involved than single-area procedures, typically several weeks with gradual return to activity.'
    },

    'arm-lift': {
      name: 'Arm Lift',
      category: 'body',
      type: 'surgical',
      goals: ['contour', 'refine'],
      image: 'images/services/arm-lift.png',
      meta: 'Body Contouring • Surgical',
      desc: 'Brachioplasty to tighten loose, sagging skin along the upper arms.',
      addresses: [
        'Loose, sagging upper-arm skin',
        'Arm skin laxity that doesn’t respond to exercise'
      ],
      overview: 'An arm lift (brachioplasty) removes excess skin and tightens tissue along the upper arm.',
      whoFor: 'Those with loose or sagging upper-arm skin that doesn’t respond to exercise.',
      benefits: [
        'Smoother, more toned arm contour',
        'Can be combined with liposuction',
        'Long-lasting results'
      ],
      recovery: 'Swelling and bruising typically ease within 2–3 weeks.'
    },

    'thigh-lift': {
      name: 'Thigh Lift',
      category: 'body',
      type: 'surgical',
      goals: ['contour', 'refine'],
      image: 'images/services/thigh-lift.png',
      meta: 'Body Contouring • Surgical',
      desc: 'Reshape the thighs by removing excess skin and tightening underlying tissue.',
      addresses: [
        'Loose or sagging thigh skin',
        'Inner or outer thigh contour irregularities'
      ],
      overview: 'A thigh lift removes excess skin and improves the contour of the inner or outer thigh.',
      whoFor: 'Those with loose thigh skin, often after weight loss, who want a smoother leg contour.',
      benefits: [
        'Improved thigh contour and shape',
        'Often paired with liposuction',
        'Long-lasting improvement'
      ],
      recovery: 'Initial recovery typically spans 2–3 weeks, with full activity resuming gradually.'
    },

    bbl: {
      name: 'Brazilian Butt Lift',
      category: 'body',
      type: 'surgical',
      goals: ['contour'],
      image: 'images/services/bbl.png',
      meta: 'Body Contouring • Surgical',
      desc: 'Fat transfer technique to enhance shape and volume of the buttocks.',
      addresses: [
        'Flat or under-projected buttock volume',
        'Asymmetry in buttock shape',
        'A desire for a more contoured silhouette using your own tissue'
      ],
      overview: 'A Brazilian Butt Lift uses your own fat, harvested via liposuction, to enhance buttock shape and volume.',
      whoFor: 'Those wanting a fuller, more contoured silhouette using their own tissue rather than an implant.',
      benefits: [
        'Dual benefit of contouring donor areas',
        'Natural-feeling results',
        'Personalised to your frame'
      ],
      recovery: 'Sitting is restricted for a period after surgery; most swelling resolves over several weeks.'
    },

    'breast-augmentation': {
      name: 'Breast Augmentation',
      category: 'breast',
      type: 'surgical',
      goals: ['restore', 'contour'],
      image: 'images/services/breast-augmentation.png',
      meta: 'Breast Surgery • Surgical',
      desc: 'Enhance breast size and shape with implants tailored to your frame.',
      addresses: [
        'Naturally smaller breast volume',
        'Volume loss after pregnancy or weight change',
        'Breast size or shape asymmetry'
      ],
      overview: 'Breast augmentation increases breast size and improves shape using implants suited to your anatomy and goals.',
      whoFor: 'Those looking to increase breast volume or restore fullness lost after pregnancy or weight change.',
      benefits: [
        'Wide range of implant options',
        'Personalised to your frame',
        'Can be combined with a lift'
      ],
      recovery: 'Most return to light activity within 1–2 weeks, with full recovery over several weeks.'
    },

    'breast-reduction': {
      name: 'Breast Reduction',
      category: 'breast',
      type: 'surgical',
      goals: ['restore', 'refine'],
      image: 'images/services/breast-reduction.png',
      meta: 'Breast Surgery • Surgical',
      desc: 'Reduce breast size and weight for improved comfort and proportion.',
      addresses: [
        'Back, neck or shoulder discomfort from breast size',
        'Disproportionate breast-to-body size',
        'Skin irritation beneath the breast crease'
      ],
      overview: 'Breast reduction removes excess breast tissue and skin to relieve physical discomfort and improve proportion.',
      whoFor: 'Those experiencing back, neck or shoulder discomfort related to breast size, or seeking better proportion.',
      benefits: [
        'Relief from physical discomfort',
        'Improved body proportion',
        'Can improve clothing fit'
      ],
      recovery: 'Most return to light activity within 1–2 weeks, with full recovery over several weeks.'
    },

    'breast-lift': {
      name: 'Breast Lift',
      category: 'breast',
      type: 'surgical',
      goals: ['restore', 'refine'],
      image: 'images/services/breast-lift.png',
      meta: 'Breast Surgery • Surgical',
      desc: 'Raise and reshape the breasts to address sagging and lost firmness.',
      addresses: [
        'Sagging or lower-positioned breasts',
        'Loss of breast firmness after pregnancy or breastfeeding',
        'A downward-pointing nipple position'
      ],
      overview: 'A breast lift (mastopexy) raises and reshapes the breasts by removing excess skin and repositioning tissue.',
      whoFor: 'Those with sagging or lower-positioned breasts, often after pregnancy, breastfeeding or weight change.',
      benefits: [
        'More youthful breast position',
        'Can be combined with augmentation',
        'Improved symmetry'
      ],
      recovery: 'Most return to light activity within 1–2 weeks, with full recovery over several weeks.'
    },

    'breast-reconstruction': {
      name: 'Breast Reconstruction',
      category: 'breast',
      type: 'surgical',
      goals: ['restore'],
      image: 'images/services/breast-reconstruction.png',
      meta: 'Breast Surgery • Surgical',
      desc: 'Rebuild breast shape and volume following mastectomy or injury.',
      addresses: [
        'Breast volume or shape loss after mastectomy',
        'Breast asymmetry following surgery or trauma',
        'Restoring a natural breast contour'
      ],
      overview: 'Breast reconstruction rebuilds breast shape and volume using implants or the body’s own tissue.',
      whoFor: 'Those who have undergone mastectomy or significant breast trauma and wish to restore breast form.',
      benefits: [
        'Personalised reconstruction plan',
        'Implant or tissue-based options',
        'Coordinated with your wider care team'
      ],
      recovery: 'Recovery varies by technique and is planned individually with your surgical team.'
    },

    gynecomastia: {
      name: 'Gynecomastia Surgery',
      category: 'breast',
      type: 'surgical',
      goals: ['contour', 'refine'],
      image: 'images/services/gynecomastia.png',
      meta: 'Breast Surgery • Surgical',
      desc: 'Reduce enlarged male breast tissue for a flatter, firmer chest contour.',
      addresses: [
        'Enlarged male breast tissue',
        'Chest puffiness that doesn’t respond to diet or exercise',
        'Loss of a flat, contoured chest profile'
      ],
      overview: 'Gynecomastia surgery removes excess glandular tissue and/or fat to create a flatter, more contoured chest.',
      whoFor: 'Men experiencing enlarged breast tissue that doesn’t respond to diet or exercise.',
      benefits: [
        'Flatter, firmer chest contour',
        'Can address tissue and excess skin',
        'Long-lasting results'
      ],
      recovery: 'Swelling and bruising typically ease within 2–3 weeks.'
    },

    botox: {
      name: 'Botox',
      category: 'non-surgical',
      type: 'non-surgical',
      goals: ['refine', 'rejuvenate'],
      image: 'images/services/botox.png',
      meta: 'Non-Surgical • Injectable',
      desc: 'Smooth fine lines and expression wrinkles with a quick, no-downtime visit.',
      addresses: [
        'Fine lines and expression wrinkles',
        'Forehead and frown lines',
        'Crow’s feet around the eyes'
      ],
      overview: 'Botox relaxes targeted facial muscles to smooth fine lines and expression wrinkles.',
      whoFor: 'Those wanting to soften early lines around the forehead, brow or eyes with no downtime.',
      benefits: [
        'Quick in-office treatment',
        'No downtime',
        'Results typically last 3–4 months'
      ],
      recovery: 'No downtime; normal activities can typically resume immediately.'
    },

    fillers: {
      name: 'Dermal Fillers',
      category: 'non-surgical',
      type: 'non-surgical',
      goals: ['restore', 'contour'],
      image: 'images/services/fillers.png',
      meta: 'Non-Surgical • Injectable',
      desc: 'Restore volume and softly enhance contours using targeted injectable treatments.',
      addresses: [
        'Volume loss in the cheeks or lips',
        'Under-eye hollowing',
        'Softened or less-defined facial contours'
      ],
      overview: 'Dermal fillers restore volume and softly enhance contours using targeted injectable treatments.',
      whoFor: 'Those looking to restore lost volume or enhance natural contours without surgery.',
      benefits: [
        'Immediate, visible results',
        'Minimal downtime',
        'Adjustable and often reversible'
      ],
      recovery: 'Mild swelling or bruising may occur and typically resolves within a few days.'
    },

    'chemical-peel': {
      name: 'Chemical Peel',
      category: 'non-surgical',
      type: 'non-surgical',
      goals: ['refine', 'rejuvenate'],
      image: 'images/services/chemical-peel.png',
      meta: 'Non-Surgical • Skin',
      desc: 'Resurface skin to improve tone, texture and clarity.',
      addresses: [
        'Uneven skin tone and texture',
        'Early sun damage',
        'Dullness and rough texture'
      ],
      overview: 'A chemical peel exfoliates the outer skin layers to improve tone, texture and overall clarity.',
      whoFor: 'Those wanting to address uneven tone, texture or early signs of sun damage.',
      benefits: [
        'Improved tone and texture',
        'Range of peel depths available',
        'Complements other skin treatments'
      ],
      recovery: 'Downtime varies by peel depth, from none to several days of visible peeling.'
    },

    'laser-skin': {
      name: 'Laser Skin Treatments',
      category: 'non-surgical',
      type: 'non-surgical',
      goals: ['rejuvenate', 'refine'],
      image: 'images/services/laser-skin.png',
      meta: 'Non-Surgical • Skin',
      desc: 'Targeted laser therapy to improve tone, texture and skin quality.',
      addresses: [
        'Pigmentation and sun spots',
        'Uneven skin texture',
        'Early signs of skin aging'
      ],
      overview: 'Laser skin treatments use targeted light energy to improve tone, texture and overall skin quality.',
      whoFor: 'Those wanting to address pigmentation, texture or early signs of aging.',
      benefits: [
        'Precise, targeted treatment',
        'Range of laser options available',
        'Little to no downtime for most treatments'
      ],
      recovery: 'Downtime varies by treatment intensity; most fit easily into a normal routine.'
    },

    'skin-rejuvenation': {
      name: 'Skin Rejuvenation',
      category: 'non-surgical',
      type: 'non-surgical',
      goals: ['rejuvenate'],
      image: 'images/services/skin-rejuvenation.png',
      meta: 'Non-Surgical • Skin',
      desc: 'Comprehensive treatments to refresh overall skin radiance and quality.',
      addresses: [
        'An overall loss of skin radiance',
        'Combination skin tone and texture concerns',
        'General signs of skin aging'
      ],
      overview: 'Skin rejuvenation combines complementary treatments to refresh overall radiance, tone and texture.',
      whoFor: 'Those wanting a general refresh in skin quality rather than a single targeted concern.',
      benefits: [
        'Customisable to your skin type',
        'Can combine multiple modalities',
        'Little to no downtime for most treatments'
      ],
      recovery: 'Downtime varies by the specific treatments chosen.'
    },

    'scar-treatment': {
      name: 'Scar Treatment',
      category: 'non-surgical',
      type: 'non-surgical',
      goals: ['refine'],
      image: 'images/services/scar-treatment.png',
      meta: 'Non-Surgical • Skin',
      desc: 'Reduce the visible appearance of surgical or acne scarring.',
      addresses: [
        'Visible surgical scarring',
        'Acne scarring',
        'Raised or discolored scar tissue'
      ],
      overview: 'Scar treatments aim to soften texture, color and visibility of surgical, acne or injury-related scarring.',
      whoFor: 'Those wanting to improve the appearance of existing scars.',
      benefits: [
        'Tailored to scar type and age',
        'Can be combined with other skin treatments',
        'Gradual, natural-looking improvement'
      ],
      recovery: 'Downtime varies by technique; most treatments involve minimal disruption to routine.'
    },

    prp: {
      name: 'PRP Treatment',
      category: 'non-surgical',
      type: 'non-surgical',
      goals: ['rejuvenate', 'restore'],
      image: 'images/services/prp.png',
      meta: 'Non-Surgical • Injectable',
      desc: 'Platelet-rich plasma therapy to support skin renewal and rejuvenation.',
      addresses: [
        'Reduced skin radiance and texture',
        'Fine lines from early skin aging',
        'Support for skin renewal after other treatments'
      ],
      overview: 'PRP treatment uses concentrated platelets from your own blood to support skin renewal and rejuvenation.',
      whoFor: 'Those wanting a natural, biologically-based approach to skin quality and rejuvenation.',
      benefits: [
        'Uses your own biological material',
        'Can be combined with microneedling',
        'Supports gradual, natural-looking improvement'
      ],
      recovery: 'Mild redness or swelling may occur and typically resolves within a day or two.'
    }
  };

  var CATEGORY_ORDER = {
    face: [
      'rhinoplasty',
      'facelift',
      'eyelid',
      'brow-lift',
      'neck-lift',
      'otoplasty',
      'chin-jawline',
      'fat-transfer-face'
    ],

    body: [
      'liposuction',
      'tummy-tuck',
      'body-lift',
      'arm-lift',
      'thigh-lift',
      'bbl'
    ],

    breast: [
      'breast-augmentation',
      'breast-reduction',
      'breast-lift',
      'breast-reconstruction',
      'gynecomastia'
    ],

    'non-surgical': [
      'botox',
      'fillers',
      'chemical-peel',
      'laser-skin',
      'skin-rejuvenation',
      'scar-treatment',
      'prp'
    ]
  };

  /* The 7 services shown in the redesigned Services panel */

  var PANEL_SERVICES = [
    'rhinoplasty',
    'brow-lift',
    'eyelid',
    'facelift',
    'fat-transfer-face',
    'neck-lift',
    'otoplasty'
  ];

  var CATEGORY_INFO = {
    face: {
      heading: 'Face & Facial Surgery',
      description:
        'Refined surgical procedures designed to enhance facial balance, proportion and natural expression.'
    },

    body: {
      heading: 'Body Contouring',
      description:
        'Sculpting and contouring procedures designed to refine body proportions and silhouette.'
    },

    breast: {
      heading: 'Breast Surgery',
      description:
        'Personalized surgical procedures designed around individual anatomy, proportions and treatment goals.'
    },

    'non-surgical': {
      heading: 'Non-Surgical Aesthetic Treatments',
      description:
        'Non-surgical aesthetic treatments commonly offered by plastic and aesthetic clinics to refine skin quality and facial features.'
    }
  };

  /* ---------------------------------------------------------
     SERVICES PANEL — Static editorial rows
  --------------------------------------------------------- */

  var panelGrid = document.getElementById('service-track');

  function buildRowMarkup(id, index) {
    var s = SERVICES[id];

    if (!s) return '';

    return (
      '<div class="service-row" data-id="' + id + '">' +

        '<div class="service-row__media">' +
          '<img src="' +
          s.image +
          '" alt="' +
          s.name +
          ' - Athenura Clinic" loading="lazy" />' +
        '</div>' +

        '<div class="service-row__content">' +

          '<span class="service-row__meta">' +
            s.meta +
          '</span>' +

          '<h3 class="service-row__name">' +
            s.name +
          '</h3>' +

          '<p class="service-row__desc">' +
            s.desc +
          '</p>' +

          /* KEY POINTS */
          '<ul class="service-row__points">' +
            (s.addresses || []).map(function (point) {
              return '<li>' + point + '</li>';
            }).join('') +
          '</ul>' +

        '</div>' +

      '</div>'
    );
  }

  if (panelGrid) {
    panelGrid.innerHTML = PANEL_SERVICES.map(buildRowMarkup).join('');
  }

  /* ---------------------------------------------------------
     SERVICE DETAIL MODAL
  --------------------------------------------------------- */

  var modalOverlay = document.getElementById('service-modal-overlay');
  var modalContent = document.getElementById('service-modal-content');
  var modalCloseBtn = document.getElementById('service-modal-close');
  var lastFocusedElement = null;

  function buildModalMarkup(service) {
    var benefitsList = service.benefits
      .map(function (b) {
        return '<li>' + b + '</li>';
      })
      .join('');

    var addressesList = (service.addresses || [])
      .map(function (a) {
        return '<li>' + a + '</li>';
      })
      .join('');

    return (
      '<div class="service-modal__image">' +
        '<img src="' +
        service.image +
        '" alt="' +
        service.name +
        ' - Athenura Clinic" />' +
      '</div>' +

      '<span class="service-modal__category">' +
        service.category.replace('-', ' ') +
      '</span>' +

      '<h3 class="service-modal__title" id="service-modal-title">' +
        service.name +
      '</h3>' +

      '<div class="service-modal__section">' +
        '<h4>Overview</h4>' +
        '<p>' +
        service.overview +
        '</p>' +
      '</div>' +

      '<div class="service-modal__section">' +
        '<h4>What It Addresses</h4>' +
        '<ul>' +
        addressesList +
        '</ul>' +
      '</div>' +

      '<div class="service-modal__section">' +
        '<h4>Who May Consider It</h4>' +
        '<p>' +
        service.whoFor +
        '</p>' +
      '</div>' +

      '<div class="service-modal__section">' +
        '<h4>Key Benefits</h4>' +
        '<ul>' +
        benefitsList +
        '</ul>' +
      '</div>' +

      '<div class="service-modal__section">' +
        '<h4>Treatment Type</h4>' +
        '<p>' +
        (service.type === 'surgical' ? 'Surgical' : 'Non-Surgical') +
        '</p>' +
      '</div>' +

      '<div class="service-modal__section">' +
        '<h4>Recovery</h4>' +
        '<p>' +
        service.recovery +
        '</p>' +
      '</div>' +

      '<div class="service-modal__section service-modal__providers">' +
        '<h4>Our Providers</h4>' +
        '<p class="service-modal__providers-names">' +
          'Dr. Durvi Patel &bull; Dr. Aaron Shapiro &bull; Medically Trained Athenura Clinical Staff' +
        '</p>' +
        '<p>' +
          'Dr. Durvi Patel, Dr. Aaron Shapiro, and our medically trained staff provide personalized cosmetic and aesthetic care with a focus on safety and natural-looking results.' +
        '</p>' +
      '</div>' +

      '<p class="service-modal__disclaimer">' +
        'Suitability for this treatment is determined through a professional consultation with a qualified surgeon.' +
      '</p>' +

      '<div class="service-modal__cta">' +
        '<a href="#take-next-step" class="btn btn-primary" data-modal-consult-btn>' +
          'Book a Consultation' +
        '</a>' +
        '<button type="button" class="btn btn-outline" data-modal-secondary-close>' +
          'Close' +
        '</button>' +
      '</div>'
    );
  }

  function openModal(serviceId) {
    var service = SERVICES[serviceId];

    if (!service || !modalOverlay || !modalContent) return;

    lastFocusedElement = document.activeElement;

    modalContent.innerHTML = buildModalMarkup(service);

    modalOverlay.classList.add('is-open');
    document.body.style.overflow = 'hidden';

    var modalBox = document.getElementById('service-modal-box');

    if (modalBox) {
      modalBox.scrollTop = 0;
    }

    var secondaryClose =
      modalContent.querySelector('[data-modal-secondary-close]');

    if (secondaryClose) {
      secondaryClose.addEventListener('click', closeModal);
    }

    var consultBtn =
      modalContent.querySelector('[data-modal-consult-btn]');

    if (consultBtn) {
      consultBtn.addEventListener('click', function (e) {
        e.preventDefault();
        closeModal();
        openBookingModal(serviceId);
      });
    }

    if (modalCloseBtn) {
      modalCloseBtn.focus();
    }
  }

  function closeModal() {
    if (!modalOverlay) return;

    modalOverlay.classList.remove('is-open');
    document.body.style.overflow = '';

    if (lastFocusedElement) {
      lastFocusedElement.focus();
    }
  }

  if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', closeModal);
  }

  if (modalOverlay) {
    modalOverlay.addEventListener('click', function (e) {
      if (e.target === modalOverlay) {
        closeModal();
      }
    });
  }

  document.addEventListener('keydown', function (e) {
    if (
      e.key === 'Escape' &&
      modalOverlay &&
      modalOverlay.classList.contains('is-open')
    ) {
      closeModal();
    }
  });

  /* ---------------------------------------------------------
     SMART SERVICE EXPLORER
  --------------------------------------------------------- */

  var explorerSelections = {
    area: null,
    type: null,
    goal: null
  };

  var explorerSteps = root.querySelectorAll('.explorer-step');
  var explorerDots = root.querySelectorAll('.explorer-steps__dot');
  var explorerLines = root.querySelectorAll('.explorer-steps__line');
  var explorerResults = document.getElementById('explorer-results');
  var explorerResultsGrid =
    document.getElementById('explorer-results-grid');
  var explorerRestartBtn =
    document.getElementById('explorer-restart');

  function showExplorerStep(stepNumber) {
    explorerSteps.forEach(function (stepEl) {
      stepEl.classList.toggle(
        'is-active',
        stepEl.getAttribute('data-step') === String(stepNumber)
      );
    });

    explorerDots.forEach(function (dot) {
      var dotStep =
        parseInt(dot.getAttribute('data-step'), 10);

      dot.classList.toggle(
        'is-active',
        dotStep === stepNumber
      );

      dot.classList.toggle(
        'is-done',
        dotStep < stepNumber
      );
    });

    explorerLines.forEach(function (line) {
      var lineStep =
        parseInt(line.getAttribute('data-line'), 10);

      line.classList.toggle(
        'is-done',
        lineStep < stepNumber
      );
    });

    if (explorerResults) {
      explorerResults.classList.remove('is-active');
    }
  }

  function scoreService(service) {
    var score = 0;

    if (explorerSelections.area) {
      if (
        explorerSelections.area === 'skin' &&
        service.category === 'non-surgical'
      ) {
        score += 2;
      } else if (
        service.category === explorerSelections.area
      ) {
        score += 2;
      }
    }

    if (
      explorerSelections.type &&
      explorerSelections.type !== 'not-sure' &&
      service.type === explorerSelections.type
    ) {
      score += 2;
    }

    if (
      explorerSelections.goal &&
      service.goals.indexOf(explorerSelections.goal) !== -1
    ) {
      score += 1;
    }

    return score;
  }

  function showExplorerResults() {
    explorerSteps.forEach(function (stepEl) {
      stepEl.classList.remove('is-active');
    });

    explorerDots.forEach(function (dot) {
      dot.classList.add('is-done');
      dot.classList.remove('is-active');
    });

    explorerLines.forEach(function (line) {
      line.classList.add('is-done');
    });

    var ranked = Object.keys(SERVICES)
      .map(function (id) {
        return {
          id: id,
          service: SERVICES[id],
          score: scoreService(SERVICES[id])
        };
      })
      .filter(function (entry) {
        return entry.score > 0;
      })
      .sort(function (a, b) {
        return b.score - a.score;
      });

    if (ranked.length === 0) {
      ranked = Object.keys(SERVICES)
        .slice(0, 4)
        .map(function (id) {
          return {
            id: id,
            service: SERVICES[id],
            score: 0
          };
        });
    }

    ranked = ranked.slice(0, 4);

    if (explorerResultsGrid) {
      explorerResultsGrid.innerHTML = ranked
        .map(function (entry) {
          return (
            '<li class="explorer-results__item" data-id="' +
            entry.id +
            '">' +

              '<img src="' +
              entry.service.image +
              '" alt="" />' +

              '<span>' +
              entry.service.name +
              '</span>' +

              '<button type="button" class="btn btn-outline" ' +
              'style="font-size:11px; padding:6px 12px; margin-top:4px;" ' +
              'data-result-id="' +
              entry.id +
              '">' +
              'View Details' +
              '</button>' +

            '</li>'
          );
        })
        .join('');

      explorerResultsGrid
        .querySelectorAll('[data-result-id]')
        .forEach(function (btn) {
          btn.addEventListener('click', function () {
            openModal(
              btn.getAttribute('data-result-id')
            );
          });
        });
    }

    if (explorerResults) {
      explorerResults.classList.add('is-active');
    }
  }

  root
    .querySelectorAll('.explorer-options__btn')
    .forEach(function (btn) {
      btn.addEventListener('click', function () {
        var key = btn.getAttribute('data-key');
        var value = btn.getAttribute('data-value');

        explorerSelections[key] = value;

        var group =
          btn.closest('.explorer-options');

        if (group) {
          group
            .querySelectorAll('.explorer-options__btn')
            .forEach(function (b) {
              b.setAttribute(
                'aria-pressed',
                'false'
              );
            });
        }

        btn.setAttribute(
          'aria-pressed',
          'true'
        );

        var currentStepEl =
          btn.closest('.explorer-step');

        var nextBtnEl =
          currentStepEl.querySelector(
            '.explorer-nav__next'
          );

        if (nextBtnEl) {
          nextBtnEl.disabled = false;
        }
      });
    });

  root
    .querySelectorAll('.explorer-nav__next')
    .forEach(function (btn) {
      btn.addEventListener('click', function () {
        var target =
          parseInt(
            btn.getAttribute('data-next'),
            10
          );

        if (target > 3) {
          showExplorerResults();
        } else {
          showExplorerStep(target);
        }
      });
    });

  root
    .querySelectorAll('.explorer-nav__back[data-back-to]')
    .forEach(function (btn) {
      btn.addEventListener('click', function () {
        showExplorerStep(
          parseInt(
            btn.getAttribute('data-back-to'),
            10
          )
        );
      });
    });

  if (explorerRestartBtn) {
    explorerRestartBtn.addEventListener(
      'click',
      function () {
        explorerSelections = {
          area: null,
          type: null,
          goal: null
        };

        root
          .querySelectorAll('.explorer-options__btn')
          .forEach(function (b) {
            b.setAttribute(
              'aria-pressed',
              'false'
            );
          });

        root
          .querySelectorAll('.explorer-nav__next')
          .forEach(function (b) {
            b.disabled = true;
          });

        showExplorerStep(1);
      }
    );
  }

  /* ---------------------------------------------------------
     BOOK CONSULTATION MODAL
  --------------------------------------------------------- */

  var bookingOverlay =
    document.getElementById('booking-modal-overlay');

  var bookingBox =
    document.getElementById('booking-modal-box');

  var bookingCloseBtn =
    document.getElementById('booking-modal-close');

  var bookingForm =
    document.getElementById('booking-form');

  var bookingServiceSelect =
    document.getElementById('booking-service');

  var bookingSuccess =
    document.getElementById('booking-form-success');

  var bookingSuccessCloseBtn =
    document.getElementById('booking-form-close-success');

  var bookingLastFocused = null;

  /* Populate booking dropdown */

  if (bookingServiceSelect) {
    var groupOrder = [
      {
        key: 'face',
        label: 'Face & Facial Surgery'
      },
      {
        key: 'body',
        label: 'Body Contouring'
      },
      {
        key: 'breast',
        label: 'Breast Surgery'
      },
      {
        key: 'non-surgical',
        label: 'Non-Surgical Aesthetic Treatments'
      }
    ];

    var optionsHtml =
      '<option value="" disabled selected>Choose a service</option>';

    groupOrder.forEach(function (group) {
      var ids =
        CATEGORY_ORDER[group.key] || [];

      var groupOptions = ids
        .map(function (id) {
          var s = SERVICES[id];

          return s
            ? '<option value="' +
                id +
                '">' +
                s.name +
                '</option>'
            : '';
        })
        .join('');

      if (groupOptions) {
        optionsHtml +=
          '<optgroup label="' +
          group.label +
          '">' +
          groupOptions +
          '</optgroup>';
      }
    });

    bookingServiceSelect.innerHTML =
      optionsHtml;
  }

  function resetBookingForm() {
    if (bookingForm) {
      bookingForm.reset();
      bookingForm.style.display = '';
    }

    if (bookingSuccess) {
      bookingSuccess.classList.remove(
        'is-active'
      );
    }
  }

  function openBookingModal(
    prefillServiceId
  ) {
    if (!bookingOverlay) return;

    bookingLastFocused =
      document.activeElement;

    resetBookingForm();

    if (
      prefillServiceId &&
      bookingServiceSelect &&
      SERVICES[prefillServiceId]
    ) {
      bookingServiceSelect.value =
        prefillServiceId;
    }

    bookingOverlay.classList.add(
      'is-open'
    );

    document.body.style.overflow =
      'hidden';

    if (bookingBox) {
      bookingBox.scrollTop = 0;
    }

    var firstField =
      document.getElementById(
        'booking-name'
      );

    if (firstField) {
      firstField.focus();
    }
  }

  function closeBookingModal() {
    if (!bookingOverlay) return;

    bookingOverlay.classList.remove(
      'is-open'
    );

    document.body.style.overflow =
      '';

    if (bookingLastFocused) {
      bookingLastFocused.focus();
    }
  }

  if (bookingCloseBtn) {
    bookingCloseBtn.addEventListener(
      'click',
      closeBookingModal
    );
  }

  if (bookingOverlay) {
    bookingOverlay.addEventListener(
      'click',
      function (e) {
        if (e.target === bookingOverlay) {
          closeBookingModal();
        }
      }
    );
  }

  if (bookingSuccessCloseBtn) {
    bookingSuccessCloseBtn.addEventListener(
      'click',
      closeBookingModal
    );
  }

  document.addEventListener(
    'keydown',
    function (e) {
      if (
        e.key === 'Escape' &&
        bookingOverlay &&
        bookingOverlay.classList.contains(
          'is-open'
        )
      ) {
        closeBookingModal();
      }
    }
  );

  if (bookingForm) {
    bookingForm.addEventListener(
      'submit',
      function (e) {
        e.preventDefault();

        if (!bookingForm.checkValidity()) {
          bookingForm.reportValidity();
          return;
        }

        bookingForm.style.display =
          'none';

        if (bookingSuccess) {
          bookingSuccess.classList.add(
            'is-active'
          );
        }

        if (bookingBox) {
          bookingBox.scrollTop = 0;
        }
      }
    );
  }

  /* Wire up consultation buttons */

  [
    'header-book-btn',
    'cta-book-consultation',
    'services-hero-book-btn'
  ].forEach(function (id) {
    var el =
      document.getElementById(id);

    if (el) {
      el.addEventListener(
        'click',
        function (e) {
          e.preventDefault();
          openBookingModal();
        }
      );
    }
  });

  var explorerBookBtn =
    document.querySelector(
      '#explorer-results a.btn.btn-primary[href="#take-next-step"]'
    );

  if (explorerBookBtn) {
    explorerBookBtn.addEventListener(
      'click',
      function (e) {
        e.preventDefault();
        openBookingModal();
      }
    );
  }

  /* ---------------------------------------------------------
     MOBILE NAV TOGGLE
  --------------------------------------------------------- */

  var navToggle =
    document.getElementById(
      'site-nav-toggle'
    );

  var navLinks =
    document.getElementById(
      'site-nav-links'
    );

  if (navToggle && navLinks) {
    navToggle.addEventListener(
      'click',
      function () {
        var isOpen =
          navLinks.classList.toggle(
            'is-open'
          );

        navToggle.setAttribute(
          'aria-expanded',
          isOpen ? 'true' : 'false'
        );

        navToggle.setAttribute(
          'aria-label',
          isOpen
            ? 'Close menu'
            : 'Open menu'
        );
      }
    );

    navLinks
      .querySelectorAll('a')
      .forEach(function (link) {
        link.addEventListener(
          'click',
          function () {
            navLinks.classList.remove(
              'is-open'
            );

            navToggle.setAttribute(
              'aria-expanded',
              'false'
            );
          }
        );
      });
  }



  /* ---------------------------------------------------------
     PREMIUM SCROLL-REVEAL & MOTION SYSTEM
  --------------------------------------------------------- */

  var prefersReducedMotion =
    window.matchMedia &&
    window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

  if (
    !prefersReducedMotion &&
    'IntersectionObserver' in window
  ) {

    var simpleReveal =
      document.querySelectorAll(
        '.explorer-card'
      );

    simpleReveal.forEach(function (el) {
      el.classList.add(
        'reveal-init'
      );
    });

    var heroMediaReveal =
      document.querySelector(
        '.services-hero__media'
      );

    if (heroMediaReveal) {
      heroMediaReveal.classList.add(
        'reveal-fade-init'
      );
    }

    var headingGroups =
      document.querySelectorAll(
        '.services-header, .cta-section__inner, .services-hero__content'
      );

    headingGroups.forEach(
      function (group) {
        var items =
          group.children;

        for (
          var i = 0;
          i < items.length;
          i++
        ) {
          items[i].classList.add(
            'reveal-heading',
            'reveal-init'
          );

          items[i].style.setProperty(
            '--reveal-delay',
            i * 100 + 'ms'
          );
        }
      }
    );

    var serviceRows =
      document.querySelectorAll(
        '.service-row'
      );

    serviceRows.forEach(
      function (row, index) {
        row.classList.add(
          'reveal-init'
        );

        row.style.setProperty(
          '--reveal-delay',
          (index % 2) * 110 + 'ms'
        );
      }
    );

    var revealObserver =
      new IntersectionObserver(
        function (
          entries,
          observer
        ) {
          entries.forEach(
            function (entry) {
              if (
                entry.isIntersecting
              ) {
                entry.target.classList.add(
                  'is-visible'
                );

                observer.unobserve(
                  entry.target
                );
              }
            }
          );
        },
        {
          threshold: 0.15,
          rootMargin:
            '0px 0px -40px 0px'
        }
      );

    var allRevealTargets =
      document.querySelectorAll(
        '.reveal-init, .reveal-fade-init'
      );

    allRevealTargets.forEach(
      function (el) {
        revealObserver.observe(el);
      }
    );

    headingGroups.forEach(
      function (group) {
        var groupObserver =
          new IntersectionObserver(
            function (
              entries,
              obs
            ) {
              entries.forEach(
                function (entry) {
                  if (
                    entry.isIntersecting
                  ) {
                    var kids =
                      entry.target
                        .children;

                    for (
                      var i = 0;
                      i < kids.length;
                      i++
                    ) {
                      kids[i].classList.add(
                        'is-visible'
                      );
                    }

                    obs.unobserve(
                      entry.target
                    );
                  }
                }
              );
            },
            {
              threshold: 0.1,
              rootMargin:
                '0px 0px -30px 0px'
            }
          );

        groupObserver.observe(
          group
        );
      }
    );
  }

  /* ---------------------------------------------------------
     HERO IMAGE PARALLAX
  --------------------------------------------------------- */

  if (!prefersReducedMotion) {
    var heroMediaEl =
      document.querySelector(
        '.services-hero__media'
      );

    if (heroMediaEl) {
      var heroInView = true;
      var ticking = false;

      var updateParallax =
        function () {
          var rect =
            heroMediaEl.getBoundingClientRect();

          var offset =
            rect.top * 0.04;

          heroMediaEl.style.transform =
            'translate3d(0,' +
            offset.toFixed(1) +
            'px,0)';

          ticking = false;
        };

      var onScroll =
        function () {
          if (
            !heroInView ||
            ticking
          ) {
            return;
          }

          ticking = true;

          window.requestAnimationFrame(
            updateParallax
          );
        };

      if (
        'IntersectionObserver' in
        window
      ) {
        new IntersectionObserver(
          function (entries) {
            heroInView =
              entries[0]
                .isIntersecting;

            if (heroInView) {
              onScroll();
            }
          }
        ).observe(heroMediaEl);
      }

      window.addEventListener(
        'scroll',
        onScroll,
        { passive: true }
      );
    }
  }

})();