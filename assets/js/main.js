// Data - those variables stores the data required for the project
let allEvents = [
  {
    title_ar: "قمة الابتكار التقني",
    title_en: "Innovation Tech Summit",
    description_ar: "مؤتمر للشركات الناشئة وتطبيقات الذكاء الاصطناعي المحلية",
    description_en: "Conference for startups and local AI applications",
    long_description_ar:
      "يجمع الحدث مؤسسي شركات ناشئة، مطوري برمجيات، ومستثمرين لعرض حلول تقنية عملية من الذكاء الاصطناعي إلى إنترنت الأشياء. يتضمن منصات عرض، مسابقات سرعة تطوير، وجلسات إرشاد لتمويل المنتج.",
    long_description_en:
      "The event brings together startup founders, developers, and investors to showcase practical tech solutions from AI to IoT. It includes demo booths, hackathon-style challenges, and mentoring sessions for product funding.",
    category_ar: "تكنولوجيا",
    category_en: "Technology",
    image: "./assets/img/InnovationTechSummit.jpeg",
    date: "2025-11-15",
    place_ar: "حاضنة الأعمال التقنية",
    place_en: "Tech Incubator",
    map: "https://maps.app.goo.gl/958Bgj5NABR6xEvD8",
  },
  {
    title_ar: "سوق الأطعمة التقليدية",
    title_en: "Traditional Food Market",
    description_ar: "أطعمة محلية ومنتجات زراعية طازجة من مزارعين مستقلين",
    description_en:
      "Local dishes and fresh agricultural products from independent farmers",
    long_description_ar:
      "يقدم السوق مجموعة من المأكولات المنزلية، منتجات عضوية، ومكونات محلية نادرة، مع أكشاك توضيحية عن طرق التحضير التقليدية وفرص لتذوق وشراء مباشرة من المنتجين.",
    long_description_en:
      "The market features homemade foods, organic products, and rare local ingredients, with stalls demonstrating traditional preparation methods and opportunities to taste and buy directly from producers.",
    category_ar: "طعام",
    category_en: "Food",
    image: "./assets/img/TraditionalFoodMarket.jpeg",
    date: "2025-08-22",
    place_ar: "ساحة الحي الخضراء",
    place_en: "Neighborhood Green Square",
    map: "https://maps.app.goo.gl/JmFAaZpCAdwjgPe47",
  },
  {
    title_ar: "يوم الصحة العامة",
    title_en: "Public Health Day",
    description_ar: "فحوصات طبية مبسطة وحملات توعية عن نمط الحياة الصحي",
    description_en:
      "Basic medical screenings and awareness campaigns on healthy living",
    long_description_ar:
      "حملات فحص مجاني للضغط والسكر، جلسات تعليمية عن التغذية والنشاط البدني، واستشارات مبسطة مع أطباء ومتطوعين لرفع الوعي بالصحة العامة والوقاية من الأمراض المزمنة.",
    long_description_en:
      "Free screenings for blood pressure and blood sugar, educational sessions on nutrition and physical activity, and brief consultations with doctors and volunteers to raise awareness about chronic disease prevention.",
    category_ar: "صحة",
    category_en: "Health",
    image: "./assets/img/PublicHealthDay.jpeg",
    date: "2025-09-05",
    place_ar: "المركز الصحي المجتمعي",
    place_en: "Community Health Center",
    map: "https://maps.app.goo.gl/qvdLnDBpkivDqN7t9",
  },
  {
    title_ar: "حملة إعادة التشجير المجتمعية",
    title_en: "Community Reforestation Campaign",
    description_ar: "حملة تطوعية لزراعة الأشجار وتنظيف المساحات الخضراء",
    description_en:
      "Volunteer campaign for tree planting and green-space cleanup",
    long_description_ar:
      "يشارك متطوعون محليون بزراعة أشجار مناسبة للمناخ المحلي، تثقيف حول العناية بها، وأنشطة للأطفال لتعليم قيمة البيئة والحفاظ على الموارد الطبيعية.",
    long_description_en:
      "Local volunteers plant climate-appropriate trees, receive guidance on their care, and participate in children's activities that teach environmental values and resource preservation.",
    category_ar: "بيئة",
    category_en: "Environment",
    image: "./assets/img/CommunityReforestationCampaign.jpeg",
    date: "2025-10-10",
    place_ar: "ساحة الحي الخضراء",
    place_en: "Neighborhood Green Square",
    map: "https://maps.app.goo.gl/ith72ARTgoDr4gLS6",
  },
  {
    title_ar: "هاكاثون المدن الذكية",
    title_en: "Smart Cities Hackathon",
    description_ar: "مسابقة فرق لتطوير حلول تقنية لاحتياجات المدن المحلية",
    description_en:
      "Team competition to develop tech solutions for local urban needs",
    long_description_ar:
      "فرق متعددة التخصصات تعمل على نماذج أولية لحلول ذكية في مجالات النقل، إدارة النفايات، والمياه. يقدم المرشدون دعمًا تقنيًا، وتُمنح جوائز لفرق ذات تأثير عملي قابل للتطبيق.",
    long_description_en:
      "Multidisciplinary teams prototype smart solutions for transport, waste management, and water. Mentors provide technical support and awards go to teams with practical, deployable impact.",
    category_ar: "تكنولوجيا",
    category_en: "Technology",
    image: "./assets/img/SmartCitiesHackathon.jpeg",
    date: "2025-12-01",
    place_ar: "حاضنة الأعمال التقنية",
    place_en: "Tech Incubator",
    map: "https://maps.app.goo.gl/958Bgj5NABR6xEvD8",
  },
  {
    title_ar: "سوق الزراعة الحضرية",
    title_en: "Urban Farming Market",
    description_ar:
      "منتجات زراعية محلية من حدائق المدينة ومبادرات الزراعة المنزلية",
    description_en: "Produce from city gardens and small sustainable farms",
    long_description_ar:
      "سوق يركز على منتجي الحدائق الحضرية والمزارع الصغيرة المستدامة، مع أكشاك تعليمية عن الزراعة المائية والطرق الموفرّة للمياه لربط الطعام المحلي بالوعي البيئي.",
    long_description_en:
      "A market focused on urban garden producers and small sustainable farms, featuring educational booths on hydroponics and water-saving techniques linking local food production with environmental awareness.",
    category_ar: "طعام",
    category_en: "Food",
    image: "./assets/img/UrbanFarmingMarket.jpeg",
    date: "2025-07-18",
    place_ar: "ساحة الحي الخضراء",
    place_en: "Neighborhood Green Square",
    map: "https://maps.app.goo.gl/JmFAaZpCAdwjgPe47",
  },
  {
    title_ar: "عيادة متنقلة للمجتمع",
    title_en: "Mobile Community Clinic",
    description_ar: "خدمات طبية أساسية واستشارات صحية مجانية للمناطق المحتاجة",
    description_en:
      "Basic medical services and free health consultations for underserved areas",
    long_description_ar:
      "فريق طبي يقدم فحوصات أساسية، تطعيمات، ونصائح صحية ميدانية، مع إحالات للمتابعات اللازمة، ويعمل بالتنسيق مع متطوعين محليين لتعزيز الوصول إلى الرعاية الصحية.",
    long_description_en:
      "A medical team provides basic screenings, vaccinations, and on-the-spot health advice, coordinating with local volunteers to improve access to care and refer for follow-ups as needed.",
    category_ar: "صحة",
    category_en: "Health",
    image: "./assets/img/MobileCommunityClinic.jpeg",
    date: "2025-03-20",
    place_ar: "المركز الصحي المجتمعي",
    place_en: "Community Health Center",
    map: "https://maps.app.goo.gl/qvdLnDBpkivDqN7t9",
  },
  {
    title_ar: "مسابقة مشاريع الطاقة الخضراء",
    title_en: "Green Energy Project Contest",
    description_ar: "عرض أفكار وحلول طاقة متجددة مع دعم تقني ومالي",
    description_en:
      "Showcase of renewable energy ideas with technical and financial support",
    long_description_ar:
      "روّاد يقدمون حلولًا للطاقة الشمسية والادخار الطاقي لمنازل ومحلات صغيرة. توفر الجلسات تقييم عملي وفرص ربط مع جهات تمويل أو شراكات لتنفيذ مشاريع تجريبية.",
    long_description_en:
      "Entrepreneurs present solar and energy-saving solutions for homes and small shops. Sessions include practical evaluation and connections to potential funders or partners for pilot projects.",
    category_ar: "بيئة",
    category_en: "Environment",
    image: "./assets/img/GreenEnergyProjectContest.jpeg",
    date: "2025-01-05",
    place_ar: "مركز الابتكار",
    place_en: "Innovation Center",
    map: "https://maps.app.goo.gl/MTgtMs4FsxedzU4R9",
  },
  {
    title_ar: "مختبر الطبخ المجتمعي",
    title_en: "Community Cooking Lab",
    description_ar: "ورش عملية لتعلم وصفات صحية مع استخدام منتجات محلية",
    description_en:
      "Hands-on workshops to learn healthy recipes using local products",
    long_description_ar:
      "سلسلة ورش تجمع طهاة ومحاضرين تغذويين لتعليم وصفات منزلية صحية واقتصادية، مع نصائح للحفظ والتخطيط الغذائي، وتشجيع استخدام منتجات سوق الأطعمة المحلية.",
    long_description_en:
      "A series of workshops led by chefs and nutrition educators teaching affordable, healthy home recipes, storage tips, and meal planning while encouraging use of local market produce.",
    category_ar: "طعام",
    category_en: "Food",
    image: "./assets/img/CommunityCookingLab.jpeg",
    date: "2025-01-30",
    place_ar: "مركز الابتكار",
    place_en: "Innovation Center",
    map: "https://maps.app.goo.gl/MTgtMs4FsxedzU4R9",
  },
  {
    title_ar: "ورشة تركيب أنظمة شمسية مجتمعية",
    title_en: "Community Solar Installation Workshop",
    description_ar: "تدريب عملي لتركيب وصيانة أنظمة طاقة شمسية صغيرة للمجتمع",
    description_en:
      "Practical training on installing and maintaining small solar systems",
    long_description_ar:
      "ورشة تقنية تطبيقية تعلم أساسيات التصميم، التركيب، وصيانة الأنظمة الشمسية الصغيرة، مع تشكيل مجموعات تعاونية لتأسيس مشاريع طاقة مستدامة في الأحياء.",
    long_description_en:
      "A hands-on technical workshop covering design, installation, and maintenance of small solar systems, forming cooperative groups to start sustainable energy projects in neighborhoods.",
    category_ar: "تكنولوجيا",
    category_en: "Technology",
    image: "./assets/img/CommunitySolarInstallationWorkshop.jpeg",
    date: "2025-05-25",
    place_ar: "مركز الابتكار",
    place_en: "Innovation Center",
    map: "https://maps.app.goo.gl/MTgtMs4FsxedzU4R9",
  },
];

