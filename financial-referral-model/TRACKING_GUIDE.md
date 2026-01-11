# Referral Tracking Guide
## How to Use the MyCo Tracking Templates

---

## Overview

This guide explains how to use the tracking templates to manage your referral program:
- `referral-tracking-template.csv` - Master list of partners and referrals
- `payout-calculator-template.csv` - Monthly payout calculations
- `partner-performance-dashboard.html` - Visual dashboard

---

## 1. Referral Tracking Template

### Purpose
Track all partners and their referrals in one place.

### Fields Explained

| Field | Description | Example |
|-------|-------------|---------|
| Partner ID | Unique identifier | P001 |
| Partner Name | Full name | John Smith |
| Partner Email | Contact email | john@example.com |
| Partner Phone | Contact phone | 555-123-4567 |
| Partner Start Date | When they joined | 2026-01-15 |
| Referral ID | Unique referral identifier | R001 |
| Referral Type | Client or Consultant | Client |
| Referred Name | Person referred | Jane Doe |
| Referred Company | Their company | Acme Corp |
| Referred Email | Their email | jane@acme.com |
| Referral Date | When referred | 2026-01-20 |
| Referral Status | Current status | Active |
| First Project Date | When first engaged | 2026-02-15 |
| Cliff Date | When rate drops | 2029-02-15 |
| Total Projects | Count of projects | 5 |
| Total TPC | Cumulative project value | $7,500 |
| Cumulative Payout | Total paid to partner | $750 |
| Last Payout Date | Most recent payment | 2026-06-15 |
| Notes | Additional info | Strong relationship |

### Status Values

| Status | Meaning |
|--------|---------|
| Pending | Referred, not yet contacted |
| Qualified | In active discussions |
| Proposal | Proposal sent |
| Active | Client engaged, earning commissions |
| Churned | Client no longer active |
| Closed | Did not convert to client |

### How to Use

1. **New Partner:** Add a row with partner info, leave referral fields blank
2. **New Referral:** Add a row with partner ID and referral details
3. **Status Updates:** Update Referral Status as it progresses
4. **After First Project:** Fill in First Project Date and calculate Cliff Date (+3 years)
5. **Monthly:** Update Total Projects, Total TPC, and Cumulative Payout

### Formulas (Excel/Sheets)

**Cliff Date:**
```
=First Project Date + 3 years
```

**Applicable Rate:**
```
=IF(TODAY() < Cliff Date, "10%", "3%")
```

---

## 2. Payout Calculator Template

### Purpose
Calculate and track monthly payouts to partners.

### Fields Explained

| Field | Description | Example |
|-------|-------------|---------|
| Month | Payment month | January |
| Year | Payment year | 2026 |
| Partner ID | Link to partner | P001 |
| Partner Name | For reference | John Smith |
| Referral ID | Link to referral | R001 |
| Client Name | Client company | Acme Corp |
| Project ID | Unique project | PRJ001 |
| Project TPC | Total project cost | 1500 |
| Consultant Allocation | Consultant payout (75%) | 1125 |
| Referral Type | Client or Consultant | Client |
| Years Since First Project | For rate calculation | 1 |
| Applicable Rate | Based on cliff | 10% |
| Calculated Payout | Amount owed | 150 |
| Payment Status | Pending/Paid | Paid |
| Payment Date | When paid | 2026-02-15 |
| Payment Method | How paid | ACH |
| Notes | Additional info | First project |

### Payout Calculations

**Client Referral:**
```
Calculated Payout = Project TPC × Applicable Rate
```

**Consultant Referral:**
```
Calculated Payout = Consultant Allocation × 1.5%
```

### Applicable Rate Logic

```
IF Years Since First Project <= 3:
    Rate = 10% (Client) or 1.5% (Consultant)
ELSE:
    Rate = 3% (Client) or 1.5% (Consultant)
```

### Monthly Process

1. **List all completed projects** from the month
2. **Match to referrals** using Referral ID
3. **Calculate payouts** using the formulas above
4. **Process payments** via ACH/check
5. **Update status** to "Paid" with date

---

## 3. Dashboard Usage

### Opening the Dashboard

Open `partner-performance-dashboard.html` in any web browser.

### Dashboard Sections

1. **Summary Cards:** Quick overview of key metrics
2. **Partner Table:** Sortable list of all partners
3. **Referral Pipeline:** Status breakdown
4. **Monthly Trends:** Earnings over time

### Updating Data

The dashboard reads from input fields. For a full integration:
1. Export CSV data to JSON
2. Update the dashboard's data source
3. Refresh the page

For manual updates:
1. Enter partner count and other metrics
2. Dashboard calculates automatically

---

