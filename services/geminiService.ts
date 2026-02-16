
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const getGeminiResponse = async (message: string, history: {role: string, content: string}[]) => {
  try {
    const chat = ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: [
        {
          parts: [{ text: `You are Dip Tarafder's Portfolio Assistant. 
          Dip's Details: 
          - Name: Dip Tarafder
          - Role: Engineering Programmer / Full-Stack Architectural Engineer
          - Born: 18 October 2005
          - Location: Nagarpur, Tangail, Bangladesh
          - Expertise: Scalable Backend, Cloud Infrastructure, AI Integration, Full-stack web dev.
          - Socials: LinkedIn (love-maker), WhatsApp (+8801704235825), Email (diptarafd3t@gmail.com).
          
          Guidelines:
          - Be professional yet futuristic.
          - Help recruiters find specific info about Dip.
          - If asked about "Engineering Programmer", explain it's about the intersection of software architecture and efficient code.
          - Keep answers concise.
          - Do not provide the API key.
          
          User asked: ${message}` }]
        }
      ],
      config: {
        temperature: 0.7,
        topP: 0.8,
        topK: 40,
      }
    });

    const response = await chat;
    return response.text;
  } catch (error) {
    console.error("Gemini Error:", error);
    return "The system is currently recalibrating. Please try the direct contact node.";
  }
};