let categories = [
  {
    image: "./assets/img/Technology.svg",
    title_ar: "تكنولوجيا",
    title_en: "Technology",
    color: "secondary",
  },
  {
    image: "./assets/img/Food.svg",
    title_ar: "طعام",
    title_en: "Food",
    color: "danger",
  },
  {
    image: "./assets/img/Health.svg",
    title_ar: "صحة",
    title_en: "Health",
    color: "primary",
  },
  {
    image: "./assets/img/Environment.svg",
    title_ar: "بيئة",
    title_en: "Environment",
    color: "success",
  },
];

let places = [
  {
    place_ar: "مركز الابتكار",
    place_en: "Innovation Center",
  },
  {
    place_ar: "المركز الصحي المجتمعي",
    place_en: "Community Health Center",
  },
  {
    place_ar: "ساحة الحي الخضراء",
    place_en: "Neighborhood Green Square",
  },
  { place_ar: "حاضنة الأعمال التقنية", place_en: "Tech Incubator" },
];
let months = [
  { name_ar: "كانون الثاني", name_en: "January", number: "01" },
  { name_ar: "شباط", name_en: "February", number: "02" },
  { name_ar: "آذار", name_en: "March", number: "03" },
  { name_ar: "نيسان", name_en: "April", number: "04" },
  { name_ar: "أيار", name_en: "May", number: "05" },
  { name_ar: "حزيران", name_en: "June", number: "06" },
  { name_ar: "تموز", name_en: "July", number: "07" },
  { name_ar: "آب", name_en: "August", number: "08" },
  { name_ar: "أيلول", name_en: "September", number: "09" },
  { name_ar: "تشرين الأول", name_en: "October", number: "10" },
  { name_ar: "تشرين الثاني", name_en: "November", number: "11" },
  { name_ar: "كانون الأول", name_en: "December", number: "12" },
];

