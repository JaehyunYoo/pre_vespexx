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
    title: "Connected Calendar",
    description: "Sync with daily life",
    image: "/images/home/card_calendar.png",
  },
  {
    title: "Sync the Schedule",
    description: "Connected Calendar as a Platform",
    image: "/images/home/card_schedule.png",
  },
  {
    title: "Manage health together",
    description: "Health Record, Menstrual Cycle, Mental Care",
    image: "/images/home/card_health.png",
  },
  {
    title: "Messenger & Status Mode",
    description: "Care better with quick status updates",
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
  title: "Bring us closer together",
  data: [
    {
      icon: "/images/icons/calendar.png",
      title: `Calendar Theme\nCustomization`,
      description: "Manage your schedules according to your preferences",
    },
    {
      icon: "/images/icons/todo.png",
      title: "To-do list synced\nwith calendar",
      description:
        "Manage your housechore, tasks, habits, and bucket lists together according to the schedules",
    },
    {
      icon: "/images/icons/simple_design.png",
      title: "Simple and Intuitive Design\nfor Maximized Productivity",
      description:
        "with intelligent tools, expert content,and premium lifestyle offerings",
    },
  ],
};

export const coupleDynamicsDataSecond = {
  title: "For a Better and Lasting Relationship",
  data: [
    {
      icon: "/images/icons/couple_contents.png",
      title: "High-Quality Expert Contents\nfor Couples",
      description:
        "Contents to help you better understand your partner and maintain a healthy relationship",
    },
    {
      icon: "/images/icons/care.png",
      title: "Professional Consulting\nfor Relationship Care",
      description:
        "with intelligent tools, expert content, and premium lifestyle offerings",
    },
    {
      icon: "/images/icons/management.png",
      title: "Financial Management\nfor Shared Goals",
      description:
        "with intelligent tools, expert content, and premium lifestyle offerings",
    },
  ],
};

export const newsAndMediaData: NewsAndMediaDataProps[] = [
  {
    image: "/images/news/news_01.png",
    title:
      "Vespexx's Couple Wellness App 'Signaling' Expands Monetization and Global Reach",
    link: "/",
    alt: "news_01",
  },
  {
    image: "/images/news/news_02.png",
    title:
      "'Signaling' Surpasses 200,000 Users, Targets Global Market with Premium Features",
    link: "/",
    alt: "news_02",
  },
  {
    image: "/images/news/news_03.png",
    title: "Vespexx Launches 'Signaling' in U.S. and Japan",
    link: "/",
    alt: "news_03",
  },
  {
    image: "/images/news/news_04.png",
    title: "'Signaling' Reaches 200,000 Downloads as Couple Communication Tool",
    link: "/",
    alt: "news_04",
  },
  {
    image: "/images/news/news_05.png",
    title:
      "'Signaling' Sees Explosive 110% Monthly Growth as a Couple Calendar SaaS",
    link: "/",
    alt: "news_05",
  },
  {
    image: "/images/news/news_06.png",
    title:
      "Couple Calendar SaaS 'Signaling' Hits 200,000 Downloads in 7 Months",
    link: "/",
    alt: "news_06",
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
