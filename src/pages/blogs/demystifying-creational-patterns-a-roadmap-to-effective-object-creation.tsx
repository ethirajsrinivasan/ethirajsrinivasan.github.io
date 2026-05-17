import type { BlogPost } from '@/types/blog'
import BlogShell from '@/components/blog/shell'
import MarkdownBody from '@/components/blog/MarkdownBody'

const post: BlogPost = {
  slug: "demystifying-creational-patterns-a-roadmap-to-effective-object-creation",
  title: "Demystifying Creational Patterns A Roadmap To Effective Object Creation",
  date: "Unknown",
  image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=1200&q=80",
  excerpt: "[](demystifying-creational-patterns-a-roadmap-to-effective-object-creation.html#harnessing-the-power-of-design-patterns-for-streamlined-and-scalable-o...",
  readTime: "5 min read",
  content: `[](demystifying-creational-patterns-a-roadmap-to-effective-object-creation.html#demystifying-creational-patterns-a-roadmap-to-effective-objectcreation)Demystifying Creational Patterns: A Roadmap to Effective Object Creation

[](demystifying-creational-patterns-a-roadmap-to-effective-object-creation.html#harnessing-the-power-of-design-patterns-for-streamlined-and-scalable-object-instantiation)Harnessing the Power of Design Patterns for Streamlined and Scalable Object Instantiation

In [my previous article](https://medium.com/r/?url=https%3A%2F%2Fbootcamp.uxdesign.cc%2Ffault-tolerance-design-patterns-in-distributed-systems-49853ad237b4), I spoke about fault tolerance design patterns in distributed systems. In this article, I will talk about the design patterns used for object creation.

                    ![](https://miro.medium.com/v2/resize:fit:1200/1*ZXkG9JZZIbvyo8K7QLYgoA.png)
                    
                    Fault Tolerance Design Patterns in Distributed Systems | by Ethiraj Srinivasan | Bootcamp
                    Distributed systems are made up of multiple interconnected components that work together to provide ...

Creational patterns are a subset of design patterns that describes the object creation mechanisms. It helps to create objects flexibly and efficiently and provides loose coupling between classes. These design patterns provide abstraction in the object creation process, hiding the specific details during object instantiation.

Creational patterns are useful when the object creation is complex, has multiple steps, or requires creating different types of objects based on certain constraints. Creational Patterns aim to make the code maintainable, easier, and extensible.

Some of the creational patterns are

- Factory method pattern

- Builder pattern

- Singleton pattern

- Abstract factory pattern

- Prototype pattern

Each creational pattern has its requirement and scenarios. We will look at the Factory method pattern and Builder pattern in detail.

[](demystifying-creational-patterns-a-roadmap-to-effective-object-creation.html#factory-method-pattern)Factory Method Pattern

Factory Method Pattern provides an interface for object creation and allows subclasses to alter the object instantiated. The object creation logic is encapsulated in a separate method called the factory method.

[![Factory](https://camo.githubusercontent.com/1008916252f63b5b7533dcbe187f91849512d9bd22662a81bd864fad53679207/68747470733a2f2f696d616765732e756e73706c6173682e636f6d2f70686f746f2d313537383737363334393039302d6465363164613030666631613f69786c69623d72622d342e302e3326697869643d4d3377784d6a4133664442384d48787761473930627931775957646c664878386647567566444238664878386641253344253344266175746f3d666f726d6174266669743d63726f7026773d3135383726713d3830)](https://camo.githubusercontent.com/1008916252f63b5b7533dcbe187f91849512d9bd22662a81bd864fad53679207/68747470733a2f2f696d616765732e756e73706c6173682e636f6d2f70686f746f2d313537383737363334393039302d6465363164613030666631613f69786c69623d72622d342e302e3326697869643d4d3377784d6a4133664442384d48787761473930627931775957646c664878386647567566444238664878386641253344253344266175746f3d666f726d6174266669743d63726f7026773d3135383726713d3830)

Photo by Alex Simpson on Unsplash

The factory method provides loose coupling as the client code depends only on the interface of the factory rather than any specific class. Thus new subclasses can be added without modifying any of the client code as long as it follows the factory method's interface.

\`\`\`
// Fruit interface
interface Fruit {
    void display();
}

// Orange class implementing Fruit
class Orange implements Fruit {
    @Override
    public void display() {
        System.out.println("This is an orange.");
    }
}

// Apple class implementing Fruit
class Apple implements Fruit {
    @Override
    public void display() {
        System.out.println("This is a apple.");
    }
}

// Factory class for creating fruits
class FruitFactory {
    public Fruit createFruit(String fruitType) {
        if (fruitType.equalsIgnoreCase("orange")) {
            return new Orange();
        } else if (fruitType.equalsIgnoreCase("apple")) {
            return new Apple();
        }
        // Handle additional fruit types here
        
        return null; // Return null if the requested fruit type is not supported
    }
}

// Game class
class Game {
    private FruitFactory fruitFactory;
    
    public Game() {
        fruitFactory = new FruitFactory();
    }
    
    public void collectFruit(String fruitType) {
        Fruit fruit = fruitFactory.createFruit(fruitType);
        if (fruit != null) {
            System.out.println("Collected a fruit!");
            fruit.display();
        } else {
            System.out.println("Sorry, the requested fruit is not available.");
        }
    }
}

// Usage
public class Main {
    public static void main(String[] args) {
        Game game = new Game();
        
        game.collectFruit("apple"); // Output: Collected a fruit! This is an apple.
        game.collectFruit("orange"); // Output: Collected a fruit! This is a orange.
        game.collectFruit("banana"); // Output: Sorry, the requested fruit is not available.
    }
}
\`\`\`

In the example above the Fruit interface describes the common behaviour of fruits. \`Apple\` and \`Orange\` are implementations of the Fruit interface.

\`FruitFactory\` class is the factory and \`createFruit()\` is the factory method that takes fruit type as the parameter. It instantiates specific fruit class based on the parameter.

The \`Game\` class uses the fruit factory to create and collect fruits. The \`collectFruit()\` method with the specific fruit type as a parameter is responsible for creating and collecting fruits.

In the \`main()\` method, we create an instance of the Game class and call the \`collectFruit()\` method. The FruitFactory creates the fruits and displays the fruit.

Thus a Factory Method Pattern helps to instantiate different fruits with the flexibility to add new fruits to the game without modifying the Game class ( client code).

[](demystifying-creational-patterns-a-roadmap-to-effective-object-creation.html#builder-pattern)Builder Pattern

The builder pattern helps to build a complex object step by step. The construction and representation of the object are separated using this pattern and allow the same process to create different object representations.

[![Car factory](https://camo.githubusercontent.com/33253ca6d18a748cd878e91ae0432a86774c857ffb5d9a003af3e038e7d6001f/68747470733a2f2f696d616765732e756e73706c6173682e636f6d2f70686f746f2d313633313437353031323039372d6430373465386139323539373f69786c69623d72622d342e302e3326697869643d4d3377784d6a4133664442384d48787761473930627931775957646c664878386647567566444238664878386641253344253344266175746f3d666f726d6174266669743d63726f7026773d3230373026713d3830)](https://camo.githubusercontent.com/33253ca6d18a748cd878e91ae0432a86774c857ffb5d9a003af3e038e7d6001f/68747470733a2f2f696d616765732e756e73706c6173682e636f6d2f70686f746f2d313633313437353031323039372d6430373465386139323539373f69786c69623d72622d342e302e3326697869643d4d3377784d6a4133664442384d48787761473930627931775957646c664878386647567566444238664878386641253344253344266175746f3d666f726d6174266669743d63726f7026773d3230373026713d3830)

Photo by Baron on Unsplash

It helps in the readability and maintenance of the code by providing a clear way to get the required properties of the object during instantiation.

\`\`\`
// Car class
class Car {
    private String engine;
    private boolean hasSunroof;
    private String transmission;
    private int numWheels;
    private String color;

    private Car(Builder builder) {
        this.color = builder.color;
        this.numWheels = builder.numWheels;
        this.hasSunroof = builder.hasSunroof;
        this.engine = builder.engine;
        this.transmission = builder.transmission;
    }
    
    // Getters for the car properties
    public String getTransmission() {
        return transmission;
    }
    
    public boolean hasSunroof() {
        return hasSunroof;
    }

    public String getColor() {
        return color;
    }

    public int getNumWheels() {
        return numWheels;
    }
    
    public String getEngine() {
        return engine;
    }
    
    // Builder class
    static class Builder {
        private String color;
        private boolean hasSunroof;
        private String transmission;
        private int numWheels;
        private String engine;
        
        public Builder setColor(String color) {
            this.color = color;
            return this;
        }

        public Builder setNumWheels(int numWheels) {
            this.numWheels = numWheels;
            return this;
        }

        public Builder setTransmission(String transmission) {
            this.transmission = transmission;
            return this;
        }
        
        public Builder setHasSunroof(boolean hasSunroof) {
            this.hasSunroof = hasSunroof;
            return this;
        }

        public Builder setEngine(String engine) {
            this.engine = engine;
            return this;
        }
        
        public Car build() {
            return new Car(this);
        }
    }
}

// Usage
public class Main {
    public static void main(String[] args) {
        Car car = new Car.Builder()
                    .setColor("Black")
                    .setEngine("V8")
                    .setTransmission("Manual")
                    .setNumWheels(4)
                    .setHasSunroof(true)
                    .build();
                    
        System.out.println("Color: " + car.getColor());
        System.out.println("Engine: " + car.getEngine());
        System.out.println("Transmission: " + car.getTransmission());
        System.out.println("Number of Wheels: " + car.getNumWheels());
        System.out.println("Has Sunroof: " + car.hasSunroof());
    }
}
\`\`\`

In the example above the \`Car.Builder\` class acts as the builder for the car construction. The car has different properties like color, engine, transmission, number of wheels, and sunroof.

The \`Car\` class has a private constructor with the builder object as its parameter. It then constructs the car based on the builder values.

The builder class provides the setter methods for the desired car properties and these methods return the builder object to support method chaining.

In the \`main()\` method, an instance of the car is created with the desired properties using the builder, and \`build()\` method is called to get the constructed car object.

This example shows how builder pattern can be used to construct a object with the desired properties using a flexible and readable manner. It allows the client code to configure the desired properties while ignoring other properties. 

Hope the above explanations and implementation examples give you clarity on the creational designer pattern. Do note that each creational design pattern has its own set of requirements and constraints. Happy creating objects !!!

    &#x2022;     &#x2022;     &#x2022;

      Follow Me on:
      [ Medium ](https://medium.com/@ethi)
      [ Youtube ](https://www.youtube.com/channel/UCkdAJA03TJXhb_tNjTyl_nA?sub_confirmation=1)
      [ Instagram ](https://www.instagram.com/ethirajchandru/)
      
      LinkedIn 
      [ Github ](https://github.com/ethirajsrinivasan/)
      [ Twitter ](https://twitter.com/iamethi)

        From Blueprint to Reality: Unleashing the Potential of Creational Patterns

        Custom Actuator Prometheus Metric For Better Spring Boot Application Monitoring`,
}

export default function DemystifyingCreationalPatternsARoadmapToEffectiveObjectCreationPage() {
  return (
    <BlogShell
      slug={post.slug}
      title={post.title}
      excerpt={post.excerpt}
      image={post.image}
      date={post.date}
      readTime={post.readTime}
    >
      <MarkdownBody content={post.content} />
    </BlogShell>
  )
}