let allPages = [
  {
    name: "index",
    title_ar: "دليل الفعاليات / الرئيسية",
    title_en: "Event guide / Home",
  },
  {
    name: "events",
    title_ar: "دليل الفعاليات / الفعاليات",
    title_en: "Event guide / Events",
  },
  {
    name: "about",
    title_ar: "دليل الفعاليات / حول",
    title_en: "Event guide / About",
  },
  {
    name: "contact",
    title_ar: "دليل الفعاليات / تواصل",
    title_en: "Event guide / Contact",
  },
  {
    name: "event",
    title_ar: "دليل الفعاليات / التفاصيل",
    title_en: "Event guide / Details",
  },
];

// Preferences - those variables stores the first values for the preferences
let language = "arabic";
let mode = "dark";
let page = matchPage(document.title);
let notFoundPage = false;

let filter_month = null;
let filter_category = null;
let filter_place = null;

let customAlert = document.createElement("div");

// Functions to build the pages
function buildPage() {
  loadPreferences();

  if (
    !allPages.some((p) => {
      return p.name === page;
    })
  ) {
    document.getElementById(
      "main"
    ).innerHTML = `<h1 class="text-center" style="width: 100%;">Page does not exist - الصفحة غير موجودة</h1>`;
    notFoundPage = true;
    return;
  }

  if (page === "index") {
    document.title =
      language === "english"
        ? "Events Guide / Home"
        : "دليل الفعاليات / الرئيسية";

    document.getElementById("main-h1").innerText =
      language === "english" ? "City Events Guide" : "دليل فعاليات المدينة";
    document.getElementById("week-events-h2").innerText =
      language === "english" ? "This week events" : "فعاليات بارزة هذا الأسبوع";
    document.getElementById("quick-categories-h2").innerText =
      language === "english" ? "Quick categories" : "تصنيفات سريعة";
    document.getElementById("newest-events-h2").innerText =
      language === "english" ? "Newest events" : "أحدث الفعاليات";
    document.getElementById("week-events-div").innerHTML = buildEventCards(
      allEvents.slice(4, 7)
    );
    document.getElementById("quick-categories-div").innerHTML =
      buildCategoriesCards();
    document.getElementById("newest-events-div").innerHTML = buildEventCards(
      allEvents.slice(1, 4).reverse()
    );
  } else if (page === "events") {
    document.title =
      language === "english"
        ? "Events Guide / Events"
        : "دليل الفعاليات / الفعاليات";

    document.getElementById("all-events-h1").innerText =
      language === "english" ? "All events" : "كل الفعاليات";
    document.getElementById("all-events-div").innerHTML =
      buildEventCards(allEvents);
    document.getElementById("filter-div").innerHTML = buildFilter();
    let stored_category = localStorage.getItem("quick_category");
    if (
      stored_category &&
      categories.some((c) => {
        return c.title_en === stored_category || c.title_ar === stored_category;
      })
    ) {
      changeFilters({ selected_filter_category: stored_category });
      document.getElementById("all-events-div").innerHTML = buildEventCards(
        allEvents,
        { category: stored_category }
      );
      document.getElementById("filter-div").innerHTML = buildFilter();
    }
  } else if (page === "event") {
    document.title =
      language === "english"
        ? "Events Guide / Details"
        : "دليل الفعاليات / التفاصيل";

    document.getElementById("view-event-h1").innerText =
      language === "english" ? "Event Details" : "تفاصيل الفعالية";
    document.getElementById("suggested-events-h1").innerText =
      language === "english" ? "Suggested Events" : "فعاليات مقترحة";
    buildDetailedEvent();
  } else if (page === "about") {
    document.title =
      language === "english" ? "Events Guide / About" : "دليل الفعاليات / حول";

    document.getElementById("about-h1").innerText =
      language === "english" ? "About Us" : "حولنا";
    document.getElementById("about-p").innerText =
      language === "english"
        ? `We are a company that takes care of what is new in the society and provides detaied information about the events in the city`
        : `نحن شركة تهتم بكل ما هو جديد في المجتمع وتقدم معلومات مفصلة عن الأحداث في المدينة`;
    document.getElementById("participants-h2").innerText =
      language === "english" ? "Who are we?" : "من نحن";

    document.getElementById("policies-div").innerHTML = buildPolicySection();
  } else if (page === "contact") {
    document.title =
      language === "english"
        ? "Events Guide / Contact"
        : "دليل الفعاليات / تواصل";

    document.getElementById("contact-h1").innerText =
      language === "english" ? "Contact Us" : "تواصل معنا";
    document.getElementById("contact-form").innerHTML = buildContactForm();
    document.getElementById("additional-info-div").innerHTML =
      buildAdditionalSection();
  }

  buildNav();

  if (mode == "dark") {
    document.body.classList.remove("bg-body-light");
    document.body.classList.add("bg-body-dark");
  } else {
    document.body.classList.remove("bg-body-dark");
    document.body.classList.add("bg-body-light");
  }

  buildFooter();

  if (localStorage.getItem("quick_category")) {
    localStorage.removeItem("quick_category");
  }
}

