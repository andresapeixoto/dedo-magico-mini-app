import { FaqItem, Testimonial, AppFeature, BonusItem, ComparisonPoint } from '../types';

export const APP_CONFIG = {
  name: "Dedo Mágico",
  subtitle: "O Mini Aplicativo de Reprogramação Emocional e Padrões Afetivos",
  appDemoUrl: "https://dedomagico.manus.space",
  originalPrice: "R$ 97,00",
  currentPrice: "R$ 17,00",
  installments: "3x de R$ 6,07",
  checkoutUrl: "https://pay.kiwify.com.br/GzOlRyp", // Kiwify checkout oficial
  guaranteeDays: 7,
};

export const COMPARISON_POINTS: ComparisonPoint[] = [
  {
    topic: "Formato de Uso",
    traditional: "Conselhos genéricos de amigas ou vídeos soltos na internet que não te dão método nenhum.",
    miniApp: "Mini aplicativo prático que roda direto no navegador do celular com 1 toque. Rápido, leve e intuitivo."
  },
  {
    topic: "Na hora que a dúvida ou ansiedade bate",
    traditional: "Você não sabe como agir, entra em desespero e acaba mandando mensagens impulsivas ou aceitando migalhas.",
    miniApp: "Central de Ajuda Imediata: selecione a situação que está vivendo e veja na hora o que observar, o que perguntar e o que evitar."
  },
  {
    topic: "Identificação do seu Padrão",
    traditional: "Tentativas no escuro e a sensação frustrante de que você tem 'dedo podre' por azar ou destino.",
    miniApp: "Teste de Projeção com 10 perguntas dinâmicas que diagnosticam se você está vivendo algo real ou projetando uma ilusão."
  },
  {
    topic: "Diferenciação: Realidade vs. Imagem",
    traditional: "Confiar apenas na carência, fantasiar com o potencial dele e quebrar a cara meses depois.",
    miniApp: "Comparador de 2 Colunas (Fatos vs. Expectativas) + Mapeamento do Ciclo da Projeção em 6 fases."
  },
  {
    topic: "Engajamento e Mudança Real",
    traditional: "Teorias vazias e promessas de mudança que você abandona logo no primeiro fim de semana.",
    miniApp: "Jornada prática de 30 dias com Diário do Seu Novo Eu, integração do Animus e exportação de relatório em PDF."
  }
];

