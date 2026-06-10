import fromVideoPerceptionToAgentsBlog from './content/from_video_perception_to_agents_blog.md?raw'
import fromVideoPerceptionToAgentsBlogZh from './content/from_video_perception_to_agents_blog.zh.md?raw'

export const PUBLICATION_SUBTOPICS = [
  { id: 'multimodal-understanding', label: 'Multimodal Understanding' },
  { id: 'representation-learning', label: 'Representation Learning' },
  { id: 'generation-world-model', label: 'Generation and World Model' },
  { id: 'benchmark', label: 'Benchmark' },
] as const

export type PublicationSubtopicId = (typeof PUBLICATION_SUBTOPICS)[number]['id']

export type Publication = {
  title: string
  authors: string
  venue: string
  year: number
  summary: string
  tags: string[]
  /** For “By topic” archive view; a paper may belong to multiple sub-topics. */
  subtopics: PublicationSubtopicId[]
  links: { label: string; href: string }[]
  /** Teaser image, e.g. `/projects/visioncoach.jpg` (file under `public/projects/`). */
  image?: string
  imageAlt?: string
  /** Optional award line (e.g. best paper at a workshop). */
  award?: string
}

/** True when the venue is the generic arXiv-style preprint label (used for sort / grouping order). */
export function isPreprintVenue(venue: string): boolean {
  return /^preprint$/i.test(venue.trim())
}

export type EducationItem = {
  period: string
  school: string
  degree: string
  logo?: string
}

export type InternshipItem = {
  period: string
  org: string
  role: string
  logo?: string
}

export type ProfileLinkVariant = 'scholar' | 'github' | 'cv' | 'email' | 'twitter'

export type ProfileLink = {
  label: string
  href: string
  variant: ProfileLinkVariant
}

export const profile = {
  photo: '/shoubin.jpg',
  photoAlt: 'Shoubin Yu',
  name: 'Shoubin Yu',
  role: 'Ph.D. Student in Computer Science\nUNC Chapel Hill',
  tagline:
    'Generative multimodal AI, video-language understanding & generation, AI safety, and efficient training and scaled inference for large models.',
  location: 'North Carolina, US',
  email: 'shoubin@cs.unc.edu',
  bio: `Fourth-year PhD student at MURGe-Lab (UNC-NLP) at UNC Chapel Hill, advised by Prof. Mohit Bansal. B.Eng. from Shanghai Jiao Tong University (2022).`,
  contactBlurb: `I'm always happy to share ideas, discussion, and collaboration with people from diverse backgrounds—feel free to reach out.`,
  links: [
    {
      label: 'Google Scholar',
      href: 'https://scholar.google.com/citations?user=UqC5AoMAAAAJ&hl=en&oi=ao',
      variant: 'scholar',
    },
    { label: 'GitHub', href: 'https://github.com/Yui010206', variant: 'github' },
    {
      label: 'CV',
      href: 'https://drive.google.com/file/d/1PmaeZfLzzoqp-3PCBwAkp29_JAWuJaVE/view?usp=sharing',
      variant: 'cv',
    },
    { label: 'Email', href: 'mailto:shoubin@cs.unc.edu', variant: 'email' },
    { label: 'X (Twitter)', href: 'https://x.com/shoubin621', variant: 'twitter' },
  ] satisfies ProfileLink[],
}

export const aboutParagraphs = [
  `Hi, thanks for stopping by! I am now a fourth-year PhD student at MURGe-Lab (UNC-NLP Group) at the University of North Carolina, Chapel Hill, working with Prof. Mohit Bansal.`,
  `Prior to joining UNC, I completed my undergraduate studies at Shanghai Jiao Tong University (SJTU) in 2022.`,
  `I also work at/with MIT-IBM Watson AI Lab (2021), Amazon (2023), Adobe Research (2024), and Google DeepMind (2025, 2026).`,
  `My research focuses on generative multimodal AI and robust, privacy-preserving AI systems. I build models and frameworks that can efficiently perceive, reason, and generate across the dynamic, diverse multimodal world.`,
  `My work spans multimodal representation learning, video-language understanding and generation, AI safety, and efficient training and scaling inference for large models, with applications across sports, security, medical, and educational domains.`,
]

