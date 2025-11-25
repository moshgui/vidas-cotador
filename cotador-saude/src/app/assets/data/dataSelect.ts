// Definição da interface para os preços dos planos de saúde Select
export interface PriceTable {
  ageRange: string;
  minAge: number;
  maxAge: number | null;
  selectPublico1Vida: number;
  selectPublico2Vidas: number;
  selectPublico3Vidas: number;
  selectPublico4Vidas: number;
  selectLiberal1Vida: number;
  selectLiberal2Vidas: number;
  selectLiberal3Vidas: number;
  selectLiberal4Vidas: number;
}

//tabela de preços dos planos de saúde Select
//arrays de objetos para cada faixa etária com os preços correspondentes
export const pricingTiers: PriceTable[] = [
  {
    ageRange: '0 - 18',
    minAge: 0,
    maxAge: 18,
    selectPublico1Vida: 266.37,
    selectPublico2Vidas: 258.37,
    selectPublico3Vidas: 253.04,
    selectPublico4Vidas: 247.72,
    selectLiberal1Vida: 267.71,
    selectLiberal2Vidas: 259.67,
    selectLiberal3Vidas: 254.32,
    selectLiberal4Vidas: 248.96,
  },
  {
    ageRange: '19 - 23',
    minAge: 19,
    maxAge: 23,
    selectPublico1Vida: 278.74,
    selectPublico2Vidas: 270.38,
    selectPublico3Vidas: 264.8,
    selectPublico4Vidas: 259.23,
    selectLiberal1Vida: 280.14,
    selectLiberal2Vidas: 271.74,
    selectLiberal3Vidas: 266.13,
    selectLiberal4Vidas: 260.53,
  },
  {
    ageRange: '24 - 28',
    minAge: 24,
    maxAge: 28,
    selectPublico1Vida: 291.81,
    selectPublico2Vidas: 283.06,
    selectPublico3Vidas: 277.23,
    selectPublico4Vidas: 271.39,
    selectLiberal1Vida: 293.28,
    selectLiberal2Vidas: 284.48,
    selectLiberal3Vidas: 278.62,
    selectLiberal4Vidas: 272.75,
  },
  {
    ageRange: '29 - 33',
    minAge: 29,
    maxAge: 33,
    selectPublico1Vida: 315.48,
    selectPublico2Vidas: 206.02,
    selectPublico3Vidas: 299.71,
    selectPublico4Vidas: 293.4,
    selectLiberal1Vida: 317.07,
    selectLiberal2Vidas: 307.56,
    selectLiberal3Vidas: 301.21,
    selectLiberal4Vidas: 294.87,
  },
  {
    ageRange: '34 - 38',
    minAge: 34,
    maxAge: 38,
    selectPublico1Vida: 350.89,
    selectPublico2Vidas: 340.36,
    selectPublico3Vidas: 333.35,
    selectPublico4Vidas: 326.33,
    selectLiberal1Vida: 352.65,
    selectLiberal2Vidas: 342.07,
    selectLiberal3Vidas: 335.02,
    selectLiberal4Vidas: 327.97,
  },
  {
    ageRange: '39 - 43',
    minAge: 39,
    maxAge: 43,
    selectPublico1Vida: 434.77,
    selectPublico2Vidas: 421.72,
    selectPublico3Vidas: 413.03,
    selectPublico4Vidas: 404.33,
    selectLiberal1Vida: 436.95,
    selectLiberal2Vidas: 423.84,
    selectLiberal3Vidas: 415.11,
    selectLiberal4Vidas: 406.37,
  },
  {
    ageRange: '44 - 48',
    minAge: 44,
    maxAge: 48,
    selectPublico1Vida: 590.26,
    selectPublico2Vidas: 572.56,
    selectPublico3Vidas: 560.75,
    selectPublico4Vidas: 548.95,
    selectLiberal1Vida: 593.23,
    selectLiberal2Vidas: 575.44,
    selectLiberal3Vidas: 563.57,
    selectLiberal4Vidas: 551.71,
  },
  {
    ageRange: '49 - 53',
    minAge: 49,
    maxAge: 53,
    selectPublico1Vida: 717.8,
    selectPublico2Vidas: 696.27,
    selectPublico3Vidas: 681.91,
    selectPublico4Vidas: 667.95,
    selectLiberal1Vida: 721.41,
    selectLiberal2Vidas: 699.76,
    selectLiberal3Vidas: 685.34,
    selectLiberal4Vidas: 670.91,
  },
  {
    ageRange: '54 - 58',
    minAge: 54,
    maxAge: 58,
    selectPublico1Vida: 950.73,
    selectPublico2Vidas: 922.2,
    selectPublico3Vidas: 903.18,
    selectPublico4Vidas: 884.17,
    selectLiberal1Vida: 955.5,
    selectLiberal2Vidas: 926.84,
    selectLiberal3Vidas: 907.72,
    selectLiberal4Vidas: 888.61,
  },
  {
    ageRange: '59+',
    minAge: 59,
    maxAge: null,
    selectPublico1Vida: 1307.95,
    selectPublico2Vidas: 1268.71,
    selectPublico3Vidas: 1242.55,
    selectPublico4Vidas: 1216.39,
    selectLiberal1Vida: 1314.52,
    selectLiberal2Vidas: 1275.08,
    selectLiberal3Vidas: 1248.79,
    selectLiberal4Vidas: 1222.5,
  },
];

