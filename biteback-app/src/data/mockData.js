export const farmers = [
  {
    id: 1,
    name: "Green Valley Farm",
    owner: "Sarah Johnson",
    location: "2.5 miles away",
    rating: 4.8,
    reviewCount: 127,
    specialties: ["Organic Vegetables", "Free-Range Eggs", "Raw Honey"],
    image: "https://images.unsplash.com/photo-1500076656116-558758c991c1?w=400",
    description: "Family-owned organic farm specializing in seasonal produce",
    popular: true,
    products: [
      { name: "Heirloom Tomatoes", price: "$4.99/lb", available: true },
      { name: "Fresh Eggs", price: "$6/dozen", available: true },
      { name: "Raw Honey", price: "$12/jar", available: false }
    ]
  },
  {
    id: 2,
    name: "Sunshine Orchards",
    owner: "Mike Chen",
    location: "4.1 miles away",
    rating: 4.9,
    reviewCount: 89,
    specialties: ["Apples", "Peaches", "Seasonal Fruits"],
    image: "https://images.unsplash.com/photo-1474440692490-2e83ae13ba29?w=400",
    description: "Premium orchard fruits picked at peak ripeness",
    popular: true,
    products: [
      { name: "Honeycrisp Apples", price: "$3.99/lb", available: true },
      { name: "Georgia Peaches", price: "$5.99/lb", available: true },
      { name: "Fresh Apple Cider", price: "$8/gallon", available: true }
    ]
  },
  {
    id: 3,
    name: "Heritage Dairy Co.",
    owner: "Tom Williams",
    location: "6.2 miles away",
    rating: 4.7,
    reviewCount: 156,
    specialties: ["Raw Milk", "Artisan Cheese", "Grass-Fed Beef"],
    image: "https://images.unsplash.com/photo-1527153857715-3908f2bae5e8?w=400",
    description: "Traditional dairy farming with grass-fed cattle",
    popular: true,
    products: [
      { name: "Raw Milk", price: "$8/gallon", available: true },
      { name: "Aged Cheddar", price: "$15/lb", available: true },
      { name: "Grass-Fed Ground Beef", price: "$9.99/lb", available: true }
    ]
  },
  {
    id: 4,
    name: "Riverside Gardens",
    owner: "Maria Rodriguez",
    location: "3.8 miles away",
    rating: 4.6,
    reviewCount: 72,
    specialties: ["Herbs", "Microgreens", "Edible Flowers"],
    image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400",
    description: "Specialty herbs and gourmet greens for restaurants and home cooks",
    popular: false,
    products: [
      { name: "Mixed Microgreens", price: "$8/container", available: true },
      { name: "Fresh Basil", price: "$3/bunch", available: true },
      { name: "Edible Flower Mix", price: "$12/box", available: false }
    ]
  },
  {
    id: 5,
    name: "Prairie Wind Farm",
    owner: "James Anderson",
    location: "7.5 miles away",
    rating: 4.9,
    reviewCount: 201,
    specialties: ["Pastured Poultry", "Duck Eggs", "Turkey"],
    image: "https://images.unsplash.com/photo-1518492104633-130d0cc84637?w=400",
    description: "Ethically raised poultry on open pastures",
    popular: true,
    products: [
      { name: "Whole Chicken", price: "$18/each", available: true },
      { name: "Duck Eggs", price: "$9/dozen", available: true },
      { name: "Thanksgiving Turkey", price: "$65/each", available: false }
    ]
  },
  {
    id: 6,
    name: "Sweet Berry Fields",
    owner: "Emily Watson",
    location: "5.0 miles away",
    rating: 4.8,
    reviewCount: 93,
    specialties: ["Strawberries", "Blueberries", "Jam & Preserves"],
    image: "https://images.unsplash.com/photo-1464965911861-746a04b4bca6?w=400",
    description: "Pick-your-own berries and homemade preserves",
    popular: false,
    products: [
      { name: "Fresh Strawberries", price: "$6/quart", available: true },
      { name: "Blueberries", price: "$8/pint", available: true },
      { name: "Homemade Jam", price: "$7/jar", available: true }
    ]
  }
];

export const categories = [
  {
    id: 1,
    name: "Vegetables",
    icon: "🥬",
    count: 45,
    image: "https://images.unsplash.com/photo-1540148426945-6cf22a6b2383?w=400"
  },
  {
    id: 2,
    name: "Fruits",
    icon: "🍎",
    count: 38,
    image: "https://images.unsplash.com/photo-1619566636858-adf3ef46400b?w=400"
  },
  {
    id: 3,
    name: "Dairy",
    icon: "🥛",
    count: 22,
    image: "https://images.unsplash.com/photo-1523473827533-2a64d0d36748?w=400"
  },
  {
    id: 4,
    name: "Meat & Poultry",
    icon: "🥩",
    count: 31,
    image: "https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?w=400"
  },
  {
    id: 5,
    name: "Eggs",
    icon: "🥚",
    count: 18,
    image: "https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?w=400"
  },
  {
    id: 6,
    name: "Honey & Preserves",
    icon: "🍯",
    count: 15,
    image: "https://images.unsplash.com/photo-1471943311424-646960669fbc?w=400"
  }
];

export const testimonials = [
  {
    id: 1,
    name: "Alex Thompson",
    role: "Home Cook",
    content: "The quality of produce from BiteBack farmers is incredible. It's changed how I cook!",
    rating: 5
  },
  {
    id: 2,
    name: "Rachel Green",
    role: "Restaurant Owner",
    content: "Sourcing directly from local farmers has transformed our menu. Our customers love it!",
    rating: 5
  },
  {
    id: 3,
    name: "David Kim",
    role: "Family Shopper",
    content: "My kids actually eat vegetables now! The freshness makes all the difference.",
    rating: 5
  }
];