module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    else {
        if ("TURBOPACK compile-time truthy", 1) {
            if ("TURBOPACK compile-time truthy", 1) {
                module.exports = __turbopack_context__.r("[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)");
            } else //TURBOPACK unreachable
            ;
        } else //TURBOPACK unreachable
        ;
    }
}
}),
"[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].ReactJsxDevRuntime;
}),
"[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].React;
}),
"[project]/src/i18n/I18nProvider.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "I18nProvider",
    ()=>I18nProvider,
    "useI18n",
    ()=>useI18n
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2f$dictionaries$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/i18n/dictionaries.js [app-ssr] (ecmascript)");
"use client";
;
;
;
const I18nContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])(null);
function I18nProvider({ lang, children }) {
    const dict = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2f$dictionaries$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["dictionaries"][lang] || __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2f$dictionaries$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["dictionaries"].en;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(I18nContext.Provider, {
        value: {
            lang,
            dict
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/src/i18n/I18nProvider.jsx",
        lineNumber: 12,
        columnNumber: 5
    }, this);
}
function useI18n() {
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(I18nContext);
    if (!context) {
        throw new Error('useI18n must be used within an I18nProvider');
    }
    return context;
}
}),
"[project]/src/i18n/dictionaries.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "dictionaries",
    ()=>dictionaries
]);
const dictionaries = {
    en: {
        nav: {
            projects: "Projects",
            services: "Services",
            menu: "Menu",
            close: "Close",
            startProject: "Start a project",
            navigate: "Navigate",
            studio: "Studio",
            studioLocation: "Dubai, United Arab Emirates\nServing Dubai & Abu Dhabi",
            newEnquiries: "New enquiries",
            menuNote: "Design · Approvals · Fit-out · Joinery"
        },
        menuItems: [
            "Home",
            "Studio",
            "Services",
            "Projects",
            "Process",
            "Contact"
        ],
        hero: {
            slides: [
                {
                    eyebrow: "Dubai · Abu Dhabi",
                    title: "UAE Turnkey Fit-out & Custom Architectural Joinery",
                    body: "From first sketch to final handover, we design, approve and manufacture singular spaces for modern Gulf living."
                },
                {
                    eyebrow: "Workplace",
                    title: "Offices with quiet authority.",
                    body: "High-performing workplaces shaped around your people, brand and commercial priorities."
                },
                {
                    eyebrow: "Private residences",
                    title: "Villas, resolved to the last detail.",
                    body: "Architecture, bespoke joinery and intelligent furnishing brought together by one accountable team."
                }
            ],
            viewWork: "View selected work"
        },
        servicesSection: {
            micro: "One team, end to end",
            title: "From imagination\nto installation.",
            lede: "A single, exacting team owns every decision—from the first photorealistic render to the final aligned drawer.",
            discuss: "Discuss your project",
            items: [
                {
                    number: "01",
                    title: "Design & 3D visualization",
                    body: "Photorealistic CAD renders let you approve materials, lighting and spatial decisions before site work begins."
                },
                {
                    number: "02",
                    title: "Fit-out & approvals",
                    body: "Detailed coordination, authority submissions, Dubai Municipality approvals and NOCs managed end to end."
                },
                {
                    number: "03",
                    title: "Bespoke manufacturing",
                    body: "Custom kitchens, wardrobes, wall systems and furniture produced in our own 15,000 sq ft facility."
                }
            ]
        },
        studioSection: {
            micro: "Our studio",
            title: "Built here.\nFitted beautifully.",
            intro: "Our 15,000 sq ft manufacturing facility gives designers and makers the freedom to resolve custom details in-house—without compromising the concept on site.",
            seeHow: "See how we work",
            facts: [
                {
                    strong: "15,000",
                    span: "sq ft manufacturing facility"
                },
                {
                    strong: "1:1",
                    span: "design-to-production control"
                },
                {
                    strong: "UAE",
                    span: "Dubai & Abu Dhabi delivery"
                }
            ]
        },
        sectorsSection: {
            micro: "Spaces we shape",
            title: "Designed around\nhow life unfolds.",
            explore: "Explore this sector",
            items: [
                {
                    label: "Luxury villas",
                    body: "Private homes composed around natural materials, generous proportions and the rituals of everyday life."
                },
                {
                    label: "Executive offices",
                    body: "Assured workplaces where acoustic comfort, brand presence and operational flow work as one."
                },
                {
                    label: "Smart living",
                    body: "Discreet Somfy motorized curtains and integrated controls designed into the architecture from day one."
                }
            ]
        },
        projectsSection: {
            micro: "Selected work",
            title: "Spaces with\na point of view.",
            tools: "Private residences and workplaces designed for the way our clients actually live and work.",
            items: [
                {
                    title: "Canal House",
                    place: "Dubai Water Canal",
                    type: "Private residence"
                },
                {
                    title: "The Foundry Office",
                    place: "DIFC, Dubai",
                    type: "Workplace"
                },
                {
                    title: "Courtyard Villa",
                    place: "Saadiyat, Abu Dhabi",
                    type: "Private residence"
                },
                {
                    title: "Atelier Suite",
                    place: "Downtown Dubai",
                    type: "Design concept"
                }
            ]
        },
        capabilitiesSection: {
            micro: "The advantage is in the detail",
            title: "Complexity,\nquietly managed.",
            items: [
                [
                    "Photorealistic 3D CAD",
                    "Decisions made clearly, before construction."
                ],
                [
                    "DM & NOC approvals",
                    "Authority submissions handled without loose ends."
                ],
                [
                    "Somfy automation",
                    "Motorized curtains integrated, concealed and commissioned."
                ],
                [
                    "Custom joinery",
                    "One-off pieces crafted and finished under our roof."
                ]
            ]
        },
        processSection: {
            micro: "A controlled journey",
            title: "Four stages.\nOne accountable team.",
            items: [
                [
                    "Discover",
                    "Site review, brief, priorities and investment alignment."
                ],
                [
                    "Visualize",
                    "Plans, materials and photorealistic 3D CAD renders."
                ],
                [
                    "Approve",
                    "Technical packages, Dubai Municipality and NOC coordination."
                ],
                [
                    "Make",
                    "Joinery production, fit-out, installation and considered handover."
                ]
            ]
        },
        contactSection: {
            mainHeading: "Let's Talk",
            heading: "I'm applying for",
            types: [
                "Project Form",
                "Procurement Form",
                "Careers"
            ],
            placeholders: {
                fullName: "Full Name",
                email: "Email",
                mobile: "Mobile Number",
                selectCountry: "Select Country",
                applyingFor: "Applying for",
                linkedin: "LinkedIn URL",
                message: "Write Your Message Here",
                jobTitle: "Job Title",
                phone: "Phone",
                companyName: "Company Name",
                companyDomain: "Company Domain Name (URL)",
                companyPhone: "Company Phone",
                companyEmail: "Company Email",
                companyLinkedin: "LinkedIn Company Page",
                companyAddress: "Company Street Address",
                city: "City",
                region: "Region",
                description: "Description",
                emailAddress: "Email address",
                phoneNumber: "Phone number",
                whatToCreate: "What would you like to create?"
            },
            countries: [
                "UAE",
                "KSA",
                "Other"
            ],
            locations: [
                "Dubai",
                "Abu Dhabi",
                "Other UAE"
            ],
            contactPerson: "Contact Person Details",
            companyDetails: "Company Details",
            uploadCV: "Upload CV",
            sendRequest: "Send Request",
            success: "Thank you—your request has been sent."
        },
        footer: {
            newsletter: "Newsletter",
            headline: "Sign up to receive\nlatest news & updates!",
            emailLabel: "Email",
            emailPlaceholder: "Enter your email",
            subscribe: "Subscribe",
            explore: "Explore",
            exploreLinks: [
                "Home",
                "About Us",
                "Projects",
                "Services",
                "Contact"
            ],
            importantLinks: "Important Links",
            importantLinksItems: [
                "Sustainability & HSE",
                "Contact & Locations",
                "Client Testimonials"
            ],
            contactInfo: "Contact Info",
            loc: "Dubai, UAE:",
            backToTop: "Back to the top",
            privacy: "Privacy Policy",
            copy: "Copyright © 2026 Biat Al Ebdaa. All Rights Reserved."
        }
    },
    ar: {
        nav: {
            projects: "المشاريع",
            services: "الخدمات",
            menu: "القائمة",
            close: "إغلاق",
            startProject: "ابدأ مشروعك",
            navigate: "تصفح",
            studio: "الاستوديو",
            studioLocation: "دبي، الإمارات العربية المتحدة\nنخدم دبي وأبوظبي",
            newEnquiries: "استفسارات جديدة",
            menuNote: "تصميم · موافقات · تجهيز · نجارة"
        },
        menuItems: [
            "الرئيسية",
            "الاستوديو",
            "الخدمات",
            "المشاريع",
            "العملية",
            "اتصل بنا"
        ],
        hero: {
            slides: [
                {
                    eyebrow: "دبي · أبوظبي",
                    title: "تجهيز متكامل ونجارة معمارية مخصصة في الإمارات",
                    body: "من المخطط الأول إلى التسليم النهائي، نقوم بتصميم واعتماد وتصنيع مساحات فريدة للحياة الخليجية الحديثة."
                },
                {
                    eyebrow: "مساحات العمل",
                    title: "مكاتب بهيبة هادئة.",
                    body: "مساحات عمل عالية الأداء مصممة حول موظفيك وعلامتك التجارية وأولوياتك التجارية."
                },
                {
                    eyebrow: "مساكن خاصة",
                    title: "فلل مصممة بأدق التفاصيل.",
                    body: "هندسة معمارية ونجارة مخصصة وأثاث ذكي يجمعها فريق واحد مسؤول."
                }
            ],
            viewWork: "عرض الأعمال المختارة"
        },
        servicesSection: {
            micro: "فريق واحد، من البداية للنهاية",
            title: "من الخيال\nإلى التركيب.",
            lede: "فريق واحد دقيق يمتلك كل قرار - من أول عرض ثلاثي الأبعاد واقعي إلى الدرج النهائي المحاذي.",
            discuss: "ناقش مشروعك",
            items: [
                {
                    number: "01",
                    title: "التصميم والتصور ثلاثي الأبعاد",
                    body: "تتيح لك تصاميم CAD الواقعية الموافقة على المواد والإضاءة والقرارات المكانية قبل بدء العمل في الموقع."
                },
                {
                    number: "02",
                    title: "التجهيز والموافقات",
                    body: "تنسيق مفصل، وتقديمات للسلطات، وموافقات بلدية دبي وشهادات عدم الممانعة تدار بالكامل."
                },
                {
                    number: "03",
                    title: "التصنيع المخصص",
                    body: "مطابخ مخصصة وخزائن وأنظمة جدران وأثاث يتم إنتاجه في منشأتنا الخاصة البالغة مساحتها 15,000 قدم مربع."
                }
            ]
        },
        studioSection: {
            micro: "استوديونا",
            title: "بنيت هنا.\nركبت بجمال.",
            intro: "تمنح منشأة التصنيع الخاصة بنا البالغة مساحتها 15,000 قدم مربع المصممين والصناع حرية حل التفاصيل المخصصة داخلياً - دون المساومة على المفهوم في الموقع.",
            seeHow: "شاهد كيف نعمل",
            facts: [
                {
                    strong: "15,000",
                    span: "قدم مربع مساحة منشأة التصنيع"
                },
                {
                    strong: "1:1",
                    span: "تحكم من التصميم إلى الإنتاج"
                },
                {
                    strong: "الإمارات",
                    span: "تسليم في دبي وأبوظبي"
                }
            ]
        },
        sectorsSection: {
            micro: "مساحات نشكلها",
            title: "مصممة حول\nكيف تتكشف الحياة.",
            explore: "استكشف هذا القطاع",
            items: [
                {
                    label: "فلل فاخرة",
                    body: "منازل خاصة مبنية حول مواد طبيعية، ونسب سخية وطقوس الحياة اليومية."
                },
                {
                    label: "مكاتب تنفيذية",
                    body: "مساحات عمل مضمونة حيث يعمل الراحة الصوتية، ووجود العلامة التجارية وتدفق العمل كواحد."
                },
                {
                    label: "العيش الذكي",
                    body: "ستائر Somfy الآلية المخفية وضوابط مدمجة مصممة في الهندسة المعمارية من اليوم الأول."
                }
            ]
        },
        projectsSection: {
            micro: "أعمال مختارة",
            title: "مساحات مع\nوجهة نظر.",
            tools: "مساكن خاصة ومساحات عمل مصممة للطريقة التي يعيش ويعمل بها عملاؤنا بالفعل.",
            items: [
                {
                    title: "منزل القناة",
                    place: "قناة دبي المائية",
                    type: "سكن خاص"
                },
                {
                    title: "مكتب المسبك",
                    place: "مركز دبي المالي العالمي، دبي",
                    type: "مساحة عمل"
                },
                {
                    title: "فيلا كورتيارد",
                    place: "السعديات، أبوظبي",
                    type: "سكن خاص"
                },
                {
                    title: "جناح أتيليه",
                    place: "وسط مدينة دبي",
                    type: "مفهوم التصميم"
                }
            ]
        },
        capabilitiesSection: {
            micro: "الميزة تكمن في التفاصيل",
            title: "التعقيد،\nيدار بهدوء.",
            items: [
                [
                    "تصاميم CAD ثلاثية الأبعاد واقعية",
                    "قرارات تتخذ بوضوح، قبل البناء."
                ],
                [
                    "موافقات بلدية دبي وشهادات عدم الممانعة",
                    "تقديمات للسلطات تدار بدون نهايات فضفاضة."
                ],
                [
                    "أتمتة Somfy",
                    "ستائر آلية مدمجة ومخفية ومفوضة."
                ],
                [
                    "نجارة مخصصة",
                    "قطع فريدة تصنع وتنهى تحت سقفنا."
                ]
            ]
        },
        processSection: {
            micro: "رحلة مسيطر عليها",
            title: "أربع مراحل.\nفريق واحد مسؤول.",
            items: [
                [
                    "اكتشف",
                    "مراجعة الموقع، موجز، أولويات وتوافق الاستثمار."
                ],
                [
                    "تصور",
                    "خطط، مواد وتصاميم CAD ثلاثية الأبعاد واقعية."
                ],
                [
                    "اعتمد",
                    "حزم تقنية، تنسيق مع بلدية دبي وشهادات عدم الممانعة."
                ],
                [
                    "اصنع",
                    "إنتاج النجارة، التجهيز، التركيب وتسليم مدروس."
                ]
            ]
        },
        contactSection: {
            mainHeading: "لنتحدث",
            heading: "أنا أتقدم لـ",
            types: [
                "نموذج المشروع",
                "نموذج المشتريات",
                "الوظائف"
            ],
            placeholders: {
                fullName: "الاسم الكامل",
                email: "البريد الإلكتروني",
                mobile: "رقم الجوال",
                selectCountry: "اختر الدولة",
                applyingFor: "التقدم لـ",
                linkedin: "رابط LinkedIn",
                message: "اكتب رسالتك هنا",
                jobTitle: "المسمى الوظيفي",
                phone: "الهاتف",
                companyName: "اسم الشركة",
                companyDomain: "اسم مجال الشركة (URL)",
                companyPhone: "هاتف الشركة",
                companyEmail: "البريد الإلكتروني للشركة",
                companyLinkedin: "صفحة LinkedIn للشركة",
                companyAddress: "عنوان شارع الشركة",
                city: "المدينة",
                region: "المنطقة",
                description: "الوصف",
                emailAddress: "عنوان البريد الإلكتروني",
                phoneNumber: "رقم الهاتف",
                whatToCreate: "ماذا تود أن تنشئ؟"
            },
            countries: [
                "الإمارات",
                "السعودية",
                "أخرى"
            ],
            locations: [
                "دبي",
                "أبوظبي",
                "الإمارات الأخرى"
            ],
            contactPerson: "تفاصيل جهة الاتصال",
            companyDetails: "تفاصيل الشركة",
            uploadCV: "رفع السيرة الذاتية",
            sendRequest: "إرسال الطلب",
            success: "شكراً لك - تم إرسال طلبك."
        },
        footer: {
            newsletter: "النشرة الإخبارية",
            headline: "سجل لتلقي\nآخر الأخبار والتحديثات!",
            emailLabel: "البريد الإلكتروني",
            emailPlaceholder: "أدخل بريدك الإلكتروني",
            subscribe: "اشتراك",
            explore: "استكشف",
            exploreLinks: [
                "الرئيسية",
                "من نحن",
                "المشاريع",
                "الخدمات",
                "اتصل بنا"
            ],
            importantLinks: "روابط مهمة",
            importantLinksItems: [
                "الاستدامة والصحة والسلامة",
                "الاتصال والمواقع",
                "شهادات العملاء"
            ],
            contactInfo: "معلومات الاتصال",
            loc: "دبي، الإمارات:",
            backToTop: "العودة للأعلى",
            privacy: "سياسة الخصوصية",
            copy: "حقوق الطبع والنشر © 2026 بيت الإبداع. جميع الحقوق محفوظة."
        }
    }
};
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__06hixrk._.js.map