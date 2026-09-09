export const resort = {
  name: 'Joy Adventure Resort',
  shortName: 'Joy Club',
  tagline: 'Make your holidays memorable in Jaipur',
  phone: '+91 800 0928 080',
  phoneHref: 'tel:+918000928080',
  email: 'info@joyadventureresort.com',
  emailHref: 'mailto:info@joyadventureresort.com',
  website: 'https://joyadventureresort.com/',
  siteAddress: 'Sanskriti Village, Garjeda Village, LNT Road, Diggi Malpura Jaipur Highway, Jaipur, Rajasthan',
  corporateAddress: 'Jaipur Earth Developers Pvt. Ltd., S B-1, Nityanand Nagar, Gandhi Path, Vaishali Nagar, Jaipur — 302021',
  dubaiAddress: 'India Shapes Marbles Scratch L.L.C, P.O. Box 44368, Ind. Area No. 15, Sharjah, U.A.E.',
  dubaiPhone: '+971 6 535 0753',
  checkIn: '12:30 pm',
  checkOut: '11:30 am',
  kidsPolicy: 'Below 5 years free. Ages 5–9 quarter tariff. Above 9 years half tariff.',
};

export const specialties = [
  'Natural lake views and private tents for sunset evenings',
  'A large play area for children',
  'Traditional Rajasthani food and continental plates from trained chefs',
  'Vegetables from the resort’s own farms',
  'Pollution-free, eco-friendly grounds',
  'Birthdays, corporate events, destination weddings and New Year nights',
  'Theme stays — African, Arabic, Rajasthani and Swiss',
  'Guests can plant a tree before they leave',
];

export const rooms = [
  {
    name: 'Lake Facing Swiss Cottage',
    price: '₹5,000',
    unit: '+ GST / 2 guests',
    image: '/resort-media/rooms/lake-cottage.jpg',
    note: 'Water-edge cottage',
    includes: ['Two water bottles', 'Welcome drink', 'High tea', 'Dinner', 'Breakfast', '10+ games (paid games extra)'],
  },
  {
    name: 'Garden Facing Swiss Cottage',
    price: '₹4,500',
    unit: '+ GST / 2 guests',
    image: '/resort-media/rooms/garden-facing.jpg',
    note: 'Double garden facing',
    includes: ['Two water bottles', 'Welcome drink', 'High tea', 'Dinner', 'Breakfast', '10+ games (paid games extra)'],
  },
  {
    name: 'Adventure Tents',
    price: 'On request',
    unit: 'double sharing',
    image: '/resort-media/rooms/adventure-tents.png',
    note: 'Spacious tents on the grounds',
    includes: [
      'Complimentary breakfast',
      '2 mineral water bottles',
      'Rope course, archery, gun shooting',
      'Cricket, badminton, volleyball, football',
      'Swimming pool access',
    ],
  },
  {
    name: 'Arabic Farmhouse',
    price: '₹15,000',
    unit: '+ GST',
    image: '/resort-media/rooms/farmhouse.jpg',
    note: '12,000 sq.ft · 2 BHK + garden',
    includes: ['2 bedrooms with double beds', 'Modular kitchen', 'Living area with LED', 'Fridge, geyser, RO', 'Breakfast for 10'],
  },
  {
    name: 'Rajasthani Farmhouse',
    price: '₹15,000',
    unit: '+ GST',
    image: '/resort-media/rooms/lake-aerial.jpg',
    note: '12,000 sq.ft · 1 BHK + dormitory',
    includes: ['1 bedroom + dormitory', 'Modular kitchen', 'Living area with LED', '2 washrooms', 'Breakfast for 10'],
  },
];