// Detalhes dos planos de saúde Select
export const PlanDetais = {
  selectPublico1Vida: {
    name: 'Plano A Select - Servidor Publico (1 Vida)',
    code: 'ALAASP - Enfermaria Com Coparticipação',
    features: [
      'Coletivo por Adesão',
      'Enfermaria com coparticipação',
      'Exclusivo para servidores públicos',
      'Atendimento em pronto-socorro 24h',
      'Consultas médicas ilimitadas',
      'Exames laboratoriais e de imagem',
      'Internações em enfermaria',
      'Cirurgias de todas as complexidades',
    ],
    gracePeriod: [
      'Urgência e emergência: 24 horas',
      'Consultas médicas: 30 dias',
      'Exames simples: 30 dias',
      'Exames complexos, cirurgias e internações: 180 dias',
      'Parto a termo: 300 dias',
      'Doenças e lesões pré-existentes: 24 meses',
    ],
  },
  selectPublico2Vidas: {
    name: 'Plano A Select - Servidor Público (2 Vidas)',
    code: 'ALAASP - Enfermaria Com Coparticipação',
    features: [
      'Coletivo por Adesão',
      'Enfermaria com coparticipação',
      'Exclusivo para servidores públicos',
      'Cobertura para 2 vidas',
      'Atendimento em pronto-socorro 24h',
      'Consultas médicas ilimitadas',
      'Exames laboratoriais e de imagem',
      'Cirurgias de todas as complexidades',
    ],
    gracePeriod: [
      'Urgência e emergência: 24 horas',
      'Consultas médicas: 30 dias',
      'Exames simples: 30 dias',
      'Exames complexos, cirurgias e internações: 180 dias',
      'Parto a termo: 300 dias',
      'Doenças e lesões pré-existentes: 24 meses',
    ],
  },
  selectPublico3Vidas: {
    name: 'Plano A Select - Servidor Público (3 Vidas)',
    code: 'ALAASP - Enfermaria Com Coparticipação',
    features: [
      'Coletivo por Adesão',
      'Enfermaria com coparticipação',
      'Exclusivo para servidores públicos',
      'Cobertura para 3 vidas',
      'Atendimento em pronto-socorro 24h',
      'Consultas médicas ilimitadas',
      'Exames laboratoriais e de imagem',
      'Cirurgias de todas as complexidades',
    ],
    gracePeriod: [
      'Urgência e emergência: 24 horas',
      'Consultas médicas: 30 dias',
      'Exames simples: 30 dias',
      'Exames complexos, cirurgias e internações: 180 dias',
      'Parto a termo: 300 dias',
      'Doenças e lesões pré-existentes: 24 meses',
    ],
  },
  selectPublico4Vidas: {
    name: 'Plano A Select - Servidor Público (4 Vidas)',
    code: 'ALAASP - Enfermaria Com Coparticipação',
    features: [
      'Coletivo por Adesão',
      'Enfermaria com coparticipação',
      'Exclusivo para servidores públicos',
      'Cobertura para 4 vidas',
      'Atendimento em pronto-socorro 24h',
      'Consultas médicas ilimitadas',
      'Exames laboratoriais e de imagem',
      'Cirurgias de todas as complexidades',
    ],
    gracePeriod: [
      'Urgência e emergência: 24 horas',
      'Consultas médicas: 30 dias',
      'Exames simples: 30 dias',
      'Exames complexos, cirurgias e internações: 180 dias',
      'Parto a termo: 300 dias',
      'Doenças e lesões pré-existentes: 24 meses',
    ],
  },
  selectLiberal1Vida: {
    name: 'Plano A Select - Profissional Liberal/Estudantes/CLT (1 Vida)',
    code: 'ALASE/ALAAPL/ALASC - Enfermaria Com Coparticipação',
    features: [
      'Coletivo por Adesão',
      'Enfermaria com coparticipação',
      'Para profissionais liberais, estudantes e CLT',
      'Atendimento em pronto-socorro 24h',
      'Consultas médicas ilimitadas',
      'Exames laboratoriais e de imagem',
      'Internações em enfermaria',
      'Cirurgias de todas as complexidades',
    ],
    gracePeriod: [
      'Urgência e emergência: 24 horas',
      'Consultas médicas: 30 dias',
      'Exames simples: 30 dias',
      'Exames complexos, cirurgias e internações: 180 dias',
      'Parto a termo: 300 dias',
      'Doenças e lesões pré-existentes: 24 meses',
    ],
  },
  selectLiberal2Vidas: {
    name: 'Plano A Select - Profissional Liberal/Estudantes/CLT (2 Vidas)',
    code: 'ALASE/ALAAPL/ALASC - Enfermaria Com Coparticipação',
    features: [
      'Coletivo por Adesão',
      'Enfermaria com coparticipação',
      'Para profissionais liberais, estudantes e CLT',
      'Cobertura para 2 vidas',
      'Atendimento em pronto-socorro 24h',
      'Consultas médicas ilimitadas',
      'Exames laboratoriais e de imagem',
      'Cirurgias de todas as complexidades',
    ],
    gracePeriod: [
      'Urgência e emergência: 24 horas',
      'Consultas médicas: 30 dias',
      'Exames simples: 30 dias',
      'Exames complexos, cirurgias e internações: 180 dias',
      'Parto a termo: 300 dias',
      'Doenças e lesões pré-existentes: 24 meses',
    ],
  },
  selectLiberal3Vidas: {
    name: 'Plano A Select - Profissional Liberal/Estudantes/CLT (3 Vidas)',
    code: 'ALASE/ALAAPL/ALASC - Enfermaria Com Coparticipação',
    features: [
      'Coletivo por Adesão',
      'Enfermaria com coparticipação',
      'Para profissionais liberais, estudantes e CLT',
      'Cobertura para 3 vidas',
      'Atendimento em pronto-socorro 24h',
      'Consultas médicas ilimitadas',
      'Exames laboratoriais e de imagem',
      'Cirurgias de todas as complexidades',
    ],
    gracePeriod: [
      'Urgência e emergência: 24 horas',
      'Consultas médicas: 30 dias',
      'Exames simples: 30 dias',
      'Exames complexos, cirurgias e internações: 180 dias',
      'Parto a termo: 300 dias',
      'Doenças e lesões pré-existentes: 24 meses',
    ],
  },
  selectLiberal4Vidas: {
    name: 'Plano A Select - Profissional Liberal/Estudantes/CLT (4 Vidas)',
    code: 'ALASE/ALAAPL/ALASC - Enfermaria Com Coparticipação',
    features: [
      'Coletivo por Adesão',
      'Enfermaria com coparticipação',
      'Para profissionais liberais, estudantes e CLT',
      'Cobertura para 4 vidas',
      'Atendimento em pronto-socorro 24h',
      'Consultas médicas ilimitadas',
      'Exames laboratoriais e de imagem',
      'Cirurgias de todas as complexidades',
    ],
    gracePeriod: [
      'Urgência e emergência: 24 horas',
      'Consultas médicas: 30 dias',
      'Exames simples: 30 dias',
      'Exames complexos, cirurgias e internações: 180 dias',
      'Parto a termo: 300 dias',
      'Doenças e lesões pré-existentes: 24 meses',
    ],
  },
};

