export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface Testimonial {
  id: string;
  name: string;
  age: number;
  city: string;
  image: string;
  quote: string;
  tag: string;
  before: string;
  after: string;
  whatsappTime: string;
}

export interface AppFeature {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  badge: string;
  highlightPoints: string[];
  screenPreview: {
    headerTitle: string;
    cardTag: string;
    cardTitle: string;
    interactiveLabel: string;
    actionType: 'test' | 'tracker' | 'sos' | 'journal' | 'checklist';
  };
}

export interface BonusItem {
  id: string;
  number: string;
  title: string;
  originalValue: string;
  tag: string;
  description: string;
  appIntegrationBenefit: string;
}

export interface ComparisonPoint {
  topic: string;
  traditional: string;
  miniApp: string;
}
