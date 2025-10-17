# CLM Technical Enablement: Conversation Control Guide
## Security, Availability & Integration Presentation

**Deck:** CLM Platform & Architecture (October 2025)  
**Audience:** Customer Technical Resources (Security architects, IT ops, DevOps, Integration engineers)  
**Duration:** 30-45 minutes  
**Your Goal:** Establish technical credibility, address concerns proactively, control conversation flow

---

## Pre-Meeting Prep (10 Minutes)

**Must-Do Research:**
- [ ] **CRITICAL - #1 PRIORITY:** Determine if this is Azure (new customer) or Legacy (existing customer) deployment
  - **How to find out:** Check CRM, ask your AE, review opportunity notes
  - **Why it matters:** Determines your entire narrative for slides 2, 12-13 (data centers/availability)
  - **If you don't know this, STOP and find out before the meeting**
- [ ] Identify their industry (impacts compliance discussion - slide 7)
- [ ] Know their data residency requirements (impacts data center discussion - slides 12-13)
- [ ] List their likely integration targets (CRM, ERP, procurement systems)
- [ ] Check if they're migrating from another CLM (anticipate comparison questions)
- [ ] Review any security questionnaires they've submitted

**The Azure vs. Legacy Decision Tree:**

This is **NOT** something you determine during the meeting. You must know this going in.

| Question | Answer | Deployment Model |
|----------|--------|------------------|
| Is this a brand new Docusign customer? | Yes | **AZURE** |
| Is this an existing Docusign customer adding CLM? | Yes | **LEGACY** (most likely) |
| Are they already using eSignature or other DS products? | Yes | **LEGACY** (most likely) |
| Is this a greenfield deployment with no DS relationship? | Yes | **AZURE** |

**If You Still Can't Determine:**
- Ask your AE: "Will this customer deploy on Azure or our private cloud?"
- Check the opportunity notes for deployment model
- Look at customer profile: Any existing Docusign products = likely Legacy

**Critical:** If you show up to a technical deep dive without knowing Azure vs. Legacy, you're going to tell the wrong story. This is non-negotiable prep.

**Once You Know:**
- [ ] Review the correct data center story (Azure regions vs. Chicago/Vegas/Amsterdam/London)
- [ ] Prepare the right customer references (same deployment model if possible)
- [ ] Know which complexity/migration talking points you might need

**Mental Preparation:**
- You control roughly 60% of this conversation; they control 40%
- Your job is to guide, not lecture
- Parking tough questions is a strength, not a weakness
- Silence after questions = confidence, not uncertainty

---

## Opening: The First 5 Minutes (Slide 1-3)

### Your Opening Script Template

**Slide 1 (Title):**
"Thanks for taking the time. I know you're evaluating [Docusign/our platform] from a technical perspective, and my job today is to give you confidence in three areas: how we secure your data, how we ensure the system is always available, and how you'll integrate with your existing systems.

Before I jump in - what are your top 2-3 concerns I should make sure to address?"

**Why This Works:**
- Establishes you as a facilitator, not a presenter
- Gives you intelligence on what matters most
- Shows respect for their time
- Sets expectation of dialogue

**Slide 2 (Azure Strategy) - CONTEXT SETTING:**
✅ **Keep this brief.** You already know (from pre-meeting prep) whether this is Azure or Legacy. This slide provides context, but you're not qualifying here.

**Your Goal:** Briefly acknowledge the platform strategy, then move on. Don't dwell unless they ask.

**The Talk Track:**

"Quick context on our platform - Today, Docusign operates three separate platforms [point to left side]: eSignature, CLM, and IAM. We're consolidating everything onto Microsoft Azure [point to right side].

**[TAILOR BASED ON WHAT YOU KNOW]:**

**→ For NEW CUSTOMER (Azure deployment):**
"For new CLM customers like you, you'll be deployed on Azure from day one - which means Microsoft's infrastructure plus Docusign's CLM expertise. I'll show you what that means for data centers and availability in a few minutes."

**→ For EXISTING CUSTOMER (Legacy deployment):**
"For existing Docusign customers, CLM deploys on our current private cloud infrastructure - proven, carrier-grade architecture. Eventually there's a migration path to Azure, but you're starting on battle-tested infrastructure. I'll show you that environment in a few minutes."

**Then immediately:** "Let me show you how we approach security, availability, and integration regardless of platform..."

**⚠️ DON'T:** Spend more than 90 seconds on this slide unless they ask questions. You already know the deployment model - this is just setting context.

**Slide 3 (Overview):**
"Here's what we're going to cover [point to each section]:
- **Security** - How we encrypt everything, our certifications, and our architecture
- **Availability** - Our uptime guarantee and disaster recovery
- **Integration** - How you'll connect CLM to your existing systems

I have about 30-45 minutes of content, but I'd rather this be a conversation. As we go, if something isn't relevant to your environment, tell me and we'll adjust."

**Check-In Question:** "Does this align with what you needed to see today, or should we prioritize differently?"

---

## Section 1: Security (Slides 4-10)

### Entry Strategy (Slide 4)
Don't say anything on this transition slide. Let it sit for 2 seconds, then proceed.

### Slide 5: Customer Data Security
**Your Narration:**
"Let's start with how we protect your data. Three core principles:

1. **Everything is encrypted** - both at rest and in transit using AES-256
2. **Strict segregation** - The people who provision encryption keys can't apply them, and all actions are logged
3. **Complete audit trail** - Every action on a document is logged and available to you

