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

Hi, thanks for stopping by! I am now a third-year Ph.D. Student at [The University of North Carolina at Chapel Hill](https://www.unc.edu/), advised by [Prof. Mohit Bansal](https://www.cs.unc.edu/~mbansal/). 
I did my undergraduate study at [Shanghai Jiao Tong University](https://en.sjtu.edu.cn/). 

I also work at Amazon (2023) / Adobe Research (2024) / Google Deepmind (2025). 

My research focuses on multimodal AI, exploring how we can enable AI models to perceive and understand the world in a way similar to humans.

I develop and enhance models/systems capable of effectively and efficiently perceiving and inferring from the dynamic and diverse multimodal world. 
My work aims to enable AI to assist humans in understanding complex multimodal content for advanced reasoning and manipulation, contributing to a broad spectrum of downstream applications (sports, security, medical, and educational domains), and fostering the development of more adaptable and intelligent video-based AI systems. They are: 

- **Multimodal Reasoning Benchmarks/Methods**: [MEXA](https://arxiv.org/pdf/2506.17113) (ArXiv25), [SeViLA](https://arxiv.org/abs/2305.06988) (NeurIPS23), [CREMA](https://arxiv.org/abs/2402.05889) (ICLR25), [GroundMoRe](https://arxiv.org/abs/2411.09921) (CVPR25), [STAR](https://arxiv.org/abs/2405.09711) (NeurIPS21)

- **Visual Editing/Generative Methods**: [VEGGIE](https://arxiv.org/abs/2503.14350) (ArXiv25), [SAFREE](https://arxiv.org/abs/2410.12761) (ICLR25), [RACCooN](https://arxiv.org/abs/2405.18406) (ArXiv24)

- **Multimodal Representation / Feature Engineering**: [LLoVi](https://arxiv.org/abs/2312.17235)(EMNLP24), [VideoTree](https://arxiv.org/abs/2405.19209) (CVPR25), [MoPRL](https://arxiv.org/abs/2112.03649) (TCSVT23)

Find me here: shoubin -atsign- cs . unc . edu

# 🔥 News
- *2025.05*: 🧠 Summer intern at **Google Deepmind**.
- *2025.03*: 🥦 VEGGIE is on arXiv.
- *2025.02*: 💬 Gave an invited talk at **Twelve Labs**.
- *2025.02*: 👀 2 papers accepted to **CVPR 2025**. Check VideoTree for dynamic/adaptive keyframe selection with LLM, GroundMoRe for a new motion-grounded video reasoning task.
- *2025.01*: 🇸🇬 3 papers accepted to **ICLR 2025**. Check ☕CREMA for video+any modality reasoning, SAFREE for training-free safe visual generation, and ⛓️SRDF for human-level VL-Navigation.
- *2024.09*: 📓 1 paper accepted to **EMNLP 2024**. Check LLoVi for long VideoQA with LLM.
- *2024.07*: 📹 1 paper accepted to **ACMMM 2024**. Check IVA-0 for controllable image animation.
- *2024.06*: 💬 Gave an invited talk at **Google**.
- *2024.05*: 🎬 Summer intern at **Adobe**.
- *2023.09*: ⛓️ 1 paper accepted to **NeurIPS 2023**. Check SeViLA for Video Loc+QA.
- *2023.07*: 🦴 1 paper accepted to **IEEE TCSVT**. Check MoPRL for skeletal anomaly detection.
- *2023.05*: 🌞 Summer intern at **Amazon**.
- *2022.09*: ⛪️ Join <a href="https://murgelab.cs.unc.edu/index.html"> **UNC-CH** MURGe-Lab </a>.
- *2022.06*: 🎓 Graduate from **Shanghai Jiao Tong University** (outstanding graduates).
- *2021.10*: 🌟 1 paper accepted to **NeurIPS 2021**. Check STAR for real-world situated reasoning.

# 📝 Pre-print (*: equal contribution/co-first author)


<div class='paper-box'><div class='paper-box-image'><div><div class="badge">Preprint</div><img src='images/mexa.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[MEXA: Towards General Multimodal Reasoning with Dynamic Multi-Expert Aggregation](https://arxiv.org/pdf/2506.17113)

**Shoubin Yu\***,  Yue Zhang\*, Ziyang Wang, Jaehong Yoon, Mohit Bansal

[**Code**](https://github.com/Yui010206/MEXA)
- We introduce MEXA, a general and training-free multimodal reasoning framework via dynamic multi-expert skill selection, aggregation and deep reasoning.
</div>
</div>


<div class='paper-box'><div class='paper-box-image'><div><div class="badge">Preprint</div><img src='images/mf2.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[ Movie Facts and Fibs (MF2): A Benchmark for Long Movie Understanding](https://arxiv.org/pdf/2506.06275)

Emmanouil Zaranis, António Farinhas, Saul Santos, Beatriz Canaverde,...**Shoubin Yu\***, et al.

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

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">Preprint</div><img src='images/veggie.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[VEGGIE: Instructional Editing and Reasoning of Video Concepts with Grounded Generation](https://arxiv.org/abs/2503.14350)

**Shoubin Yu\***, Difan Liu\*, Ziqiao Ma\*, Yicong Hong, Yang Zhou, Hao Tan, Joyce Chai, Mohit Bansal

[**Code**](https://github.com/Yui010206/VEGGIE-VidEdit) | [**Project Page**](https://veggie-gen.github.io/)
- We propose VEGGIE, a unified and versatile video generative model that handles various tasks for both video concept grounding and editing according to user instructions.
</div>
</div>


<div class='paper-box'><div class='paper-box-image'><div><div class="badge">Preprint</div><img src='images/raccoon.jpg' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[RACCooN: Remove, Add, and Change Video Content with Auto-Generated Narratives](https://arxiv.org/pdf/2405.18406)

Jaehong Yoon\*, **Shoubin Yu\***, Mohit Bansal

[**Code**](https://github.com/jaehong31/raccoon) | [**Project Page**](https://raccoon-mllm-gen.github.io/)
- We present RACCooN, a versatile and user-friendly video-to-paragraph-to-video framework, enables users to remove, add, or change video content via updating auto-generated narratives.
</div>
</div>



# 📝 Publications 

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
- The summer is end, I lost you forever, I will be stronger to beat the past, Lyle. 2025
- Piepie‘s (1-year-old black Shiba-Inu 🐶) Dad, 2024 
- The Hui-Chun Chin and Tsung Dao Lee Scholar, 2020
- Meritorious Award in Mathematical Contest in Modeling, 2019
- Second Prize in Shanghai, China Undergraduate Mathematical Contest in Modeling, 2019 -->

# 🧐 Service
- Conference reviewer: CVPR, ICCV, ECCV, NeurIPS, ICLR, ICML, AISTATS, ARR (ACL, EMNLP, CoNLL, NACCAL, EACL), AAAI 
- Journal reviewer: IEEE Transactions on Circuits and Systems for Video Technology (TCSVT), IEEE Transactions on Neural Networks and Learning Systems (TNNLS), IEEE Transactions on Multimedia (TMM)


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
- *2024.05 - 2025.03*, Student Researcher
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
