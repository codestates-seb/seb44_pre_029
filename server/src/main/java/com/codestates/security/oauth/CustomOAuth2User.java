/*
package com.codestates.security.oauth;

import com.codestates.user.enums.Role;
import lombok.Getter;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.oauth2.core.user.DefaultOAuth2User;

import java.util.Collection;
import java.util.Map;

@Getter
public class CustomOAuth2User extends DefaultOAuth2User {

    private String email;

    private Role role;

*/
/**
    Constructs a DefaultOAuth2User using the provided parameters.
    authorities – the authorities granted to the user
    attributes – the attributes about the user
    nameAttributeKey – the key used to access the user's "name" from getAttributes()
    *//*

    public CustomOAuth2User(Collection<? extends GrantedAuthority> authorities, Map<String, Object> attributes, String nameAttributeKey, String email, Role role) {
        super(authorities, attributes, nameAttributeKey);
        this.email = email;
        this.role = role;
    }
}
*/