function buildNav() {
  document.getElementById("header").innerHTML = `
  <nav class="navbar navbar-expand-lg navbar-${mode} bg-${mode} text-center">
        <a class="navbar-brand" href="./index.html">
          <img
            src="./assets/img/favicon.ico"
            alt="logo"
            width="30"
            height="30"
          />
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav justify-content-center" style="min-width: 100%">
            <li class="nav-item ${page === "index" ? "active" : ""}">
              <a class="nav-link" href="./index.html"
                >${language === "english" ? "Home" : "الرئيسية"}${
    page === "index" ? '<span class="sr-only">(current)</span>' : ""
  }</a
              >
            </li>
            <li class="nav-item ${page === "events" ? "active" : ""}">
              <a class="nav-link" href="./events.html">${
                language === "english" ? "Events" : "الفعاليات"
              }${
    page === "events" ? '<span class="sr-only">(current)</span>' : ""
  }</a>
            </li>
            <li class="nav-item ${page === "about" ? "active" : ""}">
              <a class="nav-link" href="./about.html">${
                language === "english" ? "About" : "حول"
              }${
    page === "about" ? '<span class="sr-only">(current)</span>' : ""
  }</a>
            </li>
            <li class="nav-item ${page === "contact" ? "active" : ""}">
              <a class="nav-link" href="./contact.html">${
                language === "english" ? "Contact" : "تواصل"
              }${
    page === "contact" ? '<span class="sr-only">(current)</span>' : ""
  }</a>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdownMenuLink"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                ${language === "english" ? "Language" : "اللغة"}
              </a>
              <div
                class="dropdown-menu text-center"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <a
                  class="dropdown-item"
                  href="#"
                  onclick="switchLanguage('arabic')"
                >
                  <img
                    src="./assets/img/syria.png"
                    alt="syria"
                    width="30"
                    height="20"
                  />&nbsp;&nbsp; العربية</a
                >
                <a
                  class="dropdown-item"
                  href="#"
                  onclick="switchLanguage('english')"
                  ><img
                    src="./assets/img/usa.png"
                    alt="usa"
                    width="30"
                    height="20"
                  />&nbsp;&nbsp;English</a
                >
              </div>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdownMenuLink"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                ${language === "english" ? "Mode" : "النمط"}
              </a>
              <div
                class="dropdown-menu text-center"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <a class="dropdown-item" href="#" onclick="switchMode('light')">${
                  language === "english" ? "Light" : "نهاري"
                }</a>
                <a class="dropdown-item" href="#" onclick="switchMode('dark')">${
                  language === "english" ? "Dark" : "ليلي"
                }</a>
              </div>
            </li>
          </ul>
        </div>
      </nav>
  `;
}

function buildFooter() {
  document.getElementById("footer").innerHTML = `
  <div class="py-4 bg-${mode}">
        <div style="display: flex; flex-wrap: wrap">
          <div class="col-md-6">
            <h5>${language === "english" ? "Our Goal" : "هدفنا"}</h5>
            <p class="small">
            ${
              language === "english"
                ? "We aspire to create a unique experience in delivering the most reliable information about events taking place in the city"
                : "نطمح لعمل تجربة فريدة في تقديم أوثق المعلومات عن الفعاليات التي تحدث في المدينة"
            }
              
            </p>
          </div>
          <div class="col-md-3">
            <h5>${language === "english" ? "Our Links" : "روابطنا"}</h5>
            <ul class="list-unstyled">
              <li><a href="#">${
                language === "english" ? "Home" : "الرئيسية"
              }</a></li>
              <li><a href="#">${
                language === "english" ? "Services" : "خدماتنا"
              }</a></li>
              <li><a href="#">${
                language === "english" ? "Help" : "مساعدة"
              }</a></li>
            </ul>
          </div>
          <div class="col-md-3">
            <h5>${language === "english" ? "Our Accounts" : "حساباتنا"}</h5>
            <ul class="list-unstyled">
              <li>
                <a href="#" class="text-white"
                  ><img
                    src="./assets/img/facebook.svg"
                    alt="social"
                    width="20"
                    height="20"
                /></a>
              </li>
              <li>
                <a href="#" class="text-white"
                  ><img
                    src="./assets/img/instagram.svg"
                    alt="social"
                    width="20"
                    height="20"
                /></a>
              </li>
              <li>
                <a href="#" class="text-white"
                  ><img
                    src="./assets/img/youtube.svg"
                    alt="social"
                    width="20"
                    height="20"
                /></a>
              </li>
            </ul>
          </div>
        </div>
        <hr class="bg-white" />
        <div class="text-center small">&copy; 2025 ${
          language === "english" ? "All rights reserved" : "جميع الحقوق محفوظة"
        }</div>
      </div>
  `;
}

