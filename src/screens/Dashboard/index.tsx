import React from 'react';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import { HighlightCard } from '../../Components/HighLightCard';
import { TransactionCard, TransactionCardProps } from '../../Components/TransactionCard';

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
  Transactions,
  Title,
  TransactionsList
} from './styles';

export interface DataListProps extends TransactionCardProps {
  id: string;
}

 export function Dashboard(){ 
  const data: DataListProps[] = [{
    id: '1',
    type: 'positive',
    title:'Desenvolvimento de site',
    amount:'R$ 12.000',
    category: {
      name: 'Vendas',
      icon: 'dollar-sign'
    },   
    date:'22/04/2022'
  },
  {
    id: '2',
    type: 'negative',
    title:'Mel',
    amount:'R$1.200',
    category: {
      name: 'Alimentação',
      icon: 'coffee'
    },   
    date:'22/04/2022'
  },
  {
    id: '3',
    type: 'negative',
    title:'PC NOVO',
    amount:'R$ 12.000',
    category: {
      name: 'Vendas',
      icon: 'shopping-bag'
    },   
    date:'22/04/2022'
  }
]
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

      <Transactions>
        <Title>Listagem</Title>

        <TransactionsList
          data={data}
          keyExtractor={ item => item.id}
          renderItem={({ item }) => (
            <TransactionCard
              data={item}
            />
          )}
        />
      </Transactions>
      
    </Container>
  );
 }


