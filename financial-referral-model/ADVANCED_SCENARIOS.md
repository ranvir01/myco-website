# Advanced Scenarios: Alternative Payout Structures

**Analysis Date:** January 2026  
**Purpose:** Explore alternative structures for future consideration

---

## Executive Summary

This document explores advanced payout structures beyond the current approved model:
- **Tiered Partner Program:** Volume-based rate increases
- **Hybrid Models:** Mixed flat fee + percentage
- **Enterprise Tier:** Special handling for high-value clients
- **Consultant-Heavy:** When allocated cost is unusually high
- **Multi-Referral Chains:** Complex referral relationships

These scenarios are provided for **future consideration** and are NOT currently implemented.

---

## 1. Tiered Partner Program

### Concept

Reward high-performing partners with escalating rates based on cumulative referral volume.

### Tier Structure

| Tier | Cumulative Revenue | RO Client Rate (Yr 1-3) | RO Client Rate (Yr 4+) | Bonus |
|------|-------------------|------------------------|----------------------|-------|
| **Bronze** | $0-$15,000 | 10% | 3% | - |
| **Silver** | $15,001-$50,000 | 12% | 4% | - |
| **Gold** | $50,001-$150,000 | 14% | 5% | $500 |
| **Platinum** | $150,001+ | 15% | 6% | $1,000 + Retreat |

*Cumulative revenue = total TPC from all referred clients*

### How Tier Advancement Works

```
Partner refers Client A → $15,000 cumulative → Bronze tier
Partner refers Client B → $35,000 cumulative → Advances to Silver
Partner refers Client C → $60,000 cumulative → Advances to Gold

New tier applies to:
  ✅ All FUTURE referrals at new rate
  ❌ Existing referrals stay at original tier rate
```

### Financial Impact Analysis

**Scenario: Partner at each tier (5-year projection)**

| Tier | Clients | Avg TPC | Annual Revenue | 5-Year Partner Earnings |
|------|---------|---------|----------------|------------------------|
| Bronze | 1 | $1,500 | $3,000 | $1,080 |
| Silver | 2 | $1,500 | $6,000 | $2,376 |
| Gold | 4 | $1,500 | $12,000 | $5,208 + $500 bonus |
| Platinum | 8 | $1,500 | $24,000 | $11,520 + $1,000 bonus |

### MyCo Impact

| Tier | Partner % | MyCo Net % | Viable? |
|------|-----------|------------|---------|
| Bronze | 10%/3% | 13.9% | ✅ Yes |
| Silver | 12%/4% | 11.9% | ✅ Yes |
| Gold | 14%/5% | 9.9% | ✅ Yes |
| Platinum | 15%/6% | 8.9% | ⚠️ Marginal |

### Pros & Cons

| Pros | Cons |
|------|------|
| Incentivizes volume | Complexity in tracking |
| Rewards loyalty | Platinum tier thins margins |
| Competitive advantage | May create tier-gaming |
| Scalable motivation | Admin overhead |

### Implementation Checklist

- [ ] Define tier thresholds
- [ ] Build tier tracking system
- [ ] Create tier advancement notifications
- [ ] Design tier badges/recognition
- [ ] Legal review of tiered agreements

---

## 2. Hybrid Models

### Concept

Combine flat fees with percentage-based payouts for more predictable partner earnings.

### Model A: Signing Bonus + Percentage

| Component | Amount | Timing |
|-----------|--------|--------|
| **Signing Bonus** | $250 | On first project completion |
| **Ongoing Rate** | 8% (Yr 1-3) / 2% (Yr 4+) | Each project |

**5-Year Partner Earnings (standard assumptions):**
- Signing Bonus: $250
- Percentage: 3×($120×2) + 2×($30×2) = $840
- **Total: $1,090**

**Comparison to Current Structure:**
- Current: $1,080 (pure percentage)
- Hybrid A: $1,090 (+$10)
- Pro: Faster gratification (bonus upfront)
- Con: Lower ongoing rates feel smaller

---

### Model B: Minimum Guarantee + Percentage

| Component | Terms |
|-----------|-------|
| **Minimum Annual Guarantee** | $200/year per active client |
| **Percentage Rate** | 8% (Yr 1-3) / 2% (Yr 4+) |
| **Payout** | Greater of guarantee or percentage |

