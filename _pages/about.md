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

### Intro

Hi, thanks for stopping by!  I am now a fourth-year PhD student at [MURGe-Lab](https://murgelab.cs.unc.edu/) ([UNC-NLP Group](https://nlp.cs.unc.edu/)) at the [University of North Carolina, Chapel Hill](https://cs.unc.edu/), working with [Prof. Mohit Bansal](https://www.cs.unc.edu/~mbansal/).

Prior to joining UNC, I completed my undergraduate studies at [Shanghai Jiao Tong University (SJTU)](https://en.sjtu.edu.cn/) in 2022.

I also work at/with MIT-IBM Watson AI Lab (2021), Amazon (2023), Adobe Research (2024), and Google DeepMind (2025).

---

My research focuses on **generative multimodal AI** and **robust, privacy-preserving AI systems**.  
I build models and frameworks that can efficiently perceive, reason, and generate across the dynamic, diverse multimodal world.

My work spans **multimodal representation learning, video-language understanding and generation, AI safety, and efficient training and scaling inference for large models**, with applications across sports, security, medical, and educational domains.

---

### Recent Research Interests

#### **Multimodal (Video/Audio/3D/Medical/…) Reasoning Methods**
- [**SeViLA:** Self-chained Image-Language Model for Video QA+Localization (NeurIPS 2023)](https://arxiv.org/pdf/2305.06988)
- [**CREMA:** Generalizable & Efficient Video-Language Reasoning via Any-Modal Modular Fusion (ICLR 2025)](https://crema-videollm.github.io/)
- [**VideoTree:** Query-Adaptive Tree-based Long-Video Understanding (CVPR 2025)](https://videotree2024.github.io/)
- [**MEXA:** General Multimodal Reasoning via Dynamic Multi-Expert Aggregation (EMNLP 2025 Findings)](https://arxiv.org/abs/2506.17113)
- [**Video-RTS:** Reinforcement Learning and Test-Time Scaling for Video Reasoning (EMNLP 2025)](https://sites.google.com/cs.unc.edu/videorts2025/)

#### **Multimodal (Video/4D) Generation and Editing**
- [**IV0:** Zero-shot Controllable Image-to-Video Animation via Motion Decomposition (ACMMM 2024)](https://img2vidanim-0.github.io/)
- [**SAFREE:** Training-free & Adaptive Safe Text-to-Image/Video Generation (ICLR 2025)](https://safree-safe-t2i-t2v.github.io/)
- [**VEGGIE:** Unified Instructional Video Editing (ICCV 2025)](https://veggie-gen.github.io/)
- [**RACCooN:** Diverse Video Editing via MLLM Auto-generated Paragraphs (EMNLP 2025)](https://raccoon-mllm-gen.github.io/)
- [**4D-LRM:** Large Reconstruction Model for 4D Object Reconstruction (NeurIPS 2025)](https://4dlrm.github.io/)
- [**Video-MSG:** Multimodal Planning & Noise Initialization for Controllable Video Generation (ArXiv 2025)](https://video-msg.github.io/)

#### **Multimodal Reasoning Benchmarks**
- [**STAR:** Neuro-Symbolic Real-world Video Reasoning Benchmark (NeurIPS 2021)](https://bobbywu.com/STAR/)
- [**GroundMoRe:** Video Reasoning Segmentation Benchmark (CVPR 2025)](https://groundmore.github.io/)
- [**SciVideoBench:** Scientific Video Reasoning Benchmark (ArXiv 2025)](https://scivideobench.github.io/)
- [**Ego2Web:** Egocentric Video + Web Agent Benchmark (ArXiv 2025)](https://ego2web.github.io/)

---

I'm always happy to share ideas / discussion / collaborate with diverse backgrounds people, feel free to reach out.

Find me here: shoubin -atsign- cs . unc . edu

# 🔥 News
- *2025.10*: 🎖️ SciVideoBench won the $\color{red} {best}$ $\color{red} {benchmark}$ $\color{red} {paper}$ at [ICCV 25 KnowledgeMR workshop](https://knowledgemr-workshop.github.io/)
- *2025.09*: 🇺🇸 1 paper accepted to **ICMI 2025**. 
- *2025.09*: 🇺🇸 1 paper accepted to **NeurIPS 2025**. 
- *2025.08*: 🇨🇳 3 papers accepted to **EMNLP 2025** 
- *2025.06*: 🌊 1 papers accepted to **ICCV 2025**.
- *2025.05*: 🧠 Summer intern at **Google Deepmind**.
- *2025.02*: 💬 Gave an invited talk at **Twelve Labs**.
- *2025.02*: 👀 2 papers accepted to **CVPR 2025**. 
- *2025.01*: 🇸🇬 3 papers accepted to **ICLR 2025**. 
- *2024.09*: 📓 1 paper accepted to **EMNLP 2024**. 
- *2024.07*: 📹 1 paper accepted to **ACMMM 2024**. 
- *2024.06*: 💬 Gave an invited talk at **Google**.
- *2024.05*: 🎬 Summer intern at **Adobe**.
- *2023.09*: ⛓️ 1 paper accepted to **NeurIPS 2023**. 
- *2023.07*: 🦴 1 paper accepted to **IEEE TCSVT**. 
- *2023.05*: 🌞 Summer intern at **Amazon**.
- *2022.09*: ⛪️ Join <a href="https://murgelab.cs.unc.edu/index.html"> **UNC-CH** MURGe-Lab </a>.
- *2022.06*: 🎓 Graduate from **Shanghai Jiao Tong University** (outstanding graduates).
- *2021.10*: 🌟 1 paper accepted to **NeurIPS 2021**. 

# 📝 Pre-print (*: equal contribution/co-first author)


<div class='paper-box'><div class='paper-box-image'><div><div class="badge">Preprint</div><img src='images/scivideobench.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[SciVideoBench: Benchmarking Scientific Video Reasoning in Large Multimodal Models](https://arxiv.org/abs/2510.08559)

Andong Deng, Taojiannan Yang, **Shoubin Yu**, Lincoln Spencer, Mohit Bansal, Chen Chen, Serena Yeung-Levy, Xiaohan Wang

[**Code**](https://github.com/dengandong/SciVideoBench) | [**Project Page**](https://scivideobench.github.io/)
- we introduce SciVideoBench, a rigorous benchmark specifically designed to assess advanced video reasoning in scientific contexts.
</div>
</div>


<div class='paper-box'><div class='paper-box-image'><div><div class="badge">Preprint</div><img src='images/MF2.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[ Movie Facts and Fibs (MF2): A Benchmark for Long Movie Understanding](https://arxiv.org/pdf/2506.06275)

Emmanouil Zaranis, António Farinhas, Saul Santos, Beatriz Canaverde,...**Shoubin Yu**, et al.

[**Code**](https://huggingface.co/datasets/sardinelab/MF2)
- We propose MF2, a new benchmark for evaluating whether models can comprehend, consolidate, and recall key narrative information from full-length movies
</div>
</div>


<div class='paper-box'><div class='paper-box-image'><div><div class="badge">Preprint</div><img src='images/video-msg.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[Training-free Guidance in Text-to-Video Generation via Multimodal Planning and Structured Noise Initialization](https://arxiv.org/abs/2504.08641)

Jialu Li\*, **Shoubin Yu\***,  Han Lin\*, Jaemin Cho, Jaehong Yoon, Mohit Bansal

[**Code**](https://github.com/jialuli-luka/Video-MSG) | [**Project Page**](https://video-msg.github.io/)
- We propose Video-MSG, a training-free guidance method for T2V generation with multimodal planning and structured noise.
</div>
</div>


# 📝 Publications 


<div class='paper-box'><div class='paper-box-image'><div><div class="badge">NeurIPS 2025</div><img src='images/4dlrm.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[4D-LRM: Large Space-Time Reconstruction Model From and To Any View at Any Time](https://arxiv.org/abs/2506.18890)

Ziqiao Ma, Xuweiyi Chen, **Shoubin Yu**, Sai Bi, Kai Zhang, Chen Ziwen, Sihan Xu, Jianing Yang, Zexiang Xu, Kalyan Sunkavalli, Mohit Bansal, Joyce Chai, Hao Tan

[**Code**](https://github.com/Mars-tin/4D-LRM) | [**Project Page**](https://4dlrm.github.io/)
- We introduce 4D-LRM, a data-driven 4D reconstruction model that takes sparse input views at any time and renders arbitrary novel view-time combinations.
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">EMNLP 2025</div><img src='images/raccoon.jpg' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[RACCooN: Remove, Add, and Change Video Content with Auto-Generated Narratives](https://arxiv.org/pdf/2405.18406)

Jaehong Yoon\*, **Shoubin Yu\***, Mohit Bansal

[**Code**](https://github.com/jaehong31/raccoon) | [**Project Page**](https://raccoon-mllm-gen.github.io/)
- We present RACCooN, a versatile and user-friendly video-to-paragraph-to-video framework, enables users to remove, add, or change video content via updating auto-generated narratives.
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">EMNLP 2025</div><img src='images/videorts.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[VIDEO-RTS: Rethinking Reinforcement Learning and Test-Time Scaling for Efficient and Enhanced Video Reasoning](https://arxiv.org/pdf/2507.06485)

Ziyang Wang\*, Jaehong Yoon\*, **Shoubin Yu**, Md Mohaiminul Islam, Gedas Bertasius, Mohit Bansal

[**Code**](https://github.com/Ziyang412/Video-RTS) | [**Project Page**](https://sites.google.com/cs.unc.edu/videorts2025/home)
- We present VIDEO-RTS, a new approach to improve video reasoning capability with drastically improved data efficiency by combining data-efficient RL with a video-adaptive test-time scaling (TTS) strategy. 
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">EMNLP 2025 findings</div><img src='images/mexa.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[MEXA: Towards General Multimodal Reasoning with Dynamic Multi-Expert Aggregation](https://arxiv.org/pdf/2506.17113)

**Shoubin Yu\***,  Yue Zhang\*, Ziyang Wang, Jaehong Yoon, Mohit Bansal

[**Code**](https://github.com/Yui010206/MEXA)
- We introduce MEXA, a general and training-free multimodal reasoning framework via dynamic multi-expert skill selection, aggregation and deep reasoning.
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">ICCV 2025</div><img src='images/veggie.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[VEGGIE: Instructional Editing and Reasoning of Video Concepts with Grounded Generation](https://arxiv.org/abs/2503.14350)

**Shoubin Yu\***, Difan Liu\*, Ziqiao Ma\*, Yicong Hong, Yang Zhou, Hao Tan, Joyce Chai, Mohit Bansal

[**Code**](https://github.com/Yui010206/VEGGIE-VidEdit) | [**Project Page**](https://veggie-gen.github.io/)
- We propose VEGGIE, a unified and versatile video generative model that handles various tasks for both video concept grounding and editing according to user instructions.
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">CVPR 2025</div><img src='images/groundmore.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[Motion-Grounded Video Reasoning: Understanding and Perceiving Motion at Pixel Level](https://arxiv.org/abs/2411.09921)

Andong Deng, Tongjia Chen, **Shoubin Yu**, Taojiannan Yang, Lincoln Spencer, Yapeng Tian, Ajmal Saeed Mian, Mohit Bansal, Chen Chen

[**Code**](https://github.com/dengandong/GroundMoRe) | [**Project Page**](https://groundmore.github.io/)
- We present GroundMoRe, a new benchmark for novel Motion-Grounded Video Reasoning, designed to assess multimodal models' reasoning and perception capabilities for motion understanding. 
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">CVPR 2025</div><img src='images/videotree.jpg' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[VideoTree: Adaptive Tree-based Video Representation for LLM Reasoning on Long Videos](https://arxiv.org/pdf/2405.19209)

Ziyang Wang\*, **Shoubin Yu\***, Elias Stengel-Eskin\*, Jaehong Yoon, Feng Cheng, Gedas Bertasius, Mohit Bansal

[**Code**](https://github.com/Ziyang412/VideoTree) | [**Project Page**](https://videotree2024.github.io/)
- We present VideoTree, an adaptive tree-based video presentation/prompting with simple visual clustering for long video reasoning with LLM. 
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">ICLR 2025</div><img src='images/safree.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[SAFREE: Train-free And Adaptive Guard For Safe Text-to-Image And Video Generation](https://arxiv.org/abs/2410.12761)

Jaehong Yoon\*, **Shoubin Yu\***, Vaidehi Patil, Huaxiu Yao,  Mohit Bansal

[**Code**](https://github.com/jaehong31/SAFREE) | [**Project Page**](https://safree-safe-t2i-t2v.github.io/)
- We propose SAFREE, a concept guard that can zero transfer to any visual diffusion models for safe generation. 
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">ICLR 2025</div><img src='images/crema.jpg' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[CREMA: Generalizable and Efficient Video-Language Reasoning via Multimodal Modular Fusion](https://arxiv.org/pdf/2402.05889.pdf)

**Shoubin Yu\***, Jaehong Yoon\*, Mohit Bansal

[**Code**](https://github.com/Yui010206/CREMA) | [**Project Page**](https://crema-videollm.github.io/)
- We present CREMA, an efficient & modular modality-fusion framework for injecting any new modality into video reasoning.
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">ICLR 2025</div><img src='images/scalevln2.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[Bootstrapping Language-guided Navigation Learning with Self-refining Data Flywheel](https://arxiv.org/abs/2412.08467)

Zun Wang, Jialu Li, Yicong Hong, Songze Li, Kunchang Li, **Shoubin Yu**, Yi Wang, Yu Qiao, Yali Wang, Mohit Bansal, Limin Wang

[**Code**](https://github.com/wz0919/VLN-SRDF)
- We present a Self-Refining Data Flywheel strategy for VLN, surpassing/approaching human performance on several benchmarks.  
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">EMNLP 2024</div><img src='images/llovi.jpg' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[A Simple LLM Framework for Long-Range Video Question-Answering](https://arxiv.org/pdf/2312.17235.pdf)

Ce Zhang, Taixi Lu, Md Mohaiminul Islam, Ziyang Wang, **Shoubin Yu**, Mohit Bansal, Gedas Bertasius

[**Code**](https://github.com/CeeZh/LLoVi) 
- We present LLoVi, a simple yet effective framework with LLM for long-range video question-answering.
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">ACM MM 2024</div><img src='images/iva0.jpg' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[Zero-Shot Controllable Image-to-Video Animation via Motion Decomposition](https://www.amazon.science/publications/zero-shot-controllable-image-to-video-animation-via-motion-decomposition)

**Shoubin Yu**, Jacob Zhiyuan Fang, Skyler Zheng, Gunnar Sigurdsson, Vicente Ordonez, Robinson Piramuthu, Mohit Bansal

[**Code**](https://github.com/Yui010206/IVA-0) | [**Homepage**](https://img2vidanim-0.github.io/)
- We present IVA-0, a Image-to-Video animator, enables precise control from users through in-place and out-of-place motion decomposition.
</div>
</div>


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

**Shoubin Yu**, Zhongyin Zhao, Haoshu Fang, Andong Deng, Haisheng Su, Dongliang Wang, Weihao Gan, Cewu Lu, Wei Wu

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

<!-- # 🎖 Honors and Awards
- Piepie‘s (1-year-old black Shiba-Inu 🐶) Dad, 2024 
- The Hui-Chun Chin and Tsung Dao Lee Scholar, 2020
- Meritorious Award in Mathematical Contest in Modeling, 2019
- Second Prize in Shanghai, China Undergraduate Mathematical Contest in Modeling, 2019 -->

# 🧐 Service & Talk

- *2025.02*: Invited talk at **Twelve Labs**.
- *2024.06*: Invited talk at **Google**.

----

- Conference reviewer: CVPR, ICCV, ECCV, NeurIPS, ICLR, ICML, AISTATS, ARR (ACL, EMNLP, CoNLL, NACCAL, EACL), AAAI, IJCAI 
- Journal reviewer: IEEE Transactions on Pattern Analysis and Machine Intelligence (TPAMI), IEEE Transactions on Circuits and Systems for Video Technology (TCSVT), IEEE Transactions on Neural Networks and Learning Systems (TNNLS), IEEE Transactions on Multimedia (TMM)


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
<div class='paper-box'><div class='paper-box-image'><div><div class="badge"></div><img src='images/deepmind.png' alt="sym" width="55%"></div></div>
<div class='paper-box-text' markdown="1">
- *2025.05 - 2025.11*, Student Researcher
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge"></div><img src='images/adobe.png' alt="sym" width="55%"></div></div>
<div class='paper-box-text' markdown="1">
- *2024.05 - 2025.03*, Research Scientist Intern
</div>
</div>


<div class='paper-box'><div class='paper-box-image'><div><div class="badge"></div><img src='images/amazon.png' alt="sym" width="55%"></div></div>
<div class='paper-box-text' markdown="1">
- *2023.05 - 2023.11*, Research Scientist Intern
</div>
</div>



<div style="display: none;">
    <script type="text/javascript" id="clustrmaps" src="//clustrmaps.com/map_v2.js?d=8VTPTlKP4lJplkK2W5lW_-YLGoIzrMYY0zH3jZOw2ec&cl=ffffff&w=a"></script>
</div>
