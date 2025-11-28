// GlobalNext Blockchain Knowledge Sharing Session
// Building from trust in central authorities to decentralized systems

export const slides = [
  // Chapter 1: The Trust Problem with Central Authorities
  {
    id: "trust-in-banks",
    type: "ProblemSlide",
    chapter: 1,
    title: "Trust in Banks",
    subtitle: "The Trade-Off We All Make",
    bullets: [
      "We create bank accounts and trust banks to manage our funds",
      "In exchange, we give them control over our money",
      "We're vulnerable: banks can misuse funds, freeze accounts, or fail",
      "But when systems work, we trust they'll protect us when needed",
      "The same trust relationship exists with governments, registries, and institutions"
    ],
    visualHint: "trust-network",
    speakerNotes: "Let's start with something everyone understands - banks. When you open a bank account, you're making a trade-off: you trust the bank to manage your money, but you also make yourself vulnerable to them..."
  },
  {
    id: "trust-in-governments",
    type: "ProblemSlide",
    chapter: 1,
    title: "Trust in Governments",
    subtitle: "The Same Pattern",
    bullets: [
      "We register our residency and citizenship with governments",
      "We trust they'll protect our rights and provide services",
      "We're vulnerable: they can misuse our data, restrict freedoms, or fail",
      "But when systems function, we trust they'll protect us",
      "Central authority = Trust + Vulnerability (the fundamental trade-off)"
    ],
    visualHint: "trust-network",
    speakerNotes: "The same pattern exists with governments. We register our details, trust them to perform functions, but open ourselves to vulnerability. This is the fundamental problem with central authorities..."
  },
  {
    id: "the-central-authority-problem",
    type: "ConceptSlide",
    chapter: 1,
    title: "The Central Authority Problem",
    subtitle: "Why We Need a Better System",
    bullets: [
      "Central systems: One institution controls everything",
      "We trust them to function correctly and protect us",
      "But we're vulnerable to manipulation, misuse, or failure",
      "What if there was a system that worked without a central authority?",
      "What if the system was self-sufficient and self-governing?"
    ],
    visualHint: "traditional-vs-blockchain",
    speakerNotes: "So here's the question: What if we could have a system that works without needing to trust a central authority? What if the system could govern itself?"
  },

  // Chapter 2: Blockchain as Decentralized Solution
  {
    id: "blockchain-decentralized",
    type: "ConceptSlide",
    chapter: 2,
    title: "Blockchain: No Central Authority",
    subtitle: "A Self-Sufficient System",
    bullets: [
      "Blockchain is decentralized - no single institution controls it",
      "The system works by itself, without needing a bank or government",
      "No one can manipulate it because no one person controls it",
      "It's self-sufficient: the system governs itself",
      "Think: Instead of trusting a bank, you trust the system itself"
    ],
    visualHint: "traditional-vs-blockchain",
    speakerNotes: "This is where blockchain comes in. Blockchain is a system that doesn't have a central authority. It's decentralized - meaning it works by itself, without needing a bank, government, or any single institution to control it..."
  },
  {
    id: "two-core-concepts",
    type: "ConceptSlide",
    chapter: 2,
    title: "Two Core Concepts of Blockchain",
    subtitle: "How Self-Governance Works",
    bullets: [
      "1. Immutability: Information cannot be changed once recorded",
      "   → The system has all the information it needs to self-govern",
      "2. Autonomy/Agency: The system can act on its own",
      "   → The system has the ability to actually self-govern",
      "Together: Immutability + Autonomy = Self-Sufficient System"
    ],
    visualHint: "three-pillars",
    speakerNotes: "Blockchain achieves self-governance through two core concepts. First, immutability - the information can't be changed, so the system has all the data it needs. Second, autonomy - the system can act on its own. Together, these create a self-sufficient system..."
  },

  // Chapter 3: Bitcoin - The First Application
  {
    id: "bitcoin-digital-store-of-value",
    type: "ConceptSlide",
    chapter: 3,
    title: "Bitcoin: The First Blockchain Application",
    subtitle: "Digital Store of Value",
    bullets: [
      "Bitcoin needed only immutability: information that couldn't be changed",
      "That was enough to create a digital store of value",
      "No central bank needed - the system itself maintains the ledger",
      "People 'mine' Bitcoin to process transactions on the network",
      "Mining rewards incentivize people to participate and keep the network running"
    ],
    visualHint: "hash-demonstration",
    speakerNotes: "Bitcoin was the first major application of blockchain. It only needed immutability - information that couldn't be changed. That was enough to create a digital store of value without needing a central bank. When people 'mine' Bitcoin, they're processing transactions and being rewarded for keeping the network running..."
  },
  {
    id: "bitcoin-vs-blockchain",
    type: "BeforeAfterSlide",
    chapter: 3,
    title: "Bitcoin vs Blockchain",
    subtitle: "Understanding the Difference",
    bullets: [
      "Bitcoin: One application of blockchain (digital currency)",
      "Blockchain: The underlying technology (decentralized ledger)",
      "Bitcoin uses blockchain to store value without a central bank",
      "But blockchain can do much more than just store value",
      "Think: Bitcoin is like email, blockchain is like the internet"
    ],
    visualHint: "public-private-comparison",
    speakerNotes: "It's important to understand: Bitcoin is just one application of blockchain technology. Blockchain itself is the underlying system - it can do much more than just create digital currency..."
  },

  // Chapter 4: Ethereum and Smart Contracts
  {
    id: "ethereum-smart-contracts",
    type: "ConceptSlide",
    chapter: 4,
    title: "Ethereum: Adding Autonomy",
    subtitle: "Smart Contracts and Self-Executing Agents",
    bullets: [
      "Ethereum added the second component: autonomy/agency",
      "Smart Contracts: Automated agents that run on the network",
      "These agents are self-sufficient and fully automated",
      "Once deployed, they execute on their own - no human intervention needed",
      "Everything runs automatically: the system truly governs itself"
    ],
    visualHint: "step-by-step-process",
    speakerNotes: "Ethereum took blockchain further by adding autonomy. It introduced 'smart contracts' - which are really automated agents that run on the network. Once you deploy one of these agents, it runs completely on its own. No human intervention needed - the system truly governs itself..."
  },
  {
    id: "smart-contracts-automation",
    type: "ProcessSlide",
    chapter: 4,
    title: "How Smart Contracts Work",
    subtitle: "Fully Automated Systems",
    bullets: [
      "Step 1: Deploy a smart contract (agent) to the network",
      "Step 2: The agent runs automatically, 24/7, without human control",
      "Step 3: It executes functions based on predefined rules",
      "Step 4: It interacts with other agents and the network autonomously",
      "Step 5: The system is fully self-sufficient - it governs itself"
    ],
    visualHint: "step-by-step-process",
    speakerNotes: "Here's how it works: You deploy a smart contract - think of it as an automated agent. Once it's on the network, it runs completely on its own. It executes functions, interacts with other agents, and the whole system becomes self-governing..."
  },
  {
    id: "ecosystem-of-agents",
    type: "ConceptSlide",
    chapter: 4,
    title: "An Ecosystem of Automated Agents",
    subtitle: "Building on Blockchain",
    bullets: [
      "Different systems, services, and functions are built from smart contracts",
      "Each agent is fully automated and self-sufficient",
      "Agents can interact with each other autonomously",
      "The entire network becomes a self-governing ecosystem",
      "No central authority needed - the system runs itself"
    ],
    visualHint: "globalnext-ecosystem",
    speakerNotes: "What's amazing is that you can build entire ecosystems from these automated agents. Different services, functions, systems - all running autonomously on the network. The whole thing becomes self-governing..."
  },

  // Chapter 5: Applications and Use Cases
  {
    id: "blockchain-applications",
    type: "ConceptSlide",
    chapter: 5,
    title: "What Can Blockchain Do?",
    subtitle: "Beyond Digital Currency",
    bullets: [
      "Supply Chain: Track products from origin to consumer automatically",
      "Identity: Self-sovereign identity without central registries",
      "Finance: Automated payments, loans, and financial services",
      "Voting: Transparent, tamper-proof voting systems",
      "Contracts: Self-executing agreements without intermediaries"
    ],
    visualHint: "industry-evolution",
    speakerNotes: "So what can blockchain actually do? The applications are endless - supply chains, identity systems, finance, voting, contracts. All running automatically, without central authorities..."
  },
  {
    id: "why-blockchain-matters",
    type: "TransformationSlide",
    chapter: 5,
    title: "Why Blockchain Matters",
    subtitle: "The Fundamental Shift",
    bullets: [
      "From trusting institutions → Trusting the system itself",
      "From central control → Decentralized self-governance",
      "From manual processes → Fully automated execution",
      "From vulnerability to manipulation → Immutable, transparent records",
      "From intermediaries → Direct, peer-to-peer interactions"
    ],
    visualHint: "industry-evolution",
    speakerNotes: "This is the fundamental shift: we're moving from trusting institutions to trusting the system itself. From central control to decentralized self-governance. This changes everything..."
  },

  // Chapter 6: GlobalChain - Our Application
  {
    id: "globalchain-introduction",
    type: "TitleSlide",
    chapter: 6,
    title: "GlobalChain",
    subtitle: "How GlobalNext Uses Blockchain",
    bullets: [
      "We use blockchain for supply chain traceability",
      "AgriTrace: Food & Agriculture tracking",
      "LuxTrace: Luxury goods authentication",
      "PharmaTrace: Pharmaceutical compliance",
      "All built on the same principles: immutability + automation"
    ],
    visualHint: "globalnext-ecosystem",
    speakerNotes: "Now let's talk about how GlobalNext uses blockchain. We call our solution GlobalChain, and it applies these same principles to supply chain traceability..."
  },
  {
    id: "globalchain-how-it-works",
    type: "JourneySlide",
    chapter: 6,
    title: "How GlobalChain Works",
    subtitle: "Self-Governing Supply Chain Tracking",
    bullets: [
      "Each product gets a digital identity on the blockchain (immutable)",
      "Smart contracts automatically record every milestone in the journey",
      "IoT sensors feed data directly to the blockchain (automated)",
      "QR codes let anyone verify the complete history instantly",
      "The system runs itself - no central authority controls the records"
    ],
    visualHint: "farm-to-table-journey",
    speakerNotes: "Here's how GlobalChain works: Products get digital identities on the blockchain. Smart contracts automatically record every step. IoT sensors feed data automatically. The whole system is self-governing - no one can manipulate the records..."
  },
  {
    id: "globalchain-supply-chain-detailed",
    type: "JourneySlide",
    chapter: 6,
    title: "GlobalChain: Complete Supply Chain Journey",
    subtitle: "Every Step Recorded, Verified, and Presented",
    bullets: [
      "Step 1: Origin - Farm/Factory records: GPS location, batch number, production date, quality certifications",
      "Step 2: Processing - Quality tests, certifications, temperature logs automatically recorded via IoT",
      "Step 3: Shipping - Container tracking, route data, temperature monitoring, arrival times on blockchain",
      "Step 4: Customs - Automated clearance with blockchain-verified documents, instant approval",
      "Step 5: Warehouse - Inventory location, storage conditions, FIFO tracking, all on blockchain",
      "Step 6: Retail - Product placement, stock levels, expiry dates automatically updated",
      "Step 7: Customer - QR code scan reveals complete journey: origin, quality, freshness, authenticity"
    ],
    visualHint: "complete-supply-chain-journey",
    speakerNotes: "Let me walk you through exactly what we record at each step, how we do it, what information is needed, and how clients see it. This is the detailed view of GlobalChain in action..."
  },
  {
    id: "globalchain-benefits",
    type: "BusinessSlide",
    chapter: 6,
    title: "Why GlobalChain Works",
    subtitle: "The Business Benefits",
    bullets: [
      "Trust: Records are immutable - no one can alter the history",
      "Transparency: Everyone can verify, but no one controls it",
      "Automation: Smart contracts execute processes automatically",
      "Efficiency: No intermediaries, no manual reconciliation",
      "Competitive Advantage: We offer what competitors can't - verifiable transparency"
    ],
    visualHint: "competitive-matrix",
    speakerNotes: "The benefits are clear: immutable trust, automated processes, no intermediaries. This gives us a competitive advantage that competitors simply can't match..."
  },

  // Chapter 7: The Future
  {
    id: "blockchain-future",
    type: "TransformationSlide",
    chapter: 7,
    title: "The Future of Decentralized Systems",
    subtitle: "Where We're Heading",
    bullets: [
      "More industries moving from central authorities to decentralized systems",
      "Smart contracts automating more business processes",
      "Self-governing systems becoming the norm, not the exception",
      "Reduced need for intermediaries and trusted third parties",
      "A world where systems govern themselves, not institutions"
    ],
    visualHint: "industry-evolution",
    speakerNotes: "This is the future: more industries moving to decentralized, self-governing systems. Less reliance on central authorities, more automation, more trust in the system itself..."
  },
  {
    id: "your-role-future",
    type: "TeamSlide",
    chapter: 7,
    title: "Your Role in This Future",
    bullets: [
      "Understand that blockchain = self-governing systems, not just Bitcoin",
      "Recognize the shift from trusting institutions to trusting systems",
      "See how GlobalChain applies these principles to supply chains",
      "Help customers understand the value of immutable, automated tracking",
      "Become ambassadors for decentralized, self-sufficient systems"
    ],
    visualHint: "team-collaboration",
    speakerNotes: "Your role is to understand this fundamental shift and help others see it. Blockchain isn't about Bitcoin - it's about self-governing systems that don't need central authorities..."
  },
  {
    id: "qa-discussion",
    type: "QASlide",
    chapter: 7,
    title: "Questions & Discussion",
    bullets: [
      "What questions do you have about decentralized vs centralized systems?",
      "How does the concept of self-governance apply to your work?",
      "What concerns do you have about trusting systems vs institutions?",
      "How can GlobalChain help solve challenges in your area?",
      "What misconceptions about blockchain did this clarify?"
    ],
    visualHint: "open-discussion",
    speakerNotes: "Let's discuss. I want to hear your thoughts, questions, and especially any concerns about this shift from central authorities to decentralized systems..."
  }
];

// Chapter definitions for navigation
export const chapters = [
  { id: 1, title: "Trust in Central Authorities", color: "#C57CA3" },
  { id: 2, title: "Blockchain: Decentralized Solution", color: "#6EC5C2" },
  { id: 3, title: "Bitcoin: First Application", color: "#9FF0FF" },
  { id: 4, title: "Ethereum & Smart Contracts", color: "#C57CA3" },
  { id: 5, title: "Applications", color: "#6EC5C2" },
  { id: 6, title: "GlobalChain", color: "#9FF0FF" },
  { id: 7, title: "The Future", color: "#C57CA3" }
];
