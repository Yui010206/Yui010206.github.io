# 教机器看世界的七年

*Shoubin Yu*

---

我做视频研究已经七年了,从手工设计的 HOG 特征做分类,一路做到能感知、能行动的 MLLM agent。一开始其实是误打误撞。2018 年选本科研究方向时,我觉得视觉更容易上手:你能*看见*模型看到了什么,能把它的注意力画出来,能亲眼看它做对和做错。是这种直观把我拉了进来,那时我对"视频为什么重要"还没什么真正的想法。理由是后来才有的,而且很简单:世界不是文本。做饭、过马路、修自行车——日常里几乎所有要紧的事,都在时空中连续展开,从来没人写下来。如果 AI 要在真实世界里帮到人,它就得以世界真实到来的方式去理解世界:一段连续的视觉流。这篇文章不是综述,也没有什么新的技术想法。它只是我对视频研究的理解:这片地基如何在我脚下三次移动,以及我认为接下来会移向哪里。

讲历史之前,有一组对比很重要,因为下面所有东西都依赖它。文本本身已经是压缩过的——是人造出来的,每个词都带着意义。视频恰恰相反:原始、连续的信号,没有内建的意义。智能就藏在里面,但没人替我们压缩好。所以视频研究真正的问题从来不是怎么处理更多像素,而是怎么把藏在像素背后的智能找出来。

## 当视频还是一个表征问题