export const APP_FEATURES: AppFeature[] = [
  {
    id: "ferramenta-01-teste",
    title: "Ferramenta 01: Teste de Projeção",
    subtitle: "Você está projetando ou vivendo algo real?",
    description: "Responda a 10 perguntas interativas. O resultado muda dinamicamente conforme suas respostas, revelando se você está em clareza, em zona de mistura ou se a imagem interna idealizada está pesando mais que a realidade.",
    icon: "Sparkles",
    badge: "Diagnóstico Dinâmico",
    highlightPoints: [
      "10 perguntas guiadas sobre primeiro contato, atração e limites",
      "Resultado em tempo real: Clareza vs. Imagem Interna Dominante",
      "Diagnóstico que aponta exatamente onde está o seu próximo ponto de atenção"
    ],
    screenPreview: {
      headerTitle: "Aba Teste • Mini App",
      cardTag: "Resultado Interativo",
      cardTitle: "A imagem interna está ocupando muito espaço?",
      interactiveLabel: "Analisar respostas e gerar direcionamento",
      actionType: "test"
    }
  },
  {
    id: "ferramenta-02-ciclo",
    title: "Ferramenta 02: O Ciclo da Projeção",
    subtitle: "Veja onde o padrão ganha força e interrompa o automático",
    description: "Os rostos mudam, mas o ciclo costuma seguir etapas parecidas. Navegue pelas 6 etapas completas do ciclo e aprenda a reconhecer o sinal exato para cortar o padrão antes de se machucar.",
    icon: "SearchCheck",
    badge: "As 6 Etapas do Padrão",
    highlightPoints: [
      "Mapeamento: Atração imediata → Imagem ideal → Sinais justificados",
      "Rompimento: Adaptação → Quebra da projeção → Escolha consciente",
      "Identifique em qual fase você costuma se anular ou fechar os olhos"
    ],
    screenPreview: {
      headerTitle: "Aba Ciclo • Mini App",
      cardTag: "Etapas do Padrão",
      cardTitle: "Da Atração Imediata à Escolha Consciente",
      interactiveLabel: "Explorar as 6 fases e interromper o ciclo",
      actionType: "tracker"
    }
  },
  {
    id: "ferramenta-03-comparador",
    title: "Ferramenta 03: Comparador Realidade vs. Imagem",
    subtitle: "Pessoa real ou imagem projetada?",
    description: "Uma ferramenta prática de duas colunas para separar o que ele realmente demonstrou em atitudes do que você espera que ele seja. A leitura muda em tempo real enquanto você escreve.",
    icon: "CheckSquare",
    badge: "Fatos vs. Expectativas",
    highlightPoints: [
      "Coluna 1 (Fatos): O que ele demonstrou em atitudes e presença real",
      "Coluna 2 (Projeção): O que você espera, imagina ou torce para que ele seja",
      "Termômetro interativo que calcula se você está na Realidade ou na Fantasia"
    ],
    screenPreview: {
      headerTitle: "Aba Comparador • Mini App",
      cardTag: "Análise em 2 Colunas",
      cardTitle: "Separe as atitudes dele da sua expectativa interna",
      interactiveLabel: "Ver leitura dinâmica: Fatos vs. Projeção",
      actionType: "checklist"
    }
  },
  {
    id: "ferramentas-04-05-jornada",
    title: "Ferramentas 04 e 05: Jornada de 30 Dias & Diário",
    subtitle: "Planner, Diário do Seu Novo Eu e progresso com exportação em PDF",
    description: "Acompanhe sua evolução diária por 30 dias com exercícios guiados de autopercepção, reprogramação do diálogo interno e integração do Animus, com seus registros salvos no seu aparelho e opção de download em PDF.",
    icon: "Trophy",
    badge: "Com Exportação em PDF",
    highlightPoints: [
      "Planner diário interativo para registrar percepções e encontros",
      "5 Fases guiadas: O Novo Eu, Voz do Animus, Atração e Integração",
      "Botão nativo de download para exportar todo o seu diário em PDF"
    ],
    screenPreview: {
      headerTitle: "Aba Jornada • Mini App",
      cardTag: "Relatório de 30 Dias",
      cardTitle: "Progresso do Diário Dedo Mágico",
      interactiveLabel: "Salvo no navegador + Baixar Diário em PDF",
      actionType: "journal"
    }
  },
  {
    id: "ferramenta-06-ajuda",
    title: "Ferramenta 06: Central de Intervenção Imediata",
    subtitle: "O que está acontecendo agora? (Guia para 8 situações de crise)",
    description: "Aquele momento em que ele demora para responder, ou não assume mas não vai embora. Escolha a situação que mais se parece com o seu momento e veja na hora o que observar, o que perguntar e qual ação evitar.",
    icon: "ShieldAlert",
    badge: "Socorro para 8 Crises",
    highlightPoints: [
      "Cenários reais: sumiços, ansiedade de mensagem, love bombing e enrolação",
      "Guia prático triplo para cada crise: O que observar • O que perguntar • O que evitar",
      "Proteção imediata da sua dignidade e paz de espírito em segundos"
    ],
    screenPreview: {
      headerTitle: "Aba Ajuda • Mini App",
      cardTag: "Intervenção em Crises",
      cardTitle: "Ele demora a responder ou não assume a relação?",
      interactiveLabel: "Abrir guia de conduta: O que observar e o que evitar",
      actionType: "sos"
    }
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    name: "Camila R.",
    age: 32,
    city: "São Paulo, SP",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
    tag: "Rompeu ciclo de 4 anos",
    quote: "O Mini Aplicativo mudou completamente o meu jeito de me relacionar! A ferramenta de ajuda com o que fazer quando ele sumia me salvou de mandar mensagens me humilhando. Hoje estou conhecendo um homem incrível que realmente demonstra interesse em atitudes.",
    before: "Sempre caía no 'ele é intenso e misterioso'",
    after: "Casal saudável há 5 meses, sem ansiedade",
    whatsappTime: "14:28"
  },
  {
    id: "2",
    name: "Juliana M.",
    age: 28,
    city: "Belo Horizonte, MG",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&auto=format&fit=crop&q=80",
    tag: "Diagnóstico certeiro",
    quote: "O Teste de Projeção me deu um choque de realidade. Eu achava que tinha 'dedo podre' por azar, mas o app me mostrou com clareza que eu estava me apaixonando pela imagem que eu criei e não pela pessoa real. Usei o comparador e a ficha caiu na hora!",
    before: "Atração somente por homens emocionalmente indisponíveis",
    after: "Paz mental e foco em relacionamentos recíprocos",
    whatsappTime: "09:41"
  },
  {
    id: "3",
    name: "Renata F.",
    age: 41,
    city: "Curitiba, PR",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&auto=format&fit=crop&q=80",
    tag: "Recuperou a autoestima",
    quote: "O diário de 30 dias e a análise das 6 etapas do ciclo foram divisores de águas. Pela primeira vez percebi o momento exato em que eu começava a me adaptar para não perder o homem. Poder baixar meu progresso em PDF me deu muito orgulho!",
    before: "Medo de ficar sozinha e aceitando qualquer migalha",
    after: "Postura inegociável e segurança absoluta nas escolhas",
    whatsappTime: "18:15"
  }
];

