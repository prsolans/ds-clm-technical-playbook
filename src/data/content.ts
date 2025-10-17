export interface ChecklistItem {
  label: string;
  detail?: string;
  checked?: boolean;
}

export interface PreMeetingPrep {
  mustKnow: {
    title: string;
    items: ChecklistItem[];
  };
  shouldKnow: {
    title: string;
    items: ChecklistItem[];
  };
  niceToKnow: {
    title: string;
    items: ChecklistItem[];
  };
  dayOfChecklist: {
    title: string;
    items: string[];
  };
}

export interface Slide {
  number: number;
  title: string;
  timing: string;
  keyMessage: string;
  talkTrack: string;
  checkIn?: string;
  warnings?: string;
}

export interface Objection {
  category: 'Security' | 'Availability' | 'Integration';
  question: string;
  answer: string;
  relatedSlides?: string[];
}

export interface ConversationTechnique {
  title: string;
  whenToUse?: string[];
  template?: string;
  examples: Array<{
    question?: string;
    response: string;
  }>;
  afterUsing?: string[];
}

export interface AzureVsLegacy {
  decisionTree: Array<{
    customerType: string;
    model: 'AZURE' | 'LEGACY';
    story: string;
  }>;
  azureStory: {
    locations: string;
    message: string;
    emphasis: string;
  };
  legacyStory: {
    locations: string;
    message: string;
    emphasis: string;
  };
}

export interface ApiDocLink {
  text: string;
  url: string;
  note?: string;
}

export interface Resources {
  security: {
    title: string;
    items: ApiDocLink[];
  };
  api: {
    title: string;
    items: ApiDocLink[];
  };
  integration: {
    title: string;
    items: ApiDocLink[];
  };
}