The third point is particularly important for [their industry - healthcare/financial services/government] because..."

**Pause Point:** "Questions on the encryption approach before I show you the architecture?"

### Slide 6: Data Encryption at Rest
**Keep This Brief:**
"This slide breaks down how different data types are encrypted - documents, metadata, history. The key point: we use AES-256 across the board, with keys rotated every 5 years. Your security team can review these details later."

**Don't:** Read the table. They can see it.
**Do:** Hit the key takeaway and move on.

### Slide 7: Security Certifications
**This is a Power Slide - Slow Down Here:**

"Here's where we demonstrate our commitment to security. We maintain [point to each]:
- **ISO 27001:2022** - The gold standard for information security
- **SOC 1 and SOC 2 Type 2** - Audited financial controls
- **PCI DSS** - Credit card data security
- **CSA STAR** - Cloud security transparency
- **APEC PRP** - Asia-Pacific privacy framework

Which of these are table stakes for you? [Let them answer]

Great - we'll make sure you get the full reports for [certifications they mentioned]."

**Why This Works:** You're not just listing credentials; you're asking which ones matter to them, which gives you intelligence and shows you're listening.

### Slides 8-10: Architecture Diagrams
⚠️ **DANGER ZONE:** These slides can spiral into deep technical discussions that eat your time.

**Your Approach - The "Show of Force" Technique:**

**Slide 8 (Network Architecture):**
"I want to show you our network architecture - not because you need to memorize it, but so your security team can review it later. The key things to see:

[Point to diagram] We have multiple layers of security - edge routers, firewalls, separate front-end and back-end networks. Everything is encrypted in transit with TLS 1.2 or higher, and at rest with AES-256.

The main takeaway: defense in depth. No single point of failure from a security perspective."

**Critical Pause:** Wait 3 seconds. See if they engage.

**If They Don't Engage:** "Happy to come back to this if needed. Let me show you how data flows..."

**If They Do Engage with Questions:**
- **Surface-Level Question** ("What's TLS 1.2?"): Answer briefly, move on
- **Deep Technical Question** ("What's your certificate rotation policy?"): Use the ANCHOR technique (see Section 5)

**Slide 9-10 (Boundary & Data Flow):**
Apply same technique. These are reference materials, not teaching slides.

**Script:** "These diagrams show [authorization boundaries / data flow]. Again, reference materials for your team. The story here is [one key point maximum], and we can dive deeper if needed."

---

## Section 2: Availability (Slides 11-14)

### Entry Strategy (Slide 11)
Same as before - silent transition slide.

### Slide 12-13: Data Centers & Redundancy
**⚠️ CRITICAL:** Your narrative here depends entirely on what you learned on Slide 2.

**Note:** These slides appear to be duplicates in the deck. Use only once, but be prepared to tailor the message.

---

#### SCENARIO A: New Customer (Azure Deployment)

**Your Narration:**
"Let's talk about uptime and where your data lives. As I mentioned, new CLM deployments run on Microsoft Azure.

[Adjust the map/locations based on Azure regions - you may need to know these]

The Azure deployment gives you:
- **Azure's global infrastructure** - Microsoft's data centers with built-in redundancy
- **New Azure-native capabilities** - [List specific capabilities if you know them, e.g., Azure AD integration, Azure Security Center, etc.]
- **Elastic scaling** - Cloud-native performance that scales with your needs

The architectural principles remain the same:
- **Zero maintenance downtime** - We deploy updates without taking the system down
- **Zero data loss in disasters** - Real-time replication across availability zones
- **High performance at peak load** - Azure's infrastructure handles enterprise scale

**Key Question:** 'Where does your data need to reside? Any regulatory requirements around data sovereignty?'

**If They Ask About Azure Complexity:**
'You mentioned complexity - let me address that directly. Yes, Azure adds some architectural layers, but what it gives you is:
- Proven cloud infrastructure that scales automatically
- Built-in security and compliance capabilities  
- Future-proofing - all new features will be Azure-native

The complexity is on our side to manage, not yours. From your perspective, you get a CLM system that's highly available, secure, and scalable. The Azure foundation makes that possible.

What specific complexity concerns should I address?'"

**Then Continue:**
"**If They Say 'EU':** Your data would be in Azure's Europe regions - Amsterdam, Dublin, or London depending on performance and compliance needs - and never leaves the EU.

**If They Say 'US':** We deploy in Azure's US regions - East, West, Central - optimized for performance to your locations.

**If They Say 'US Federal':** We have a separate Azure Government environment specifically for FedRAMP requirements."

---

#### SCENARIO B: Existing Customer (Legacy/Private Cloud)

**Your Narration:**
"Let's talk about uptime. For existing customers or those deploying on our current platform, we operate Docusign-owned data centers in four locations [point to map]:

- **United States:** Chicago and Las Vegas
- **Europe:** Amsterdam and London  
- **US Federal:** Ashburn, Virginia - separate environment for FedRAMP customers

This is carrier-grade infrastructure that's been running Docusign CLM for years. The architecture principles:
- **Zero maintenance downtime** - We patch and upgrade without taking the system down
- **Zero data loss in a disaster** - Real-time replication between sites
- **High performance even at peak load** - Built for enterprise scale

Eventually, there's a migration path to Azure, but you'd be starting on proven, battle-tested infrastructure that's supported our largest enterprise customers.

**Key Question:** 'Where does your data need to reside? Any regulatory requirements around data sovereignty?'

