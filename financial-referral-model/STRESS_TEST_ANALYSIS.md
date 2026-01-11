# Stress Test Analysis: Extreme Scenarios & Edge Cases

**Analysis Date:** January 2026  
**Purpose:** Validate the approved payout structure under extreme conditions

---

## Executive Summary

This document stress tests the **Final Approved Payout Structure**:
- Consultant: 75% of TPC
- RO Client: 10% (Years 1-3) → 3% (Year 4+)
- RO Consultant: 1.5% of Allocated Cost
- Cliff: Year 4

**Key Finding:** The structure remains viable across most stress scenarios, with identified thresholds where adjustments may be needed.

---

## 1. Extreme Low TPC Scenarios

### Scenario 1A: Micro Projects ($200 TPC)

| Line Item | Rate | Amount |
|-----------|------|--------|
| Client Pays | 100% | $200 |
| Consultants | 75% | $150 |
| MyCo Gross | 25% | $50 |
| RO Client (Yr 1-3) | 10% | $20 |
| RO Consultant | 1.5% of $150 | $2.25 |
| MyCo Net | - | $27.75 |

**5-Year Partner Earnings (2 projects/year):**
- RO Client: 3×($20×2) + 2×($6×2) = $144

**Assessment:**
- ⚠️ Partner earnings ($144) far below $1,000 target
- ⚠️ MyCo Net ($27.75/project) may not cover operating costs
- 🔴 **NOT VIABLE** for primary business model

**Mitigation:** Minimum project size of $500, or flat fee supplement for micro projects

---

### Scenario 1B: Small Projects ($500 TPC)

| Line Item | Rate | Amount |
|-----------|------|--------|
| Client Pays | 100% | $500 |
| Consultants | 75% | $375 |
| MyCo Gross | 25% | $125 |
| RO Client (Yr 1-3) | 10% | $50 |
| RO Consultant | 1.5% of $375 | $5.63 |
| MyCo Net | - | $69.37 |

**5-Year Partner Earnings (2 projects/year):**
- RO Client: 3×($50×2) + 2×($15×2) = $360

**Assessment:**
- ⚠️ Partner earnings ($360) below $1,000 target
- ✅ MyCo Net ($69/project) covers basic operations
- 🟡 **MARGINAL** - viable but not attractive

**Mitigation:** Encourage upselling or require minimum 3 projects/year

---

### Scenario 1C: Low-End Projects ($800 TPC)

| Line Item | Rate | Amount |
|-----------|------|--------|
| Client Pays | 100% | $800 |
| Consultants | 75% | $600 |
| MyCo Gross | 25% | $200 |
| RO Client (Yr 1-3) | 10% | $80 |
| RO Consultant | 1.5% of $600 | $9.00 |
| MyCo Net | - | $111.00 |

**5-Year Partner Earnings (2 projects/year):**
- RO Client: 3×($80×2) + 2×($24×2) = $576

**Assessment:**
- ⚠️ Partner earnings ($576) below $1,000 target
- ✅ MyCo Net ($111/project) healthy
- 🟡 **ACCEPTABLE** with multiple referrals

---

### Low TPC Threshold Analysis

| TPC | 5-Year Partner Earnings | MyCo Net/Project | Viability |
|-----|------------------------|------------------|-----------|
| $200 | $144 | $28 | 🔴 Not viable |
| $500 | $360 | $69 | 🟡 Marginal |
| $800 | $576 | $111 | 🟡 Acceptable |
| $1,000 | $720 | $139 | 🟢 Good |
| $1,500 | $1,080 | $208 | 🟢 Target met |

**Break-even for $1,000 Partner Earnings:** TPC must be ≥$1,390 (with 2 projects/year)

---

## 2. Extreme High TPC Scenarios

### Scenario 2A: Enterprise Projects ($5,000 TPC)

| Line Item | Rate | Amount |
|-----------|------|--------|
| Client Pays | 100% | $5,000 |
| Consultants | 75% | $3,750 |
| MyCo Gross | 25% | $1,250 |
| RO Client (Yr 1-3) | 10% | $500 |
| RO Consultant | 1.5% of $3,750 | $56.25 |
| MyCo Net | - | $693.75 |

