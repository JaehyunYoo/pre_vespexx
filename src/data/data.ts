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

/** Low Data */

export const data: CardData[] = [
  {
    title: "Sync the Schedule",
    description: "Connected Calendar as a Platform",
    image: "/images/content1.svg",
  },
  {
    title: "Sync with daily life",
    description: "Connected Calendar as a Platform",
    image: "/images/content2.svg",
  },
  {
    title: "Manage health together",
    description: "Health Record, Menstrual Cycle, Mental Care",
    image: "/images/content3.svg",
  },
  {
    title: "Messenger & Status Mode",
    description: "Care better with quick status updates",
    image: "/images/content4.svg",
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
      icon: "/images/calendar.svg",
      title: "Calendar Theme\nCustomization",
      description: "Manage your schedules according to your preferences",
    },
    {
      icon: "/images/todo.svg",
      title: "To-do list synced\nwith calendar",
      description:
        "Manage your housechore, tasks, habits, and bucket lists together according to the schedules",
    },
    {
      icon: "/images/todo.svg",
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
      icon: "/images/coupleContents.svg",
      title: "High-Quality Expert Contents\nfor Couples",
      description:
        "Contents to help you better understand your partner and maintain a healthy relationship",
    },
    {
      icon: "/images/relationship.svg",
      title: "Professional Consulting\nfor Relationship Care",
      description:
        "with intelligent tools, expert content, and premium lifestyle offerings",
    },
    {
      icon: "/images/sharedGoals.svg",
      title: "Financial Management\nfor Shared Goals",
      description:
        "with intelligent tools, expert content, and premium lifestyle offerings",
    },
  ],
};
