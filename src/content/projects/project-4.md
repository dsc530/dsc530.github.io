---
title: 'Sure Tomorrow Insurance Analytics'
description: 'An insurance analytics case study leveraging clustering and regression to segment customers, predict claim counts, and assess the impact of feature scaling on model performance.'
publishDate: 'Feb 2025'
isFeatured: true
seo:
  image:
    src: '/suretomorrow.png'
    alt: Project preview
---

![Project preview](/suretomorrow.png)

## Sure Tomorrow Insurance Analytics

### Project Overview
Sure Tomorrow Insurance leverages clustering and regression to segment customers, predict claim counts, and evaluate how data scaling impacts model performance, all while preserving data privacy.

### Objectives
1. Segment customers into homogeneous groups using KMeans clustering.  
2. Predict the number of claims per customer via linear regression models.  
3. Analyze the effect of feature scaling on model error (RMSE).  
4. Ensure data transformations maintain customer privacy.

### Features
- **Data Exploration & Cleaning**: Inspect for nulls, duplicates; verify data types.  
- **Feature Engineering & Scaling**: One-hot encode categoricals, apply StandardScaler to numerics.  
- **Clustering with KMeans**: Determine optimal cluster count and profile segments.  
- **Regression Modeling**: Train linear regression with/without scaled data; compare RMSE.  
- **Privacy Analysis**: Assess transformation impact on data recoverability.

### Technology Stack
- **Language & Libraries:** Python, pandas, scikit-learn, NumPy  
- **Visualization:** Matplotlib, Seaborn  

### Outcome
Demonstrated that scaling improves regression accuracy and delivered clear customer segments, providing Sure Tomorrow with actionable insights for tailored insurance offerings.