**5-Year Partner Earnings (2 projects/year):**
- RO Client: 3×($500×2) + 2×($150×2) = $3,600

**Assessment:**
- ✅ Partner earnings ($3,600) exceeds target by 260%
- ✅ MyCo Net ($694/project) very healthy
- 🟢 **EXCELLENT** - highly attractive

---

### Scenario 2B: Premium Enterprise ($10,000 TPC)

| Line Item | Rate | Amount |
|-----------|------|--------|
| Client Pays | 100% | $10,000 |
| Consultants | 75% | $7,500 |
| MyCo Gross | 25% | $2,500 |
| RO Client (Yr 1-3) | 10% | $1,000 |
| RO Consultant | 1.5% of $7,500 | $112.50 |
| MyCo Net | - | $1,387.50 |

**5-Year Partner Earnings (2 projects/year):**
- RO Client: 3×($1,000×2) + 2×($300×2) = $7,200

**Assessment:**
- ✅ Partner earnings ($7,200) exceeds ideal target ($5,000)
- ✅ MyCo Net ($1,388/project) excellent
- 🟢 **PREMIUM** - consider tiered rates for this level

**Consideration:** For $10K+ TPC, consider negotiating lower RO rates or caps

---

### High TPC Threshold Analysis

| TPC | 5-Year Partner Earnings | MyCo Net/Project | Notes |
|-----|------------------------|------------------|-------|
| $3,000 | $2,160 | $417 | Excellent |
| $5,000 | $3,600 | $694 | Outstanding |
| $7,500 | $5,400 | $1,041 | Meets ideal |
| $10,000 | $7,200 | $1,388 | Consider caps |
| $15,000 | $10,800 | $2,082 | Review needed |

**Recommendation:** For TPC > $10,000, consider capping RO Client at $1,000/project

---

## 3. Edge Cases

### Edge Case 3A: Single Project Client

Client uses MyCo for exactly 1 project, then churns.

| Year | Projects | RO Client Earnings | MyCo Revenue |
|------|----------|-------------------|--------------|
| 1 | 1 | $150 | $375 |
| 2-5 | 0 | $0 | $0 |
| **Total** | **1** | **$150** | **$375** |

**Assessment:**
- ⚠️ Partner earns only $150 total
- ⚠️ CAC may exceed partner payout
- 🟡 **ACCEPTABLE** - risk inherent in referral model

**Mitigation:** 
- Focus on client retention
- Emphasize repeat business in partner materials
- No structural change needed

---

### Edge Case 3B: Rapid Churn (Year 2 Exit)

Client uses MyCo for 1 year (2 projects), then churns.

| Year | Projects | RO Client Earnings | MyCo Revenue |
|------|----------|-------------------|--------------|
| 1 | 2 | $300 | $750 |
| 2-5 | 0 | $0 | $0 |
| **Total** | **2** | **$300** | **$750** |

**Assessment:**
- ⚠️ Partner earns $300 (30% of target)
- ✅ MyCo still profits $416 net
- 🟡 **ACCEPTABLE** but disappointing

---

### Edge Case 3C: Consultant-Heavy Project

Project with 3 consultants splitting 75% allocation.

| Component | Calculation | Amount |
|-----------|-------------|--------|
| TPC | - | $1,500 |
| Consultant 1 | 25% of TPC | $375 |
| Consultant 2 | 25% of TPC | $375 |
| Consultant 3 | 25% of TPC | $375 |
| RO Consultant 1 | 1.5% of $375 | $5.63 |
| RO Consultant 2 | 1.5% of $375 | $5.63 |
| RO Consultant 3 | 1.5% of $375 | $5.63 |
| Total RO Consultant | - | $16.88 |

**Assessment:**
- ✅ Total RO Consultant payout same as single-consultant
- ✅ Structure scales correctly
- 🟢 **NO ISSUE** - math works as designed

---

### Edge Case 3D: Same Person Referred Both Client & Consultant

Partner refers both the client AND a consultant on the same project.

| Earnings Source | Rate | Amount (per $1,500 project) |
|-----------------|------|----------------------------|
| RO Client | 10% of TPC | $150 |
| RO Consultant | 1.5% of AC | $16.88 |
| **Total** | - | **$166.88** |

