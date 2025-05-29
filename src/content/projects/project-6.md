---
title: 'Sweet Lift Taxi Demand Forecasting'
description: 'A time-series forecasting solution to predict hourly taxi order volumes at airports, improving driver allocation and service efficiency during peak periods.'
publishDate: 'Nov 2024'
isFeatured: true
seo:
  image:
    src: '/taxi.png'
    alt: Project preview
---

![Project preview](/taxi.png)

## Sweet Lift Taxi Demand Forecasting

### Project Overview
Sweet Lift Taxi aims to predict taxi order volumes per hour at airports, enabling better driver allocation during peak demand and improving service efficiency.

### Objectives
1. Test for stationarity with statistical tests and analyze autocorrelation.  
2. Engineer temporal features: lag variables, rolling means, and date components.  
3. Train and compare regression models (Linear Regression, Random Forest, LightGBM).  
4. Achieve a test RMSE below 48 orders/hour.

### Features
- **Time Series Analysis**: Dickey-Fuller stationarity test and ACF/PACF plots.  
- **Feature Engineering**: Create lag features (1, 22, 23, 24 hours), rolling averages (1, 10, 24), extract month/day/hour.  
- **Model Training**: Fit and compare multiple regressors; analyze impact of scaling.  
- **Evaluation**: Compute RMSE on test set to validate target performance.

### Technology Stack
- **Language & Libraries:** Python, pandas, scikit-learn, NumPy  
- **Visualization:** Matplotlib, Seaborn  

### Outcome
Delivered a LightGBM forecasting pipeline that met the RMSE target, helping Sweet Lift Taxi to anticipate demand and allocate drivers more effectively.
