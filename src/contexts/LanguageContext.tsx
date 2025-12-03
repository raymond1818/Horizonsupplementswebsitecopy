import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type Language = 'en' | 'fr' | 'zh';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
}

interface Translations {
  // Header Navigation
  supplements: string;
  allNew: string;
  athletes: string;
  contact: string;
  search: string;
  home: string;
  allProducts: string;
  whatsNew: string;
  preWorkout: string;
  wellness: string;
  
  // Contact
  emailSupport: string;
  callUs: string;
  liveChat: string;
  faq: string;
  
  // Product Names
  poise0: string;
  poise200: string;
  womenMultivitamin: string;
  
  // Product Descriptions
  poise0Desc: string;
  poise200Desc: string;
  womenMultivitaminDesc: string;
  
  // Common Actions
  addToCart: string;
  buyNow: string;
  viewDetails: string;
  checkout: string;
  continueShopping: string;
  proceedToCheckout: string;
  
  // Cart
  cart: string;
  cartEmpty: string;
  subtotal: string;
  total: string;
  remove: string;
  quantity: string;
  
  // Footer
  shopHeader: string;
  supportHeader: string;
  connectHeader: string;
  forwardThinking: string;
  torontoCanada: string;
  allRightsReserved: string;
  shipping: string;
  returns: string;
  
  // Product Categories
  newArrivals: string;
  bestSellers: string;
  shopByCategory: string;
  
  // Product Details
  flavor: string;
  servings: string;
  keyBenefits: string;
  ingredients: string;
  directions: string;
  warnings: string;
  description: string;
  nutritionFacts: string;
  reviews: string;
  writeReview: string;
  rating: string;
  
  // Checkout
  shippingInformation: string;
  billingInformation: string;
  paymentMethod: string;
  orderSummary: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  province: string;
  postalCode: string;
  country: string;
  cardNumber: string;
  expiryDate: string;
  cvv: string;
  placeOrder: string;
  
  // Common
  loading: string;
  learnMore: string;
  shopNow: string;
  featured: string;
  new: string;
  sale: string;
  outOfStock: string;
  inStock: string;
  
  // Athletes Page
  meetOurAthletes: string;
  athletesIntro: string;
  
  // Certifications
  certifications: string;
  certificationsIntro: string;
  gmpCertified: string;
  healthCanadaCertified: string;
  sgsCertified: string;
  downloadCOA: string;
  
  // Hero Section
  heroTitle: string;
  heroSubtitle: string;
  
  // Compare
  compare: string;
  compareProducts: string;
  addToCompare: string;
  
  // Language Selector
  selectLanguage: string;
  english: string;
  french: string;
  mandarin: string;
  
  // Additional HomePage
  heroNewPoiseSeries: string;
  recovery: string;
  energy: string;
  newArrivalsIntro: string;
  comingSoon: string;
  notifyMe: string;
  availableSoon: string;
  view: string;
  nonStim: string;
  premiumIngredients: string;
  premiumIngredientsDesc: string;
  designedForEveryone: string;
  designedForEveryoneDesc: string;
  qualityTested: string;
  qualityTestedDesc: string;
  certifiedQuality: string;
  certifiedQualityIntro: string;
  gmpCertifiedDesc: string;
  healthCanadaCertifiedDesc: string;
  sgsCertifiedDesc: string;
  coaDesc: string;
  transparencyStatement: string;
  viewAllCertifications: string;
  comingSoonSectionIntro: string;
  addedToCart: string;
  clearCart: string;
}

