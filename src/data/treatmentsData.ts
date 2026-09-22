import { TreatmentItem } from '../types';

export const TREATMENTS: TreatmentItem[] = [
  {
    id: 'zsr-circumcision',
    slug: 'zsr-circumcision',
    name: 'ZSR Circumcision',
    tagline: 'Modern, minimally invasive stapler-assisted technique with individual clinical evaluation',
    shortDescription: 'Modern circumcision using a stapler-based technique, with consultation to determine whether it is appropriate for you.',
    category: 'Minimally Invasive & Laser',
    image: '/images/Untitled design.png',
    imageAlt: 'High-precision surgical instruments and sterile stapler technology in a clinical theater',
    commonConcerns: [
      'Phimosis (inability to retract foreskin comfortably)',
      'Paraphimosis (foreskin trapped behind glans)',
      'Recurrent balanitis or posthitis (inflammation/infection)',
      'Pain or micro-tearing during intimacy or personal hygiene',
      'Hygiene-related issues or chronic discomfort'
    ],
    whoMayBenefit: [
      'Adults and adolescents with medically diagnosed phimosis unresponsive to conservative measures',
      'Patients experiencing repeated bacterial or fungal foreskin infections',
      'Individuals seeking a uniform, standardized surgical line with minimal manual suturing',
      'Patients desiring clear post-operative expectations and reduced intra-operative time'
    ],
    consultationProcess: [
      {
        step: 'Clinical History & Symptom Review',
        description: 'Discussion of duration of symptoms, past treatments, urinary symptoms, and relevant medical conditions like diabetes.'
      },
      {
        step: 'Physical Examination',
        description: 'Gentle clinical assessment to assess tissue elasticity, foreskin retraction, presence of active inflammation, and anatomical sizing.'
      },
      {
        step: 'Suitability Assessment',
        description: 'Determination of whether ZSR stapler circumcision, conventional surgical circumcision, or conservative therapy is clinically indicated.'
      },
      {
        step: 'Clear Explanation & Preparation',
        description: 'Comprehensive explanation of the procedure, local anaesthesia, post-op dressing, silicone ring drop-off timeline, and scheduled follow-up.'
      }
    ],
    treatmentOptions: [
      {
        title: 'ZSR Anastomat Stapler Circumcision',
        description: 'A single-use disposable surgical device simultaneously cuts and seals the tissue with tiny medical-grade silicone-anchored staples. Performed under local anaesthesia with minimal tissue handling.'
      },
      {
        title: 'Conventional Surgical Circumcision (Sleeve/Dorsal Slit)',
        description: 'Recommended when anatomical variances, severe scar tissue, or active infection preclude the use of a circular stapler device.'
      },
      {
        title: 'Conservative Medical Management',
        description: 'For mild early-stage inflammation, topical medical therapies or hygiene regimens may be trialed before considering any surgical intervention.'
      }
    ],
    recoveryInfo: {
      title: 'Post-Procedure Care & Recovery Guidelines',
      points: [
        'Procedure is typically day-care (outpatient), allowing you to return home the same day.',
        'A protective compression bandage is placed and usually monitored or removed within 24 to 48 hours.',
        'Most patients can resume sedentary office work and light walking within 2 to 3 days.',
        'The silicone ring and staples naturally detach over 10 to 21 days as the underlying wound heals cleanly.',
        'Abstinence from sexual intercourse and vigorous physical exercise is advised for approximately 4 to 6 weeks.'
      ]
    },
    faqs: [
      {
        question: 'How is ZSR circumcision different from conventional circumcision?',
        answer: 'ZSR circumcision uses a precision surgical device that excises and seals tissue concurrently using circular staples with a silicone protective ring. This reduces manual stitching time, promotes an even circumferential cosmetic line, and minimizes manual surgical manipulation.'
      },
      {
        question: 'Is the procedure painful?',
        answer: 'The procedure is performed under local anaesthetic block, ensuring you do not feel sharp pain during the intervention. Mild soreness, tightness, or bruising post-procedure is standard and managed with prescribed analgesics.'
      },
      {
        question: 'Do the staples need to be removed manually?',
        answer: 'In the vast majority of cases, the medical staples and silicone ring fall off spontaneously as the wound heals between 10 and 21 days. If any staple remains after the designated window, it can be gently detached during follow-up.'
      },
      {
        question: 'When can I bathe or shower after the procedure?',
        answer: 'You will receive specific dressing guidelines. Typically, the surgical site must be kept dry until the initial compression dressing is reviewed at the clinic, after which specific hygiene washes are prescribed.'
      }
    ],
    disclaimer: 'Clinical suitability for ZSR stapler circumcision is evaluated strictly during an in-person physical consultation. Procedure selection depends on individual anatomical and clinical factors.'
  },
  {
    id: 'piles-fissure',
    slug: 'piles-fissure',
    name: 'Piles & Fissure Care',
    tagline: 'Comprehensive proctology with advanced diode laser and conservative medical protocols',
    shortDescription: 'Assessment and treatment options including advanced laser proctology where clinically suitable.',
    category: 'Minimally Invasive & Laser',
    image: '/images/Untitled design (1).png',
    imageAlt: 'Modern sterile surgical operating suite with high-tech laparoscopic and proctology equipment',
    commonConcerns: [
      'Painless rectal bleeding during or after bowel movements (bright red blood)',
      'Prolapsing tissue or anal lumps that require manual reduction',
      'Sharp, cutting or burning pain during defecation (classic anal fissure)',
      'Anal itching, soiling, or perianal skin irritation',
      'Chronic constipation accompanied by anxiety during toilet visits'
    ],
    whoMayBenefit: [
      'Patients with symptomatic internal hemorrhoids (Grade II and III) failing medical therapy',
      'Individuals suffering from acute or chronic anal fissures refractory to dietary and topical treatments',
      'Patients seeking minimal sphincter damage, preserved continence, and faster return to work'
    ],
    consultationProcess: [
      {
        step: 'Detailed Symptom Discussion',
        description: 'Review of bowel habits, fiber intake, bleeding characteristics, and pain duration in complete medical privacy.'
      },
      {
        step: 'Gentle Clinical Proctological Examination',
        description: 'Careful visual and gentle digital examination or proctoscopy when tolerated, ruling out secondary pathologies.'
      },
      {
        step: 'Grading & Individual Plan',
        description: 'Accurate clinical grading (Grade I to IV hemorrhoids; acute vs. chronic fissure) to determine if lifestyle, medication, or laser intervention is appropriate.'
      },
      {
        step: 'Procedural Counseling',
        description: 'Clear briefing on dietary fiber, hydration, sitz bath regimens, and laser procedure details if indicated.'
      }
    ],
    treatmentOptions: [
      {
        title: 'Laser Hemorrhoidoplasty (LHP)',
        description: 'Minimally invasive diode laser energy is delivered through a fine radial fiber directly into the hemorrhoidal plexus, causing shrinkage through coagulation without extensive excisional cutting.'
      },
      {
        title: 'Laser Sphincterotomy / Fissure Laser Treatment',
        description: 'Precise laser energy relieves internal anal sphincter spasm and vaporizes fibrotic fissure beds while preserving muscular integrity and continence.'
      },
      {
        title: 'Banding / Sclerotherapy / Excisional Hemorrhoidectomy',
        description: 'Evaluated for complex external hemorrhoids, thrombosed piles, or high-grade mixed prolapsing hemorrhoids requiring formal surgical repositioning.'
      },
      {
        title: 'Structured Medical & Dietary Therapy',
        description: 'Stool softeners, bulk fiber supplementation, local muscle relaxant ointments, and pelvic floor relaxation advice.'
      }
    ],
    recoveryInfo: {
      title: 'Recovery & Post-Care Expectations',
      points: [
        'Laser proctology is typically performed under day-care anaesthesia, allowing discharge on the same or following day.',
        'Noticeably reduced pain compared to traditional open surgical cutting, preserving normal sphincter mechanisms.',
        'Warm water sitz baths are recommended twice daily to soothe the perianal area and maintain pristine hygiene.',
        'High-fiber nutrition and adequate hydration are mandatory to ensure soft, unforced bowel movements.',
        'Most patients resume light desk-based duties within 3 to 5 days.'
      ]
    },
    faqs: [
      {
        question: 'Is laser surgery completely painless?',
        answer: 'Laser procedures significantly minimize surgical cutting and damage to surrounding sensitive skin, resulting in vastly lower pain than conventional excisional surgery. Some mild discomfort or dull ache is manageable with standard medications.'
      },
      {
        question: 'Will piles return after laser treatment?',
        answer: 'Recurrence is rare when appropriate clinical indications are met and post-treatment bowel habits (high fiber, hydration, avoiding prolonged straining) are maintained.'
      },
      {
        question: 'How do I know if I have piles or an anal fissure?',
        answer: 'Piles typically present with painless bleeding and bulging tissue, whereas an anal fissure is characterized by severe sharp pain during defecation often described as passing broken glass. A clinical examination provides definitive distinction.'
      }
    ],
    disclaimer: 'Treatment modalities (laser vs. medical vs. conventional) are recommended exclusively after an in-person clinical assessment and proctoscopy.'
  },
  {
    id: 'hydrocele-hernia',
    slug: 'hydrocele-hernia',
    name: 'Hydrocele & Hernia Repair',
    tagline: 'Evidence-based anatomical repair through laparoscopic and open tension-free techniques',
    shortDescription: 'Surgical evaluation and minimally invasive options when appropriate, with recovery guidance.',
    category: 'General Surgery',
    image: '/images/Untitled design (2).png',
    imageAlt: 'Medical consultation office with anatomical models and diagnostic imaging equipment',
    commonConcerns: [
      'Visible bulge in the groin, scrotum, or near the umbilicus (navel)',
      'A dragging sensation or heaviness that worsens towards the end of the day or with standing',
      'Painless or uncomfortable fluid swelling around one or both testicles (hydrocele)',
      'Sharp pain during heavy lifting, coughing, or straining',
      'Inability to push the hernia bulge back in (requires urgent assessment)'
    ],
    whoMayBenefit: [
      'Patients with reducible or symptomatic inguinal, umbilical, epigastric, or incisional hernias',
      'Individuals with persistent hydrocele causing cosmetic, physical, or functional heaviness',
      'Active individuals seeking durable tension-free mesh reinforcement with low recurrence rates'
    ],
    consultationProcess: [
      {
        step: 'Physical & Cough Impulse Examination',
        description: 'Evaluation in standing and lying positions to examine defect size, reducibility, and anatomical margins.'
      },
      {
        step: 'Diagnostic Ultrasound Correlation',
        description: 'High-resolution scrotal or abdominal wall ultrasound when needed to evaluate hernia contents or exclude testicular pathologies.'
      },
      {
        step: 'Surgical Approach Selection',
        description: 'Tailored discussion comparing keyhole laparoscopic repair (TEP / TAPP) against open Lichtenstein tension-free repair.'
      },
      {
        step: 'Pre-Operative Optimization',
        description: 'Evaluation of fitness, blood sugar control, respiratory health, and smoking cessation recommendations.'
      }
    ],
    treatmentOptions: [
      {
        title: 'Laparoscopic Inguinal Hernia Repair (TEP / TAPP)',
        description: 'Keyhole repair utilizing 3 micro-incisions to place a lightweight biocompatible prosthetic mesh beneath the abdominal wall defect. Excellent for bilateral or recurrent hernias.'
      },
      {
        title: 'Open Tension-Free Mesh Hernioplasty (Lichtenstein)',
        description: 'Gold-standard open approach performed through a focused groin incision, ideal under regional or local anaesthesia when laparoscopy is contraindicated.'
      },
      {
        title: 'Hydrocelectomy (Jaboulay / Lord Technique)',
        description: 'Focused scrotal procedure to drain the hydrocele sac and excise or plicate the tunica vaginalis, preventing fluid re-accumulation.'
      },
      {
        title: 'Umbilical & Incisional Hernia Repair',
        description: 'Anatomical defect closure with sublay or intraperitoneal onlay mesh reinforcement tailored to defect size.'
      }
    ],
    recoveryInfo: {
      title: 'Recovery Milestones & Precautions',
      points: [
        'Hospital stay is usually 24 to 48 hours for laparoscopic or open repairs.',
        'Walking and light normal activities are encouraged within hours of surgery.',
        'Strict avoidance of heavy lifting (>5 kg), intense gym sessions, or strenuous straining for 4 to 6 weeks.',
        'Scrotal support garments are provided for hydrocele and groin hernia cases to mitigate postoperative swelling.',
        'Scheduled wound checks at 7 days to verify primary healing.'
      ]
    },
    faqs: [
      {
        question: 'Can a hernia heal on its own without surgery?',
        answer: 'No. A hernia is a mechanical defect (hole) in the muscular abdominal wall. Exercises, belts, or medications cannot close the anatomical gap; surgery is the only definitive curative intervention.'
      },
      {
        question: 'What is the risk if I delay hernia surgery?',
        answer: 'While small asymptomatic hernias can occasionally be monitored, there is an ongoing risk of bowel loop incarceration or strangulation (loss of blood supply), which necessitates emergency surgery.'
      },
      {
        question: 'Why is mesh necessary for hernia repair?',
        answer: 'Modern tension-free mesh reinforcement distributes abdominal pressure evenly across the repaired floor, drastically reducing hernia recurrence rates compared to older tissue-suture methods.'
      }
    ],
    disclaimer: 'Surgical repair options and mesh suitability are determined through formal clinical examination and diagnostic imaging.'
  },
  {
    id: 'anal-fistula',
    slug: 'anal-fistula',
    name: 'Anal Fistula Management',
    tagline: 'Sphincter-preserving and modern laser tract ablation planned with anatomical precision',
    shortDescription: 'Care for anal fistula and related conditions, with treatment selected after proper assessment.',
    category: 'Minimally Invasive & Laser',
    image: '/images/Untitled design (3).png',
    imageAlt: 'Surgical laser technology with precision optical probes for tract ablation',
    commonConcerns: [
      'Persistent or recurring discharge of pus, blood, or serous fluid near the anus',
      'Throbbing perianal pain that increases with sitting or defecation and eases after spontaneous drainage',
      'A palpable tender lump or opening in the skin around the anal margin',
      'History of recurrent perianal abscesses requiring drainage',
      'Perianal skin maceration and irritation'
    ],
    whoMayBenefit: [
      'Patients with diagnosed simple or complex cryptoglandular anal fistulae',
      'Individuals with recurring perianal drainage following previous abscess drainage',
      'Patients needing high sphincter preservation to prevent any compromise to continence'
    ],
    consultationProcess: [
      {
        step: 'Clinical History & Prior Intervention Audit',
        description: 'Tracking the timeline of abscesses, prior surgeries, and bowel symptoms to identify underlying conditions.'
      },
      {
        step: 'Physical & Proctological Inspection',
        description: 'Careful external inspection for external openings, tenderness, induration, and internal opening localization.'
      },
      {
        step: 'Pelvic MRI Fistulogram Assessment',
        description: 'When clinically indicated, high-resolution pelvic MRI provides a 3D roadmap of tracts, secondary extensions, and sphincter relationship.'
      },
      {
        step: 'Sphincter-Preservation Strategy',
        description: 'Clear formulation of a tailored procedure prioritizing complete fistula cure while safeguarding continence.'
      }
    ],
    treatmentOptions: [
      {
        title: 'FiLaC (Fistula Laser Closure)',
        description: 'A 360-degree radial emitting laser probe is passed through the tract to gently coagulate the epithelial lining and shrink the fistula from inside out without cutting the anal sphincter muscles.'
      },
      {
        title: 'Fistulotomy',
        description: 'Appropriate for superficial low fistulae that do not involve significant muscular sphincter tissue, allowing the tract to heal cleanly from the base.'
      },
      {
        title: 'Seton Placement (Cutting or Draining)',
        description: 'Placement of a specialized surgical suture loop to maintain continuous drainage, control sepsis, and mature high complex tracts.'
      },
      {
        title: 'LIFT (Ligation of Intersphincteric Fistula Tract)',
        description: 'Sphincter-preserving technique accessing the intersphincteric plane to divide and securely close the internal opening.'
      }
    ],
    recoveryInfo: {
      title: 'Post-Operative Course & Wound Management',
      points: [
        'Procedure is typically short-stay or day-care, minimizing hospital disruption.',
        'Regular warm sitz baths are crucial after each bowel movement to keep the external wound clean.',
        'Mild serous or blood-tinged discharge can be expected for a few weeks as the tract undergoes biological remodeling.',
        'Stool softeners and hydration prevent hard stools from stressing the healing tissues.',
        'Periodic follow-up assessments ensure healthy granulating tissue fills the tract from deep to superficial.'
      ]
    },
    faqs: [
      {
        question: 'Can anal fistula be cured with oral antibiotics alone?',
        answer: 'No. While antibiotics can treat acute surrounding cellulitis, they cannot eliminate the epithelialized tubular tract that connects the anal canal to the skin. Definite surgical or laser tract treatment is mandatory.'
      },
      {
        question: 'What is the advantage of FiLaC laser closure?',
        answer: 'FiLaC is minimally invasive and avoids cutting the anal sphincter muscles, drastically lowering the risk of fecal incontinence while providing minimal post-operative pain and no large open surgical wound.'
      },
      {
        question: 'Why is an MRI often requested for fistula?',
        answer: 'An MRI fistulogram accurately maps complex secondary tracts, horse-shoe extensions, and the precise height relative to the levator ani and sphincter muscles, which is vital for preventing recurrences.'
      }
    ],
    disclaimer: 'Treatment approach is selected based on anatomical classification (Parks classification) and MRI confirmation where necessary.'
  },
  {
    id: 'urology',
    slug: 'urology',
    name: 'Urology & Endourological Care',
    tagline: 'Specialized clinical assessment for kidney stones, prostate health, and urinary tract disorders',
    shortDescription: 'Evaluation and surgical care spanning kidney stones, reconstructive urology, and urinary disorders.',
    category: 'Urology & Renal',
    image: '/images/Untitled design (1).png',
    imageAlt: 'Surgical operating theater equipped for endourology and renal interventions',
    commonConcerns: [
      'Severe flank or back pain radiating to the groin (renal colic / kidney stones)',
      'Visible blood in the urine (hematuria) requiring urgent diagnostic workup',
      'Difficulty passing urine, weak urinary stream, or frequent nighttime urination (nocturia)',
      'Recurrent urinary tract infections (UTIs) or persistent burning during urination',
      'Urethral strictures, testicular pain, or scrotal anomalies'
    ],
    whoMayBenefit: [
      'Patients with symptomatic renal, ureteric, or bladder calculi (stones)',
      'Men experiencing lower urinary tract symptoms (LUTS) secondary to benign prostatic hyperplasia (BPH)',
      'Individuals requiring reconstructive urological assessment or post-surgical catheter care'
    ],
    consultationProcess: [
      {
        step: 'Symptom & Urinary Diary Evaluation',
        description: 'Detailed analysis of voiding patterns, pain episodes, fluid intake habits, and family history of nephrolithiasis.'
      },
      {
        step: 'Urological Physical Assessment',
        description: 'Abdominal, costovertebral angle, and targeted genital examination to evaluate organ tenderness or structural signs.'
      },
      {
        step: 'Targeted Diagnostics',
        description: 'Review of non-contrast CT KUB, ultrasonography, urine microscopy, culture, and serum creatinine to ensure kidney safety.'
      },
      {
        step: 'Minimally Invasive Strategy',
        description: 'Formulation of clear options: medical expulsive therapy, shock wave lithotripsy, or endourological laser procedures.'
      }
    ],
    treatmentOptions: [
      {
        title: 'Endourological Stone Interventions (URSL / RIRS / PCNL)',
        description: 'Minimally invasive scope-guided procedures utilizing holmium laser lithotripsy to fragment and retrieve kidney and ureteric stones without incisions.'
      },
      {
        title: 'Prostatic Care & Medical Management',
        description: 'Evaluation and management of benign prostatic enlargement using modern alpha-blockers, 5-ARIs, or endoscopic surgical options when bladder outflow is impeded.'
      },
      {
        title: 'Reconstructive Urology & Urethral Stricture Repair',
        description: 'Surgical assessment for urethral dilatation, optical internal urethrotomy (OIU), or urethroplasty for scarred urinary tracts.'
      },
      {
        title: 'Metabolic Evaluation & Stone Prevention',
        description: 'Comprehensive 24-hour urine chemistry, stone analysis, and personalized dietary modifications to prevent recurrent calculus formation.'
      }
    ],
    recoveryInfo: {
      title: 'Recovery Guidelines for Endourology',
      points: [
        'Most endourological procedures require only a brief 24-hour hospital admission.',
        'Temporary double-J (DJ) stents placed during stone removal are removed easily in clinic after 1 to 2 weeks.',
        'High fluid intake (2.5 to 3 liters/day) is recommended to maintain clear urinary flow.',
        'Slight pink-tinged urine for the first 48 hours is common and resolves quickly with hydration.',
        'Normal office activity can usually be resumed within 2 to 4 days.'
      ]
    },
    faqs: [
      {
        question: 'Do all kidney stones require surgery?',
        answer: 'No. Stones smaller than 4 to 5 mm often pass spontaneously with medical expulsive therapy, hydration, and pain control. Surgical intervention is reserved for larger stones, persistent obstruction, severe pain, or infection.'
      },
      {
        question: 'What is RIRS (Retrograde Intrarenal Surgery)?',
        answer: 'RIRS is an advanced incisionless procedure where a flexible ureteroscope is passed naturally through the urethra into the kidney to dust stones into powder using a fine laser fiber.'
      },
      {
        question: 'Why is blood in the urine a sign to consult immediately?',
        answer: 'Hematuria can stem from kidney stones or infections, but can also be an early indicator of bladder or kidney lesions. Thorough clinical evaluation is essential.'
      }
    ],
    disclaimer: 'Clinical advice is individualized based on kidney function tests, radiological stone sizing, and patient symptoms.'
  },
  {
    id: 'renal-transplant',
    slug: 'renal-transplant',
    name: 'Renal Transplant Care & Vascular Access',
    tagline: 'Expert surgical consultations, AV fistula creation, and transplant surgical experience',
    shortDescription: 'Surgical expertise in vascular access (AV fistula), donor-recipient evaluation, and transplant follow-up.',
    category: 'Urology & Renal',
    image: '/images/Untitled design (2).png',
    imageAlt: 'Medical consultation desk with diagnostic records and surgical planning documentation',
    commonConcerns: [
      'Chronic kidney disease (CKD Stage 4-5) requiring planned vascular access for hemodialysis',
      'Failing or clotted AV fistula requiring revision, salvage, or alternative access planning',
      'Need for second surgical opinion regarding kidney transplant donor/recipient surgical suitability',
      'Post-transplant surgical complications, lymphocele, wound healing, or incisional hernia',
      'Central venous hemodialysis catheter-related complications'
    ],
    whoMayBenefit: [
      'Patients preparing for hemodialysis needing a high-functioning native Arteriovenous (AV) Fistula',
      'End-stage renal disease (ESRD) patients seeking expert surgical counseling regarding transplantation',
      'Patients with complex vascular anatomy requiring radiocephalic or brachiocephalic fistula creation'
    ],
    consultationProcess: [
      {
        step: 'Vascular Mapping & Clinical Review',
        description: 'Detailed physical examination of upper limb peripheral vessels and Allen test for arterial competency.'
      },
      {
        step: 'Duplex Ultrasound Correlation',
        description: 'Doppler mapping of radial/brachial arteries and cephalic/basilic veins to choose the optimal anatomical anastomotic site.'
      },
      {
        step: 'Access Strategy & Timing',
        description: 'Planning AV fistula creation months before hemodialysis initiation to allow adequate vessel maturation and flow.'
      },
      {
        step: 'Transplant Surgical Counseling',
        description: 'Comprehensive review of past surgeries, abdominal wall condition, iliac vessel anatomy, and immunosuppression surgical considerations.'
      }
    ],
    treatmentOptions: [
      {
        title: 'Native Arteriovenous (AV) Fistula Creation',
        description: 'Meticulous microsurgical anastomosis (Radiocephalic at wrist or Brachiocephalic at elbow) to create durable, infection-resistant vascular access.'
      },
      {
        title: 'AV Fistula Revision & Superficialization',
        description: 'Surgical elevation or transposition of deep veins (e.g., basilic vein transposition) to make cannulation accessible for dialysis technicians.'
      },
      {
        title: 'Renal Transplant Surgical Consultation',
        description: 'In-depth surgical assessment for prospective recipients and living donors based on institutional experience at Apollo Indraprastha Hospital.'
      },
      {
        title: 'Post-Transplant Surgical Management',
        description: 'Careful diagnostic and surgical care for incisional hernias, wound management in immunosuppressed hosts, and vascular complications.'
      }
    ],
    recoveryInfo: {
      title: 'AV Fistula Maturation & Protection',
      points: [
        'Fistula creation is performed under localized regional plexus block or local anaesthesia.',
        'A light dressing is placed and limb elevation is maintained to minimize initial edema.',
        'Surgical site should never be used for blood pressure monitoring, blood draws, or tight constrictive clothing.',
        'Hand exercises (squeezing a soft rubber ball) begin after initial wound healing (typically day 5-7) to promote vein maturation.',
        'A palpable surgical thrill or audible bruit is monitored regularly; full maturation typically takes 6 to 8 weeks.'
      ]
    },
    faqs: [
      {
        question: 'Why is an AV fistula preferred over a temporary dialysis catheter?',
        answer: 'Native AV fistulas have the lowest rates of bloodstream infection, thrombosis, and hospital admissions compared to synthetic grafts or central catheters, providing the safest long-term lifeline for hemodialysis.'
      },
      {
        question: 'When should an AV fistula be created?',
        answer: 'Ideally, fistula surgery is scheduled when CKD reaches stage 4 or early stage 5, typically 3 to 6 months before dialysis is anticipated, allowing the vein sufficient time to dilate and thicken.'
      },
      {
        question: 'What is Dr. Lowrence’s background in renal transplantation?',
        answer: 'Dr. Lowrence has trained and gained clinical surgical experience in renal transplantation and advanced urology at premier apex medical institutions, including Apollo Indraprastha Hospital and Kokilaben Ambani Hospital.'
      }
    ],
    disclaimer: 'Vascular access selection requires prior Doppler ultrasound mapping and individual nephrology coordination.'
  },
  {
    id: 'laser-aesthetic',
    slug: 'laser-aesthetic',
    name: 'Laser & Aesthetic Surgical Procedures',
    tagline: 'Refined minor surgical excisions, laser ablations, and scar minimization',
    shortDescription: 'Precision laser procedures, skin lesion excision, lipoma removal, and aesthetic wound closure.',
    category: 'Wound & Aesthetic',
    image: '/images/Untitled design.png',
    imageAlt: 'Medical laser precision equipment for dermatological and cosmetic surgical procedures',
    commonConcerns: [
      'Enlarging or uncomfortable lipomas (benign fatty tissue lumps) on the body or limbs',
      'Sebaceous cysts, epidermoid cysts, or persistent skin inclusions prone to infection',
      'Corns, calluses, or painful plantar lesions resistant to non-surgical pads',
      'Keloids, hypertrophic scars, or cosmetically concerning post-surgical marks',
      'Skin tags, benign cutaneous lesions, and aesthetic mole evaluation'
    ],
    whoMayBenefit: [
      'Individuals with benign subcutaneous masses seeking minimal scar surgical extraction',
      'Patients with chronic cystic lesions desiring complete capsule excision to prevent recurrence',
      'Individuals looking for precision cosmetic suturing and rapid recovery'
    ],
    consultationProcess: [
      {
        step: 'Clinical Examination & Palpation',
        description: 'Assessment of mass consistency, mobility, depth, relationship to muscle fascia, and skin involvement.'
      },
      {
        step: 'Diagnostic Sonography if Needed',
        description: 'Soft tissue ultrasound to confirm benign lipoma/cyst characteristics and delineate vascularity before excision.'
      },
      {
        step: 'Incision & Closure Planning',
        description: 'Selection of Langer’s skin tension lines for micro-incisions to optimize long-term aesthetic healing.'
      },
      {
        step: 'Histopathology Protocol',
        description: 'Every excised lesion is formally submitted for certified laboratory pathology analysis as standard surgical protocol.'
      }
    ],
    treatmentOptions: [
      {
        title: 'Minimal-Incision Lipoma Extraction',
        description: 'Focused mini-puncture or squeeze technique through a tiny incision, removing the entire fatty mass while keeping visible scarring negligible.'
      },
      {
        title: 'Complete Cyst En-Bloc Excision',
        description: 'Precision surgical dissection removing the entire intact cyst wall to prevent recurring infections, closed with fine intradermal cosmetic sutures.'
      },
      {
        title: 'Laser Ablation of Benign Cutaneous Lesions',
        description: 'Targeted laser energy vaporizes skin tags, warts, and superficial lesions with minimal thermal collateral damage and no need for stitches.'
      },
      {
        title: 'Scar Revision & Intralesional Protocols',
        description: 'Combined surgical revision, intralesional steroid injections, or silicone gel therapy for symptomatic or prominent scars.'
      }
    ],
    recoveryInfo: {
      title: 'Aftercare & Wound Optimization',
      points: [
        'All procedures are performed comfortably under local anaesthesia on a quick day-care basis.',
        'Waterproof medical dressings allow routine personal hygiene after 24 to 48 hours.',
        'Absorbable sub-cuticular sutures dissolve naturally, or micro-sutures are removed smoothly within 5 to 7 days.',
        'Sun protection (SPF 50+) and silicone gel application are advised post-epithelialization for optimal scar maturation.',
        'Mild swelling or bruising resolves completely within 1 to 2 weeks.'
      ]
    },
    faqs: [
      {
        question: 'Will there be a noticeable scar after cyst or lipoma removal?',
        answer: 'Dr. Lowrence utilizes plastic surgical principles: placing incisions along natural skin creases (relaxed skin tension lines) and closing with fine cosmetic sutures to minimize long-term visibility.'
      },
      {
        question: 'Is it safe to squeeze or pop a sebaceous cyst at home?',
        answer: 'No. Squeezing leaves the inner cyst lining intact, leading to inevitable recurrence and substantially increasing the risk of bacterial infection, abscess formation, and irregular scarring.'
      },
      {
        question: 'Can I go back to work the same day?',
        answer: 'Yes. Most minor laser and cosmetic procedures take under 45 minutes under local anaesthesia, allowing patients to resume regular daily work almost immediately.'
      }
    ],
    disclaimer: 'All excised tissue specimens are routed for histopathology assessment in compliance with standard medical safety guidelines.'
  },
  {
    id: 'complex-wounds',
    slug: 'complex-wounds',
    name: 'Advanced Wound Care & Management',
    tagline: 'Evidence-based healing for diabetic ulcers, chronic wounds, and surgical debridement',
    shortDescription: 'Comprehensive protocol-driven management for diabetic foot ulcers, chronic wounds, and tissue salvage.',
    category: 'General Surgery',
    image: '/images/Untitled design (3).png',
    imageAlt: 'Sterile surgical theater prepared for surgical debridement and advanced wound care',
    commonConcerns: [
      'Non-healing diabetic foot ulcers failing conservative outpatient dressings over 4+ weeks',
      'Venous stasis ulcers with periwound swelling and hyperpigmentation on the lower leg',
      'Bed sores (pressure injuries/decubitus ulcers) in elderly or bedridden family members',
      'Infected post-operative wounds with seropurulent discharge or dehiscence',
      'Peripheral arterial disease wounds with painful ischemic tissue'
    ],
    whoMayBenefit: [
      'Diabetic patients with active foot lesions requiring sharp surgical debridement and offloading',
      'Individuals with chronic leg ulcers needing systematic vascular, microbiological, and dressing optimization',
      'Patients facing potential limb loss seeking aggressive tissue preservation and salvage protocols'
    ],
    consultationProcess: [
      {
        step: 'Comprehensive Wound Bed Assessment',
        description: 'Measurement of wound dimensions, depth, presence of slough, granulation, tunneling, and exudate characteristics.'
      },
      {
        step: 'Vascular & Neurological Screening',
        description: 'Palpation of peripheral pedal pulses, Ankle-Brachial Index (ABI), monofilament sensory testing, and vascular Doppler when indicated.'
      },
      {
        step: 'Microbiological Culture & Glycemic Review',
        description: 'Targeted deep wound swabs or tissue biopsies for culture-directed antibiotic therapy, coupled with strict blood sugar control.'
      },
      {
        step: 'Holistic Wound Healing Plan',
        description: 'Selection of advanced bio-dressings, negative pressure therapy (NPWT/VAC), offloading footwear, and debridement schedule.'
      }
    ],
    treatmentOptions: [
      {
        title: 'Sharp Surgical Debridement',
        description: 'Meticulous bedside or operating room excision of devitalized, necrotic, and infected tissue to convert a stagnant chronic wound into a healthy granulating acute wound.'
      },
      {
        title: 'Negative Pressure Wound Therapy (NPWT / VAC)',
        description: 'Application of controlled sub-atmospheric pressure dressing to stimulate microcirculation, reduce local edema, and accelerate granulation tissue formation.'
      },
      {
        title: 'Advanced Bioactive Dressings & Alginates',
        description: 'Utilization of silver-infused foams, calcium alginates, hydrogels, and collagen matrices tailored to exudate levels.'
      },
      {
        title: 'Diabetic Foot Salvage & Pressure Offloading',
        description: 'Custom total contact casting, specialized diabetic footwear, and tendon releases or minor corrective procedures to eliminate high-pressure friction points.'
      }
    ],
    recoveryInfo: {
      title: 'Healing Timeline & Collaborative Care',
      points: [
        'Wound healing requires strict adherence to dressing schedules and offloading regimens.',
        'Diabetic control (maintaining HbA1c in optimal target range) is essential for white blood cell function and collagen synthesis.',
        'Never walk barefoot on active diabetic ulcers; mechanical pressure halts microvascular tissue regeneration.',
        'Periodic wound area measurements document objective progress in granulating percentage.',
        'Family and caregiver training is provided for seamless home dressing maintenance between clinic visits.'
      ]
    },
    faqs: [
      {
        question: 'Why do diabetic wounds take so long to heal?',
        answer: 'Elevated blood glucose levels impair white blood cell function, decrease peripheral microcirculation, and cause peripheral neuropathy (loss of sensation), allowing pressure and minor trauma to persist unnoticed.'
      },
      {
        question: 'What is the role of surgical debridement?',
        answer: 'Chronic wounds often contain bacterial biofilm and non-viable necrotic tissue that physical dressings cannot penetrate. Sharp debridement removes this cellular barrier, triggering normal physiological healing cascades.'
      },
      {
        question: 'Can amputation be prevented in severe diabetic foot cases?',
        answer: 'Yes. With early surgical debridement, targeted antibiotic therapy, offloading, and revascularization when needed, the vast majority of diabetic feet can be preserved.'
      }
    ],
    disclaimer: 'Wound care protocols are individualized according to vascular patency, glycemic control, and tissue microbiology.'
  }
];

export function getTreatmentBySlug(slug: string): TreatmentItem | undefined {
  return TREATMENTS.find((t) => t.slug === slug);
}
