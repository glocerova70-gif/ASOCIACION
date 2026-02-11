
import { GoogleGenAI } from "@google/genai";
import { SYSTEM_PROMPT } from "../constants";

/**
 * CONFIGURACIÓN DE CLAVE API (Autorizada por el usuario)
 * Esta clave se usa directamente para evitar errores de entorno en el cliente.
 */
const API_KEY_ALFADES = "AIzaSyC1EBVgkBYjikPMO6_PS_fiXKdJZwqjZ4s";
const ai = new GoogleGenAI({ apiKey: API_KEY_ALFADES });

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

    // La propiedad .text extrae el contenido generado por la IA
    if (response && response.text) {
      return response.text;
    }
    
    return "Lo siento, recibí una respuesta vacía. ¿Podrías intentar reformular tu pregunta?";
  } catch (error: any) {
    console.error("Error en el Asistente ALFADES:", error);
    
    // Manejo de errores específicos para retroalimentación profesional
    if (error.message?.includes("API_KEY_INVALID")) {
      return "Error de configuración: La clave de acceso a la IA no es válida.";
    }

    return "Hola, en este momento el asistente tiene mucha demanda. Si necesitas ayuda urgente, escríbenos a jhongutierrez1011@gmail.com";
  }
};
