# MyCo Complete Payout Structure Model

## Overview

This folder contains a comprehensive financial model for optimizing MyCo's **entire payout structure**, including:
- Consultant payout rate (% of TPC)
- RO (Client) referral rates with cliff structure
- RO (Consultant) referral rates
- MyCo margin analysis

The goal is to maximize MyCo profits while ensuring referral partners earn $1,000-$5,000 within 5 years.

---

## IMPORTANT: Understanding the Actual Structure

Based on your PDF documents, the money flow is:

```
CLIENT PAYS: Total Project Cost (TPC)
    │
    ├── CONSULTANTS: 85% of TPC (current)
    │
    └── MyCo MARGIN: 15% of TPC (current)
            │
            ├── RO (Client): 2.5% of TPC (current)
            ├── RO (Consultant): 5% of AC (current)
            │
            └── MyCo NET: ~8% of TPC (current)
```

**Key Insight:** MyCo keeps only ~15% gross margin, not 30%.

---

## Files in This Folder

### Primary Analysis (Start Here)
| File | Description | Priority |
|------|-------------|----------|
| **`referral-calculator.html`** | Interactive calculator with ALL payout rates | ⭐ Open first |
| **`EXECUTIVE_SUMMARY.md`** | Key findings and recommendations | ⭐ Read second |
| **`PAYOUT_STRUCTURE_MATRIX.md`** | Side-by-side scenario comparison | ⭐ Decision guide |

### Detailed Analysis
| File | Description |
|------|-------------|
| `CONSULTANT_RATE_ANALYSIS.md` | 70-85% consultant rate trade-offs |
| `MARGIN_ANALYSIS.md` | MyCo minimum viable margin analysis |
| `INDUSTRY_RESEARCH.md` | Industry benchmarks and competitor data |
| `SCENARIO_ANALYSIS.md` | Probability-weighted scenario outcomes |

### Implementation & Partner Materials
| File | Description |
|------|-------------|
| `PARTNER_PROGRAM_OVERVIEW.md` | Share with potential partners |
| `QUICK_REFERENCE.md` | One-page cheat sheet |
| `DECISION_MATRIX.md` | Framework for choosing structure |
| `IMPLEMENTATION_CHECKLIST.md` | Step-by-step launch guide |

### Supporting Files
| File/Folder | Description |
|-------------|-------------|
| `assumptions.md` | All model assumptions |
| `DATA_GAPS_FUTURE.md` | Future data collection needs |
| `pdfs/` | Original business model PDFs |
| `*.csv` | Spreadsheet data for Excel |

---

## Quick Start

### Step 1: Open the Interactive Calculator

1. Open `referral-calculator.html` in any web browser
2. On the **"Full Structure"** tab, configure:
   - Total Project Cost (TPC)
   - Consultant Payout Rate (currently 85%)
   - RO Client rates (early and late)
   - RO Consultant rate
3. View the **Money Flow Diagram** to see where money goes
4. Check **Profitability** at the bottom

### Step 2: Review Scenarios

Use the **"Scenario Matrix"** tab to compare:
- Scenario A: 70% consultant (conservative margin)
- Scenario B: 80% consultant (competitive)
- Scenario C: 85% consultant (current structure)
- Scenario D: 75% consultant (balanced)

### Step 3: Make Decisions

Review analysis tabs:
- **Consultant Rate**: Trade-offs of 70-85%
- **RO Client**: Cliff structure options
- **RO Consultant**: Keep low relative to RO Client
- **MyCo Margin**: Ensure sustainability

---

## Critical Problems with Current Structure

### Problem 1: Partner Earnings Too Low
- Current RO Client 5-year: **$375**
- Target: **$1,000-5,000**
- Gap: **63% below minimum**

### Problem 2: Wrong Incentive Hierarchy
- RO Consultant earns **$638** (5 years)
- RO Client earns **$375** (5 years)
- **RO Consultant should earn LESS than RO Client**

### Problem 3: Thin MyCo Margins
- Current MyCo Net: **8.25%** of TPC
- Minimum sustainable: **7-10%**
- Very little buffer for operations

---

## Recommended Structure

### Option A: Reduce Consultant Rate to 75% (Best for Partners)

