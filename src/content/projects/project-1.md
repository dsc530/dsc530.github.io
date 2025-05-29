---
title: 'Megaline Plan Recommendation'
description: 'A recommendation engine that suggests the optimal telecom plan for each customer based on usage behavior, using classification and sanity checks to ensure reliable personalization.'
publishDate: 'Nov 2024'
isFeatured: true
seo:
  image:
    src: '/megaline.jpg'
    alt: Project preview
---

![Project preview](/megaline.jpg)

## Megaline Plan Recommendation

### Project Overview
Megaline Plan Recommendation trains a classification model to suggest the optimal telecom plan for each customer based on usage behavior, helping the company personalize offers and improve satisfaction.

### Objectives
1. Preprocess historical usage data to build clean training, validation, and test sets.  
2. Evaluate and compare multiple classification algorithms (Decision Tree, Random Forest, Logistic Regression) with hyperparameter tuning.  
3. Validate the chosen model on hold-out data and perform sanity checks to ensure generalization.  
4. Deliver a production-ready recommendation engine for dynamic plan assignment.

### Features
- **Data Ingestion & ETL**: Read customer usage from CSV, detect and handle nulls/duplicates, enforce correct data types.  
- **Data Splitting**: Create train (60%), validation (20%), and test (20%) partitions.  
- **Model Comparison**: Train and compare Decision Tree, Random Forest, and Logistic Regression on accuracy.  
- **Sanity Checks**: Analyze feature importances, test on randomized data to detect overfitting, and run cross-validation.  
- **Final Recommendation**: Expose an API endpoint for real-time plan suggestions based on model output.

### Technology Stack
- **Language & Libraries:** Python, pandas, scikit-learn, NumPy  
- **Visualization:** Matplotlib, Seaborn  

### Outcome
Delivered a Random Forest–based recommendation engine that outperformed baseline models, enabling Megaline to tailor offers dynamically and improve customer uptake.