export const games = [
  { name: 'Archery', price: '₹100', image: '/resort-media/games/archery.jpg', note: 'Classic range on the grounds' },
  { name: 'ATV Ride', price: '₹400', image: '/resort-media/games/atv.jpg', note: 'Crazy ride at Sanskriti Village' },
  { name: 'Zip Line', price: '₹400', image: '/resort-media/games/zipline.jpg', note: 'Cross the river on a rope' },
  { name: 'Horse Riding', price: '₹150', image: '/resort-media/games/horse.jpg', note: 'Minimum 15 riders' },
  { name: 'Rocket Launcher', price: '₹200', image: '/resort-media/games/rocket.jpg', note: 'Parachute rocket fun' },
  { name: 'Camel Carting', price: '₹150', image: '/resort-media/games/camel.jpg', note: 'Minimum 15 guests' },
  { name: 'Bull Carting', price: '₹150', image: '/resort-media/games/bull.jpg', note: 'Minimum 15 guests' },
  { name: 'Roller Zorbing', price: '₹100', image: '/resort-media/games/zorbing.jpg', note: 'Safe, funny, and a workout' },
  { name: 'Rope Course', price: '₹150', image: '/resort-media/games/rope.jpg', note: 'Balance up in the trees' },
  { name: 'Gun Shooting', price: '₹100', image: '/resort-media/games/shooting.jpg', note: 'Range activity' },
  { name: 'Paintball', price: '₹400', image: '/resort-media/games/paintball.jpg', note: 'Team colour wars' },
  { name: 'Bungee Jumping', price: '₹100', image: '/resort-media/games/bungee.jpg', note: 'A short, sharp drop' },
  { name: 'Cricket Bowling', price: '₹200', image: '/resort-media/games/cricket.jpg', note: 'Automatic & manual nets' },
  { name: 'Bungee Basket', price: '₹100', image: '/resort-media/games/bungee-basket.jpg', note: 'Trampoline bounce' },
  { name: 'Sumo Wrestling', price: '₹200', image: '/resort-media/games/sumo.jpg', note: 'Padded, laugh-heavy bouts' },
  { name: 'Train Ride', price: '₹50', image: '/resort-media/games/train.jpg', note: 'Minimum 5 guests' },
  { name: 'Boating', price: '₹200', image: '/resort-media/games/boating.jpg', note: 'Minimum 5 guests · lake' },
];

export const packages = [
  {
    name: 'Day Outing Silver',
    price: '₹899',
    unit: '/ person + GST',
    image: '/resort-media/packages/silver.jpg',
    includes: ['Welcome drink', 'Veg starter', 'Lunch or dinner', 'Swimming, archery, parachute rocket, sumo & more'],
  },
  {
    name: 'Day Outing Golden',
    price: '₹1,199',
    unit: '/ person + GST',
    image: '/resort-media/packages/golden.jpg',
    includes: ['Welcome drink', 'Veg starter', 'Lunch or dinner', 'Paddle boat + bungee trampoline', '10+ regular games'],
  },
  {
    name: 'Day Outing Platinum',
    price: '₹1,650',
    unit: '/ person + GST',
    image: '/resort-media/packages/platinum.jpg',
    includes: ['Welcome drink', 'Veg starter', 'One main meal', 'High tea', 'All games — paid + regular'],
  },
  {
    name: 'Full Day Diamond',
    price: '₹1,999',
    unit: '/ person + GST',
    image: '/resort-media/packages/diamond.jpg',
    includes: ['Welcome drink', 'Veg starter', 'Lunch and dinner', 'High tea', 'All games — paid + regular'],
  },
  {
    name: 'Night Outing',
    price: 'On request',
    unit: 'tents · double sharing',
    image: '/resort-media/packages/night.jpg',
    includes: ['Campfire night', 'Adventure tent stay', 'Welcome drink, veg dinner, breakfast', 'Pick 4 pm · return 9 am'],
  },
  {
    name: 'Anniversary Stay',
    price: 'On request',
    unit: 'lake-side cottage',
    image: '/resort-media/packages/anniversary.jpg',
    includes: ['Lake-side premium Swiss cottage', 'Candlelight dinner', 'Breakfast & welcome drinks', 'Full games list'],
  },
];

