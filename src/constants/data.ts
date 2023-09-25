import { COLUMN_TYPES } from "./types";

const data = [
  {
    id: 1,
    icon: "⭕️",
    status: COLUMN_TYPES.TO_DO,
    title: "Human Interest Form",
    content: "Fill out human interest distribution form",
  },
  {
    id: 2,
    icon: "⭕️",
    status: COLUMN_TYPES.TO_DO,
    title: "Purchase present",
    content: "Get an anniversary gift",
  },
  {
    id: 3,
    icon: "⭕️",
    status: COLUMN_TYPES.TO_DO,
    title: "Invest in investments",
    content: "Call the bank to talk about investments",
  },
  {
    id: 4,
    icon: "⭕️",
    status: COLUMN_TYPES.TO_DO,
    title: "Daily reading",
    content: "Finish reading Intro to UI/UX",
  },
];

const statuses = [
  {
    status: COLUMN_TYPES.TO_DO,
    icon: "⭕️",
    color: "#EB5A46",
  },
  {
    status: COLUMN_TYPES.IN_PROGRESS,
    icon: "🔆️",
    color: "#00C2E0",
  },
  {
    status: COLUMN_TYPES.IN_PROGRESS,
    icon: "📝",
    color: "#C377E0",
  },
  {
    status: COLUMN_TYPES.DONE,
    icon: "✅",
    color: "#3981DE",
  },
];

export { data, statuses };
