package festival;


import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.server.EnableEurekaServer;

@EnableEurekaServer
@SpringBootApplication
public class EurikaStarter {
    public static void main(String[] args)
    {
        SpringApplication.run(EurikaStarter.class,args);
    }
}
