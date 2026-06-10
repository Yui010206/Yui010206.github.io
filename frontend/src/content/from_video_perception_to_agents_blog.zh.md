# 教机器看世界的七年

---

我做视频研究已经七年了，从工业界的安防模型，到博士阶段能感知并行动的 agent。为什么是视频？因为世界不是文本。做饭、过马路、修自行车——日常生活里几乎所有重要的事，都是在时空里连续展开的，却从未被写下来。如果 AI 要在物理世界里帮助人，它就必须理解世界真正到来的方式：连续不断的视觉流。这篇文章不是综述，而是我亲身经历的三次范式转移，以及我认为它接下来会往哪里去。

在讲历史之前，有一个对比值得先说清楚，因为下文的一切都建立在它之上。文本天然是压缩的：离散的、人造的符号，每个 token 已经携带意义。视频则相反：连续、底层的信号，没有内建的抽象层。智能藏在里面，但没有人替我们压缩过。视频研究真正的问题从来不是如何处理更多像素，而是如何建模像素背后的智能。

## 当视频还是一个分类问题

2010 年代的大部分时间里，视频被当作「带时间轴的图像」。[Two-Stream Networks](https://arxiv.org/abs/1406.2199)、[C3D](https://arxiv.org/abs/1412.0767) 和 [I3D](https://arxiv.org/abs/1705.07750) 定义了标准配方：堆叠帧、学习时空特征、预测动作标签。[SlowFast](https://arxiv.org/abs/1812.03982) 改进了架构；[VideoMAE](https://arxiv.org/abs/2203.12602) 用自监督为它供血。我在商汤经历过这个阶段，当时唯一真正落地的场景是安防：检测跌倒、标记打架、在固定摄像头上做闭集标签。

这套配方足够好，能交付产品，但总有一种空洞感。模型可以在动作识别上拿高分，却对任何事为什么发生、接下来会怎样毫无概念。[**STAR**](https://arxiv.org/abs/2405.09711)（NeurIPS 2021）是我早期的反抗：用符号化方式表征情境，让「理解」变得可检视。这是在领域还不具备兑现条件时，对可解释性的一次押注。但那个抱怨依然成立：识别不是理解。

## 当语言模型撬开了门

[CLIP](https://arxiv.org/abs/2103.00020) 把视觉和语言放进同一空间；[Flamingo](https://arxiv.org/abs/2204.14198) 和 [BLIP-2](https://arxiv.org/abs/2301.12597) 让冻结的 LLM 在视觉输入上推理。问题从「这是什么动作？」变成「你能从中得出什么结论？」。然后每个人都撞上同一堵墙：长视频。即便有百万 token 的上下文（[Gemini 1.5](https://arxiv.org/abs/2403.05530)），也会被帧冗余淹没。

我后来逐渐看清一点：**长视频理解本质上是一个检索问题。** 关于一小时视频的任何问题，真正相关的也许只有九十秒；难点是找到它们。[**SeViLA**](https://arxiv.org/abs/2305.06988)（NeurIPS 2023）把它写进了模型：先定位相关片段，再在上面推理。那个「看—决定—回答」的循环，悄然带有 agent 色彩——[ViperGPT](https://arxiv.org/abs/2303.08128) 从工具使用一侧也得出了同样的结论。此后整个长视频文献，包括 [o1](https://openai.com/index/learning-to-reason-with-llms/) 和 [DeepSeek-R1](https://arxiv.org/abs/2501.12948) 之后的 test-time scaling 浪潮，其实只有一个主题：不要处理整个世界，要去**导航**它。

## 当理解开始要求行动

世界模型从好奇（[Ha & Schmidhuber](https://arxiv.org/abs/1803.10122)）变成严肃押注（[Genie](https://arxiv.org/abs/2402.15391)、[Sora-as-simulator](https://openai.com/index/video-generation-models-as-world-simulators/)）；[RT-2](https://arxiv.org/abs/2307.15818) 把 VLM 接地到机器人动作；[WebArena](https://arxiv.org/abs/2307.13854) 和 [Mind2Web](https://arxiv.org/abs/2306.06070) 让数字世界的行动可度量。

我更在意的是这次转移里的* grounding*：agent 应该基于对混乱世界的真实感知来行动，而不是干净的抽象。[**Ego2Web**](https://arxiv.org/abs/2603.22529)（CVPR 2026）把第一人称视频和 web agent 连起来：透过人的眼睛看，然后在网上行动。[**AVIC**](https://arxiv.org/abs/2602.08236) 推向物理行动：agent 在移动前要决定*何时、想象多少*——想象是昂贵的，给自己的思考预算本身也是一种行动。SeViLA 的教训可以推广：决定下一步做什么（看、想象、还是行动），就是智能。

## 世界模型会是视频的 GPT 时刻吗？

我认为 AR + 下一帧预测是对的基底：因果、可流式、可动作条件化、能被原始视频无限监督。但有两件事让我保持谨慎。

第一，文本是预压缩送来的，视频不是，所以下一帧模型可以把容量花在纹理上，loss 照样能降。视频的 GPT 时刻，也许要等一个 **tokenizer 时刻**：潜空间里「下一个 token」意味着「下一个事件」，而不是「下一个 patch」。

第二，文本很早就找到了产品形态，视频智能还没有。ChatGPT 的成功不只是 GPT-3 的功劳，还因为聊天框是数十亿人每天都在用的熟悉界面。视频没有等价物。流式生成和交互世界是有希望的方向，但 Sora 从公众视野里淡出，提醒我们：技术能力本身造不出市场。人们也许喜欢看生成的视频图个新鲜，但新鲜和效用不是一回事。不像编程 agent 能直接放大生产力，也不像聊天机器人天然融入既有沟通习惯，视频智能还没有找到让人离不开的界面。在我看来，有三个方向值得认真考虑：

- **想象作为隐式计算。** 世界模型的输出永远不会抵达用户。它在 agent 内部作为模拟器运行：行动之前，agent 想象几种可能的未来，检查每种行动通向哪里，只有被选中的行动对外可见。这和编程 agent 是同一模式——代码在幕后跑，只给你看结果。机器人是自然而然的第一市场，因为人们已经在为仿真里训练、测试策略付费。
- **完全开放世界游戏生成。** Genie 式、按需生成整个可游玩世界的模型。这也许是面向消费者的时刻，因为游戏是世界模型最大弱点的「豁免区」：生成的世界只需要感觉对，不必物理正确。这条路径的风险在监管，而非技术。
- **流式助手。** 今天的视频 QA 假设视频已经拍完了：模型看完，再回答。真正的助手在相反条件下工作。摄像头和麦克风从不停止，所以它不能存下一切，必须决定忘掉什么；但它也不能在每一帧上从零开始推理，而需要一份持续运转的内部模型，追踪正在发生什么、接下来会发生什么。这就是世界模型的角色：不是生成视频给用户看，而是默默维护一份对正在展开的世界、持续更新的预测——从而让助手知道何时回应、何时保持安静、何时主动介入。该回应的时刻就是现在，迟到的回答就是错误的回答。连续的视频、音频，乃至最终的触觉，都汇入这个循环。第一人称数据（[Ego4D](https://arxiv.org/abs/2110.07058)、[EgoLife](https://arxiv.org/abs/2503.03803)）是唯一看起来像这种部署条件的数据。

接口的尝试已经在进行，但只完成了一半。Thinking Machines 的 [interaction models](https://thinkingmachines.ai/blog/interaction-models/) 把交互性原生训练进模型，在连续音视频上同时听和说，我认为它们在**语音层面**真正解决了界面问题。更难的缺口在**行动层面**。今天，当模型想要行动时，仍须先用自然语言描述行动：文字计划、工具调用、一句「拿起杯子」。我们还没有找到超越语言描述的行动表征——部分原因，我猜想，是机器人学这个本该逼出它的领域仍在成熟中。但视频智能归根结底是对物理世界的快速反应。一辆车朝你冲过来，你不会叙述「轨迹与我相交」——你就是知道，然后躲开。这种反射是 video → action 的直接通路，中间没有文字；这也正是世界模型应该提供的：无声、持续地预测接下来会发生什么，驱动即时反应；只有预测被「惊讶」时，才唤起慢速的语言推理。把每种反应都路由经过一句话，是在 System-1 问题上征 System-2 的税；按真实世界的速度，这税是致命的。

历史在这里有一条有用的教训。GPT-3 比 ChatGPT 早存在两年；能力一直在等，直到语言找到了一个数十亿人天然理解并采纳的界面。所以我不认为有人能预言上面三个方向里哪一个会成为视频的定义性产品——某种意义上也无所谓。重要的是，三者都依赖同一组底层能力：足够可靠、可以在此基础上构建的 action-conditioning，以及快速、无声、值得信任的预测。研究努力应该往那里去。更漂亮的生成画面不会把那一刻拉近；但无论最终哪种界面胜出，都会建在那两块地基上——而它们还没准备好。

---

## 参考文献

1. Simonyan, K., and Zisserman, A. [Two-Stream Convolutional Networks for Action Recognition in Videos](https://arxiv.org/abs/1406.2199). In *Advances in Neural Information Processing Systems (NeurIPS)*, 2014.
2. Tran, D., Bourdev, L., Fergus, R., Torresani, L., and Paluri, M. [Learning Spatiotemporal Features with 3D Convolutional Networks](https://arxiv.org/abs/1412.0767). In *Proceedings of the IEEE International Conference on Computer Vision (ICCV)*, 2015.
3. Carreira, J., and Zisserman, A. [Quo Vadis, Action Recognition? A New Model and the Kinetics Dataset](https://arxiv.org/abs/1705.07750). In *Proceedings of the IEEE Conference on Computer Vision and Pattern Recognition (CVPR)*, 2017.
4. Feichtenhofer, C., Fan, H., Malik, J., and He, K. [SlowFast Networks for Video Recognition](https://arxiv.org/abs/1812.03982). In *Proceedings of the IEEE/CVF International Conference on Computer Vision (ICCV)*, 2019.
5. Tong, Z., Song, Y., Wang, J., and Wang, L. [VideoMAE: Masked Autoencoders Are Data-Efficient Learners for Self-Supervised Video Pre-Training](https://arxiv.org/abs/2203.12602). In *Advances in Neural Information Processing Systems (NeurIPS)*, 2022.
6. Wu, B., Yu, S., Chen, Z., Tenenbaum, J. B., and Gan, C. [STAR: A Benchmark for Situated Reasoning in Real-World Videos](https://arxiv.org/abs/2405.09711). In *Advances in Neural Information Processing Systems (NeurIPS) Datasets and Benchmarks Track*, 2021.
7. Radford, A., et al. [Learning Transferable Visual Models From Natural Language Supervision](https://arxiv.org/abs/2103.00020). In *Proceedings of the 38th International Conference on Machine Learning (ICML)*, 2021.
8. Alayrac, J.-B., et al. [Flamingo: A Visual Language Model for Few-Shot Learning](https://arxiv.org/abs/2204.14198). In *Advances in Neural Information Processing Systems (NeurIPS)*, 2022.
9. Li, J., Li, D., Savarese, S., and Hoi, S. [BLIP-2: Bootstrapping Language-Image Pre-Training with Frozen Image Encoders and Large Language Models](https://arxiv.org/abs/2301.12597). In *Proceedings of the 40th International Conference on Machine Learning (ICML)*, 2023.
10. Gemini Team, Google. [Gemini 1.5: Unlocking Multimodal Understanding Across Millions of Tokens of Context](https://arxiv.org/abs/2403.05530). *arXiv preprint arXiv:2403.05530*, 2024.
11. Yu, S., Cho, J., Yadav, P., and Bansal, M. [Self-Chained Image-Language Model for Video Localization and Question Answering](https://arxiv.org/abs/2305.06988). In *Advances in Neural Information Processing Systems (NeurIPS)*, 2023.
12. Surís, D., Menon, S., and Vondrick, C. [ViperGPT: Visual Inference via Python Execution for Reasoning](https://arxiv.org/abs/2303.08128). In *Proceedings of the IEEE/CVF International Conference on Computer Vision (ICCV)*, 2023.
13. OpenAI. [Learning to Reason with LLMs](https://openai.com/index/learning-to-reason-with-llms/). OpenAI Blog, 2024.
14. DeepSeek-AI. [DeepSeek-R1: Incentivizing Reasoning Capability in LLMs via Reinforcement Learning](https://arxiv.org/abs/2501.12948). *arXiv preprint arXiv:2501.12948*, 2025.
15. Ha, D., and Schmidhuber, J. [World Models](https://arxiv.org/abs/1803.10122). *arXiv preprint arXiv:1803.10122*, 2018.
16. Bruce, J., et al. [Genie: Generative Interactive Environments](https://arxiv.org/abs/2402.15391). In *Proceedings of the 41st International Conference on Machine Learning (ICML)*, 2024.
17. Brooks, T., et al. [Video Generation Models as World Simulators](https://openai.com/index/video-generation-models-as-world-simulators/). OpenAI Technical Report, 2024.
18. Brohan, A., et al. [RT-2: Vision-Language-Action Models Transfer Web Knowledge to Robotic Control](https://arxiv.org/abs/2307.15818). In *Proceedings of the 7th Conference on Robot Learning (CoRL)*, 2023.
19. Zhou, S., et al. [WebArena: A Realistic Web Environment for Building Autonomous Agents](https://arxiv.org/abs/2307.13854). In *Proceedings of the 12th International Conference on Learning Representations (ICLR)*, 2024.
20. Deng, X., et al. [Mind2Web: Towards a Generalist Agent for the Web](https://arxiv.org/abs/2306.06070). In *Advances in Neural Information Processing Systems (NeurIPS) Datasets and Benchmarks Track*, 2023.
21. Yu, S., et al. [Ego2Web: A Web Agent Benchmark Grounded in Egocentric Videos](https://arxiv.org/abs/2603.22529). In *Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR)*, 2026.
22. Yu, S., Zhang, Y., Wang, Z., Yoon, J., Yao, H., Ding, M., and Bansal, M. [When and How Much to Imagine: Adaptive Test-Time Scaling with World Models for Visual Spatial Reasoning](https://arxiv.org/abs/2602.08236). *arXiv preprint arXiv:2602.08236*, 2026.
23. Grauman, K., et al. [Ego4D: Around the World in 3,000 Hours of Egocentric Video](https://arxiv.org/abs/2110.07058). In *Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR)*, 2022.
24. Yang, J., et al. [EgoLife: Towards Egocentric Life Assistant](https://arxiv.org/abs/2503.03803). In *Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR)*, 2025.
25. Thinking Machines Lab. [Interaction Models: A Scalable Approach to Human-AI Collaboration](https://thinkingmachines.ai/blog/interaction-models/). *Thinking Machines Lab: Connectionism*, 2026.