export const preMeetingPrep: PreMeetingPrep = {
  mustKnow: {
    title: "Must-Know (Non-Negotiable)",
    items: [
      {
        label: "Deployment Model",
        detail: "Azure (new customers) or Legacy (existing customers) - This is THE most important question to answer. It determines your entire data center story, which regions you'll reference, and how you position infrastructure. New customers or those without existing Docusign products → Azure. Existing eSignature customers → Legacy. Check with your AE or in Salesforce. If you don't know this, you'll contradict yourself in the meeting."
      },
      {
        label: "Audience Composition",
        detail: "Who's attending and what are their priorities? Security-heavy audience (CISO, InfoSec) → spend 60% of time on slides 5-7, dive deep on certifications and encryption. IT Ops audience → emphasize uptime, disaster recovery, monitoring. DevOps/Integration audience → focus on API architecture, webhooks, rate limits. Mixed audience → hit all three but watch for signals of what matters most. Ask your AE: 'Who's attending and what do they care about?'"
      },
      {
        label: "Industry & Compliance",
        detail: "Which compliance frameworks matter to them? Financial services typically need SOC 2 Type 2 and ISO 27001. Healthcare needs HIPAA BAA. Federal needs FedRAMP Moderate (Docusign is FedRAMP Moderate authorized). EU customers need GDPR commitments. Retail may need PCI DSS. Check the security questionnaire they submitted or ask your AE. This dictates which certifications you emphasize and which you have documentation ready for."
      },
      {
        label: "Data Residency Requirements",
        detail: "Where must their data live? This is a deal-breaker for many enterprises. US, EU, Fed Gov, or no requirement? If they're EU-based, they likely need EU data centers (Azure: Amsterdam/Dublin/London or Legacy: Amsterdam/London). If they're US Fed, they need FedGov regions. If they say 'data cannot leave [country]', you need to know our commitments and contract language. Check Salesforce notes or ask your AE directly. This determines which data center locations you highlight on slides 12-13."
      },
      {
        label: "Escalation Contacts",
        detail: "Know who to call when you need backup. Have phone numbers or Slack handles ready: SE backup (if you're on PTO or need a second opinion), Security SME (for deep encryption/key management questions you can't answer), Integration SME (for complex API/webhook scenarios beyond your knowledge). Write these down. You'll look terrible if you say 'I'll get you an answer' and then can't find the right person. Also: know the status page URL (trust.docusign.com) and where to find real-time uptime data."
      }
    ]
  },
  shouldKnow: {
    title: "Should-Know (Effectiveness Multipliers)",
    items: [
      {
        label: "Current State",
        detail: "What CLM system are they using today, if any? Manual process in Word/SharePoint? Competitor like Icertis, Agiloft, or Ironclad? Legacy on-prem system like Apttus or Conga? Understanding their current pain points lets you position CLM as the solution to specific problems they're already feeling. Ask: 'What's broken about your current process?' Their answer tells you which features to emphasize. No CLM at all? Focus on time savings and risk reduction. Competitor? Understand what they don't like about it."
      },
      {
        label: "Integration Targets",
        detail: "Which systems do they need CLM to connect to? Salesforce is most common (emphasize native integration, configuration vs. code). SAP for large enterprises (mention partner-built integrations). NetSuite, Workday, ServiceNow are also frequent. If they have a homegrown ERP or niche system, you'll need to discuss custom API integration approach and emphasize that discovery with PS/SI partners is required to scope timelines. Knowing this lets you speak specifically: 'Here's how we integrate with YOUR systems' vs. generic API talk. Check Salesforce opportunity notes or ask AE."
      },
      {
        label: "Competitive Context",
        detail: "Who else are they evaluating? This changes your positioning. Icertis → emphasize ease of use, speed to value, Docusign's existing trust. Ironclad → emphasize enterprise scale, security, compliance. Conga → emphasize modern platform, better integration, Microsoft partnership (if Azure). DocuSign eSignature customers considering others → emphasize unified platform story. If you know they're 'Docusign or nothing', you can focus on fit vs. competition. Ask your AE: 'Who are we up against?' This determines how you frame our strengths."
      },
      {
        label: "Previous Concerns",
        detail: "What objections or concerns came up in prior meetings? Did they ask about data residency and not get a clear answer? Did they raise API rate limits? Did they express skepticism about uptime? Read the Salesforce notes from previous calls. If the AE says 'They're concerned about integration complexity', you know to spend extra time on slides 16-18 and bring concrete examples. If someone was a skeptic in the last meeting, address their concern proactively in your opening. This prevents you from stepping on landmines they've already identified."
      },
      {
        label: "Security Questionnaire",
        detail: "Have they submitted a security questionnaire? If yes, review it before the call. Which questions did they ask? Deep questions about encryption key rotation? That's a signal they have sophisticated security requirements - bring our key management documentation. Questions about penetration testing? Have our SOC 2 report ready. Questions about incident response? Know our SLAs and escalation process. If they haven't submitted one yet, expect detailed security questions live - be ready to pivot to 'Let me get you our detailed security documentation' rather than guessing."
      }
    ]
  },
  niceToKnow: {
    title: "Nice-to-Know (Credibility Builders)",
    items: [
      {
        label: "Customer References",
        detail: "Have 2-3 relevant case studies ready. Same industry? Same deployment model? Similar integration complexity? Mentioning 'We did this same integration for [company in their industry]' builds instant credibility. Check with your AE for which references are referenceable and approved. If you don't have exact matches, find analogous ones: 'Similar to how we integrated with [company]'s Salesforce environment...' This shows you've done this before and reduces their perceived risk. Keep these in your back pocket for objections."
      },
      {
        label: "Tech Stack",
        detail: "Are they an Azure shop? AWS? GCP? If they're Microsoft-heavy (Office 365, Azure, Teams), emphasize the Azure deployment model and Microsoft partnership. If they're AWS-centric, emphasize cloud-native architecture and focus less on Microsoft. What dev languages do their engineers use? If they're a Java shop, mention Java SDKs. If they're Python, mention Python SDKs. This shows you understand their environment. Check their LinkedIn company page, job postings, or ask your AE. Small signals of understanding their tech stack build trust."
      },
      {
        label: "Stakeholder Intel",
        detail: "Who are the key stakeholders and what are their biases? Scan LinkedIn profiles for their backgrounds. Former developer → will ask detailed API questions, bring technical depth. Former lawyer → will care about compliance and audit trails. Long tenure at company → may be resistant to change, emphasize low-risk deployment. New to company → may be eager to prove themselves, emphasize quick wins. Any known skeptics from prior meetings? Address their concerns proactively. Any champions? Acknowledge their support and build on it. This isn't creepy - it's preparation."
      }
    ]
  },
  dayOfChecklist: {
    title: "Day-Of Checklist (1 Hour Before)",
    items: [
      "Know: Azure or Legacy",
      "Know: Attendee names/roles",
      "Know: Data residency requirements",
      "Have: Backup contacts handy",
      "Ready: Parking lot note-taking method"
    ]
  }
};

