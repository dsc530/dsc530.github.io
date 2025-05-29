---
title: 'Product Sentiment Analysis'
description: A sentiment analysis project comparing text-processing pipelines and multiple classifiers to accurately predict review polarity for product feedback.
publishDate: 'Jan 2025'
isFeatured: true
seo:
  image:
    src: '/sentiment.png'
    alt: Project preview
---

![Project preview](/sentiment.png)

## Product Sentiment Analysis

### Project Overview
A comprehensive sentiment analysis of product reviews, comparing text-processing pipelines and classification algorithms to accurately predict review polarity.

### Objectives
1. Preprocess text: lowercase, remove punctuation, tokenize, lemmatize with NLTK and spaCy.  
2. Extract features via TF-IDF and BERT embeddings.  
3. Train and compare classifiers: Logistic Regression, Random Forest, SVC, Naive Bayes, and a Dummy baseline.  
4. Evaluate performance on accuracy and F1-score.

### Features
- **Text Cleaning & Tokenization**: Normalize, remove noise, lemmatize with two libraries.  
- **Feature Engineering**: TF-IDF vectorization (NLTK & spaCy) and BERT embeddings.  
- **Model Training**: Fit and tune multiple classifiers; include dummy model for benchmarking.  
- **Evaluation & Visualization**: Compare accuracy/F1 across models in bar charts.

### Technology Stack
- **Language & Libraries:** Python, pandas, scikit-learn, nltk, spaCy, transformers  
- **Visualization:** Matplotlib, Seaborn  

### Outcome
Identified the most effective classifier for sentiment prediction and demonstrated minimal difference between lemmatization methods, guiding future NLP pipelines.