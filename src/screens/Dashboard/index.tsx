import React from 'react';

import {
  Container,
  Header,
  UserWrapper,
  Icon,
  UserInfo,
  Photo,
  User,
  UserGreeting,
  UserName,
} from './styles';

 export function Dashboard(){
  return(
    <Container>
      <Header>
        <UserWrapper>
          <UserInfo>
            <Photo 
              source={{ 
                uri: 'https://avatars.githubusercontent.com/u/42475360?v=4'
              }}
            />
            <User>
              <UserGreeting>Olá,</UserGreeting>
              <UserName>Alexandre</UserName>
            </User>
          </UserInfo>
      
          <Icon name='power'/>
        </UserWrapper>

       
      </Header>
    </Container>
  );
 }


