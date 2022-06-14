import React from 'react';
import { RFValue } from 'react-native-responsive-fontsize';

import {
  Container,
  Header,
  TitleWrapper,
  Title,
  SignInTitle,
  Footer,
  FooterWrapper
} from './styles';

import AppleSvg from '../../assets/appleIcon.svg';
import GoogleSvg from '../../assets/googleIcon.svg';
import LogoSvg from '../../assets/financeLogo.svg';

import { SignInSocialButton } from '../../components/SignInSocialButton';

export function SignIn(){
  return(
    <Container>
      <Header>
        <TitleWrapper>
          <LogoSvg
            width={RFValue(172)}
            height={RFValue(34)}
          />
          <Title>
            Controle suas {'\n'} 
            finanças de forma {'\n'} 
            muito simples
          </Title>
        </TitleWrapper>

        <SignInTitle>
          Faça seu login com {'\n'} 
          umas das contas abaixo
        </SignInTitle>
      </Header>

      <Footer>
        <FooterWrapper>
          <SignInSocialButton
            title="Entrar com o Google"
            svg={GoogleSvg}
          />
          <SignInSocialButton
            title="Entrar com o Google"
            svg={AppleSvg}
          />
        </FooterWrapper>
      </Footer>
    </Container>
  );
}
