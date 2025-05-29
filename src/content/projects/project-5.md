---
title: 'Rusty Bargain Vehicle Price Prediction'
description: 'A vehicle resale price prediction model comparing multiple regressors to balance accuracy and training speed, enabling real-time pricing for a used-car marketplace.'
publishDate: 'Jan 2025'
seo:
  image:
    src: '/rustybargain.png'
    alt: Project preview
---

![Project preview](/rustybargain.png)

## Rusty Bargain Vehicle Price Prediction

### Project Overview
Rusty Bargain, a used-vehicle marketplace, needed a model to accurately estimate car resale prices, balancing prediction quality with training speed and model complexity.

### Objectives
1. Clean and preprocess vehicle listings (remove duplicates, handle missing data, encode categoricals).  
2. Compare multiple regression techniques: Linear Regression, Random Forest, LightGBM, CatBoost.  
3. Evaluate models on RMSE and training time to find the best trade-off.  
4. Recommend a production model for real-time price estimation.

### Features
- **Data Cleaning**: Drop inconsistent or empty columns; impute missing values.  
- **Feature Encoding & Scaling**: One-hot encode categories; apply StandardScaler.  
- **Model Training & Comparison**: Train and benchmark four regressors, record RMSE and fit time.  
- **Hyperparameter Tuning**: Perform grid search on top candidates.  
- **Result Summary**: Visualize error vs. training time trade-off.

### Technology Stack
- **Language & Libraries:** Python, pandas, scikit-learn, LightGBM, CatBoost  
- **Visualization:** Matplotlib, Seaborn  

### Outcome
Selected a gradient-boosting model that delivered low RMSE while maintaining acceptable training latency, empowering Rusty Bargain to auto-price listings.
