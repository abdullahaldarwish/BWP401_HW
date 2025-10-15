/* ************************************************************************************************************************* */
/* ************************************************************************************************************************* */
/* تبديل اللغات */

const LANGUAGE_KEY = "site-language";

if (localStorage.getItem(LANGUAGE_KEY) === null) {
  localStorage.setItem(LANGUAGE_KEY, "ar");
}

const savedLanguage = localStorage.getItem(LANGUAGE_KEY);

const initialLanguage = savedLanguage ? savedLanguage : "ar";

window.addEventListener("DOMContentLoaded", () => {
  setLanguage(initialLanguage);
});

document
  .getElementById("lang-en")
  .addEventListener("click", () => setLanguage("en"));
document
  .getElementById("lang-ar")
  .addEventListener("click", () => setLanguage("ar"));

function setLanguage(lang) {
  localStorage.setItem(LANGUAGE_KEY, lang);
  const elements = document.querySelectorAll("[data-key]");
  elements.forEach((el) => {
    const key = el.getAttribute("data-key");
    el.textContent = translations[lang][key];
  });
  if (window.location.href.includes("events.html")) {
    initEventsPage(lang);
  }
  if (window.location.href.includes("eventdetails.html")) {
    initEventDetailsPage(lang);
  }
}

const translations = {
  ar: {
    home: "الرئيسية",
    events: "الفعاليات",
    eventdetails: "تفاصيل الفعالية",
    about: "من نحن",
    contact_us: "تواصل معنا",
    title: "فعاليات سورية",
    sy_act: "فعالية سورية",
    discover_events: "استكشف الفعاليات",
    discover_p_m:
      "اكتشف مجموعة متنوعة من الفعاليات المثيرة في مختلف المجالات والمواقع",
    about_p: "ربط المجتمعات من خلال تجارب لا تُنسى",

    discover_main_1: "اكتشف أفضل الفعاليات في سورية",
    discover_main_2:
      "من الحفلات الموسيقية إلى المؤتمرات، نحن نجعل مدينتك تتألق مع تجارب فريدة ولحظات",
    discover_events: "استكشف الفعاليات",
    create_event: "أنشئ فعالية",
    unique_events: "الفعاليات المميزة",
    upcoming_events: "الفعاليات القادمة",
    view_all_events: "عرض جميع الفعاليات",

    discover_basedon_section: "استكشف الفعاليات حسب الأقسام",

    events_filter: "تصفية الفعاليات",
    search: "بحث",

    section: "القسم",
    all_events: "جميع الفعاليات",
    all_sections: "جميع الأقسام",
    music: "الموسيقى",
    arts: "الفنون",
    sports: "الرياضة",
    food: "الطعام",
    tech: "التكنولوجيا",
    education: "التعليم",

    sprots_p: "استمتع بأحداث رياضية مثيرة، من مباريات محلية إلى بطولات عالمية.",
    arts_p: "اكتشف معارض فنية وورش عمل إبداعية مع فنانين موهوبين.",
    music_p: "استمع إلى حفلات موسيقية متنوعة تغطي مختلف الأذواق والأنماط.",
    tech_p: "شارك في مؤتمرات وهاكاثونات تكنولوجية مع خبراء الصناعة.",
    food_p: "انضم إلى فعالية لذيذة تجمع النكهات والإبداع في عالم الطعام.",
    all_events_p: "استعرض جميع الفعاليات المتاحة حسب تاريخها أو موقعها.",

    date: "التاريخ",
    location: "الموقع",
    reset: "إعادة تعيين",

    available_events: "الفعاليات المتاحة",

    mission: "مهمتنا",
    mission_p1:
      "تأسست فعاليات سورية في عام 2025 بمهمة بسيطة: مساعدة الناس على اكتشاف والتواصل مع الفعاليات في مجتمعهم المحلي.",
    mission_p2:
      "نحن نؤمن بأن حضور الفعاليات هو أحد أفضل الطرق لبناء المجتمع، وتعلم أشياء جديدة، وخلق ذكريات",
    mission_p3:
      "اليوم، نحن نخدم أكثر من 10 مدينة في جميع أنحاء البلاد، مما يساعد الملايين من الناس على العثور على الفعاليات التي تتطابق مع اهتماماتهم. من التجمعات المحلية الصغيرة إلى المهرجانات الكبيرة، نحن ملتزمون بجعل اكتشاف الفعاليات سهلاً وممتعاً",

    stay_informed: "ابقَ على اطلاع",
    newsletter:
      "اشترك في نشرتنا البريدية لتكون أول من يعرف عن الفعاليات القادمة والعروض",
    subscribe: "اشتراك",
    privacy_note:
      "نحن نحترم خصوصيتك. لن نشارك بريدك الإلكتروني مع أي طرف ثالث.",

    whatwedo: "ما نفعله",
    whatwedo_p: "نوفر منصة شاملة لاكتشاف الفعاليات والتسجيل فيها ومشاركتها",
    recommendations: "توصيات فعاليات مخصصة",
    recommendations_p:
      "نقدم توصيات فعاليات مخصصة بناءً على اهتماماتك وتفضيلاتك.",
    filtering: "خيارات بحث وتصفية متقدمة",
    filtering_p:
      "استخدم خيارات البحث والتصفية المتقدمة للعثور على الفعاليات المثالية لك.",
    byingtickets: "شراء تذاكر آمن",
    byingtickets_p: "نوفر عملية شراء تذاكر وتسجيل آمنة وسهلة للفعاليات.",
    reminders: "تقويم فعاليات شخصي",
    reminders_p: "أنشئ تقويم فعاليات شخصي مع تذكيرات حتى لا تفوت أي فعالية.",
    social: "ميزات اجتماعية",
    social_p: "شاهد الفعاليات التي يحضرها أصدقاؤك وشارك فعالياتك معهم.",
    organizetools: "أدوات للمنظمين",
    organizetools_p: "نوفر أدوات شاملة لمنظمي الفعاليات للترويج لفعالياتهم.",

    ourcities: "المدن التي نخدمها",
    activeusers: "المستخدمون النشطون",
    monthly: "فعاليات شهرية",

    ourteam: "تعرف على فريقنا",
    ourteam_p: "محترفون مخلصون يعملون معًا لتحقيق التميز",

    stay_in_touch: "ابق على تواصل",
    stay_in_touch_p:
      "هل لديك أسئلة أو تريد التواصل؟ يمكنك الوصول إلينا عبر أي من هذه القنوات:",
    location2: "دمشق - ساحة الحافظة - بناية رقم 12",
    follow_us: "تابعنا على وسائل التواصل",
    send_a_message: "أرسل لنا رسالة",
    fullname: "الاسم الكامل",
    email: "البريد الإلكتروني",
    message: "الرسالة",
    send_message: "إرسال الرسالة",

    discover_p_f:
      "اكتشف واحضر أفضل الفعاليات في مدينتك. من الحفلات الموسيقية إلى المؤتمرات، نحن نجعل مدينتك تتألق مع تجارب فريدة ولحظات لا تُنسى.",
    quick_links: "روابط سريعة",
    sections: "الأقسام",
    damascus_address: "دمشق - ساحة الحافظة",
    all_rights: "حقوق النشر &copy; 2025 - جميع الحقوق محفوظة",
    privacy_policy: "سياسة الخصوصية",
    terms_of_service: "شروط الخدمة",
    rating: "تقييم",
  },
  en: {
    home: "Home",
    events: "Events",
    eventdetails: "Event Details",
    about: "About Us",
    contact_us: "Contact Us",
    title: "Syrian Events",
    sy_act: "Syrian Event",
    discover_events: "Discover Events",
    discover_p_m:
      "Discover a variety of exciting events in different fields and locations.",
    about_p: "Connecting communities through unforgettable experiences",

    discover_main_1: "Discover the best events in Syria",
    discover_main_2:
      "From concerts to conferences, we make your city shine with unique experiences and moments",
    discover_events: "Explore Events",
    create_event: "Create an Event",
    unique_events: "Unique Events",
    upcoming_events: "Upcoming Events",
    view_all_events: "View All Events",

    discover_basedon_section: "Explore events by section",

    events_filter: "Event Filter",
    search: "Search",

    section: "Section",
    all_sections: "All Sections",
    all_events: "All Events",
    music: "Music",
    arts: "Arts",
    sports: "Sports",
    food: "Food",
    tech: "Technology",
    education: "Education",

    date: "Date",
    location: "Location",
    reset: "Reset",

    available_events: "Available Events",

    mission: "Our Mission",
    mission_p1:
      "Syria Events was founded in 2025 with a simple mission: to help people discover and connect with events in their local community.",
    mission_p2:
      "We believe that attending events is one of the best ways to build community, learn new things, and create memories.",
    mission_p3:
      "Today, we serve more than 10 cities across the country, helping millions of people find events that match their interests. From small local gatherings to large-scale festivals, we're committed to making event discovery easy and fun.",

    stay_informed: "Stay informed",
    newsletter:
      "Subscribe to our newsletter to be the first to know about upcoming events and offers",
    subscribe: "Subscribe",
    privacy_note:
      "We respect your privacy. We will not share your email address with any third party.",

    whatwedo: "What we do",
    whatwedo_p:
      "We provide a comprehensive platform for discovering, registering, and sharing events",
    recommendations: "Personalized event recommendations",
    recommendations_p:
      "We provide personalized event recommendations based on your interests and preferences.",
    filtering: "Advanced search and filtering options",
    byingtickets: "Secure ticket purchasing",
    byingtickets_p:
      "We provide a secure and easy ticket purchasing and registration process for events.",
    reminders: "Personal Event Calendar",
    reminders_p:
      "Create a personal event calendar with reminders so you never miss an event.",
    social: "Social Features",
    social_p:
      "See which events your friends are attending and share your events with them.",
    organizetools: "Tools for Organizers",
    organizetools_p:
      "We provide comprehensive tools for event organizers to promote their events.",

    ourcities: "Our Cities We Serve",
    activeusers: "Active Users",
    monthly: "Monthly Events",

    ourteam: "Get to know our team",
    ourteam_p:
      "Dedicated professionals working together to achieve excellence.",

    stay_in_touch: "Stay in Touch",
    stay_in_touch_p:
      "Do You Have Any Questions or You Want To Contact Us? You can reach us from any of these channels",
    location2: "Damascus - Al-Hafza Square - Block number 12",
    follow_us: "Follow Us in Social Media",
    send_a_message: "Send Us a Message",
    fullname: "Full Name",
    email: "Email",
    message: "The Message",
    send_message: "Send The message",

    discover_p_f:
      "Discover and attend the best events in your city. From concerts to conferences, we make your city shine with unique experiences and unforgettable moments.",
    quick_links: "Quick Links",
    sections: "Sections",
    damascus_address: "Damascus - Al-Hafza Square",
    all_rights: "Copyright &copy; 2025 - All Rights Reserved",
    privacy_policy: "Privacy Policy",
    terms_of_service: "Terms of Service",
    rating: "Rating",
  },
};
/* ************************************************************************************************************************* */

