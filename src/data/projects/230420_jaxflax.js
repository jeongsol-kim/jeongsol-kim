const post=` 
# Simple JAX-FLAX implementation

![main_figure](https://images.unsplash.com/photo-1559600279-23b5cc415412?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80)

## Project link
https://github.com/jeongsol-kim/jax_practice

> warning. This project is built in 2022 with older version of JAX and FLAX. There would be simpler way to implement the same thing. I will update codes in the future.

## What is JAX?
![jax_logo](https://modulabs.co.kr/wp-content/uploads/2023/02/jax_logo-1536x480.jpg)

_**JAX**_ is a library developed by Google for scientific calculation. It supports various features including parallel computating, GPU acceleration, and auto-grad. 

For the general usage for the scientific computations, developers of _JAX_ has imitated a popular library called numpy. Literally, you can use _JAX_ as numpy. 

Furthermore, it provides a compiler (even it is a python library!) so that the runtime for repeated process could be reduced significantly. In other words, it supports just-in-time functions.

There would exist lots of applications for _JAX_, but the most attractive area (to me) is machine learning. Specifically, it provides very simple way of parallel computation without deep understading on it.


## What is FLAX?

However, quite complicate code writing is required to build a neural network model solely using _JAX_. 

You need to implement enormous modules which are composed of basic operations of numpy such as matrix multiplication and convolution. 

To mitigate this, Google also has developed a library called _**FLAX**_, which provides pre-defined layer modules such as fully-connected, or conv2d. Of course, their underlying computations rely on _JAX_ so all useful features are inherited. 


## Then, everything is ok?

Unfortunately, there exists remaining issues to build entire process of training and inference with current deep-learning models. 

Particularly, it is different with _Pytorch_ in many ways. For example, every _pytorch_ module classes contain their parameters, while _FLAX_ module classes work as placeholders. This means that parameters are independently handeled with _FLAX_ model which makes more complex update rules than optimizer.step( ) of pytorch.

In the followings, I simply write what kinds of codes are required to

- initialize model and optimizer
- apply one optimization step

for _Pytorch_ and _JAX_-_FLAX_ with assumptions:

- neural network contains batch normalization
- loss and prediction are returned after one opimization step
- input is 32x32x1 images and output is same size of images

You don't need to understand the meaning of every line. Just look at how different two libraries are.

\`\`\`python
# Pytorch

# Initialize model and optimizer
net = Model().train()
optim = torch.Adam(net.parameters(), lr=1e-4)

...

# Apply one optimization step
def Loss(prediction, label):
    return torch.linalg.norm((prediction-label).flatten())**2

def train_step(in_, label):
    optim.zero_grad()
    output = net(in_)
    loss = Loss(label, output) 
    loss.backward()
    optim.step()

    return loss, output

\`\`\`

\`\`\`python
#JAX & FLAX

# Initialize model and optimizer
rng = random.PRNGKey(seed=123)
net = Model(train=True)
dummy_x = jnp.ones((1,32,32,1), dtype=jnp.float32)
state = net.init(rng, dummy_x)  # for compilation.

optim = optax.adam(learning_rate=1e-4)
train_state = TrainState.create(
    apply_fn=autoencoder.apply,
    params=state["params"],
    tx=optim,
    batch_stats=state["batch_stats"]
)

...

# Apply one optimization step
@jax.vmap
def Loss(prediction, label):
    return ((prediction-label)**2).sum()**0.5

@jax.jit
def train_step(state, in_):
    def loss_fn(params, variables):
        output, variables = state.apply_fn(
            {
            'params':params, 
            'batch_stats': variables['batch_stats']
            },
            in_,
            mutable=['batch_stats']
        )
        
        loss = Loss(output, in_).mean()
        return loss, (variables, output)

    grad_fn = jax.value_and_grad(
        loss_fn,
        argnums=0,
        has_aux=True
    )
    
    aux, grads = grad_fn(
        state.params,
        {'batch_stats':state.batch_stats}
    )
    loss, (variavles, output) = aux
    state = state.apply_gradients(
        grads=grads,
        batch_stats=variables["batch_stats"]
    )
    return state, loss, recon

\`\`\`

Due to the nature of _JAX_, we need to handle parameters using another object called 'state'. Also, statistical variables in some layers such as batch normalization should be handled separately. 

Yes, it is obviously longer than pytorch, but once you get used to it, it promises satisfactory performance and the implementation of complex models in a simple way, thanks to characteristic features such as JIT and vmap.

## Here are some simple, clear examples

As a result, I published a github repository that provides several examples on image processing tasks including autoencoder, classification, denoising, and generation (WGAN-GP). 

Actually, it was created for my understanding to _JAX_ and _FLAX_ implementation, but I hope that this could help your understanding on how to define neural networks using _FLAX_, loss functions, and how to update parameters.
`

const _post = post;
export { _post as post };
