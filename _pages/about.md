---
permalink: /
title: "Shoubin Yu"
excerpt: ""
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

{% if site.google_scholar_stats_use_cdn %}
{% assign gsDataBaseUrl = "https://cdn.jsdelivr.net/gh/" | append: site.repository | append: "@" %}
{% else %}
{% assign gsDataBaseUrl = "https://raw.githubusercontent.com/" | append: site.repository | append: "/" %}
{% endif %}
{% assign url = gsDataBaseUrl | append: "google-scholar-stats/gs_data_shieldsio.json" %}

<span class='anchor' id='about-me'></span>

Hi, thanks for stopping by! I am now a second-year Ph.D. Student at [The University of North Carolina at Chapel Hill](https://www.unc.edu/), advised by [Prof. Mohit Bansal](https://www.cs.unc.edu/~mbansal/). Previously, I did my undergraduate study at [Shanghai Jiao Tong University](https://en.sjtu.edu.cn/). 

While at UNC, I spent my summer time at Amazon Alexa (2023). Prior to UNC, I did research at SenseTime (2021), MIT-IBM Watson AI Lab (2021).

I am interested in wide topics in computer vision, especially in video, including video+X (language, audio, robotics), video understanding, generation, reasoning, representation learning.

# 🔥 News
- *2024.01*: 🎬 I will intern at Adobe as Research Intern for Summer 2024.
- *2023.09*: ⛓️ We have one paper accepted to **NeurIPS 2023**. Check SeViLA for Video Loc+QA.
- *2023.07*: 🦴 We have one paper accepted to **IEEE TCSVT**. Check MoPRL for skeletal anomaly detection.
- *2023.05*: 🌞 I will intern at Amazon as Research Scientist Intern for Summer 2023.
- *2022.06*: 🎓 Graduate from Shanghai Jiao Tong University! (excellent graduates).
- *2022.04*: ⛪️ I will join <a href="https://murgelab.cs.unc.edu/index.html"> UNC-CH MURGe-Lab </a> in Fall 2022.
- *2021.10*: 🌟 We have one paper accepted to **NeurIPS 2021**. Check STAR for real-world situated reasoning.

# 📝 Pre-print

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">Preprint</div><img src='images/crema.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[CREMA: Multimodal Compositional Video Reasoning via Efficient Modular Adaptation and Fusion](https://arxiv.org/pdf/2402.05889.pdf)

**Shoubin Yu\***, Jaehong Yoon\*, Mohit Bansal

[**Code**](https://github.com/Yui010206/CREMA) | [**Project Page**](https://crema-videollm.github.io/)
- We present CREMA, an efficient & modular modality-fusion framework for injecting any new modality into video reasoning.
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">Preprint</div><img src='images/llovi.jpg' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[A Simple LLM Framework for Long-Range Video Question-Answering](https://arxiv.org/pdf/2312.17235.pdf)

Ce Zhang, Taixi Lu, Md Mohaiminul Islam, Ziyang Wang, **Shoubin Yu**, Mohit Bansal, Gedas Bertasius

[**Code**](https://github.com/CeeZh/LLoVi)
- We present LLoVi, a simple yet effective framework with LLM for long-range video question-answering.
</div>
</div>

# 📝 Publications 

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">NeurIPS 2023</div><img src='images/sevila.jpg' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[Self-Chained Image-Language Model for Video Localization and Question Answering](https://arxiv.org/pdf/2305.06988.pdf)

**Shoubin Yu**, Jaemin Cho, Prateek Yadav, Mohit Bansal

[**Code**](https://github.com/Yui010206/SeViLA/) | [**Demo**](https://huggingface.co/spaces/SeViLA/SeViLA) | [**Talk**](https://www.youtube.com/watch?v=AIdXfZlFGS0)
- We propose SeViLA, which self-chained BLIP-2 for 2-stage video question-answering (localization + QA) & refine localization with QA feedback.
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">TCSVT 2023</div><img src='images/moprl.jpg' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[Regularity Learning via Explicit Distribution Modeling for Skeletal Video Anomaly Detection](https://ieeexplore.ieee.org/document/10185076)

**Shoubin Yu**, Zhongyin Zhao, Haoshu Fang, Andong Deng,Haisheng Su, Dongliang Wang, Weihao Gan, Cewu Lu, Wei Wu

[**Code**](https://github.com/Yui010206/MoPRL)
- We propose MoPRL, a transformer-based model incorporated with skeletal motion prior for efficient video anomaly detection.
</div>
</div>


<div class='paper-box'><div class='paper-box-image'><div><div class="badge">NeurIPS 2021</div><img src='images/star.jpg' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[STAR: A Benchmark for Situated Reasoning in Real-World Videos](https://datasets-benchmarks-proceedings.neurips.cc/paper/2021/hash/5ef059938ba799aaa845e1c2e8a762bd-Abstract-round2.html)

Bo Wu, **Shoubin Yu**, Zhenfang Chen, Joshua B. Tenenbaum, Chuang Gan

[**Code**](https://github.com/csbobby/STAR_Benchmark) | [**Project Page**](http://star.csail.mit.edu)
- We propose STAR, a benchmark for neural-symbolic video reasoning in real-world scenes.
</div>
</div>

# 🎖 Honors and Awards
- CN Patent CN114724062A, 2022
- The Hui-Chun Chin and Tsung Dao Lee Scholar, 2020
- CN Patent CN110969107A, 2019
- Meritorious Award in Mathematical Contest in Modeling, 2019
- Second Prize in Shanghai, China Undergraduate Mathematical Contest in Modeling, 2019

# 🧐 Service
- Conference reviewer: CVPR 2024, ACL 2023, EACL 2023, CoNLL 2023, CVPR 2023 Workshop, AAAI 2023 Workshop
- Journal reviewer: IEEE Transactions on Circuits and Systems for Video Technology

# 📖 Educations
<div class='paper-box'><div class='paper-box-image'><div><div class="badge"></div><img src='images/unc_logo.png' alt="sym" width="35%"></div></div>
<div class='paper-box-text' markdown="1">
- *2022.09 - Present*
- The University of North Carolina at Chapel Hill 
- Computer Science, Ph.D.
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge"></div><img src='images/sjtu_logo.png' alt="sym" width="35%"></div></div>
<div class='paper-box-text' markdown="1">
- *2017.09 - 2022.06*
- Shanghai Jiao Tong University 
- Information Security, B.Eng.
</div>
</div>


# 💻 Internships
<div class='paper-box'><div class='paper-box-image'><div><div class="badge"></div><img src='images/amazon.png' alt="sym" width="55%"></div></div>
<div class='paper-box-text' markdown="1">
- *2023.05 - 2023.11*, Research Scientist Intern
- work with [Jocob Zhiyuan Fang](https://scholar.google.com/citations?hl=en&user=fHWXpq4AAAAJ), [Robinson Piramuthu](https://scholar.google.com/citations?user=2CkqEGcAAAAJ&hl=en)
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge"></div><img src='images/sensetime.png' alt="sym" width="70%"></div></div>
<div class='paper-box-text' markdown="1">
- *2021.01 - 2022.04*, Research Intern
- work with [Haisheng Su](https://scholar.google.com/citations?user=OFrMZh8AAAAJ&hl=en&oi=ao), [Wei Wu](https://scholar.google.com/citations?user=9RBxtd8AAAAJ&hl=en)
</div>
</div>