/** Statement: sparse `**idea**` + `[[Paper]]` for abbreviations. */
export const heroFocus = {
  title: 'Current Research statement',
  headline: 'A System-Level View of Multimodal Intelligence in Dynamic Environments',
  intro: {
    preamble: 'I view modern AI as a **unified pipeline**:',
    pipeline: 'Data → Model → Training → Test-time (inference and evaluation)',
    afterPipeline: `Whether a system is meaningfully multimodal is largely determined by how data are represented and how the model is built; training and test-time computation then govern how reliably that capability shows up in practice. Based on this perspective, I build my research across these components, targeting **key challenges at each stage**.`,
  },
  paragraphs: [
    `On the data side, I study how to transform long-form multimodal inputs—especially videos—into structured and task-relevant representations. My work, including [[VEGGIE]], [[4D-LRM]], and [[Video-RTS]], focuses on selecting and organizing visual-temporal signals to better support downstream reasoning.`,
    `At the model level, I develop multimodal architectures that integrate perception, reasoning, and generation. Across [[VEGGIE]], [[4D-LRM]], [[CREMA]], [[MoPRL]], and [[MEXA]], I explore how to build models that can ingest and operate over arbitrary modalities within a **unified representation space**, while preserving compositional structure.`,
    `For training, I design learning strategies that support structured reasoning beyond standard supervision. My work in [[VEGGIE]], [[4D-LRM]], [[CREMA]], [[SeViLA]], and [[VisionCoach]] emphasizes **modular learning** and multi-stage optimization aligned with complex multimodal tasks.`,
    `At test time, I study test-time scaling under real-world constraints. Through [[VideoTree]], [[AVIC]], [[SAFREE]], and [[Video-RTS]], I develop methods for **adaptive computation** and efficient inference to support structured reasoning over complex inputs.`,
    `In evaluation, I design benchmarks and metrics that measure performance under concrete settings such as real-world agents and AI for science. My work, including [[VEGGIE]], [[SciVideoBench]], [[Ego2Web]], [[EgoMemReason]], and [[STAR]], focuses on testing whether models can handle multi-step reasoning, grounding, and decision-making in realistic scenarios, and using these signals to guide improvements across the system.`,
    `Overall, my research aims to develop multimodal AI systems through a **unified, system-level approach**, where data, training, model, and test-time computation are co-designed to support robust reasoning and generalization in dynamic environments.`,
  ],
}

export const education: EducationItem[] = [
  {
    period: '2022.09 – Present',
    school: 'The University of North Carolina at Chapel Hill',
    degree: 'Computer Science, Ph.D.',
    logo: '/projects/unc_logo.png',
  },
  {
    period: '2017.09 – 2022.06',
    school: 'Shanghai Jiao Tong University',
    degree: 'Information Security, B.Eng.',
    logo: '/projects/sjtu_logo.png',
  },
]

export const internships: InternshipItem[] = [
  { period: '2026.05 – 2026.08', org: 'Google DeepMind', role: 'Student Researcher', logo: '/projects/deepmind.png' },
  { period: '2025.05 – 2025.11', org: 'Google DeepMind', role: 'Student Researcher', logo: '/projects/deepmind.png' },
  { period: '2024.05 – 2025.03', org: 'Adobe Research', role: 'Research Scientist Intern', logo: '/projects/adobe.png' },
  { period: '2023.05 – 2023.11', org: 'Amazon', role: 'Research Scientist Intern', logo: '/projects/amazon.png' },
  {
    period: '2021',
    org: 'MIT-IBM Watson AI Lab',
    role: 'Research collaboration',
    logo: '/projects/ibm_watson_ai_lab.jpg',
  },
]

export const serviceAndTalk = {
  talks: [
    '2025.02: Invited talk at Twelve Labs.',
    '2024.06: Invited talk at Google.',
  ],
  reviewing: [
    'Conference reviewer: CVPR, ICCV, ECCV, NeurIPS, ICLR, ICML, AISTATS, ARR (ACL, EMNLP, CoNLL, NAACL, EACL), AAAI, IJCAI',
    'Journal reviewer: IEEE TPAMI, IEEE TCSVT, IEEE TNNLS, IEEE TMM',
  ],
}

