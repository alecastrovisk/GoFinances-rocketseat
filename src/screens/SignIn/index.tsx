import React, { useContext } from 'react';
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

import { useAuth } from '../../hooks/auth';

import { SignInSocialButton } from '../../components/SignInSocialButton';
import { Alert } from 'react-native';

export function SignIn(){
  const { signInWithGoogle } = useAuth();

  async function handleSignInWithGoogle() {
    try {
      await signInWithGoogle();
    } catch (error) {
      Alert.alert('Não foi possível conectar a conta Google')
    }
  }

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
            onPress={handleSignInWithGoogle}
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