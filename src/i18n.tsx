import { createContext, useContext, useState, useEffect, type ReactNode } from 'react';

export interface Language {
  code: string;
  label: string;
  flag: string;
}

export const LANGUAGES: Language[] = [
  { code: 'en', label: 'English', flag: '🇺🇸' },
  { code: 'de', label: 'Deutsch', flag: '🇩🇪' },
  { code: 'fr', label: 'Francais', flag: '🇫🇷' },
  { code: 'es', label: 'Espanol', flag: '🇪🇸' },
  { code: 'pt', label: 'Portugues', flag: '🇧🇷' },
  { code: 'ru', label: 'Русский', flag: '🇷🇺' },
  { code: 'zh', label: '中文', flag: '🇨🇳' },
  { code: 'ja', label: '日本語', flag: '🇯🇵' },
  { code: 'ko', label: '한국어', flag: '🇰🇷' },
  { code: 'tr', label: 'Turkce', flag: '🇹🇷' },
  { code: 'pl', label: 'Polski', flag: '🇵🇱' },
  { code: 'nl', label: 'Nederlands', flag: '🇳🇱' },
  { code: 'it', label: 'Italiano', flag: '🇮🇹' },
  { code: 'ar', label: 'العربية', flag: '🇸🇦' },
  { code: 'th', label: 'ไทย', flag: '🇹🇭' },
  { code: 'vi', label: 'Tieng Viet', flag: '🇻🇳' },
];