**Scenario Analysis:**

| TPC | Projects | % Payout | Guarantee | Actual Payout |
|-----|----------|----------|-----------|---------------|
| $500 | 2 | $80 | $200 | $200 (guarantee) |
| $1,500 | 2 | $240 | $200 | $240 (percentage) |
| $3,000 | 2 | $480 | $200 | $480 (percentage) |

**5-Year Partner Earnings with Guarantee:**
- Low TPC ($500): $1,000 (5×$200 guarantee)
- Standard TPC ($1,500): $1,080 (percentage exceeds guarantee)

**Comparison:**
- Pro: Protects partners in low-TPC scenarios
- Con: MyCo risk if TPC consistently low

---

### Model C: Per-Project Flat Fee

| Component | Amount |
|-----------|--------|
| **Flat Fee** | $100 per project |
| **No Percentage** | - |

**5-Year Partner Earnings:**
- 10 projects × $100 = $1,000

**Comparison:**
- Pro: Simple, predictable
- Con: No upside for high-TPC projects
- Con: No cliff (same rate forever)

---

### Model D: Hybrid Percentage + Cap

| Component | Terms |
|-----------|-------|
| **Percentage Rate** | 10% (Yr 1-3) / 3% (Yr 4+) |
| **Per-Project Cap** | $500 maximum |

**Impact on Enterprise Clients:**

| TPC | Uncapped Payout | Capped Payout | MyCo Savings |
|-----|-----------------|---------------|--------------|
| $1,500 | $150 | $150 | $0 |
| $3,000 | $300 | $300 | $0 |
| $5,000 | $500 | $500 | $0 |
| $10,000 | $1,000 | $500 | $500 |
| $20,000 | $2,000 | $500 | $1,500 |

**Comparison:**
- Pro: Protects MyCo on enterprise deals
- Con: May discourage enterprise referrals

---

### Hybrid Model Comparison

| Model | 5-Year Low TPC | 5-Year Standard | 5-Year High TPC | Complexity |
|-------|----------------|-----------------|-----------------|------------|
| **Current** | $360 | $1,080 | $3,600 | Low |
| **A: Bonus + %** | $450 | $1,090 | $2,990 | Medium |
| **B: Guarantee** | $1,000 | $1,080 | $3,600 | Medium |
| **C: Flat Fee** | $1,000 | $1,000 | $1,000 | Low |
| **D: Cap** | $360 | $1,080 | $1,750 | Low |

---

## 3. Enterprise Tier

### Concept

Special payout structure for clients with TPC > $10,000 per project.

### Enterprise Tier Definition

| Criteria | Threshold |
|----------|-----------|
| Single Project TPC | ≥$10,000 |
| OR Annual Client Revenue | ≥$50,000 |
| OR Employee Count | ≥500 |

### Enterprise Payout Structure

| Component | Standard Rate | Enterprise Rate |
|-----------|---------------|-----------------|
| RO Client (Yr 1-3) | 10% of TPC | 5% of TPC (min $500/project) |
| RO Client (Yr 4+) | 3% of TPC | 2% of TPC (min $200/project) |
| RO Consultant | 1.5% of AC | 1% of AC |

### Enterprise Example: $25,000 Project

**Standard Rates:**
| Component | Rate | Amount |
|-----------|------|--------|
| RO Client | 10% | $2,500 |
| RO Consultant | 1.5% of $18,750 | $281 |
| MyCo Net | ~13.9% | $3,469 |

**Enterprise Rates:**
| Component | Rate | Amount |
|-----------|------|--------|
| RO Client | 5% | $1,250 |
| RO Consultant | 1% of $18,750 | $188 |
| MyCo Net | ~18.9% | $4,812 |

**MyCo Savings:** $1,343 per project (+39%)

### Enterprise Partner Value Proposition

While percentage is lower, absolute dollars are higher:

| TPC | Standard % | Standard $ | Enterprise % | Enterprise $ |
|-----|------------|------------|--------------|--------------|
| $1,500 | 10% | $150 | N/A | N/A |
| $10,000 | 10% | $1,000 | 5% | $500 |
| $25,000 | 10% | $2,500 | 5% | $1,250 |
| $50,000 | 10% | $5,000 | 5% | $2,500 |