const publicationSourceRaw: Omit<Publication, 'subtopics'>[] = [
  {
    title: 'VisionCoach: Reinforcing Grounded Video Reasoning via Visual-Perception Prompting',
    authors: 'Daeun Lee, Shoubin Yu, Yue Zhang, Mohit Bansal',
    venue: 'Preprint',
    year: 2026,
    summary:
      'RL + self-distillation that adaptively selects visual prompting to augment perception on hard examples.',
    tags: ['Video reasoning', 'RL'],
    links: [
      { label: 'Paper', href: 'https://arxiv.org/abs/2603.14659' },
      { label: 'Project', href: 'https://visioncoach.github.io/' },
      { label: 'Code', href: 'https://github.com/daeunni/VisionCoach' },
    ],
    image: '/projects/visioncoach.png',
  },
  {
    title: 'When and How Much to Imagine: Adaptive Test-Time Scaling with World Models for Visual Spatial Reasoning',
    authors: 'Shoubin Yu*, Yue Zhang*, Zun Wang, Jaehong Yoon, Huaxiu Yao, Mingyu Ding, Mohit Bansal',
    venue: 'Preprint',
    year: 2026,
    summary: 'AVIC: adaptive test-time scaling via world-model imagination for visual spatial reasoning.',
    tags: ['Test-time scaling', 'World models'],
    links: [
      { label: 'Paper', href: 'https://arxiv.org/abs/2602.08236' },
      { label: 'Project', href: 'https://adaptive-visual-tts.github.io/' },
      { label: 'Code', href: 'https://github.com/Yui010206/Adaptive-Visual-Imagination-Control/' },
    ],
    image: '/projects/avic.png',
  },
  {
    title: 'SciVideoBench: Benchmarking Scientific Video Reasoning in Large Multimodal Models',
    authors:
      'Andong Deng, Taojiannan Yang, Shoubin Yu, Lincoln Spencer, Mohit Bansal, Chen Chen, Serena Yeung-Levy, Xiaohan Wang',
    venue: 'ICML 2026',
    year: 2026,
    summary: 'Benchmark for advanced scientific video reasoning in LMMs.',
    tags: ['Benchmark', 'Video'],
    links: [
      { label: 'Paper', href: 'https://arxiv.org/abs/2510.08559' },
      { label: 'Project', href: 'https://scivideobench.github.io/' },
      { label: 'Code', href: 'https://github.com/dengandong/SciVideoBench' },
    ],
    image: '/projects/scivideobench.png',
    award: 'ICCV 2025 KnowledgeMR workshop · Best Benchmark Paper',
  },
  {
    title: 'Movie Facts and Fibs (MF2): A Benchmark for Long Movie Understanding',
    authors: 'Emmanouil Zaranis, António Farinhas, Saul Santos, Beatriz Canaverde, … Shoubin Yu, et al.',
    venue: 'Preprint',
    year: 2025,
    summary: 'Evaluating comprehension and recall of narrative information from full-length movies.',
    tags: ['Benchmark', 'Long video'],
    links: [
      { label: 'Paper', href: 'https://arxiv.org/pdf/2506.06275' },
      { label: 'Code', href: 'https://huggingface.co/datasets/sardinelab/MF2' },
    ],
    image: '/projects/MF2.png',
  },
  {
    title: 'Training-free Guidance in Text-to-Video Generation via Multimodal Planning and Structured Noise Initialization',
    authors: 'Jialu Li*, Shoubin Yu*, Han Lin*, Jaemin Cho, Jaehong Yoon, Mohit Bansal',
    venue: 'Preprint',
    year: 2025,
    summary: 'Video-MSG: training-free T2V guidance with multimodal planning and structured noise init.',
    tags: ['Video generation'],
    links: [
      { label: 'Paper', href: 'https://arxiv.org/abs/2504.08641' },
      { label: 'Project', href: 'https://video-msg.github.io/' },
      { label: 'Code', href: 'https://github.com/jialuli-luka/Video-MSG' },
    ],
    image: '/projects/video-msg.png',
  },
  {
    title: 'EgoMemReason: A Memory-Driven Reasoning Benchmark for Long-Horizon Egocentric Video Understanding',
    authors:
      'Ziyang Wang*, Yue Zhang*, Shoubin Yu, Ce Zhang, Zengqi Zhao, Jaehong Yoon, Hyunji Lee, Gedas Bertasius, Mohit Bansal',
    venue: 'Preprint',
    year: 2026,
    summary:
      'Week-long egocentric benchmark for memory-driven reasoning—entity, event, and behavior memory across sparse, long-horizon evidence.',
    tags: ['Benchmark', 'Egocentric video', 'Memory'],
    links: [
      { label: 'Paper', href: 'https://arxiv.org/pdf/2605.09874' },
      { label: 'Project', href: 'https://egomemreason.github.io/' },
    ],
    image: '/images/egomemreason.png',
    imageAlt: 'EgoMemReason benchmark teaser',
  },
  {
    title: 'STORM: Internalized Modeling for Spatial-Temporal Reasoning in Video-Language Models',
    authors:
      'Yiming Liang, Yixiao Chen*, Yiyang Zhou, Yixuan Wang, Shoubin Yu, Andong Deng, Fuxiao Liu, Qin Zhang, Chen Chen, Mohit Bansal, Huaxiu Yao',
    venue: 'Preprint',
    year: 2026,
    summary:
      'Two-stage framework that internalizes spatial-temporal video reasoning in bounded latent trajectories, using thought-video supervision at training time without external tools at inference.',
    tags: ['Video reasoning', 'Latent reasoning'],
    links: [
      { label: 'Paper', href: 'https://arxiv.org/pdf/2605.26014' },
      { label: 'Code', href: 'https://github.com/aiming-lab/storm' },
    ],
    image: '/images/storm.png',
    imageAlt: 'STORM spatial-temporal reasoning framework',
  },
  {
    title: 'Ego2Web: A Web Agent Benchmark Grounded in Egocentric Videos',
    authors:
      'Shoubin Yu, Lei Shu, Antoine Yang, Yao Fu, Srinivas Sunkara, Maria Wang, Jindong Chen, Mohit Bansal, Boqing Gong',
    venue: 'CVPR 2026',
    year: 2026,
    summary:
      'First benchmark pairing egocentric video with real web tasks (perception, planning, and online interaction); includes Ego2WebJudge, an LLM-as-judge evaluator with strong human agreement.',
    tags: ['Video Understanding', 'Web Agent'],
    links: [
      { label: 'Paper', href: 'https://arxiv.org/abs/2603.22529' },
      { label: 'Project', href: 'https://ego2web.github.io/' },
      { label: 'Code', href: 'https://ego2web.github.io/' },
    ],
    image: '/projects/ego2web.png',
  },
  {
    title: 'Prune-Then-Plan: Step-Level Calibration for Stable Frontier Exploration in Embodied Question Answering',
    authors: 'Noah Frahm, Prakrut Patel, Yue Zhang, Shoubin Yu, Mohit Bansal, Roni Sengupta',
    venue: 'CVPR 2026 Findings',
    year: 2026,
    summary: 'Helps embodied agents explore 3D scenes more stably for embodied QA.',
    tags: ['Embodied AI'],
    links: [
      { label: 'Paper', href: 'https://arxiv.org/pdf/2511.19768' },
      { label: 'Project', href: 'https://noahfrahm.github.io/Prune-Then-Plan-project-page/' },
    ],
    image: '/projects/prune.png',
  },
  {
    title: '4D-LRM: Large Space-Time Reconstruction Model From and To Any View at Any Time',
    authors:
      'Ziqiao Ma, Xuweiyi Chen, Shoubin Yu, Sai Bi, Kai Zhang, Chen Ziwen, Sihan Xu, Jianing Yang, Zexiang Xu, Kalyan Sunkavalli, Mohit Bansal, Joyce Chai, Hao Tan',
    venue: 'NeurIPS 2025',
    year: 2025,
    summary: '4D reconstruction from sparse views at any time; render arbitrary novel view-time combinations.',
    tags: ['4D', 'Reconstruction'],
    links: [
      { label: 'Paper', href: 'https://arxiv.org/abs/2506.18890' },
      { label: 'Project', href: 'https://4dlrm.github.io/' },
      { label: 'Code', href: 'https://github.com/Mars-tin/4D-LRM' },
    ],
    image: '/projects/4dlrm.png',
  },
  {
    title: 'RACCooN: Remove, Add, and Change Video Content with Auto-Generated Narratives',
    authors: 'Jaehong Yoon*, Shoubin Yu*, Mohit Bansal',
    venue: 'EMNLP 2025',
    year: 2025,
    summary: 'Video-to-paragraph-to-video editing by updating auto-generated narratives.',
    tags: ['Video editing'],
    links: [
      { label: 'Paper', href: 'https://arxiv.org/pdf/2405.18406' },
      { label: 'Project', href: 'https://raccoon-mllm-gen.github.io/' },
      { label: 'Code', href: 'https://github.com/jaehong31/raccoon' },
    ],
    image: '/projects/raccoon.jpg',
  },
  {
    title: 'VIDEO-RTS: Rethinking Reinforcement Learning and Test-Time Scaling for Efficient and Enhanced Video Reasoning',
    authors: 'Ziyang Wang*, Jaehong Yoon*, Shoubin Yu, Md Mohaiminul Islam, Gedas Bertasius, Mohit Bansal',
    venue: 'EMNLP 2025',
    year: 2025,
    summary: 'Data-efficient RL plus video-adaptive test-time scaling for video reasoning.',
    tags: ['Video reasoning', 'RL'],
    links: [
      { label: 'Paper', href: 'https://arxiv.org/pdf/2507.06485' },
      { label: 'Project', href: 'https://sites.google.com/cs.unc.edu/videorts2025/home' },
      { label: 'Code', href: 'https://github.com/Ziyang412/Video-RTS' },
    ],
    image: '/projects/videorts.png',
  },
  {
    title: 'MEXA: Towards General Multimodal Reasoning with Dynamic Multi-Expert Aggregation',
    authors: 'Shoubin Yu*, Yue Zhang*, Ziyang Wang, Jaehong Yoon, Mohit Bansal',
    venue: 'EMNLP 2025 Findings',
    year: 2025,
    summary: 'Training-free multimodal reasoning via dynamic multi-expert selection and aggregation.',
    tags: ['Multimodal reasoning'],
    links: [
      { label: 'Paper', href: 'https://arxiv.org/pdf/2506.17113' },
      { label: 'Code', href: 'https://github.com/Yui010206/MEXA' },
    ],
    image: '/projects/mexa.png',
  },
  {
    title: 'VEGGIE: Instructional Editing and Reasoning of Video Concepts with Grounded Generation',
    authors:
      'Shoubin Yu*, Difan Liu*, Ziqiao Ma*, Yicong Hong, Yang Zhou, Hao Tan, Joyce Chai, Mohit Bansal',
    venue: 'ICCV 2025',
    year: 2025,
    summary:
      'First end-to-end framework for multi-task instructional video editing: a systematic pipeline across data, model, training, evaluation, and benchmark design.',
    tags: ['Video Editing', 'MLLM+Diffusion'],
    links: [
      { label: 'Paper', href: 'https://arxiv.org/abs/2503.14350' },
      { label: 'Project', href: 'https://veggie-gen.github.io/' },
      { label: 'Code', href: 'https://github.com/Yui010206/VEGGIE-VidEdit' },
    ],
    image: '/projects/veggie.png',
  },
  {
    title: 'Motion-Grounded Video Reasoning: Understanding and Perceiving Motion at Pixel Level',
    authors:
      'Andong Deng, Tongjia Chen, Shoubin Yu, Taojiannan Yang, Lincoln Spencer, Yapeng Tian, Ajmal Saeed Mian, Mohit Bansal, Chen Chen',
    venue: 'CVPR 2025',
    year: 2025,
    summary: 'GroundMoRe: benchmark for motion-grounded video reasoning and perception.',
    tags: ['Benchmark', 'Motion'],
    links: [
      { label: 'Paper', href: 'https://arxiv.org/abs/2411.09921' },
      { label: 'Project', href: 'https://groundmore.github.io/' },
      { label: 'Code', href: 'https://github.com/dengandong/GroundMoRe' },
    ],
    image: '/projects/groundmore.png',
  },
  {
    title: 'VideoTree: Adaptive Tree-based Video Representation for LLM Reasoning on Long Videos',
    authors: 'Ziyang Wang*, Shoubin Yu*, Elias Stengel-Eskin*, Jaehong Yoon, Feng Cheng, Gedas Bertasius, Mohit Bansal',
    venue: 'CVPR 2025',
    year: 2025,
    summary: 'Tree-based video prompting with visual clustering for long-video LLM reasoning.',
    tags: ['Long video', 'Reasoning'],
    links: [
      { label: 'Paper', href: 'https://arxiv.org/pdf/2405.19209' },
      { label: 'Project', href: 'https://videotree2024.github.io/' },
      { label: 'Code', href: 'https://github.com/Ziyang412/VideoTree' },
    ],
    image: '/projects/videotree.jpg',
  },
  {
    title: 'SAFREE: Train-free And Adaptive Guard For Safe Text-to-Image And Video Generation',
    authors: 'Jaehong Yoon*, Shoubin Yu*, Vaidehi Patil, Huaxiu Yao, Mohit Bansal',
    venue: 'ICLR 2025',
    year: 2025,
    summary: 'Concept guard that zero-shot transfers to visual diffusion models for safer generation.',
    tags: ['Safety', 'Diffusion'],
    links: [
      { label: 'Paper', href: 'https://arxiv.org/abs/2410.12761' },
      { label: 'Project', href: 'https://safree-safe-t2i-t2v.github.io/' },
      { label: 'Code', href: 'https://github.com/jaehong31/SAFREE' },
    ],
    image: '/projects/safree.png',
  },
  {
    title: 'CREMA: Generalizable and Efficient Video-Language Reasoning via Multimodal Modular Fusion',
    authors: 'Shoubin Yu*, Jaehong Yoon*, Mohit Bansal',
    venue: 'ICLR 2025',
    year: 2025,
    summary:
      'Video plus any modality: a modular fusion framework to inject arbitrary new modalities into video-language reasoning.',
    tags: ['Modular Training', 'Any Modality'],
    links: [
      { label: 'Paper', href: 'https://arxiv.org/pdf/2402.05889.pdf' },
      { label: 'Project', href: 'https://crema-videollm.github.io/' },
      { label: 'Code', href: 'https://github.com/Yui010206/CREMA' },
    ],
    image: '/projects/crema.jpg',
  },
  {
    title: 'Bootstrapping Language-guided Navigation Learning with Self-refining Data Flywheel',
    authors:
      'Zun Wang, Jialu Li, Yicong Hong, Songze Li, Kunchang Li, Shoubin Yu, Yi Wang, Yu Qiao, Yali Wang, Mohit Bansal, Limin Wang',
    venue: 'ICLR 2025',
    year: 2025,
    summary: 'Self-refining data flywheel for VLN approaching human performance on several benchmarks.',
    tags: ['Navigation', 'VLN'],
    links: [
      { label: 'Paper', href: 'https://arxiv.org/abs/2412.08467' },
      { label: 'Code', href: 'https://github.com/wz0919/VLN-SRDF' },
    ],
    image: '/projects/scalevln2.png',
  },
  {
    title: 'A Simple LLM Framework for Long-Range Video Question-Answering',
    authors: 'Ce Zhang, Taixi Lu, Md Mohaiminul Islam, Ziyang Wang, Shoubin Yu, Mohit Bansal, Gedas Bertasius',
    venue: 'EMNLP 2024',
    year: 2024,
    summary: 'LLoVi: simple LLM framework for long-range video QA.',
    tags: ['Video QA', 'LLM'],
    links: [
      { label: 'Paper', href: 'https://arxiv.org/pdf/2312.17235.pdf' },
      { label: 'Code', href: 'https://github.com/CeeZh/LLoVi' },
    ],
    image: '/projects/llovi.jpg',
  },
  {
    title: 'Zero-Shot Controllable Image-to-Video Animation via Motion Decomposition',
    authors: 'Shoubin Yu, Jacob Zhiyuan Fang, Skyler Zheng, Gunnar Sigurdsson, Vicente Ordonez, Robinson Piramuthu, Mohit Bansal',
    venue: 'ACM MM 2024',
    year: 2024,
    summary: 'IVA-0: in-place and out-of-place motion decomposition for controllable I2V.',
    tags: ['Image-to-video'],
    links: [
      { label: 'Paper', href: 'https://www.amazon.science/publications/zero-shot-controllable-image-to-video-animation-via-motion-decomposition' },
      { label: 'Homepage', href: 'https://img2vidanim-0.github.io/' },
      { label: 'Code', href: 'https://github.com/Yui010206/IVA-0' },
    ],
    image: '/projects/iva0.jpg',
  },
  {
    title: 'Self-Chained Image-Language Model for Video Localization and Question Answering',
    authors: 'Shoubin Yu, Jaemin Cho, Prateek Yadav, Mohit Bansal',
    venue: 'NeurIPS 2023',
    year: 2023,
    summary:
      'First agentic method for video QA and localization: self-chained BLIP-2 for temporal localization and question answering, with iterative feedback refinement.',
    tags: ['Video Reasoning', 'Agentic Multimodal Understand'],
    links: [
      { label: 'Paper', href: 'https://arxiv.org/pdf/2305.06988.pdf' },
      { label: 'Code', href: 'https://github.com/Yui010206/SeViLA/' },
      { label: 'Demo', href: 'https://huggingface.co/spaces/SeViLA/SeViLA' },
      { label: 'Talk', href: 'https://www.youtube.com/watch?v=AIdXfZlFGS0' },
    ],
    image: '/projects/sevila.jpg',
  },
  {
    title: 'Regularity Learning via Explicit Distribution Modeling for Skeletal Video Anomaly Detection',
    authors: 'Shoubin Yu, Zhongyin Zhao, Haoshu Fang, Andong Deng, Haisheng Su, Dongliang Wang, Weihao Gan, Cewu Lu, Wei Wu',
    venue: 'IEEE TCSVT 2023',
    year: 2023,
    summary: 'MoPRL: transformer with skeletal motion prior for video anomaly detection.',
    tags: ['Video', 'Anomaly'],
    links: [
      { label: 'Paper', href: 'https://ieeexplore.ieee.org/document/10185076' },
      { label: 'Code', href: 'https://github.com/Yui010206/MoPRL' },
    ],
    image: '/projects/moprl.jpg',
  },
  {
    title: 'STAR: A Benchmark for Situated Reasoning in Real-World Videos',
    authors: 'Bo Wu, Shoubin Yu, Zhenfang Chen, Joshua B. Tenenbaum, Chuang Gan',
    venue: 'NeurIPS 2021',
    year: 2021,
    summary: 'Neuro-symbolic video reasoning benchmark in real-world scenes.',
    tags: ['Benchmark', 'Reasoning'],
    links: [
      { label: 'Paper', href: 'https://datasets-benchmarks-proceedings.neurips.cc/paper/2021/hash/5ef059938ba799aaa845e1c2e8a762bd-Abstract-round2.html' },
      { label: 'Project', href: 'http://star.csail.mit.edu/' },
      { label: 'Code', href: 'https://github.com/csbobby/STAR_Benchmark' },
    ],
    image: '/projects/star.jpg',
  },
  {
    title: 'A benchmark of expert-level academic questions to assess AI capabilities',
    authors: 'Center for AI Safety, Scale AI & HLE Contributors Consortium',
    venue: 'Nature',
    year: 2026,
    summary:
      "Humanity's Last Exam (HLE): a large-scale benchmark of expert-level academic questions across disciplines to assess frontier AI capabilities.",
    tags: ['Benchmark', 'Evaluation'],
    links: [
      { label: 'Paper', href: 'https://www.nature.com/articles/s41586-025-09962-4' },
      { label: 'Project', href: 'https://lastexam.ai' },
    ],
    image: '/projects/hle.png',
    imageAlt: "Humanity's Last Exam (HLE) benchmark",
  },
  {
    title: 'Balancing Faithfulness and Performance in Reasoning via Multi-Listener Soft Execution',
    authors: 'Nithin Sivakumaran, Shoubin Yu, Hyunji Lee, Yue Zhang, Ali Payani, Mohit Bansal, Elias Stengel-Eskin',
    venue: 'Preprint',
    year: 2026,
    summary:
      'REMUL: multi-listener reinforcement learning to improve chain-of-thought faithfulness while maintaining accuracy on challenging reasoning tasks.',
    tags: ['Reasoning', 'Interpretability'],
    links: [
      { label: 'Paper', href: 'https://arxiv.org/abs/2602.16154' },
      { label: 'Code', href: 'https://github.com/nsivaku/remul' },
    ],
    image: '/projects/remul.png',
    imageAlt: 'REMUL multi-listener reinforcement learning for faithful reasoning',
  },
]