const translations: Record<string, Record<string, string>> = {
  en: {
    'nav.home': 'Home',
    'nav.blog': 'Blog',
    'nav.buy': 'Get Cheats',
    'hero.status': 'Undetected · Updated for latest SAND patch',
    'hero.subtitle': 'Aimbot, ESP & Wallhack',
    'hero.description': 'Dominate SAND: Raiders of Sophie effortlessly with undetected aimbot, full ESP, triggerbot, wallhack, and radar. Stream-proof mode.',
    'hero.cta': 'Get Cheats',
    'hero.features': 'See Features',
    'hero.trust': 'Windows 10 & 11 · BattlEye Undetected · Stream-Proof · Cloud-DMA Available',
    'meta.title': 'SAND Raiders Cheats – Undetected Aimbot, ESP & Triggerbot | sandraiderscheat.com',
    'meta.description': 'SAND Raiders cheats with undetected aimbot, ESP, triggerbot, wallhack and radar. Stream-proof, updated every patch.',
  },
  de: {
    'nav.home': 'Startseite',
    'nav.blog': 'Blog',
    'nav.buy': 'Cheats Kaufen',
    'hero.status': 'Unerkannt · Aktualisiert fur SAND Patch',
    'hero.subtitle': 'Aimbot, ESP & Wallhack',
    'hero.description': 'Dominiere jeden Raid in SANDs SAND Raiders. SAND Raiders Cheats mit unerkanntem Aimbot, vollem ESP, Wallhack und Loot-Highlights.',
    'hero.cta': 'SAND Raiders Cheats Kaufen',
    'hero.features': 'Features Ansehen',
    'hero.trust': 'Windows 10 & 11 · Steam · BattlEye · Extern & Unerkannt',
    'meta.title': 'SAND Raiders Cheats – Unerkannter Aimbot & ESP fur SAND SAND Raiders',
    'meta.description': 'SAND Raiders Cheats mit unerkanntem Aimbot und ESP fur SAND SAND Raiders.',
  },
  fr: {
    'nav.home': 'Accueil',
    'nav.blog': 'Blog',
    'nav.buy': 'Acheter',
    'hero.status': 'Indetecte · Mis a jour pour SAND patch',
    'hero.subtitle': 'Aimbot, ESP & Wallhack',
    'hero.description': "Dominez chaque raid dans SAND Raiders de SAND. SAND Raiders cheats avec aimbot indetecte, ESP complet, wallhack.",
    'hero.cta': 'Obtenir SAND Raiders Cheats',
    'hero.features': 'Voir Les Fonctionnalites',
    'hero.trust': 'Windows 10 & 11 · Steam · BattlEye · Externe & Indetecte',
    'meta.title': 'SAND Raiders Cheats – Aimbot & ESP Indetecte pour SAND SAND Raiders',
    'meta.description': "SAND Raiders cheats avec aimbot et ESP indetectes pour SAND Raiders de SAND.",
  },
  es: {
    'nav.home': 'Inicio',
    'nav.blog': 'Blog',
    'nav.buy': 'Comprar',
    'hero.status': 'Indetectable · Actualizado para parche SAND',
    'hero.subtitle': 'Aimbot, ESP & Wallhack',
    'hero.description': 'Domina cada incursion en SAND Raiders de SAND. SAND Raiders cheats con aimbot indetectable, ESP completo, wallhack.',
    'hero.cta': 'Obtener SAND Raiders Cheats',
    'hero.features': 'Ver Funciones',
    'hero.trust': 'Windows 10 & 11 · Steam · BattlEye · Externo e Indetectable',
    'meta.title': 'SAND Raiders Cheats – Aimbot & ESP Indetectable para SAND SAND Raiders',
    'meta.description': 'SAND Raiders cheats con aimbot y ESP indetectables para SAND Raiders de SAND.',
  },
  pt: {
    'nav.home': 'Inicio',
    'nav.blog': 'Blog',
    'nav.buy': 'Comprar',
    'hero.status': 'Indetectavel · Atualizado para patch SAND',
    'hero.subtitle': 'Aimbot, ESP & Wallhack',
    'hero.description': 'Domine cada raid no SAND Raiders da SAND. SAND Raiders cheats com aimbot indetectavel, ESP completo, wallhack.',
    'hero.cta': 'Obter SAND Raiders Cheats',
    'hero.features': 'Ver Recursos',
    'hero.trust': 'Windows 10 & 11 · Steam · BattlEye · Externo & Indetectavel',
    'meta.title': 'SAND Raiders Cheats – Aimbot & ESP Indetectavel para SAND SAND Raiders',
    'meta.description': 'SAND Raiders cheats com aimbot e ESP indetectaveis para SAND Raiders da SAND.',
  },
  ru: {
    'nav.home': 'Главная',
    'nav.blog': 'Блог',
    'nav.buy': 'Купить',
    'hero.status': 'Необнаруживаемый · Обновлен для патча SAND',
    'hero.subtitle': 'Аимбот, ESP и Wallhack',
    'hero.description': 'Доминируйте в каждом рейде в SAND Raiders от SAND. SAND Raiders читы с необнаруживаемым аимботом, полным ESP, валхаком.',
    'hero.cta': 'Получить SAND Raiders Читы',
    'hero.features': 'Смотреть Функции',
    'hero.trust': 'Windows 10 & 11 · Steam · BattlEye · Внешний & Необнаруживаемый',
    'meta.title': 'SAND Raiders Читы – Необнаруживаемый Аимбот & ESP для SAND SAND Raiders',
    'meta.description': 'SAND Raiders читы с необнаруживаемым аимботом и ESP для SAND Raiders от SAND.',
  },
  zh: {
    'nav.home': '首页',
    'nav.blog': '博客',
    'nav.buy': '购买',
    'hero.status': '未检测 · 已更新至SAND补丁',
    'hero.subtitle': '自瞄, 透视 & 穿墙',
    'hero.description': '在SAND的SAND Raiders中称霸每场突袭。SAND Raiders作弊器提供未检测自瞄、完整ESP和穿墙。',
    'hero.cta': '获取SAND Raiders作弊器',
    'hero.features': '查看功能',
    'hero.trust': 'Windows 10 & 11 · Steam · BattlEye · 外部 & 未检测',
    'meta.title': 'SAND Raiders作弊器 – 未检测自瞄和ESP用于SAND SAND Raiders',
    'meta.description': 'SAND Raiders作弊器，为SAND SAND Raiders提供未检测的自瞄和ESP。',
  },
  ja: {
    'nav.home': 'ホーム',
    'nav.blog': 'ブログ',
    'nav.buy': '購入',
    'hero.status': '未検出 · SANDパッチ対応済み',
    'hero.subtitle': 'エイムボット、ESP & ウォールハック',
    'hero.description': 'SANDのSAND Raidersで全レイドを制覇。SAND Raidersチートで未検出エイムボット、完全なESP、ウォールハック。',
    'hero.cta': 'SAND Raidersチートを入手',
    'hero.features': '機能を見る',
    'hero.trust': 'Windows 10 & 11 · Steam · BattlEye · 外部 & 未検出',
    'meta.title': 'SAND Raidersチート – 未検出エイムボットとESP for SAND SAND Raiders',
    'meta.description': 'SAND SAND Raiders用の未検出エイムボットとESPを備えたSAND Raidersチート。',
  },
  ko: {
    'nav.home': '홈',
    'nav.blog': '블로그',
    'nav.buy': '구매',
    'hero.status': '미탐지 · SAND 패치 업데이트됨',
    'hero.subtitle': '에임봇, ESP & 월핵',
    'hero.description': 'SAND의 SAND Raiders에서 모든 레이드를 지배하세요. SAND Raiders 치트로 미탐지 에임봇, 완전한 ESP, 월핵.',
    'hero.cta': 'SAND Raiders 치트 받기',
    'hero.features': '기능 보기',
    'hero.trust': 'Windows 10 & 11 · Steam · BattlEye · 외부 & 미탐지',
    'meta.title': 'SAND Raiders 치트 – 미탐지 에임봇 & ESP for SAND SAND Raiders',
    'meta.description': 'SAND SAND Raiders용 미탐지 에임봇과 ESP가 포함된 SAND Raiders 치트.',
  },
  tr: {
    'nav.home': 'Anasayfa',
    'nav.blog': 'Blog',
    'nav.buy': 'Satin Al',
    'hero.status': 'Tespit Edilemez · SAND yaması guncellendi',
    'hero.subtitle': 'Aimbot, ESP & Wallhack',
    'hero.description': "SAND'nin SAND Raiders'inda her baskinda domine edin. SAND Raiders hileleri ile tespit edilemez aimbot, tam ESP, wallhack.",
    'hero.cta': 'SAND Raiders Hilesini Al',
    'hero.features': 'Ozellikleri Gor',
    'hero.trust': 'Windows 10 & 11 · Steam · BattlEye · Harici & Tespit Edilemez',
    'meta.title': 'SAND Raiders Hileler – Tespit Edilemez Aimbot & ESP for SAND SAND Raiders',
    'meta.description': "SAND SAND Raiders için tespit edilemez aimbot ve ESP içeren SAND Raiders hilesi.",
  },
  pl: {
    'nav.home': 'Strona Glowna',
    'nav.blog': 'Blog',
    'nav.buy': 'Kup',
    'hero.status': 'Niewykrywalny · Zaktualizowany dla latki SAND',
    'hero.subtitle': 'Aimbot, ESP & Wallhack',
    'hero.description': 'Zdominuj kazdy rajd w SAND Raiders od SAND. SAND Raiders cheati z niewykrywalnym aimbotem, pelnym ESP, wallhackiem.',
    'hero.cta': 'Zdobadz SAND Raiders Cheat',
    'hero.features': 'Zobacz Funkcje',
    'hero.trust': 'Windows 10 & 11 · Steam · BattlEye · Zewnetrzny & Niewykrywalny',
    'meta.title': 'SAND Raiders Cheaty – Niewykrywalny Aimbot & ESP dla SAND SAND Raiders',
    'meta.description': 'SAND Raiders cheaty z niewykrywalnym aimbotem i ESP dla SAND Raiders od SAND.',
  },
  nl: {
    'nav.home': 'Home',
    'nav.blog': 'Blog',
    'nav.buy': 'Koop',
    'hero.status': 'Ondetecteerbaar · Bijgewerkt voor SAND patch',
    'hero.subtitle': 'Aimbot, ESP & Wallhack',
    'hero.description': "Domineer elke raid in SAND's SAND Raiders. SAND Raiders cheats met ondetecteerbare aimbot, volledige ESP, wallhack.",
    'hero.cta': 'SAND Raiders Cheats Verkrijgen',
    'hero.features': 'Functies Bekijken',
    'hero.trust': 'Windows 10 & 11 · Steam · BattlEye · Extern & Ondetecteerbaar',
    'meta.title': 'SAND Raiders Cheats – Ondetecteerbare Aimbot & ESP voor SAND SAND Raiders',
    'meta.description': "SAND Raiders cheats met ondetecteerbare aimbot en ESP voor SAND's SAND Raiders.",
  },
  it: {
    'nav.home': 'Home',
    'nav.blog': 'Blog',
    'nav.buy': 'Acquista',
    'hero.status': 'Non rilevabile · Aggiornato per patch SAND',
    'hero.subtitle': 'Aimbot, ESP & Wallhack',
    'hero.description': "Domina ogni raid nello SAND Raiders di SAND. SAND Raiders cheats con aimbot non rilevabile, ESP completo, wallhack.",
    'hero.cta': 'Ottieni SAND Raiders Cheats',
    'hero.features': 'Vedi Funzionalita',
    'hero.trust': 'Windows 10 & 11 · Steam · BattlEye · Esterno & Non Rilevabile',
    'meta.title': 'SAND Raiders Cheats – Aimbot & ESP Non Rilevabile per SAND SAND Raiders',
    'meta.description': 'SAND Raiders cheats con aimbot e ESP non rilevabili per SAND Raiders di SAND.',
  },
  ar: {
    'nav.home': 'الرئيسية',
    'nav.blog': 'المدونة',
    'nav.buy': 'شراء',
    'hero.status': 'غير قابل للكشف · محدث لـ SAND تحديث',
    'hero.subtitle': 'ايمبوت، ESP وولهاك',
    'hero.description': 'سيطر على كل غارة في SAND Raiders من SAND. SAND Raiders cheats مع aimbot غير قابل للكشف، ESP كامل، wallhack.',
    'hero.cta': 'احصل على SAND Raiders Cheats',
    'hero.features': 'عرض المميزات',
    'hero.trust': 'Windows 10 & 11 · Steam · BattlEye · خارجي وغير قابل للكشف',
    'meta.title': 'SAND Raiders Cheats – ايمبوت وESP غير قابل للكشف لـ SAND SAND Raiders',
    'meta.description': 'SAND Raiders cheats مع aimbot وESP غير قابلين للكشف للعبة SAND Raiders من SAND.',
  },
  th: {
    'nav.home': 'หน้าหลัก',
    'nav.blog': 'บล็อก',
    'nav.buy': 'ซื้อ',
    'hero.status': 'ตรวจไม่พบ · อัปเดตสำหรับ SAND แพทช์',
    'hero.subtitle': 'เอมบอท, ESP & วอลแฮค',
    'hero.description': 'ครองทุกเรดใน SAND Raiders ของ SAND. SAND Raiders cheats พร้อม aimbot ตรวจไม่พบ, ESP เต็มรูปแบบ, wallhack.',
    'hero.cta': 'รับ SAND Raiders Cheats',
    'hero.features': 'ดูฟีเจอร์',
    'hero.trust': 'Windows 10 & 11 · Steam · BattlEye · ภายนอก & ตรวจไม่พบ',
    'meta.title': 'SAND Raiders Cheats – เอมบอทและ ESP ตรวจไม่พบสำหรับ SAND SAND Raiders',
    'meta.description': 'SAND Raiders cheats พร้อม aimbot และ ESP ตรวจไม่พบสำหรับ SAND Raiders ของ SAND.',
  },
  vi: {
    'nav.home': 'Trang Chu',
    'nav.blog': 'Blog',
    'nav.buy': 'Mua',
    'hero.status': 'Khong bi phat hien · Cap nhat cho ban va SAND',
    'hero.subtitle': 'Aimbot, ESP & Wallhack',
    'hero.description': 'Thong tri moi cuoc dot kich trong SAND Raiders cua SAND. SAND Raiders cheats voi aimbot khong bi phat hien, ESP day du, wallhack.',
    'hero.cta': 'Nhan SAND Raiders Cheats',
    'hero.features': 'Xem Tinh Nang',
    'hero.trust': 'Windows 10 & 11 · Steam · BattlEye · Ben Ngoai & Khong Bi Phat Hien',
    'meta.title': 'SAND Raiders Cheats – Aimbot & ESP Khong Bi Phat Hien cho SAND SAND Raiders',
    'meta.description': 'SAND Raiders cheats voi aimbot va ESP khong bi phat hien cho SAND Raiders cua SAND.',
  },
};