export const BONUSES: BonusItem[] = [
  {
    id: "bonus-1",
    number: "01",
    title: "Planner Interativo da Jornada de 30 Dias (com Exportação em PDF)",
    originalValue: "R$ 37,00",
    tag: "Integrado no App",
    description: "Uma jornada estruturada de 30 dias para você registrar sua evolução diária, mapear sentimentos após cada encontro e gerar um documento em PDF com todo o seu progresso.",
    appIntegrationBenefit: "Acesse direto na aba 'Jornada': acompanhe sua consistência dia a dia e faça o download do relatório completo em PDF quando quiser."
  },
  {
    id: "bonus-2",
    number: "02",
    title: "Diário Guiado do Seu Novo Eu & Protocolo do Animus",
    originalValue: "R$ 47,00",
    tag: "Integrado no App",
    description: "5 fases práticas de reprogramação interna para curar sua relação com o masculino: O Seu Novo Eu, A Voz do seu Animus, O Animus nas Atrações, História e Masculino Interno, e Integração na Prática.",
    appIntegrationBenefit: "Perguntas reflexivas e formulário interativo de compromisso para desbloquear sua força interna e parar de projetar carências no outro."
  },
  {
    id: "bonus-3",
    number: "03",
    title: "Guia de Intervenção Imediata para 8 Situações de Crise",
    originalValue: "R$ 57,00",
    tag: "Integrado no App",
    description: "O manual de bolso para momentos de aflição: ele sumiu? Demora a responder? Não assume? Você está justificando defeitos? Saiba exatamente o que observar, o que perguntar e qual atitude evitar na hora.",
    appIntegrationBenefit: "Acesso com 1 clique na aba 'Ajuda' do Mini App: consulte em qualquer emergência emocional sem precisar mandar mensagens por impulso."
  }
];