## 4. Monthly Workflow

### Week 1: Data Collection
- [ ] Export completed projects from project management system
- [ ] Match projects to referral IDs
- [ ] Update referral-tracking-template.csv

### Week 2: Payout Calculation
- [ ] Add new rows to payout-calculator-template.csv
- [ ] Calculate payouts using formulas
- [ ] Verify calculations match expected amounts
- [ ] Get approval for payments

### Week 3: Payment Processing
- [ ] Submit payments via accounting system
- [ ] Record payment dates and methods
- [ ] Update payment status to "Paid"

### Week 4: Reporting
- [ ] Generate monthly partner statements
- [ ] Update dashboard metrics
- [ ] Send partner notifications
- [ ] Archive monthly data

---

## 5. Quarterly Review

Every quarter, review:

1. **Partner Performance**
   - Top earners
   - Inactive partners
   - Conversion rates

2. **Referral Quality**
   - Average TPC by partner
   - Churn rates
   - Time to first project

3. **Financial Metrics**
   - Total payouts
   - Payout as % of revenue
   - MyCo net margin validation

4. **Program Health**
   - Partner satisfaction
   - Referral pipeline
   - Rate structure effectiveness

---

## 6. Common Scenarios

### Scenario: New Partner Signs Up

1. Add to referral-tracking-template.csv
2. Assign Partner ID (P###)
3. Leave referral fields blank
4. Notify partner of their ID and link

### Scenario: Partner Makes a Referral

1. Add referral row to tracking template
2. Assign Referral ID (R###)
3. Set status to "Pending"
4. Begin outreach to prospect

### Scenario: Referral Converts to Client

1. Update status to "Active"
2. Set First Project Date
3. Calculate and set Cliff Date (+3 years)
4. Add first project to payout calculator

### Scenario: Processing Monthly Payouts

1. Filter payout calculator for month
2. Sum "Calculated Payout" by partner
3. Verify against expected (audit)
4. Process payments
5. Update status and dates

### Scenario: Client Churns

1. Update referral status to "Churned"
2. Add note with reason if known
3. Stop adding projects for that referral
4. Partner stops earning on this referral

### Scenario: Partner Claims Credit Dispute

1. Check Referral Date in tracking
2. Verify first contact timestamps
3. First registered referrer wins
4. Document resolution in Notes

---

## 7. Reporting Templates

### Monthly Partner Statement

```
PARTNER STATEMENT
Period: [Month Year]

Partner: [Name]
Partner ID: [ID]

EARNINGS THIS PERIOD
-----------------------------------------
Referral      | Client      | Payout
R001          | Acme Corp   | $150.00
R003          | Tech Inc    | $300.00
-----------------------------------------
TOTAL                       | $450.00

CUMULATIVE (LIFETIME)
-----------------------------------------
Total Referrals: 5
Active Clients: 3
Lifetime Earnings: $2,340.00

Payment sent via [ACH] on [Date]
```

### Quarterly Program Report

```
REFERRAL PROGRAM QUARTERLY REPORT
Q[#] [Year]

SUMMARY
- Active Partners: [#]
- New Partners This Quarter: [#]
- Total Referrals: [#]
- Conversion Rate: [%]

FINANCIAL
- Total Revenue from Referrals: $[###]
- Total Partner Payouts: $[###]
- Payout as % of Revenue: [%]
- MyCo Net from Referrals: $[###]

TOP PERFORMERS
1. [Partner Name] - $[###]
2. [Partner Name] - $[###]
3. [Partner Name] - $[###]

PIPELINE
- Pending: [#]
- Qualified: [#]
- Proposal: [#]
- Active: [#]
```

---

## 8. Troubleshooting

### Issue: Payout doesn't match expected

**Check:**
1. Correct Referral Type (Client vs Consultant)?
2. Years Since First Project correct?
3. Using TPC (Client) vs Allocation (Consultant)?
4. Rate applied matches cliff status?

### Issue: Partner not receiving payments

**Check:**
1. Payment information on file?
2. Payments processed and sent?
3. Bank/ACH details correct?
4. Minimum threshold met?

### Issue: Duplicate referral claims

**Resolution:**
1. Check referral registration dates
2. First to register wins
3. Document in Notes field
4. Notify both partners of decision

---

## 9. Data Backup

### Daily
- Auto-save to cloud storage (Google Drive, OneDrive)

### Weekly
- Export CSVs to dated backup folder

### Monthly
- Archive complete month data
- Store in secure long-term storage

### File Naming Convention
```
referral-tracking-[YYYY-MM-DD].csv
payout-calculator-[YYYY-MM].csv
```

---

*For questions about tracking, email: tracking@myco.com*

