package com.codestates.security.oauth;

import com.codestates.security.oauth.userinfo.OAuth2UserInfo;
import lombok.Builder;
import lombok.Getter;

@Getter
@Builder
public class OAuthAttributes {

    private String PrimaryKey;
    private OAuth2UserInfo oAuth2UserInfo;


}
