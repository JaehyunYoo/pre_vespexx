/** Low Data Type */
export type CardData = {
  title: string;
  description: string;
  image: string;
};

export type CoupleDynamicsDataProps = {
  icon: string;
  title: string;
  description: string;
};

export type NewsAndMediaDataProps = {
  image: string;
  title: string;
  link: string;
  alt?: string;
};

export type TeamCardDataProps = {
  image: string;
  name: string;
  position: string;
  alt: string;
};

/** Low Data */

export const homeCardScrollScaleData: CardData[] = [
  {
    title: "Integrated Calendar",
    description: "Sync with your daily life",
    image: "/images/home/card_calendar.png",
  },
  {
    title: "Share Your Schedules",
    description: "Well-Organized Shared Calendar",
    image: "/images/home/card_schedule.png",
  },
  {
    title: "Manage Health Together",
    description: "Health Record, Menstrual Cycle, Mental Care",
    image: "/images/home/card_health.png",
  },
  {
    title: "Messenger & Status Mode",
    description: "Stay connected with quick status updates",
    image: "/images/home/card_couple_status.png",
  },
];

export const cardUiTogetherData = [
  {
    icon: "/images/icon1.svg",
    title: "Sync the Schedule\nasdf",
    description: "Connected Calendar as a Platform",
  },
];

export const cardUiRelationShipData = [
  {
    icon: "/images/icon1.svg",
    title: "Sync the Schedule\nasdf",
    description: "Connected Calendar as a Platform",
  },
];

export const coupleDynamicsDataFirst = {
  title: "Bring Relationships Closer Together",
  data: [
    {
      icon: "/images/icons/calendar.png",
      title: `Customizable Calendar Themes`,
      description: "Personalize calendar themes to match your style",
    },
    {
      icon: "/images/icons/todo.png",
      title: "Calendar Synced To-Do Lists",
      description:
        "Sync to-do lists, tasks, and habits with your calendar for seamless planning",
    },
    {
      icon: "/images/icons/simple_design.png",
      title: "Streamlined Design for Productivity",
      description:
        "Enjoy intelligent tools and other features for a smoother experience",
    },
  ],
};

export const coupleDynamicsDataSecond = {
  title: "For a Better and Lasting Relationship",
  data: [
    {
      icon: "/images/icons/couple_contents.png",
      title: "Curated Expert Content for Couples",
      description:
        "Access expertly curated content to better understand your partner and strengthen your relationship",
    },
    {
      icon: "/images/icons/care.png",
      title: "Personalized Relationship Consulting",
      description:
        "Get tailored guidance for building a healthier, more fulfilling relationship",
    },
    {
      icon: "/images/icons/management.png",
      title: "Shared Financial Planning for Couples",
      description:
        "Manage shared financial records seamlessly with a synced calendar",
    },
  ],
};

export const newsAndMediaData: NewsAndMediaDataProps[] = [
  {
    image: "/images/news/news_01.png",
    title: "Signaling' Expands Global Reach and Monetization",
    link: "/blog/14223ccd8c2c807bb67dc096922bed31",
    alt: "Signaling' Expands Global Reach and Monetization",
  },
  {
    image: "/images/news/news_02.png",
    title:
      "Signaling' Surpasses 200,000 Users, Targets Global Market with Premium Features",
    link: "/blog/14323ccd8c2c80e4b357cb3fb648f506",
    alt: "Signaling' Surpasses 200,000 Users, Targets Global Market with Premium Features",
  },
  {
    image: "/images/news/news_03.png",
    title: "Vespexx Launches “Signaling” in the U.S. and Japan",
    link: "/blog/14323ccd8c2c805db059c18cf67bc563",
    alt: "Vespexx Launches “Signaling” in the U.S. and Japan",
  },
  {
    image: "/images/news/news_04.png",
    title: "“Signaling” Surpasses 200,000 Downloads as Couples' Calendar SaaS",
    link: "/blog/14323ccd8c2c800ba2d4d972156dd05c",
    alt: "“Signaling” Surpasses 200,000 Downloads as Couples' Calendar SaaS",
  },
  {
    image: "/images/news/news_05.png",
    title:
      "“Signaling” Experiences Rapid 110% Monthly Growth as Couples' Calendar SaaS",
    link: "/blog/14323ccd8c2c80da8c52e92f62c90072",
    alt: "“Signaling” Experiences Rapid 110% Monthly Growth as Couples' Calendar SaaS",
  },
  {
    image: "/images/news/news_06.png",
    title:
      "Couple Calendar SaaS “Signaling” Reaches 200,000 Downloads in Just 7 Months",
    link: "/blog/14323ccd8c2c80e2815ee5e062b2ebe3",
    alt: "Couple Calendar SaaS “Signaling” Reaches 200,000 Downloads in Just 7 Months",
  },
];