**Then Continue:**

**If They Say 'EU':** 'Perfect - your data would be in Amsterdam or London, and never leaves the EU.'

**If They Say 'US':** 'You'd be deployed in Chicago or Las Vegas, optimized for performance.'

**If They Say 'US Federal':** 'Got it - we'd deploy you in our FedRAMP environment in Ashburn.'

**If They Ask About Azure Migration:**
'Great question. The Azure migration path is available when you're ready - we'd work with you on timing and transition. But for initial deployment, you're on infrastructure that's proven at enterprise scale. We can discuss migration timeline separately.'"

---

#### SCENARIO C: Unsure/Need to Qualify Further

**If You Didn't Get Clear Answer on Slide 2:**

"Let's talk about uptime and data centers. We operate in two deployment models - let me explain both quickly, then we can determine which applies to you.

[Briefly describe both: Legacy private cloud in Chicago/Vegas/Amsterdam/London, vs. Azure deployment in Azure regions]

Based on [their use case/timing/existing Docusign relationship], you'd likely be on [deployment model]. Does that align with your expectations, or should we explore the other model?"

### Slide 14: Carrier Grade Architecture
⚠️ **ISSUE:** Your slide has placeholders ("Days?", "Hours??") in the "Industry Average" column.

**Two Handling Options:**

**Option A (If Slide is Fixed):**
"Let me show you how we compare to typical SaaS providers [point to comparison table]. While most platforms have maintenance windows measured in hours and disaster recovery in days, we maintain carrier-grade standards:
- Zero planned downtime
- 24-hour recovery time
- Maximum 1 hour of data loss in a catastrophic scenario

This isn't standard for SaaS - this is telecom-grade reliability."

**Option B (If Slide Still Has Placeholders):**
Skip the comparison column entirely:

"Our availability standards are what we call 'carrier grade' - borrowed from telecommunications infrastructure. Here's what that means for you:
- **Zero planned maintenance downtime** - we never take the system down for upgrades
- **24-hour recovery time objective** in a disaster scenario
- **1-hour recovery point objective** - maximum data loss in catastrophic failure

Your business doesn't stop for maintenance windows."

**Check-In:** "How does this compare to your current environment or requirements?"

---

## Section 3: Integration (Slides 15-18)

### Entry Strategy (Slide 15)
Silent transition.

### Slide 16: Integration Methods
**This is a Critical Slide - Slow Down:**

"Integration is usually where the rubber meets the road for technical teams. Let me show you how this works."

"We support three integration models [point to each card]:

**1. Docusign-Built Integrations**  
We build and maintain these. Examples: Salesforce, Google Workspace. These are production-ready, just configure and go. Typical timeline: days.

**2. Partner-Built Integrations**  
We collaborate with technology partners. Examples: ServiceNow, SAP. These are certified and supported. Timeline: depends on the partner, usually 1-2 weeks.

**3. Custom Integrations via API**  
You or your SI partner build it using our APIs. Most flexible option. Timeline: varies by complexity, typically 2-8 weeks depending on scope.

Which scenario sounds most like your environment?"

**Why This Question Matters:**
- Gives you intelligence on their integration maturity
- Helps you prioritize the next slides
- Shows you're tailoring to their needs

**Based on Their Answer:**

| If They Say... | Your Response |
|----------------|---------------|
| "We use Salesforce" | "Perfect - that's a Docusign-built integration. Let me show you the API architecture, then we can talk about Salesforce specifics." |
| "We use SAP" | "Great - that's our partner ecosystem. We work with SAP directly on that connector. Let me show you how the APIs work underneath..." |
| "We have custom systems" | "Got it - you'll be using our APIs. Let me spend more time on slide 18 then, because that's going to be most relevant..." |

### Slide 17: Integration Architecture
**Moderate Technical Depth Required:**

"This diagram shows how you'd integrate with CLM [point to diagram]. Let me walk through a typical flow:

**Upstream (left side):**  
Your business application sends data into CLM via our REST APIs. We support multiple authentication methods [point to JWT, OAuth, etc.] - you choose what fits your security model.

**Core Services (center):**  
Once data is in, you can trigger any CLM capability - generate documents, start workflows, collect data, send for eSignature, store in our repository.

**Downstream (right side):**  
When something happens in CLM - like a contract is signed - we send a webhook back to your system to trigger your business processes.

The key point: bidirectional integration. Your systems push to us, we push back to you. Real-time, event-driven."

**Check-In:** "Does this integration pattern match how you're thinking about connecting CLM to [their systems]?"

### Slide 18: API Support Details
**This is Your Credibility Slide:**

"Let me give you confidence in our API infrastructure. Three key points [point to each card]:

**Scalable:**  
- 60% of our transactions happen via API - this isn't an afterthought
- Millions of daily API calls, far below our deployed capacity
- We monitor telemetry daily for capacity planning

Translation: you won't outgrow our APIs.

**Performant:**  
- Bulk operation endpoints - don't call us 1,000 times, call us once with 1,000 operations
- Webhooks for real-time updates - we push to you, you don't have to poll
- API dashboard - monitor the health of your integrations

Translation: your integrations will be fast and reliable.

**Well Documented:**  
- Free developer accounts - your team can start building today
- SDKs for every major language [point to list]
- Comprehensive documentation and code samples
- Active developer community

Translation: your developers won't be blocked."

**The Close on This Section:**
"Based on what you've told me about [their environment], which integration approach do you think fits best?"

---

