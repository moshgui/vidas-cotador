export interface PriceTable {
  ageRange: string;
  minAge: number;
  maxAge: number | null;
  idealAdesao1Terapias: number;
  idealAdesao2Terapias: number;
  idealAdesao1Total: number;
  idealAdesao2Total: number;
}

export const pricingTiers: PriceTable[] = [
  {
    ageRange: '0 - 18',
    minAge: 0,
    maxAge: 18,
    idealAdesao1Terapias: 252.43,
    idealAdesao2Terapias: 306.72,
    idealAdesao1Total: 197.21,
    idealAdesao2Total: 239.63,
  },
  {
    ageRange: '19 - 23',
    minAge: 19,
    maxAge: 23,
    idealAdesao1Terapias: 267.58,
    idealAdesao2Terapias: 325.12,
    idealAdesao1Total: 225.77,
    idealAdesao2Total: 274.32,
  },
  {
    ageRange: '24 - 28',
    minAge: 24,
    maxAge: 28,
    idealAdesao1Terapias: 288.99,
    idealAdesao2Terapias: 351.14,
    idealAdesao1Total: 243.84,
    idealAdesao2Total: 296.27,
  },
  {
    ageRange: '29 - 33',
    minAge: 29,
    maxAge: 33,
    idealAdesao1Terapias: 323.66,
    idealAdesao2Terapias: 393.26,
    idealAdesao1Total: 283.21,
    idealAdesao2Total: 344.11,
  },
  {
    ageRange: '34 - 38',
    minAge: 34,
    maxAge: 38,
    idealAdesao1Terapias: 381.92,
    idealAdesao2Terapias: 464.06,
    idealAdesao1Total: 310.31,
    idealAdesao2Total: 377.05,
  },
  {
    ageRange: '39 - 43',
    minAge: 39,
    maxAge: 43,
    idealAdesao1Terapias: 477.41,
    idealAdesao2Terapias: 580.06,
    idealAdesao1Total: 372.98,
    idealAdesao2Total: 453.18,
  },
  {
    ageRange: '44 - 48',
    minAge: 44,
    maxAge: 48,
    idealAdesao1Terapias: 611.07,
    idealAdesao2Terapias: 742.5,
    idealAdesao1Total: 477.4,
    idealAdesao2Total: 580.08,
  },
  {
    ageRange: '49 - 53',
    minAge: 49,
    maxAge: 53,
    idealAdesao1Terapias: 763.84,
    idealAdesao2Terapias: 928.11,
    idealAdesao1Total: 596.75,
    idealAdesao2Total: 725.09,
  },
  {
    ageRange: '54 - 58',
    minAge: 54,
    maxAge: 58,
    idealAdesao1Terapias: 925.36,
    idealAdesao2Terapias: 1197.26,
    idealAdesao1Total: 769.81,
    idealAdesao2Total: 935.36,
  },
  {
    ageRange: '59+',
    minAge: 59,
    maxAge: null,
    idealAdesao1Terapias: 1468.18,
    idealAdesao2Terapias: 1783.94,
    idealAdesao1Total: 1147.01,
    idealAdesao2Total: 1393.7,
  },
];