const publicationSubtopicsByTitle: Record<string, PublicationSubtopicId[]> = {
  'VisionCoach: Reinforcing Grounded Video Reasoning via Visual-Perception Prompting': ['multimodal-understanding'],
  'When and How Much to Imagine: Adaptive Test-Time Scaling with World Models for Visual Spatial Reasoning': [
    'generation-world-model',
  ],
  'SciVideoBench: Benchmarking Scientific Video Reasoning in Large Multimodal Models': ['benchmark'],
  'Movie Facts and Fibs (MF2): A Benchmark for Long Movie Understanding': ['benchmark'],
  'Training-free Guidance in Text-to-Video Generation via Multimodal Planning and Structured Noise Initialization': [
    'generation-world-model',
  ],
  'EgoMemReason: A Memory-Driven Reasoning Benchmark for Long-Horizon Egocentric Video Understanding': ['benchmark'],
  'STORM: Internalized Modeling for Spatial-Temporal Reasoning in Video-Language Models': ['multimodal-understanding'],
  'Ego2Web: A Web Agent Benchmark Grounded in Egocentric Videos': ['benchmark'],
  'Prune-Then-Plan: Step-Level Calibration for Stable Frontier Exploration in Embodied Question Answering': [
    'multimodal-understanding',
  ],
  '4D-LRM: Large Space-Time Reconstruction Model From and To Any View at Any Time': [
    'generation-world-model',
    'representation-learning',
  ],
  'RACCooN: Remove, Add, and Change Video Content with Auto-Generated Narratives': ['generation-world-model'],
  'VIDEO-RTS: Rethinking Reinforcement Learning and Test-Time Scaling for Efficient and Enhanced Video Reasoning': [
    'multimodal-understanding',
  ],
  'MEXA: Towards General Multimodal Reasoning with Dynamic Multi-Expert Aggregation': [
    'multimodal-understanding',
    'representation-learning',
  ],
  'VEGGIE: Instructional Editing and Reasoning of Video Concepts with Grounded Generation': ['generation-world-model'],
  'Motion-Grounded Video Reasoning: Understanding and Perceiving Motion at Pixel Level': ['benchmark', 'multimodal-understanding'],
  'VideoTree: Adaptive Tree-based Video Representation for LLM Reasoning on Long Videos': ['multimodal-understanding'],
  'SAFREE: Train-free And Adaptive Guard For Safe Text-to-Image And Video Generation': ['generation-world-model'],
  'CREMA: Generalizable and Efficient Video-Language Reasoning via Multimodal Modular Fusion': [
    'representation-learning',
    'multimodal-understanding',
  ],
  'Bootstrapping Language-guided Navigation Learning with Self-refining Data Flywheel': ['multimodal-understanding'],
  'A Simple LLM Framework for Long-Range Video Question-Answering': ['multimodal-understanding'],
  'Zero-Shot Controllable Image-to-Video Animation via Motion Decomposition': ['generation-world-model'],
  'Self-Chained Image-Language Model for Video Localization and Question Answering': ['multimodal-understanding'],
  'Regularity Learning via Explicit Distribution Modeling for Skeletal Video Anomaly Detection': ['representation-learning'],
  'STAR: A Benchmark for Situated Reasoning in Real-World Videos': ['benchmark'],
  'A benchmark of expert-level academic questions to assess AI capabilities': ['benchmark'],
  'Balancing Faithfulness and Performance in Reasoning via Multi-Listener Soft Execution': [
    'multimodal-understanding',
  ],
}