export const azureVsLegacy: AzureVsLegacy = {
  decisionTree: [
    {
      customerType: "New to Docusign",
      model: "AZURE",
      story: "Microsoft partnership, cloud-native, future roadmap"
    },
    {
      customerType: "Existing Docusign customer",
      model: "LEGACY",
      story: "Proven, battle-tested, carrier-grade"
    },
    {
      customerType: "Greenfield (no DS relationship)",
      model: "AZURE",
      story: "Latest features, modern platform"
    },
    {
      customerType: "Already using eSignature",
      model: "LEGACY",
      story: "Same infrastructure, migration path later"
    }
  ],
  azureStory: {
    locations: "Azure regions (US East/West/Central, EU Amsterdam/Dublin/London, Fed Gov)",
    message: "Microsoft infrastructure + Docusign expertise",
    emphasis: "Cloud-native, elastic scaling, future features"
  },
  legacyStory: {
    locations: "US (Chicago, Las Vegas), EU (Amsterdam, London), Fed (Ashburn, VA)",
    message: "Carrier-grade, proven at Fortune 500 scale",
    emphasis: "Battle-tested, known performance, migration path available"
  }
};

export const objectionHandling: Objection[] = [
  {
    category: 'Security',
    question: "Is this cloud-only? We have concerns about cloud security.",
    answer: "Yes, CLM is cloud-native, and I appreciate that you're thinking about security - that's exactly why we're spending time on these architecture slides. The question isn't cloud vs. on-premise anymore - it's 'how is the cloud environment secured?' Let me show you our security controls - SOC 2, ISO 27001, 24/7 monitoring, encryption everywhere. What specific cloud security concerns should I make sure to address?",
    relatedSlides: ["Security Architecture", "Encryption & Data Protection", "Certifications & Compliance"]
  },
  {
    category: 'Security',
    question: "What about data residency? Our data can't leave [region].",
    answer: "Understood - data sovereignty is critical. Here's how we handle it: We operate data centers in [US/Europe/Fed environments]. For your requirements, your data would be in [specific region], and we contractually commit that data doesn't replicate outside that region. We can include data residency requirements in the contract. Would you need specific language around that?",
    relatedSlides: ["Data Centers & Regions", "Data Residency Commitments"]
  },
  {
    category: 'Availability',
    question: "What's your actual uptime? 99.99% sounds great, but what's reality?",
    answer: "Fair question - anyone can claim uptime. Over the last [quarter/year], we've maintained [actual %] uptime. The few incidents we've had were brief. Our SLA is 99.99%, which is 52 minutes of downtime per year. We consistently beat that. We publish our uptime transparently at [status page URL]. What uptime are you seeing with your current system?",
    relatedSlides: ["Uptime & SLA Commitments"]
  },
  {
    category: 'Availability',
    question: "What happens during planned maintenance?",
    answer: "This is actually one of our differentiators: zero planned maintenance downtime. We don't have maintenance windows. We roll out updates with blue-green deployments - we spin up new infrastructure, cutover with no interruption, then deprecate the old. So the answer: nothing happens during planned maintenance, because from your perspective there is no planned maintenance. The system is always available. Does your current system have maintenance windows?",
    relatedSlides: ["Uptime & SLA Commitments"]
  },
  {
    category: 'Integration',
    question: "How long does integration really take?",
    answer: "That's a great question, and the honest answer is: it depends on your specific environment and requirements. Integration timelines vary significantly based on which systems you're connecting, your data complexity, internal processes, and whether you're using pre-built connectors or custom APIs. Rather than give you a generic timeline that might not reflect reality, here's what I'd recommend: let's do a proper discovery with our Professional Services team or one of our trusted System Integrator partners. They can assess your specific landscape, understand your requirements, and provide a realistic timeline and scope. What systems are you planning to integrate with? That'll help me connect you with the right resources.",
    relatedSlides: ["Integration Overview", "Pre-built Integrations", "Custom Integration Patterns"]
  },
  {
    category: 'Integration',
    question: "What if your API doesn't support something we need?",
    answer: "Good question - no API covers every edge case. First, our APIs are very comprehensive - we have SDKs, webhooks, bulk operations. Most customers find what they need. That said, if there's a gap: Workarounds - Often there's an alternative way to achieve the goal. Feature requests - We have a formal process for API enhancements. Custom development - In rare cases, we've worked with customers on custom endpoints for large deployments. What capability are you concerned we might not support?",
    relatedSlides: ["Pre-built Integrations", "Custom Integration Patterns"]
  },
  {
    category: 'Integration',
    question: "What are your API rate limits?",
    answer: "Great question - rate limits are designed to ensure system stability while supporting high-volume integrations. The CLM API has a limit of 6,250 calls per 15-minute interval per integration. For context, that's over 600,000 API calls per day. Most customers operate well below this threshold. If you're planning a high-volume integration - like a nightly bulk sync or real-time webhook processing - we can review your use case together and architect a solution that stays within limits. Are you planning any high-volume API operations?",
    relatedSlides: ["Custom Integration Patterns", "API Documentation"]
  }
];