export const planDetails = {
  idealAdesao1Terapias: {
    name: 'Salv - Ideal Adesão I: Com Coparticipação para Terapias',
    code: 'Enfermaria + Coparticipação',
    features: [
      'Principal Hospital: SAMAR',
      'Coletivo por Adesão',
      'Enfermaria com coparticipação',
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
    procedures: [
      'Terapias: Não contempla limitador mensal',
      'Coparticipação de 30% por procedimento realizado limitado a R$ 45,00',
    ],
  },
  idealAdesao2Terapias: {
    name: 'Salv - Ideal Adesão II: Coparticipação para Terapias',
    code: 'Apartamento + Coparticipação',
    features: [
      'Principal Hospital: SAMAR',
      'Coletivo por Adesão',
      'Apartamento com coparticipação',
      'Atendimento em pronto-socorro 24h',
      'Consultas médicas ilimitadas',
      'Exames laboratoriais e de imagem',
      'Internações em apartamento',
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
    procedures: [
      'Terapias: Não contempla limitador mensal',
      'Coparticipação de 30% por procedimento realizado limitado a R$ 45,00',
    ],
  },
  idealAdesao1Total: {
    name: 'Salv - Ideal Adesão I: Totalmente Coparticipativo',
    code: 'AMB + HOSP + OBS',
    features: [
      'Principal Hospital: SAMAR',
      'Coletivo por Adesão',
      'Coparticipação total (AMB + HOSP + OBS)',
      'Atendimento em pronto-socorro 24h',
      'Consultas médicas ilimitadas',
      'Exames laboratoriais e de imagem',
      'Internações em enfermaria',
      'Cirurgias de todas as complexidades',
      'Plano mais econômico com coparticipação',
    ],
    gracePeriod: [
      'Urgência e emergência: 24 horas',
      'Consultas médicas: 30 dias',
      'Exames simples: 30 dias',
      'Exames complexos, cirurgias e internações: 180 dias',
      'Parto a termo: 300 dias',
      'Doenças e lesões pré-existentes: 24 meses',
    ],
    procedures: [
      'Consultas eletivas (agendadas): R$ 30,00 por procedimento',
      'Atendimento de urgência e emergência: R$ 45,00',
      'Exames simples: R$ 5,00',
      'Exames de alta complexidade: 30% limitado a R$ 70,00',
      'Terapias: 30% limitado a R$ 45,00 por sessão',
    ],
  },
  idealAdesao2Total: {
    name: 'Salv - Ideal Adesão II: Totalmente Coparticipativo',
    code: 'AMB + HOSP + OBS',
    features: [
      'Principal Hospital: SAMAR',
      'Coletivo por Adesão',
      'Coparticipação total (AMB + HOSP + OBS)',
      'Atendimento em pronto-socorro 24h',
      'Consultas médicas ilimitadas',
      'Exames laboratoriais e de imagem',
      'Internações em apartamento',
      'Cirurgias de todas as complexidades',
      'Plano mais econômico com coparticipação',
    ],
    gracePeriod: [
      'Urgência e emergência: 24 horas',
      'Consultas médicas: 30 dias',
      'Exames simples: 30 dias',
      'Exames complexos, cirurgias e internações: 180 dias',
      'Parto a termo: 300 dias',
      'Doenças e lesões pré-existentes: 24 meses',
    ],
    procedures: [
      'Consultas eletivas (agendadas): R$ 30,00 por procedimento',
      'Atendimento de urgência e emergência: R$ 45,00',
      'Exames simples: R$ 5,00',
      'Exames de alta complexidade: 30% limitado a R$ 70,00',
      'Terapias: 30% limitado a R$ 45,00 por sessão',
    ],
  },
};

export const getPriceByAge = (
  age: number
): {
  idealAdesao1Terapias: number;
  idealAdesao2Terapias: number;
  idealAdesao1Total: number;
  idealAdesao2Total: number;
  ageRange: string;
} => {
  const tier = pricingTiers.find(
    (tier) => age >= tier.minAge && (tier.maxAge === null || age <= tier.maxAge)
  );

  if (!tier) {
    const lastTier = pricingTiers[pricingTiers.length - 1];
    return {
      idealAdesao1Terapias: lastTier.idealAdesao1Terapias,
      idealAdesao2Terapias: lastTier.idealAdesao2Terapias,
      idealAdesao1Total: lastTier.idealAdesao1Total,
      idealAdesao2Total: lastTier.idealAdesao2Total,
      ageRange: lastTier.ageRange,
    };
  }

  return {
    idealAdesao1Terapias: tier.idealAdesao1Terapias,
    idealAdesao2Terapias: tier.idealAdesao2Terapias,
    idealAdesao1Total: tier.idealAdesao1Total,
    idealAdesao2Total: tier.idealAdesao2Total,
    ageRange: tier.ageRange,
  };
};
