import { BlogPost } from './types';

export const INITIAL_POSTS: BlogPost[] = [
  {
    id: '1',
    title: 'Top 10 Places to Visit in Northern Areas',
    slug: 'top-10-places-northern-areas',
    coverImage: 'https://picsum.photos/id/1018/800/600',
    category: 'Nature',
    content: `Pakistan's Northern Areas are a paradise for nature lovers. From the majestic peaks of Hunza to the serene lakes of Skardu, every corner tells a story of beauty. 
    
    1. Hunza Valley: Known for its longevity and breathtaking views of Rakaposhi.
    2. Fairy Meadows: The gateway to Nanga Parbat.
    3. Skardu: Home to Shangrila Resort and Deosai Plains.
    
    The best time to visit is between May and October when the weather is pleasant and the roads are accessible. Don't forget to try the local apricot cake in Hunza!`,
    date: '2023-10-15',
    author: 'Traveler Ali'
  },
  {
    id: '2',
    title: "A Foodie's Guide to Lahore",
    slug: 'foodies-guide-to-lahore',
    coverImage: 'https://picsum.photos/id/1060/800/600',
    category: 'Food',
    content: `Lahore is the culinary heart of Pakistan. "Jin ne Lahore nai wekhya o jamya nai" (He who hasn't seen Lahore hasn't been born).
    
    Must try dishes:
    - Siri Paye at Phajja's in the Walled City.
    - Halwa Puri breakfast at Anarkali.
    - Karahi at Butt Karahi, Lakshmi Chowk.
    
    The street food culture here is vibrant and open late into the night.`,
    date: '2023-10-20',
    author: 'Sana Eats'
  },
  {
    id: '3',
    title: 'Safety Tips for Traveling in Pakistan',
    slug: 'safety-tips-pakistan',
    coverImage: 'https://picsum.photos/id/1036/800/600',
    category: 'Guide',
    content: `Pakistan is generally safe for tourists, especially in the popular northern regions. However, standard travel precautions apply.
    
    - Dress Modestly: Respect local customs by wearing loose-fitting clothes.
    - Hydration: Always drink bottled water.
    - Connectivity: Get a local SIM card (Zong or Jazz) for the best coverage in mountains.
    - Hospitality: Pakistanis are incredibly hospitable; don't be surprised if you're invited for tea!`,
    date: '2023-11-05',
    author: 'Global Nomad'
  }
];

export const SOCIAL_LINKS = [
  { name: 'Instagram', url: '#', icon: 'Instagram' },
  { name: 'YouTube', url: '#', icon: 'Youtube' },
  { name: 'Facebook', url: '#', icon: 'Facebook' },
];
