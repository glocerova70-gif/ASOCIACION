
import { GoogleGenAI } from "@google/genai";
import { SYSTEM_PROMPT } from "../constants";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const getChatResponse = async (userMessage: string, history: {role: string, parts: {text: string}[]}[]) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: [
        { role: 'user', parts: [{ text: userMessage }] }
      ],
      config: {
        systemInstruction: SYSTEM_PROMPT,
        temperature: 0.7,
      },
    });

    return response.text || "Lo siento, tuve un problema procesando tu solicitud. Por favor intenta de nuevo.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "En este momento no puedo responder. Por favor contacta a ALFADES directamente por correo.";
  }
};