/* dark and light mode */

const THEME_KEY = "site-theme";

const savedTheme = localStorage.getItem(THEME_KEY);

function systemPrefersDark() {
  return window.matchMedia("(prefers-color-scheme: dark)").matches;
}

const initialTheme = savedTheme
  ? savedTheme
  : systemPrefersDark()
  ? "dark"
  : "light";

document.documentElement.setAttribute("data-bs-theme", initialTheme);
document.documentElement.setAttribute("data-theme", initialTheme);

const themeSwitch = document.getElementById("themeToggleSwitch");

if (themeSwitch) {
  themeSwitch.checked = initialTheme === "dark";

  themeSwitch.addEventListener("change", () => {
    const newTheme = themeSwitch.checked ? "dark" : "light";
    document.documentElement.setAttribute("data-bs-theme", newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem(THEME_KEY, newTheme);

    const icon = themeSwitch.nextElementSibling.querySelector("i");
    if (icon) {
      icon.className =
        newTheme === "dark" ? "bi bi-sun-fill" : "bi bi-moon-fill";
    }
  });

  const icon = themeSwitch.nextElementSibling.querySelector("i");
  if (icon) {
    icon.className =
      initialTheme === "dark" ? "bi bi-sun-fill" : "bi bi-moon-fill";
  }
}

/* ************************************************************************************************************************* */
/* ************************************************************************************************************************* */
/* زر العودة إلى الأعلى */

const backToTopButton = document.getElementById("backToTop");

window.addEventListener("scroll", function () {
  if (window.pageYOffset > 300) {
    backToTopButton.classList.add("show", "pulse");
  } else {
    backToTopButton.classList.remove("show", "pulse");
  }
});

backToTopButton.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

/* ************************************************************************************************************************* */
/* ************************************************************************************************************************* */
/* الفعاليات */

const eventsData = [
  {
    id: 1,
    title: {
      ar: "مهرجان دمشق للموسيقى التقليدية",
      en: "Damascus Festival of Traditional Music",
    },
    date: "2025-10-05",
    time: "18:00",
    endTime: "22:30",
    location: { ar: "دار الأوبرا - دمشق", en: "Opera House - Damascus" },
    category: "Music",
    image: "assets/images/events_photo/Music/id_1/Mid_1_1.jpg",
    description: {
      ar: "أمسيات لموسيقى الطرب والمقامات التقليدية بأداء فرق محلية.",
      en: "Evenings of traditional music and maqamat performed by local bands.",
    },
    longDescription: {
      ar: `
    <p>ليلة تحتفي بالموروث الموسيقي السوري: أنغام الطرب والمقامات الشرقية، وعروض لفرق من دمشق وحلب.</p>
    <h3>البرنامج</h3>
    <ul>
      <li>18:00 - افتتاح ومرابط ترحيبية</li>
      <li>19:00 - فرقة العزف التقليدي</li>
      <li>20:30 - فنان/ة ضيف/ة</li>
    </ul>
    <h3>أنظمة وقوانين</h3>
    <ul>
      <li>الحضور مسموح لجميع الأعمار.</li>
      <li>ممنوع إدخال المشروبات أو الأطعمة داخل القاعة.</li>
      <li>يُمنع التصوير بالفلاش أثناء العروض.</li>
    </ul>
    <p>هذه الأمسية تذكّرنا بعراقة موسيقانا التي شكّلت هوية السوريين عبر الأجيال.</p>
  `,
      en: `<p>A night celebrating Syrian musical heritage: Tarab melodies and oriental maqams, and performances by bands from Damascus and Aleppo.</p>
    <h3>The Program</h3>
    <ul>
      <li>18:00 - Opening and welcome links</li>
      <li>19:00 - Traditional playing band</li>
      <li>20:30 - Guest artist</li>
    </ul>
    <h3>Rules and regulations</h3>
    <ul>
      <li>All ages are welcome.</li>
      <li>No food or drinks are allowed inside the hall.</li>
      <li>Flash photography is prohibited during performances.</li>
    </ul>
    <p>This evening reminds us of the authenticity of our music, which has shaped the identity of Syrians across generations.</p>`,
    },
    rating: 4.6,
    reviews: 54,
    mapEmbedUrl: "assets/images/events_photo/Music/id_1/id_1.png",
    galleryImages: [
      "assets/images/events_photo/Music/id_1/Mid_1_1.jpg",
      "assets/images/events_photo/Music/id_1/Mid_1_2.jpg",
      "assets/images/events_photo/Music/id_1/Mid_1_3.png",
      "assets/images/events_photo/Music/id_1/Mid_1_4.jpg",
    ],
  },
  {
    id: 2,
    title: {
      ar: "أمسية القدود الحلبية والفلكلور",
      en: "Aleppo Qudud and Folklore Night",
    },
    date: "2025-11-12",
    time: "20:00",
    endTime: "23:00",
    location: {
      ar: "مدرج قلعة حلب - حلب",
      en: "Citadel Amphitheater - Aleppo",
    },
    category: "Music",
    image: "assets/images/events_photo/Music/id_2/Mid_2_1.jpg",
    description: {
      ar: "سهرة تراثية تجمع القدود الحلبية مع عروض دبكة وأداء آلات شرقية.",
      en: "A traditional evening combining Aleppo Qudud with Dabke performances and oriental instrumentals.",
    },
    longDescription: {
      ar: `
    <p>أمسية تعكس أصالة حلب، مدينة القدود والمقامات. عروض لفرق شبابية تعيد تقديم القدود الحلبية والأغاني التراثية بصوت معاصر يحافظ على هويتنا.</p>
    <p>تتخلل السهرة لوحات دبكة، وأداء على العود والقانون والناي، مع لمسة حداثة تضيف روحاً جديدة دون أن تفقد التراث معناه.</p>
    <h3>البرنامج</h3>
    <ul>
      <li>20:00 - افتتاح مع وصلة قدود كلاسيكية</li>
      <li>21:00 - عرض دبكة شعبية</li>
      <li>22:00 - أداء جماعي يمزج التراث بالحداثة</li>
    </ul>
    <h3>أنظمة وقوانين</h3>
    <ul>
      <li>الحفاظ على أجواء الاحترام والهدوء أثناء الوصلات الغنائية.</li>
      <li>التصوير الشخصي مسموح لكن بدون إعاقة العرض.</li>
    </ul>
    <p>فعالية تعزز الفخر الوطني وتؤكد أن الموسيقى السورية ستبقى صوت حضارتها وعاداتها.</p>
  `,
      en: `<p>An evening that reflects the authenticity of Aleppo, the city of qudud and maqamat. Performances by youth groups re-presenting Halabi qudud and traditional songs with a contemporary voice that preserves our identity.</p>
    <p>The evening will feature dabke performances, oud, qanun, and nay, with a modern touch that adds a fresh spirit without sacrificing the traditional meaning.</p>
    <h3>The program</h3>
    <ul>
      <li>20:00 - Opening with a classic string connection</li>
      <li>21:00 - Popular Dabke show</li>
      <li>22:00 - A group performance that blends heritage with modernity.</li>
    </ul>
    <h3>Regulations and laws</h3>
    <ul>
      <li>Maintain a respectful and calm atmosphere during singing sessions.</li>
      <li>Personal photography is permitted but must not obstruct the view.</li>
    </ul>
    <p>An event that enhances national pride and affirms that Syrian music will remain the voice of its civilization and customs.</p>`,
    },
    rating: 4.8,
    reviews: 64,
    mapEmbedUrl: "assets/images/events_photo/Music/id_2/id_2.png",
    galleryImages: [
      "assets/images/events_photo/Music/id_2/Mid_2_1.jpg",
      "assets/images/events_photo/Music/id_2/Mid_2_2.jpg",
      "assets/images/events_photo/Music/id_2/Mid_2_3.jpg",
      "assets/images/events_photo/Music/id_2/Mid_2_4.jpg",
    ],
  },
  {
    id: 3,
    title: {
      ar: "معرض فنون دمشق المعاصرة",
      en: "Damascus Contemporary Art Exhibition",
    },
    date: "2025-10-20",
    time: "10:00",
    endTime: "18:00",
    location: {
      ar: "المعرض الوطني - دمشق",
      en: "National Gallery - Damascus",
    },
    category: "Art",
    image: "assets/images/events_photo/Art/id_3/Aid_3_1.jpg",
    description: {
      ar: "معرض يضم أعمالاً تشكيليّة ومعارض نحت لفنانين سوريين معاصرين.",
      en: "An exhibition showcasing contemporary Syrian artists' paintings and sculptures.",
    },
    longDescription: {
      ar: `
      <p>معرض يعرض أعمال تشكيليّة، لوحات، ونحت لعدة فنانين من مختلف المحافظات السورية.</p>
      <h3>الفعاليات المصاحبة</h3>
      <ul>
        <li>ورش عمل للأطفال في الرسم (ساعة ونصف)</li>
        <li>جولة مع المرشدين للتعريف بالأعمال</li>
      </ul>
      <h3>أنظمة وقوانين</h3>
      <ul>
        <li>ممنوع لمس الأعمال المعروضة حفاظاً على سلامتها.</li>
        <li>التصوير الشخصي مسموح بدون فلاش داخل الصالات.</li>
      </ul>
      <h3>ملاحظات</h3>
      <p>دخول المعرض مجاني في يوم الافتتاح، ويوجد كشك لبيع الأعمال الصغيرة والهدايا.</p>
    `,
      en: `<p>An exhibition displaying visual arts, paintings, and sculptures by several artists from various Syrian governorates.</p>
      <h3>Accompanying events</h3>
      <ul>
        <li>Drawing workshops for children (1.5 hours)</li>
        <li>Guided tour of the works</li>
      </ul>
      <h3>Regulations and laws</h3>
      <ul>
        <li>Touching the works on display is prohibited for their safety.</li>
        <li>Personal photography without flash is allowed inside the halls.</li>
      </ul>
      <h3>Notes</h3>
      <p>Entry to the exhibition is free on opening day, and there is a booth selling small works and gifts.</p>`,
    },
    rating: 4.5,
    reviews: 80,
    mapEmbedUrl: "assets/images/events_photo/Art/id_3/id_3.png",
    galleryImages: [
      "assets/images/events_photo/Art/id_3/Aid_3_1.jpg",
      "assets/images/events_photo/Art/id_3/Aid_3_2.jpg",
      "assets/images/events_photo/Art/id_3/Aid_3_3.jpg",
      "assets/images/events_photo/Art/id_3/Aid_3_4.jpg",
    ],
  },
  {
    id: 4,
    title: {
      ar: "معرض اللوحات التراثية في تدمر",
      en: "Palmyra Heritage Paintings Exhibition",
    },
    date: "2025-11-02",
    time: "09:00",
    endTime: "17:00",
    location: {
      ar: "المسرح الروماني - تدمر",
      en: "Roman Theater - Palmyra",
    },
    category: "Art",
    image: "assets/images/events_photo/Art/id_4/Aid_4_1.jpg",
    description: {
      ar: "عرض لوحات مستوحاة من التراث والتاريخ البدوي لمحافظة تدمر.",
      en: "An exhibition of paintings inspired by the heritage and Bedouin history of the Palmyra region.",
    },
    longDescription: {
      ar: `
      <p>معرض يركز على الصور واللوحات التي تستلهم من تراث تدمر والمعالم الأثرية المحيطة.</p>
      <h3>الورش</h3>
      <ul>
        <li>ورش عمل في تقنيات الرسم بالألوان الطبيعية</li>
        <li>جلسة حوار مع فناني المنطقة عن المحافظة على التراث</li>
      </ul>
      <h3>أنظمة وقوانين</h3>
      <ul>
        <li>إحترام حقوق الملكية على الأعمال وشرائها فقط من المنظمين.</li>
        <li>التزام زوار المعرض بالتعليمات حفاظاً على سلامة الأعمال الأثرية.</li>
      </ul>
    `,
      en: `<p>An exhibition focusing on photographs and paintings inspired by the heritage of Palmyra and the surrounding archaeological sites.</p>
      <h3>Workshops</h3>
      <ul>
        <li>Workshops in natural color drawing techniques</li>
        <li>A dialogue session with regional artists about heritage preservation</li>
      </ul>
      <h3>Regulations and laws</h3>
      <ul>
        <li>Respect the intellectual property rights of works and purchase them only from the organizers.</li>
        <li>Exhibition visitors must adhere to instructions to preserve the safety of the archaeological works.</li>
      </ul>`,
    },
    rating: 4.4,
    reviews: 30,
    mapEmbedUrl: "assets/images/events_photo/Art/id_4/id_4.png",
    galleryImages: [
      "assets/images/events_photo/Art/id_4/Aid_4_1.jpg",
      "assets/images/events_photo/Art/id_4/Aid_4_2.png",
      "assets/images/events_photo/Art/id_4/Aid_4_3.jpg",
      "assets/images/events_photo/Art/id_4/Aid_4_4.jpg",
    ],
  },
  {
    id: 5,
    title: { ar: "ماراثون اللاذقية السنوي", en: "Latakia Annual Marathon" },
    date: "2025-10-11",
    time: "07:00",
    endTime: "12:00",
    location: { ar: "كورنيش اللاذقية", en: "Latakia Corniche" },
    category: "Sports",
    image: "assets/images/events_photo/Sports/id_5/Sid_5_1.jpg",
    description: {
      ar: "ماراثون مفتوح للجمهور بمسافات متنوعة للمشي والركض.",
      en: "An open marathon with various walking and running distances for the public.",
    },
    longDescription: {
      ar: `
      <p>سباق على كورنيش اللاذقية بمسافات 5 كم، 10 كم ونصف ماراثون. فعاليات عائلية ومناطق دعم للمشتركين.</p>
      <h3>مواعيد ونقاط التجمع</h3>
      <ul>
        <li>التحقق من التسجيل يبدأ الساعة 05:30</li>
        <li>خط البداية الساعة 07:00</li>
      </ul>
      <h3>أنظمة وقوانين</h3>
      <ul>
        <li>يلزم التسجيل المسبق لاستلام الشارة.</li>
        <li>المشاركون يوافقون على شروط السلامة والطبية للفعالية.</li>
      </ul>
      <h3>ملاحظات</h3>
      <p>يوجد نقاط إسعاف وماء على طول المسار؛ ينصح بإحضار مستلزمات الحماية من الشمس.</p>
    `,
      en: `<p>A 5km, 10km, and half-marathon race on the Latakia Corniche. Family activities and support areas for participants.</p>
      <h3>Appointments and meeting points</h3>
      <ul>
        <li>Registration verification starts at 05:30</li>
        <li>Starting line time 07:00</li>
      </ul>
      <h3>Regulations and laws</h3>
      <ul>
        <li>Pre-registration is required to receive the badge.</li>
        <li>Participants agree to the safety and medical conditions of the event.</li>
      </ul>
      <h3>Notes</h3>
      <p>There are first aid points and water along the trail; it is recommended to bring sun protection.</p>`,
    },
    rating: 4.2,
    reviews: 102,
    mapEmbedUrl: "assets/images/events_photo/Sports/id_5/id_5.png",
    galleryImages: [
      "assets/images/events_photo/Sports/id_5/Sid_5_1.jpg",
      "assets/images/events_photo/Sports/id_5/Sid_5_2.jpg",
      "assets/images/events_photo/Sports/id_5/Sid_5_3.jpg",
      "assets/images/events_photo/Sports/id_5/Sid_5_4.png",
    ],
  },
  {
    id: 6,
    title: {
      ar: "بطولة طرطوس لكرة الشاطئ",
      en: "Tartus Beach Soccer Tournament",
    },
    date: "2025-08-30",
    time: "09:00",
    endTime: "17:00",
    location: { ar: "شاطئ طرطوس", en: "Tartus Beach" },
    category: "Sports",
    image: "assets/images/events_photo/Sports/id_6/Sid_6_1.jpg",
    description: {
      ar: "بطولة ودية لفِرق كرة الشاطئ بمشاركة فرق محلية وإقليمية.",
      en: " A friendly beach soccer tournament featuring local and regional teams.",
    },
    longDescription: {
      ar: `
      <p>يشارك في البطولة فرق محلية للمنافسة في كرة الشاطئ ضمن نظام مبسط وممتع للجمهور.</p>
      <h3>البرنامج</h3>
      <ul>
        <li>دورات تأهيل صباحية للشباب</li>
        <li>مباريات تحديد المراكز مساءً</li>
      </ul>
      <h3>أنظمة وقوانين</h3>
      <ul>
        <li>الالتزام بقوانين الاتحاد المحلي لكرة الطائرة الشاطئية.</li>
        <li>يفضل ارتداء معدات الحماية الرياضية المناسبة.</li>
      </ul>
    `,
      en: `<p>The tournament features local teams competing in beach volleyball in a simplified and entertaining format for the public.</p>
      <h3>The program</h3>
      <ul>
        <li>Morning rehabilitation courses for youth</li>
        <li>Position matches in the evening</li>
      </ul>
      <h3>Regulations and laws</h3>
      <ul>
        <li>Adherence to the rules of the local beach volleyball federation.</li>
        <li>It is preferable to wear appropriate sports protective equipment.</li>
      </ul>`,
    },
    rating: 4.0,
    reviews: 18,
    mapEmbedUrl: "assets/images/events_photo/Sports/id_6/id_6.png",
    galleryImages: [
      "assets/images/events_photo/Sports/id_6/Sid_6_1.jpg",
      "assets/images/events_photo/Sports/id_6/Sid_6_2.jpg",
      "assets/images/events_photo/Sports/id_6/sid_6_3.jpg",
      "assets/images/events_photo/Sports/id_6/Sid_6_4.jpg",
    ],
  },
  {
    id: 7,
    title: {
      ar: "قمة ريادة تكنولوجيا دمشق",
      en: "Damascus Tech Entrepreneurship Summit",
    },
    date: "2025-12-03",
    time: "09:30",
    endTime: "17:00",
    location: {
      ar: "مركز المؤتمرات - دمشق",
      en: "Conference Center - Damascus",
    },
    category: "Technology",
    image: "assets/images/events_photo/Technology/id_7/Tid_7_1.jpg",
    description: {
      ar: "مؤتمر ليوم كامل حول الابتكار وريادة الأعمال التقنية في سوريا.",
      en: " A full-day conference on innovation and tech entrepreneurship in Syria.",
    },
    longDescription: {
      ar: `
      <p>قمة تجمع رواد أعمال وفرق ناشئة وعروض مشاريع تقنية ومحاضرات عن الابتكار وريادة الأعمال.</p>
      <h3>الفقرات</h3>
      <ul>
        <li>جلسات عرض مشاريع (Pitch)</li>
        <li>ورش عمل عن تصميم المنتجات وبناء النماذج الأولية</li>
      </ul>
      <h3>أنظمة وقوانين</h3>
      <ul>
        <li>يحظر الترويج لمنتجات تخالف القوانين المحلية.</li>
        <li>يُطلب احترام سياسات الخصوصية عند جمع بيانات الحاضرين.</li>
      </ul>
    `,
      en: `<p>A summit bringing together entrepreneurs and startup teams, showcasing tech projects, and giving lectures on innovation and entrepreneurship.</p>
      <h3>The events</h3>
      <ul>
        <li>Pitch sessions</li>
        <li>Product design and prototyping workshops</li>
      </ul>
      <h3>Regulations and laws</h3>
      <ul>
        <li>Promoting products that violate local laws is prohibited.</li>
        <li>Privacy policies are required when collecting attendee data.</li>
      </ul>`,
    },
    rating: 4.7,
    reviews: 65,
    mapEmbedUrl: "assets/images/events_photo/Technology/id_7/id_7.png",
    galleryImages: [
      "assets/images/events_photo/Technology/id_7/Tid_7_1.jpg",
      "assets/images/events_photo/Technology/id_7/Tid_7_2.jpg",
      "assets/images/events_photo/Technology/id_7/Tid_7_3.jpg",
      "assets/images/events_photo/Technology/id_7/Tid_7_4.jpg",
    ],
  },
  {
    id: 8,
    title: {
      ar: "هاكاثون حلب للتقنية والذكاء الاصطناعي",
      en: "Aleppo Tech & AI Hackathon",
    },
    date: "2025-10-25",
    time: "10:00",
    endTime: "20:00",
    location: { ar: "مركز الابتكار - حلب", en: "Innovation Center - Aleppo" },
    category: "Technology",
    image: "assets/images/events_photo/Technology/id_8/Tid_8_1.jpg",
    description: {
      ar: "هاكاثون لمدة يوم واحد لتطوير حلول تقنية محلية باستخدام الذكاء الاصطناعي.",
      en: "A one-day hackathon to develop local tech solutions using AI.",
    },
    longDescription: {
      ar: `
      <p>هاكاثون يركز على تحديات محلية: الزراعة، الصحة، وإدارة الموارد باستخدام نماذج ذكاء اصطناعي بسيطة.</p>
      <h3>الشروط</h3>
      <ul>
        <li>فرق من 2-5 أفراد</li>
        <li>تسليم مشروع تجريبي بنهاية اليوم</li>
      </ul>
      <h3>أنظمة وقوانين</h3>
      <ul>
        <li>جميع الأكواد يجب أن تكون أصلية أو مع الإشارة للمصادر المفتوحة.</li>
        <li>يحظر استخدام بيانات شخصية حساسة دون موافقات واضحة.</li>
      </ul>
    `,
      en: `<p>A hackathon focused on local challenges: agriculture, health, and resource management using simple AI models.</p>
      <h3>Conditions</h3>
      <ul>
        <li>Teams of 2-5 people</li>
        <li>Submit a pilot project by the end of the day.</li>
      </ul>
      <h3>Regulations and laws</h3>
      <ul>
        <li>All codes must be original or with reference to open sources.</li>
        <li>The use of sensitive personal data without explicit consent is prohibited.</li>
      </ul>`,
    },
    rating: 4.6,
    reviews: 44,
    mapEmbedUrl: "assets/images/events_photo/Technology/id_8/id_8.png",

    galleryImages: [
      "assets/images/events_photo/Technology/id_8/Tid_8_1.jpg",
      "assets/images/events_photo/Technology/id_8/Tid_8_2.jpg",
      "assets/images/events_photo/Technology/id_8/Tid_8_3.jpg",
      "assets/images/events_photo/Technology/id_8/Tid_8_4.jpg",
    ],
  },
  {
    id: 9,
    title: {
      ar: "مهرجان طعام حمص - مأكولات شعبية",
      en: "Homs Food Festival - Traditional Cuisine",
    },
    date: "2025-09-28",
    time: "12:00",
    endTime: "22:00",
    location: { ar: "الحديقة المركزية - حمص", en: "Central Park - Homs" },
    category: "Food",
    image: "assets/images/events_photo/Food/id_9/Fid_9_1.jpg",
    description: {
      ar: "أشهى الأطباق الشعبية السورية من أكشاك ومطابخ محلية.",
      en: "Delicious Syrian traditional dishes from local stalls and kitchens.",
    },
    longDescription: {
      ar: `
      <p>مهرجان يعرض مأكولات محلية تقليدية من مختلف مناطق سوريا مع عروض طبخ مباشرة.</p>
      <h3>فعاليات جانبية</h3>
      <ul>
        <li>دروس طبخ قصيرة</li>
        <li>مسابقات تذوق وجوائز</li>
      </ul>
      <h3>أنظمة وقوانين</h3>
      <ul>
        <li>تخضع الأكشاك لفحوصات نظافة وتراخيص بيع الطعام.</li>
        <li>يحظر تقديم أطعمة قد تسبب حساسية دون وسم واضح.</li>
      </ul>
    `,
      en: `<p>A festival showcasing traditional local cuisine from different regions of Syria with live cooking demonstrations.</p>
      <h3>Side events</h3>
      <ul>
        <li>Short cooking lessons</li>
        <li>Tasting competitions and prizes</li>
      </ul>
      <h3>Regulations and laws</h3>
      <ul>
        <li>Stalls are subject to hygiene checks and food sales licenses.</li>
        <li>It is prohibited to serve foods that may cause allergies without clear labeling.</li>
      </ul>`,
    },
    rating: 4.8,
    reviews: 210,
    mapEmbedUrl: "assets/images/events_photo/Food/id_9/id_9.png",
    galleryImages: [
      "assets/images/events_photo/Food/id_9/Fid_9_1.jpg",
      "assets/images/events_photo/Food/id_9/Fid_9_2.jpg",
      "assets/images/events_photo/Food/id_9/Fid_9_3.jpg",
      "assets/images/events_photo/Food/id_9/Fid_9_4.jpg",
    ],
  },
  {
    id: 10,
    title: {
      ar: "سوق الطهاة الشباب - حديقة الأندلس",
      en: "Youth Chefs Market - Al-Andalus Park",
    },
    date: "2025-10-02",
    time: "11:00",
    endTime: "19:00",
    location: {
      ar: "حديقة الأندلس - اللاذقية",
      en: "Al-Andalus Park - Latakia",
    },
    category: "Food",
    image: "assets/images/events_photo/Food/id_10/Fid_10_1.jpg",
    description: {
      ar: "سوق يضم طهاة شباب يقدمون أطباق مبتكرة ومكونات محلية طازجة.",
      en: "Youth chefs market offering innovative dishes and fresh local ingredients.",
    },
    longDescription: {
      ar: `
      <p>يقدم الطهاة الشباب أطباقاً مبتكرة تمزج النكهات المحلية بلمسات عصرية.</p>
      <h3>البرنامج</h3>
      <ul>
        <li>جلسات تذوق محدودة</li>
        <li>عرض لموردي المنتجات المحلية</li>
      </ul>
      <h3>أنظمة وقوانين</h3>
      <ul>
        <li>يُطلب من جميع البائعين الالتزام بمعايير السلامة الغذائية.</li>
        <li>ممنوع بيع منتجات تحتوي كحول أو مواد محظورة.</li>
      </ul>
    `,
      en: `<p>Young chefs present innovative dishes that blend local flavors with modern touches.</p>
      <h3>The program</h3>
      <ul>
        <li>Limited tasting sessions</li>
        <li>Showcase of local product suppliers</li>
      </ul>
      <h3>Regulations and laws</h3>
      <ul>
        <li>All vendors are required to adhere to food safety standards.</li>
        <li>The sale of products containing alcohol or prohibited substances is prohibited.</li>
      </ul>`,
    },
    rating: 4.1,
    reviews: 27,
    mapEmbedUrl: "assets/images/events_photo/Food/id_10/id_10.png",
    galleryImages: [
      "assets/images/events_photo/Food/id_10/Fid_10_1.jpg",
      "assets/images/events_photo/Food/id_10/Fid_10_2.jpg",
      "assets/images/events_photo/Food/id_10/Fid_10_3.jpg",
      "assets/images/events_photo/Food/id_10/Fid_10_4.jpg",
    ],
  },
  {
    id: 11,
    title: {
      ar: "ورشة تطوير مهارات البرمجة - دمشق",
      en: "Programming Skills Development Workshop - Damascus",
    },
    date: "2025-11-15",
    time: "09:00",
    endTime: "16:00",
    location: {
      ar: "كلية الهندسة - دمشق",
      en: "Faculty of Engineering - Damascus",
    },
    category: "Education",
    image: "assets/images/events_photo/Education/id_11/Eid_11_1.jpg",
    description: {
      ar: "ورشة عملية لتعلم أساسيات تطوير الويب وأنماط التفكير الخوارزمي.",
      en: "A hands-on workshop to learn web development basics and algorithmic thinking patterns.",
    },
    longDescription: {
      ar: `
      <p>ورشة مكثفة تركز على أساسيات HTML/CSS، مفاهيم الخوارزميات، وأساليب حل المشكلات للطلاب والمبتدئين.</p>
      <h3>محتوى الورشة</h3>
      <ul>
        <li>مقدمة لبناء صفحات الويب</li>
        <li>تمارين برمجية عملية</li>
      </ul>
      <h3>أنظمة وقوانين</h3>
      <ul>
        <li>الحضور يتطلب التسجيل المسبق للمقاعد المحدودة.</li>
        <li>يُشجع حضور الطلاب بشخصيات حقيقية وبيانات تواصل صحيحة لتسليم الشهادات.</li>
      </ul>
    `,
      en: `<p>An intensive workshop focusing on HTML/CSS fundamentals, algorithmic concepts, and problem-solving techniques for students and beginners.</p>
      <h3>Workshop content</h3>
      <ul>
        <li>Introduction to building web pages</li>
        <li>Practical programming exercises</li>
      </ul>
      <h3>Regulations and laws</h3>
      <ul>
        <li>Pre-registration is required for limited seating.</li>
        <li>Students are encouraged to attend with real personalities and correct contact information to receive certificates.</li>
      </ul>`,
    },
    rating: 4.9,
    reviews: 150,
    mapEmbedUrl: "assets/images/events_photo/Education/id_11/id_11.png",
    galleryImages: [
      "assets/images/events_photo/Education/id_11/Eid_11_1.jpg",
      "assets/images/events_photo/Education/id_11/Eid_11_2.jpg",
      "assets/images/events_photo/Education/id_11/Eid_11_3.jpg",
      "assets/images/events_photo/Education/id_11/Eid_11_4.jpg",
    ],
  },
  {
    id: 12,
    title: {
      ar: "سلسلة محاضرات تراثية تعليمية - قلعة حلب",
      en: "Educational Heritage Lecture Series - Aleppo Citadel",
    },
    date: "2025-12-10",
    time: "14:00",
    endTime: "17:00",
    location: {
      ar: "قاعة المحاضرات - قلعة حلب",
      en: "Lecture Hall - Aleppo Citadel",
    },
    category: "Education",
    image: "assets/images/events_photo/Education/id_12/Eid_12_1.jpg",
    description: {
      ar: "محاضرات تثقيفية حول التاريخ والتراث السوري موجهة للطلبة والجمهور.",
      en: "Educational lectures on Syrian history and heritage aimed at students and the public.",
    },
    longDescription: {
      ar: `
      <p>سلسلة محاضرات يقدمها مختصون عن تاريخ المدينة، العمارة، وحفظ التراث الثقافي.</p>
      <h3>المحاور</h3>
      <ul>
        <li>تاريخ حلب العريق</li>
        <li>طرق حفظ التراث وتوثيقه</li>
      </ul>
      <h3>أنظمة وقوانين</h3>
      <ul>
        <li>يغلق باب التسجيل قبل بدء المحاضرة بوقت محدد، الرجاء الحضور مبكراً.</li>
        <li>يُمنع تناول الطعام داخل قاعة المحاضرات حفاظاً على النظافة.</li>
      </ul>
    `,
      en: `<p>A series of lectures presented by specialists on the city's history, architecture, and cultural heritage preservation.</p>
      <h3>themes</h3>
      <ul>
        <li>The ancient history of Aleppo</li>
        <li>Methods of preserving and documenting heritage</li>
      </ul>
      <h3>Regulations and laws</h3>
      <ul>
        <li>Registration closes a specific time before the lecture starts, please arrive early.</li>
        <li>Eating inside the lecture hall is prohibited for hygiene purposes.</li>
      </ul>`,
    },
    rating: 4.5,
    reviews: 38,
    mapEmbedUrl: "assets/images/events_photo/Education/id_12/id_12.png",
    galleryImages: [
      "assets/images/events_photo/Education/id_12/Eid_12_1.jpg",
      "assets/images/events_photo/Education/id_12/Eid_12_2.jpg",
      "assets/images/events_photo/Education/id_12/Eid_12_3.jpg",
      "assets/images/events_photo/Education/id_12/Eid_12_4.jpg",
    ],
  },
];

const categoryTranslations = {
  Music: { ar: "موسيقى", en: "Music" },
  Art: { ar: "فنون", en: "Arts" },
  Sports: { ar: "رياضة", en: "Sports" },
  Technology: { ar: "تكنولوجيا", en: "Technology" },
  Food: { ar: "طعام", en: "Food" },
  Education: { ar: "تعليم", en: "Education" },
};

function generateStars(rating) {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 >= 0.5;
  let stars = "";

  for (let i = 0; i < fullStars; i++) {
    stars += '<i class="bi bi-star-fill text-warning"></i>';
  }

  if (halfStar) {
    stars += '<i class="bi bi-star-half text-warning"></i>';
  }

  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);
  for (let i = 0; i < emptyStars; i++) {
    stars += '<i class="bi bi-star text-warning"></i>';
  }

  return stars;
}

