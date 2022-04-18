import React from 'react';
import { HighlightCard } from '../../Components/HighLightCard';

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
  HighlightCards,
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
      
      <HighlightCards>
        <HighlightCard
          type='up'
          title='Entradas' 
          amount='R$ 17.400,00'
          lastTransaction='Última entrada dia 13 de abril'
        />
        <HighlightCard
          type='down'
          title='Saídas' 
          amount='R$ 17.400,00'
          lastTransaction='Última entrada dia 13 de abril'
        />
        <HighlightCard
          type='total'
          title='Total' 
          amount='R$ 17.400,00'
          lastTransaction='Última entrada dia 13 de abril'
        />
      </HighlightCards>
      
    </Container>
  );
 }