function buildEventCards(
  events,
  filter = { month: null, category: null, place: null }
) {
  let filteredEvents = events.filter((event) => {
    if (filter.month) {
      if (!event.date || event.date.split("-")[1] !== filter.month)
        return false;
    }

    if (filter.category) {
      if (
        event.category_en !== filter.category &&
        event.category_ar !== filter.category
      )
        return false;
    }

    if (filter.place) {
      if (event.place_en !== filter.place && event.place_ar !== filter.place)
        return false;
    }

    return true;
  });

  let filteredEventsCards = "";

  filteredEvents.forEach((event) => {
    filteredEventsCards =
      filteredEventsCards +
      `<div onclick="goToEvent('${
        event.image.split(".")[1].split("/")[3]
      }')" class="card bg-dark text-light border border-${matchColor(
        event.category_en
      )}" style="text-align: center;">
          <img
            class="card-img-top"
            src=${event.image}
            alt="Card image cap"
          />
          <div class="card-body">
            <h5 class="card-title">${
              language === "english" ? event.title_en : event.title_ar
            }</h5>
            <p class="card-text">
              ${
                language === "english"
                  ? event.description_en
                  : event.description_ar
              }
            </p>
            <p class="card-text">
              <small class="text-muted">${event.date}</small>
            </p>
            <p class="card-text">
              <small>${
                language === "english" ? event.place_en : event.place_ar
              }</small>
            </p>
            <p class="card-text bg-${matchColor(event.category_en)} text-light">
              <small>${
                language === "english" ? event.category_en : event.category_ar
              }</small>
            </p>
            </div>
            </div>`;
  });

  return filteredEventsCards;
}

function buildCategoriesCards() {
  let categoriesCards = "";

  categories.forEach((c) => {
    categoriesCards =
      categoriesCards +
      `<div onclick="goToCategory('${c.title_en}')" class="category bg-${
        c.color
      } text-light text-center" style="text-align: center;">
          <img
            class="card-img-top-category"
            src=${c.image}
            alt="Card image cap"
          />
          <div class="card-body">
            <h5 class="card-title">${
              language === "english" ? c.title_en : c.title_ar
            }</h5>
            
            </div>
            </div>`;
  });

  return categoriesCards;
}

function buildFilter() {
  let categoryFilter = `<li style="cursor: pointer; text-align: center" onclick="changeFilters({selected_filter_category : null})">${
    language === "english" ? "No filter" : "بلا تصفية"
  }</li>`;
  categories.forEach((c) => {
    categoryFilter =
      categoryFilter +
      `<li style="cursor: pointer; text-align: center" onclick="changeFilters({selected_filter_category : '${
        c.title_en
      }'})">${language === "english" ? c.title_en : c.title_ar}</li>`;
  });

  let placeFilter = `<li style="cursor: pointer; text-align: center" onclick="changeFilters({selected_filter_place : null})">${
    language === "english" ? "No filter" : "بلا تصفية"
  }</li>`;
  places.forEach((p) => {
    placeFilter =
      placeFilter +
      `<li style="cursor: pointer; text-align: center" onclick="changeFilters({selected_filter_place : '${
        p.place_en
      }'})">${language === "english" ? p.place_en : p.place_ar}</li>`;
  });

  let monthFilter = `<li style="cursor: pointer; text-align: center" onclick="changeFilters({selected_filter_month : null})">${
    language === "english" ? "No filter" : "بلا تصفية"
  }</li>`;
  months.forEach((m) => {
    monthFilter =
      monthFilter +
      `<li style="cursor: pointer; text-align: center" onclick="changeFilters({selected_filter_month : '${
        m.number
      }'})">${language === "english" ? m.name_en : m.name_ar}</li>`;
  });

  return `
          <h2 id="all-events-h1">${
            language === "english" ? "Filters" : "تصفية"
          }</h2>
  <div class="dropdown" style="position: relative">
            
  <button
              class="btn btn-primary dropdown-toggle"
              type="button"
              data-toggle="dropdown"
            >
              ${
                language === "english" ? "Category" : "التصنيف"
              } <span class="caret"></span>
            </button>
            <div id="selected-filter-category-label">${
              filter_category !== null
                ? matchCategory(filter_category)
                : language === "english"
                ? "No filter"
                : "بلا تصفية"
            }</div>
            <ul id="dropdown-menu-categories" class="dropdown-menu">
${categoryFilter}
            </ul>
          </div>
          <div class="dropdown" style="position: relative">
          
            <button
              class="btn btn-primary dropdown-toggle"
              type="button"
              data-toggle="dropdown"
            >
              ${
                language === "english" ? "Place" : "الموقع"
              } <span class="caret"></span>
            </button>
            <div id="selected-filter-place-label">${
              filter_place !== null
                ? matchPlace(filter_place)
                : language === "english"
                ? "No filter"
                : "بلا تصفية"
            }</div>
            <ul id="dropdown-menu-categories" class="dropdown-menu">
${placeFilter}
            </ul>
          </div>
          <div class="dropdown" style="position: relative">
          
            <button
              class="btn btn-primary dropdown-toggle"
              type="button"
              data-toggle="dropdown"
            >
              ${
                language === "english" ? "Date" : "التاريخ"
              } <span class="caret"></span>
            </button>
            <div id="selected-filter-month-label">${
              filter_month !== null
                ? matchMonth(filter_month)
                : language === "english"
                ? "No filter"
                : "بلا تصفية"
            }</div>
            <ul id="dropdown-menu-categories" class="dropdown-menu">
${monthFilter}
            </ul>
          </div>
          <div>
          
            <button
              class="btn btn-secondary"
              type="button"
              onclick="changeFilters({
  selected_filter_month : null,
  selected_filter_category : null,
  selected_filter_place : null,
})"
            >
              ${language === "english" ? "Reset filters" : "مسح التصفيات"}
            </button>
            
            
          </div>`;
}

