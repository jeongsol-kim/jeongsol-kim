export const publicationData = [
    {
        img: process.env.PUBLIC_URL + '/imgs/flowdps',
        title: 'FlowDPS: Flow-Driven Posterior Sampling for Inverse Problems',
        where: 'Jeongsol Kim*, Bryan Sangwoo Kim*, Jong Chul Ye (*co-first) / Preprint',
        code: 'https://github.com/FlowDPS-Inverse/FlowDPS',
        paper: 'https://arxiv.org/abs/2503.08136',
        dsec: 'Flow matching is a recent state-of-the-art framework for generative modeling based on ordinary differential equations (ODEs). '+
        'While closely related to diffusion models, it provides a more general perspective on generative modeling. '+
        'Although inverse problem solving has been extensively explored using diffusion models, it has not been rigorously examined within the broader context of flow models.' +
        'Therefore, we extend the diffusion inverse solvers (DIS)— which perform posterior sampling by combining a denoising diffusion prior with an likelihood gradient—into the flow framework. '+
        'Our proposed solver, Flow-Driven Posterior Sampling (FlowDPS), can also be seamlessly integrated into a latent flow model with a transformer architecture. '+
        'Across four linear inverse problems, we confirm that FlowDPS outperforms state-of-the-art alternatives, all without requiring additional training.'
    }, 
    {
        img: process.env.PUBLIC_URL + '/imgs/softrepa',
        title: 'Aligning Text to Image in Diffusion Models is Easier Than You Think',
        where: 'Jaa-yeon Lee*, Byunghee Cha*, Jeongsol Kim, Jong Chul Ye (*co-first) / Preprint',
        code: 'https://github.com/softrepa/SoftREPA',
        paper: 'https://arxiv.org/abs/2503.08250',
        dsec: 'While recent advancements in generative modeling have significantly improved text-image alignment, some residual misalignment between text and image representations still remains. '+
        'Although many approaches have attempted to address this issue by fine-tuning models using various reward models, we revisit the challenge from the perspective of representation alignment—an approach that has gained popularity with the success of REPresentation Alignment (REPA). ' +
        'We first argue that conventional text-to-image (T2I) diffusion models, typically trained on paired image and text data (i.e., positive pairs) by minimizing score matching or flow matching losses, is suboptimal from the standpoint of representation alignment. '+
        'Instead, a better alignment can be achieved through contrastive learning that leverages both positive and negative pairs. '+
        'To achieve this efficiently even with pretrained models, we introduce a lightweight contrastive fine-tuning strategy called SoftREPA that uses soft text tokens. ' +
        'Our theoretical analysis demonstrates that our method explicitly increases the mutual information between text and image representations, leading to enhanced semantic consistency.'
    },
    {
        img: process.env.PUBLIC_URL + '/imgs/latentsb',
        title: 'Latent Schrodinger Bridge: Prompting Latent Diffusion for Fast Unpaired Image-to-Image Translation',
        where: 'Jeongsol Kim*, Beomsu Kim*, Jong Chul Ye (*co-first) / Preprint',
        code: 'https://github.com/LatentSB/LatentSB',
        paper: 'https://arxiv.org/abs/2411.14863',
        dsec: 'Diffusion models (DMs), which enable both image generation from noise and inversion from data, '+
        'have inspired powerful unpaired image-to-image (I2I) translation algorithms. However, they often require a larger number of neural function evaluations (NFEs), '+
        'limiting their practical applicability. In this paper, we tackle this problem with Schrodinger Bridges (SBs), which are stochastic differential equations (SDEs) '+
        'between distributions with minimal transport cost. We analyze the probability flow ordinary differential equation (ODE) formulation of SBs, '+
        'and observe that we can decompose its vector field into a linear combination of source predictor, target predictor, and noise predictor. '+
        'Inspired by this observation, we propose Latent Schrodinger Bridges (LSBs) that approximate the SB ODE via pre-trained Stable Diffusion, '+
        'and develop appropriate prompt optimization and change of variables formula to match the training and inference between distributions. ' +
        'We demonstrate that our algorithm successfully conduct competitive I2I translation in unsupervised setting with only a fraction of computation cost required by previous DM-based I2I methods.'
    },
    {
        img: process.env.PUBLIC_URL + '/imgs/cfgpp',
        title: 'CFG++: Manifold-constrained Classifier Free Guidance for Diffusion Models',
        where: 'Hyungjin Chung*, Jeongsol Kim*, Geon Yeong Park*, Hyelin Nam*, Jong Chul Ye (*co-first) / ICLR 2025',
        code: 'https://github.com/CFGpp-diffusion/CFGpp',
        paper: 'https://arxiv.org/abs/2403.11415',
        dsec: 'Classifier-free guidance (CFG) is a fundamental tool in modern diffusion models for text-guided generation. '+
        'This paper reveals that problems of CFG actually stem from the off-manifold phenomenon associated with CFG. '+
        'Thus, we reformulate text-guidance as an inverse problem with a text-conditioned score matching loss and develop CFG++, '+
        'a novel approach that tackles the off-manifold challenges inherent in traditional CFG. '+
        'CFG++ features a surprisingly simple fix to CFG, yet it offers significant improvements, including better sample quality for text-to-image generation, invertibility, smaller guidance scales, reduced etc. ' +
        'Project Page: https://cfgpp-diffusion.github.io/anon.'
    },
    {
        img: process.env.PUBLIC_URL + '/imgs/treg',
        title: 'Regularization by Texts for Latent Inverse Solvers',
        where: 'Jeongsol Kim*, Geonyoung Park*, Hyunjin Chung, Jong Chul Ye (*co-first) / ICLR 2025 (Spotlight, Top 5%)',
        code: '',
        paper: 'https://arxiv.org/abs/2311.15658',
        dsec: 'Current diffusion-based inverse problem solvers depend on the prior distribution in reducing the solution space. '+
        'However, it always provide the most likely solution, which is not always the desired solution. '+
        'Thus, we explore an additional cue in solving inverse problem and propose a novel framework called Regularization by Texts (TReg). '+
        'By defining a latent optimization problem and solvig it in alternative approach, TReg successfully find a solution ' +
        'that satisfies both 1) data consistency and 2) text-guidance.'
    },
    {
        img: process.env.PUBLIC_URL + '/imgs/gctm',
        title: 'Generalized Consistency Trajectory Models for Image Manipulation',
        where: 'Beomsu Kim*, Jaemin Kim*, Jeongsol Kim, Jong Chul Ye (*co-first) / ICLR 2025',
        code: 'https://github.com/1202kbs/GCTM',
        paper: 'https://arxiv.org/abs/2403.12510',
        dsec: 'The success of Diffusion Model (DM) lies in the iterative nature of diffusion: diffusion breaks down the complex process of mapping noise to data into a sequence of simple denoising tasks. '+
        'However, the iterative process is also computationally intensive, often taking from tens up to thousands of function evaluations. '+
        'Thus, we explore an additional cue in solving inverse problem and propose a novel framework called Regularization by Texts (TReg). '+
        'Although consistency trajectory models (CTMs) enable traversal between any time points along the probability flow ODE (PFODE) '+
        'and score inference with a single function evaluation, CTMs only allow translation from Gaussian noise to data. '+
        'This work aims to unlock the full potential of CTMs by proposing generalized CTMs (GCTMs), which translate between arbitrary distributions via ODEs.'
    },
    {
        img: process.env.PUBLIC_URL + '/imgs/dreamsampler',
        title: 'DreamSampler: Unifying Diffusion Sampling and Score Distillation for Image Manipulation',
        where: 'Jeongsol Kim*, Geonyoung Park*, Jong Chul Ye (*co-first) / ECCV 2024',
        code: 'https://github.com/DreamSampler/dream-sampler',
        paper: 'https://arxiv.org/abs/2403.11415',
        dsec: 'Reverse sampling and score-distillation have emerged as main workhorses in recent years for image manipulation using latent diffusion models (LDMs). '+
        'While reverse diffusion sampling often requires adjustments of LDM architecture or feature engineering, '+
        'score distillation offers a simple yet powerful model-agnostic approach, but it is often prone to mode-collapsing. '+
        'To address these limitations and leverage the strengths of both approaches, here we introduce a novel framework called DreamSampler, '+
        'which seamlessly integrates these two distinct approaches through the lens of regularized latent optimization.'
    },
    {
        img: process.env.PUBLIC_URL + '/imgs/deconv',
        title: 'Blind image deblurring with noise-robust kernel estimation',
        where: 'Chanseok Lee, Jeongsol Kim, Seungmin Lee, Jaehwang Jung, Yunje Cho, Taejoong Kim, Taeyong Jo, Myungjun Lee, Mooseok Jang / ECCV 2024',
        code: 'https://github.com/csleemooo/BD_noise_robust_kernel_estimation',
        paper: 'https://www.ecva.net/papers/eccv_2024/papers_ECCV/papers/03024.pdf',
        dsec: 'We propose a blind deblurring method based on a noise-robust kernel estimation function and deep image prior (DIP). '+
        'Specifically, the proposed kernel estimation function effectively estimates the blur kernel even for strongly noisy blurry images given a clear image and optimal condition.'
    },
    {
        img: process.env.PUBLIC_URL + '/imgs/bcu',
        title: 'Energy-based Cross-Attention for Bayesian Context Update in Text-to-Image Diffusion Models',
        where: 'Geonyoung Park*, Jeongsol Kim*, Beomsu Kim, Sangwan Lee, Jong Chul Ye (*co-first) / NeurIPS 2023',
        code: 'https://github.com/EnergyAttention/Energy-Based-CrossAttention',
        paper: 'https://openreview.net/pdf?id=lOCHMGO6ow',
        dsec: 'Based on Hopsfield Network that has interpreted the attention operation in energy perspective, ' + 
        'we propose context update for the cross-attention operation using newly introduced energy function. ' + 
        'As a result, our method has achieved better alignment between image query and context key on the cross-attention space.' +
        'Furthermore, we extend our understanding of attention as energy minimiztion toward compositional generation, ' +
        'so that text-guided compositional generation could be effectively conducted.'
    },
    {
        img: process.env.PUBLIC_URL + '/imgs/cddb',
        title: 'Direct Diffusion Bridge using Data Consistency for Inverse Problems',
        where: 'Hyungjin Chung, Jeongsol Kim, Jong Chul Ye / NeurIPS 2023',
        code: 'https://github.com/HJ-harry/CDDB/tree/main',
        paper: 'https://openreview.net/pdf?id=497CevPdOg',
        dsec: 'We propose a modified inference procedure for Direct Diffusion Bridge (DDB) ' + 
        'that imposes data consistency without the need for fine-tuning. ' +
        'As a result, we effectively push the Pareto-frontier (fidelity-consistency) toward the optimum.'
    },
    {
        img: process.env.PUBLIC_URL + '/imgs/blinddps',
        title: 'Parallel Diffusion Models of Operator and Image for Bilnd Inverse Problems',
        where: 'Hyungjin Chung*, Jeongsol Kim*, Sehui Kim, Jong Chul Ye (*co-first) / CVPR 2023',
        code: 'https://github.com/BlindDPS/blind-dps',
        paper: 'https://arxiv.org/abs/2211.10656',
        desc: 'By leveraging pretrained diffusion model as prior, solve blind inverse problem ' +
        'where parameters of forward operation are needed to be estimated as well as the true signal. ' +
        'Approximated posterior sampling is adopted.'
    },
    {
        img: process.env.PUBLIC_URL + '/imgs/dps',
        title: 'Diffusion Posterior Sampling for General Noisy Inverse Problems',
        where: 'Hyungjin Chung*, Jeongsol Kim*, Michael T.McCann, Marc L. Klasky, Jong Chul Ye (*co-first) / ICLR 2023, spotlight',
        code: 'https://github.com/DPS2022/diffusion-posterior-sampling',
        paper: 'https://openreview.net/forum?id=OnD9zGAGT0k',
        desc: 'Solve inverse problem using pretrained diffusion model. Unlike existing methods that have focused on noiseless ' +
        'and linear inverse problem, this paper could solve noisy and non-linear problems. ' + 
        'Theoratical analysis on upper bound of the approximation gap is provided.'
    },
    {
        img: process.env.PUBLIC_URL + '/imgs/tavit',
        title: 'Task-Agnostic Vision Transformer for Distributed Learning of Image Processing',
        where: 'Boah Kim*, Jeongsol Kim*, Jong Chul Ye (*co-first) / IEEE Transaction on Image Processing, Vol 32',
        code: 'https://github.com/TAViT2022/TAViT',
        paper: 'https://ieeexplore.ieee.org/document/9979765',
        desc: 'We propose a novel task-agnostic distributed learning framework by introducing ' +
        'task-specific CNN encoder-decoder on each client and task-agnostic Transformer on the server. ' +
        'With less inductive bias of Transformer, the proposed method shows comparable or better performance '+
        'on four image processing tasks, without fine-tuning for each task.'
    },
    {
        img: process.env.PUBLIC_URL + '/imgs/festa',
        title: 'Federated Split Vision Transformer for COVID-19 CXR Diagnosis using Task-Agnostic Training',
        where: 'Sangjoon Park*, Gwanghun Kim*, Jeongsol Kim, Boah Kim, Jong Chul Ye (*co-first) / NeurIPS 2021',
        code: '',
        paper: 'https://openreview.net/pdf?id=Ggikq6Tdxch',
        desc: 'In general, it is hard to build a large central dataset with sensitive data including medical images. ' +
        'As a result, the application of a powerful data-driven method to a domain with a small amount of data is difficult, ' +
        'especially for emergent situations such as COVID-19. Distributed learning would be a promising solution to overcome this situation. ' +
        'In this paper, we propose a novel distributed learning framework with multiple tasks for medical images, ' +
        'The experimental results show the capability of the proposed method in the situation with data scarcity and privacy concerns, ' +
        'by demonstrating that the proposed distributed learning outperforms joint training on each local data. '
    },
    {
        img: process.env.PUBLIC_URL + '/imgs/otcyclegan',
        title: 'Optimal Transport Driven CycleGAN for Unsupervised Learning in Inverse Problem',
        where: 'Byeongsu Sim, Gyutaek Oh, Jeongsol Kim, Chanyonh Jung, Jong Chul Ye / SIAM Journal on Imaging Science Vol. 13 (2020)',
        code: '',
        paper: 'https://epubs.siam.org/doi/10.1137/20M1317992',
        desc: 'Explain a representative unsupervised learning method, Cycle-GAN, in terms of optimal transport theory and ' +
        'propose a new architecture that could improve performance while reducing computational cost.'
    }
]

