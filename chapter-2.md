---
title: "Paper Title in Title Case"
author:
  - name: First A. Author
    affiliation: Department of Computer Science, XYZ University
    email: author1@xyz.edu
  - name: Second B. Author
    affiliation: Department of Electrical Engineering, ABC Institute
    email: author2@abc.edu
date: 2026
keywords:
  - Deep Learning
  - Transformer
  - Optimization
abstract: |
  This document provides a template for preparing papers in IEEE format using Markdown.
  The abstract should be between 150–250 words.
  It must summarize the problem, methodology, results, and contributions clearly.
documentclass: IEEEtran
classoption:
  - conference
fontsize: 10pt
geometry: margin=0.75in
header-includes:
  - \usepackage{cite}
  - \usepackage{amsmath,amssymb,amsfonts}
  - \usepackage{algorithmic}
  - \usepackage{graphicx}
  - \usepackage{textcomp}
  - \usepackage{xcolor}
  - \usepackage{booktabs}
  - \usepackage{multirow}
  - \usepackage{url}
bibliography: references.bib
csl: ieee.csl
link-citations: true
---

# I. Introduction

The introduction should clearly define:

- Problem statement  
- Research gap  
- Motivation  
- Contributions  

Example citation: As shown in [@vaswani2017attention], transformer models revolutionized NLP.

## A. Background

Provide theoretical context.

## B. Contributions

The main contributions of this paper are:

1. A novel architecture for ...
2. A scalable optimization framework ...
3. Experimental validation on benchmark datasets.

---

# II. Related Work

Discuss prior literature in structured manner.

Compare classical approaches with modern deep learning frameworks.

---

# III. Methodology

## A. Problem Formulation

The optimization objective is defined as:

$$
\min_{\theta} \mathcal{L}(f_\theta(x), y)
$$

## B. Proposed Architecture

Include figures like this:

![Architecture Diagram](figures/architecture.png)

Use high-resolution vector images (PDF preferred).

---

# IV. Experimental Setup

## A. Dataset

Describe dataset statistics in table form:

| Dataset | Samples | Features | Classes |
|----------|---------|----------|----------|
| CIFAR-10 | 60,000  | 3×32×32  | 10 |

## B. Implementation Details

- Framework: PyTorch  
- Hardware: NVIDIA A100  
- Batch size: 128  
- Learning rate: 0.001  

---

# V. Results and Discussion

Present results clearly.

| Model | Accuracy (%) | F1 Score |
|--------|--------------|-----------|
| Baseline | 85.4 | 0.84 |
| Proposed | **92.1** | **0.91** |

Discuss:

- Statistical significance  
- Ablation study  
- Comparison with SOTA  

---

# VI. Conclusion

Summarize:

- What was achieved  
- Why it matters  
- Future work directions  

---

# Acknowledgment

This work was supported by XYZ Research Grant.

---

# References