Partner still earns $500-$2,500+ per project—highly motivating.

### Enterprise Tier Pros & Cons

| Pros | Cons |
|------|------|
| Protects MyCo margins on large deals | Lower % may discourage some |
| Still attractive absolute dollars | Complexity in tier definition |
| Scales sustainably | May need legal review |
| Competitive with industry | Potential partner pushback |

---

## 4. Consultant-Heavy Scenarios

### Concept

When projects require unusually high consultant allocation (e.g., 90% of TPC to consultants).

### Standard vs. Consultant-Heavy

| Scenario | Consultant % | MyCo Gross | Available for RO |
|----------|--------------|------------|------------------|
| Standard | 75% | 25% | 11.1% |
| Heavy (80%) | 80% | 20% | 6.1% |
| Very Heavy (85%) | 85% | 15% | 1.1% |
| Extreme (90%) | 90% | 10% | -3.9% ❌ |

### When Consultant-Heavy Occurs

1. **Specialized Talent:** Rare skills command premium rates
2. **Multi-Consultant:** 4+ consultants on single project
3. **Extended Engagement:** Long-term projects with embedded teams
4. **Custom Negotiation:** Client negotiates higher consultant allocation

### Mitigation Strategies

#### Option A: Adjusted RO Rates

Reduce RO rates when consultant allocation exceeds threshold:

| Consultant % | RO Client Rate | RO Consultant Rate |
|--------------|----------------|-------------------|
| ≤75% | 10% / 3% | 1.5% |
| 76-80% | 8% / 2.4% | 1.2% |
| 81-85% | 6% / 1.8% | 0.9% |
| >85% | 4% / 1.2% | 0.6% |

#### Option B: Floor-Based RO

RO calculated from MyCo Gross, not TPC:

| Component | Calculation |
|-----------|-------------|
| RO Client (Yr 1-3) | 40% of MyCo Gross |
| RO Client (Yr 4+) | 12% of MyCo Gross |
| RO Consultant | 6% of MyCo Gross |

**Impact at 85% Consultant Rate ($1,500 TPC):**
- MyCo Gross: $225
- RO Client: $90 (vs. $150 standard)
- MyCo Net: $118 (vs. $208 standard)

#### Option C: Minimum MyCo Net Rule

Never reduce MyCo Net below 5% of TPC:

```
IF calculated MyCo Net < 5% of TPC:
    THEN reduce RO payouts proportionally
    UNTIL MyCo Net = 5%
```

### Recommendation

**Option A (Adjusted RO Rates)** is clearest for partners to understand while protecting MyCo margins.

---

## 5. Multi-Referral Chains

### Concept

Complex referral scenarios where multiple parties claim credit.

### Scenario 5A: Chain Referral

```
Person A → refers Person B → Person B refers Client C
```

**Question:** Does Person A get any credit for Client C?

**Recommended Policy:** 

| Referrer | Relationship | Payout |
|----------|--------------|--------|
| Person B | Direct (RO Client) | Full rate (10%/3%) |
| Person A | Indirect (Meta-RO) | 0% (not recognized) |

**Rationale:** 
- Simplicity over complexity
- Direct relationship drives value
- Tracking indirect referrals is impractical

---

### Scenario 5B: Dual-Role Referral

Same person refers BOTH the client AND a consultant on that client's project.

| Role | Rate | Per $1,500 Project |
|------|------|-------------------|
| RO Client | 10% of TPC | $150 |
| RO Consultant | 1.5% of $1,125 | $16.88 |
| **Total** | - | **$166.88** |

**Policy:** Both commissions are payable—roles are distinct.

---

### Scenario 5C: Competing Claims

Two people both claim to have referred the same client.

**Recommended Policy:**

1. **First to Register:** Whoever registered the referral first wins
2. **Documentation Required:** Must have proof of introduction
3. **Split Option:** If genuine shared introduction, offer 50/50 split
4. **Dispute Resolution:** MyCo makes final determination

**Implementation:**
- Referral registration system with timestamps
- 30-day claim window after first contact
- Written dispute process

---

