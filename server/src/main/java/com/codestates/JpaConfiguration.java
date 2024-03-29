package com.codestates;

import com.codestates.user.User;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.EntityTransaction;


//@Configuration
public class JpaConfiguration {
    private EntityManager em;
    private EntityTransaction tx;


    @Bean
    public CommandLineRunner testJpaBasicRunner(EntityManagerFactory emFactory) {
        this.em = emFactory.createEntityManager();

        this.tx = em.getTransaction();

        return args -> {
            tx.begin();
            em.persist(new User());
            tx.commit();

        };
    }


}

