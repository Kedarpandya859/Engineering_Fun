export interface Startup {
  id: string;
  name: string;
  tagline: string;
  logo: string;
  industry: string;
  stage: string;
  fundingGoal: number;
  amountRaised: number;
  investorCount: number;
  minInvestment: number;
  daysRemaining: number;
  featured: boolean;
  location: string;
  description: string;
  problem: string;
  solution: string;
  traction: string[];
  team: TeamMember[];
  updates: Update[];
}

export interface TeamMember {
  name: string;
  role: string;
  image: string;
  bio: string;
  linkedin?: string;
}

export interface Update {
  date: string;
  title: string;
  content: string;
}

export const mockStartups: Startup[] = [
  {
    id: "ecotech-solutions",
    name: "EcoTech Solutions",
    tagline: "AI-powered waste management for smart cities",
    logo: "🌱",
    industry: "CleanTech",
    stage: "Series A",
    fundingGoal: 500000,
    amountRaised: 387500,
    investorCount: 142,
    minInvestment: 250,
    daysRemaining: 12,
    featured: true,
    location: "San Francisco, CA",
    description: "EcoTech Solutions is revolutionizing urban waste management through AI-powered smart bins and route optimization algorithms that reduce collection costs by 40%.",
    problem: "Cities spend billions on inefficient waste collection, with trucks often collecting half-empty bins while overflowing ones are ignored.",
    solution: "Our IoT sensors and AI platform predict fill levels, optimize routes in real-time, and provide analytics to reduce costs and environmental impact.",
    traction: ["15 cities deployed", "40% cost reduction average", "$2.3M ARR", "98% customer retention"],
    team: [
      { name: "Sarah Chen", role: "CEO & Co-founder", image: "👩‍💼", bio: "Former Head of Sustainability at Google", linkedin: "#" },
      { name: "Marcus Johnson", role: "CTO", image: "👨‍💻", bio: "Ex-Tesla AI Engineer", linkedin: "#" }
    ],
    updates: [
      { date: "2024-01-15", title: "New City Partnership", content: "Excited to announce our partnership with Denver!" }
    ]
  },
  {
    id: "healthai-diagnostics",
    name: "HealthAI",
    tagline: "Early disease detection through voice analysis",
    logo: "🏥",
    industry: "HealthTech",
    stage: "Seed",
    fundingGoal: 750000,
    amountRaised: 562500,
    investorCount: 203,
    minInvestment: 100,
    daysRemaining: 8,
    featured: true,
    location: "Boston, MA",
    description: "HealthAI uses advanced voice biomarkers to detect early signs of respiratory diseases, Parkinson's, and mental health conditions with 94% accuracy.",
    problem: "Late diagnosis of diseases costs lives and billions in healthcare spending. Most people avoid regular screenings.",
    solution: "A simple 30-second voice recording analyzed by our AI can detect 15+ conditions earlier than traditional methods.",
    traction: ["FDA Breakthrough designation", "500K+ screenings", "Partnerships with 12 hospital systems", "94% diagnostic accuracy"],
    team: [
      { name: "Dr. Emily Watson", role: "CEO & Founder", image: "👩‍⚕️", bio: "Harvard Medical School researcher", linkedin: "#" },
      { name: "James Park", role: "CTO", image: "👨‍🔬", bio: "MIT AI Lab alumni", linkedin: "#" }
    ],
    updates: []
  },
  {
    id: "educonnect-learning",
    name: "EduConnect",
    tagline: "Personalized learning paths powered by AI tutors",
    logo: "📚",
    industry: "EdTech",
    stage: "Series A",
    fundingGoal: 400000,
    amountRaised: 280000,
    investorCount: 89,
    minInvestment: 500,
    daysRemaining: 21,
    featured: true,
    location: "Austin, TX",
    description: "EduConnect provides AI tutors that adapt to each student's learning style, offering personalized education at scale.",
    problem: "One-size-fits-all education fails most students. Private tutoring is unaffordable for many families.",
    solution: "Our AI tutors provide 1-on-1 personalized learning experiences at a fraction of the cost of human tutors.",
    traction: ["250K active students", "45% improvement in test scores", "B2B contracts with 50 school districts"],
    team: [
      { name: "Maria Garcia", role: "CEO", image: "👩‍🏫", bio: "Former Superintendent, Houston ISD", linkedin: "#" }
    ],
    updates: []
  },
  {
    id: "farmtech-pro",
    name: "FarmTech Pro",
    tagline: "Precision agriculture for the modern farmer",
    logo: "🌾",
    industry: "AgriTech",
    stage: "Seed",
    fundingGoal: 300000,
    amountRaised: 195000,
    investorCount: 67,
    minInvestment: 250,
    daysRemaining: 35,
    featured: false,
    location: "Des Moines, IA",
    description: "Drone-based crop monitoring and AI-driven recommendations help farmers increase yields by 25% while reducing water and fertilizer usage.",
    problem: "Farmers waste resources due to lack of real-time field data, leading to lower yields and environmental damage.",
    solution: "Our drones capture detailed field imagery, and our AI provides actionable insights for optimal resource allocation.",
    traction: ["2,000+ farms served", "25% average yield increase", "$1.2M ARR"],
    team: [
      { name: "John Miller", role: "CEO", image: "👨‍🌾", bio: "4th generation farmer & Stanford MBA", linkedin: "#" }
    ],
    updates: []
  },
  {
    id: "finflow-payments",
    name: "FinFlow",
    tagline: "Instant cross-border payments for businesses",
    logo: "💳",
    industry: "FinTech",
    stage: "Series A",
    fundingGoal: 1000000,
    amountRaised: 820000,
    investorCount: 312,
    minInvestment: 1000,
    daysRemaining: 5,
    featured: true,
    location: "New York, NY",
    description: "FinFlow enables businesses to send and receive international payments in seconds, not days, with 80% lower fees than traditional banks.",
    problem: "International B2B payments take 3-5 days and cost 3-5% in fees, hurting cash flow and profitability.",
    solution: "Our blockchain-powered platform settles payments in real-time with fees under 0.5%.",
    traction: ["$500M+ processed", "2,000+ business customers", "40+ countries supported", "0.3% average fee"],
    team: [
      { name: "Alex Rivera", role: "CEO", image: "👨‍💼", bio: "Former VP at Stripe", linkedin: "#" },
      { name: "Nina Patel", role: "CFO", image: "👩‍💼", bio: "Ex-Goldman Sachs", linkedin: "#" }
    ],
    updates: []
  },
  {
    id: "spacelogistics",
    name: "SpaceLogistics",
    tagline: "Last-mile delivery for satellite constellations",
    logo: "🚀",
    industry: "SpaceTech",
    stage: "Series A",
    fundingGoal: 2000000,
    amountRaised: 1450000,
    investorCount: 178,
    minInvestment: 2500,
    daysRemaining: 18,
    featured: true,
    location: "Los Angeles, CA",
    description: "We provide orbital transfer and satellite servicing vehicles, reducing deployment costs by 60%.",
    problem: "Launching satellites to their final orbit is expensive and inflexible with current rocket-only solutions.",
    solution: "Our reusable space tugs can deliver multiple satellites to precise orbits from a single launch.",
    traction: ["3 successful missions", "NASA contract", "$15M in signed contracts", "2 vehicles in orbit"],
    team: [
      { name: "Dr. Robert Kim", role: "CEO", image: "👨‍🚀", bio: "Former SpaceX propulsion lead", linkedin: "#" }
    ],
    updates: []
  },
  {
    id: "foodie-ai",
    name: "FoodieAI",
    tagline: "AI-powered personal chef in your pocket",
    logo: "🍳",
    industry: "FoodTech",
    stage: "Seed",
    fundingGoal: 250000,
    amountRaised: 187500,
    investorCount: 156,
    minInvestment: 100,
    daysRemaining: 28,
    featured: false,
    location: "Chicago, IL",
    description: "FoodieAI creates personalized recipes based on dietary preferences, available ingredients, and nutritional goals.",
    problem: "People struggle to eat healthy due to lack of time, inspiration, and personalized guidance.",
    solution: "Our AI generates custom recipes and meal plans, integrating with grocery delivery for seamless cooking.",
    traction: ["1M+ app downloads", "4.8 star rating", "50K daily active users"],
    team: [
      { name: "Lisa Chang", role: "CEO", image: "👩‍🍳", bio: "Former Head of Product at Blue Apron", linkedin: "#" }
    ],
    updates: []
  },
  {
    id: "homesecure-tech",
    name: "HomeSecure",
    tagline: "AI-powered home security that learns",
    logo: "🏠",
    industry: "PropTech",
    stage: "Series A",
    fundingGoal: 600000,
    amountRaised: 420000,
    investorCount: 98,
    minInvestment: 500,
    daysRemaining: 14,
    featured: false,
    location: "Seattle, WA",
    description: "Smart security system that distinguishes between normal activity and real threats, reducing false alarms by 95%.",
    problem: "Traditional security systems have high false alarm rates, leading to desensitization and ignored alerts.",
    solution: "Our AI learns household patterns and only alerts for genuine anomalies, with local processing for privacy.",
    traction: ["50K homes protected", "95% false alarm reduction", "$3.5M ARR", "NPS score of 78"],
    team: [
      { name: "Michael Torres", role: "CEO", image: "👨‍💼", bio: "Ex-Ring VP of Engineering", linkedin: "#" }
    ],
    updates: []
  },
  {
    id: "quantum-secure",
    name: "QuantumSecure",
    tagline: "Post-quantum encryption for enterprise",
    logo: "🔐",
    industry: "CyberSecurity",
    stage: "Seed",
    fundingGoal: 500000,
    amountRaised: 325000,
    investorCount: 74,
    minInvestment: 1000,
    daysRemaining: 42,
    featured: false,
    location: "Washington, DC",
    description: "Future-proof encryption solutions that protect against both classical and quantum computing attacks.",
    problem: "Current encryption will be broken by quantum computers, threatening all encrypted data.",
    solution: "Our quantum-resistant algorithms provide security that will remain unbreakable in the quantum era.",
    traction: ["DoD pilot program", "3 Fortune 500 customers", "NIST algorithm finalist"],
    team: [
      { name: "Dr. Anna Kowalski", role: "CEO", image: "👩‍🔬", bio: "Former NSA cryptographer", linkedin: "#" }
    ],
    updates: []
  },
  {
    id: "green-energy-labs",
    name: "GreenEnergy Labs",
    tagline: "Next-gen solid-state batteries",
    logo: "🔋",
    industry: "CleanTech",
    stage: "Series A",
    fundingGoal: 1500000,
    amountRaised: 975000,
    investorCount: 234,
    minInvestment: 1000,
    daysRemaining: 25,
    featured: true,
    location: "Detroit, MI",
    description: "Revolutionary solid-state battery technology offering 2x energy density with faster charging and improved safety.",
    problem: "Current lithium-ion batteries limit EV range, charge slowly, and pose fire risks.",
    solution: "Our solid-state batteries charge in 10 minutes, last twice as long, and eliminate fire hazards.",
    traction: ["Working prototype", "Partnership with major OEM", "$50M LOI from automotive manufacturer"],
    team: [
      { name: "Dr. Wei Zhang", role: "CEO", image: "👨‍🔬", bio: "Stanford battery research pioneer", linkedin: "#" }
    ],
    updates: []
  }
];

export const industries = [
  "All Industries",
  "CleanTech",
  "HealthTech",
  "EdTech",
  "AgriTech",
  "FinTech",
  "SpaceTech",
  "FoodTech",
  "PropTech",
  "CyberSecurity"
];

export const stages = ["All Stages", "Seed", "Series A", "Series B"];

export const formatCurrency = (amount: number): string => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(amount);
};

export const formatNumber = (num: number): string => {
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1) + 'M';
  }
  if (num >= 1000) {
    return (num / 1000).toFixed(0) + 'K';
  }
  return num.toString();
};