function buildDetailedEvent() {
  let params = new URLSearchParams(window.location.search);
  let eventTitle = params.get("title");
  let chosenEvent = allEvents.find(
    (e) => e.image.split(".")[1].split("/")[3] === eventTitle
  );

  if (chosenEvent) {
    document.getElementById(
      "view-event-div"
    ).innerHTML = `<div style="text-align: center;">
          <img
            style="width: 70%; max-width: 600px;"
            src=${chosenEvent.image}
            alt="Card image cap"
          />
          <div>
            <h2 style="font-weight: 500; font-size: 3rem; margin: 40px 0">${
              language === "english"
                ? chosenEvent.title_en
                : chosenEvent.title_ar
            }</h2>
            <p class="card-text">
              ${
                language === "english"
                  ? chosenEvent.description_en
                  : chosenEvent.description_ar
              }
            </p>
            <p class="card-text">
              ${
                language === "english"
                  ? chosenEvent.long_description_en
                  : chosenEvent.long_description_ar
              }
            </p>
            <p >
              <small>${chosenEvent.date}</small>
            </p>
            <p >
              ${
                language === "english"
                  ? chosenEvent.place_en
                  : chosenEvent.place_ar
              }
            </p>
            <p class="card-text bg-${matchColor(
              chosenEvent.category_en
            )} text-light">
              ${
                language === "english"
                  ? chosenEvent.category_en
                  : chosenEvent.category_ar
              }
            </p>
            </div>
            </div>
            <div style="display: flex; justify-content: center; align-items: center; gap: 20px;flex-wrap: wrap">${buildSmallImgs(
              chosenEvent.image
            )}</div>
            <div style="display: flex; justify-content: center; align-items: center; gap: 20px; margin: 30px 0;">
              <button onclick="shareOrAddEvent('share')" class="btn btn-${matchColor(
                chosenEvent.category_en
              )}">${
      language === "english" ? "Share the event" : "شارك الفعالية"
    }</button>
              <button onclick="shareOrAddEvent('add')" class="btn btn-${matchColor(
                chosenEvent.category_en
              )}">${
      language === "english" ? "Add the event" : "أضف الفعالية"
    }</button>
            </div>`;

    document.getElementById("suggested-events-div").innerHTML = buildEventCards(
      allEvents.filter((e) => {
        return (
          e.category_en === chosenEvent.category_en &&
          e.title_en !== chosenEvent.title_en
        );
      })
    );
  } else {
    document.getElementById("view-event-div").innerHTML =
      language === "english"
        ? "No event with this title"
        : "لا يوجد فعالية بهذا العنوان";
    document.getElementById("suggested-events-div").innerHTML = "";
  }
}

function buildContactForm() {
  return `<form style="max-width: 600px; padding: 30px; margin: 40px 0 0; border-radius: 20px" class="bg-${mode} border border-primary">
  <div class="form-group">
            <label for="name-input">${
              language === "english" ? "Name" : "الاسم"
            }</label>
            <input
              min-length="3"
              type="text"
              class="form-control"
              id="name-input"
              aria-describedby="nameHelp"
              placeholder="${
                language === "english" ? "Enter name" : "أدخل الاسم"
              }"
            />
          </div>        
  <div class="form-group">
            <label for="email-input">${
              language === "english" ? "Email Address" : "البريد الإلكتروني"
            }</label>
            <input
              min-length="3"
              type="email"
              class="form-control"
              id="email-input"
              aria-describedby="emailHelp"
              placeholder="${
                language === "english"
                  ? "Enter email"
                  : "أدخل البريد الإلكتروني"
              }"
            />
          </div>
          <div class="form-group">
            <label for="message-input">${
              language === "english" ? "Message" : "الرسالة"
            }</label>
            <textarea
              min-length="5"
              type="message"
              class="form-control"
              id="message-input"
              placeholder="${
                language === "english" ? "Enter message" : "أدخل الرسالة"
              }"
            ></textarea>
          </div>
          
          <button type="button" onclick="sendMessage()" class="btn btn-primary">${
            language === "english" ? "Send" : "أرسل"
          }<img src="./assets/img/send.svg" alt="send-icon" width="30" height="30" style="filter: brightness(0) invert(100%)"/></button>
        </form>`;
}

function buildAdditionalSection() {
  return language === "english"
    ? `<section class="container" style="margin: 100px auto auto">
  <div class="row">
    <div class="col-md-6">
      <h2 class="mb-3">General Email</h2>
      <p>You can reach us via the following email:</p>
      <p><strong>Email:</strong> contact@example.com</p>
    </div>
    <div class="col-md-6">
      <h3 class="mb-3">Follow us on social media</h3>
      <ul class="list-unstyled">
        <li><a href="#" class="text-primary">Facebook</a></li>
        <li><a href="#" class="text-info">Twitter</a></li>
        <li><a href="#" class="text-danger">YouTube</a></li>
        <li><a href="#" class="text-warning">Instagram</a></li>
      </ul>
    </div>
  </div>
</section>
`
    : `<section class="container" style="margin: 100px auto auto">
            <div class="row">
              <div class="col-md-6">
                <h2 class="mb-3">بريدنا الإلكتروني العام</h2>
                <p>يمكنك مراسلتنا عبر البريد الإلكتروني التالي:</p>
                <p><strong>البريد الإلكتروني:</strong> contact@example.com</p>
              </div>
              <div class="col-md-6">
                <h3 class="mb-3">تابعنا على وسائل التواصل</h3>
                <ul class="list-unstyled">
                  <li><a href="#" class="text-primary">فيسبوك</a></li>
                  <li><a href="#" class="text-info">تويتر</a></li>
                  <li><a href="#" class="text-danger">يوتيوب</a></li>
                  <li><a href="#" class="text-warning">إنستغرام</a></li>
                </ul>
              </div>
            </div>
          </section>`;
}