export const FAQS: FaqItem[] = [
  {
    id: "faq-1",
    question: "Isso realmente funciona pra mim ou é só mais uma tentativa?",
    answer: "Funciona porque não é teoria de autoajuda vazia. O Mini Aplicativo ataca a raiz biológica e psicológica: o padrão de atração inconsciente. Você não vai precisar 'se forçar a gostar de alguém chato', mas sim recalibrar o que o seu cérebro reconhece como atração. E por ser um aplicativo prático e interativo no seu celular, você o utiliza no momento em que a dúvida ou a ansiedade bate."
  },
  {
    id: "faq-2",
    question: "O que é esse Mini Aplicativo? Preciso baixar na Play Store ou Apple Store?",
    answer: "Não precisa baixar nada que ocupe a memória do seu aparelho! O Mini Aplicativo Dedo Mágico roda direto no navegador do seu celular (ou computador) com máxima velocidade e privacidade. Você pode criar um atalho na tela inicial em 1 clique e ele se comporta exatamente como um aplicativo nativo super fluido."
  },
  {
    id: "faq-3",
    question: "Por que o Mini Aplicativo é mais eficiente do que livros tradicionais ou conselhos soltos?",
    answer: "Conselhos e teorias você lê, fecha e esquece no primeiro minuto em que a ansiedade ou a carência bate. O Mini Aplicativo Dedo Mágico é uma ferramenta viva de intervenção imediata no seu bolso: tem teste interativo do seu padrão, o Botão SOS de emergência para frear a ansiedade, o decodificador de sinais em tempo real e um diário gamificado para você acompanhar sua evolução diária."
  },
  {
    id: "faq-4",
    question: "Isso funciona mesmo se eu já estiver em um relacionamento?",
    answer: "Sim! Se você já está em uma relação e percebe que repetiu a mesma dinâmica de desvalorização, cobrança e frieza das relações anteriores, o aplicativo ajuda você a identificar qual parte dessa engrenagem partiu do seu padrão e como mudar a sua postura de forma soberana para transformar o relacionamento ou ter clareza se é hora de encerrar com segurança."
  },
  {
    id: "faq-5",
    question: "Eu preciso ter experiência ou entender de psicologia para usar?",
    answer: "De forma alguma. O aplicativo foi desenhado com linguagem 100% simples, acolhedora e direta ao ponto. As ferramentas são práticas e guiadas por botões, testes de múltipla escolha e respostas automáticas. Em menos de 10 minutos você já tem o seu primeiro diagnóstico em mãos."
  },
  {
    id: "faq-6",
    question: "Isso é só mais um conteúdo genérico sobre 'amor-próprio'?",
    answer: "Não! Dizer 'se ame mais' é fácil, mas não ensina o seu cérebro por que homens indisponíveis e frios ainda causam taquicardia de ansiedade em você. O Dedo Mágico vai na raiz neurológica da atração: como traumas passados e a busca por aprovação criaram o seu 'dedo podre' e como reprogramar isso com ferramentas práticas de bolso."
  },
  {
    id: "faq-7",
    question: "E se eu continuar me sentindo atraída pelo mesmo tipo de homem?",
    answer: "Essa é a beleza do processo: quando você usa o Decodificador de Sinais e o Botão SOS, você começa a enxergar as manipulações e a inconsistência tão rápido que aquele encanto falso cai por terra. A atração por homens errados não acaba na força do ódio, acaba pelo desencanto da consciência."
  },
  {
    id: "faq-8",
    question: "Esse app vai me ensinar a 'conquistar homens' ou fazer joguinhos?",
    answer: "Não ensinamos joguinhos baratos de desinteresse. O Dedo Mágico ensina o que existe de mais magnético: autodomínio, clareza inegociável de padrões e discernimento afiado. Quem tenta fazer joguinho sempre perde para quem domina seus próprios padrões emocionais."
  },
  {
    id: "faq-9",
    question: "Em quanto tempo eu começo a perceber a diferença?",
    answer: "A maioria das usuárias relata uma virada de chave logo nos primeiros 3 dias ao realizar o Teste do Padrão Invisível e ler a análise personalizada gerada. Você passa a encarar as conversas e os encontros com olhos completamente diferentes já no próximo fim de semana."
  },
  {
    id: "faq-10",
    question: "E se não funcionar para mim? Como funciona a garantia?",
    answer: "Você tem 7 dias de garantia incondicional blindada. Você pode entrar no Mini Aplicativo, fazer o diagnóstico, testar todas as ferramentas e bônus. Se por qualquer motivo achar que não fez sentido para você, basta nos enviar um único e-mail e reembolsamos 100% do seu valor. Sem perguntas e sem letras miúdas."
  }
];

export const SAMPLE_QUIZ_QUESTIONS = [
  {
    id: 1,
    question: "Quando você conhece um homem novo, qual atitude mais costuma despertar seu interesse?",
    options: [
      { text: "Ele é misterioso, imprevisível e parece um 'desafio' a ser conquistado", pattern: "intensidade", score: 3 },
      { text: "Ele responde rápido, demonstra interesse constante e tem vida organizada", pattern: "seguro", score: 1 },
      { text: "Ele faz declarações intensas nos primeiros 3 dias e diz que sou a mulher da vida dele", pattern: "lovebombing", score: 3 },
      { text: "Fico desconfiada se ele for legal demais, parece que falta 'química'", pattern: "vicio_ansiedade", score: 3 }
    ]
  },
  {
    id: 2,
    question: "Ele sumiu o dia todo e reapareceu às 23h mandando apenas 'Oi sumida':",
    options: [
      { text: "Sinto um alívio gigante no peito e respondo quase imediatamente", pattern: "vicio_ansiedade", score: 3 },
      { text: "Fico com raiva, penso em mandar um textão cobrando explicação", pattern: "reativo", score: 3 },
      { text: "Visualizo e percebo que ele não é prioridade nem consistente, sigo meu dia", pattern: "seguro", score: 1 },
      { text: "Passo horas analisando se fiz algo errado para ele ter sumido", pattern: "culpa_interna", score: 3 }
    ]
  },
  {
    id: 3,
    question: "Quando você pensa no seu histórico de relacionamentos passados:",
    options: [
      { text: "Sempre termino sentindo que dei 100% e a pessoa deu 10%", pattern: "doadora_compulsiva", score: 3 },
      { text: "Sempre descubro mentiras, traições ou vidas duplas", pattern: "radar_desligado", score: 3 },
      { text: "Meus relacionamentos começam com fogo intenso e esfriam rápido", pattern: "montanha_russa", score: 3 },
      { text: "Já tive altos e baixos, mas sei estabelecer limites claros", pattern: "seguro", score: 1 }
    ]
  }
];