export const conversationControl = {
  parkingLot: {
    title: "The Parking Lot",
    whenToUse: [
      "They ask a detailed question that would derail the flow",
      "You don't know the answer and need to follow up",
      "The question would be better answered with context from a later section"
    ],
    template: "Great question about [topic]. Let me capture that - I want to address it [when/why], so [benefit of waiting]. If I don't circle back, please remind me.",
    examples: [
      {
        question: "What's your API rate limit?",
        response: "Good question - let me capture that. I want to address it when we get to the API details in a few minutes, because I can show you how we handle rate limiting and give you the exact numbers in context."
      },
      {
        question: "Do you support multi-factor authentication?",
        response: "Absolutely - let me park that for one moment. I'm going to show you our security architecture in 2 minutes, and MFA is part of that story. Remind me if I don't hit it."
      }
    ]
  },
  pivot: {
    title: "The Pivot (When They Jump Ahead)",
    template: "That's exactly what I want to show you in [upcoming section]. Hold that thought for [X] minutes.",
    examples: [
      { response: "That's exactly what I want to show you in the integration section in about 10 minutes." },
      { response: "Perfect timing - that's the next slide." },
      { response: "I'm going to answer that, but the context matters. Give me 3 more minutes." }
    ]
  },
  exit: {
    title: "The Exit (When You Don't Know)",
    template: "That's a [specific/detailed] question about [topic]. I want to get you the right answer from [who], rather than speculate. Can I follow up with you by [when]?",
    examples: [
      {
        question: "What's your encryption key rotation policy for blob storage?",
        response: "That's a specific question about our key management protocols. Rather than give you incomplete information, let me get you our detailed security documentation and connect you with our security architect. Can I get that to you by tomorrow?"
      },
      {
        question: "What's the API latency at 99th percentile?",
        response: "That's a performance question I want to answer accurately. Let me get you our API performance metrics - we track latency at multiple percentiles. I'll have that for you today."
      }
    ],
    afterUsing: [
      "Write it down immediately (they're watching)",
      "Set a phone reminder for when you leave the meeting",
      "Follow up within the committed timeframe",
      "Over-deliver: 'You asked about X, here's X plus related info on Y'"
    ]
  }
};