const publicationSource: Publication[] = publicationSourceRaw.map((p) => {
  const subtopics = publicationSubtopicsByTitle[p.title]
  if (!subtopics?.length) throw new Error(`Missing publication subtopics: ${p.title}`)
  return { ...p, subtopics }
})

export const allPublications: Publication[] = [...publicationSource].sort((a, b) => {
  if (b.year !== a.year) return b.year - a.year
  const ap = isPreprintVenue(a.venue) ? 1 : 0
  const bp = isPreprintVenue(b.venue) ? 1 : 0
  if (bp !== ap) return bp - ap
  return a.title.localeCompare(b.title)
})

/** Selected Work section: SeViLA → CREMA → VEGGIE → Ego2Web → VisionCoach */
const SELECTED_WORK_TITLES = [
  'Self-Chained Image-Language Model for Video Localization and Question Answering',
  'CREMA: Generalizable and Efficient Video-Language Reasoning via Multimodal Modular Fusion',
  'VEGGIE: Instructional Editing and Reasoning of Video Concepts with Grounded Generation',
  'Ego2Web: A Web Agent Benchmark Grounded in Egocentric Videos',
  'VisionCoach: Reinforcing Grounded Video Reasoning via Visual-Perception Prompting',
] as const

export const selectedPublications: Publication[] = SELECTED_WORK_TITLES.map((title) => {
  const found = publicationSource.find((p) => p.title === title)
  if (!found) throw new Error(`Missing publication for selected work: ${title}`)
  return found
})