整个 2010 年代,视频基本就是带时间轴的图像,或者说图像加上像素的运动。[Two-Stream Networks](https://arxiv.org/abs/1406.2199)、[C3D](https://arxiv.org/abs/1412.0767)、[I3D](https://arxiv.org/abs/1705.07750)、[SlowFast](https://arxiv.org/abs/1812.03982)、[VideoMAE](https://arxiv.org/abs/2203.12602) 定下了套路:堆叠帧,学习时空特征,有监督或自监督。人们盼着能学到一个通用的视频表征,下游任务稍加适配就能复用。那时的视频智能,基本就等于识别。这一阶段我在商汤亲历过,那里唯一真正落地的场景是监控:检测跌倒、识别打架,固定摄像头上的固定标签。

这套路足以做成产品,但总觉得空。一个模型可以把动作识别做得很准,却完全不知道为什么会发生、接下来会发生什么。[**STAR**](https://arxiv.org/abs/2405.09711) 是我早期想往前推一步的尝试——用一种符号化、类语言的方式去理解和预测动作。它把情境符号化地表示出来,这样模型的"理解"是你能真正看进去的东西。这是一个在时机成熟之前押注可解释性的尝试。但那个不满始终成立:光有识别,离我们期待的智能还很远。

## 当语言模型把门撞开

[CLIP](https://arxiv.org/abs/2103.00020) 把视觉和语言放进了同一个空间。随后 GPT-4o、[Flamingo](https://arxiv.org/abs/2204.14198)、[BLIP-2](https://arxiv.org/abs/2301.12597) 让 LLM 能对图像做推理。这彻底改写了我们对视频问题的框定方式。检测、识别这些经典任务被重写成多选 QA 或其他文字化的输出。不再是每个任务训一个模型,而是给语言模型提个问题、读它的回答。

这留下了两个问题:对齐(语言模型怎么理解像素?)和长上下文(怎么应对视频本身的长度?)。第一个问题图像也有。第二个才是视频独有的,也正是所有人撞墙的地方:哪怕是百万 token 的上下文([Gemini 1.5](https://arxiv.org/abs/2403.05530)),也会被重复的帧淹没。

我后来是这样理解的:长视频本质上是个 grounding(定位)问题。哪怕是今天那些超长视频的 benchmark,真正考的也是检索出那少数几个要紧的时刻,而精确的检索远比之后的推理更难。这就是 [**SeViLA**](https://arxiv.org/abs/2305.06988) 的押注:先找到相关的时刻,再对它们做推理。

但 [LLoVi](https://arxiv.org/abs/2312.17235)、[**MEXA**](https://arxiv.org/abs/2506.17113)、[SiLVR](https://arxiv.org/abs/2505.24869) 让我学到一件挺让人清醒的事:语言骨干一变强,我们那些精巧的、专为视频设计的东西大多就不重要了。视频成了语言的附属品。我们其实不是在研究视频,而是在研究语言模型如何理解视频。

## 当理解开始要求行动(在不在像素空间里)

世界模型从一个好奇心驱动的方向([Ha & Schmidhuber](https://arxiv.org/abs/1803.10122))变成了认真的押注([Genie](https://arxiv.org/abs/2402.15391)、[Sora 作为模拟器](https://openai.com/index/video-generation-models-as-world-simulators/));[RT-2](https://arxiv.org/abs/2307.15818) 触及了机器人动作,[WebArena](https://arxiv.org/abs/2307.13854) 和 [Mind2Web](https://arxiv.org/abs/2306.06070) 触及了数字世界的动作。这是第三次转移,从感知到行动,而它分成了两条路,分界线在于动作是否活在像素空间里。

一条路把动作留在像素里。世界模型逐帧预测世界的下一个状态。那些 dense 而连续的状态转移——光、声、热、接触的触感——是没法用文字写下来的,但视频模型能预测它们,而这个预测要么直接变成驱动机器人的控制信号([VPP](https://arxiv.org/abs/2412.14803)),要么喂给一段想象出来的 rollout、供 agent 在行动前据此规划([AVIC](https://arxiv.org/abs/2602.08236))。

另一条路把动作留在文本里,但让感知变得主动。在过去的 video-QA 里,那段视频其实没那么必要;你大可以给它配个字幕,让语言去思考。流式把这一切翻转了过来。当视频永不停止,它每时每刻的变化才是告诉 agent 该行动的东西,而且没有一份现成的文字稿可供退守——无论这个 agent 是在视频流展开的同时进行实时对话([VideoLLM-online](https://arxiv.org/abs/2406.11816)),还是依据它透过人眼所见去行动([Ego2Web](https://arxiv.org/abs/2603.22529))。在这里,视频不再是语言的替身。它就是真正干活的那部分。

两条路上,任务都变了。视频曾经是我们去识别的东西,然后是我们去理解的东西;如今它成了我们据以预测的东西。重点不再是给一帧画面里的内容打标签,而是用画面如何变化去预测下一个状态或动作。我觉得,这更接近"视频智能"本该有的意思。

## 视频的 GPT 时刻是什么?

在模型层面,有意思的问题是:如果想让视频模型不只是又一个 LLM,它该长什么样?我的猜测是 autoregressive 的逐帧预测。它是因果的,能流式处理,可以用动作去引导,而且原始视频提供了源源不断的训练信号。不过还有两点让我不太放心。

第一,文本是天然压缩过的,视频不是。所以一个逐帧预测的模型可以把算力都砸在把纹理画对上,loss 照样往下掉,却没真正学到画面里在发生什么。视频的 GPT 时刻,也许得先等一个"tokenizer 时刻":一种对视频的编码方式,让下一个 token 代表下一个事件,而不是下一个图块。

第二,文本很早就找到了自己的产品形态,视频还没有。ChatGPT 之所以火,不只是因为 GPT-3,还因为聊天框本身早就是亿万人每天在用的东西。视频没有任何类似的东西。生成的视频看着挺好玩,但好玩跟有用不是一回事。代码 agent 直接提升生产力;聊天机器人嵌进了人们本来就有的交流习惯。视频智能还没找到那种让人真正需要它的形态——而 Sora 悄悄淡出人们的讨论,正是一个很好的提醒:惊艳不等于有市场。

在产品层面,我能看到四个值得押注的方向:

1. **给机器人用的隐形模拟器。** 这里世界模型从不出现在屏幕上。它安静地跑在一个 agent 内部:行动之前,agent 先想象事情可能怎么发展,看看哪条路能把它带到想去的地方,最后只有被选中的那个动作真正发生——就像代码 agent 在后台跑代码、只把结果给你看一样。难点在于,要找到一种通用的做法、能覆盖各种具身任务,而不是只在某一个机器人、某一个场景里管用。

2. **Open-world game generation。** Genie 那类模型,即时生成一整个可玩的世界。问题在于成本,甚至比监管更要命。生成是靠 token 跑的,token 是要花钱的,而且便宜也便宜不到哪去,所以没人会为了玩游戏一直开着计费表。我们买游戏是一次性付费,不会按秒付钱来维持它运转。给已有的游戏生成 mod 或补丁,也许是个更现实的切入点。

3. **Media generation。** 在 Seedance 2 这类模型出现之后,我感觉这块的商业模式大概还有一两年就能闭环。我还看不清的是,它能不能在别的领域变成一个真正的工具。电影是最显然的去处,但电影需要高得多的质量,而这份额外的质量,对一个视频生成模型来说成本可能是指数级的。

4. **一个常开的助手。** 今天的 video QA 默认视频是放完的:模型看完整段,然后回答。一个真正的助手恰恰相反。摄像头和麦克风永不停止,所以它没法把一切都留着,必须选择忘掉什么,也没法对每一帧都从头推理一遍。它需要对当下正在发生什么、接下来要发生什么有一个持续的感觉——不是生成视频给你看,而是在心里维护一个不断更新的世界模型,这样它才知道什么时候开口、什么时候闭嘴、什么时候主动介入。Thinking Machines 的 [interaction models](https://thinkingmachines.ai/blog/interaction-models/) 是这个方向上一个早期的尝试,能在实时的音视频上一边听一边说。这是我会押的那个方向,跑在你本来就戴着、带着的设备上:眼镜、手机、手表。

有一个教训值得记住。GPT-3 在 ChatGPT 之前已经搁了两年。能力其实早就在那儿了,只是得等语言找到一个普通人一上手就懂的入口。所以我觉得没人能断定这几个方向里哪个会赢,而且说实话,这也没那么重要。重要的是,它们最后都归结到同样两件事:把世界接下来会发生什么预测得足够准、准到你敢信,以及把这个预测接到行动上。这两件事都还没做好。而这,正是接下来要做的事。

---

## 参考文献

1. Wu, B., et al. [STAR: A Benchmark for Situated Reasoning in Real-World Videos](https://arxiv.org/abs/2405.09711). *NeurIPS Datasets and Benchmarks*, 2021.
2. Radford, A., et al. [Learning Transferable Visual Models From Natural Language Supervision](https://arxiv.org/abs/2103.00020). *ICML*, 2021.
3. Alayrac, J.-B., et al. [Flamingo: A Visual Language Model for Few-Shot Learning](https://arxiv.org/abs/2204.14198). *NeurIPS*, 2022.
4. Li, J., et al. [BLIP-2: Bootstrapping Language-Image Pre-Training with Frozen Image Encoders and Large Language Models](https://arxiv.org/abs/2301.12597). *ICML*, 2023.
5. Gemini Team, Google. [Gemini 1.5: Unlocking Multimodal Understanding Across Millions of Tokens of Context](https://arxiv.org/abs/2403.05530). arXiv:2403.05530, 2024.
6. Yu, S., et al. [Self-Chained Image-Language Model for Video Localization and Question Answering](https://arxiv.org/abs/2305.06988). *NeurIPS*, 2023.
7. Zhang, C., et al. [A Simple LLM Framework for Long-Range Video Question-Answering (LLoVi)](https://arxiv.org/abs/2312.17235). *EMNLP*, 2024.
8. Yu, S., et al. [MEXA: Towards General Multimodal Reasoning with Dynamic Multi-Expert Aggregation](https://arxiv.org/abs/2506.17113). arXiv:2506.17113, 2025.
9. Zhang, C., et al. [SiLVR: A Simple Language-based Video Reasoning Framework](https://arxiv.org/abs/2505.24869). *TMLR*, 2026.
10. Ha, D., and Schmidhuber, J. [World Models](https://arxiv.org/abs/1803.10122). arXiv:1803.10122, 2018.
11. Bruce, J., et al. [Genie: Generative Interactive Environments](https://arxiv.org/abs/2402.15391). *ICML*, 2024.
12. Brooks, T., et al. [Video Generation Models as World Simulators](https://openai.com/index/video-generation-models-as-world-simulators/). OpenAI Technical Report, 2024.
13. Hu, Y., et al. [Video Prediction Policy: A Generalist Robot Policy with Predictive Visual Representations (VPP)](https://arxiv.org/abs/2412.14803). *ICML*, 2025.
14. Chen, J., et al. [VideoLLM-online: Online Video Large Language Model for Streaming Video](https://arxiv.org/abs/2406.11816). *CVPR*, 2024.
15. Brohan, A., et al. [RT-2: Vision-Language-Action Models Transfer Web Knowledge to Robotic Control](https://arxiv.org/abs/2307.15818). *CoRL*, 2023.
16. Zhou, S., et al. [WebArena: A Realistic Web Environment for Building Autonomous Agents](https://arxiv.org/abs/2307.13854). *ICLR*, 2024.
17. Deng, X., et al. [Mind2Web: Towards a Generalist Agent for the Web](https://arxiv.org/abs/2306.06070). *NeurIPS Datasets and Benchmarks*, 2023.
18. Yu, S., et al. [Ego2Web: A Web Agent Benchmark Grounded in Egocentric Videos](https://arxiv.org/abs/2603.22529). *CVPR*, 2026.
19. Yu, S., et al. [When and How Much to Imagine: Adaptive Test-Time Scaling with World Models for Visual Spatial Reasoning (AVIC)](https://arxiv.org/abs/2602.08236). arXiv:2602.08236, 2026.