document.addEventListener("DOMContentLoaded", function () {
  if (document.getElementById("eventsContainer")) {
    initEventsPage();
  }

  if (document.getElementById("eventDetailImage")) {
    initEventDetailsPage(initialLanguage);
  }

  if (document.getElementById("eventViewMain")) {
    initEventMainPage();
  }
});

function initEventsPage(lang) {
  const eventsContainer = document.getElementById("eventsContainer");
  const searchInput = document.getElementById("searchInput");
  const categoryFilter = document.getElementById("categoryFilter");
  const dateFilter = document.getElementById("dateFilter");
  const locationFilter = document.getElementById("locationFilter");
  const resetFilters = document.getElementById("resetFilters");
  const eventsCount = document.getElementById("eventsCount");

  let filteredEvents = [...eventsData];

  function displayEvents(eventsToShow = eventsData, lang = initialLanguage) {
    eventsContainer.innerHTML = "";

    if (eventsToShow.length === 0) {
      eventsContainer.innerHTML = `
                <div class="no-events">
                    <i class="bi bi-calendar-x display-1 mb-3"></i>
                    <h3 class="text-muted">لا توجد فعاليات متطابقة مع معايير البحث</h3>
                    <p class="text-muted">جرب تغيير معايير البحث أو التصفية</p>
                </div>
            `;
      updateEventsCount(0);
      return;
    }

    eventsToShow.forEach((event) => {
      const eventCard = `
                <div class=" mb-4">
                    <div class="card event-card h-100">
                        <span class="category-badge badge bg-primary">${
                          categoryTranslations[event.category][lang]
                        }</span>
                        <img src="${event.image}" class="card-img-top" alt="${
        event.title[lang]
      }">
                        <div class="card-body d-flex flex-column">
                            <h5 class="card-title">${event.title[lang]}</h5>

                            <!-- الموقع -->
                            <div class="d-flex align-items-center mb-2">
                                <i class="bi bi-geo-alt-fill text-muted me-2"></i>
                                <small class="text-muted">${
                                  event.location[lang]
                                }</small>
                            </div>

                            <p class="card-text flex-grow-1">${
                              event.description[lang]
                            }</p>

                            <!-- التقييم بالنجوم -->
                            <div class="d-flex align-items-center mb-2">
                                <div class="me-2">
                                    ${generateStars(event.rating)}
                                </div>
                                <small class="text-muted">${
                                  event.rating
                                }</small>
                            </div>

                            <div class="d-flex justify-content-between align-items-center mt-auto">
                                <div>
                                    <small class="text-muted d-block">
                                        <i class="bi bi-calendar-event me-1"></i> ${
                                          event.date
                                        }
                                    </small>
                                    <small class="text-muted">
                                        <i class="bi bi-eye me-1"></i> ${
                                          event.reviews
                                        } <div class="d-inline" data-key="rating">تقييم</div>
                                    </small>
                                </div>
                                <a href="eventdetails.html?id=${
                                  event.id
                                }" class="btn-main btn-main-sm">${
        lang === "ar" ? "التفاصيل" : "Details"
      }</a>
                            </div>
                        </div>
                    </div>
                </div>
            `;

      eventsContainer.innerHTML += eventCard;
    });

    updateEventsCount(eventsToShow.length);
  }

  function updateEventsCount(count) {
    if (eventsCount) {
      eventsCount.textContent = `${count} فعالية`;
    }
  }

  function filterEvents() {
    const searchTerm = searchInput.value.toLowerCase();
    const categoryValue = categoryFilter.value;
    const dateValue = dateFilter.value;
    const locationValue = locationFilter.value.toLowerCase();
    if (categoryValue) {
      saveSelectedCategory(categoryValue);
    }

    filteredEvents = eventsData.filter((event) => {
      const matchesSearch =
        event.title[lang]?.toLowerCase().includes(searchTerm) ||
        event.description[lang]?.toLowerCase().includes(searchTerm);
      const matchesCategory =
        !categoryValue || event.category === categoryValue;
      const matchesDate = !dateValue || event.date === dateValue;
      const matchesLocation =
        !locationValue || event.location.toLowerCase().includes(locationValue);

      return matchesSearch && matchesCategory && matchesDate && matchesLocation;
    });

    displayEvents(filteredEvents, lang);
  }

  if (resetFilters) {
    resetFilters.addEventListener("click", function () {
      searchInput.value = "";
      categoryFilter.value = "";
      dateFilter.value = "";
      locationFilter.value = "";
      filteredEvents = [...eventsData];
      displayEvents(filteredEvents, lang);
      localStorage.removeItem("selectedCategory");
    });
  }

  function saveSelectedCategory(category) {
    localStorage.setItem("selectedCategory", category);
  }

  function getSelectedCategory() {
    return localStorage.getItem("selectedCategory") || "";
  }

  function applySavedCategory() {
    const savedCategory = getSelectedCategory();
    const categoryFilter = document.getElementById("categoryFilter");

    if (savedCategory && categoryFilter) {
      categoryFilter.value = savedCategory;

      applyCategoryFilter(savedCategory);
    }
  }

  function applyCategoryFilter(categoryValue) {
    if (!categoryValue) return;

    const searchTerm =
      document.getElementById("searchInput")?.value.toLowerCase() || "";
    const dateValue = document.getElementById("dateFilter")?.value || "";
    const locationValue =
      document.getElementById("locationFilter")?.value.toLowerCase() || "";

    const filteredEvents = eventsData.filter((event) => {
      const matchesSearch =
        event.title.toLowerCase().includes(searchTerm) ||
        event.description.toLowerCase().includes(searchTerm);
      const matchesCategory = event.category === categoryValue;
      const matchesDate = !dateValue || event.date === dateValue;
      const matchesLocation =
        !locationValue || event.location.toLowerCase().includes(locationValue);

      return matchesSearch && matchesCategory && matchesDate && matchesLocation;
    });

    displayEvents(filteredEvents, lang);
  }

  if (searchInput) searchInput.addEventListener("input", filterEvents);
  if (categoryFilter) categoryFilter.addEventListener("change", filterEvents);
  if (dateFilter) dateFilter.addEventListener("change", filterEvents);
  if (locationFilter) locationFilter.addEventListener("input", filterEvents);

  displayEvents(eventsData, lang);
  applySavedCategory();
}