const translations: Record<Language, Translations> = {
  en: {
    // Header Navigation
    supplements: 'SUPPLEMENTS',
    allNew: 'ALL NEW',
    athletes: 'ATHLETES',
    contact: 'CONTACT',
    search: 'SEARCH',
    home: 'HOME',
    allProducts: 'ALL PRODUCTS',
    whatsNew: "WHAT'S NEW",
    preWorkout: 'PRE-WORKOUT',
    wellness: 'WELLNESS',
    
    // Contact
    emailSupport: 'EMAIL SUPPORT',
    callUs: 'CALL US',
    liveChat: 'LIVE CHAT',
    faq: 'FAQ',
    
    // Product Names
    poise0: 'Poise 0',
    poise200: 'Poise 200',
    womenMultivitamin: "Women's Multivitamin",
    
    // Product Descriptions
    poise0Desc: 'Stimulant-free pre-workout for enhanced focus and pump',
    poise200Desc: 'Premium pre-workout with 200mg caffeine for explosive energy',
    womenMultivitaminDesc: 'Complete daily multivitamin formulated for women',
    
    // Common Actions
    addToCart: 'ADD TO CART',
    buyNow: 'BUY NOW',
    viewDetails: 'VIEW DETAILS',
    checkout: 'CHECKOUT',
    continueShopping: 'CONTINUE SHOPPING',
    proceedToCheckout: 'PROCEED TO CHECKOUT',
    
    // Cart
    cart: 'CART',
    cartEmpty: 'Your cart is empty',
    subtotal: 'Subtotal',
    total: 'Total',
    remove: 'Remove',
    quantity: 'Quantity',
    
    // Footer
    shopHeader: 'SHOP',
    supportHeader: 'SUPPORT',
    connectHeader: 'CONNECT',
    forwardThinking: 'Forward-thinking supplements designed for everyone. Home of the Poise line.',
    torontoCanada: 'Toronto, Canada',
    allRightsReserved: '© 2025 Horizon. All rights reserved. Toronto, Canada.',
    shipping: 'Shipping',
    returns: 'Returns',
    
    // Product Categories
    newArrivals: 'New Arrivals',
    bestSellers: 'Best Sellers',
    shopByCategory: 'Shop by Category',
    
    // Product Details
    flavor: 'Flavor',
    servings: 'Servings',
    keyBenefits: 'Key Benefits',
    ingredients: 'Ingredients',
    directions: 'Directions',
    warnings: 'Warnings',
    description: 'Description',
    nutritionFacts: 'Nutrition Facts',
    reviews: 'Reviews',
    writeReview: 'Write a Review',
    rating: 'Rating',
    
    // Checkout
    shippingInformation: 'Shipping Information',
    billingInformation: 'Billing Information',
    paymentMethod: 'Payment Method',
    orderSummary: 'Order Summary',
    firstName: 'First Name',
    lastName: 'Last Name',
    email: 'Email',
    phone: 'Phone',
    address: 'Address',
    city: 'City',
    province: 'Province',
    postalCode: 'Postal Code',
    country: 'Country',
    cardNumber: 'Card Number',
    expiryDate: 'Expiry Date',
    cvv: 'CVV',
    placeOrder: 'Place Order',
    
    // Common
    loading: 'Loading...',
    learnMore: 'LEARN MORE',
    shopNow: 'SHOP NOW',
    featured: 'FEATURED',
    new: 'NEW',
    sale: 'SALE',
    outOfStock: 'Out of Stock',
    inStock: 'In Stock',
    
    // Athletes Page
    meetOurAthletes: 'Meet Our Athletes',
    athletesIntro: 'Our athletes represent the best in their respective fields, embodying the Horizon spirit of excellence and inclusivity.',
    
    // Certifications
    certifications: 'Certifications',
    certificationsIntro: 'Horizon is committed to the highest standards of quality and safety.',
    gmpCertified: 'GMP Certified',
    healthCanadaCertified: 'Health Canada Certified',
    sgsCertified: 'SGS Certified',
    downloadCOA: 'Download COA',
    
    // Hero Section
    heroTitle: 'Elevate Your Performance',
    heroSubtitle: 'Premium supplements designed for the modern athlete',
    
    // Compare
    compare: 'Compare',
    compareProducts: 'Compare Products',
    addToCompare: 'Add to Compare',
    
    // Language Selector
    selectLanguage: 'LANGUAGE',
    english: 'English (Canada)',
    french: 'Français (Canada)',
    mandarin: '简体中文',
    
    // Additional HomePage
    heroNewPoiseSeries: 'NEW POISE SERIES - AVAILABLE NOW',
    recovery: 'RECOVERY',
    energy: 'ENERGY',
    newArrivalsIntro: 'Introducing the Poise Series - precision-formulated supplements designed with you in mind',
    comingSoon: 'COMING SOON',
    notifyMe: 'NOTIFY ME',
    availableSoon: 'Available Soon',
    view: 'VIEW',
    nonStim: 'NON-STIM',
    premiumIngredients: 'PREMIUM INGREDIENTS',
    premiumIngredientsDesc: 'Clinically-dosed ingredients backed by research',
    designedForEveryone: 'DESIGNED FOR EVERYONE',
    designedForEveryoneDesc: 'An inclusive approach to supplements that works for you',
    qualityTested: 'QUALITY TESTED',
    qualityTestedDesc: 'Rigorously tested for purity and potency',
    certifiedQuality: 'CERTIFIED QUALITY',
    certifiedQualityIntro: 'Every Horizon product meets the highest standards of quality and safety. We believe in complete transparency about what goes into our supplements.',
    gmpCertifiedDesc: 'Manufactured following Good Manufacturing Practices to ensure consistent quality',
    healthCanadaCertifiedDesc: 'Approved and regulated by Health Canada for safety and efficacy',
    sgsCertifiedDesc: 'Produced in certified facilities that meet international quality standards',
    coaDesc: 'Every ingredient verified with independent lab testing for purity and potency',
    transparencyStatement: 'We\'re committed to complete transparency. All of our certifications and testing documentation are available for review. Your health and safety are our top priorities, and we want you to feel confident about what you\'re putting into your body.',
    viewAllCertifications: 'VIEW ALL CERTIFICATIONS',
    comingSoonSectionIntro: 'Exciting new products in development - stay tuned',
    addedToCart: 'added to cart!',
    clearCart: 'CLEAR CART',
  },
  fr: {
    // Header Navigation
    supplements: 'SUPPLÉMENTS',
    allNew: 'NOUVEAUTÉS',
    athletes: 'ATHLÈTES',
    contact: 'CONTACT',
    search: 'RECHERCHER',
    home: 'ACCUEIL',
    allProducts: 'TOUS LES PRODUITS',
    whatsNew: 'QUOI DE NEUF',
    preWorkout: 'PRÉ-ENTRAÎNEMENT',
    wellness: 'BIEN-ÊTRE',
    
    // Contact
    emailSupport: 'SOUTIEN PAR COURRIEL',
    callUs: 'APPELEZ-NOUS',
    liveChat: 'CLAVARDAGE EN DIRECT',
    faq: 'FAQ',
    
    // Product Names
    poise0: 'Poise 0',
    poise200: 'Poise 200',
    womenMultivitamin: 'Multivitamine pour Femmes',
    
    // Product Descriptions
    poise0Desc: 'Pré-entraînement sans stimulant pour une concentration et une pompe améliorées',
    poise200Desc: 'Pré-entraînement premium avec 200 mg de caféine pour une énergie explosive',
    womenMultivitaminDesc: 'Multivitamine quotidienne complète formulée pour les femmes',
    
    // Common Actions
    addToCart: 'AJOUTER AU PANIER',
    buyNow: 'ACHETER MAINTENANT',
    viewDetails: 'VOIR DÉTAILS',
    checkout: 'COMMANDER',
    continueShopping: 'CONTINUER VOS ACHATS',
    proceedToCheckout: 'PASSER À LA CAISSE',
    
    // Cart
    cart: 'PANIER',
    cartEmpty: 'Votre panier est vide',
    subtotal: 'Sous-total',
    total: 'Total',
    remove: 'Retirer',
    quantity: 'Quantité',
    
    // Footer
    shopHeader: 'BOUTIQUE',
    supportHeader: 'SOUTIEN',
    connectHeader: 'CONNEXION',
    forwardThinking: 'Suppléments avant-gardistes conçus pour tous. Maison de la gamme Poise.',
    torontoCanada: 'Toronto, Canada',
    allRightsReserved: '© 2025 Horizon. Tous droits réservés. Toronto, Canada.',
    shipping: 'Expédition',
    returns: 'Retours',
    
    // Product Categories
    newArrivals: 'Nouveaux Arrivages',
    bestSellers: 'Meilleures Ventes',
    shopByCategory: 'Acheter par Catégorie',
    
    // Product Details
    flavor: 'Saveur',
    servings: 'Portions',
    keyBenefits: 'Avantages Clés',
    ingredients: 'Ingrédients',
    directions: 'Mode d\'emploi',
    warnings: 'Avertissements',
    description: 'Description',
    nutritionFacts: 'Valeurs Nutritionnelles',
    reviews: 'Avis',
    writeReview: 'Écrire un Avis',
    rating: 'Évaluation',
    
    // Checkout
    shippingInformation: 'Informations de Livraison',
    billingInformation: 'Informations de Facturation',
    paymentMethod: 'Mode de Paiement',
    orderSummary: 'Résumé de la Commande',
    firstName: 'Prénom',
    lastName: 'Nom',
    email: 'Courriel',
    phone: 'Téléphone',
    address: 'Adresse',
    city: 'Ville',
    province: 'Province',
    postalCode: 'Code Postal',
    country: 'Pays',
    cardNumber: 'Numéro de Carte',
    expiryDate: 'Date d\'Expiration',
    cvv: 'CVV',
    placeOrder: 'Passer la Commande',
    
    // Common
    loading: 'Chargement...',
    learnMore: 'EN SAVOIR PLUS',
    shopNow: 'MAGASINER MAINTENANT',
    featured: 'EN VEDETTE',
    new: 'NOUVEAU',
    sale: 'SOLDE',
    outOfStock: 'En Rupture de Stock',
    inStock: 'En Stock',
    
    // Athletes Page
    meetOurAthletes: 'Rencontrez Nos Athlètes',
    athletesIntro: 'Nos athlètes représentent le meilleur dans leurs domaines respectifs, incarnant l\'esprit Horizon d\'excellence et d\'inclusivité.',
    
    // Certifications
    certifications: 'Certifications',
    certificationsIntro: 'Horizon s\'engage aux normes les plus élevées de qualité et de sécurité.',
    gmpCertified: 'Certifié BPF',
    healthCanadaCertified: 'Certifié Santé Canada',
    sgsCertified: 'Certifié SGS',
    downloadCOA: 'Télécharger COA',
    
    // Hero Section
    heroTitle: 'Élevez Votre Performance',
    heroSubtitle: 'Suppléments premium conçus pour l\'athlète moderne',
    
    // Compare
    compare: 'Comparer',
    compareProducts: 'Comparer les Produits',
    addToCompare: 'Ajouter à Comparer',
    
    // Language Selector
    selectLanguage: 'LANGUE',
    english: 'English (Canada)',
    french: 'Français (Canada)',
    mandarin: '简体中文',
    
    // Additional HomePage
    heroNewPoiseSeries: 'NOUVELLE SÉRIE POISE - DISPONIBLE MAINTENANT',
    recovery: 'RÉCUPÉRATION',
    energy: 'ÉNERGIE',
    newArrivalsIntro: 'Présentation de la série Poise - suppléments formulés avec précision, conçus pour vous',
    comingSoon: 'BIENTÔT DISPONIBLE',
    notifyMe: 'ME NOTIFIER',
    availableSoon: 'Disponible Bientôt',
    view: 'VOIR',
    nonStim: 'SANS STIMULANT',
    premiumIngredients: 'INGRÉDIENTS PREMIUM',
    premiumIngredientsDesc: 'Ingrédients dosés cliniquement et soutenus par la recherche',
    designedForEveryone: 'CONÇU POUR TOUS',
    designedForEveryoneDesc: 'Une approche inclusive des suppléments qui fonctionne pour vous',
    qualityTested: 'QUALITÉ TESTÉE',
    qualityTestedDesc: 'Rigoureusement testé pour la pureté et la puissance',
    certifiedQuality: 'QUALITÉ CERTIFIÉE',
    certifiedQualityIntro: 'Chaque produit Horizon répond aux normes les plus élevées de qualité et de sécurité. Nous croyons en la transparence complète sur ce qui entre dans nos suppléments.',
    gmpCertifiedDesc: 'Fabriqué selon les Bonnes Pratiques de Fabrication pour assurer une qualité constante',
    healthCanadaCertifiedDesc: 'Approuvé et réglementé par Santé Canada pour la sécurité et l\'efficacité',
    sgsCertifiedDesc: 'Produit dans des installations certifiées qui respectent les normes de qualité internationales',
    coaDesc: 'Chaque ingrédient vérifié avec des tests de laboratoire indépendants pour la pureté et la puissance',
    transparencyStatement: 'Nous nous engageons à une transparence totale. Toutes nos certifications et notre documentation de test sont disponibles pour examen. Votre santé et votre sécurité sont nos priorités absolues, et nous voulons que vous vous sentiez en confiance sur ce que vous mettez dans votre corps.',
    viewAllCertifications: 'VOIR TOUTES LES CERTIFICATIONS',
    comingSoonSectionIntro: 'De nouveaux produits passionnants en développement - restez à l\'écoute',
    addedToCart: 'ajouté au panier!',
  },
  zh: {
    // Header Navigation
    supplements: '营养补充剂',
    allNew: '全新产品',
    athletes: '运动员',
    contact: '联系我们',
    search: '搜索',
    home: '首页',
    allProducts: '所有产品',
    whatsNew: '最新产品',
    preWorkout: '运动前补充',
    wellness: '健康保健',
    
    // Contact
    emailSupport: '邮件支持',
    callUs: '致电我们',
    liveChat: '在线客服',
    faq: '常见问题',
    
    // Product Names
    poise0: 'Poise 0',
    poise200: 'Poise 200',
    womenMultivitamin: '女性复合维生素',
    
    // Product Descriptions
    poise0Desc: '无刺激运动前补充剂，增强专注力和肌肉泵感',
    poise200Desc: '含200毫克咖啡因的高级运动前补充剂，提供爆发性能量',
    womenMultivitaminDesc: '专为女性配制的完整日常复合维生素',
    
    // Common Actions
    addToCart: '加入购物车',
    buyNow: '立即购买',
    viewDetails: '查看详情',
    checkout: '结账',
    continueShopping: '继续购物',
    proceedToCheckout: '前往结账',
    
    // Cart
    cart: '购物车',
    cartEmpty: '您的购物车是空的',
    subtotal: '小计',
    total: '总计',
    remove: '移除',
    quantity: '数量',
    
    // Footer
    shopHeader: '购物',
    supportHeader: '支持',
    connectHeader: '联系',
    forwardThinking: '为每个人设计的前瞻性补充剂。Poise 系列的家。',
    torontoCanada: '加拿大多伦多',
    allRightsReserved: '© 2025 Horizon. 版权所有。加拿大多伦多。',
    shipping: '配送',
    returns: '退货',
    
    // Product Categories
    newArrivals: '新品上市',
    bestSellers: '畅销产品',
    shopByCategory: '按类别购物',
    
    // Product Details
    flavor: '口味',
    servings: '份数',
    keyBenefits: '主要益处',
    ingredients: '成分',
    directions: '使用方法',
    warnings: '警告',
    description: '描述',
    nutritionFacts: '营养成分',
    reviews: '评论',
    writeReview: '写评论',
    rating: '评分',
    
    // Checkout
    shippingInformation: '配送信息',
    billingInformation: '账单信息',
    paymentMethod: '付款方式',
    orderSummary: '订单摘要',
    firstName: '名字',
    lastName: '姓氏',
    email: '电子邮件',
    phone: '电话',
    address: '地址',
    city: '城市',
    province: '省份',
    postalCode: '邮政编码',
    country: '国家',
    cardNumber: '卡号',
    expiryDate: '过期日期',
    cvv: 'CVV',
    placeOrder: '下订单',
    
    // Common
    loading: '加载中...',
    learnMore: '了解更多',
    shopNow: '立即购物',
    featured: '精选',
    new: '新品',
    sale: '促销',
    outOfStock: '缺货',
    inStock: '有货',
    
    // Athletes Page
    meetOurAthletes: '认识我们的运动员',
    athletesIntro: '我们的运动员代表了各自领域的最佳水平，体现了 Horizon 卓越和包容的精神。',
    
    // Certifications
    certifications: '认证',
    certificationsIntro: 'Horizon 致力于最高标准的质量和安全。',
    gmpCertified: 'GMP 认证',
    healthCanadaCertified: '加拿大卫生部认证',
    sgsCertified: 'SGS 认证',
    downloadCOA: '下载 COA',
    
    // Hero Section
    heroTitle: '提升您的表现',
    heroSubtitle: '为现代运动员设计的高级补充剂',
    
    // Compare
    compare: '比较',
    compareProducts: '比较产品',
    addToCompare: '添加到比较',
    
    // Language Selector
    selectLanguage: '语言',
    english: 'English (Canada)',
    french: 'Français (Canada)',
    mandarin: '简体中文',
    
    // Additional HomePage
    heroNewPoiseSeries: '全新 POISE 系列 - 现已上市',
    recovery: '恢复',
    energy: '能量',
    newArrivalsIntro: '介绍 Poise 系列 - 为您精心配制的补充剂',
    comingSoon: '即将推出',
    notifyMe: '通知我',
    availableSoon: '即将上市',
    view: '查看',
    nonStim: '无刺激',
    premiumIngredients: '优质成分',
    premiumIngredientsDesc: '经过临床剂量和研究支持的成分',
    designedForEveryone: '为每个人设计',
    designedForEveryoneDesc: '适合您的包容性补充剂方法',
    qualityTested: '质量测试',
    qualityTestedDesc: '经过严格测试以确保纯度和效力',
    certifiedQuality: '认证质量',
    certifiedQualityIntro: '每个 Horizon 产品都符合最高的质量和安全标准。我们相信完全透明地告知我们补充剂中的成分。',
    gmpCertifiedDesc: '按照良好生产规范制造，以确保质量一致',
    healthCanadaCertifiedDesc: '经加拿大卫生部批准和监管，确保安全和有效性',
    sgsCertifiedDesc: '在符合国际质量标准的认证工厂生产',
    coaDesc: '每种成分都经过独立实验室测试验证纯度和效力',
    transparencyStatement: '我们致力于完全透明。我们所有的认证和测试文档都可供审查。您的健康和安全是我们的首要任务，我们希望您对摄入体内的东西充满信心。',
    viewAllCertifications: '查看所有认证',
    comingSoonSectionIntro: '令人兴奋的新产品正在开发中 - 敬请期待',
    addedToCart: '已加入购物车！',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem('horizon-language');
    return (saved as Language) || 'en';
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('horizon-language', lang);
  };

  const value = {
    language,
    setLanguage,
    t: translations[language],
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
