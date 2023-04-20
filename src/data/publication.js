export const publicationData = [
    {
        img: process.env.PUBLIC_URL + '/imgs/blinddps',
        title: 'Parallel Diffusion Models of Operator and Image for Bilnd Inverse Problems',
        where: 'Hyungjin Chung*, Jeongsol Kim*, Sehui Kim, Jong Chul Ye (*co-first) / CVPR 2023',
        code: 'https://github.com/BlindDPS/blind-dps',
        paper: 'https://arxiv.org/abs/2211.10656',
        desc: 'The inverse problem that contains unknown parameters of forward operation is called ' +
        'blind inverse problem. In this paper, we propose diffusion-based method to solve the blind inverse problem '+
        'which estimates both true signal and parameters of forward operation. The proposed method is based on '+
        'approximated posterior sampling where the pre-trained diffusion model is used as prior, so that '+
        'no further fine-tuning is required.',

    },
    {
        img: process.env.PUBLIC_URL + '/imgs/dps',
        title: 'Diffusion Posterior Sampling for General Noisy Inverse Problems',
        where: 'Hyungjin Chung*, Jeongsol Kim*, Michael T.McCann, Marc L. Klasky, Jong Chul Ye (*co-first) / ICLR 2023, spotlight',
        code: 'https://github.com/DPS2022/diffusion-posterior-sampling',
        paper: 'https://openreview.net/forum?id=OnD9zGAGT0k',
        desc: 'Diffusion-based models have been explored as a promising way to solve various inverse problems.' +
        'However, existing methods have focused on noiseless and linear inverse problems, which are limited domains ' +
        'compared to real-world problems. In this paper, we propose an approximated posterior sampling method ' +
        'for diffusion-based model to solve noisy and non-linear problems (we call them as general noisy inverse problems).' +
        'We provide the theoretical result showing that the approximation gap is upper-bounded and provide experimental results ' +
        'showing the superior performance of the proposed method over existing methods.',
    },
    {
        img: process.env.PUBLIC_URL + '/imgs/tavit',
        title: 'Task-Agnostic Vision Transformer for Distributed Learning of Image Processing',
        where: 'Boah Kim*, Jeongsol Kim*, Jong Chul Ye (*co-first) / IEEE Transaction on Image Processing, Vol 32',
        code: 'https://github.com/TAViT2022/TAViT',
        paper: 'https://ieeexplore.ieee.org/document/9979765',
        desc: 'With the increasing importance of data privacy, distributed learning, where the training datasets ' +
        'are not aggregated by the central server, has been in the spotlight.' +
        'However, existing distributed learning methods has focused on a single task, ' +
        'while the demand for multi-task system in distributed learning has been increased. ' +
        'In this paper, we propose a novel task-agnostic distributed learning framework by introducing ' +
        'task-specific CNN encoder and decoder on each client connected with task-agnostic Transformer on the server. ' +
        'With capacity of Transformer with less inductive bias and alternative optimization method, the proposed method shows ' +
        'comparable or better performance on four image processing tasks, without fine-tuning for each task.'
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