**5-Year Earnings (2 projects/year):**
- Combined: $1,202 (Years 1-3: $333.75×2×3, Years 4-5: $61.88×2×2)

**Assessment:**
- ✅ Partner exceeds $1,000 target
- ✅ Correct incentive (client referral earns more)
- 🟢 **WORKS AS INTENDED**

---

### Edge Case 3E: RO Consultant Only (No Client Referral)

Partner refers only a consultant, not the client.

| Year | Projects | RO Consultant Earnings |
|------|----------|----------------------|
| 1 | 2 | $33.75 |
| 2 | 2 | $33.75 |
| 3 | 2 | $33.75 |
| 4 | 2 | $33.75 |
| 5 | 2 | $33.75 |
| **Total** | 10 | **$168.75** |

**Assessment:**
- ⚠️ Consultant-only referrers earn little
- ✅ This is by design (client referrals more valuable)
- 🟢 **CORRECT INCENTIVE STRUCTURE**

---

### Edge Case 3F: Partner Refers 10 Clients

High-performing partner refers 10 clients over 5 years.

| Year | New Clients | Active Clients | Cumulative Earnings |
|------|-------------|----------------|---------------------|
| 1 | 2 | 2 | $600 |
| 2 | 2 | 4 | $1,800 |
| 3 | 2 | 6 | $3,600 |
| 4 | 2 | 8 | $5,520 |
| 5 | 2 | 10 | $7,560 |
| **Total** | 10 | - | **$7,560** |

**Assessment:**
- ✅ High performer earns $7,560 (exceeds $5,000 ideal target)
- ✅ Strong incentive for active referrers
- 🟢 **EXCELLENT SCALABILITY**

---

## 4. Break-Even Analysis

### Partner Break-Even: Minimum to Reach $1,000

| Variable | Baseline | Minimum Required |
|----------|----------|------------------|
| TPC | $1,500 | $1,390 |
| Projects/Year | 2 | 1.9 |
| Years Active | 5 | 4.6 |
| Clients Referred | 1 | 1 |

**Scenarios to Hit $1,000:**

| Option | TPC | Projects/Year | Years | Clients |
|--------|-----|---------------|-------|---------|
| A | $1,500 | 2 | 5 | 1 |
| B | $2,500 | 1 | 5 | 1 |
| C | $1,000 | 3 | 5 | 1 |
| D | $1,000 | 2 | 5 | 2 |

---

### MyCo Break-Even: Minimum Viable Operation

**Assumptions:**
- Minimum operating cost: 7% of TPC per project
- Target: MyCo Net ≥ 7% of TPC

| TPC | MyCo Net (13.9%) | Operating Min (7%) | Buffer |
|-----|------------------|-------------------|--------|
| $200 | $27.80 | $14.00 | $13.80 |
| $500 | $69.50 | $35.00 | $34.50 |
| $1,000 | $139.00 | $70.00 | $69.00 |
| $1,500 | $208.50 | $105.00 | $103.50 |

**Assessment:** Structure provides adequate buffer at all TPC levels above $200.

---

### Absolute Minimum Project Size

For MyCo to cover $50 minimum operating cost per project:

```
$50 = TPC × 13.9%
TPC = $50 / 0.139
TPC = $360 minimum
```

**Recommendation:** Set minimum project TPC at **$400** for operational viability.

---

## 5. Cash Flow Timing Impact

### Scenario 5A: Delayed Client Payment (Net 60)

| Timeline | Event | Cash Impact |
|----------|-------|-------------|
| Day 0 | Project completed | - |
| Day 30 | Consultant expects payment | -$1,125 cash out |
| Day 60 | Client pays | +$1,500 cash in |
| Day 30-60 | **Float required** | **$1,125** |

**Impact:**
- MyCo needs working capital for 30-day float
- At 10 projects/month: $11,250 float required
- At 50 projects/month: $56,250 float required

**Mitigation:**
- Negotiate Net 30 or shorter payment terms
- Delay consultant payment until client payment (if contractually allowed)
- Maintain cash reserves

---

### Scenario 5B: Multi-Month Project

Large project spanning 3 months with milestone payments.

