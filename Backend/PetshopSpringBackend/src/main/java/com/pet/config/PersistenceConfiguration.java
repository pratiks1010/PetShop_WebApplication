//package com.pet.config;
//
//import org.springframework.boot.jdbc.DataSourceBuilder;
//import org.springframework.context.annotation.Bean;
//import org.springframework.context.annotation.Configuration;
////import org.springframework.security.config.annotation.web.builders.HttpSecurity;
//
//import javax.sql.DataSource;
//
//// bean declaration for datasource url to connect with postgresql
//@Configuration
//public class PersistenceConfiguration {
//
//    @Bean
//    public DataSource dataSource() {
//        DataSourceBuilder dataSourceBuilder = DataSourceBuilder.create();
//        dataSourceBuilder.url("jdbc:mysql://localhost:3306/petshop?user=root&password=password");
//        return dataSourceBuilder.build();
//    }
//    
////    @Override
////    protected void configure(HttpSecurity http) throws Exception {
////        http.authorizeRequests().antMatchers("/admin/**").hasRole("ADMIN")
////        .antMatchers("/**").permitAll().anyRequest().authenticated()
////        .and().formLogin().permitAll().and().logout().permitAll().and().httpBasic();
////        http.cors().disable().csrf().disable();
////    }
//
//}