// Função para obter o preço com base na faixa etária
//recebe o parametro idade e retorna um objeto com os preços correspondentes dentro da faixa etária
export const getPriceByAge = (
  age: number
): {
  selectPublico1Vida: number;
  selectPublico2Vidas: number;
  selectPublico3Vidas: number;
  selectPublico4Vidas: number;
  selectLiberal1Vida: number;
  selectLiberal2Vidas: number;
  selectLiberal3Vidas: number;
  selectLiberal4Vidas: number;
  ageRange: string;
} => {
  const tier = pricingTiers.find(
    (tier) => age >= tier.minAge && (tier.maxAge === null || age <= tier.maxAge)
  );

  if (!tier) {
    const lastTier = pricingTiers[pricingTiers.length - 1];
    return {
      selectPublico1Vida: lastTier.selectPublico1Vida,
      selectPublico2Vidas: lastTier.selectPublico2Vidas,
      selectPublico3Vidas: lastTier.selectPublico3Vidas,
      selectPublico4Vidas: lastTier.selectPublico4Vidas,
      selectLiberal1Vida: lastTier.selectLiberal1Vida,
      selectLiberal2Vidas: lastTier.selectLiberal2Vidas,
      selectLiberal3Vidas: lastTier.selectLiberal3Vidas,
      selectLiberal4Vidas: lastTier.selectLiberal4Vidas,
      ageRange: lastTier.ageRange,
    };
  }

  return {
    selectPublico1Vida: tier.selectPublico1Vida,
    selectPublico2Vidas: tier.selectPublico2Vidas,
    selectPublico3Vidas: tier.selectPublico3Vidas,
    selectPublico4Vidas: tier.selectPublico4Vidas,
    selectLiberal1Vida: tier.selectLiberal1Vida,
    selectLiberal2Vidas: tier.selectLiberal2Vidas,
    selectLiberal3Vidas: tier.selectLiberal3Vidas,
    selectLiberal4Vidas: tier.selectLiberal4Vidas,
    ageRange: tier.ageRange,
  };
};
