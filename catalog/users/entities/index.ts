export interface User {
  id: string;
  username: string;

  level: number;
  exp: number;
  expToNextLevel: number;
  expPerDay: number;

  startDay: string;
  goalDay: string;
  streak: number;
  missingDays: number;

  imageUrl: string;

  todo: TodoList[];
}

export interface TodoList {
  done: boolean;
  description: string;
  date: string;
}

export const users: User[] = [
  {
    id: '1',
    username: 'Gatuso',

    level: 1,
    exp: 0,
    expToNextLevel: 150,
    expPerDay: 100,

    startDay: '2025-05-11',
    goalDay: '2026-05-11',
    streak: 0,
    missingDays: 0,

    imageUrl: '',

    todo: [
      {
        done: false,
        description: 'aaa',
        date: '2025-05-11',
      },
      {
        done: false,
        description: 'aaa',
        date: '2025-05-11',
      },
    ],
  },
  {
    id: '2',
    username: 'ValtrX',

    level: 1,
    exp: 0,
    expToNextLevel: 150,
    expPerDay: 100,

    startDay: '2025-05-11',
    goalDay: '2026-05-11',
    streak: 0,
    missingDays: 0,

    imageUrl: '',

    todo: [
      {
        done: false,
        description: 'aaa',
        date: '2025-05-11',
      },
      {
        done: false,
        description: 'aaa',
        date: '2025-05-11',
      },
    ],
  },
];