| Month | Client Pays | Consultant Pays | RO Pays | MyCo Net |
|-------|-------------|-----------------|---------|----------|
| 1 | $500 | $375 | $50 | $75 |
| 2 | $500 | $375 | $50 | $75 |
| 3 | $500 | $375 | $50 | $75 |
| **Total** | **$1,500** | **$1,125** | **$150** | **$225** |

**Assessment:**
- ✅ Milestone billing reduces cash flow risk
- ✅ RO payments spread over project duration
- 🟢 **PREFERRED** for larger projects

---

## 6. Sensitivity Analysis

### Impact of Consultant Rate Changes

| Consultant Rate | MyCo Gross | RO Budget | MyCo Net | Partner 5-Year |
|-----------------|------------|-----------|----------|----------------|
| 70% | 30% | 15% | 15% | $1,440 |
| **75% (Current)** | **25%** | **11.1%** | **13.9%** | **$1,080** |
| 80% | 20% | 11.1% | 8.9% | $1,080 |
| 85% | 15% | 11.1% | 3.9% | $1,080 |

**Finding:** Consultant rate changes don't affect partner earnings (RO based on TPC), but significantly impact MyCo margins.

---

### Impact of RO Rate Changes

| RO Client (Early/Late) | Partner 5-Year | MyCo Net % |
|------------------------|----------------|------------|
| 8%/2% | $864 | 15.4% |
| **10%/3% (Current)** | **$1,080** | **13.9%** |
| 12%/4% | $1,296 | 12.4% |
| 15%/5% | $1,620 | 10.4% |

**Finding:** Each 2% increase in early RO rate adds ~$216 to partner earnings, costs MyCo ~1.5% margin.

---

## 7. Stress Test Summary

### Pass/Fail Matrix

| Scenario | Partner Target | MyCo Viability | Overall |
|----------|----------------|----------------|---------|
| Low TPC ($200-500) | ❌ FAIL | ⚠️ MARGINAL | 🔴 |
| Low TPC ($800-1000) | ⚠️ BELOW | ✅ PASS | 🟡 |
| Standard TPC ($1,500) | ✅ PASS | ✅ PASS | 🟢 |
| High TPC ($3,000-5,000) | ✅ EXCEED | ✅ PASS | 🟢 |
| Enterprise ($10,000+) | ✅ EXCEED | ✅ PASS | 🟢* |
| Single Project | ⚠️ LOW | ✅ PASS | 🟡 |
| Rapid Churn | ⚠️ LOW | ✅ PASS | 🟡 |
| Multi-Consultant | ✅ PASS | ✅ PASS | 🟢 |
| Dual Referral | ✅ PASS | ✅ PASS | 🟢 |
| High Volume Partner | ✅ EXCEED | ✅ PASS | 🟢 |

*Consider caps for very high TPC

---

## 8. Recommendations

### Immediate Actions

1. **Set Minimum TPC:** $400 per project (operational viability)
2. **Target TPC Range:** $1,000-$5,000 (optimal for all parties)
3. **Enterprise Cap:** Consider 10% cap at $1,000/project for TPC > $10,000

### Monitoring Thresholds

| Metric | Green | Yellow | Red |
|--------|-------|--------|-----|
| Average TPC | >$1,200 | $800-$1,200 | <$800 |
| Projects/Client/Year | >2 | 1-2 | <1 |
| Client Retention (Year 2) | >70% | 50-70% | <50% |
| Partner 5-Year Actual | >$800 | $500-$800 | <$500 |

### Structural Adjustments (If Needed)

| Scenario | Trigger | Adjustment |
|----------|---------|------------|
| Low TPC Dominant | Avg TPC <$800 | Add flat fee supplement |
| High Churn | <50% Year 2 retention | Extend high-rate period |
| Enterprise Creep | Avg TPC >$5,000 | Add rate caps |
| Low Partner Satisfaction | <$500 average earnings | Increase early rates |

---

## Conclusion

The approved payout structure is **robust and viable** across most realistic scenarios. Key vulnerabilities:

1. **Micro projects (<$500)** are not viable—set minimum TPC
2. **Single-project clients** reduce partner value—focus on retention
3. **Very high TPC** may overpay partners—consider caps

The structure should be monitored quarterly against the thresholds above, with adjustments considered only if persistent patterns emerge.

---

*Stress Test Completed: January 2026*
*Next Review: Q2 2026 (after 50+ referrals)*

