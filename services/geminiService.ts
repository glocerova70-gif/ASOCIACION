
import { GoogleGenAI } from "@google/genai";
import { SYSTEM_PROMPT } from "../constants";

/**
 * IMPORTANTE PARA VERCEL:
 * Para que el asistente funcione, debes agregar tu clave API en el panel de Vercel:
 * Nombre: API_KEY
 * Valor: AIzaSyC1EBVgkBYjikPMO6_PS_fiXKdJZwqjZ4s
 */
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getChatResponse = async (userMessage: string, history: any[] = []) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: userMessage,
      config: {
        systemInstruction: SYSTEM_PROMPT,
        temperature: 0.7,
      },
    });

    // Se utiliza la propiedad .text directamente como especifica la documentación actual
    return response.text || "Lo siento, tuve un problema procesando tu solicitud. Por favor intenta de nuevo.";
  } catch (error: any) {
    console.error("Gemini API Error:", error);
    
    // Respuesta amigable en caso de que la clave no esté configurada en el entorno
    if (!process.env.API_KEY) {
      return "El asistente virtual de ALFADES requiere configuración. Por favor, asegúrese de haber configurado la API_KEY en las variables de entorno.";
    }

    return "En este momento no puedo responder. Por favor contacta a ALFADES directamente por correo.";
  }
};
