const post=` 
# Image Difference Finder

![finder-main](https://images.unsplash.com/photo-1516382799247-87df95d790b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1474&q=80)

source: Agence Olloweb of Unsplash
  


## Project link
https://github.com/jeongsol-kim/difference_finder


## Install

\`\`\`
pip install difference-finder
\`\`\`

> 🛎️ This is an on-going project. There would be several changes, but I hope to maintain the core idea.

## Motivation

With the extensive exploration of machine learning techniques, the quality of reconstructed images has reached a saturation point. Consequently, comparing baseline methods has become challenging. While quantitative evaluations may indicate marginal improvements, demonstrating qualitative enhancements has been difficult (in my experience).

Hence, I decided to make a python library that could spot the different points between two images, namely _**Difference-Finder**_.

## Quick start

\`\`\`python
from pathlib import Path
from difference_finder.finder import Finder

img1 = Path(<img_path_1>)
img2 = Path(<img_path_2>)
worker = Finder(pre_processor='identity',
                post_processor='identity',
                strategy='gradient',
                metric='psnr',
                device='cuda')
results = worker.run(img1, img2)
\`\`\`

## Expected input and output

### INPUT
Here, _img1_ and _img2_ could be image file path, image file directory, or pytorch tensor. 

1. file path: Available image files are _.png_, _.jpeg_ and _.jpg_.

2. directories: The number of image files should be the same.

3. Pytorch Tensor: Assumed to have the shape (H, W), (C, H, W), (H, W, C), (N, C, H, W), or (N, H, W, C).

### OUTPUT
Currently, the output is _numpy.ndarray_ size of (H, W).
For the channel dimension, difference map will be averaged. For the batch dimension, only the first sample will be returned. If file directories are given, the output will be the list of _numpy.ndarray_ whose length is the same as the number of files. 

> 🚀 There will be an update for the output shape. One would be allowed to use 'reduce_mean', to get multi-batch result, and to get other data type such as _torch.Tensor_. 


## Architecture
In fact, finding differences between two images could readily be done via simple pixel-wise subtraction. 

However, there are many rooms to improve the performance of the difference finder. 
For example, we can leverage either high-frequency components or low-frequency components solely to enhance the differences.
Furthermore, we can visually enhance the result images that indicates the differences by clamping the pixel values.
Moreover, one can utilize image quality metrics including Peak Signal-to-Noise Ratio (PSNR) or Structural Simailarity Index Measure (SSIM).

 To sum up, I designed the following architecture.

![architecture](https://github.com/jeongsol-kim/difference_finder/blob/main/figures/structure.png?raw=true)

Basically, _**Difference-Finder**_ consists of pre- and post- processors, strategy and metric modules. The pre- and post- processors involve to difference map enhancement, while the strategy and metric modules involve to measure the pixel-wise differences between given two images. In the following sections, I will describe each modules briefly.

## Pre-processor
Currently, the following modules are implemented. Note that written codes are pseudocodes to show the concept, not the implementations.

**Identity** (name: _identity_)
\`\`\`python
def idendity(x: torch.Tensor) -> torch.Tensor:
    return x
\`\`\`
- Do nothing.
- Default option

**Normalization** (name: _normalize_)
\`\`\`python
def normalization(x: torch.Tensor) -> torch.Tensor:
    return (x-x.min())/(x.max()-x.min())
\`\`\`
- Pixel value normalization to [0..1].

**High-pass filter** (name: _highpass_filter_)
\`\`\`python
def highpass_filter(x: torch.Tensor, factor: float) -> torch.Tensor:
    kspace = fft2d(x)
    kspace = get_high_freq(kspace, factor)
    return ifft2d(kspace)
\`\`\`
- Take high-frequency components only: sensitive to edges.
- Fill zeros to central points of K-space according to _factor_.
- The default value of _factor_ is 0.1, which means that central 30 pixels are filled with zeros for the image size of 300 pixels. Thi value of _factor_ is fixed for now.

**Low-pass filter** (name: _lowpass_filter_)
\`\`\`python
def lowpass_filter(x: torch.Tensor, factor: float) -> torch.Tensor:
    kspace = fft2d(x)
    kspace = get_low_freq(kspace, factor)
    return ifft2d(kspace)
\`\`\`
- Take low-frequency components only: sensitive to pixel values.
- Fill zeros to boundary points of K-space according to _factor_.
- The default value of _factor_ is 0.9, which means that central 270 pixels are ones while the boundary 30 pixels are zero for the image size of 300 pixels. The value of _factor_ is fixed for now.


## Post-processor
Currently, there is no variants for the post processor, but it is planned to implement some processors. Plsease check the project repository.

**Idendity** (name: _identity_)
\`\`\`python
def identity(x: torch.Tensor) -> torch.Tensor:
    return x
\`\`\`
- Do nothing
- Default option

## Strategy
The _Strategy_ modules is the core part for detecting the difference between two images. Currently, there exist two strategies, one is _difference_ and the other one is _gradient_.

### Difference (name: _difference_)
![strategy-difference](https://github.com/jeongsol-kim/difference_finder/blob/main/figures/strategy1.png?raw=true)

The strategy _difference_ is a simple compuation of pixel-wise absolute difference between two images. This strategy works for many cases.
When you set the strategy as _difference_, the finder will ignore given _Metric_ option.

### Gradient (name: _gradient_)
![strategy-gradient](https://github.com/jeongsol-kim/difference_finder/blob/main/figures/strategy2.png?raw=true)

This strategy is somewhat different to simple _difference_. This will calculate the gradient of one input image with respect to calculated (scalar-valued) metric. One pixel of returend gradient indicates "how much the pixel contributes to the metric". Hence, the metric function **must be differentiable** by the pytorch auto-grad backend. It is recommanded to construct all metric functions via pytorch operations. Some _Metric_ modules are based on external libararies. This strategy is set as a **default** value.

## Metric
The _Metric_ module is for the strategy _gradient_. It is possible to implement your own image quality metric as well as to use pre-implemented metric. The following metrics are implemented for now.

\`\`\`
[x] MSE ('mse') : Mean Squared Error
[x] PSNR ('psnr') : Peak Signal-to-Noise Ratio
[x] SSIM ('ssim') : Structural Similarity Index Measure
[x] MS-SSIM ('ms-ssim') : Multi-scale SSIM
[x] LPIPS ('lpips') : i.e. perceptual loss
\`\`\`

## Conclusion

The latest version works well for two images that includes very small size of differences. See the below example.

![example](https://github.com/jeongsol-kim/difference_finder/blob/main/figures/example.png?raw=true)

The _Strategy_ is set to _gradient_ and the _Metric_ is set to _psnr_. You can readily find seven difference spots from the difference map which is quite hard to identify from the left two images by naked eyes.

However, this project could be improved. There are many lines of TODO. My final goal is to use this project for the qualitative comparions of computer vision papers. Anyway, there will be some announcements for updates, maybe in my next free time. 

If you think the project is cool, please remain a star in the repository. If you have any useful idea, please leave it in the issue. All contributes are welcome. Thanks.
`

const _post = post;
export { _post as post };
