/*
package com.codestates.security.oauth;

import com.codestates.security.oauth.userinfo.GithubOAuth2UserInfo;
import com.codestates.security.oauth.userinfo.OAuth2UserInfo;
import com.codestates.user.enums.SocialType;
import lombok.Builder;
import lombok.Getter;

import java.util.Map;

@Getter
public class OAuthAttributes {

    private String nameAttributeKey;
    private OAuth2UserInfo oAuth2UserInfo;

    @Builder
    public OAuthAttributes(String nameAttributeKey, OAuth2UserInfo oAuth2UserInfo) {
        this.nameAttributeKey = nameAttributeKey;
        this.oAuth2UserInfo = oAuth2UserInfo;
    }

    public static OAuthAttributes of(SocialType socialType, String userNameAttributeKey, Map<String, Object> attributes){
        if(socialType == SocialType.GITHUB){
            return null;
        }
        return null;
    }

    public static OAuthAttributes ofGithub(String userNameAttributeKey, Map<String, Object> attributes){
        return OAuthAttributes.builder()
                .nameAttributeKey(userNameAttributeKey)
                .oAuth2UserInfo(new GithubOAuth2UserInfo(attributes))
                .build();
    }
}
*/