function initEventDetailsPage(lang) {
  const urlParams = new URLSearchParams(window.location.search);
  const eventId = parseInt(urlParams.get("id"));

  const event = eventsData.find((e) => e.id === eventId);

  if (!event) {
    window.location.href = "events.html";
    return;
  }

  function displayEventDetails(event, lang) {
    document.title = `${event.title[initialLanguage]} - فعاليات سورية`;

    const breadcrumbElement = document.getElementById("breadcrumbEventTitle");
    if (breadcrumbElement) {
      breadcrumbElement.textContent = event.title[initialLanguage];
    }

    const eventImage = document.getElementById("eventDetailImage");
    if (eventImage) {
      eventImage.src = event.image;
      eventImage.alt = event.title[initialLanguage];
    }

    const eventTitle = document.getElementById("eventDetailTitle");
    if (eventTitle) {
      eventTitle.textContent = event.title[lang || initialLanguage];
    }

    const eventRating = document.getElementById("eventRating");
    const eventStars = document.getElementById("eventStars");
    const eventReviews = document.getElementById("eventReviews");

    if (eventRating) eventRating.textContent = event.rating;
    if (eventStars) eventStars.innerHTML = generateStars(event.rating);
    if (eventReviews) eventReviews.textContent = `(${event.reviews} تقييم)`;

    const eventDateTime = document.getElementById("eventDateTime");
    if (eventDateTime) {
      eventDateTime.textContent = `${event.date} | ${event.time} - ${event.endTime}`;
    }

    const eventLocation = document.getElementById("eventLocation");
    if (eventLocation) {
      eventLocation.textContent = event.location[initialLanguage];
    }

    const eventCategory = document.getElementById("eventCategory");
    if (eventCategory) {
      eventCategory.textContent =
        categoryTranslations[event.category][initialLanguage] ||
        event.category[initialLanguage];
    }

    const eventDescription = document.getElementById("eventDescription");
    if (eventDescription) {
      eventDescription.innerHTML = event.longDescription[initialLanguage];
    }

    const eventMap = document.getElementById("eventMap");
    if (eventMap) {
      eventMap.src = event.mapEmbedUrl;
    }

    const galleryContainer = document.getElementById("eventGallery");
    if (galleryContainer) {
      galleryContainer.innerHTML = "";

      event.galleryImages.forEach((imageUrl) => {
        const img = document.createElement("img");
        img.src = imageUrl;
        img.alt = "صورة الفعالية";
        img.className = "gallery-thumb";
        img.addEventListener("click", function () {
          if (eventImage) {
            eventImage.src = imageUrl;
          }
        });
        galleryContainer.appendChild(img);
      });
    }
  }

  function displayRelatedEvents(currentEvent) {
    const relatedEventsContainer = document.getElementById("relatedEvents");
    if (!relatedEventsContainer) return;

    relatedEventsContainer.innerHTML = "";

    const relatedEvents = eventsData
      .filter(
        (event) =>
          event.category === currentEvent.category &&
          event.id !== currentEvent.id
      )
      .slice(0, 3);

    if (relatedEvents.length === 0) {
      relatedEventsContainer.innerHTML =
        '<p class="text-muted text-center">لا توجد فعاليات ذات صلة</p>';
      return;
    }

    relatedEvents.forEach((event) => {
      const col = document.createElement("div");
      col.className = "col-md-4 mb-4";
      col.innerHTML = `
                <div class="card related-event-card h-100">
                    <img src="${event.image}" class="card-img-top" alt="${event.title[initialLanguage]}">
                    <div class="card-body d-flex related-event ">
                        <div>
                            <h5 class="card-title">${event.title[initialLanguage]}</h5>
                            <div class="related-event-meta mb-2">
                                <div><i class="bi bi-calendar-event"></i> ${event.date}</div>
                                <div><i class="bi bi-geo-alt"></i> ${event.location[initialLanguage]}</div>
                            </div>
                        </div>
                        
                        <a href="eventdetails.html?id=${event.id}" class="btn btn-sm btn-main mt-auto">عرض التفاصيل</a>
                    </div>
                </div>
            `;
      relatedEventsContainer.appendChild(col);
    });
  }

  displayEventDetails(event, lang);

  displayRelatedEvents(event);
}