function buildPolicySection() {
  const baseStyle = "border-radius: 10px; padding: 30px;";

  if (language === "english") {
    return `
<section class="container my-5">
  <div class="row">
    <div class="col-md-12 bg-${mode} text-${
      mode === "dark" ? "light" : "dark"
    }" style="${baseStyle}">
      <h2 class="mb-4">Site Policies</h2>

      <div class="mb-4">
        <h5>1. Information Accuracy</h5>
        <p>We strive to provide accurate and up-to-date information about events in Syria, but we cannot guarantee 100% error-free content.</p>
      </div>

      <div class="mb-4">
        <h5>3. Data Privacy</h5>
        <p>We do not collect personal data without user consent, and we use local storage tools only to enhance browsing experience.</p>
      </div>

      <div class="mb-4">
        <h5>4. Content Updates</h5>
        <p>Events may be modified or removed based on information availability or changes from organizers.</p>
      </div>

      <div class="mb-4">
        <h5>5. Content Usage</h5>
        <p>Published information may be used for non-commercial purposes with proper source attribution.</p>
      </div>
    </div>
  </div>
</section>
    `;
  } else {
    return `
<section class="container my-5">
  <div class="row">
    <div class="col-md-12 bg-${mode} text-${
      mode === "dark" ? "light" : "dark"
    }" style="${baseStyle}">
      <h2 class="mb-4">سياسات الموقع</h2>

      <div class="mb-4">
        <h5>١. دقة المعلومات</h5>
        <p>نحن نسعى لتقديم معلومات دقيقة ومحدثة عن الفعاليات في سوريا، ولكن لا نضمن خلوها من الأخطاء بنسبة 100٪.</p>
      </div>

      <div class="mb-4">
        <h5>٣. خصوصية البيانات</h5>
        <p>لا نقوم بجمع معلومات شخصية دون موافقة المستخدم، ونستخدم أدوات تخزين محلية فقط لتحسين تجربة التصفح.</p>
      </div>

      <div class="mb-4">
        <h5>٤. تحديثات المحتوى</h5>
        <p>قد يتم تعديل أو حذف بعض الفعاليات بناءً على توفر المعلومات أو تغييرات من الجهات المنظمة.</p>
      </div>

      <div class="mb-4">
        <h5>٥. استخدام المحتوى</h5>
        <p>يُسمح باستخدام المعلومات المنشورة لأغراض غير تجارية مع الإشارة إلى المصدر.</p>
      </div>
    </div>
  </div>
</section>
    `;
  }
}

function buildSmallImgs(image) {
  let smallImgs = ``;
  let chosenEvent = allEvents.find((e) => e.image === image);

  if (chosenEvent) {
    [1, 2, 3].forEach((n) => {
      smallImgs =
        smallImgs +
        `<img src="./assets/img/${
          image.split(".")[1].split("/")[3]
        }_small_${n}.${
          image.split(".")[image.split(".").length - 1]
        }" alt="small_img_${n}" width="200" height="150" style="object-fit: cover"/>`;
    });

    smallImgs =
      smallImgs +
      `<a href="${chosenEvent.map}" target="_blank"><img src="./assets/img/${
        image.split(".")[1].split("/")[3]
      }_small_map.${
        image.split(".")[image.split(".").length - 1]
      }" alt="small_img_map" width="200" height="150" style="object-fit: cover"/></a>`;

    return smallImgs;
  } else {
    return ``;
  }
}

function changeFilters({
  selected_filter_month = filter_month,
  selected_filter_category = filter_category,
  selected_filter_place = filter_place,
}) {
  if (page !== "events") {
    return;
  }

  filter_month = selected_filter_month;
  filter_place = selected_filter_place;
  filter_category = selected_filter_category;

  document.getElementById("all-events-div").innerHTML = buildEventCards(
    allEvents,
    { month: filter_month, category: filter_category, place: filter_place }
  );
  document.getElementById("selected-filter-category-label").innerText =
    filter_category !== null
      ? matchCategory(filter_category)
      : language === "english"
      ? "No filter"
      : "بلا تصفية";
  document.getElementById("selected-filter-place-label").innerText =
    filter_place !== null
      ? matchPlace(filter_place)
      : language === "english"
      ? "No filter"
      : "بلا تصفية";
  document.getElementById("selected-filter-month-label").innerText =
    filter_month !== null
      ? matchMonth(filter_month)
      : language === "english"
      ? "No filter"
      : "بلا تصفية";
}

function matchPage(title) {
  let currentPage = allPages.find((p) => {
    return p.title_ar === title || p.title_en === title;
  });

  if (currentPage) {
    return currentPage.name;
  } else {
    return "index";
  }
}

function matchColor(category) {
  if (category === "تكنولوجيا" || category === "Technology") {
    return "secondary";
  } else if (category === "طعام" || category === "Food") {
    return "danger";
  } else if (category === "بيئة" || category === "Environment") {
    return "success";
  } else if (category === "صحة" || category === "Health") {
    return "primary";
  }
}

function matchCategory(category_en) {
  return language === "english"
    ? categories.find((c) => {
        return c.title_en === category_en;
      }).title_en
    : categories.find((c) => {
        return c.title_en === category_en;
      }).title_ar;
}

function matchPlace(place_en) {
  return language === "english"
    ? places.find((c) => {
        return c.place_en === place_en;
      }).place_en
    : places.find((c) => {
        return c.place_en === place_en;
      }).place_ar;
}

function matchMonth(month) {
  return language === "english"
    ? months.find((c) => {
        return c.number === month;
      }).name_en
    : months.find((c) => {
        return c.number === month;
      }).name_ar;
}