export const openingScript = {
  slide1: {
    title: "Opening: Set the Stage",
    script: "Thanks for taking the time. I know you're evaluating [Docusign/our platform] from a technical perspective, and my job today is to give you confidence in three areas: how we secure your data, how we ensure the system is always available, and how you'll integrate with your existing systems.\n\nBefore I jump in - what are your top 2-3 concerns I should make sure to address?",
    whyThisWorks: [
      "Establishes you as a facilitator, not a presenter",
      "Gives you intelligence on what matters most",
      "Shows respect for their time",
      "Sets expectation of dialogue"
    ]
  },
  slide2: {
    title: "Platform Strategy Context",
    goal: "Briefly acknowledge the platform strategy, then move on. Don't dwell unless they ask.",
    talkTrack: "Quick context on our platform - Today, Docusign operates three separate platforms: eSignature, CLM, and IAM. We're consolidating everything onto Microsoft Azure.",
    azure: "For new CLM customers like you, you'll be deployed on Azure from day one - which means Microsoft's infrastructure plus Docusign's CLM expertise. I'll show you what that means for data centers and availability in a few minutes.",
    legacy: "For existing Docusign customers, CLM deploys on our current private cloud infrastructure - proven, carrier-grade architecture. Eventually there's a migration path to Azure, but you're starting on battle-tested infrastructure. I'll show you that environment in a few minutes.",
    warning: "Don't spend more than 90 seconds on this unless they ask questions."
  },
  slide3: {
    title: "Agenda & Check-In",
    script: "Here's what we're going to cover:\n- Security - How we encrypt everything, our certifications, and our architecture\n- Availability - Our uptime guarantee and disaster recovery\n- Integration - How you'll connect CLM to your existing systems\n\nI have less than 20 minutes of prepared content, but I'd rather this be a conversation. As we go, if something isn't relevant to your environment, tell me and we'll adjust.",
    checkIn: "Does this align with what you needed to see today, or should we prioritize differently?"
  }
};

export const readingTheRoom = {
  losingThem: [
    {
      signal: "Checking phones/email",
      meaning: "Not engaged; content isn't relevant",
      recovery: "I'm sensing this may not be the right level of detail. What would be more valuable to focus on?"
    },
    {
      signal: "Side conversations (if multiple attendees)",
      meaning: "They're discussing concerns you haven't addressed",
      recovery: "Pause: \"I see some discussion - what questions are coming up?\""
    },
    {
      signal: "\"Can we skip ahead?\"",
      meaning: "You're going too deep on something that doesn't matter to them",
      recovery: "Absolutely - where do you want to focus?"
    },
    {
      signal: "Minimal responses to check-in questions",
      meaning: "Passive or checked out",
      recovery: "Let me stop for a second - is this hitting your main concerns, or should we pivot?"
    },
    {
      signal: "Aggressive questions (\"Yeah, but...\")",
      meaning: "Defensive; they've had bad experiences or don't trust you",
      recovery: "That's a fair concern - sounds like you've been burned before. Let me address that directly..."
    }
  ],
  emergencyBrake: {
    useWhen: "You're 15 minutes in and it's clear you're on the wrong track.",
    script: "Let me pause for a second. I want to make sure I'm using your time well. Can you tell me:\n1. What's the business problem you're trying to solve with CLM?\n2. What are your biggest concerns - technical, operational, or otherwise?\n3. If we could only cover one thing in depth today, what should it be?\n\nI'd rather adjust now than power through content that doesn't matter to you.",
    whyThisWorks: [
      "Shows humility and respect",
      "Resets the conversation",
      "Gives you intelligence to course-correct",
      "Builds trust"
    ]
  }
};

export const closingTheMeeting = {
  checklist: [
    "Review parking lot items",
    "Confirm next steps",
    "Get commitment on timeline",
    "Ask for concerns you haven't addressed"
  ],
  script: {
    reviewParkingLot: "I captured a few questions we parked [list them]. Here's how I'll follow up:\n- [Question 1]: I'll get you [answer/resource] by [date]\n- [Question 2]: I'll connect you with [person] to discuss [topic]\n- [Question 3]: I'll send you [documentation/link]",
    checkIns: "From a **security** perspective, did I address your main concerns about [encryption/compliance/certifications]?\nFrom an **availability** perspective, are you comfortable with our uptime commitments and disaster recovery?\nFrom an **integration** perspective, do you feel clear on how you'd connect CLM to [their systems]?",
    surfaceHiddenConcerns: "What concerns do you have that I haven't addressed yet?\n\n[Wait - don't fill the silence]",
    nextSteps: "Here's what I'm going to do:\n1. Send you [follow-up items] by [date]\n2. Connect you with [solutions engineer/security architect] for [deep dive topic]\n3. Get you access to [developer docs/trial environment/security documentation]\n\nWhat do I need from you to keep this moving forward?",
    timelineCommitment: "What's your timeline for making a decision on [evaluation/security review/integration planning]?"
  }
};