export const testimonials = [
  {
    id: 1,
    quote: 'Resort facilities are very nice. We enjoyed a lot.',
    name: 'Anamika',
    city: 'Guest · Joy Adventure Resort',
    avatar: '/resort-media/resort/fb-01.jpg',
  },
  {
    id: 2,
    quote: 'I love to visit again.',
    name: 'Sunil',
    city: 'Guest · Joy Adventure Resort',
    avatar: '/resort-media/resort/fb-02.jpg',
  },
  {
    id: 3,
    quote:
      'Awesome place. Mesmerizing view of lake, sunset and sunrise. Swimming pool is very big, neat and clean. Satisfied with the hospitality. Zip line is very adventurous — so much height, and we have to cross the river. Must visit with friends, kids and family.',
    name: 'Mohit',
    city: 'Guest · Joy Adventure Resort',
    avatar: '/resort-media/resort/fb-03.jpg',
  },
];

export const heroVideos = ['/resort-media/hero/slide-1.mp4', '/resort-media/hero/slide-2.mp4'];
export const heroPoster = '/resort-media/hero/banner-03.jpg';
export const madeFilm = '/resort-media/hero/joy-film.mp4';
export const resortFilm = 'https://www.youtube.com/embed/FrhbAny4RMI';

export const galleryPhotos = [
  { title: 'The resort', image: '/resort-media/gallery/g01.jpg' },
  { title: 'Lake lawns', image: '/resort-media/gallery/g02.jpg' },
  { title: 'Grounds', image: '/resort-media/gallery/g03.jpg' },
  { title: 'Swiss cottage', image: '/resort-media/gallery/g04.jpg' },
  { title: 'Garden stay', image: '/resort-media/gallery/g05.jpg' },
  { title: 'Evening lights', image: '/resort-media/gallery/g06.jpg' },
  { title: 'Pool day', image: '/resort-media/gallery/g07.jpg' },
  { title: 'Family lawn', image: '/resort-media/gallery/g08.jpg' },
  { title: 'Open sky', image: '/resort-media/gallery/g09.jpg' },
  { title: 'Resort walk', image: '/resort-media/gallery/g10.jpg' },
  { title: 'Lake edge', image: '/resort-media/gallery/g11.jpg' },
  { title: 'Play field', image: '/resort-media/gallery/g12.jpg' },
  { title: 'Farm stay', image: '/resort-media/gallery/g13.jpg' },
  { title: 'Cottage path', image: '/resort-media/gallery/g14.jpg' },
  { title: 'Sunset sit', image: '/resort-media/gallery/g15.jpg' },
  { title: 'Wide view', image: '/resort-media/gallery/g16.jpg' },
  { title: 'Restaurant', image: '/resort-media/gallery/g17.jpg' },
];

export const media = {
  lakeAerial: '/resort-media/rooms/lake-aerial.jpg',
  lakeCottage: '/resort-media/rooms/lake-cottage.jpg',
  garden: '/resort-media/rooms/garden-facing.jpg',
  tents: '/resort-media/rooms/adventure-tents.png',
  farmhouse: '/resort-media/rooms/farmhouse.jpg',
  resort01: '/resort-media/resort/resort-01.jpg',
  resort02: '/resort-media/resort/resort-02.jpg',
  room01: '/resort-media/resort/room-01.jpg',
  room02: '/resort-media/resort/room-02.jpg',
  games01: '/resort-media/resort/games-01.jpg',
  games02: '/resort-media/resort/games-02.jpg',
  restaurant: '/resort-media/resort/restaurant.jpg',
  table: '/resort-media/resort/table.jpg',
  wedding: '/resort-media/packages/wedding.jpg',
  corporate: '/resort-media/packages/corporate.jpg',
  holi: '/resort-media/events/holi-1.jpg',
};
