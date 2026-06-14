# Seven Years of Teaching Machines to Watch

*Shoubin Yu*

---

I've worked on video research for seven years, from hand-crafted HOG features for classification to MLLM agents that perceive and act. It started by chance. When I picked an undergraduate research topic in 2018, vision felt easier to get into: you can *see* what the model sees, plot its attention, watch it succeed and fail. That pulled me in before I had any real reason for why video mattered. The reason came later, and it's simple: the world is not text. Cooking, crossing a street, fixing a bike. Almost everything that matters in daily life happens continuously in space and time, and it's never written down. If AI is going to help people in the real world, it has to understand the world the way the world arrives: as a continuous visual stream. This post is not a survey, and it has no new technical ideas. It's just how I've come to understand video research: how the ground shifted under me three times, and where I think it shifts next.

One contrast matters before the history, because everything below depends on it. Text is already compressed. Humans built it, and every word carries meaning. Video is the opposite: raw, continuous signal with no meaning built in. The intelligence is in there, but no one compressed it for us. So the real question in video research has never been how to handle more pixels. It's how to find the intelligence hidden behind them.

## When Video Was a Representation Problem

For most of the 2010s, video was just images with a time axis, or images plus pixel motion. [Two-Stream Networks](https://arxiv.org/abs/1406.2199), [C3D](https://arxiv.org/abs/1412.0767), [I3D](https://arxiv.org/abs/1705.07750), [SlowFast](https://arxiv.org/abs/1812.03982), and [VideoMAE](https://arxiv.org/abs/2203.12602) set the recipe: stack frames, learn features over space and time, supervised or self-supervised. The hope was a general video representation that downstream tasks could reuse with light adaptation. And video intelligence mostly meant recognition. I lived this at SenseTime, where the one real use case was surveillance: detect a fall, flag a fight, fixed labels over fixed cameras.

The recipe worked well enough to ship, but it felt hollow. A model could nail action recognition with no idea why anything happened or what came next. [**STAR**](https://arxiv.org/abs/2405.09711) was an early try at pushing this further, understanding and predicting actions in a symbolic, language-like way. It represented situations symbolically, so the model's "understanding" was something you could actually look at. A bet on interpretability before the field was ready for it. But the point held: recognition alone is far from the intelligence we hoped for.

## When Language Models Cracked the Door Open

[CLIP](https://arxiv.org/abs/2103.00020) put vision and language in one space. Then GPT-4o, [Flamingo](https://arxiv.org/abs/2204.14198), and [BLIP-2](https://arxiv.org/abs/2301.12597) let an LLM reason over images. This overwrote how we framed video. Classic tasks like detection and recognition were rewritten into multiple-choice QA or other verbalized outputs. Instead of training one model per task, you now asked a language model a question and read its answer.

This left two problems: alignment (how does a language model understand pixels?) and long context (how do you handle video's sheer length?). The first is shared with images. The second is video's own, and it's where everyone hit the wall: even a million-token context ([Gemini 1.5](https://arxiv.org/abs/2403.05530)) drowns in repeated frames.

The way I came to see it, long video is at its core a grounding problem. Even today's ultra-long benchmarks are really about retrieving the few moments that matter, and precise retrieval is far harder than the reasoning that follows. That's the bet behind [**SeViLA**](https://arxiv.org/abs/2305.06988): find the relevant moments first, then reason over them.

But [LLoVi](https://arxiv.org/abs/2312.17235), [**MEXA**](https://arxiv.org/abs/2506.17113), and [SiLVR](https://arxiv.org/abs/2505.24869) taught me something humbling: a stronger language backbone made most of our clever video-specific designs stop mattering. Video had become an appendage to language. We weren't really studying video, we were studying how a language model could understand video.

## When Understanding Started to Demand Action (In or Out of Pixel Space)

World models went from a curiosity ([Ha & Schmidhuber](https://arxiv.org/abs/1803.10122)) to a serious bet ([Genie](https://arxiv.org/abs/2402.15391), [Sora-as-simulator](https://openai.com/index/video-generation-models-as-world-simulators/)); [RT-2](https://arxiv.org/abs/2307.15818) reached robot actions, [WebArena](https://arxiv.org/abs/2307.13854) and [Mind2Web](https://arxiv.org/abs/2306.06070) reached digital ones. This was the third shift, from perception to action, and it split into two paths, divided by whether the action lives in pixel space.

One path keeps the action in pixels. A world model predicts the next state of the world frame by frame. Dense, continuous transitions—light, sound, heat, the feel of contact—can't be written in words, but a video model can predict them, and that prediction becomes the control signal that drives a robot ([VPP](https://arxiv.org/abs/2412.14803)), or feeds an imagined rollout the agent plans against before it moves ([AVIC](https://arxiv.org/abs/2602.08236)).

The other path keeps the action in text, but makes perception active. In old video-QA, the clip wasn't really essential; you could caption it and let language do the thinking. Streaming flips this. When the video never stops, its moment-to-moment changes are what tell the agent to act, and there's no transcript to fall back on, whether the agent is holding a live conversation as the stream unfolds ([VideoLLM-online](https://arxiv.org/abs/2406.11816)) or acting on what it sees through human eyes ([Ego2Web](https://arxiv.org/abs/2603.22529)). Here the video isn't a stand-in for language. It's the part doing the work.

Across both paths, the task had changed. Video used to be something we recognized, then something we understood; now it's something we predict from. The point is no longer to label what's in a frame, but to use how frames change to predict the next state or action. This, I think, is closer to what video intelligence should mean.

## What Is Video's GPT Moment?

At the model level, the interesting question is what a video model should look like if it's going to be more than just another LLM. My guess is autoregressive next-frame prediction. It's causal, it streams, you can steer it with actions, and raw video is an endless supply of training signal. Two things still make me nervous, though.

First, text comes pre-compressed and video doesn't. So a next-frame model can pour its capacity into getting the texture right and still watch the loss go down, without learning much about what's actually happening. The video GPT moment might have to wait for a "tokenizer moment" first: a way to encode video where the next token is the next event, not the next patch.

Second, text found its product early; video still hasn't. ChatGPT took off not just because of GPT-3, but because the chat box was already something billions of people used every day. Video has nothing like that. Generated video is fun to look at, but fun isn't the same as useful. Coding agents make you more productive; chatbots slot into how people already talk. Video intelligence hasn't yet found the form that makes people actually need it, and Sora quietly fading from the conversation is a good reminder that being impressive isn't the same as having a market.

At the product level, I can see four directions worth betting on:

1. **A hidden simulator for robots.** Here the world model never shows up on screen. It runs quietly inside an agent: before doing anything, the agent imagines a few ways things could play out, sees which one gets it where it wants, and only the chosen action happens, the same way a coding agent runs code in the background and just shows you the result. The hard part is finding one general way to do this across embodied tasks, instead of something that only works for one robot in one setting.

2. **Open-world game generation.** Genie-style models that build a whole playable world on the fly. The catch is cost, even more than regulation. Generating runs on tokens, tokens cost money, and there's a floor on how cheap they get, so nobody's going to leave the meter running just to play. We pay for a game once; we don't pay by the second to keep it alive. Generating mods or patches for games that already exist might be a more realistic place to start.

3. **Media generation.** After models like Seedance 2, the business model here feels maybe a year or two from closing the loop. What I can't tell yet is whether it turns into a serious tool anywhere else. Film is the obvious place to look, but film needs much higher quality, and that extra quality might cost a video model exponentially more.

4. **An always-on assistant.** Video QA today assumes the video is over: the model watches the whole thing, then answers. A real assistant is the opposite. The camera and mic never stop, so it can't keep everything and has to choose what to forget, and it can't think through every frame from scratch. It needs a running sense of what's going on right now and what's about to happen, not video for you to watch, but a quiet model of the world it keeps updating, so it knows when to speak up, when to stay quiet, and when to jump in. Thinking Machines' [interaction models](https://thinkingmachines.ai/blog/interaction-models/) are an early step, listening and talking at the same time over live audio and video. This is the one I'd bet on, running on the devices you already wear or carry: glasses, phones, watches.

There's one lesson worth keeping in mind. GPT-3 sat around for two years before ChatGPT. The ability was already there; it just had to wait for language to find a way in that ordinary people got right away. So I don't think anyone can call which of these directions wins, and honestly it doesn't matter much. What matters is that they all come down to the same two things: predicting what the world does next, well enough that you can trust it, and connecting that prediction to action. Neither is ready yet. That's where the work is.

---

## References

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