function initEventMainPage() {
  const eventViewMain = document.getElementById("eventViewMain");

  if (!eventViewMain) return;
  const threeEvents = eventsData.slice(0, 3);

  eventViewMain.innerHTML = "";

  threeEvents.forEach((event) => {
    const eventCard = `
            <div class="col-lg-4 col-md-6 mb-4">
                <div class="card event-card h-100">
                    <span class="category-badge badge bg-primary">${
                      categoryTranslations[event.category]
                    }</span>
                    <img src="${event.image}" class="card-img-top" alt="${
      event.title
    }">
                    <div class="card-body d-flex flex-column">
                        <h5 class="card-title">${event.title}</h5>
                        
                        <div class="d-flex align-items-center mb-2">
                            <i class="bi bi-geo-alt-fill text-muted me-2"></i>
                            <small class="text-muted">${event.location}</small>
                        </div>
                        
                        <p class="card-text flex-grow-1">${
                          event.description
                        }</p>
                        
                        <!-- التقييم بالنجوم -->
                        <div class="d-flex align-items-center mb-2">
                            <div class="me-2">
                                ${generateStars(event.rating)}
                            </div>
                            <small class="text-muted">${event.rating}</small>
                        </div>

                        <div class="d-flex justify-content-between align-items-center mt-auto">
                            <small class="text-muted">
                                <i class="bi bi-calendar-event me-1"></i> ${
                                  event.date
                                }
                            </small>
                            <a href="eventdetails.html?id=${
                              event.id
                            }" class="btn-main btn-main-sm">التفاصيل</a>
                        </div>
                    </div>
                </div>
            </div>
        `;

    eventViewMain.innerHTML += eventCard;
  });
}
/* ربط الأقسام بالفعاليات*/
document.addEventListener("DOMContentLoaded", function () {
  const urlParams = new URLSearchParams(window.location.search);
  const category = urlParams.get("category");
  const categoryFilter = document.getElementById("categoryFilter");

  if (categoryFilter) {
    if (category && category !== "all") {
      categoryFilter.value = category;
    } else {
      categoryFilter.value = "all";
    }

    categoryFilter.dispatchEvent(new Event("change"));

    categoryFilter.addEventListener("change", function () {
      if (categoryFilter.value === "all") {
        console.log("عرض جميع الفعاليات");
      } else {
        console.log("تم تصفية الفعاليات للـ: " + categoryFilter.value);
      }
    });
  }
});