| Component | Current | Recommended |
|-----------|---------|-------------|
| Consultant Payout | 85% | **75%** |
| MyCo Gross Margin | 15% | **25%** |
| RO Client (Years 1-3) | 2.5% | **10%** |
| RO Client (Year 4+) | 2.5% | **3%** |
| RO Consultant | 5% of AC | **1.5% of AC** |
| MyCo Net | 8.25% | **~14%** |

**Results:**
- RO Client 5-Year: **$1,080** ✅ (vs. $375 now)
- MyCo Net: **14%** (sustainable)
- RO Client earns **6x** more than RO Consultant

### Option B: Keep 85% Consultant (Lower Partner Earnings)

| Component | Current | Adjusted |
|-----------|---------|----------|
| Consultant Payout | 85% | 85% |
| RO Client (Years 1-3) | 2.5% | **5%** |
| RO Client (Year 4+) | 2.5% | **1%** |
| RO Consultant | 5% of AC | **1% of AC** |

**Results:**
- RO Client 5-Year: **$540** (need 2 referrals for $1K)
- MyCo Net: **9%** (tight but viable)

---

## Key Decisions Required

### Decision 1: Consultant Payout Rate

| Rate | Consultant Attraction | Margin for RO | Recommendation |
|------|----------------------|---------------|----------------|
| 70% | Moderate | 30% - Excellent | If consultant pool is strong |
| 75% | Good | 25% - Very good | **Recommended balance** |
| 80% | Very good | 20% - Moderate | If consultant attraction is key |
| 85% | Excellent | 15% - Tight | Current - limits RO payouts |

### Decision 2: RO Client Structure

| Early Rate | Late Rate | Partner 5yr | Assessment |
|------------|-----------|-------------|------------|
| 2.5% | 2.5% | $375 | ❌ Too low (current) |
| 5% | 1% | $540 | ⚠️ Need 2 referrals |
| 7% | 2% | $750 | ⚠️ Close to target |
| 10% | 3% | $1,080 | ✅ Meets target |

### Decision 3: RO Consultant Rate

| Rate | Per Project | 5yr Earnings | vs RO Client |
|------|-------------|--------------|--------------|
| 5% of AC | $64 | $638 | ❌ Higher than RO Client |
| 2% of AC | $26 | $255 | ⚠️ OK |
| 1.5% of AC | $19 | $191 | ✅ Good ratio |
| 1% of AC | $13 | $128 | ✅ Best ratio |

---

## Using the Interactive Calculator

The calculator has 8 tabs:

| Tab | Purpose |
|-----|---------|
| **Full Structure** | Configure ALL rates, see money flow |
| **Scenario Matrix** | Compare pre-defined scenarios |
| **Consultant Rate** | Analyze 70-85% options |
| **RO Client** | Design cliff structure |
| **RO Consultant** | Set consultant referral rate |
| **MyCo Margin** | Validate sustainability |
| **Partner Check** | Verify partner earnings targets |
| **Recommendation** | See optimal structure |

---

## Next Steps

### Immediate
1. ⬜ **Decide consultant payout rate** (70-85%)
2. ⬜ **Set RO Client cliff structure** (early rate, late rate, cliff year)
3. ⬜ **Set RO Consultant rate** (1-5% of AC)

### Before Launch
1. ⬜ Model scenarios in calculator
2. ⬜ Stress test with low/high TPC
3. ⬜ Legal review of agreements
4. ⬜ Create partner materials

### Completed Analysis
1. ✅ Complete payout structure analysis
2. ✅ Consultant rate trade-off analysis
3. ✅ Margin sustainability analysis
4. ✅ Industry benchmarking
5. ✅ Partner-facing materials
6. ✅ Implementation checklist

---

## Summary

The current payout structure has issues:
1. **Partner earnings too low** ($375 vs $1,000 target)
2. **Wrong incentive hierarchy** (RO Consultant > RO Client)
3. **Thin MyCo margins** (8.25%)

**Fix:** Either reduce consultant rate to 75% OR accept lower partner earnings requiring multiple referrals.

**Start with:** Open `referral-calculator.html` to model your scenario.

---

*Created January 2026 | Use interactive calculator for live analysis*
