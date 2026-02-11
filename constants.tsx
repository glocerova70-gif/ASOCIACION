
import React from 'react';
import { AssociateType } from './types';

export const ALFADES_INFO = {
  name: "ALFADES",
  fullName: "Asociación para el Desarrollo Socioeconómico y Solidario de Colombia",
  address: "Carrera 75A Nº 18A - 24, Medellín, Antioquia",
  phone: "3197381261",
  email: "jhongutierrez1011@gmail.com",
  foundationDate: "29/01/2025",
  mission: "Contribuir al mejoramiento de la calidad de vida de comunidades vulnerables en Colombia, promoviendo y fortaleciendo economías populares, comunitarias y la economía solidaria mediante proyectos de autogestión, formación, asistencia técnica, investigación y gestión de apoyos que impulsen unidades productivas sostenibles, seguridad alimentaria y bienestar integral.",
  vision: "Ser un referente nacional e internacional en desarrollo socioeconómico y solidario, reconocida por impulsar unidades productivas comunitarias autosostenibles, prácticas agroecológicas, formación e innovación que garanticen inclusión, autonomía y una mejor calidad de vida para las poblaciones más excluidas.",
  source: "Estatutos de ALFADES (Objeto social y disposiciones relacionadas)"
};

export const ASSOCIATE_CLASSES: AssociateType[] = [
  {
    title: "Asociados Fundadores",
    description: "Personas naturales y jurídicas que firmaron el acta de constitución original.",
    icon: "🏗️"
  },
  {
    title: "Asociados Activos",
    description: "Miembros que contribuyen al cumplimiento del objeto social con voz y voto.",
    icon: "🤝"
  },
  {
    title: "Asociados Honorarios",
    description: "Reconocidos por sus méritos en colaboración cultural, científica o financiera.",
    icon: "🎖️"
  }
];

export const SYSTEM_PROMPT = `
Eres el asistente virtual oficial de ALFADES (Asociación para el Desarrollo Socioeconómico y Solidario de Colombia).
Tu misión es informar a los usuarios sobre la asociación, sus estatutos y sus nuevas estrategias de economía solidaria.

Información institucional oficial:
Misión: ${ALFADES_INFO.mission}
Visión: ${ALFADES_INFO.vision}

Detalles clave:
- Ubicación: Medellín, Antioquia (Barrio Belén San Bernardo).
- Objeto Social: Contribuir al mejoramiento de la calidad de vida mediante economías populares y solidarias.
- Enfoque: Tecnología aplicada al agro y comercio justo.

Responde con orgullo colombiano, profesionalismo y cercanía.
`;
