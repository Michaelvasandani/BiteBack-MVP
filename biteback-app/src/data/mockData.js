export const farmers = [
  {
    id: 1,
    name: "Generic Meat Farm",
    owner: "Sarah Johnson",
    location: "2.5 miles away",
    rating: 4.8,
    reviewCount: 127,
    specialties: ["Grass-Fed Beef", "Free-Range Poultry", "Farm-Fresh Eggs"],
    image: "/images/farm_one.avif",
    description: "Family-owned farm specializing in ethically raised meat and poultry",
    bio: "Sarah has been raising livestock ethically for over 15 years, focusing on sustainable farming practices and providing the highest quality meat and poultry to her local community. All animals are grass-fed and free-range.",
    responseTime: "Usually responds within 2 hours",
    popular: true,
    products: [
      { 
        id: 1, 
        name: "Grass-Fed Ground Beef", 
        price: 12.99, 
        unit: "lb", 
        image: "/images/meat.jpg",
        description: "Premium grass-fed ground beef from our pasture-raised cattle. Perfect for burgers, meatballs, or tacos.",
        category: "Beef",
        stock: 20,
        minOrder: 1,
        available: true 
      },
      { 
        id: 2, 
        name: "Ribeye Steaks", 
        price: 24.99, 
        unit: "lb", 
        image: "/images/meat.jpg",
        description: "Premium grass-fed ribeye steaks with excellent marbling. Cut to order and aged for tenderness.",
        category: "Beef",
        stock: 12,
        minOrder: 1,
        available: true 
      },
      { 
        id: 3, 
        name: "Whole Chicken", 
        price: 18.00, 
        unit: "each", 
        image: "/images/meat.jpg",
        description: "Free-range whole chicken, approximately 4-5 lbs. Raised on pasture with no antibiotics or hormones.",
        category: "Poultry",
        stock: 8,
        minOrder: 1,
        available: true 
      },
      { 
        id: 4, 
        name: "Chicken Thighs", 
        price: 8.99, 
        unit: "lb", 
        image: "/images/meat.jpg",
        description: "Bone-in, skin-on chicken thighs from free-range birds. Dark meat with rich flavor, perfect for roasting.",
        category: "Poultry",
        stock: 15,
        minOrder: 1,
        available: true 
      },
      { 
        id: 5, 
        name: "Farm-Fresh Eggs", 
        price: 6.00, 
        unit: "dozen", 
        image: "/images/Brown-eggs.webp",
        description: "Fresh eggs from happy hens that roam freely on our pastures. Rich, golden yolks and superior taste.",
        category: "Eggs",
        stock: 35,
        minOrder: 1,
        available: true 
      },
      { 
        id: 6, 
        name: "Turkey Breast", 
        price: 16.99, 
        unit: "lb", 
        image: "/images/meat.jpg",
        description: "Bone-in turkey breast from heritage breed turkeys. Perfect for family dinners and special occasions.",
        category: "Poultry",
        stock: 6,
        minOrder: 1,
        available: true 
      }
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
    image: "/images/farm_2.jpg",
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
    image: "/images/farm_3.jpg",
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
    image: "/images/vegetables.webp",
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
    image: "/images/farm_one.avif",
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
    image: "/images/farm_2.jpg",
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
    image: "/images/vegetables.webp"
  },
  {
    id: 2,
    name: "Fruits",
    icon: "🍎",
    count: 38,
    image: "/images/farm_3.jpg"
  },
  {
    id: 3,
    name: "Dairy",
    icon: "🥛",
    count: 22,
    image: "/images/dairy.jpg"
  },
  {
    id: 4,
    name: "Meat & Poultry",
    icon: "🥩",
    count: 31,
    image: "/images/meat.jpg"
  },
  {
    id: 5,
    name: "Eggs",
    icon: "🥚",
    count: 18,
    image: "/images/Brown-eggs.webp"
  },
  {
    id: 6,
    name: "Honey & Preserves",
    icon: "🍯",
    count: 15,
    image: "/images/honey-1296x728-header.webp"
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