### Scenario 5D: Client Becomes RO

A referred client later refers THEIR OWN contacts.

```
Partner A → refers Client B
Client B → becomes RO → refers Client C
```

| Relationship | RO Credit |
|--------------|-----------|
| Partner A → Client B | Partner A is RO |
| Client B → Client C | Client B is RO |
| Partner A → Client C | NO CONNECTION |

**Policy:** Each referral relationship is independent. Partner A does NOT benefit from Client B's referrals.

---

### Scenario 5E: Consultant Refers Client

A consultant (who was referred by Partner X) brings in a client.

```
Partner X → refers Consultant Y
Consultant Y → refers Client Z
```

| Entity | Role | Credit |
|--------|------|--------|
| Partner X | RO Consultant for Y | 1.5% of AC on Y's projects |
| Consultant Y | RO Client for Z | 10%/3% of TPC on Z's projects |

**Policy:** Consultant can be an RO Client—these are separate programs.

---

### Scenario 5F: Multi-Consultant Credits

Project with 3 consultants, each referred by different people.

| Consultant | Allocation | RO | RO Payout |
|------------|------------|-----|-----------|
| C1 | $500 | RO-A | $7.50 (1.5% of $500) |
| C2 | $400 | RO-B | $6.00 (1.5% of $400) |
| C3 | $225 | RO-C | $3.38 (1.5% of $225) |
| **Total** | $1,125 | - | **$16.88** |

**Policy:** Each RO Consultant is paid based on THEIR consultant's allocation only.

---

### Multi-Referral Policy Summary

| Scenario | Policy |
|----------|--------|
| Chain referrals | Only direct referrer gets credit |
| Dual-role referral | Both commissions payable |
| Competing claims | First registered wins |
| Client becomes RO | Independent relationship |
| Consultant refers client | Consultant can be RO Client |
| Multi-consultant | Each RO paid on their consultant |

---

## 6. Comparison Matrix

### All Advanced Scenarios vs. Current Structure

| Structure | Partner 5-Year | MyCo Net % | Complexity | Best For |
|-----------|----------------|------------|------------|----------|
| **Current (Approved)** | $1,080 | 13.9% | Low | Standard operations |
| Tiered Bronze | $1,080 | 13.9% | Medium | Volume incentive |
| Tiered Platinum | $1,620 | 8.9% | Medium | Top partners |
| Hybrid Guarantee | $1,080+ | 12-14% | Medium | Low-TPC protection |
| Hybrid Cap | $1,080 max | 15-20% | Low | Enterprise margin |
| Enterprise Tier | $500-2,500/proj | 18.9% | Medium | High-value clients |
| Consultant-Heavy | $540-1,080 | 5-14% | High | Specialty projects |

---

## 7. Implementation Roadmap

### Phase 1: Current Structure (Now)
- Deploy approved rates (75% / 10%-3% / 1.5%)
- Monitor for 6 months
- Collect baseline data

### Phase 2: Evaluate Enhancements (Month 7-12)
- Analyze actual TPC distribution
- Identify high-volume partners
- Assess enterprise client mix

### Phase 3: Consider Advanced Scenarios (Year 2)
- If high-volume partners emerge → Consider Tiered Program
- If enterprise clients dominate → Consider Enterprise Tier
- If low TPC prevalent → Consider Hybrid Guarantee

### Decision Criteria

| Trigger | Consider |
|---------|----------|
| Top 10% of partners drive >50% of referrals | Tiered Program |
| Average TPC >$5,000 | Enterprise Tier |
| Average TPC <$800 | Hybrid Guarantee |
| High churn (<50% Year 2 retention) | Signing Bonus Model |
| Multi-consultant projects common | Adjusted Consultant-Heavy rates |

---

## Conclusion

The **current approved structure** (75% / 10%-3% / 1.5%) is the right starting point. Advanced scenarios should be:

1. **Documented** (this file) for future reference
2. **Monitored** through regular data analysis
3. **Considered** only after 6-12 months of baseline data
4. **Implemented** incrementally with clear triggers

The complexity cost of advanced scenarios must be weighed against their benefits. Start simple, evolve with data.

---

*Advanced Scenarios Documented: January 2026*
*Review for Implementation: July 2026*

