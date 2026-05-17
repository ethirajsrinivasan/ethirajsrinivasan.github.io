import type { BlogPost } from '@/types/blog'
import BlogShell from '@/components/blog/shell'
import MarkdownBody from '@/components/blog/MarkdownBody'

const post: BlogPost = {
  slug: "from-blueprint-to-reality-unleashing-the-potential-of-creational-patterns",
  title: "From Blueprint To Reality Unleashing The Potential Of Creational Patterns",
  date: "Unknown",
  image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=1200&q=80",
  excerpt: "A Comprehensive Exploration of Design Patterns for Crafting Objects with Precision and Elegance...",
  readTime: "5 min read",
  content: `[](from-blueprint-to-reality-unleashing-the-potential-of-creational-patterns.html#from-blueprint-to-reality-unleashing-the-potential-of-creational-patterns)From Blueprint to Reality: Unleashing the Potential of Creational Patterns

A Comprehensive Exploration of Design Patterns for Crafting Objects with Precision and Elegance

[![Factory](https://camo.githubusercontent.com/6510c01b0e105b0de9b8c146fde9888b9f46d8f1cddce0234a4e7491bfdb747b/68747470733a2f2f696d616765732e756e73706c6173682e636f6d2f70686f746f2d313538353235323135353236312d636666333139343464373831)](https://camo.githubusercontent.com/6510c01b0e105b0de9b8c146fde9888b9f46d8f1cddce0234a4e7491bfdb747b/68747470733a2f2f696d616765732e756e73706c6173682e636f6d2f70686f746f2d313538353235323135353236312d636666333139343464373831)

Photo by Andreas Felske on Unsplash

In my previous article [Demystifying Creational Patterns: A Roadmap to Effective Object Creation](https://ethigeek.com/blogs/demystifying-creational-patterns-a-roadmap-to-effective-object-creation.html), I stated the need for creational patterns and illustrated them using two creational patterns: Factory Method Pattern and Builder Pattern. So in short creational patterns focus on creating objects in a way that promotes encapsulation, decoupling, and flexibility.

                    ![](https://images.unsplash.com/photo-1594585098652-21c58491eb0e)
                    
                    Demystifying Creational Patterns: A Roadmap to Effective Object Creation
                    In my previous article, I spoke about fault tolerance design patterns in distributed systems. In thi...

In this article, we will look at the following two design patterns in detail

- Singleton pattern

- Prototype pattern

[](from-blueprint-to-reality-unleashing-the-potential-of-creational-patterns.html#singleton-pattern)Singleton Pattern

Singleton pattern are used to make sure that only one instance of a class is created and provides global access to it. It uses a private constructor to prevent direct object instantiation and the static method provides access to the single instance.

[![Same User behind every door](../assets/github_249115710-0e2a3c35-4501-4455-9cf2-063e509a90e0.png)](../assets/github_249115710-0e2a3c35-4501-4455-9cf2-063e509a90e0.png)

Singleton Class (Same User behind every door)

Lets us look at an example:

\`\`\`
public class Logger {
    private static Logger instance;
    
    // Private constructor to prevent direct instantiation
    private Logger() {
        // Initialization code, if needed
    }
    
    // Static method to provide access to the single instance
    public static Logger getInstance() {
        if (instance == null) {
            instance = new Logger();
        }
        return instance;
    }
    
    // Method to log a message
    public void log(String message) {
        System.out.println("Logging message: " + message);
        // Log message implementation goes here
    }
}
\`\`\`

In the example above Logger class has a private constructor \`Logger\` and \`getInstance\` method which provides a single instance of the class.

\`\`\`
public class Main {
    public static void main(String[] args) {
        Logger logger = Logger.getInstance();
        logger.log("An important message");

        // Trying to create a new instance will give us the existing instance
        Logger anotherLogger = Logger.getInstance();
        anotherLogger.log("Another message");

        // Output:
        // Logging message: An important message
        // Logging message: Another message
    }
}
\`\`\`

The above example states that only one instance of the class gets created regardless of the number of times \`getInstance()\` is called. 

The singleton pattern ensures that all the components share the same logger instance. This helps in centralized logging and ensures all messages are recorded by the same logger object. 

Thus singleton pattern is used when one instance of an object needs to be created and has to be shared across other components.

[](from-blueprint-to-reality-unleashing-the-potential-of-creational-patterns.html#prototype-pattern)Prototype pattern

Prototype pattern allows the creation of objects by cloning existing instances thereby reducing the need to create new instances from scratch. It has a prototype object and uses that object to create new objects by cloning. It is used when new object creation is expensive and complex.

[![Same type of scooter in production line](https://camo.githubusercontent.com/180ab2da98272daa580bcf4f7a6dd12e1cccb4ec07a2296a8cf1f3ead7113374/68747470733a2f2f696d616765732e756e73706c6173682e636f6d2f70686f746f2d313539393438363835383139302d6135366132356434363136623f69786c69623d72622d342e302e3326697869643d4d3377784d6a4133664442384d48787761473930627931775957646c664878386647567566444238664878386641253344253344266175746f3d666f726d6174266669743d63726f7026773d3239343026713d3830)](https://camo.githubusercontent.com/180ab2da98272daa580bcf4f7a6dd12e1cccb4ec07a2296a8cf1f3ead7113374/68747470733a2f2f696d616765732e756e73706c6173682e636f6d2f70686f746f2d313539393438363835383139302d6135366132356434363136623f69786c69623d72622d342e302e3326697869643d4d3377784d6a4133664442384d48787761473930627931775957646c664878386647567566444238664878386641253344253344266175746f3d666f726d6174266669743d63726f7026773d3239343026713d3830)

Photo by Kumpan Electric on Unsplash

Let's consider a scenario where we have a design application that can create and customize shapes. Prototype pattern is used to clone the existing shape objects and modify them as per requirement instead of creating each shape object from scratch.

\`\`\`
// Prototype interface
public interface Shape extends Cloneable {
    void draw();
    Shape clone();
}

// Concrete implementation of Shape
public class Circle implements Shape {
    private int radius;

    public Circle(int radius) {
        this.radius = radius;
    }

    @Override
    public void draw() {
        System.out.println("Drawing a circle with radius " + radius);
    }

    @Override
    public Shape clone() {
        try {
            return (Shape) super.clone();
        } catch (CloneNotSupportedException e) {
            return null;
        }
    }
}

// Client code
public class GraphicDesignApp {
    public static void main(String[] args) {
        // Create a prototype circle
        Circle circlePrototype = new Circle(10);

        // Clone the circle and customize
        Shape circle1 = circlePrototype.clone();
        circle1.draw();

        ((Circle) circle1).setRadius(15);
        circle1.draw();

        // Clone the circle again and customize
        Shape circle2 = circlePrototype.clone();
        ((Circle) circle2).setRadius(8);
        circle2.draw();
    }
}
\`\`\`

The \`shape\` interface has the \`clone\` and \`draw\` method. The \`circle\` class implements the interface and has its modification of the \`radius\` field.

In the \`GraphicDesignApp\` \`circlePrototype\` object is created and new circle objects are created by cloning and modifying the radius and then \`draw()\` is called to visualize it. 

Do note that \`clone()\` in Java performs a shallow copy. If there are mutable fields a deep copy must be performed to create a cloned object.

Thus prototype pattern is useful when creating complex objects and each object requires a variation. It makes use of the existing object to reduce the overhead of object creation.

Do note that each creational design pattern has its own set of requirements and constraints.Hope the above explanations and implementation examples give you clarity on the creational designer pattern.Happy creating objects !!!

    &#x2022;     &#x2022;     &#x2022;

      Follow Me on:
      [ Medium ](https://medium.com/@ethi)
      [ Youtube ](https://www.youtube.com/channel/UCkdAJA03TJXhb_tNjTyl_nA?sub_confirmation=1)
      [ Instagram ](https://www.instagram.com/ethirajchandru/)
      
      LinkedIn 
      [ Github ](https://github.com/ethirajsrinivasan/)
      [ Twitter ](https://twitter.com/iamethi)

        Demystifying Sitemaps: Your Pathway to Seamless Website Exploration

        Demystifying Creational Patterns: A Roadmap to Effective Object Creation`,
}

export default function FromBlueprintToRealityUnleashingThePotentialOfCreationalPatternsPage() {
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
