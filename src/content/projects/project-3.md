---
title: 'OilyGiant Well Recommendation'
description: 'A predictive analytics solution that ranks the top 200 drilling locations by forecasted reserves, and selects the most profitable region under budget and risk constraints.'
publishDate: 'Dec  2024'
seo:
  image:
    src: '/oilygiant.jpg'
    alt: Project preview
---

![Project preview](/oilygiant.jpg)

## OilyGiant Well Recommendation

### Project Overview
OilyGiant needs to identify the top 200 drilling locations out of 500 surveyed points per region, maximizing profit under budget and risk constraints using predictive modeling and financial analysis.

### Objectives
1. Use crude quality and reserve estimates to predict future well performance.  
2. Build a regression model to forecast reserve volumes at new drilling sites.  
3. Rank the top 200 candidate wells by projected reserves.  
4. Calculate expected profits and risk of loss per region, selecting the optimal region under a 2.5% loss threshold.

### Features
- **Data Import & Cleaning**: Load survey data, handle missing values and outliers.  
- **Regression Modeling**: Train linear regression per region, evaluate with RMSE to choose best model.  
- **Profit Calculation**: Apply unit economics (4.5 USD/barrel, budget of 100 M USD) to top 200 forecasts.  
- **Risk Analysis**: Compute confidence intervals for profit estimates and filter regions with < 2.5% loss probability.  
- **Region Selection**: Automatically highlight region with highest average profit.

### Technology Stack
- **Language & Libraries:** Python, pandas, scikit-learn, NumPy  
- **Visualization:** Matplotlib, Seaborn  

### Outcome
Identified the most profitable drilling region under budget and risk constraints, enabling OilyGiant to allocate capital with quantifiable confidence.
