// Category-level content for the service+location SEO template (src/ServiceLocationPage.jsx).
// Written once per service (not per location) so pages differ by real service substance,
// not just a swapped city name — the location layer adds breadcrumbs, canonical/hreflang,
// sibling-location links and one interpolated FAQ instead of duplicating prose.
export const serviceContent = {
  "interior-design": {
    en: {
      summary: "End-to-end interior design covering concept, space planning and material selection for villas, apartments and offices — one studio accountable from first sketch to handover.",
      included: ["Concept & mood boards", "Space planning & layouts", "Material & finishes selection", "Photorealistic 3D visualization"],
      faqs: [
        { q: "What does your interior design service actually include?", a: "Concept development, space planning, material and finishes selection, lighting design and photorealistic 3D CAD renders you approve before any site work begins — followed by fit-out coordination if you choose to continue with us." },
        { q: "Can you design without also doing the fit-out?", a: "Yes. Design-only engagements are available, though most clients continue into fit-out with us since one accountable team removes the usual handoff friction between designer and contractor." },
      ],
    },
    ar: {
      summary: "خدمة تصميم داخلي متكاملة تشمل المفهوم وتخطيط المساحات واختيار المواد للفلل والشقق والمكاتب، بإشراف استوديو واحد مسؤول من أول رسم حتى التسليم.",
      included: ["مفهوم التصميم ولوحات الإلهام", "تخطيط المساحات والتوزيع", "اختيار المواد والتشطيبات", "تصور ثلاثي الأبعاد واقعي"],
      faqs: [
        { q: "ماذا تتضمن خدمة التصميم الداخلي بالتحديد؟", a: "تطوير المفهوم، تخطيط المساحة، اختيار المواد والتشطيبات، تصميم الإضاءة، وتصاميم CAD ثلاثية الأبعاد واقعية تعتمدها قبل بدء أي عمل في الموقع، يليها تنسيق التجهيز إذا اخترت الاستمرار معنا." },
        { q: "هل يمكنكم التصميم دون تنفيذ التجهيز؟", a: "نعم، تتوفر خدمات التصميم فقط، رغم أن معظم العملاء يواصلون معنا في مرحلة التجهيز لأن فريقاً واحداً مسؤولاً يزيل الاحتكاك المعتاد بين المصمم والمقاول." },
      ],
    },
  },
  "fit-out": {
    en: {
      summary: "Turnkey fit-out from civil works and MEP to finishes and furniture — a single contract, one accountable team, and full Dubai Municipality / Civil Defense approvals handled in-house.",
      included: ["Civil works & MEP", "Authority approvals & NOCs", "Finishes, joinery & installation", "Snagging & handover"],
      faqs: [
        { q: "Is fit-out priced as one contract or several trades?", a: "One turnkey contract. We coordinate civil works, MEP, joinery and finishes ourselves, so you sign a single agreement instead of managing separate trade contractors." },
        { q: "Do you handle municipality approvals as part of fit-out?", a: "Yes — NOC permits, structural drawings and completion certificates with Dubai Municipality, DDA, Trakhees, Abu Dhabi Municipality and Civil Defense are managed end to end by our in-house compliance team." },
      ],
    },
    ar: {
      summary: "تجهيز شامل بتسليم مفتاح من الأعمال المدنية والكهروميكانيكية إلى التشطيبات والأثاث، بعقد واحد وفريق مسؤول واحد، مع إدارة كاملة لموافقات بلدية دبي والدفاع المدني داخلياً.",
      included: ["الأعمال المدنية والكهروميكانيكية", "موافقات الجهات وشهادات عدم الممانعة", "التشطيبات والنجارة والتركيب", "الفحص النهائي والتسليم"],
      faqs: [
        { q: "هل يتم تسعير التجهيز بعقد واحد أم عدة مقاولين؟", a: "بعقد تسليم مفتاح واحد. ننسق الأعمال المدنية والكهروميكانيكية والنجارة والتشطيبات بأنفسنا، فتوقع اتفاقية واحدة بدلاً من إدارة مقاولين منفصلين." },
        { q: "هل تديرون موافقات البلدية ضمن خدمة التجهيز؟", a: "نعم، تصاريح عدم الممانعة والرسومات الهيكلية وشهادات الإنجاز مع بلدية دبي وسلطة دبي للتطوير وتراخيص وبلدية أبوظبي والدفاع المدني تدار بالكامل من قبل فريق الامتثال الداخلي لدينا." },
      ],
    },
  },
  "office-fit-out": {
    en: {
      summary: "Workplace fit-out that balances brand presence, acoustic comfort and operational flow — from open-plan floors to executive suites, delivered with minimal disruption to your business.",
      included: ["Workspace planning & zoning", "Acoustic & MEP coordination", "Furniture & joinery production", "Phased handover for live offices"],
      faqs: [
        { q: "Can office fit-out be phased around a working team?", a: "Yes. We routinely sequence works floor-by-floor or zone-by-zone so teams can keep operating while other areas are under construction." },
        { q: "Do you supply furniture or only the built environment?", a: "Both — we produce custom joinery and workstations in-house and can also source and install FF&E, so the finished office arrives fully furnished." },
      ],
    },
    ar: {
      summary: "تجهيز مساحات عمل يوازن بين حضور العلامة التجارية والراحة الصوتية وتدفق العمل، من الطوابق المفتوحة إلى الأجنحة التنفيذية، مع أقل تعطيل ممكن لعملك.",
      included: ["تخطيط وتقسيم مساحات العمل", "تنسيق الأعمال الصوتية والكهروميكانيكية", "إنتاج الأثاث والنجارة", "تسليم على مراحل للمكاتب العاملة"],
      faqs: [
        { q: "هل يمكن تنفيذ تجهيز المكاتب على مراحل مع بقاء الفريق يعمل؟", a: "نعم، ننفذ الأعمال طابقاً بطابق أو منطقة بمنطقة بشكل معتاد، بحيث تستمر الفرق في العمل بينما تكون مناطق أخرى قيد التنفيذ." },
        { q: "هل توفرون الأثاث أم التجهيزات الإنشائية فقط؟", a: "كلاهما، ننتج النجارة المخصصة ومحطات العمل داخلياً، ويمكننا أيضاً توريد وتركيب الأثاث والتجهيزات، بحيث يُسلّم المكتب جاهزاً بالكامل." },
      ],
    },
  },
  "restaurant-fit-out": {
    en: {
      summary: "Restaurant and cafe fit-out engineered for kitchen compliance, front-of-house atmosphere and fast turnaround — because every day before opening costs revenue.",
      included: ["Kitchen extraction & compliance", "Front-of-house design & joinery", "Food authority & civil defense NOCs", "Fast-track programme management"],
      faqs: [
        { q: "Do you handle food authority and kitchen compliance requirements?", a: "Yes, extraction, grease trap and kitchen layout compliance with local food authority and civil defense requirements are coordinated as part of the fit-out programme." },
        { q: "How fast can a restaurant fit-out be completed?", a: "Programme length depends on scope and unit condition, but we run fast-track schedules for F&B clients specifically because lost trading days are a direct cost — ask for a programme during your survey." },
      ],
    },
    ar: {
      summary: "تجهيز مطاعم ومقاهي مصمم للامتثال لمتطلبات المطبخ وأجواء صالة الضيوف مع سرعة التنفيذ، لأن كل يوم قبل الافتتاح يعني خسارة في الإيرادات.",
      included: ["أنظمة الشفط والامتثال في المطبخ", "تصميم ونجارة صالة الضيوف", "شهادات عدم ممانعة الغذاء والدفاع المدني", "إدارة برنامج تنفيذ سريع"],
      faqs: [
        { q: "هل تديرون متطلبات امتثال هيئة الغذاء والمطبخ؟", a: "نعم، يتم تنسيق أنظمة الشفط ومصائد الدهون وتوافق تخطيط المطبخ مع متطلبات هيئة الغذاء المحلية والدفاع المدني ضمن برنامج التجهيز." },
        { q: "ما مدى سرعة إنجاز تجهيز مطعم؟", a: "تعتمد مدة البرنامج على النطاق وحالة الوحدة، لكننا ننفذ جداول سريعة لعملاء المأكولات والمشروبات تحديداً لأن أيام التشغيل الضائعة تمثل تكلفة مباشرة — اطلب برنامجاً زمنياً أثناء المسح الأولي." },
      ],
    },
  },
  "retail-fit-out": {
    en: {
      summary: "Retail fit-out that gets units trading on schedule — shopfront, joinery and lighting sequenced to mall or landlord handover windows without compromising brand standards.",
      included: ["Shopfront & signage coordination", "Retail joinery & display fixtures", "Landlord/mall handover compliance", "Lighting & visual merchandising fit"],
      faqs: [
        { q: "Can you work within mall handover deadlines?", a: "Yes, we plan the programme backwards from the landlord's handover window and manage the required approvals and inspections to keep the opening date intact." },
        { q: "Do you replicate brand fit-out standards across multiple stores?", a: "Yes, once a prototype store or brand standard is agreed, our joinery facility can reproduce the same finishes and fixtures consistently across further locations." },
      ],
    },
    ar: {
      summary: "تجهيز محلات تجارية يضمن بدء التشغيل في الموعد المحدد، بتنسيق واجهة المحل والنجارة والإضاءة وفق مواعيد تسليم المول أو المالك دون المساس بمعايير العلامة التجارية.",
      included: ["تنسيق واجهة المحل واللافتات", "نجارة تجارية ووحدات عرض", "الامتثال لمتطلبات تسليم المالك/المول", "تجهيز الإضاءة والعرض المرئي"],
      faqs: [
        { q: "هل يمكنكم الالتزام بمواعيد تسليم المولات؟", a: "نعم، نخطط البرنامج الزمني بالعكس بدءاً من موعد تسليم المالك، وندير الموافقات والفحوصات المطلوبة للحفاظ على موعد الافتتاح." },
        { q: "هل تكررون معايير تجهيز العلامة التجارية عبر عدة فروع؟", a: "نعم، بمجرد الاتفاق على متجر نموذجي أو معيار للعلامة التجارية، يمكن لمنشأة النجارة لدينا إعادة إنتاج نفس التشطيبات والتجهيزات بثبات عبر مواقع إضافية." },
      ],
    },
  },
  "commercial-interior-design": {
    en: {
      summary: "Commercial interior design for offices, F&B and retail that has to perform on brand, budget and building compliance at once — not just look good in a render.",
      included: ["Brand-led concept design", "Compliant space planning", "Materials specified for commercial wear", "Coordination with fit-out contractor"],
      faqs: [
        { q: "How is commercial design different from residential design?", a: "Commercial spaces have to satisfy footfall, durability and authority-compliance requirements alongside aesthetics, so material specification and space planning are led by those constraints from the concept stage." },
        { q: "Can you design and then hand the drawings to our own contractor?", a: "Yes, though most commercial clients continue with our fit-out team since design intent typically survives execution better under one accountable studio." },
      ],
    },
    ar: {
      summary: "تصميم داخلي تجاري للمكاتب والمطاعم والمحلات يجب أن يحقق التوازن بين العلامة التجارية والميزانية والامتثال الإنشائي في آن واحد، وليس فقط أن يبدو جميلاً في العرض التصويري.",
      included: ["تصميم مفاهيمي يقوده الهوية التجارية", "تخطيط مساحات متوافق مع الاشتراطات", "مواد مختارة لتحمل الاستخدام التجاري", "التنسيق مع مقاول التجهيز"],
      faqs: [
        { q: "ما الفرق بين التصميم التجاري والسكني؟", a: "تحتاج المساحات التجارية لتلبية متطلبات الحركة والمتانة والامتثال للجهات إلى جانب الجمالية، لذا يتم اختيار المواد وتخطيط المساحة وفق هذه المحددات منذ مرحلة المفهوم." },
        { q: "هل يمكنكم التصميم ثم تسليم الرسومات لمقاولنا الخاص؟", a: "نعم، رغم أن معظم العملاء التجاريين يواصلون مع فريق التجهيز لدينا لأن نية التصميم غالباً ما تُنفذ بدقة أعلى تحت إشراف استوديو واحد مسؤول." },
      ],
    },
  },
  "residential-interior-design": {
    en: {
      summary: "Residential interior design shaped around how your household actually lives — from villa master suites to apartment layouts — resolved down to the last drawer alignment.",
      included: ["Lifestyle-led space planning", "Custom joinery & wardrobes", "Material & lighting palette", "Furniture & FF&E coordination"],
      faqs: [
        { q: "Do you design furniture or only select it?", a: "Both. Custom pieces — wardrobes, kitchens, wall units — are produced in our own joinery facility, while loose furniture and FF&E can be sourced and coordinated for you." },
        { q: "Can you work with an existing villa or apartment layout?", a: "Yes, renovation and re-layout projects are common; we survey the existing space before proposing whether to keep, adjust or fully reconfigure the layout." },
      ],
    },
    ar: {
      summary: "تصميم داخلي سكني مصمم وفق أسلوب حياة أسرتك الفعلي، من الأجنحة الرئيسية في الفلل إلى توزيع الشقق، ويُحل حتى أدق تفاصيل محاذاة الأدراج.",
      included: ["تخطيط مساحات يراعي أسلوب الحياة", "نجارة وخزائن مخصصة", "لوحة مواد وإضاءة", "تنسيق الأثاث والتجهيزات"],
      faqs: [
        { q: "هل تصممون الأثاث أم تختارونه فقط؟", a: "كلاهما، تُصنع القطع المخصصة كالخزائن والمطابخ ووحدات الجدران في منشأة النجارة الخاصة بنا، بينما يمكن توريد وتنسيق الأثاث المنفصل والتجهيزات لك." },
        { q: "هل يمكنكم العمل على تخطيط فيلا أو شقة قائمة؟", a: "نعم، مشاريع التجديد وإعادة التوزيع شائعة لدينا، ونقوم بمسح المساحة القائمة قبل اقتراح الإبقاء على التخطيط أو تعديله أو إعادة تشكيله بالكامل." },
      ],
    },
  },
  "office-interior-design": {
    en: {
      summary: "Office interior design built around acoustic comfort, brand presence and how your teams actually collaborate — resolved in 3D before a single wall is touched.",
      included: ["Workplace strategy & zoning", "Acoustic & lighting design", "Brand-integrated joinery", "3D visualization for stakeholder sign-off"],
      faqs: [
        { q: "Can the design reflect our brand guidelines?", a: "Yes, brand colours, materials and signage are integrated into the concept from the start, and reviewed with your marketing or brand team where relevant." },
        { q: "How do you handle sign-off across multiple stakeholders?", a: "Photorealistic 3D renders let every stakeholder review the same materials, layout and lighting decisions before construction, which avoids conflicting feedback once fit-out is underway." },
      ],
    },
    ar: {
      summary: "تصميم داخلي للمكاتب مبني على الراحة الصوتية وحضور العلامة التجارية وطريقة تعاون فرقك فعلياً، ويُحل بالكامل بتصور ثلاثي الأبعاد قبل لمس أي جدار.",
      included: ["استراتيجية مساحة العمل والتقسيم", "تصميم الصوتيات والإضاءة", "نجارة متكاملة مع الهوية التجارية", "تصور ثلاثي الأبعاد لاعتماد أصحاب المصلحة"],
      faqs: [
        { q: "هل يمكن أن يعكس التصميم دليل هويتنا التجارية؟", a: "نعم، تُدمج ألوان العلامة التجارية والمواد واللافتات في المفهوم منذ البداية، وتُراجع مع فريق التسويق أو الهوية لديكم عند الحاجة." },
        { q: "كيف تديرون الاعتماد مع عدة أصحاب مصلحة؟", a: "تتيح التصاميم ثلاثية الأبعاد الواقعية لكل صاحب مصلحة مراجعة نفس المواد والتخطيط وقرارات الإضاءة قبل البناء، مما يمنع تضارب الملاحظات بعد بدء التجهيز." },
      ],
    },
  },
  "restaurant-interior-design": {
    en: {
      summary: "Restaurant interior design that shapes atmosphere, seating flow and kitchen adjacency together, so the concept survives contact with a working service line.",
      included: ["Concept & atmosphere design", "Seating & covers optimization", "Kitchen adjacency planning", "Material specification for F&B durability"],
      faqs: [
        { q: "Do you design around our target covers count?", a: "Yes, seating layout is optimized against your target covers and service style from the concept stage, rather than fitted in afterwards." },
        { q: "Can the design work with our existing kitchen equipment?", a: "Yes, we survey existing kitchen equipment and adjacencies and design around retained equipment where that makes commercial sense." },
      ],
    },
    ar: {
      summary: "تصميم داخلي للمطاعم يشكّل الأجواء وتدفق الجلوس وقرب المطبخ معاً، بحيث يصمد المفهوم أمام واقع خط الخدمة الفعلي.",
      included: ["تصميم المفهوم والأجواء", "تحسين الجلوس وعدد المقاعد", "تخطيط قرب المطبخ", "اختيار مواد تتحمل تشغيل المطاعم"],
      faqs: [
        { q: "هل تصممون وفق عدد المقاعد المستهدف لدينا؟", a: "نعم، يُحسَّن تخطيط الجلوس وفق عدد المقاعد المستهدف وأسلوب الخدمة منذ مرحلة المفهوم، وليس كإضافة لاحقة." },
        { q: "هل يمكن أن يتناسب التصميم مع معدات مطبخنا الحالية؟", a: "نعم، نقوم بمسح معدات المطبخ القائمة ومواقعها ونصمم حولها عند الاحتفاظ بها إذا كان ذلك مجدياً تجارياً." },
      ],
    },
  },
  "retail-interior-design": {
    en: {
      summary: "Retail interior design focused on customer flow, merchandising and brand storytelling — the concept your shopfitting team can actually build on schedule.",
      included: ["Customer flow & layout design", "Merchandising & display concept", "Lighting for product presentation", "Buildable, fit-out-ready drawings"],
      faqs: [
        { q: "Do you design for a single store or a rollout brand standard?", a: "Both — single-store concepts and reproducible brand standards for multi-location rollouts are handled the same way, with drawings built to be reused." },
        { q: "Will the design account for landlord/mall design guidelines?", a: "Yes, mall and landlord design criteria are reviewed and incorporated during concept design to avoid rework at approval stage." },
      ],
    },
    ar: {
      summary: "تصميم داخلي للمحلات التجارية يركز على تدفق الزبائن والعرض وسرد قصة العلامة التجارية، بمفهوم قابل للتنفيذ فعلياً وفق الجدول الزمني.",
      included: ["تصميم تدفق الزبائن والتوزيع", "مفهوم العرض والتنسيق", "إضاءة لعرض المنتجات", "رسومات جاهزة للتنفيذ"],
      faqs: [
        { q: "هل تصممون لمتجر واحد أم لمعيار علامة تجارية متعدد الفروع؟", a: "كلاهما، تُعالج مفاهيم المتجر الواحد ومعايير العلامة التجارية القابلة للتكرار لعدة مواقع بنفس الطريقة، برسومات مصممة لإعادة الاستخدام." },
        { q: "هل يراعي التصميم اشتراطات تصميم المالك أو المول؟", a: "نعم، تُراجع معايير تصميم المول والمالك وتُدمج أثناء التصميم المفاهيمي لتفادي إعادة العمل في مرحلة الاعتماد." },
      ],
    },
  },
  "villa-renovation": {
    en: {
      summary: "Villa renovation that upgrades layout, materials and services without losing the parts of the home that already work — survey-led, not demolition-first.",
      included: ["Condition survey & scope definition", "Structural, MEP & finishes upgrade", "Custom joinery replacement", "Phased works for occupied villas"],
      faqs: [
        { q: "Can we stay in the villa during renovation?", a: "Depending on scope, phased works can allow partial occupancy, though full renovations of MEP and structure typically require vacating — we'll advise honestly during the survey." },
        { q: "Do you handle municipality approvals for renovation work?", a: "Yes, structural or MEP changes that require municipality NOCs are managed by our compliance team as part of the renovation programme." },
      ],
    },
    ar: {
      summary: "تجديد فلل يرفع مستوى التخطيط والمواد والأنظمة دون خسارة الأجزاء التي تعمل جيداً بالفعل في المنزل، بمنهج يبدأ بالمسح لا بالهدم.",
      included: ["مسح الحالة وتحديد النطاق", "تحديث الإنشاءات والكهروميكانيك والتشطيبات", "استبدال النجارة المخصصة", "تنفيذ على مراحل للفلل المأهولة"],
      faqs: [
        { q: "هل يمكننا البقاء في الفيلا أثناء التجديد؟", a: "حسب النطاق، قد يسمح التنفيذ على مراحل بإشغال جزئي، لكن التجديد الكامل للكهروميكانيك والإنشاءات يتطلب عادة إخلاء المكان — سننصحك بصراحة أثناء المسح." },
        { q: "هل تديرون موافقات البلدية لأعمال التجديد؟", a: "نعم، أي تغييرات إنشائية أو كهروميكانيكية تتطلب شهادات عدم ممانعة من البلدية يديرها فريق الامتثال لدينا ضمن برنامج التجديد." },
      ],
    },
  },
  "apartment-renovation": {
    en: {
      summary: "Apartment renovation resolved around building rules, shared services and tight timelines — layout, joinery and finishes upgraded with minimal disruption to neighbours.",
      included: ["Building/OA compliance check", "Layout & services upgrade", "Custom kitchens & wardrobes", "Coordinated works within building hours"],
      faqs: [
        { q: "Do you handle building management/OA approval for renovation works?", a: "Yes, we submit the required renovation permits and follow building working-hour and noise rules on your behalf before works start." },
        { q: "Can plumbing and electrical layouts be changed in an apartment?", a: "Often yes, within what the building's core infrastructure allows — we confirm feasibility during the survey before finalizing the design." },
      ],
    },
    ar: {
      summary: "تجديد شقق يُحل وفق أنظمة المبنى والخدمات المشتركة والجداول الزمنية الضيقة، برفع مستوى التخطيط والنجارة والتشطيبات مع أقل إزعاج للجيران.",
      included: ["فحص الامتثال لأنظمة المبنى/الاتحاد", "تحديث التخطيط والخدمات", "مطابخ وخزائن مخصصة", "تنفيذ منسق ضمن ساعات عمل المبنى"],
      faqs: [
        { q: "هل تديرون موافقة إدارة المبنى/الاتحاد لأعمال التجديد؟", a: "نعم، نقدم تصاريح التجديد المطلوبة ونلتزم بساعات العمل وأنظمة الضوضاء في المبنى نيابة عنك قبل بدء الأعمال." },
        { q: "هل يمكن تغيير مسارات السباكة والكهرباء في الشقة؟", a: "غالباً نعم، ضمن ما تسمح به البنية التحتية الأساسية للمبنى، ونؤكد الجدوى أثناء المسح قبل وضع التصميم النهائي." },
      ],
    },
  },
  "office-renovation": {
    en: {
      summary: "Office renovation that modernizes layout, MEP and finishes for a growing team — sequenced so the business keeps trading through the works.",
      included: ["Space & headcount re-planning", "MEP & acoustic upgrade", "Furniture & joinery replacement", "Out-of-hours & weekend phasing"],
      faqs: [
        { q: "Can renovation happen without closing the office?", a: "Yes, we routinely phase works by zone or run disruptive tasks out-of-hours so the business keeps operating through the programme." },
        { q: "Is our existing furniture reused or fully replaced?", a: "Either — we assess what's worth retaining during the survey and specify replacements only where condition or layout genuinely requires it." },
      ],
    },
    ar: {
      summary: "تجديد مكاتب يحدّث التخطيط والكهروميكانيك والتشطيبات لفريق متنامٍ، منفذ على مراحل بحيث يستمر العمل خلال التنفيذ.",
      included: ["إعادة تخطيط المساحة وعدد الموظفين", "تحديث الكهروميكانيك والصوتيات", "استبدال الأثاث والنجارة", "تنفيذ خارج ساعات الدوام وعطلة نهاية الأسبوع"],
      faqs: [
        { q: "هل يمكن تنفيذ التجديد دون إغلاق المكتب؟", a: "نعم، ننفذ الأعمال عادة على مراحل حسب المنطقة أو خارج ساعات الدوام للمهام المزعجة، بحيث يستمر العمل خلال البرنامج." },
        { q: "هل يُعاد استخدام أثاثنا الحالي أم يُستبدل بالكامل؟", a: "كلاهما ممكن، نقيّم ما يستحق الاحتفاظ به أثناء المسح ونحدد الاستبدال فقط حيث تتطلب الحالة أو التخطيط ذلك فعلياً." },
      ],
    },
  },
  joinery: {
    en: {
      summary: "Custom architectural joinery — from acoustic panelling to hospitality millwork — produced in our own 15,000 sq ft facility for precision that site-built carpentry can't match.",
      included: ["Shop drawings & material specification", "In-house manufacturing & finishing", "Delivery & site installation", "Acoustic & hospitality millwork"],
      faqs: [
        { q: "Is joinery manufactured off-site or built on-site?", a: "Manufactured in our own DIP-2 facility and installed on site — this gives tighter tolerances and finish quality than joinery built in-situ." },
        { q: "Can you produce joinery to match an architect's own drawings?", a: "Yes, we regularly produce from third-party architectural drawings and specifications, not only our own design work." },
      ],
    },
    ar: {
      summary: "نجارة معمارية مخصصة، من الألواح الصوتية إلى أعمال الضيافة الخشبية، تُصنع في منشأتنا الخاصة البالغة 15,000 قدم مربع بدقة لا تضاهيها النجارة المنفذة في الموقع.",
      included: ["رسومات التصنيع وتحديد المواد", "التصنيع والتشطيب الداخلي", "التوصيل والتركيب في الموقع", "أعمال الضيافة الخشبية والصوتية"],
      faqs: [
        { q: "هل تُصنَّع النجارة خارج الموقع أم في الموقع؟", a: "تُصنَّع في منشأتنا الخاصة في مجمع دبي للاستثمار وتُركَّب في الموقع، مما يمنح دقة وجودة تشطيب أعلى من النجارة المنفذة في الموقع مباشرة." },
        { q: "هل يمكنكم تصنيع النجارة وفق رسومات مهندس معماري آخر؟", a: "نعم، ننفذ بانتظام وفق رسومات ومواصفات معمارية من جهات خارجية، وليس فقط أعمال تصميمنا الخاصة." },
      ],
    },
  },
  "custom-wardrobes": {
    en: {
      summary: "Custom wardrobes designed to the millimetre for your actual wardrobe space — walk-in, sliding or hinged — manufactured in-house with a wide choice of finishes.",
      included: ["Measured survey & 3D design", "Internal layout planning", "In-house manufacturing", "Delivery & installation"],
      faqs: [
        { q: "How is a custom wardrobe priced?", a: "Price depends on size, internal fittings and finish — use the estimator on this page for an indicative figure, then we confirm an exact quote after a measured survey." },
        { q: "How long does a custom wardrobe take from order to installation?", a: "Typically a few weeks from confirmed design to installation, depending on finish and current production schedule — we confirm an exact date at order stage." },
      ],
    },
    ar: {
      summary: "خزائن مخصصة تُصمم بدقة الميليمتر لمساحتك الفعلية، سواء كانت غرفة ملابس مفتوحة أو أبواب منزلقة أو مفصلية، وتُصنع داخلياً بخيارات واسعة من التشطيبات.",
      included: ["مسح دقيق وتصميم ثلاثي الأبعاد", "تخطيط التوزيع الداخلي", "تصنيع داخلي", "التوصيل والتركيب"],
      faqs: [
        { q: "كيف يتم تسعير الخزانة المخصصة؟", a: "يعتمد السعر على الحجم والتجهيزات الداخلية والتشطيب — استخدم حاسبة التكلفة في هذه الصفحة للحصول على رقم تقديري، ثم نؤكد عرض السعر الدقيق بعد مسح دقيق للموقع." },
        { q: "كم يستغرق تصنيع الخزانة المخصصة من الطلب حتى التركيب؟", a: "عادة بضعة أسابيع من اعتماد التصميم حتى التركيب، حسب التشطيب وجدول الإنتاج الحالي، ونؤكد موعداً دقيقاً عند تأكيد الطلب." },
      ],
    },
  },
  "kitchen-design": {
    en: {
      summary: "Kitchen design balancing workflow, storage and finish — cabinetry drawn and manufactured in-house so the design on screen matches what's installed.",
      included: ["Layout & workflow planning", "Cabinetry & worktop specification", "Appliance integration", "In-house manufacturing & install"],
      faqs: [
        { q: "Can you work with a specific appliance brand we've already chosen?", a: "Yes, cabinetry is designed around your chosen appliances' exact dimensions rather than generic assumptions." },
        { q: "Do you design open-plan kitchens connected to living areas?", a: "Yes, open-plan and kitchen-island layouts are a regular part of our villa and apartment work, designed together with the adjoining living space." },
      ],
    },
    ar: {
      summary: "تصميم مطابخ يوازن بين سير العمل والتخزين والتشطيب، بخزائن تُرسم وتُصنَّع داخلياً بحيث يطابق التصميم على الشاشة ما يُركَّب فعلياً.",
      included: ["تخطيط التوزيع وسير العمل", "تحديد الخزائن وأسطح العمل", "دمج الأجهزة", "تصنيع وتركيب داخلي"],
      faqs: [
        { q: "هل يمكنكم العمل مع علامة أجهزة معينة اخترناها مسبقاً؟", a: "نعم، تُصمم الخزائن وفق الأبعاد الدقيقة للأجهزة التي اخترتها بدلاً من افتراضات عامة." },
        { q: "هل تصممون مطابخ مفتوحة متصلة بمناطق المعيشة؟", a: "نعم، تصاميم المطابخ المفتوحة والجزيرة جزء معتاد من أعمالنا في الفلل والشقق، وتُصمم مع مساحة المعيشة المجاورة معاً." },
      ],
    },
  },
  "kitchen-renovation": {
    en: {
      summary: "Kitchen renovation from cabinetry replacement to a full layout rework — plumbing, electrics and ventilation upgraded alongside new custom cabinetry.",
      included: ["Condition survey & scope options", "Plumbing/electrical/ventilation upgrade", "New custom cabinetry", "Fast-track installation to minimize downtime"],
      faqs: [
        { q: "Can we keep our layout and only replace cabinetry?", a: "Yes, cabinetry-only refreshes are common and faster than a full layout rework — we present both options after the survey so you can compare cost and timeline." },
        { q: "How long is a household without a working kitchen during renovation?", a: "We sequence works to minimize downtime and can discuss a temporary kitchenette for longer programmes — exact duration depends on scope." },
      ],
    },
    ar: {
      summary: "تجديد مطابخ يتراوح بين استبدال الخزائن وإعادة تصميم التوزيع بالكامل، مع تحديث السباكة والكهرباء والتهوية إلى جانب خزائن مخصصة جديدة.",
      included: ["مسح الحالة وخيارات النطاق", "تحديث السباكة والكهرباء والتهوية", "خزائن مخصصة جديدة", "تركيب سريع لتقليل فترة التوقف"],
      faqs: [
        { q: "هل يمكن الاحتفاظ بالتوزيع الحالي واستبدال الخزائن فقط؟", a: "نعم، تحديث الخزائن فقط خيار شائع وأسرع من إعادة التصميم الكامل، ونعرض الخيارين بعد المسح لمقارنة التكلفة والمدة." },
        { q: "كم تستغرق فترة عدم وجود مطبخ صالح للاستخدام أثناء التجديد؟", a: "ننظم الأعمال لتقليل فترة التوقف، ويمكن مناقشة مطبخ مؤقت للبرامج الأطول — تعتمد المدة الدقيقة على النطاق." },
      ],
    },
  },
};