function switchLanguage(selectedLanguage = "arabic") {
  if (selectedLanguage === "english") {
    language = "english";
    document.dir = "ltr";
    localStorage.setItem("language", "english");
  } else {
    language = "arabic";
    document.dir = "rtl";
    localStorage.setItem("language", "arabic");
  }

  buildPage();
}

function switchMode(selectedMode) {
  if (selectedMode === "light") {
    mode = "light";
    localStorage.setItem("mode", "light");
  } else {
    mode = "dark";
    localStorage.setItem("mode", "dark");
  }

  buildPage();
}

function loadPreferences() {
  if (localStorage.getItem("language") === "english") {
    language = "english";
    document.dir = "ltr";
  } else {
    language = "arabic";
    document.dir = "rtl";
    localStorage.setItem("language", "arabic");
  }

  if (localStorage.getItem("mode") === "light") {
    mode = "light";
  } else {
    mode = "dark";
    localStorage.setItem("mode", "dark");
  }
}

function goToCategory(category) {
  let valid_category = categories.find((c) => {
    return c.title_en === category;
  }).title_en;
  if (valid_category) {
    localStorage.setItem("quick_category", valid_category);
    document.location.href = "./events.html";
  }
}

function shareOrAddEvent(action) {
  if (action === "share") {
    openAlert(
      "مشاركة الفعالية",
      "Share the event",
      "شكرًا لمشاركتك لإحدى فعالياتنا، ابق على تواصل لتعلم كل جديد",
      "Thank you for sharing one of our events. Keep in touch with us to know every new thing",
      "success"
    );
  } else if (action === "add") {
    openAlert(
      "إضافة الفعالية",
      "Add the event",
      "شكرًا لإضافة إحدى فعالياتنا، ابق على تواصل لتعلم كل جديد",
      "Thank you for adding one of our events. Keep in touch with us to know every new thing",
      "success"
    );
  }
}

function goToEvent(eventTitle) {
  document.location.href = `./event.html?title=${eventTitle}`;
}

function sendMessage() {
  let errors = [];

  if (document.getElementById("name-input").value === "") {
    errors.push({
      error_ar: "حقل الاسم مطلوب",
      error_en: "Name field is reqiured",
    });
  }
  if (document.getElementById("email-input").value === "") {
    errors.push({
      error_ar: "حقل البريد الإلكتروني مطلوب",
      error_en: "Email field is reqiured",
    });
  } else {
    if (!isValidEmail(document.getElementById("email-input").value)) {
      errors.push({
        error_ar: "البريد الإلكتروني غير صالح",
        error_en: "Email is not valid",
      });
    }
  }
  if (document.getElementById("message-input").value === "") {
    errors.push({
      error_ar: "حقل الرسالة مطلوب",
      error_en: "Message field is reqiured",
    });
  }

  if (errors.length === 0) {
    openAlert(
      "تم إرسال الرسالة",
      "Message was sended",
      "سنرد عليك قريبًا، شكرًا لتواصلك معنا",
      "We will reply to you soon, thank you for contacting us",
      "success",
      true
    );
  } else {
    let errorsMessages_ar = "";
    errors.forEach((e) => {
      errorsMessages_ar = errorsMessages_ar + `<p>${e.error_ar}</p>`;
    });

    let errorsMessages_en = "";
    errors.forEach((e) => {
      errorsMessages_en = errorsMessages_en + `<p>${e.error_en}</p>`;
    });
    openAlert(
      "املأ الحقول بشكل صحيح",
      "Fill the fields correctly",
      errorsMessages_ar,
      errorsMessages_en,
      "danger",
      false
    );
  }
}

function isValidEmail(email) {
  var pattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
  return pattern.test(email);
}

function restart() {
  window.location.reload();
}

function openAlert(
  heading_ar,
  heading_en,
  message_ar,
  message_en,
  bootstrapColor,
  restartWhenClose
) {
  customAlert.style.position = "fixed";
  customAlert.style.top = "0";
  customAlert.style.bottom = "0";
  customAlert.style.left = "0";
  customAlert.style.right = "0";
  customAlert.style.width = "100%";
  customAlert.style.height = "100%";
  customAlert.style.backgroundColor = "rgba(0, 0, 0, 0.6)";
  customAlert.style.display = "flex";
  customAlert.style.justifyContent = "center";
  customAlert.style.alignItems = "center";
  customAlert.style.zIndex = "30";

  if (restartWhenClose) {
    customAlert.innerHTML = `<div class="alert alert-${bootstrapColor}" style="z-index: 40" role="alert">
  <h4 class="alert-heading">${
    language === "english" ? heading_en : heading_ar
  }</h4>
  <div style="display: flex; flex-direction: column; margin-top: 20px">${
    language === "english" ? message_en : message_ar
  }</div>
  <hr>
  <button class="btn btn-${bootstrapColor}" onclick="closeAlertAndRestart()">${
      language === "english" ? "OK" : "موافق"
    }</button>
  </div>`;
  } else {
    customAlert.innerHTML = `<div class="alert alert-${bootstrapColor}" style="z-index: 40" role="alert">
  <h4 class="alert-heading">${
    language === "english" ? heading_en : heading_ar
  }</h4>
  <div style="display: flex; flex-direction: column; margin-top: 20px">${
    language === "english" ? message_en : message_ar
  }</div>
  <hr>
  <button class="btn btn-${bootstrapColor}" onclick="closeAlert()">${
      language === "english" ? "OK" : "موافق"
    }</button>
  </div>`;
  }

  document.body.appendChild(customAlert);
}

function closeAlert() {
  document.body.removeChild(customAlert);
}

function closeAlertAndRestart() {
  document.body.removeChild(customAlert);
  document.location.reload();
}
