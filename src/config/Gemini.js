// import dotenv from 'dotenv';

// dotenv.config();
// console.log(process.env.VITE_GEMINI_API_KEY);

/*
 * Install the Generative AI SDK
 *process.env.GEMINI_API_KEY
 * $ npm install @google/generative-ai
 */

 let Data=""

import {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
  } from "@google/generative-ai";
  
  //const apiKey = process.env.GEMINI_API_KEY;
  const apiKey = import.meta.env. VITE_GEMINI_API_KEY;
  const genAI = new GoogleGenerativeAI(apiKey);
  
  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
  });
  
  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 64,
    maxOutputTokens: 8192,
    responseMimeType: "text/plain",
  };
  
 export default async function run(prompt) {
    const chatSession = model.startChat({
      generationConfig,
   // safetySettings: Adjust safety settings
   // See https://ai.google.dev/gemini-api/docs/safety-settings
      history: [
      ],
    });
     
      const result = await chatSession.sendMessage(prompt);
      // return result.response.text()
    
      
     return result.response.text()
    //console.log(result.response.text());
    
    
  }
  
  //export default  run;
  
 
  