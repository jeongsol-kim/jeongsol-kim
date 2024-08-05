export const publicationData = [
    {
        img: process.env.PUBLIC_URL + '/imgs/dreamsampler',
        title: 'DreamSampler: Unifying Diffusion Sampling and Score Distillation for Image Manipulation',
        where: 'Jeongsol Kim*, Geonyoung Park*, Jong Chul Ye (*co-first) / ECCV 2024',
        code: '',
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
        paper: '',
        dsec: 'We propose a blind deblurring method based on a noise-robust kernel estimation function and deep image prior (DIP). '+
        'Specifically, the proposed kernel estimation function effectively estimates the blur kernel even for strongly noisy blurry images given a clear image and optimal condition.'
    },
    {
        img: process.env.PUBLIC_URL + '/imgs/bcu',
        title: 'Energy-based Cross-Attention for Bayesian Context Update in Text-to-Image Diffusion Models',
        where: 'Geonyoung Park*, Jeongsol Kim*, Beomsu Kim, Sangwan Lee, Jong Chul Ye (*co-first) / NeurIPS 2023',
        code: '',
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
        code: '',
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

