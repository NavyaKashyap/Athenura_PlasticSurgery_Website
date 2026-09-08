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
      name: 'Rhinoplasty', category: 'face', type: 'surgical', goals: ['refine', 'restore'],
      image: 'images/services/rhinoplasty-reference.jpg', meta: 'Face & Facial \u2022 Surgical',
      desc: 'Refine nasal shape and proportion for a result that stays true to your features.',
      addresses: ['Nasal shape, size or bump concerns', 'Nasal asymmetry', 'Breathing function related to nasal structure'],
      overview: 'Rhinoplasty reshapes the nose to improve balance and proportion with the rest of the face, while preserving natural function.',
      whoFor: 'Those seeking a nose shape that feels more in harmony with their features, or improved breathing function.',
      benefits: ['Improved facial balance', 'Long-lasting, natural-looking results', 'Can address both form and function'],
      recovery: 'Initial swelling and bruising typically ease within 1\u20132 weeks, with final results refining over several months.'
    },
    facelift: {
      name: 'Facelift', category: 'face', type: 'surgical', goals: ['restore', 'rejuvenate'],
      image: 'images/services/facelift.jpg', meta: 'Face & Facial \u2022 Surgical',
      desc: 'Restore a naturally rested, refreshed appearance by addressing facial laxity.',
      addresses: ['Sagging skin along the cheeks and jowls', 'Loss of jawline definition', 'Deep nasolabial folds and loose neck skin'],
      overview: 'A facelift addresses skin laxity and volume loss in the lower face and neck for a naturally refreshed appearance.',
      whoFor: 'Those noticing sagging skin, jowls or a loss of definition along the jawline and neck.',
      benefits: ['Naturally rested appearance', 'Long-lasting improvement in skin laxity', 'Can be combined with other facial procedures'],
      recovery: 'Most visible swelling and bruising subside within 2\u20133 weeks; full recovery continues over several months.'
    },
    eyelid: {
      name: 'Eyelid Surgery', category: 'face', type: 'surgical', goals: ['refine', 'rejuvenate'],
      image: 'images/services/eyelid.jpg', meta: 'Face & Facial \u2022 Surgical',
      desc: 'Soften the eye area and reduce heaviness for a brighter, more open look.',
      addresses: ['Excess or drooping upper eyelid skin', 'Puffiness or bags under the eyes', 'A tired or heavy-looking eye area'],
      overview: 'Eyelid surgery (blepharoplasty) removes excess skin and reduces puffiness around the upper or lower eyelids.',
      whoFor: 'Those with heaviness, hooding or under-eye puffiness that makes the eyes look tired.',
      benefits: ['Brighter, more open eye appearance', 'Subtle, natural-looking outcome', 'Can improve upper peripheral vision'],
      recovery: 'Swelling and bruising generally improve within 1\u20132 weeks.'
    },
    'brow-lift': {
      name: 'Browlift', category: 'face', type: 'surgical', goals: ['refine', 'rejuvenate'],
      image: 'images/services/brow-lift.jpg', meta: 'Face & Facial \u2022 Surgical',
      desc: 'Raise a heavy or drooping brow for a more open, alert expression.',
      addresses: ['A low or heavy brow position', 'Forehead furrows and frown lines', 'Hooded upper eyelids caused by brow position'],
      overview: 'A brow lift repositions the eyebrows and smooths forehead furrows for a naturally refreshed upper face.',
      whoFor: 'Those with a heavy, low or furrowed brow that adds an appearance of tiredness or frustration.',
      benefits: ['More open, rested upper face', 'Softer forehead lines', 'Often combined with eyelid surgery'],
      recovery: 'Swelling typically improves within 1\u20132 weeks, with final results settling over 2\u20133 months.'
    },
    'neck-lift': {
      name: 'Neck Lift', category: 'face', type: 'surgical', goals: ['restore', 'refine'],
      image: 'images/services/neck-lift.jpg', meta: 'Face & Facial \u2022 Surgical',
      desc: 'Targeted neck lift and platysmaplasty to eliminate sagging skin and muscle bands.',
      addresses: ['Loose or sagging neck skin', 'Vertical neck banding', 'Loss of jawline-to-neck definition'],
      overview: 'A neck lift tightens loose neck skin and underlying muscle bands to redefine the jawline and neck contour.',
      whoFor: 'Those with sagging neck skin, a "turkey neck" appearance, or vertical muscle banding.',
      benefits: ['Refined jawline and neck contour', 'Often paired with a facelift', 'Long-lasting improvement'],
      recovery: 'Initial swelling settles within 2\u20133 weeks, with continued refinement over several months.'
    },
    otoplasty: {
      name: 'Otoplasty', category: 'face', type: 'surgical', goals: ['refine'],
      image: 'images/services/otoplasty.jpg', meta: 'Face & Facial \u2022 Surgical',
      desc: 'Cosmetic ear reshaping and pinning to create natural symmetry and proportion.',
      addresses: ['Prominent or protruding ears', 'Ear asymmetry', 'Misshapen ear cartilage'],
      overview: 'Otoplasty reshapes, pins or resizes the ears to improve symmetry and proportion with the head and face.',
      whoFor: 'Those self-conscious about prominent, asymmetric or misshapen ears.',
      benefits: ['Improved ear symmetry and proportion', 'Suitable for teens and adults', 'Long-lasting results'],
      recovery: 'Most swelling resolves within 1\u20132 weeks; a protective headband is typically worn briefly after surgery.'
    },
    'fat-transfer-face': {
      name: 'Fat Transfer To Face', category: 'face', type: 'surgical', goals: ['restore', 'refine'],
      image: 'images/services/fat-transfer-face.jpg', meta: 'Face & Facial \u2022 Surgical',
      desc: 'Restore soft, natural volume to the face using fat harvested from your own body.',
      addresses: ['Hollowing in the cheeks or temples', 'Volume loss from natural aging', 'A flatter, less contoured facial profile'],
      overview: 'Fat transfer uses your own fat, harvested and purified, to restore soft, natural-looking volume where the face has lost fullness over time.',
      whoFor: 'Those seeking a fuller, more youthful facial contour using their own tissue rather than synthetic fillers.',
      benefits: ['Uses your own natural tissue', 'Long-lasting volume restoration', 'Can be combined with other facial procedures'],
      recovery: 'Swelling and mild bruising typically ease within 1\u20132 weeks, with final results settling over a few months.'
    },
    'chin-jawline': {
      name: 'Chin & Jawline Surgery', category: 'face', type: 'surgical', goals: ['contour', 'refine'],
      image: 'images/services/chin-jawline.jpg', meta: 'Face & Facial \u2022 Surgical',
      desc: 'Mentoplasty and jawline sculpting to strengthen facial profile definition and lower-face symmetry.',
      addresses: ['A weak or recessed chin', 'An undefined jawline', 'Facial profile imbalance'],
      overview: 'Chin and jawline procedures reshape or augment the lower face to improve overall facial balance and profile.',
      whoFor: 'Those seeking a stronger, more defined chin or jawline in proportion with the rest of the face.',
      benefits: ['Enhanced profile and facial balance', 'Can be combined with neck contouring', 'Tailored to your bone structure'],
      recovery: 'Swelling typically improves over 2\u20133 weeks, with final contour visible after a few months.'
    },

    liposuction: {
      name: 'Liposuction', category: 'body', type: 'surgical', goals: ['contour', 'refine'],
      image: 'images/services/liposuction.jpg', meta: 'Body Contouring \u2022 Surgical',
      desc: 'Contour targeted areas by removing stubborn, diet-resistant fat deposits.',
      addresses: ['Stubborn, diet-resistant fat pockets', 'Uneven body contour', 'Localized fullness in specific areas'],
      overview: 'Liposuction removes localized, diet- and exercise-resistant fat to improve body contour.',
      whoFor: 'Those at a stable weight looking to refine specific areas rather than achieve overall weight loss.',
      benefits: ['Targeted body contouring', 'Minimally invasive technique options', 'Can treat multiple areas in one visit'],
      recovery: 'Compression garments are typically worn for a few weeks; most swelling resolves within 4\u20136 weeks.'
    },
    'tummy-tuck': {
      name: 'Tummy Tuck', category: 'body', type: 'surgical', goals: ['contour', 'restore'],
      image: 'images/services/tummy-tuck.jpg', meta: 'Body Contouring \u2022 Surgical',
      desc: 'Tighten abdominal muscles and skin for a firmer, smoother midsection.',
      addresses: ['Loose or excess abdominal skin', 'Separated abdominal muscles (diastasis recti)', 'Stubborn lower-abdomen fullness'],
      overview: 'A tummy tuck (abdominoplasty) tightens abdominal muscles and removes excess skin for a firmer midsection.',
      whoFor: 'Those with abdominal laxity following pregnancy or significant weight change.',
      benefits: ['Firmer, flatter abdominal profile', 'Can address muscle separation', 'Often combined with liposuction'],
      recovery: 'Initial recovery typically spans 2\u20133 weeks, with strenuous activity resuming after 4\u20136 weeks.'
    },
    'body-lift': {
      name: 'Body Lift', category: 'body', type: 'surgical', goals: ['contour', 'restore'],
      image: 'images/services/body-lift.jpg', meta: 'Body Contouring \u2022 Surgical',
      desc: 'Comprehensive lift removing excess skin around the abdomen, hips and thighs.',
      addresses: ['Excess skin after major weight loss', 'Sagging across the abdomen, hips and thighs', 'Loss of overall body contour'],
      overview: 'A body lift addresses loose skin across multiple areas, often following significant weight loss.',
      whoFor: 'Those with excess, sagging skin after major weight loss who want a smoother overall contour.',
      benefits: ['Addresses multiple areas in one plan', 'Improves overall body contour', 'Can be staged for safety'],
      recovery: 'Recovery is more involved than single-area procedures, typically several weeks with gradual return to activity.'
    },
    'arm-lift': {
      name: 'Arm Lift', category: 'body', type: 'surgical', goals: ['contour', 'refine'],
      image: 'images/services/arm-lift.jpg', meta: 'Body Contouring \u2022 Surgical',
      desc: 'Brachioplasty to tighten loose, sagging skin along the upper arms.',
      addresses: ['Loose, sagging upper-arm skin', 'Arm skin laxity that doesn’t respond to exercise'],
      overview: 'An arm lift (brachioplasty) removes excess skin and tightens tissue along the upper arm.',
      whoFor: 'Those with loose or sagging upper-arm skin that doesn\u2019t respond to exercise.',
      benefits: ['Smoother, more toned arm contour', 'Can be combined with liposuction', 'Long-lasting results'],
      recovery: 'Swelling and bruising typically ease within 2\u20133 weeks.'
    },
    'thigh-lift': {
      name: 'Thigh Lift', category: 'body', type: 'surgical', goals: ['contour', 'refine'],
      image: 'images/services/thigh-lift.jpg', meta: 'Body Contouring \u2022 Surgical',
      desc: 'Reshape the thighs by removing excess skin and tightening underlying tissue.',
      addresses: ['Loose or sagging thigh skin', 'Inner or outer thigh contour irregularities'],
      overview: 'A thigh lift removes excess skin and improves the contour of the inner or outer thigh.',
      whoFor: 'Those with loose thigh skin, often after weight loss, who want a smoother leg contour.',
      benefits: ['Improved thigh contour and shape', 'Often paired with liposuction', 'Long-lasting improvement'],
      recovery: 'Initial recovery typically spans 2\u20133 weeks, with full activity resuming gradually.'
    },
    bbl: {
      name: 'Brazilian Butt Lift', category: 'body', type: 'surgical', goals: ['contour'],
      image: 'images/services/bbl.jpg', meta: 'Body Contouring \u2022 Surgical',
      desc: 'Fat transfer technique to enhance shape and volume of the buttocks.',
      addresses: ['Flat or under-projected buttock volume', 'Asymmetry in buttock shape', 'A desire for a more contoured silhouette using your own tissue'],
      overview: 'A Brazilian Butt Lift uses your own fat, harvested via liposuction, to enhance buttock shape and volume.',
      whoFor: 'Those wanting a fuller, more contoured silhouette using their own tissue rather than an implant.',
      benefits: ['Dual benefit of contouring donor areas', 'Natural-feeling results', 'Personalised to your frame'],
      recovery: 'Sitting is restricted for a period after surgery; most swelling resolves over several weeks.'
    },

    'breast-augmentation': {
      name: 'Breast Augmentation', category: 'breast', type: 'surgical', goals: ['restore', 'contour'],
      image: 'images/services/breast-augmentation.jpg', meta: 'Breast Surgery \u2022 Surgical',
      desc: 'Enhance breast size and shape with implants tailored to your frame.',
      addresses: ['Naturally smaller breast volume', 'Volume loss after pregnancy or weight change', 'Breast size or shape asymmetry'],
      overview: 'Breast augmentation increases breast size and improves shape using implants suited to your anatomy and goals.',
      whoFor: 'Those looking to increase breast volume or restore fullness lost after pregnancy or weight change.',
      benefits: ['Wide range of implant options', 'Personalised to your frame', 'Can be combined with a lift'],
      recovery: 'Most return to light activity within 1\u20132 weeks, with full recovery over several weeks.'
    },
    'breast-reduction': {
      name: 'Breast Reduction', category: 'breast', type: 'surgical', goals: ['restore', 'refine'],
      image: 'images/services/breast-reduction.jpg', meta: 'Breast Surgery \u2022 Surgical',
      desc: 'Reduce breast size and weight for improved comfort and proportion.',
      addresses: ['Back, neck or shoulder discomfort from breast size', 'Disproportionate breast-to-body size', 'Skin irritation beneath the breast crease'],
      overview: 'Breast reduction removes excess breast tissue and skin to relieve physical discomfort and improve proportion.',
      whoFor: 'Those experiencing back, neck or shoulder discomfort related to breast size, or seeking better proportion.',
      benefits: ['Relief from physical discomfort', 'Improved body proportion', 'Can improve clothing fit'],
      recovery: 'Most return to light activity within 1\u20132 weeks, with full recovery over several weeks.'
    },
    'breast-lift': {
      name: 'Breast Lift', category: 'breast', type: 'surgical', goals: ['restore', 'refine'],
      image: 'images/services/breast-lift.jpg', meta: 'Breast Surgery \u2022 Surgical',
      desc: 'Raise and reshape the breasts to address sagging and lost firmness.',
      addresses: ['Sagging or lower-positioned breasts', 'Loss of breast firmness after pregnancy or breastfeeding', 'A downward-pointing nipple position'],
      overview: 'A breast lift (mastopexy) raises and reshapes the breasts by removing excess skin and repositioning tissue.',
      whoFor: 'Those with sagging or lower-positioned breasts, often after pregnancy, breastfeeding or weight change.',
      benefits: ['More youthful breast position', 'Can be combined with augmentation', 'Improved symmetry'],
      recovery: 'Most return to light activity within 1\u20132 weeks, with full recovery over several weeks.'
    },
    'breast-reconstruction': {
      name: 'Breast Reconstruction', category: 'breast', type: 'surgical', goals: ['restore'],
      image: 'images/services/breast-reconstruction.jpg', meta: 'Breast Surgery \u2022 Surgical',
      desc: 'Rebuild breast shape and volume following mastectomy or injury.',
      addresses: ['Breast volume or shape loss after mastectomy', 'Breast asymmetry following surgery or trauma', 'Restoring a natural breast contour'],
      overview: 'Breast reconstruction rebuilds breast shape and volume using implants or the body\u2019s own tissue.',
      whoFor: 'Those who have undergone mastectomy or significant breast trauma and wish to restore breast form.',
      benefits: ['Personalised reconstruction plan', 'Implant or tissue-based options', 'Coordinated with your wider care team'],
      recovery: 'Recovery varies by technique and is planned individually with your surgical team.'
    },
    gynecomastia: {
      name: 'Gynecomastia Surgery', category: 'breast', type: 'surgical', goals: ['contour', 'refine'],
      image: 'images/services/gynecomastia.jpg', meta: 'Breast Surgery \u2022 Surgical',
      desc: 'Reduce enlarged male breast tissue for a flatter, firmer chest contour.',
      addresses: ['Enlarged male breast tissue', 'Chest puffiness that doesn’t respond to diet or exercise', 'Loss of a flat, contoured chest profile'],
      overview: 'Gynecomastia surgery removes excess glandular tissue and/or fat to create a flatter, more contoured chest.',
      whoFor: 'Men experiencing enlarged breast tissue that doesn\u2019t respond to diet or exercise.',
      benefits: ['Flatter, firmer chest contour', 'Can address tissue and excess skin', 'Long-lasting results'],
      recovery: 'Swelling and bruising typically ease within 2\u20133 weeks.'
    },

    botox: {
      name: 'Botox', category: 'non-surgical', type: 'non-surgical', goals: ['refine', 'rejuvenate'],
      image: 'images/services/botox.jpg', meta: 'Non-Surgical \u2022 Injectable',
      desc: 'Smooth fine lines and expression wrinkles with a quick, no-downtime visit.',
      addresses: ['Fine lines and expression wrinkles', 'Forehead and frown lines', 'Crow’s feet around the eyes'],
      overview: 'Botox relaxes targeted facial muscles to smooth fine lines and expression wrinkles.',
      whoFor: 'Those wanting to soften early lines around the forehead, brow or eyes with no downtime.',
      benefits: ['Quick in-office treatment', 'No downtime', 'Results typically last 3\u20134 months'],
      recovery: 'No downtime; normal activities can typically resume immediately.'
    },
    fillers: {
      name: 'Dermal Fillers', category: 'non-surgical', type: 'non-surgical', goals: ['restore', 'contour'],
      image: 'images/services/fillers.jpg', meta: 'Non-Surgical \u2022 Injectable',
      desc: 'Restore volume and softly enhance contours using targeted injectable treatments.',
      addresses: ['Volume loss in the cheeks or lips', 'Under-eye hollowing', 'Softened or less-defined facial contours'],
      overview: 'Dermal fillers restore volume and softly enhance contours using targeted injectable treatments.',
      whoFor: 'Those looking to restore lost volume or enhance natural contours without surgery.',
      benefits: ['Immediate, visible results', 'Minimal downtime', 'Adjustable and often reversible'],
      recovery: 'Mild swelling or bruising may occur and typically resolves within a few days.'
    },
    'chemical-peel': {
      name: 'Chemical Peel', category: 'non-surgical', type: 'non-surgical', goals: ['refine', 'rejuvenate'],
      image: 'images/services/chemical-peel.jpg', meta: 'Non-Surgical \u2022 Skin',
      desc: 'Resurface skin to improve tone, texture and clarity.',
      addresses: ['Uneven skin tone and texture', 'Early sun damage', 'Dullness and rough texture'],
      overview: 'A chemical peel exfoliates the outer skin layers to improve tone, texture and overall clarity.',
      whoFor: 'Those wanting to address uneven tone, texture or early signs of sun damage.',
      benefits: ['Improved tone and texture', 'Range of peel depths available', 'Complements other skin treatments'],
      recovery: 'Downtime varies by peel depth, from none to several days of visible peeling.'
    },
    'laser-skin': {
      name: 'Laser Skin Treatments', category: 'non-surgical', type: 'non-surgical', goals: ['rejuvenate', 'refine'],
      image: 'images/services/laser-skin.jpg', meta: 'Non-Surgical \u2022 Skin',
      desc: 'Targeted laser therapy to improve tone, texture and skin quality.',
      addresses: ['Pigmentation and sun spots', 'Uneven skin texture', 'Early signs of skin aging'],
      overview: 'Laser skin treatments use targeted light energy to improve tone, texture and overall skin quality.',
      whoFor: 'Those wanting to address pigmentation, texture or early signs of aging.',
      benefits: ['Precise, targeted treatment', 'Range of laser options available', 'Little to no downtime for most treatments'],
      recovery: 'Downtime varies by treatment intensity; most fit easily into a normal routine.'
    },
    'skin-rejuvenation': {
      name: 'Skin Rejuvenation', category: 'non-surgical', type: 'non-surgical', goals: ['rejuvenate'],
      image: 'images/services/skin-rejuvenation.jpg', meta: 'Non-Surgical \u2022 Skin',
      desc: 'Comprehensive treatments to refresh overall skin radiance and quality.',
      addresses: ['An overall loss of skin radiance', 'Combination skin tone and texture concerns', 'General signs of skin aging'],
      overview: 'Skin rejuvenation combines complementary treatments to refresh overall radiance, tone and texture.',
      whoFor: 'Those wanting a general refresh in skin quality rather than a single targeted concern.',
      benefits: ['Customisable to your skin type', 'Can combine multiple modalities', 'Little to no downtime for most treatments'],
      recovery: 'Downtime varies by the specific treatments chosen.'
    },
    'scar-treatment': {
      name: 'Scar Treatment', category: 'non-surgical', type: 'non-surgical', goals: ['refine'],
      image: 'images/services/scar-treatment.jpg', meta: 'Non-Surgical \u2022 Skin',
      desc: 'Reduce the visible appearance of surgical or acne scarring.',
      addresses: ['Visible surgical scarring', 'Acne scarring', 'Raised or discolored scar tissue'],
      overview: 'Scar treatments aim to soften texture, color and visibility of surgical, acne or injury-related scarring.',
      whoFor: 'Those wanting to improve the appearance of existing scars.',
      benefits: ['Tailored to scar type and age', 'Can be combined with other skin treatments', 'Gradual, natural-looking improvement'],
      recovery: 'Downtime varies by technique; most treatments involve minimal disruption to routine.'
    },
    prp: {
      name: 'PRP Treatment', category: 'non-surgical', type: 'non-surgical', goals: ['rejuvenate', 'restore'],
      image: 'images/services/prp.jpg', meta: 'Non-Surgical \u2022 Injectable',
      desc: 'Platelet-rich plasma therapy to support skin renewal and rejuvenation.',
      addresses: ['Reduced skin radiance and texture', 'Fine lines from early skin aging', 'Support for skin renewal after other treatments'],
      overview: 'PRP treatment uses concentrated platelets from your own blood to support skin renewal and rejuvenation.',
      whoFor: 'Those wanting a natural, biologically-based approach to skin quality and rejuvenation.',
      benefits: ['Uses your own biological material', 'Can be combined with microneedling', 'Supports gradual, natural-looking improvement'],
      recovery: 'Mild redness or swelling may occur and typically resolves within a day or two.'
    }
  };

  var CATEGORY_ORDER = {
    face: ['rhinoplasty', 'facelift', 'eyelid', 'brow-lift', 'neck-lift', 'otoplasty', 'chin-jawline', 'fat-transfer-face'],
    body: ['liposuction', 'tummy-tuck', 'body-lift', 'arm-lift', 'thigh-lift', 'bbl'],
    breast: ['breast-augmentation', 'breast-reduction', 'breast-lift', 'breast-reconstruction', 'gynecomastia'],
    'non-surgical': ['botox', 'fillers', 'chemical-peel', 'laser-skin', 'skin-rejuvenation', 'scar-treatment', 'prp']
  };

  /* The 7 services shown in the redesigned Services panel, in the
     requested display order. */
  var PANEL_SERVICES = ['brow-lift', 'eyelid', 'facelift', 'fat-transfer-face', 'neck-lift', 'otoplasty', 'rhinoplasty'];

  var CATEGORY_INFO = {
    face: {
      heading: 'Face & Facial Surgery',
      description: 'Refined surgical procedures designed to enhance facial balance, proportion and natural expression.'
    },
    body: {
      heading: 'Body Contouring',
      description: 'Sculpting and contouring procedures designed to refine body proportions and silhouette.'
    },
    breast: {
      heading: 'Breast Surgery',
      description: 'Personalized surgical procedures designed around individual anatomy, proportions and treatment goals.'
    },
    'non-surgical': {
      heading: 'Non-Surgical Aesthetic Treatments',
      description: 'Non-surgical aesthetic treatments commonly offered by plastic and aesthetic clinics to refine skin quality and facial features.'
    }
  };

  /* ---------------------------------------------------------
     SERVICES PANEL — Static editorial rows (7 curated services)
  --------------------------------------------------------- */
  var panelGrid = document.getElementById('service-track');

  function buildRowMarkup(id, index) {
    var s = SERVICES[id];
    if (!s) return '';
    return (
      '<div class="service-row" data-id="' + id + '">' +
      '<div class="service-row__media"><img src="' + s.image + '" alt="' + s.name + ' - Athenura Clinic" loading="lazy" /></div>' +
      '<div class="service-row__content">' +
      '<span class="service-row__meta">' + s.meta + '</span>' +
      '<h3 class="service-row__name">' + s.name + '</h3>' +
      '<p class="service-row__desc">' + s.desc + '</p>' +
      '<button type="button" class="view-details-btn" data-id="' + id + '">Learn More <span aria-hidden="true">\u2192</span></button>' +
      '</div></div>'
    );
  }

  if (panelGrid) {
    panelGrid.innerHTML = PANEL_SERVICES.map(buildRowMarkup).join('');
    panelGrid.querySelectorAll('.view-details-btn').forEach(function (btn) {
      btn.addEventListener('click', function () { openModal(btn.getAttribute('data-id')); });
    });
  }

  /* ---------------------------------------------------------
     SERVICE DETAIL MODAL
  --------------------------------------------------------- */
  var modalOverlay = document.getElementById('service-modal-overlay');
  var modalContent = document.getElementById('service-modal-content');
  var modalCloseBtn = document.getElementById('service-modal-close');
  var lastFocusedElement = null;

  function buildModalMarkup(service) {
    var benefitsList = service.benefits.map(function (b) { return '<li>' + b + '</li>'; }).join('');
    var addressesList = (service.addresses || []).map(function (a) { return '<li>' + a + '</li>'; }).join('');
    return (
      '<div class="service-modal__image"><img src="' + service.image + '" alt="' + service.name + ' - Athenura Clinic" /></div>' +
      '<span class="service-modal__category">' + service.category.replace('-', ' ') + '</span>' +
      '<h3 class="service-modal__title" id="service-modal-title">' + service.name + '</h3>' +
      '<div class="service-modal__section"><h4>Overview</h4><p>' + service.overview + '</p></div>' +
      '<div class="service-modal__section"><h4>What It Addresses</h4><ul>' + addressesList + '</ul></div>' +
      '<div class="service-modal__section"><h4>Who May Consider It</h4><p>' + service.whoFor + '</p></div>' +
      '<div class="service-modal__section"><h4>Key Benefits</h4><ul>' + benefitsList + '</ul></div>' +
      '<div class="service-modal__section"><h4>Treatment Type</h4><p>' + (service.type === 'surgical' ? 'Surgical' : 'Non-Surgical') + '</p></div>' +
      '<div class="service-modal__section"><h4>Recovery</h4><p>' + service.recovery + '</p></div>' +
      '<div class="service-modal__section service-modal__providers"><h4>Our Providers</h4>' +
      '<p class="service-modal__providers-names">Dr. Durvi Patel &bull; Dr. Aaron Shapiro &bull; Medically Trained Athenura Clinical Staff</p>' +
      '<p>Dr. Durvi Patel, Dr. Aaron Shapiro, and our medically trained staff provide personalized cosmetic and aesthetic care with a focus on safety and natural-looking results.</p>' +
      '</div>' +
      '<p class="service-modal__disclaimer">Suitability for this treatment is determined through a professional consultation with a qualified surgeon.</p>' +
      '<div class="service-modal__cta">' +
      '<a href="#take-next-step" class="btn btn-primary" data-modal-consult-btn>Book a Consultation</a>' +
      '<button type="button" class="btn btn-outline" data-modal-secondary-close>Close</button>' +
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
    if (modalBox) modalBox.scrollTop = 0;

    var secondaryClose = modalContent.querySelector('[data-modal-secondary-close]');
    if (secondaryClose) secondaryClose.addEventListener('click', closeModal);

    var consultBtn = modalContent.querySelector('[data-modal-consult-btn]');
    if (consultBtn) {
      consultBtn.addEventListener('click', function (e) {
        e.preventDefault();
        closeModal();
        openBookingModal(serviceId);
      });
    }

    if (modalCloseBtn) modalCloseBtn.focus();
  }

  function closeModal() {
    if (!modalOverlay) return;
    modalOverlay.classList.remove('is-open');
    document.body.style.overflow = '';
    if (lastFocusedElement) lastFocusedElement.focus();
  }

  if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeModal);
  if (modalOverlay) {
    modalOverlay.addEventListener('click', function (e) { if (e.target === modalOverlay) closeModal(); });
  }
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && modalOverlay && modalOverlay.classList.contains('is-open')) closeModal();
  });

  /* ---------------------------------------------------------
     SMART SERVICE EXPLORER
  --------------------------------------------------------- */
  var explorerSelections = { area: null, type: null, goal: null };
  var explorerSteps = root.querySelectorAll('.explorer-step');
  var explorerDots = root.querySelectorAll('.explorer-steps__dot');
  var explorerLines = root.querySelectorAll('.explorer-steps__line');
  var explorerResults = document.getElementById('explorer-results');
  var explorerResultsGrid = document.getElementById('explorer-results-grid');
  var explorerRestartBtn = document.getElementById('explorer-restart');

  function showExplorerStep(stepNumber) {
    explorerSteps.forEach(function (stepEl) {
      stepEl.classList.toggle('is-active', stepEl.getAttribute('data-step') === String(stepNumber));
    });
    explorerDots.forEach(function (dot) {
      var dotStep = parseInt(dot.getAttribute('data-step'), 10);
      dot.classList.toggle('is-active', dotStep === stepNumber);
      dot.classList.toggle('is-done', dotStep < stepNumber);
    });
    explorerLines.forEach(function (line) {
      var lineStep = parseInt(line.getAttribute('data-line'), 10);
      line.classList.toggle('is-done', lineStep < stepNumber);
    });
    if (explorerResults) explorerResults.classList.remove('is-active');
  }

  function scoreService(service) {
    var score = 0;
    if (explorerSelections.area) {
      if (explorerSelections.area === 'skin' && service.category === 'non-surgical') score += 2;
      else if (service.category === explorerSelections.area) score += 2;
    }
    if (explorerSelections.type && explorerSelections.type !== 'not-sure' && service.type === explorerSelections.type) score += 2;
    if (explorerSelections.goal && service.goals.indexOf(explorerSelections.goal) !== -1) score += 1;
    return score;
  }

  function showExplorerResults() {
    explorerSteps.forEach(function (stepEl) { stepEl.classList.remove('is-active'); });
    explorerDots.forEach(function (dot) { dot.classList.add('is-done'); dot.classList.remove('is-active'); });
    explorerLines.forEach(function (line) { line.classList.add('is-done'); });

    var ranked = Object.keys(SERVICES)
      .map(function (id) { return { id: id, service: SERVICES[id], score: scoreService(SERVICES[id]) }; })
      .filter(function (entry) { return entry.score > 0; })
      .sort(function (a, b) { return b.score - a.score; });

    if (ranked.length === 0) {
      ranked = Object.keys(SERVICES).slice(0, 4).map(function (id) { return { id: id, service: SERVICES[id], score: 0 }; });
    }
    ranked = ranked.slice(0, 4);

    if (explorerResultsGrid) {
      explorerResultsGrid.innerHTML = ranked.map(function (entry) {
        return (
          '<li class="explorer-results__item" data-id="' + entry.id + '">' +
          '<img src="' + entry.service.image + '" alt="" />' +
          '<span>' + entry.service.name + '</span>' +
          '<button type="button" class="btn btn-outline" style="font-size:11px; padding:6px 12px; margin-top:4px;" data-result-id="' + entry.id + '">View Details</button>' +
          '</li>'
        );
      }).join('');

      explorerResultsGrid.querySelectorAll('[data-result-id]').forEach(function (btn) {
        btn.addEventListener('click', function () {
          openModal(btn.getAttribute('data-result-id'));
        });
      });
    }
    if (explorerResults) explorerResults.classList.add('is-active');
  }

  root.querySelectorAll('.explorer-options__btn').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var key = btn.getAttribute('data-key');
      var value = btn.getAttribute('data-value');
      explorerSelections[key] = value;

      var group = btn.closest('.explorer-options');
      if (group) {
        group.querySelectorAll('.explorer-options__btn').forEach(function (b) { b.setAttribute('aria-pressed', 'false'); });
      }
      btn.setAttribute('aria-pressed', 'true');

      var currentStepEl = btn.closest('.explorer-step');
      var nextBtnEl = currentStepEl.querySelector('.explorer-nav__next');
      if (nextBtnEl) nextBtnEl.disabled = false;
    });
  });

  root.querySelectorAll('.explorer-nav__next').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var target = parseInt(btn.getAttribute('data-next'), 10);
      if (target > 3) showExplorerResults();
      else showExplorerStep(target);
    });
  });

  root.querySelectorAll('.explorer-nav__back[data-back-to]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      showExplorerStep(parseInt(btn.getAttribute('data-back-to'), 10));
    });
  });

  if (explorerRestartBtn) {
    explorerRestartBtn.addEventListener('click', function () {
      explorerSelections = { area: null, type: null, goal: null };
      root.querySelectorAll('.explorer-options__btn').forEach(function (b) { b.setAttribute('aria-pressed', 'false'); });
      root.querySelectorAll('.explorer-nav__next').forEach(function (b) { b.disabled = true; });
      showExplorerStep(1);
    });
  }

  /* ---------------------------------------------------------
     BOOK CONSULTATION MODAL
     Single shared booking form used by every "Book Consultation"
     trigger across the page (header CTA, hero/CTA section,
     service detail modal, and treatment finder results).
  --------------------------------------------------------- */
  var bookingOverlay = document.getElementById('booking-modal-overlay');
  var bookingBox = document.getElementById('booking-modal-box');
  var bookingCloseBtn = document.getElementById('booking-modal-close');
  var bookingForm = document.getElementById('booking-form');
  var bookingServiceSelect = document.getElementById('booking-service');
  var bookingSuccess = document.getElementById('booking-form-success');
  var bookingSuccessCloseBtn = document.getElementById('booking-form-close-success');
  var bookingLastFocused = null;

  /* Populate the "Select Service" dropdown from the single
     SERVICES source of truth, grouped by category. */
  if (bookingServiceSelect) {
    var groupOrder = [
      { key: 'face', label: 'Face & Facial Surgery' },
      { key: 'body', label: 'Body Contouring' },
      { key: 'breast', label: 'Breast Surgery' },
      { key: 'non-surgical', label: 'Non-Surgical Aesthetic Treatments' }
    ];
    var optionsHtml = '<option value="" disabled selected>Choose a service</option>';
    groupOrder.forEach(function (group) {
      var ids = CATEGORY_ORDER[group.key] || [];
      var groupOptions = ids.map(function (id) {
        var s = SERVICES[id];
        return s ? '<option value="' + id + '">' + s.name + '</option>' : '';
      }).join('');
      if (groupOptions) {
        optionsHtml += '<optgroup label="' + group.label + '">' + groupOptions + '</optgroup>';
      }
    });
    bookingServiceSelect.innerHTML = optionsHtml;
  }

  function resetBookingForm() {
    if (bookingForm) {
      bookingForm.reset();
      bookingForm.style.display = '';
    }
    if (bookingSuccess) bookingSuccess.classList.remove('is-active');
  }

  function openBookingModal(prefillServiceId) {
    if (!bookingOverlay) return;
    bookingLastFocused = document.activeElement;
    resetBookingForm();
    if (prefillServiceId && bookingServiceSelect && SERVICES[prefillServiceId]) {
      bookingServiceSelect.value = prefillServiceId;
    }
    bookingOverlay.classList.add('is-open');
    document.body.style.overflow = 'hidden';
    if (bookingBox) bookingBox.scrollTop = 0;
    var firstField = document.getElementById('booking-name');
    if (firstField) firstField.focus();
  }

  function closeBookingModal() {
    if (!bookingOverlay) return;
    bookingOverlay.classList.remove('is-open');
    document.body.style.overflow = '';
    if (bookingLastFocused) bookingLastFocused.focus();
  }

  if (bookingCloseBtn) bookingCloseBtn.addEventListener('click', closeBookingModal);
  if (bookingOverlay) {
    bookingOverlay.addEventListener('click', function (e) { if (e.target === bookingOverlay) closeBookingModal(); });
  }
  if (bookingSuccessCloseBtn) bookingSuccessCloseBtn.addEventListener('click', closeBookingModal);
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && bookingOverlay && bookingOverlay.classList.contains('is-open')) closeBookingModal();
  });

  if (bookingForm) {
    bookingForm.addEventListener('submit', function (e) {
      e.preventDefault();
      if (!bookingForm.checkValidity()) {
        bookingForm.reportValidity();
        return;
      }
      /* No backend is wired up on this static page — acknowledge the
         request locally so every trigger point has a working, complete
         booking flow. */
      bookingForm.style.display = 'none';
      if (bookingSuccess) bookingSuccess.classList.add('is-active');
      if (bookingBox) bookingBox.scrollTop = 0;
    });
  }

  /* Wire up every "Book Consultation" trigger on the page to open
     this same form, in addition to their existing anchor targets. */
  ['header-book-btn', 'cta-book-consultation', 'services-hero-book-btn'].forEach(function (id) {
    var el = document.getElementById(id);
    if (el) {
      el.addEventListener('click', function (e) {
        e.preventDefault();
        openBookingModal();
      });
    }
  });

  var explorerBookBtn = document.querySelector('#explorer-results a.btn.btn-primary[href="#take-next-step"]');
  if (explorerBookBtn) {
    explorerBookBtn.addEventListener('click', function (e) {
      e.preventDefault();
      openBookingModal();
    });
  }

  /* ---------------------------------------------------------
     MOBILE NAV TOGGLE
  --------------------------------------------------------- */
  var navToggle = document.getElementById('site-nav-toggle');
  var navLinks = document.getElementById('site-nav-links');

  if (navToggle && navLinks) {
    navToggle.addEventListener('click', function () {
      var isOpen = navLinks.classList.toggle('is-open');
      navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      navToggle.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');
    });

    navLinks.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        navLinks.classList.remove('is-open');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* ---------------------------------------------------------
     BACK-TO-TOP BUTTON
  --------------------------------------------------------- */
  var backToTopBtn = document.getElementById('back-to-top');
  if (backToTopBtn) {
    var toggleBackToTop = function () {
      if (window.scrollY > 420) {
        backToTopBtn.classList.add('is-visible');
      } else {
        backToTopBtn.classList.remove('is-visible');
      }
    };
    window.addEventListener('scroll', toggleBackToTop, { passive: true });
    toggleBackToTop();

    backToTopBtn.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* ---------------------------------------------------------
     PREMIUM SCROLL-REVEAL & MOTION SYSTEM
     Vanilla JS + IntersectionObserver only. Progressive
     enhancement: every element is fully visible by default;
     JS only adds the hidden "reveal-init" starting state when
     it is safe to animate, so nothing ever gets stuck invisible
     if JS fails or the browser lacks IntersectionObserver.
  --------------------------------------------------------- */
  var prefersReducedMotion = window.matchMedia &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (!prefersReducedMotion && 'IntersectionObserver' in window) {

    /* --- Simple single-element fade-ups (section cards) --- */
    var simpleReveal = document.querySelectorAll('.explorer-card');
    simpleReveal.forEach(function (el) {
      el.classList.add('reveal-init');
    });

    /* Hero media uses an opacity-only reveal since its transform
       is independently driven by the parallax effect below. */
    var heroMediaReveal = document.querySelector('.services-hero__media');
    if (heroMediaReveal) heroMediaReveal.classList.add('reveal-fade-init');

    /* --- Heading / copy groups: children fade up in sequence --- */
    var headingGroups = document.querySelectorAll('.services-header, .cta-section__inner, .services-hero__content');
    headingGroups.forEach(function (group) {
      var items = group.children;
      for (var i = 0; i < items.length; i++) {
        items[i].classList.add('reveal-heading', 'reveal-init');
        items[i].style.setProperty('--reveal-delay', (i * 100) + 'ms');
      }
    });

    /* --- Service rows: fade up one after another as they scroll in --- */
    var serviceRows = document.querySelectorAll('.service-row');
    serviceRows.forEach(function (row, index) {
      row.classList.add('reveal-init');
      row.style.setProperty('--reveal-delay', ((index % 3) * 110) + 'ms');
    });

    var revealObserver = new IntersectionObserver(function (entries, observer) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

    var allRevealTargets = document.querySelectorAll('.reveal-init, .reveal-fade-init');
    allRevealTargets.forEach(function (el) { revealObserver.observe(el); });

    /* Heading groups themselves also need the visible class so
       CSS can cascade to their staggered children. */
    headingGroups.forEach(function (group) {
      var groupObserver = new IntersectionObserver(function (entries, obs) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            var kids = entry.target.children;
            for (var i = 0; i < kids.length; i++) { kids[i].classList.add('is-visible'); }
            obs.unobserve(entry.target);
          }
        });
      }, { threshold: 0.1, rootMargin: '0px 0px -30px 0px' });
      groupObserver.observe(group);
    });
  }

  /* ---------------------------------------------------------
     HERO IMAGE PARALLAX
     Extremely subtle, rAF-throttled vertical drift on the
     services hero photo while it is in view. Skipped entirely
     when reduced motion is requested.
  --------------------------------------------------------- */
  if (!prefersReducedMotion) {
    var heroMediaEl = document.querySelector('.services-hero__media');

    /* Parallax is applied to the media frame itself (not the
       <img>), because the <img> already has its own independent
       CSS "Ken Burns" zoom animation running on its transform —
       keeping the two effects on separate elements avoids any
       conflict between the JS-driven and CSS-driven transforms. */
    if (heroMediaEl) {
      var heroInView = true;
      var ticking = false;

      var updateParallax = function () {
        var rect = heroMediaEl.getBoundingClientRect();
        var offset = rect.top * 0.04; /* very subtle drift */
        heroMediaEl.style.transform = 'translate3d(0,' + offset.toFixed(1) + 'px,0)';
        ticking = false;
      };

      var onScroll = function () {
        if (!heroInView || ticking) return;
        ticking = true;
        window.requestAnimationFrame(updateParallax);
      };

      if ('IntersectionObserver' in window) {
        new IntersectionObserver(function (entries) {
          heroInView = entries[0].isIntersecting;
          if (heroInView) onScroll();
        }).observe(heroMediaEl);
      }

      window.addEventListener('scroll', onScroll, { passive: true });
    }
  }

})();