interface I18nContextType {
  lang: string;
  setLang: (lang: string) => void;
  t: (key: string) => string;
}

const I18nContext = createContext<I18nContextType>({
  lang: 'en',
  setLang: () => {},
  t: (key: string) => key,
});

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState(() => {
    const stored = localStorage.getItem('lang');
    if (stored && translations[stored]) return stored;
    const browserLang = navigator.language.split('-')[0];
    if (translations[browserLang]) return browserLang;
    return 'en';
  });

  const setLang = (newLang: string) => {
    setLangState(newLang);
    localStorage.setItem('lang', newLang);
    document.documentElement.lang = newLang;
    document.documentElement.dir = newLang === 'ar' ? 'rtl' : 'ltr';
    updateMetaTags(newLang);
    updateHreflangLinks();
  };

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    updateMetaTags(lang);
    updateHreflangLinks();
  }, []);

  const t = (key: string): string => {
    return translations[lang]?.[key] || translations.en[key] || key;
  };

  return (
    <I18nContext.Provider value={{ lang, setLang, t }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  return useContext(I18nContext);
}

function updateMetaTags(lang: string) {
  const t = translations[lang] || translations.en;
  const title = t['meta.title'] || translations.en['meta.title'];
  const description = t['meta.description'] || translations.en['meta.description'];
  document.title = title;
  const descMeta = document.querySelector('meta[name="description"]');
  if (descMeta) descMeta.setAttribute('content', description);
  const ogTitle = document.querySelector('meta[property="og:title"]');
  if (ogTitle) ogTitle.setAttribute('content', title);
  const ogDesc = document.querySelector('meta[property="og:description"]');
  if (ogDesc) ogDesc.setAttribute('content', description);
  const ogLocale = document.querySelector('meta[property="og:locale"]');
  if (ogLocale) ogLocale.setAttribute('content', lang === 'en' ? 'en_US' : `${lang}_${lang.toUpperCase()}`);
  const twTitle = document.querySelector('meta[name="twitter:title"]');
  if (twTitle) twTitle.setAttribute('content', title);
  const twDesc = document.querySelector('meta[name="twitter:description"]');
  if (twDesc) twDesc.setAttribute('content', description);
}

function updateHreflangLinks() {
  document.querySelectorAll('link[hreflang]').forEach(el => el.remove());
  const base = 'https://sandraiderscheat.com';
  const head = document.head;
  LANGUAGES.forEach(({ code }) => {
    const link = document.createElement('link');
    link.rel = 'alternate';
    link.setAttribute('hreflang', code);
    link.href = `${base}/?lang=${code}`;
    head.appendChild(link);
  });
  const xDefault = document.createElement('link');
  xDefault.rel = 'alternate';
  xDefault.setAttribute('hreflang', 'x-default');
  xDefault.href = base + '/';
  head.appendChild(xDefault);
}