export const resources: Resources = {
  security: {
    title: "Security Documentation & Compliance",
    items: [
      { text: "Docusign Trust Center", url: "https://www.docusign.com/trust" },
      { text: "Security Overview", url: "https://www.docusign.com/trust/security", note: "Security controls & practices" },
      { text: "CLM Security Details", url: "https://www.docusign.com/trust/security/clm" },
      { text: "Compliance & Certifications", url: "https://www.docusign.com/trust/compliance/certifications", note: "SOC 2, ISO 27001, PCI DSS, CSA STAR, APEC PRP" },
      { text: "Security & Trust Assurance Packet (STAP)", url: "https://www.docusign.com/trust/stap", note: "Audit reports, certifications, attestations" },
      { text: "Security Resources & White Papers", url: "https://www.docusign.com/trust/security/resources" },
      { text: "FedRAMP Authorization Information", url: "https://www.docusign.com/blog/are-docusign-products-authorized-by-fedramp", note: "eSignature & CLM are FedRAMP Moderate authorized" }
    ]
  },
  api: {
    title: "CLM API Documentation & Developer Resources",
    items: [
      { text: "Developer Portal", url: "https://developers.docusign.com" },
      { text: "Platform 101 - Getting Started Guide", url: "https://developers.docusign.com/platform/" },
      { text: "CLM API Reference Documentation", url: "https://developers.docusign.com/docs/clm-api/reference/" },
      { text: "CLM API Rules & Rate Limits (6,250 calls per 15-min interval)", url: "https://developers.docusign.com/docs/clm-api/clm101/rules-and-limits/" },
      { text: "Developer Tools Overview", url: "https://developers.docusign.com/tools/overview/" },
      { text: "SDKs", url: "https://developers.docusign.com/docs/clm-api/clm101/sdks/", note: "Java, C#, Node.js, Python, Ruby, PHP" },
      { text: "Authentication & Authorization Guide", url: "https://developers.docusign.com/docs/clm-api/clm101/auth/" },
      { text: "Webhooks & Event Notifications", url: "https://developers.docusign.com/docs/clm-api/how-to/webhooks/" },
      { text: "Code Examples & Quickstarts", url: "https://developers.docusign.com/docs/clm-api/quickstart/" }
    ]
  },
  integration: {
    title: "Integration Resources & Pre-Built Connectors",
    items: [
      { text: "CLM for Salesforce", url: "https://www.docusign.com/integrations/clm-for-salesforce", note: "Native integration for automated contract workflows" },
      { text: "CLM for Salesforce - Admin Guide", url: "https://support.docusign.com/en/guides/DocuSign-CLM-for-Salesforce" },
      { text: "CLM for Salesforce - User Guide", url: "https://support.docusign.com/en/guides/SpringCM-for-Salesforce-User-Guide" },
      { text: "ServiceNow Integration Guide", url: "https://www.docusign.com/blog/how-to-use-docusign-clm-servicenow", note: "Automate contract process in ServiceNow" },
      { text: "CLM API Overview", url: "https://developers.docusign.com/docs/clm-api/", note: "Integrate CLM workflow & document management into custom apps" },
      { text: "CLM API 101", url: "https://developers.docusign.com/docs/clm-api/clm101/", note: "Getting started with CLM API integration" },
      { text: "Partner Integration Overview", url: "https://developers.docusign.com/partner/partner-implementation-overview/", note: "Building integrations with Docusign" },
      { text: "Open & Extensible Integration Framework", url: "https://www.docusign.com/products/electronic-signature/learn/open-and-extensible", note: "Platform integration capabilities" }
    ]
  }
};