## Section 4: Conversation Control Techniques

### The Parking Lot (Use Throughout)

**When to Use:**
- They ask a detailed question that would derail the flow
- You don't know the answer and need to follow up
- The question would be better answered with context from later slides

**Template:**
"Great question about [topic]. Let me capture that - I want to address it [when/why], so [benefit of waiting]. If I don't circle back, please remind me."

**Examples:**

| Their Question | Your Parking Lot Response |
|----------------|---------------------------|
| "What's your API rate limit?" | "Good question - let me capture that. I want to address it when we get to the API details on slide 18, because I can show you how we handle rate limiting and give you the exact numbers in context." |
| "Do you support multi-factor authentication?" | "Absolutely - let me park that for one moment. I'm going to show you our security architecture in 2 minutes, and MFA is part of that story. Remind me if I don't hit it." |
| "How long does SAP integration take?" | "Let me capture that. I want to show you the integration framework first so you understand the options, then we can talk timelines for SAP specifically." |

### The Pivot (When They Jump Ahead)

**Template:**
"That's exactly what I want to show you in [upcoming section]. Hold that thought for [X] minutes."

**Examples:**
- "That's exactly what I want to show you in the integration section in about 10 minutes."
- "Perfect timing - that's the next slide."
- "I'm going to answer that, but the context matters. Give me 3 more minutes."

### The Exit (When You Don't Know)

**Never Fake It. Never.**

**Template:**
"That's a [specific/detailed] question about [topic]. I want to get you the right answer from [who], rather than speculate. Can I follow up with you by [when]?"

**Examples:**

| Their Question | Your Exit Response |
|----------------|---------------------|
| "What's your encryption key rotation policy for blob storage?" | "That's a specific question about our key management protocols. Rather than give you incomplete information, let me get you our detailed security documentation and connect you with our security architect. Can I get that to you by tomorrow?" |
| "Do you support SCIM for user provisioning?" | "Great question on identity management. I know we support multiple SSO and provisioning methods, but I want to confirm the specific protocols we support for SCIM. Let me get you the exact technical specs from our IAM team." |
| "What's the API latency at 99th percentile?" | "That's a performance question I want to answer accurately. Let me get you our API performance metrics - we track latency at multiple percentiles. I'll have that for you today." |

