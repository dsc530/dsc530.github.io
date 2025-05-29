---
title: 'Interconnect Churn Prediction'
description: 'A complete churn-prediction pipeline using feature engineering, SMOTE balancing, and classification models with MLOps practices to proactively retain telecom customers.'
publishDate: 'March 2025'
isFeatured: true
seo:
  image:
    src: '/interconnect.png'
    alt: Project preview
---

![Project preview](/interconnect.png)

## Interconnect Churn Prediction

### Project Overview
Interconnect Telecom seeks to predict customer churn to proactively retain users. This project builds, tunes, and deploys classification models within an MLOps framework.

### Objectives
1. Merge and clean client, contract, and service records.  
2. Engineer features such as tenure, monthly charges, and service flags.  
3. Balance the dataset via SMOTE and split into train/validation/test.  
4. Compare XGBoost and Random Forest, applying RFE for feature reduction.  
5. Evaluate final model on AUC-ROC, accuracy, precision, recall, and F1.

### Features
- **Data Integration & Cleaning**: Combine multiple tables; drop irrelevant fields.  
- **Feature Engineering**: Derive tenure_days, total_charges, service usage flags.  
- **Resampling & Scaling**: SMOTE for class balance; MinMax scaling for numeric features.  
- **Modeling & Tuning**: Train XGBoost and RF; optimize hyperparameters.  
- **Production-Ready Pipeline**: Export model with DataOps scripts for automated retraining.

### Technology Stack
- **Language & Libraries:** Python, pandas, scikit-learn, XGBoost  
- **Visualization:** Matplotlib, Seaborn  

### Outcome
Achieved an AUC-ROC of 0.88 with a reduced feature set, enabling Interconnect to deploy an automated churn-alert system.
