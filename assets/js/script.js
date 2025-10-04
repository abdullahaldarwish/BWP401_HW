/* ************************************************************************************************************************* */
/* ************************************************************************************************************************* */
/* زر العودة إلى الأعلى */

const backToTopButton = document.getElementById('backToTop');

window.addEventListener('scroll', function () {
    if (window.pageYOffset > 300) {
        backToTopButton.classList.add('show', 'pulse');
    } else {
        backToTopButton.classList.remove('show', 'pulse');
    }
});

backToTopButton.addEventListener('click', function () {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

/* ************************************************************************************************************************* */
/* ************************************************************************************************************************* */
/* الفعاليات */

const eventsData = [
    {
        id: 1,
        title: "مهرجان دمشق للموسيقى التقليدية",
        date: "2025-10-05",
        time: "18:00",
        endTime: "22:30",
        location: "دار الأوبرا - دمشق",
        category: "Music",
        image: "assets/images/events_photo/Music/id_1/Mid_1_1.jpg",
        description: "أمسيات لموسيقى الطرب والمقامات التقليدية بأداء فرق محلية.",
        longDescription: `
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
        rating: 4.6,
        reviews: 54,
        mapEmbedUrl: "assets/images/events_photo/Music/id_1/id_1.png",
        galleryImages: [
            "assets/images/events_photo/Music/id_1/Mid_1_1.jpg",
            "assets/images/events_photo/Music/id_1/Mid_1_2.jpg",
            "assets/images/events_photo/Music/id_1/Mid_1_3.png",
            "assets/images/events_photo/Music/id_1/Mid_1_4.jpg"
        ]
    },
    {
        id: 2,
        title: "أمسية القدود الحلبية والفلكلور",
        date: "2025-11-12",
        time: "20:00",
        endTime: "23:00",
        location: "مدرج قلعة حلب - حلب",
        category: "Music",
        image: "assets/images/events_photo/Music/id_2/Mid_2_1.jpg",
        description: "سهرة تراثية تجمع القدود الحلبية مع عروض دبكة وأداء آلات شرقية.",
        longDescription: `
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
        rating: 4.8,
        reviews: 64,
        mapEmbedUrl: "assets/images/events_photo/Music/id_2/id_2.png",
        galleryImages: [
            "assets/images/events_photo/Music/id_2/Mid_2_1.jpg",
            "assets/images/events_photo/Music/id_2/Mid_2_2.jpg",
            "assets/images/events_photo/Music/id_2/Mid_2_3.jpg",
            "assets/images/events_photo/Music/id_2/Mid_2_4.jpg"
        ]
    },
    {
        id: 3,
        title: "معرض فنون دمشق المعاصرة",
        date: "2025-10-20",
        time: "10:00",
        endTime: "18:00",
        location: "المعرض الوطني - دمشق",
        category: "Art",
        image: "assets/images/events_photo/Art/id_3/Aid_3_1.jpg",
        description: "معرض يضم أعمالاً تشكيليّة ومعارض نحت لفنانين سوريين معاصرين.",
        longDescription: `
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
        rating: 4.5,
        reviews: 80,
        mapEmbedUrl: "assets/images/events_photo/Art/id_3/id_3.png",
        galleryImages: [
            "assets/images/events_photo/Art/id_3/Aid_3_1.jpg",
            "assets/images/events_photo/Art/id_3/Aid_3_2.jpg",
            "assets/images/events_photo/Art/id_3/Aid_3_3.jpg",
            "assets/images/events_photo/Art/id_3/Aid_3_4.jpg"
        ]
    },
    {
        id: 4,
        title: "معرض اللوحات التراثية في تدمر",
        date: "2025-11-02",
        time: "09:00",
        endTime: "17:00",
        location: "المسرح الروماني - تدمر",
        category: "Art",
        image: "assets/images/events_photo/Art/id_4/Aid_4_1.jpg",
        description: "عرض لوحات مستوحاة من التراث والتاريخ البدوي لمحافظة تدمر.",
        longDescription: `
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
        rating: 4.4,
        reviews: 30,
        mapEmbedUrl: "assets/images/events_photo/Art/id_4/id_4.png",
        galleryImages: [
            "assets/images/events_photo/Art/id_4/Aid_4_1.jpg",
            "assets/images/events_photo/Art/id_4/Aid_4_2.png",
            "assets/images/events_photo/Art/id_4/Aid_4_3.jpg",
            "assets/images/events_photo/Art/id_4/Aid_4_4.jpg"
        ]
    },
    {
        id: 5,
        title: "ماراثون اللاذقية السنوي",
        date: "2025-10-11",
        time: "07:00",
        endTime: "12:00",
        location: "كورنيش اللاذقية",
        category: "Sports",
        image: "assets/images/events_photo/Sports/id_5/Sid_5_1.jpg",
        description: "ماراثون مفتوح للجمهور بمسافات متنوعة للمشي والركض.",
        longDescription: `
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
        rating: 4.2,
        reviews: 102,
        mapEmbedUrl: "assets/images/events_photo/Sports/id_5/id_5.png",
        galleryImages: [
            "assets/images/events_photo/Sports/id_5/Sid_5_1.jpg",
            "assets/images/events_photo/Sports/id_5/Sid_5_2.jpg",
            "assets/images/events_photo/Sports/id_5/Sid_5_3.jpg",
            "assets/images/events_photo/Sports/id_5/Sid_5_4.png"
        ]
    },
    {
        id: 6,
        title: "بطولة طرطوس لكرة الشاطئ",
        date: "2025-08-30",
        time: "09:00",
        endTime: "17:00",
        location: "شاطئ طرطوس",
        category: "Sports",
        image: "assets/images/events_photo/Sports/id_6/Sid_6_1.jpg",
        description: "بطولة ودية لفِرق كرة الشاطئ بمشاركة فرق محلية وإقليمية.",
        longDescription: `
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
        rating: 4.0,
        reviews: 18,
        mapEmbedUrl: "assets/images/events_photo/Sports/id_6/id_6.png",
        galleryImages: [
            "assets/images/events_photo/Sports/id_6/Sid_6_1.jpg",
            "assets/images/events_photo/Sports/id_6/Sid_6_2.jpg",
            "assets/images/events_photo/Sports/id_6/sid_6_3.jpg",
            "assets/images/events_photo/Sports/id_6/Sid_6_4.jpg"
        ]
    },
    {
        id: 7,
        title: "قمة ريادة تكنولوجيا دمشق",
        date: "2025-12-03",
        time: "09:30",
        endTime: "17:00",
        location: "مركز المؤتمرات - دمشق",
        category: "Technology",
        image: "assets/images/events_photo/Technology/id_7/Tid_7_1.jpg",
        description: "مؤتمر ليوم كامل حول الابتكار وريادة الأعمال التقنية في سوريا.",
        longDescription: `
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
        rating: 4.7,
        reviews: 65,
        mapEmbedUrl: "assets/images/events_photo/Technology/id_7/id_7.png",
        galleryImages: [
            "assets/images/events_photo/Technology/id_7/Tid_7_1.jpg",
            "assets/images/events_photo/Technology/id_7/Tid_7_2.jpg",
            "assets/images/events_photo/Technology/id_7/Tid_7_3.jpg",
            "assets/images/events_photo/Technology/id_7/Tid_7_4.jpg",
        ]
    },
    {
        id: 8,
        title: "هاكاثون حلب للتقنية والذكاء الاصطناعي",
        date: "2025-10-25",
        time: "10:00",
        endTime: "20:00",
        location: "مركز الابتكار - حلب",
        category: "Technology",
        image: "assets/images/events_photo/Technology/id_8/Tid_8_1.jpg",
        description: "هاكاثون لمدة يوم واحد لتطوير حلول تقنية محلية باستخدام الذكاء الاصطناعي.",
        longDescription: `
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
        rating: 4.6,
        reviews: 44,
        mapEmbedUrl: "assets/images/events_photo/Technology/id_8/id_8.png",

        galleryImages: [
            "assets/images/events_photo/Technology/id_8/Tid_8_1.jpg",
            "assets/images/events_photo/Technology/id_8/Tid_8_2.jpg",
            "assets/images/events_photo/Technology/id_8/Tid_8_3.jpg",
            "assets/images/events_photo/Technology/id_8/Tid_8_4.jpg",
        ]
    },
    {
        id: 9,
        title: "مهرجان طعام حمص - مأكولات شعبية",
        date: "2025-09-28",
        time: "12:00",
        endTime: "22:00",
        location: "الحديقة المركزية - حمص",
        category: "Food",
        image: "assets/images/events_photo/Food/id_9/Fid_9_1.jpg",
        description: "أشهى الأطباق الشعبية السورية من أكشاك ومطابخ محلية.",
        longDescription: `
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
        rating: 4.8,
        reviews: 210,
        mapEmbedUrl: "assets/images/events_photo/Food/id_9/id_9.png",
        galleryImages: [
            "assets/images/events_photo/Food/id_9/Fid_9_1.jpg",
            "assets/images/events_photo/Food/id_9/Fid_9_2.jpg",
            "assets/images/events_photo/Food/id_9/Fid_9_3.jpg",
            "assets/images/events_photo/Food/id_9/Fid_9_4.jpg",
        ]
    },
    {
        id: 10,
        title: "سوق الطهاة الشباب - حديقة الأندلس",
        date: "2025-10-02",
        time: "11:00",
        endTime: "19:00",
        location: "حديقة الأندلس - اللاذقية",
        category: "Food",
        image: "assets/images/events_photo/Food/id_10/Fid_10_1.jpg",
        description: "سوق يضم طهاة شباب يقدمون أطباق مبتكرة ومكونات محلية طازجة.",
        longDescription: `
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
        rating: 4.1,
        reviews: 27,
        mapEmbedUrl: "assets/images/events_photo/Food/id_10/id_10.png",
        galleryImages: [
            "assets/images/events_photo/Food/id_10/Fid_10_1.jpg",
            "assets/images/events_photo/Food/id_10/Fid_10_2.jpg",
            "assets/images/events_photo/Food/id_10/Fid_10_3.jpg",
            "assets/images/events_photo/Food/id_10/Fid_10_4.jpg",
        ]
    },
    {
        id: 11,
        title: "ورشة تطوير مهارات البرمجة - دمشق",
        date: "2025-11-15",
        time: "09:00",
        endTime: "16:00",
        location: "كلية الهندسة - دمشق",
        category: "Education",
        image: "assets/images/events_photo/Education/id_11/Eid_11_1.jpg",
        description: "ورشة عملية لتعلم أساسيات تطوير الويب وأنماط التفكير الخوارزمي.",
        longDescription: `
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
        rating: 4.9,
        reviews: 150,
        mapEmbedUrl: "assets/images/events_photo/Education/id_11/id_11.png",
        galleryImages: [
            "assets/images/events_photo/Education/id_11/Eid_11_1.jpg",
            "assets/images/events_photo/Education/id_11/Eid_11_2.jpg",
            "assets/images/events_photo/Education/id_11/Eid_11_3.jpg",
            "assets/images/events_photo/Education/id_11/Eid_11_4.jpg",
        ]
    },
    {
        id: 12,
        title: "سلسلة محاضرات تراثية تعليمية - قلعة حلب",
        date: "2025-12-10",
        time: "14:00",
        endTime: "17:00",
        location: "قاعة المحاضرات - قلعة حلب",
        category: "Education",
        image: "assets/images/events_photo/Education/id_12/Eid_12_1.jpg",
        description: "محاضرات تثقيفية حول التاريخ والتراث السوري موجهة للطلبة والجمهور.",
        longDescription: `
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
        rating: 4.5,
        reviews: 38,
        mapEmbedUrl: "assets/images/events_photo/Education/id_12/id_12.png",
        galleryImages: [
            "assets/images/events_photo/Education/id_12/Eid_12_1.jpg",
            "assets/images/events_photo/Education/id_12/Eid_12_2.jpg",
            "assets/images/events_photo/Education/id_12/Eid_12_3.jpg",
            "assets/images/events_photo/Education/id_12/Eid_12_4.jpg",
        ]
    }
];
// إضافة فعاليات عشوائية إلى الشرائح
document.addEventListener('DOMContentLoaded', function () {
    const randomEvents = getRandomEvents(eventsData, 3);
    const carouselItemsContainer = document.getElementById('carouselItemsContainer');

    randomEvents.forEach((event, index) => {
        const isActive = index === 0 ? 'active' : ''; 
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

const categoryTranslations = {
    "Music": "موسيقى",
    "Art": "فنون",
    "Sports": "رياضة",
    "Technology": "تكنولوجيا",
    "Food": "طعام",
    "Education": "تعليم"
};

function generateStars(rating) {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5;
    let stars = '';

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

document.addEventListener('DOMContentLoaded', function () {
    if (document.getElementById('eventsContainer')) {
        initEventsPage();
    }

    if (document.getElementById('eventDetailImage')) {
        initEventDetailsPage();
    }

    if (document.getElementById('eventViewMain')) {
        initEventMainPage();
    }
});

function initEventsPage() {
    const eventsContainer = document.getElementById('eventsContainer');
    const searchInput = document.getElementById('searchInput');
    const categoryFilter = document.getElementById('categoryFilter');
    const dateFilter = document.getElementById('dateFilter');
    const locationFilter = document.getElementById('locationFilter');
    const resetFilters = document.getElementById('resetFilters');
    const eventsCount = document.getElementById('eventsCount');

    let filteredEvents = [...eventsData];

    function displayEvents(eventsToShow = eventsData) {
        eventsContainer.innerHTML = '';

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

        eventsToShow.forEach(event => {
            const eventCard = `
                <div class=" mb-4">
                    <div class="card event-card h-100">
                        <span class="category-badge badge bg-primary">${categoryTranslations[event.category]}</span>
                        <img src="${event.image}" class="card-img-top" alt="${event.title}">
                        <div class="card-body d-flex flex-column">
                            <h5 class="card-title">${event.title}</h5>

                            <!-- الموقع -->
                            <div class="d-flex align-items-center mb-2">
                                <i class="bi bi-geo-alt-fill text-muted me-2"></i>
                                <small class="text-muted">${event.location}</small>
                            </div>

                            <p class="card-text flex-grow-1">${event.description}</p>

                            <!-- التقييم بالنجوم -->
                            <div class="d-flex align-items-center mb-2">
                                <div class="me-2">
                                    ${generateStars(event.rating)}
                                </div>
                                <small class="text-muted">${event.rating}</small>
                            </div>

                            <div class="d-flex justify-content-between align-items-center mt-auto">
                                <div>
                                    <small class="text-muted d-block">
                                        <i class="bi bi-calendar-event me-1"></i> ${event.date}
                                    </small>
                                    <small class="text-muted">
                                        <i class="bi bi-eye me-1"></i> ${event.reviews} تقييم
                                    </small>
                                </div>
                                <a href="eventdetails.html?id=${event.id}" class="btn-main btn-main-sm">التفاصيل</a>
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

        filteredEvents = eventsData.filter(event => {
            const matchesSearch = event.title.toLowerCase().includes(searchTerm) ||
                event.description.toLowerCase().includes(searchTerm);
            const matchesCategory = !categoryValue || event.category === categoryValue;
            const matchesDate = !dateValue || event.date === dateValue;
            const matchesLocation = !locationValue || event.location.toLowerCase().includes(locationValue);

            return matchesSearch && matchesCategory && matchesDate && matchesLocation;
        });

        displayEvents(filteredEvents);
    }

    if (resetFilters) {
        resetFilters.addEventListener('click', function () {
            searchInput.value = '';
            categoryFilter.value = '';
            dateFilter.value = '';
            locationFilter.value = '';
            filteredEvents = [...eventsData];
            displayEvents(filteredEvents);
            localStorage.removeItem('selectedCategory');
        });
    }

    function saveSelectedCategory(category) {
        localStorage.setItem('selectedCategory', category);
    }

    function getSelectedCategory() {
        return localStorage.getItem('selectedCategory') || '';
    }

    function applySavedCategory() {
        const savedCategory = getSelectedCategory();
        const categoryFilter = document.getElementById('categoryFilter');

        if (savedCategory && categoryFilter) {
            categoryFilter.value = savedCategory;

            applyCategoryFilter(savedCategory);
        }
    }

    function applyCategoryFilter(categoryValue) {
        if (!categoryValue) return;

        const searchTerm = document.getElementById('searchInput')?.value.toLowerCase() || '';
        const dateValue = document.getElementById('dateFilter')?.value || '';
        const locationValue = document.getElementById('locationFilter')?.value.toLowerCase() || '';

        const filteredEvents = eventsData.filter(event => {
            const matchesSearch = event.title.toLowerCase().includes(searchTerm) ||
                event.description.toLowerCase().includes(searchTerm);
            const matchesCategory = event.category === categoryValue;
            const matchesDate = !dateValue || event.date === dateValue;
            const matchesLocation = !locationValue || event.location.toLowerCase().includes(locationValue);

            return matchesSearch && matchesCategory && matchesDate && matchesLocation;
        });

        displayEvents(filteredEvents);
    }

    if (searchInput) searchInput.addEventListener('input', filterEvents);
    if (categoryFilter) categoryFilter.addEventListener('change', filterEvents);
    if (dateFilter) dateFilter.addEventListener('change', filterEvents);
    if (locationFilter) locationFilter.addEventListener('input', filterEvents);

    displayEvents(eventsData);
    applySavedCategory();
}

function initEventDetailsPage() {
    const urlParams = new URLSearchParams(window.location.search);
    const eventId = parseInt(urlParams.get('id'));

    const event = eventsData.find(e => e.id === eventId);

    if (!event) {
        window.location.href = 'events.html';
        return;
    }

    function displayEventDetails(event) {
        document.title = `${event.title} - فعاليات سورية`;

        const breadcrumbElement = document.getElementById('breadcrumbEventTitle');
        if (breadcrumbElement) {
            breadcrumbElement.textContent = event.title;
        }

        const eventImage = document.getElementById('eventDetailImage');
        if (eventImage) {
            eventImage.src = event.image;
            eventImage.alt = event.title;
        }

        const eventTitle = document.getElementById('eventDetailTitle');
        if (eventTitle) {
            eventTitle.textContent = event.title;
        }

        const eventRating = document.getElementById('eventRating');
        const eventStars = document.getElementById('eventStars');
        const eventReviews = document.getElementById('eventReviews');

        if (eventRating) eventRating.textContent = event.rating;
        if (eventStars) eventStars.innerHTML = generateStars(event.rating);
        if (eventReviews) eventReviews.textContent = `(${event.reviews} تقييم)`;

        const eventDateTime = document.getElementById('eventDateTime');
        if (eventDateTime) {
            eventDateTime.textContent = `${event.date} | ${event.time} - ${event.endTime}`;
        }

        const eventLocation = document.getElementById('eventLocation');
        if (eventLocation) {
            eventLocation.textContent = event.location;
        }

        const eventCategory = document.getElementById('eventCategory');
        if (eventCategory) {
            eventCategory.textContent = categoryTranslations[event.category] || event.category;
        }

        const eventDescription = document.getElementById('eventDescription');
        if (eventDescription) {
            eventDescription.innerHTML = event.longDescription;
        }

        const eventMap = document.getElementById('eventMap');
        if (eventMap) {
            eventMap.src = event.mapEmbedUrl;
        }

        const galleryContainer = document.getElementById('eventGallery');
        if (galleryContainer) {
            galleryContainer.innerHTML = '';

            event.galleryImages.forEach(imageUrl => {
                const img = document.createElement('img');
                img.src = imageUrl;
                img.alt = 'صورة الفعالية';
                img.className = 'gallery-thumb';
                img.addEventListener('click', function () {
                    if (eventImage) {
                        eventImage.src = imageUrl;
                    }
                });
                galleryContainer.appendChild(img);
            });
        }
    }

    function displayRelatedEvents(currentEvent) {
        const relatedEventsContainer = document.getElementById('relatedEvents');
        if (!relatedEventsContainer) return;

        relatedEventsContainer.innerHTML = '';

        const relatedEvents = eventsData.filter(event =>
            event.category === currentEvent.category && event.id !== currentEvent.id
        ).slice(0, 3);

        if (relatedEvents.length === 0) {
            relatedEventsContainer.innerHTML = '<p class="text-muted text-center">لا توجد فعاليات ذات صلة</p>';
            return;
        }

        relatedEvents.forEach(event => {
            const col = document.createElement('div');
            col.className = 'col-md-4 mb-4';
            col.innerHTML = `
                <div class="card related-event-card h-100">
                    <img src="${event.image}" class="card-img-top" alt="${event.title}">
                    <div class="card-body d-flex ">
                        <div>
                            <h5 class="card-title">${event.title}</h5>
                            <div class="related-event-meta mb-2">
                                <div><i class="bi bi-calendar-event"></i> ${event.date}</div>
                                <div><i class="bi bi-geo-alt"></i> ${event.location}</div>
                            </div>
                        </div>
                        
                        <a href="eventdetails.html?id=${event.id}" class="btn btn-sm btn-main mt-auto">عرض التفاصيل</a>
                    </div>
                </div>
            `;
            relatedEventsContainer.appendChild(col);
        });
    }

    displayEventDetails(event);

    displayRelatedEvents(event);
}

function initEventMainPage() {
    const eventViewMain = document.getElementById('eventViewMain');

    if (!eventViewMain) return;
    const threeEvents = eventsData.slice(0, 3);

    eventViewMain.innerHTML = '';

    threeEvents.forEach(event => {
        const eventCard = `
            <div class="col-lg-4 col-md-6 mb-4">
                <div class="card event-card h-100">
                    <span class="category-badge badge bg-primary">${categoryTranslations[event.category]}</span>
                    <img src="${event.image}" class="card-img-top" alt="${event.title}">
                    <div class="card-body d-flex flex-column">
                        <h5 class="card-title">${event.title}</h5>
                        
                        <div class="d-flex align-items-center mb-2">
                            <i class="bi bi-geo-alt-fill text-muted me-2"></i>
                            <small class="text-muted">${event.location}</small>
                        </div>
                        
                        <p class="card-text flex-grow-1">${event.description}</p>
                        
                        <!-- التقييم بالنجوم -->
                        <div class="d-flex align-items-center mb-2">
                            <div class="me-2">
                                ${generateStars(event.rating)}
                            </div>
                            <small class="text-muted">${event.rating}</small>
                        </div>

                        <div class="d-flex justify-content-between align-items-center mt-auto">
                            <small class="text-muted">
                                <i class="bi bi-calendar-event me-1"></i> ${event.date}
                            </small>
                            <a href="eventdetails.html?id=${event.id}" class="btn-main btn-main-sm">التفاصيل</a>
                        </div>
                    </div>
                </div>
            </div>
        `;

        eventViewMain.innerHTML += eventCard;
    });
}
/* ربط الأقسام بالفعاليات*/
    document.addEventListener('DOMContentLoaded', function() {
  const urlParams = new URLSearchParams(window.location.search);
  const category = urlParams.get('category');
  const categoryFilter = document.getElementById('categoryFilter');

  if (category && category !== 'all') {
    categoryFilter.value = category;
  } else {
    categoryFilter.value = 'all';  
  }

  categoryFilter.dispatchEvent(new Event('change'));

  categoryFilter.addEventListener('change', function() {
    if (categoryFilter.value === 'all') {
      console.log("عرض جميع الفعاليات");
    } else {
      console.log("تم تصفية الفعاليات للـ: " + categoryFilter.value);
    }
  });
});


/* ************************************************************************************************************************* */
/* ************************************************************************************************************************* */
/* أنماط خاصة بصفحة تواصل معنا */

document.addEventListener('DOMContentLoaded', function () {
    const contactForm = document.getElementById('contactForm');
    const alertOverlay = document.getElementById('alertOverlay');
    const alertContainer = document.getElementById('alertContainer');
    const formStatus = document.getElementById('formStatus');

    function showAlert(message, type, title) {
        alertContainer.innerHTML = '';

        const alert = document.createElement('div');
        alert.className = `alert alert-${type}`;

        let iconClass = '';
        switch (type) {
            case 'success':
                iconClass = 'bi-check-circle-fill';
                break;
            case 'error':
                iconClass = 'bi-exclamation-circle-fill';
                break;
            case 'warning':
                iconClass = 'bi-exclamation-triangle-fill';
                break;
            case 'info':
                iconClass = 'bi-info-circle-fill';
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

        alertOverlay.classList.add('show');

        const closeButton = alert.querySelector('.alert-close');
        closeButton.addEventListener('click', function () {
            alertOverlay.classList.remove('show');
        });

        setTimeout(() => {
            if (alertOverlay.classList.contains('show')) {
                alertOverlay.classList.remove('show');
            }
        }, 5000);
    }

    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();

            let isValid = true;
            const nameInput = document.getElementById('name');
            const emailInput = document.getElementById('email');
            const messageInput = document.getElementById('message');

            [nameInput, emailInput, messageInput].forEach(input => {
                if (input) input.classList.remove('is-invalid');
            });

            if (nameInput && !nameInput.value.trim()) {
                nameInput.classList.add('is-invalid');
                isValid = false;
            }

            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (emailInput && (!emailInput.value || !emailPattern.test(emailInput.value))) {
                emailInput.classList.add('is-invalid');
                isValid = false;
            }

            if (messageInput && !messageInput.value.trim()) {
                messageInput.classList.add('is-invalid');
                isValid = false;
            }

            if (isValid) {
                showAlert('تم إرسال رسالتك بنجاح! سنتواصل معك قريبًا.', 'success', 'تم الإرسال');
                contactForm.reset();
            } else {
                showAlert('يرجى ملء جميع الحقول المطلوبة بشكل صحيح.', 'error', 'خطأ');
                const firstInvalid = contactForm.querySelector('.is-invalid');
                if (firstInvalid) {
                    firstInvalid.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }
            }
        });

        const formInputs = contactForm.querySelectorAll('input, textarea');
        formInputs.forEach(input => {
            input.addEventListener('input', function () {
                if (this.classList.contains('is-invalid')) {
                    this.classList.remove('is-invalid');
                }
            });
        });
    }
});
