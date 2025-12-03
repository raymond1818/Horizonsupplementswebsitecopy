import { Product } from '../types/product';

export const products: Product[] = [
  {
    id: '1',
    name: 'Poise 200',
    type: 'Pre-Workout',
    price: 49.99,
    image: '/placeholder.jpg',
    shortDescription: 'Balanced pre-workout with 200mg caffeine for focus and sustained energy. Clean, effective, and designed for everyone.',
    fullDescription: 'Poise 200 delivers the perfect balance of energy and performance. With clinically-dosed ingredients including L-Citrulline for pumps, Beta-Alanine for endurance, and 200mg of caffeine paired with L-Theanine for smooth, focused energy without the jitters. Whether you\'re new to pre-workout or a seasoned athlete, Poise 200 is designed to support your goals.',
    caffeineContent: 200,
    isNew: true,
    flavors: ['Mango', 'Strawberry', 'Dragon\'s Blood', 'Blueberry'],
    averageRating: 4.8,
    reviews: [
      {
        id: 'r1',
        author: 'Jessica M.',
        rating: 5,
        date: '2024-10-15',
        title: 'Perfect balance of energy!',
        comment: 'I love that this gives me clean energy without the jitters. The L-Theanine really makes a difference. Great pumps too!',
        verified: true
      },
      {
        id: 'r2',
        author: 'Taylor K.',
        rating: 5,
        date: '2024-10-12',
        title: 'Best pre-workout I\'ve tried',
        comment: 'Finally a pre-workout that doesn\'t make me feel anxious. The focus is incredible and I can actually feel the difference in my workouts.',
        verified: true
      },
      {
        id: 'r3',
        author: 'Sam R.',
        rating: 4,
        date: '2024-10-08',
        title: 'Great product, could be sweeter',
        comment: 'Performance is excellent, energy is smooth. Only wish the taste was a bit sweeter but that\'s a minor thing.',
        verified: true
      }
    ],
    features: [
      '6,000mg L-Citrulline for enhanced blood flow and pumps',
      '3,200mg Beta-Alanine for muscular endurance',
      '5,000mg Creatine Monohydrate for strength and power',
      '200mg Caffeine + 200mg L-Theanine for focused energy without jitters',
      '2,500mg Betaine for performance and power output',
      'Nitrate-rich beetroot and red spinach extracts',
      'Electrolytes for hydration and performance'
    ],
    formula: [
      { ingredient: 'L-Citrulline', amount: '6,000 mg' },
      { ingredient: 'Red Spinach / Beetroot Extract (std. nitrate)', amount: '300-400 mg nitrate (~5-6 mmol)' },
      { ingredient: 'Beta-Alanine', amount: '3,200 mg' },
      { ingredient: 'Betaine Anhydrous', amount: '2,500 mg' },
      { ingredient: 'Creatine Monohydrate', amount: '5,000 mg' },
      { ingredient: 'Caffeine Anhydrous', amount: '200 mg' },
      { ingredient: 'L-Theanine', amount: '200 mg' },
      { ingredient: 'Sodium (as sodium citrate/sea salt)', amount: '200-250 mg' }
    ]
  },
  {
    id: '2',
    name: 'Poise 0',
    type: 'Pre-Workout',
    price: 49.99,
    image: '/placeholder.jpg',
    shortDescription: 'Stimulant-free pre-workout for pumps and performance. Perfect for evening workouts or those sensitive to caffeine.',
    fullDescription: 'Poise 0 proves you don\'t need stimulants to perform at your best. Formulated with higher doses of L-Citrulline and nitrate sources for incredible pumps, plus nootropics like Citicoline and L-Tyrosine for mental clarity. Perfect for evening workouts, caffeine-sensitive individuals, or anyone who wants clean performance without the buzz.',
    caffeineContent: 0,
    isNew: true,
    flavors: ['Mango', 'Strawberry', 'Dragon\'s Blood', 'Blueberry'],
    averageRating: 4.9,
    reviews: [
      {
        id: 'r4',
        author: 'Morgan L.',
        rating: 5,
        date: '2024-10-18',
        title: 'Amazing pumps without caffeine',
        comment: 'I train late at night and this is perfect. Incredible pumps and focus without keeping me up. Love the ginger extract addition!',
        verified: true
      },
      {
        id: 'r5',
        author: 'Alex P.',
        rating: 5,
        date: '2024-10-14',
        title: 'Caffeine sensitive - this is a game changer',
        comment: 'I can\'t have caffeine but still wanted a good pre-workout. This exceeded my expectations. The mental clarity from Citicoline is noticeable.',
        verified: true
      },
      {
        id: 'r6',
        author: 'Jordan W.',
        rating: 5,
        date: '2024-10-10',
        title: 'Perfect for evening training',
        comment: 'Train at 8pm and sleep great afterwards. No compromise on performance. The pump is unreal.',
        verified: true
      },
      {
        id: 'r7',
        author: 'Casey N.',
        rating: 4,
        date: '2024-10-05',
        title: 'Solid non-stim option',
        comment: 'Really good product. Pumps are great, just takes a few days to notice the full effects. Definitely recommend.',
        verified: true
      }
    ],
    features: [
      '7,000-8,000mg L-Citrulline for maximum pumps',
      'Enhanced nitrate content from beetroot and red spinach',
      '5,000mg Creatine Monohydrate for strength',
      '1,500mg L-Tyrosine for mental focus without stimulants',
      '200-250mg Citicoline (CDP-Choline) for cognitive support',
      '500-750mg Ginger Extract for improved blood flow',
      'Completely caffeine and stimulant-free'
    ],
    formula: [
      { ingredient: 'L-Citrulline', amount: '7,000-8,000 mg' },
      { ingredient: 'Red Spinach / Beetroot Extract (std. nitrate)', amount: '350-400 mg nitrate (~5-6 mmol)' },
      { ingredient: 'Creatine Monohydrate', amount: '5,000 mg' },
      { ingredient: 'Betaine Anhydrous', amount: '2,500-3,000 mg' },
      { ingredient: 'L-Tyrosine', amount: '1,500 mg' },
      { ingredient: 'Citicoline (CDP-Choline)', amount: '200-250 mg' },
      { ingredient: 'Ginger Extract (std. to gingerols)', amount: '500-750 mg' },
      { ingredient: 'Sodium (as sodium citrate/sea salt)', amount: '200-250 mg' }
    ]
  },
  {
    id: '3',
    name: 'Multivitamin for Women',
    type: 'Daily Supplement',
    price: 34.99,
    image: '/placeholder.jpg',
    shortDescription: 'Comprehensive daily multivitamin formulated to support women\'s health, energy, and wellness goals.',
    fullDescription: 'Our Women\'s Multivitamin is designed to support your active lifestyle with a comprehensive blend of essential vitamins and minerals. Formulated with key nutrients including iron for energy, calcium and vitamin D for bone health, folate for reproductive wellness, and biotin for hair, skin, and nails. Everything you need to feel your best, every day.',
    caffeineContent: 0,
    isNew: false,
    comingSoon: true,
    features: [
      'Complete spectrum of essential vitamins and minerals',
      'Iron for healthy blood and energy levels',
      'Calcium and Vitamin D for bone health',
      'Folate for reproductive health',
      'Biotin for healthy hair, skin, and nails',
      'Antioxidants for immune support',
      'Easy-to-digest formula'
    ],
    formula: []
  }
];