**After Using Exit:**
1. Write it down immediately (they're watching)
2. Set a phone reminder for when you leave the meeting
3. Follow up within the committed timeframe
4. Over-deliver: "You asked about X, here's X plus related info on Y"

---

## Section 5: Tough Question Scenarios & Responses

### Security Questions

**Q: "Is this cloud-only? We have concerns about cloud security."**

**A (Acknowledge + Redirect):**  
"Yes, CLM is cloud-native, and I appreciate that you're thinking about security - that's exactly why we're spending time on these architecture slides. 

The question isn't cloud vs. on-premise anymore - it's 'how is the cloud environment secured?' Let me show you [go to slide 5-7]. What you'll see is we've implemented security controls that most on-premise environments can't match - SOC 2, ISO 27001, 24/7 monitoring, encryption everywhere.

What specific cloud security concerns should I make sure to address?"

**Q: "What about data residency? Our data can't leave [region]."**

**A (Direct Answer + Confidence):**  
"Understood - data sovereignty is critical for [their industry/region]. 

Here's how we handle it [go to slide 12]: We operate data centers in [US/Europe/Fed environments]. For your requirements, your data would be in [Amsterdam/London for EU, or specify US location], and we contractually commit that data doesn't replicate outside that region.

We can include data residency requirements in the contract. Would you need specific language around that?"

**Q: "How do you handle data breaches?"**

**A (Honest + Process-Oriented):**  
"Good question. First, I want to be clear that we've never had a breach that resulted in customer data exposure. That's not luck - that's architecture [point to defense-in-depth slides].

That said, we have a formal incident response process. If we detect any security event:
1. Immediate containment and investigation
2. Customer notification within [timeframe - check your SLA]
3. Root cause analysis and remediation
4. Transparent post-mortem

Our security team can walk you through the full incident response playbook. Should I connect you with them?"

### Availability Questions

**Q: "What's your actual uptime? 99.99% sounds great, but what's reality?"**

**A (Transparency + Proof):**  
"Fair question - anyone can claim uptime. Let me give you real data.

[If you have a status page]: We publish our uptime transparently at [URL]. You can see historical performance there.

[If you have recent stats]: Over the last [quarter/year], we've maintained [actual %] uptime. The few incidents we've had were [brief description - e.g., brief API latency in US-East region, resolved in X minutes].

Our SLA is 99.99%, which is 52 minutes of downtime per year. We consistently beat that. What uptime are you seeing with [current system]?"

**Q: "What happens during planned maintenance?"**

**A (Strong, Direct):**  
"This is actually one of our differentiators [go to slide 14]: zero planned maintenance downtime.

We don't have maintenance windows. We roll out updates with blue-green deployments - we spin up new infrastructure, cutover with no interruption, then deprecate the old. 

So the answer to your question: nothing happens during planned maintenance, because from your perspective there is no planned maintenance. The system is always available.

Does your current system have maintenance windows? [Let them vent about their pain]"

**Q: "What if there's a disaster - fire, flood, cyberattack?"**

**A (Reassuring + Technical):**  
"Let me walk you through our disaster recovery [go to slide 12-13].

[**Tailor based on Azure vs. Legacy:**]

**If Azure deployment:**
We leverage Azure's availability zones and geo-redundancy. Your data is replicated across multiple Azure data centers in real-time. If an entire data center goes down, Azure's infrastructure handles failover automatically - usually in minutes.

**If Legacy deployment:**
We operate multiple data centers [point to locations]. Your data is replicated in real-time between sites. If an entire data center goes down - fire, flood, whatever - we failover to the other site automatically.

[**Continue for both:**]

Our recovery time objective is 24 hours to restore full operations, but the reality is failover happens in minutes for most scenarios. Our recovery point objective is 1 hour - meaning the maximum data you'd lose in a catastrophic event is 1 hour of transactions.

For context, most SaaS providers have RPO measured in days. We're at 1 hour.

What are your DR requirements or current DR capabilities?"

**Q: "Why Azure? Aren't you adding complexity by moving from your own data centers?"**

**A (Acknowledge + Reframe as Strength):**  
"That's a sophisticated question - you're right that Azure adds architectural layers. Let me address why we're making this move and what it means for you.

**The short answer:** Azure gives us capabilities we can't cost-effectively build ourselves - global scale, AI/ML infrastructure, security tooling, and continuous innovation.

**What this means for you:**
- **Better security:** Azure Security Center, Azure AD integration, threat intelligence across Microsoft's global network
- **Better performance:** Elastic scaling that adapts to your load automatically  
- **Future capabilities:** All new features - AI, advanced analytics, workflow automation - will be Azure-native
- **Less risk:** Microsoft invests billions in infrastructure. We invest in the CLM application layer.

**The complexity is our problem, not yours.** From your perspective, you get a highly available, secure CLM system. The difference is whether that's powered by Docusign-managed infrastructure [for legacy] or Azure's cloud [for new deployments].

Here's the question I'd ask back: Would you rather have a vendor that owns every piece of the stack, or one that partners with Microsoft and focuses on what they do best - contract lifecycle management?

[Pause - let them process]

What specific concerns do you have about the Azure architecture?"

**Q: "When will existing customers be forced to migrate to Azure?"**

**A (Customer-Centric + Transparent):**  
"There's no forced migration timeline. You'll stay on the current infrastructure until:
1. You're ready to migrate (business case, timing works for you)
2. We have feature parity or better on Azure
3. We've proven Azure performance at scale

This isn't a rip-and-replace situation. We'll work with you on a migration plan that minimizes disruption.

That said, if you're evaluating CLM today as a new deployment, you'd start on Azure and get access to new capabilities faster. But there's no penalty for being on the current platform - it's proven, carrier-grade infrastructure.

What's your timeline for this deployment? [Helps determine if Azure readiness matters]"

### Integration Questions

**Q: "How long does integration really take?"**

**A (Honest + Framework):**  
"It depends on your ecosystem and integration complexity. Let me give you a framework [go to slide 16]:

**Salesforce/Google Workspace (Docusign-built):** Days - it's configuration, not development.

**ServiceNow/SAP (Partner-built):** 1-2 weeks for initial setup, more if you have customizations.

**Custom APIs:** 2-8 weeks on average, depending on:
- Number of systems you're integrating
- Complexity of data mapping
- Your internal development process

What systems are you planning to integrate with?"

[They answer]

"Okay, based on that, you're probably looking at [estimate]. Let me connect you with our solutions engineer who's done [similar integration] implementations - they can give you a more precise timeline."

**Q: "What if your API doesn't support something we need?"**

**A (Flexibility + Problem-Solving):**  
"Good question - no API covers every edge case. 

First, our APIs are very comprehensive [go to slide 18] - we have SDKs, webhooks, bulk operations. Most customers find what they need.

That said, if there's a gap:
1. **Workarounds** - Often there's an alternative way to achieve the goal
2. **Feature requests** - We have a formal process for API enhancements
3. **Custom development** - In rare cases, we've worked with customers on custom endpoints for large deployments

What capability are you concerned we might not support?"

[They answer]

"Let me check on [their specific need] and get back to you by [timeframe]. I want to make sure you're not committing to something that won't work."

**Q: "Do you have rate limits on your API?"**

**A (Honest + Context):**  
"Yes, we have rate limits - every enterprise API does. But let me give you context on why ours are generous.

[Go to slide 18]: 60% of our transactions happen via API. We process millions of API calls daily, far below our deployed capacity. Our rate limits are designed to prevent abuse, not to constrain normal use.

Typical limits are [X requests per minute/hour - get this from your team]. If you have a use case that might exceed that - like a batch migration - we can work with you on temporary rate increases.

What's your expected API volume?"

**Q: "Can we see the API documentation before committing?"**

**A (Transparency + Confidence):**  
"Absolutely - I love that you want to see this upfront [go to slide 18].

We offer free developer accounts at developers.docusign.com. Your team can sign up today, get access to the full documentation, code samples, and even a sandbox environment to test integrations.

I can also get you a pre-sales technical consultant who can answer API-specific questions. Would that be helpful?"

---

## Section 6: Reading the Room & Recovery

### Signs You're Losing Them

| Signal | What It Means | Recovery Action |
|--------|---------------|-----------------|
| Checking phones/email | Not engaged; content isn't relevant | "I'm sensing this may not be the right level of detail. What would be more valuable to focus on?" |
| Side conversations (if multiple attendees) | They're discussing concerns you haven't addressed | Pause: "I see some discussion - what questions are coming up?" |
| "Can we skip ahead?" | You're going too deep on something that doesn't matter to them | "Absolutely - where do you want to focus?" |
| Minimal responses to check-in questions | Passive or checked out | Ask a direct question: "Let me stop for a second - is this hitting your main concerns, or should we pivot?" |
| Aggressive questions ("Yeah, but...") | Defensive; they've had bad experiences or don't trust you | Slow down, validate their concern: "That's a fair concern - sounds like you've been burned before. Let me address that directly..." |

### The Emergency Brake

**Use When:** You're 15 minutes in and it's clear you're on the wrong track.

**Script:**
"Let me pause for a second. I want to make sure I'm using your time well. Can you tell me:
1. What's the business problem you're trying to solve with CLM?
2. What are your biggest concerns - technical, operational, or otherwise?
3. If we could only cover one thing in depth today, what should it be?

I'd rather adjust now than power through content that doesn't matter to you."

**Why This Works:**
- Shows humility and respect
- Resets the conversation
- Gives you intelligence to course-correct
- Builds trust

---

## Section 7: Closing the Meeting

### The Last 5 Minutes

**Your Checklist:**
- [ ] Review parking lot items
- [ ] Confirm next steps
- [ ] Get commitment on timeline
- [ ] Ask for concerns you haven't addressed

**Closing Script:**

"Before we wrap up, let me make sure I've covered everything.

**[Review Parking Lot]**  
I captured a few questions we parked [list them]. Here's how I'll follow up:
- [Question 1]: I'll get you [answer/resource] by [date]
- [Question 2]: I'll connect you with [person] to discuss [topic]
- [Question 3]: I'll send you [documentation/link]

**[Security/Availability/Integration Check-Ins]**  
From a **security** perspective, did I address your main concerns about [encryption/compliance/certifications]?  
From an **availability** perspective, are you comfortable with our uptime commitments and disaster recovery?  
From an **integration** perspective, do you feel clear on how you'd connect CLM to [their systems]?

[Wait for their responses - this is critical feedback]

**[Surface Hidden Concerns]**  
What concerns do you have that I haven't addressed yet?

[Wait - don't fill the silence]

**[Next Steps]**  
Here's what I'm going to do:
1. Send you [follow-up items] by [date]
2. Connect you with [solutions engineer/security architect] for [deep dive topic]
3. Get you access to [developer docs/trial environment/security documentation]

What do I need from you to keep this moving forward?"

**[Timeline Commitment]**  
"What's your timeline for making a decision on [evaluation/security review/integration planning]?"

---

## Section 8: Post-Meeting Actions (Within 4 Hours)

### Send This Email

**Subject:** CLM Technical Deep Dive - Follow-Up & Next Steps

Hi [Name],

Thanks for the conversation today on Docusign CLM's security, availability, and integration capabilities.

**You asked about:**
1. [Parked question 1] - [Brief answer or "Attached is..." or "I'm connecting you with..."]
2. [Parked question 2] - [Answer/Resource]
3. [Parked question 3] - [Answer/Resource]

**Attached/Linked Resources:**
- CLM Architecture Deep Dive (slides from today's discussion)
- [Security certifications: SOC 2 report, ISO certificate, etc.]
- [API Documentation: developers.docusign.com]
- [Customer references in your industry - if available]

**Next Steps:**
- [ ] [Action item with owner and date]
- [ ] [Action item with owner and date]
- [ ] [Scheduled follow-up: Solutions Engineer deep dive on [topic] - [proposed date/time]]

**Timeline:**
You mentioned [their timeline]. I'll check back with you on [date] to see where you are and what else you need from us.

Questions in the meantime? Call me at [phone] or reply here.

[Your Name]

---

## Section 9: Specific Slide-by-Slide Talking Points

### Quick Reference Guide

| Slide | Max Time | Key Message | Check-In Question |
|-------|----------|-------------|-------------------|
| 1 (Title) | 30 sec | Set stage, ask for their priorities | "What are your top 2-3 concerns today?" |
| 2 (Azure) | 90 sec | **BRIEF CONTEXT** - You already know deployment model | None - keep moving unless they ask |
| 3 (Overview) | 2 min | Three-pillar framework | "Does this align with what you needed to see?" |
| 4 (Security Divider) | 0 sec | Silent transition | N/A |
| 5 (Encryption Overview) | 3 min | Encryption + segregation + audit trail | "Questions on encryption approach?" |
| 6 (Encryption Details) | 1 min | Brief technical details | None - keep moving |
| 7 (Certifications) | 4 min | Establish credibility with compliance | "Which of these are table stakes for you?" |
| 8 (Network Architecture) | 2 min | Show of force - defense in depth | "Happy to come back to this if needed." |
| 9-10 (Boundary/Data Flow) | 2 min total | Reference materials | "Questions on architecture?" |
| 11 (Availability Divider) | 0 sec | Silent transition | N/A |
| 12-13 (Data Centers) | 3 min | **TELL THE RIGHT STORY** - Azure OR Legacy (not both) | "Where does your data need to reside?" |
| 14 (Carrier Grade) | 3 min | Differentiation from typical SaaS | "How does this compare to your current environment?" |
| 15 (Integration Divider) | 0 sec | Silent transition | N/A |
| 16 (Integration Methods) | 5 min | Three approaches + effort/timeline | "Which scenario sounds most like your environment?" |
| 17 (Integration Architecture) | 4 min | Bidirectional, event-driven | "Does this pattern match your thinking?" |
| 18 (API Support) | 5 min | Scalability + performance + documentation | "Which integration approach fits best?" |

**Total Core Content:** ~36 minutes  
**Buffer for Questions:** 10-15 minutes  
**Total Meeting:** 46-51 minutes

---

## Section 10: What NOT to Say

### Phrases That Kill Credibility

❌ **"I think..."** → ✅ **"The way this works is..."**

❌ **"Trust me..."** → ✅ **"Let me show you..."**

❌ **"That's a great question..." [then don't answer it]** → ✅ **"Let me get you the right answer on that..."**

❌ **"Our competitor does it differently, but they're wrong."** → ✅ **"I can't speak to their architecture, but here's how we approach it..."**

❌ **"I'm not technical enough to answer that."** → ✅ **"That's a detailed implementation question - let me connect you with our solutions engineer who handles these daily."**

❌ **"We're working on that."** → ✅ **"That's not available today. Here's what we do offer, and here's how customers solve for [their need]."**

❌ **"That's on our roadmap."** → ✅ **"I want to focus on what you can implement today. Let me show you..."**

❌ **"Just fill out the security questionnaire."** → ✅ **"I know you have a security questionnaire - I want to proactively address the big items today so that process goes faster."**

### Questions That Reveal Weakness

❌ **"Does that make sense?"** (Implies they might not understand)  
✅ **"Questions on this approach?"** (Neutral, professional)

❌ **"Are you technical enough to follow this?"** (Condescending)  
✅ **"Should I go deeper on the technical details, or is this the right level?"** (Respectful)

❌ **"Do you want me to slow down?"** (Implies you're rushing)  
✅ **"I want to make sure I'm pacing this right - should I spend more time here, or keep moving?"** (Collaborative)

---

## Section 11: Azure vs. Legacy Quick Reference

### What Changes Between Deployment Models

| Topic | Azure Deployment (New Customers) | Legacy Deployment (Existing Customers) |
|-------|----------------------------------|----------------------------------------|
| **Data Centers** | Azure regions (varies by geography) | Chicago, Las Vegas, Amsterdam, London, Ashburn |
| **Infrastructure Partner** | Microsoft Azure | Docusign-managed private cloud |
| **Key Benefits** | Cloud-native features, Azure integration, elastic scaling, future roadmap | Proven, battle-tested, carrier-grade, known performance |
| **Positioning** | "Partnership with Microsoft" + "Access to latest capabilities" | "Proven at enterprise scale" + "Migration path available" |
| **Complexity Handling** | "Azure adds capability, we manage complexity" | "Simplified architecture, everything Docusign-managed" |
| **New Features** | Get Azure-native features first | Feature parity maintained, Azure features come later |
| **Risk Mitigation** | "Microsoft infrastructure + Docusign expertise" | "Years of production use, trusted by largest customers" |

### What Stays the Same (Both Models)

These commitments don't change regardless of deployment model:
- ✅ 99.99% uptime SLA
- ✅ Zero planned maintenance downtime
- ✅ AES-256 encryption at rest and in transit
- ✅ SOC 2, ISO 27001, and other certifications
- ✅ 1-hour RPO, 24-hour RTO
- ✅ Real-time replication and redundancy
- ✅ API capabilities and integration framework
- ✅ Security architecture and access controls

**Key Message for SCs:** The core capabilities and commitments are identical. The difference is the underlying infrastructure. Tailor your story based on what resonates with the customer, but the end result - a secure, highly available, integrated CLM system - is the same.

### When to Emphasize Azure (New Customer Scenarios)

**Emphasize Azure when customer values:**
- ✅ "Cloud-first" or "Cloud-native" strategy
- ✅ Existing Microsoft Azure investments or partnerships
- ✅ Access to latest features and innovation
- ✅ Elastic scaling and cloud agility
- ✅ Azure AD integration or Azure Security tooling
- ✅ Global expansion (Azure's geographic reach)

**De-emphasize when customer has:**
- ❌ Concerns about multi-cloud complexity
- ❌ Preference for "proven" over "cutting-edge"
- ❌ Risk-averse IT culture
- ❌ Bad experiences with cloud migrations

### When to Emphasize Legacy/Private Cloud (Existing Customer Scenarios)

**Emphasize Legacy when customer values:**
- ✅ Proven, battle-tested infrastructure
- ✅ Known performance characteristics
- ✅ Risk mitigation ("it's running Fortune 500 companies today")
- ✅ Stability over cutting-edge
- ✅ Existing Docusign relationship and trust

**De-emphasize when customer has:**
- ❌ "Cloud-first" mandates from leadership
- ❌ Concerns about legacy infrastructure or "tech debt"
- ❌ Need for latest Azure-specific capabilities
- ❌ Expectation of rapid innovation

### The Universal Pivot (When Unsure)

If you're unsure which angle resonates, use this approach:

"Let me show you both models quickly, because we support enterprise customers on both. The good news is the capabilities, security, and uptime commitments are identical. The question is whether you prefer:

**Option A:** Docusign-managed private cloud that's proven at scale with our largest customers, with a migration path to Azure when you're ready.

**Option B:** Azure-deployed from day one, giving you cloud-native capabilities and Microsoft partnership benefits.

Most customers in [their industry] choose [A or B] because [reason]. Does one of these resonate more with your environment?"

[Wait for their response - this gives you intelligence]

Based on their answer, you now know which story to emphasize for slides 12-14.

---

Different technical roles care about different things. Adapt your emphasis:

### If Audience is Security Architect

**Emphasize:**
- Slides 5-10 (spend 60% of time here)
- Certifications (slide 7) - offer to provide full reports
- Encryption details (slides 5-6) - they'll want depth
- Access controls and segregation of duties

**De-Emphasize:**
- Availability (they assume you've got this)
- Integration (unless security implications)

**Language:**
- Use precise technical terms (AES-256, TLS 1.2, PKI, etc.)
- Reference security frameworks (NIST, CIS, OWASP)
- Offer to connect with your security team for deep dive

**Key Question to Ask:**
"What security controls or capabilities would be dealbreakers if we didn't have them?"

### If Audience is IT Operations/Infrastructure

**Emphasize:**
- Slides 11-14 (spend 60% of time here)
- Uptime commitments and SLAs
- Disaster recovery and failover
- Monitoring and operational visibility

**De-Emphasize:**
- Deep security architecture (they trust security team to vet this)
- API details (unless they're doing integrations)

**Language:**
- Talk about RPO/RTO, monitoring, incident response
- Reference operational frameworks (ITIL, SRE principles)
- Discuss escalation paths and support models

**Key Question to Ask:**
"What does a typical outage or incident look like in your current environment, and what's your expectation for us?"

### If Audience is Integration/DevOps Engineer

**Emphasize:**
- Slides 15-18 (spend 60% of time here)
- API capabilities, SDKs, webhooks
- Developer experience and documentation
- Integration patterns and best practices

**De-Emphasize:**
- Security certifications (they know security team will check)
- Availability details (they assume uptime)

**Language:**
- Talk about REST APIs, OAuth, JSON, CI/CD pipelines
- Reference integration patterns (pub/sub, event-driven, etc.)
- Discuss versioning, rate limits, error handling

**Key Question to Ask:**
"What's your integration stack today, and what's worked well or poorly with other SaaS vendors?"

---

## Confidence Mantras (Read Before Each Meeting)

1. **You are the expert in the room on this platform.** They may know more about their environment, but you know more about Docusign CLM.

2. **Questions are good.** Every question is intelligence. Even tough questions mean they're engaged.

3. **You don't need to know everything.** You need to know enough to guide the conversation and smart enough to get them the right answer.

4. **Parking questions is a skill, not a weakness.** It shows you're organized and thoughtful.

5. **Silence is powerful.** After asking a question, wait. Don't fill the silence.

6. **They want you to succeed.** They're evaluating the platform, not trying to stump you. Help them get to "yes."

7. **You control the pace.** If it's moving too fast or too slow, adjust. Say: "Let me pause here..." or "I want to make sure we have time for..."

8. **The goal isn't perfection.** The goal is to build confidence and address concerns. You will do that.

---

## Emergency Contact Card

**Print This & Keep It With You:**

| Scenario | Who to Loop In | How to Phrase It |
|----------|----------------|------------------|
| Deep security architecture questions | [Security Architect Name/Email] | "Let me get you connected with our security architect who can walk through [specific topic] in detail." |
| Integration implementation questions | [Solutions Engineer Name/Email] | "I want to make sure you get accurate timeline and effort estimates. Let me connect you with our solutions engineer who's implemented [similar integration]." |
| Federal/FedRAMP/IL-specific questions | [Fed Team Contact] | "For federal deployments, I want to connect you with our team that specializes in FedRAMP and government requirements." |
| Contract/SLA negotiations | [Sales Engineer/Account Team] | "Let me loop in our account team to discuss SLA terms and contractual commitments." |
| Executive/procurement questions | [Account Executive] | "That's a great question for [AE Name] - I'll have them reach out to discuss pricing and procurement process." |

**Keep This Updated.** Know who your backup is before every meeting.

---

## Final Checklist: Are You Ready?

**24 Hours Before Meeting:**
- [ ] **CRITICAL:** Determined if customer is new (Azure) or existing (Legacy) - impacts entire availability narrative
- [ ] Researched their company, industry, tech stack
- [ ] Identified likely integration targets
- [ ] Reviewed any security questionnaires or RFP responses
- [ ] Confirmed who's attending from their side (roles/titles)
- [ ] Prepared 3 relevant customer examples (preferably on same deployment model)
- [ ] Know who your backup SMEs are (security, integration, solutions)
- [ ] Reviewed Azure vs. Legacy talking points (Section 11) if deployment model is unclear

**1 Hour Before Meeting:**
- [ ] Reviewed these talking points
- [ ] Know which data center story you're telling (Azure regions vs. Chicago/Vegas/Amsterdam/London)
- [ ] Opened slide deck and tested screen sharing
- [ ] Cleared calendar of conflicts
- [ ] Have note-taking method ready (parking lot tracking)
- [ ] Phone on silent, notifications off

**During Meeting:**
- [ ] Control the pace - you guide the conversation
- [ ] Use parking lot for tough questions
- [ ] Check in after each section
- [ ] Listen more than you talk (60/40 rule)
- [ ] Surface hidden concerns before closing

**Within 4 Hours After Meeting:**
- [ ] Send follow-up email with all action items
- [ ] Address all parking lot items or set clear timelines
- [ ] Loop in necessary SMEs
- [ ] Update CRM/opportunity notes
- [ ] Set reminder to follow up on [their timeline]

---

**Remember:** Your job is not to have all the answers. Your job is to guide them to confidence in Docusign CLM's security, availability, and integration capabilities. You've got this.

**Questions on using this guide?** Practice with your team before your first customer meeting.

**Good luck. You're ready.**