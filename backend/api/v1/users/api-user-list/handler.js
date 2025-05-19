// Mock user data
const users = [
  {
    id: "1",
    username: "Gatuso",
    level: 1,
    exp: 0,
    expToNextLevel: 150,
    expPerDay: 100,
    startDay: "2025-05-11",
    goalDay: "2026-05-11",
    streak: 0,
    missingDays: 0,
    imageUrl: "",
    todo: [],
  },
  {
    id: "2",
    username: "ValtrX",
    level: 1,
    exp: 0,
    expToNextLevel: 150,
    expPerDay: 100,
    startDay: "2025-05-11",
    goalDay: "2026-05-11",
    streak: 0,
    missingDays: 0,
    imageUrl: "",
    todo: [],
  },
];

const handler = async (req, res) => {
  res.status(200).json(users);
};

export { handler };
