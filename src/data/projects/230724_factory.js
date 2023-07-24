-e const post=` 
# Factory method and Class Instantiation

![factory-main](https://refactoring.guru/images/patterns/content/factory-method/factory-method-en-2x.png?id=b3961995a4449fb90820a693013511df)
(source: https://refactoring.guru/design-patterns/factory-method)

## Summary
Add abstract factory code and use a common factory method for instantiating an object.

## Details with code example
Let's look the object instantiation code without factory method.
\`\`\`python
# product interface
class Animal:
	def speak(self):
		print('')

# concrete products
class Dog(Animal):
	def speak(self):
		print('Bow')

class Cat(Animal):
	def speak(self):
		print('Meow')

# client code
animal_type = 'dog'  # user input

# here is the problematic region
if animal_type == 'dog':
	animal = Dog()
elif animal_type == 'cat':
	animal = Cat()
else:
	raise NameError()

animal.speak()
\`\`\`

This can induce the following problems. I think  1) and 2) are critical.
1) If you want to instantiate multiple animals, you need to copy-and-paste the if-else statement at where you creates the object. (**Duplication**)
2) When new type of animal is added, you need to fix every if-else statement where you creates the object. (**Low Flexibility**)
3) Hard to test and manage when the entire code becomes larger.

*In summary, there is strong coupling between the client code and concrete products.*

Then, what happens if you use the factory method?

\`\`\`python
# product interface
class Animal:
	def speak(self):
		print('')

# concrete product
class Dog(Animal):
	def speak(self):
		print('Bow')

class Cat(Animal):
	def speak(self):
		print('Meow')

# creator interface
class AnimalFactory:
	def create_animal(self):
		pass

# concrete creators
class DogFactory(AnimalFactory):
	def create_animal(self):
		return Dog()

class CatFactory(AnimalFactory):
	def create_animal(self):
		return Cat()

# client code
animal_type = 'dog'  # user input

# replace direct instantiation with factory
if animal_type == 'dog':
	factory = DogFactory()
elif animal_type == 'cat':
	factory = CatFactory()
else:
	raise NameError()

# this is better instantiation by factory
animal = factory.create_animal()
animal.speak()
\`\`\`

Now, you can see the object instantiation is done by common factory method "*create_animal( )*". Once you create the factory, you can re-use it when you generate an object using only a single line code, *factory.create_animal( )*.

*Factory method reduces the coupling between the client code and the concrete product.*

## Factory method with configuration

However, I felt that this is sub-optimal. As you can see, there is still a strong coupling between the animal_type and the factory due to if-else statement. When you want to add a new type of animal, you always change the factory instantiation part. No way...

At this point, we can use *Factory method with configuration*. Let's see the code. 

\`\`\`python
# product interface
class Animal:
	def speak(self):
		print('')

# concrete product
class Dog(Animal):
	def speak(self):
		print('Bow')

class Cat(Animal):
	def speak(self):
		print('Meow')

# creator interface
class AnimalFactory:
	def create_animal(self):
		pass

# concrete creators
class DogFactory(AnimalFactory):
	def create_animal(self):
		return Dog()

class CatFactory(AnimalFactory):
	def create_animal(self):
		return Cat()

# client code
animal_type = 'dog'  # user input

factories = {'dog': DogFactory,
			 'cat': CatFactory}

# replace direct instantiation with factory
factory = factories[animal_type]()

# this is better instantiation by factory
animal = factory.create_animal()
animal.speak()
\`\`\`

Now, it looks much better! You don't have to change anything for the object instantiation. The only thing you need to change is *factories*. How simple it is!

## My favorite pattern

Furthermore, you can use decorator and function wrapping to further enhance the flexibility of the code. This is my favorite creational pattern.

\`\`\`python
ANIMAL = {}

def register_animal(name):
	def wrapper(cls):
		if ANIMAL.get(name) is not None:
			raise NameError('Already registered.')
		ANIMAL[name] = cls
		return cls
	return wrapper

def get_animal(name):
	if ANIMAL.get(name) is None:
		raise NameError('Not exist.')
	return ANIMAL[name]

class Animal:
	def speak(self):
		pass

@register_animal(name='dog')
class Dog(Animal):
	def speak(self):
		print('bow')

@register_animal(name='cat')
class Cat(Animal):
	def speak(self):
		print('meow')

# client code
animal_type = 'dog'  # user input

animal = get_animal(name=animal_type)
animal.speak()
\`\`\`

Cool. Isn't it? I don't know whether this pattern is also belong to the factory method.
But, this can also decouple the concrete products and client code. Furthermore, you don't have to change anything in the client code even if there is some changes in Animal classes.
`

const _post = post;
export { _post as post };
