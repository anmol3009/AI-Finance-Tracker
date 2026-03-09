<<<<<<< HEAD
require("dotenv").config();

const { GoogleGenerativeAI } = require("@google/generative-ai");

const apiKey = process.env.GEMINI_API_KEY;

if (!apiKey) {
  throw new Error("Missing GEMINI_API_KEY");
}

const genAI = new GoogleGenerativeAI(apiKey);

async function listModels() {
  const models = await genAI.listModels();

  console.log("\nAvailable models:\n");

  for (const m of models) {
    console.log(`Name: ${m.name}`);
    console.log(`Supported: ${m.supportedGenerationMethods}`);
    console.log("------");
  }
}

=======
require("dotenv").config();

const { GoogleGenerativeAI } = require("@google/generative-ai");

const apiKey = process.env.GEMINI_API_KEY;

if (!apiKey) {
  throw new Error("Missing GEMINI_API_KEY");
}

const genAI = new GoogleGenerativeAI(apiKey);

async function listModels() {
  const models = await genAI.listModels();

  console.log("\nAvailable models:\n");

  for (const m of models) {
    console.log(`Name: ${m.name}`);
    console.log(`Supported: ${m.supportedGenerationMethods}`);
    console.log("------");
  }
}

>>>>>>> 19e6f4e951d173eedd2db4faf1ab1534f4b6388f
listModels();