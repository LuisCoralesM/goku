const { execSync } = require("child_process");
const fs = require("fs-extra");

// Clean dist directory
fs.removeSync("./dist");

// Run TypeScript compilation
execSync("npx prisma generate && tsc", { stdio: "inherit" });

// Copy generated Prisma files
fs.copySync("./generated", "./dist/generated", {
  filter: src => {
    return !src.includes("node_modules");
  },
});

console.log("Build completed successfully!");
