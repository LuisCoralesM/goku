var EntitySchema = require("typeorm").EntitySchema;

module.exports = new EntitySchema({
  name: "User", // Will use table name `category` as default behaviour.
  tableName: "user", // Optional: Provide `tableName` property to override the default behaviour for table name.
  columns: {
    id: {
      primary: true,
      type: "int",
      generated: true,
    },
    username: {
      type: "varchar",
    },
    level: {
      type: "int",
    },
    exp: {
      type: "int",
    },
    expToNextLevel: {
      type: "int",
    },
    expPerDay: {
      type: "int",
    },
    startDay: {
      type: "date",
    },
    goalDay: {
      type: "date",
    },
    streak: {
      type: "int",
    },
    missingDays: {
      type: "int",
    },
    imageUrl: {
      type: "varchar",
    },
    todo: {
      type: "json",
      nullable: true,
    },
  },
});
