import { Certificate, Job, TechItem } from './types';
import { 
  Code2, 
  Hash, 
  Settings, 
  Sparkles, 
  Network, 
  Cloud, 
  Palette, 
  Image, 
  Video, 
  Cpu 
} from 'lucide-react';

export const PROFILE_IMAGE = "https://i.ibb.co/HDtLHWgK/Whats-App-Image-2025-11-29-at-6-56-30-PM.jpg";
export const CV_IMAGE = "https://i.ibb.co/Q3svnNGm/ASBEL-SILAS-CURRICULO-2025.png";

export const CERTIFICATES: Certificate[] = [
  { id: '1', title: 'Amazon Bedrock', imageUrl: 'https://i.ibb.co/tP86STmT/Amazon-bedrock.png' },
  { id: '2', title: 'Auxiliar Administrativo', imageUrl: 'https://i.ibb.co/Hp9WDCnB/Auxiliar-administrativo.png' },
  { id: '3', title: 'AWS Foundations of Prompt Engineering', imageUrl: 'https://i.ibb.co/bgWhtP5v/AWS-COURSE-COMPLETE.png' },
  { id: '4', title: 'AWS for Games', imageUrl: 'https://i.ibb.co/VpgMZDwd/AWS-for-games.png' },
  { id: '5', title: 'Comunicação Client x Server', imageUrl: 'https://i.ibb.co/mVHGLP1N/BOOTCAMP-DIO.png' },
  { id: '6', title: 'Versionamento Git e GitHub', imageUrl: 'https://i.ibb.co/wh8CS9zb/BOOTCAMP2-DIO.png' },
  { id: '7', title: 'Java Primeira Aplicação', imageUrl: 'https://i.ibb.co/fdyy95Ln/Certificado-Alura-Java.png' },
  { id: '8', title: 'Começando em Programação', imageUrl: 'https://i.ibb.co/7Jn4w9X4/COME-ANDO-EM-PROGRAMA-O.png' },
  { id: '9', title: 'UX Design: Produtos Digitais', imageUrl: 'https://i.ibb.co/PJsJX0C/Curso-UX-Design-Conhe-a-o-universo-da-experi-ncia-em-produtos-digitais-Alura-1.png' },
  { id: '10', title: 'Data Analysis Google Sheets', imageUrl: 'https://i.ibb.co/MDkp2DLR/DATA-ANALYSIS-CERTIFICADO.png' },
  { id: '11', title: 'Intro ao Front-End', imageUrl: 'https://i.ibb.co/HfvWrRXX/INTRODU-O-AO-DESENVOLVIMENTO.jpg' },
  { id: '12', title: 'Masterclass Figma', imageUrl: 'https://i.ibb.co/dwxgwJNJ/MASTERCLASS-FIGMA-CERTIFICADO.png' },
  { id: '13', title: 'Transição de Carreira para TI', imageUrl: 'https://i.ibb.co/zTFvyZhv/TRANSI-O-DE-CARREIRA-CERTIFICADO.png' },
];

export const JOBS: Job[] = [
  {
    company: "Óticas Prevent",
    role: "Auxiliar de vendas",
    period: "06/09/2023 - 22/07/2024"
  },
  {
    company: "SGS",
    role: "Inspetor Junior",
    period: "25/07/2024 - 21/07/2025"
  },
  {
    company: "Control Union",
    role: "Inspetor de Qualidade Jr",
    period: "01/08/2025 - Momento",
    current: true
  }
];

export const TECH_STACK: TechItem[] = [
  { name: "HTML5 & CSS3", icon: Code2 },
  { name: "C#", icon: Hash },
  { name: "Automação & Cloud (Noções)", icon: Settings },
  { name: "Prompt Engineering", icon: Sparkles },
  { name: "HTTP & WebSockets", icon: Network },
  { name: "AWS Services (Básico)", icon: Cloud },
  { name: "UX/UI Design", icon: Palette },
  { name: "Photoshop", icon: Image },
  { name: "Edição de Vídeos", icon: Video },
  { name: "Hardware & Manutenção", icon: Cpu },
];

export const ABOUT_TEXT = `Meu nome é Asbel Nascimento. Atualmente gerencio uma rede social do instagram de BOLOS que se chama "didi_bolosofc", com alguns videos e posts feitos por mim. Também sou um Estudante de Desenvolvimento Web Júnior com grande interesse por tecnologia, design e inovação.

Atualmente, possuo conhecimentos básicos em HTML, CSS, JavaScript, UX Design, Python e Redes de Computadores e Lógica de Programação — áreas que venho aprimorando constantemente por meio de cursos e prática diária. Tenho um inglês intermediário, o que me permite me comunicar bem e manter conversas com estrangeiros sobre diversos assuntos, especialmente voltados à tecnologia.

Além da área técnica, também sou apaixonado por música! Toco instrumentos de percussão como pandeiro, tan tan, reco-reco e até arrisco um pouco no cavaquinho 🎶. A música me ensinou ritmo, foco e disciplina — qualidades que aplico também nos meus projetos e estudos.

Atualmente, busco uma oportunidade em uma empresa onde eu possa evoluir profissionalmente, aplicar meu conhecimento técnico, e principalmente aprender na prática com uma equipe experiente, aprimorando minhas habilidades dia após dia. Tenho interesse especial na área de Redes e Segurança da Informação, e meu grande objetivo é seguir carreira como Especialista em Segurança da Informação. Sou curioso, dedicado e gosto de aprender com desafios — acredito que cada projeto é uma nova chance de crescimento pessoal e profissional. 🚀`;