export type NewsItem = {
  /** Shown as the date badge (e.g. 2026.02). */
  date: string
  /** Conference, journal, or org — second highlight style. */
  venue?: string
  /** Remaining sentence (no leading colon). */
  text: string
}

export const news: NewsItem[] = [
  {
    date: '2026.04',
    venue: 'ICML 2026',
    text: '1 paper accepted.',
  },
  {
    date: '2026.04',
    venue: 'CVPR 2026',
    text: 'was selected to participate CVPR 2026 Doctoral Consortium.',
  },
  { date: '2026.02', venue: 'CVPR 2026', text: '2 papers accepted.' },
  {
    date: '2025.10',
    venue: 'ICCV 2025 KnowledgeMR',
    text: 'SciVideoBench won the best benchmark paper.',
  },
  { date: '2025.09', venue: 'ICMI 2025', text: '1 paper accepted.' },
  { date: '2025.09', venue: 'NeurIPS 2025', text: '1 paper accepted.' },
  { date: '2025.08', venue: 'EMNLP 2025', text: '3 papers accepted.' },
  { date: '2025.06', venue: 'ICCV 2025', text: '1 paper accepted.' },
  { date: '2025.05', venue: 'Google DeepMind', text: 'Summer intern.' },
  { date: '2025.02', venue: 'Twelve Labs', text: 'Invited talk.' },
  { date: '2025.02', venue: 'CVPR 2025', text: '2 papers accepted.' },
  { date: '2025.01', venue: 'ICLR 2025', text: '3 papers accepted.' },
  { date: '2024.09', venue: 'EMNLP 2024', text: '1 paper accepted.' },
  { date: '2024.07', venue: 'ACMMM 2024', text: '1 paper accepted.' },
  { date: '2024.06', venue: 'Google', text: 'Invited talk.' },
  { date: '2024.05', venue: 'Adobe', text: 'Summer intern.' },
  { date: '2023.09', venue: 'NeurIPS 2023', text: '1 paper accepted.' },
  { date: '2023.07', venue: 'IEEE TCSVT', text: '1 paper accepted.' },
  { date: '2023.05', venue: 'Amazon', text: 'Summer intern.' },
  { date: '2022.09', venue: 'UNC-CH MURGe-Lab', text: 'Joined as PhD student.' },
  {
    date: '2022.06',
    venue: 'SJTU',
    text: 'Graduated (outstanding graduates).',
  },
  { date: '2021.10', venue: 'NeurIPS 2021', text: '1 paper accepted.' },
]

export type BlogLang = 'en' | 'zh'

export type BlogPost = {
  slug: string
  date: string
  body: string
}

const blogPostBase = {
  slug: 'from-video-perception-to-agents',
  date: '2026.05',
} as const

export const blogPostsByLang: Record<BlogLang, BlogPost[]> = {
  en: [{ ...blogPostBase, body: fromVideoPerceptionToAgentsBlog }],
  zh: [{ ...blogPostBase, body: fromVideoPerceptionToAgentsBlogZh }],
}

/** @deprecated Use blogPostsByLang */
export const blogPosts = blogPostsByLang.en