/** C-Level Team Data */
export const cLevelTeamData: TeamCardDataProps[] = [
  {
    image: "/images/team/ceo.png",
    name: "M.J. Sohn",
    position: "CEO, Ph.D.",
    alt: "CEO, Ph.D. M.J. Sohn",
  },
  {
    image: "/images/team/coo.png",
    name: "J.W. Jung",
    position: "COO",
    alt: "COO J.W. Jung",
  },
];

/** Platform Team Data*/
export const platformTeamData: TeamCardDataProps[] = [
  {
    image: "/images/team/p_cjl.png",
    name: "C.J. Lee",
    position: "Product Manager",
    alt: "Product Manager C.J. Lee",
  },
  {
    image: "/images/team/p_hsj.png",
    name: "H.S. Jang",
    position: "Growth Manager",
    alt: "Growth Manager H.S. Jang",
  },
  {
    image: "/images/team/p_shp.png",
    name: "S.H. Park",
    position: "Senior Engineer",
    alt: "Senior Engineer S.H. Park",
  },
  {
    image: "/images/team/p_jgk.png",
    name: "J.G. Kang",
    position: "Developer",
    alt: "Developer J.G. Kang",
  },
  {
    image: "/images/team/p_jhy.png",
    name: "J.H. Yoo",
    position: "Developer",
    alt: "Developer J.H. Yoo",
  },
  {
    image: "/images/team/p_yjs.png",
    name: "Y.J. Shin",
    position: "Product Designer",
    alt: "Product Designer Y.J. Shin",
  },
];
/** Healthcare Team Data */
export const healthcareTeamData: TeamCardDataProps[] = [
  {
    image: "/images/team/h_she.png",
    name: "S.H. Eom",
    position: "Lead",
    alt: "Lead S.H. Eom",
  },
  {
    image: "/images/team/h_yjp.png",
    name: "Y.J. Park",
    position: "Developer",
    alt: "Developer Y.J. Park",
  },
  {
    image: "/images/team/h_jkk.png",
    name: "J.K. Kang",
    position: "Product Designer",
    alt: "Product Designer J.K. Kang",
  },
];
/** Finance Team Data */
export const financeTeamData: TeamCardDataProps[] = [
  {
    image: "/images/team/f_hik.png",
    name: "H.I. Kim",
    position: "Lead",
    alt: "Lead H.I. Kim",
  },
];

export const linkData = {
  android:
    "https://play.google.com/store/apps/details?id=com.vespexx.signal&gl=us&hl=en",
  ios: "https://apps.apple.com/us/app/signaling-calendar-for-couple/id6474220479?l=us&platform=iphone",
  privacyPolicy:
    "https://signaling.zendesk.com/hc/en-us/articles/37568540881049-Privacy-Policy",
  termsOfService:
    "https://signaling.zendesk.com/hc/en-us/articles/37567865207321-Term-of-Use",
  faq: "https://signaling.zendesk.com/hc/en-us/sections/37936551442457-FAQ",
};

export const popUpDate = [
  {
    id: 1,
    desktop:
      "https://firebasestorage.googleapis.com/v0/b/vespexx-signal-dev-4c404.appspot.com/o/web_popup%2Fdesktop_popup_01.png?alt=media&token=62953a4a-629d-4b71-a024-cf583b603f15",
    mobile:
      "https://firebasestorage.googleapis.com/v0/b/vespexx-signal-dev-4c404.appspot.com/o/web_popup%2Fmobile_carousel_01.png?alt=media&token=6226d297-b7a7-47a9-8c79-8c93e0359c5a",
    alt: "CES PopUp Image 1",
    link: "/ces",
  },
  {
    id: 2,
    desktop:
      "https://firebasestorage.googleapis.com/v0/b/vespexx-signal-dev-4c404.appspot.com/o/web_popup%2Fdesktop_popup_02.png?alt=media&token=b88b7c3c-4073-4253-b76d-e92283eb982b",
    mobile:
      "https://firebasestorage.googleapis.com/v0/b/vespexx-signal-dev-4c404.appspot.com/o/web_popup%2Fmobile_pop_up_02.png?alt=media&token=9689932e-6cb0-4af3-851d-7a8f2c44d142",
    alt: "CES PopUp Image 2",
    link: "/ces",
  },
];

export const notionPageId = {
  careers: "b6c3a8e3714d4911914771a8b3a98a0b",
  ces: "14523ccd8c2c808a9743ff99d570c255",
};
