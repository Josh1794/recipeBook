"use strict";

const db = require("../server/db");
const { User, Book, Recipe, Step, Ingredient } = require("../server/db/models");

async function seed() {
  await db.sync({ force: true });
  console.log("db synced!");

  const users = await Promise.all([
    User.create({ email: "cody@email.com", password: "123" }),
    User.create({ email: "murphy@email.com", password: "123" }),
    User.create({ email: "josh1794@gmail.com", password: "Josh1794" })
  ]);

  const books = await Promise.all([
    Book.create({ name: "Desserts", userId: "3" }),
    Book.create({ name: "Entrees", userId: "3" }),
    Book.create({
      name: "Apps",
      description: "appetizer recipes",
      userId: "3"
    }),
    Book.create({ name: "Entrees", userId: "1" })
  ]);

  const recipes = await Promise.all([
    Recipe.create({ name: "cake", bookId: "1" }),
    Recipe.create({ name: "steak", bookId: "2" }),
    Recipe.create({ name: "chicken", bookId: "2" })
  ]);

  const steps = await Promise.all([
    Step.create({ stepNum: "1", instruction: "season", recipeId: "2" }),
    Step.create({ stepNum: "2", instruction: "cook", recipeId: "2" })
  ]);

  const ingredients = await Promise.all([
    Ingredient.create({ name: "steak", quantity: "1", recipeId: "2" })
  ]);

  console.log(`seeded ${users.length} users`);
  console.log(`seeded ${books.length} books`);
  console.log(`seeded ${recipes.length} recipes`);
  console.log(`seeded ${steps.length} steps`);
  console.log(`seeded ${ingredients.length} ingredients`);
  console.log(`seeded successfully`);
}

// We've separated the `seed` function from the `runSeed` function.
// This way we can isolate the error handling and exit trapping.
// The `seed` function is concerned only with modifying the database.
async function runSeed() {
  console.log("seeding...");
  try {
    await seed();
  } catch (err) {
    console.error(err);
    process.exitCode = 1;
  } finally {
    console.log("closing db connection");
    await db.close();
    console.log("db connection closed");
  }
}

// Execute the `seed` function, IF we ran this module directly (`node seed`).
// `Async` functions always return a promise, so we can use `catch` to handle
// any errors that might occur inside of `seed`.
if (module === require.main) {
  runSeed();
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed;