function getRandomEvents(eventsData, num) {
  const shuffled = [...eventsData].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, num);
}

// إضافة فعاليات عشوائية إلى الشرائح
document.addEventListener("DOMContentLoaded", function () {
  const carouselItemsContainer = document.getElementById(
    "carouselItemsContainer"
  );
  if (!carouselItemsContainer) return;

  const randomEvents = getRandomEvents(eventsData, 3);

  let carouselItem = "";
  randomEvents.forEach((event, index) => {
    const isActive = index === 0 ? "active" : "";
    const carouselItem = `
            <div class="carousel-item ${isActive}">
                <img src="${event.image}" class="d-block w-100" alt="${event.title}">
                <div class="carousel-caption d-none d-md-block">
                    <h3>${event.title}</h3>
                    <p>${event.description}</p>
                    <a href="eventdetails.html?id=${event.id}" class="btn-main">سجل الآن</a>
                </div>
            </div>
        `;
    carouselItemsContainer.innerHTML += carouselItem;
  });
});

/* ************************************************************************************************************************* */
/* ************************************************************************************************************************* */
/* أنماط خاصة بصفحة تواصل معنا */

document.addEventListener("DOMContentLoaded", function () {
  const contactForm = document.getElementById("contactForm");
  const alertOverlay = document.getElementById("alertOverlay");
  const alertContainer = document.getElementById("alertContainer");
  const formStatus = document.getElementById("formStatus");

  function showAlert(message, type, title) {
    alertContainer.innerHTML = "";

    const alert = document.createElement("div");
    alert.className = `alert alert-${type}`;

    let iconClass = "";
    switch (type) {
      case "success":
        iconClass = "bi-check-circle-fill";
        break;
      case "error":
        iconClass = "bi-exclamation-circle-fill";
        break;
      case "warning":
        iconClass = "bi-exclamation-triangle-fill";
        break;
      case "info":
        iconClass = "bi-info-circle-fill";
        break;
    }

    alert.innerHTML = `
                    <div class="alert-icon">
                        <i class="bi ${iconClass}"></i>
                    </div>
                    <div class="alert-content">
                        <h4>${title}</h4>
                        <p>${message}</p>
                    </div>
                    <button class="alert-close">&times;</button>
                `;

    alertContainer.appendChild(alert);

    alertOverlay.classList.add("show");

    const closeButton = alert.querySelector(".alert-close");
    closeButton.addEventListener("click", function () {
      alertOverlay.classList.remove("show");
    });

    setTimeout(() => {
      if (alertOverlay.classList.contains("show")) {
        alertOverlay.classList.remove("show");
      }
    }, 5000);
  }

  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();

      let isValid = true;
      const nameInput = document.getElementById("name");
      const emailInput = document.getElementById("email");
      const messageInput = document.getElementById("message");

      [nameInput, emailInput, messageInput].forEach((input) => {
        if (input) input.classList.remove("is-invalid");
      });

      if (nameInput && !nameInput.value.trim()) {
        nameInput.classList.add("is-invalid");
        isValid = false;
      }

      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (
        emailInput &&
        (!emailInput.value || !emailPattern.test(emailInput.value))
      ) {
        emailInput.classList.add("is-invalid");
        isValid = false;
      }

      if (messageInput && !messageInput.value.trim()) {
        messageInput.classList.add("is-invalid");
        isValid = false;
      }

      if (isValid) {
        showAlert(
          "تم إرسال رسالتك بنجاح! سنتواصل معك قريبًا.",
          "success",
          "تم الإرسال"
        );
        contactForm.reset();
      } else {
        showAlert("يرجى ملء جميع الحقول المطلوبة بشكل صحيح.", "error", "خطأ");
        const firstInvalid = contactForm.querySelector(".is-invalid");
        if (firstInvalid) {
          firstInvalid.scrollIntoView({ behavior: "smooth", block: "center" });
        }
      }
    });

    const formInputs = contactForm.querySelectorAll("input, textarea");
    formInputs.forEach((input) => {
      input.addEventListener("input", function () {
        if (this.classList.contains("is-invalid")) {
          this.classList.remove("is-invalid");
        }
      });
    });
  }
});
