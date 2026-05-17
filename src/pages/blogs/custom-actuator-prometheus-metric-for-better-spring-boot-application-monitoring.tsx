import type { BlogPost } from '@/types/blog'
import BlogShell from '@/components/blog/shell'
import MarkdownBody from '@/components/blog/MarkdownBody'

const post: BlogPost = {
  slug: "custom-actuator-prometheus-metric-for-better-spring-boot-application-monitoring",
  title: "Custom Actuator Prometheus Metric For Better Spring Boot Application Monitoring",
  date: "Unknown",
  image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=1200&q=80",
  excerpt: "This article describes a elegant way to add custom actuator prometheus metric to spring boot applications. Spring boot, a powerful java based framewor...",
  readTime: "5 min read",
  content: `[](custom-actuator-prometheus-metric-for-better-spring-boot-application-monitoring.html#custom-actuator-prometheus-metric-for-better-spring-boot-application-monitoring)Custom Actuator Prometheus Metric For Better Spring Boot Application Monitoring

This article describes a elegant way to add custom actuator prometheus metric to spring boot applications. Spring boot, a powerful java based framework to develop micro services web application provides many easy to configure solutions for developers need. Developing a microservices application is complete only when we can monitor these microservices. Spring boot provides Actuator to help monitor these microservices. Actuator uses HTTP endpoints to provide information about the application. Actuator provides lot of metrics like the database connections , thread information, memory information, HTTP client and server requests etc. Below are the 3 steps to add custom actuator prometheus metrics in spring boot

- Enable actuator in spring boot application

- Add prometheus micrometer to the application

- Add custom metrics to micrometer prometheus

[](custom-actuator-prometheus-metric-for-better-spring-boot-application-monitoring.html#)•     •     •

[](custom-actuator-prometheus-metric-for-better-spring-boot-application-monitoring.html#enable-actuator-in-spring-boot-application)Enable Actuator in Spring Boot Application

In order to add actuator to the spring boot application add the following to pom.xml

For Maven

\`\`\`
<dependency>
	<groupId>org.springframework.boot</groupId>
	<artifactId>spring-boot-starter-actuator</artifactId>
</dependency>
\`\`\`

Run your spring application using

\`\`\`
mvn spring-boot:run
\`\`\`

The application will run on port 8080. Go to [http://localhost:8080/actuator](http://localhost:8080/actuator) to view the actuator end points.

[![Actuator End Point](https://user-images.githubusercontent.com/7569031/233104414-32731ea3-a848-4b41-bf13-671fd3a73931.png)](https://user-images.githubusercontent.com/7569031/233104414-32731ea3-a848-4b41-bf13-671fd3a73931.png)

The actuator provides a health check endpoint which shows the status of the application. The status is "UP" if the application is healthy and "DOWN" if there are any issues

[![Health EndPoint](https://user-images.githubusercontent.com/7569031/233108139-1bd8bb24-e095-4a07-a5e5-0ba972e79eea.png)](https://user-images.githubusercontent.com/7569031/233108139-1bd8bb24-e095-4a07-a5e5-0ba972e79eea.png)

Actuator does provide more than just the health information. To unlock its true potential expose its endpoint to the outside world. To do this include the following in application.properties

\`\`\`
management.endpoint.info.enabled=true
management.endpoints.web.exposure.include=*
\`\`\`

Now go to [http://localhost:8080/actuator](http://localhost:8080/actuator) to see more actuator end points exposed like below

\`\`\`
{"_links":{"self":{"href":"http://localhost:8080/actuator","templated":false},
"beans":{"href":"http://localhost:8080/actuator/beans","templated":false},
"caches-cache":{"href":"http://localhost:8080/actuator/caches/{cache}","templated":true},
"caches":{"href":"http://localhost:8080/actuator/caches","templated":false},
"health-path":{"href":"http://localhost:8080/actuator/health/{*path}","templated":true},
"health":{"href":"http://localhost:8080/actuator/health","templated":false},
"info":{"href":"http://localhost:8080/actuator/info","templated":false},
"conditions":{"href":"http://localhost:8080/actuator/conditions","templated":false},
"configprops":{"href":"http://localhost:8080/actuator/configprops","templated":false},
"configprops-prefix":{"href":"http://localhost:8080/actuator/configprops/{prefix}","templated":true},
"env":{"href":"http://localhost:8080/actuator/env","templated":false},
"env-toMatch":{"href":"http://localhost:8080/actuator/env/{toMatch}","templated":true},
"loggers":{"href":"http://localhost:8080/actuator/loggers","templated":false},
"loggers-name":{"href":"http://localhost:8080/actuator/loggers/{name}","templated":true},
"heapdump":{"href":"http://localhost:8080/actuator/heapdump","templated":false},
"threaddump":{"href":"http://localhost:8080/actuator/threaddump","templated":false},
"metrics":{"href":"http://localhost:8080/actuator/metrics","templated":false},
"metrics-requiredMetricName":{"href":"http://localhost:8080/actuator/metrics/{requiredMetricName}","templated":true},
"scheduledtasks":{"href":"http://localhost:8080/actuator/scheduledtasks","templated":false},
"mappings":{"href":"http://localhost:8080/actuator/mappings","templated":false}}}
\`\`\`

As seen above the actuator provides information about beans, env, heapdump, threaddump, metrics etc. In order to get any detailed information click on the link. In case of threaddump click: [http://localhost:8080/actuator/threaddump](http://localhost:8080/actuator/threaddump)

[![Thread Dump Info](https://user-images.githubusercontent.com/7569031/233135743-6ba4d395-574b-49a1-880e-f1a52a5d896e.png)](https://user-images.githubusercontent.com/7569031/233135743-6ba4d395-574b-49a1-880e-f1a52a5d896e.png)

[](custom-actuator-prometheus-metric-for-better-spring-boot-application-monitoring.html#-1)•     •     •

[](custom-actuator-prometheus-metric-for-better-spring-boot-application-monitoring.html#add-micrometer-prometheus-based-metric-to-the-application)Add Micrometer Prometheus based metric to the application

Next to publish the metrics to monitoring tools like Prometheus, Datadog or Dynatrace a standard format is required. Micrometer acts as that intermediate layer to easily interface with the monitoring tools. Prometheus is chosen for this example which is used to perform time series analysis and uses pull based approach. Simply add micrometer prometheus setup to the application by including the below dependency

For Maven

\`\`\`
<dependency>
	<groupId>io.micrometer</groupId>
	<artifactId>micrometer-registry-prometheus</artifactId>
	<scope>runtime</scope>
</dependency>
\`\`\`

Now run the application again to see the new actuator point - [http://localhost:8080/actuator/prometheus](http://localhost:8080/actuator/prometheus).

[![Acutuator Prometheus Metrics](https://user-images.githubusercontent.com/7569031/233418124-8155ef76-19e3-4644-b8bd-7e1e062409e2.png)](https://user-images.githubusercontent.com/7569031/233418124-8155ef76-19e3-4644-b8bd-7e1e062409e2.png)

[](custom-actuator-prometheus-metric-for-better-spring-boot-application-monitoring.html#-2)•     •     •

[](custom-actuator-prometheus-metric-for-better-spring-boot-application-monitoring.html#add-custom-metrics-to-micrometer-prometheus)Add custom metrics to micrometer prometheus

Now that the default prometheus metrics are available time to add the custom metrics. Custom metrics can be added in service or business logic classes. Two objects are essential to build the custom metric

- MeterRegistry

- Metric Type Object - Counter/Gauge/Timer

- Use Spring boot @Autowired annotation to create MeterRegistry

\`\`\`
    @Autowired
    MeterRegistry registry;
\`\`\`

- Next initialize the metric type in constructor or post construct methods like below

\`\`\`
@PostConstruct
public void initialize(){
	counter = Counter.builder("custom_counter_metric").register(registry);
	Gauge.builder("custom_gauge_metric",numbersList,Collection::size).register(registry);
	timer = Timer.builder("custom_timer_metric").register(registry);
}
\`\`\`

- Record the metrics in methods as follows

\`\`\`
//custom logic
counter.increment();
counter.increment(5);
\`\`\`

\`\`\`
//custom logic
timer.record(Duration.between(tenMinuteBefore,LocalDateTime.now()).getSeconds(), TimeUnit.SECONDS);
\`\`\`

A sample service class is as follows

\`\`\`
@Service
public class DemoService {

    @Autowired
    MeterRegistry registry;

    private Counter counter;

    private ArrayList numbersList = new ArrayList<>();

    private Timer timer;

    @PostConstruct
    public void initialize(){
	counter = Counter.builder("custom_counter_metric").register(registry);
	Gauge.builder("custom_gauge_metric",numbersList,Collection::size).register(registry);
	timer = Timer.builder("custom_timer_metric").register(registry);
     }

    public void incrementCounter() {
        //custom logic
        counter.increment();
        counter.increment(5);
    }

    public void processGauge() {
        numbersList.add(new Random());
    }

    public void recordTime() {
        LocalDateTime tenMinuteBefore = LocalDateTime.now().minusMinutes(10);
        //custom logic
        timer.record(Duration.between(tenMinuteBefore,LocalDateTime.now()).getSeconds(), TimeUnit.SECONDS);
    }
}
\`\`\`

Once these methods are called navigate to [http://localhost:8080/actuator/prometheus/](http://localhost:8080/actuator/prometheus/) to see the custom metrics

\`\`\`
# HELP custom_counter_metric_total  
# TYPE custom_counter_metric_total counter
custom_counter_metric_total 6.0
\`\`\`

\`\`\`
# HELP custom_gauge_metric  
# TYPE custom_gauge_metric gauge
custom_gauge_metric 1.0
\`\`\`

\`\`\`
# HELP custom_timer_metric_seconds_max  
# TYPE custom_timer_metric_seconds_max gauge
custom_timer_metric_seconds_max 0.0
# HELP custom_timer_metric_seconds  
# TYPE custom_timer_metric_seconds summary
custom_timer_metric_seconds_count 1.0
custom_timer_metric_seconds_sum 600.0
\`\`\`

Thus custom metrics are added to the spring boot application. Happy Monitoring !!!

    &#x2022;     &#x2022;     &#x2022;

      Follow Me on:
      [ Medium ](https://medium.com/@ethi)
      [ Youtube ](https://www.youtube.com/channel/UCkdAJA03TJXhb_tNjTyl_nA?sub_confirmation=1)
      [ Instagram ](https://www.instagram.com/ethirajchandru/)
      
      LinkedIn 
      [ Github ](https://github.com/ethirajsrinivasan/)
      [ Twitter ](https://twitter.com/iamethi)

        Demystifying Creational Patterns: A Roadmap to Effective Object Creation

        JDK variants: From Sun MicroSystems to Oracle and Beyond`,
}

export default function CustomActuatorPrometheusMetricForBetterSpringBootApplicationMonitoringPage() {
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
