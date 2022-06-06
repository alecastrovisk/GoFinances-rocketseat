import React, { useEffect, useState } from 'react';
import AsyncStorageLib from '@react-native-async-storage/async-storage';

import { HistoryCard } from '../../Components/HistoryCard';

import { categories } from '../../utils/categories';

import {
  Container, 
  Header, 
  Title,
  Content
} from './styles';


interface TransactionData {
  type: 'positive' | 'negative';
  name: string;
  amount: string;
  category: string;
  date: string;
}

interface CategoryData {
  key: string;
  name: string;
  total: string;
  color: string;
}

export function Resume(){
  const [totalByCategory, setTotalByCategory] = useState<CategoryData[]>([]);

  async function loadData(){
    const dataKey = '@gofinances:transactions';
    const response = await AsyncStorageLib.getItem(dataKey);
    const responseFormatted = response ? JSON.parse(response) : []; 

    const totalByCategoryList: CategoryData[] = [];

    const expenses = responseFormatted
    .filter((expense: TransactionData) => expense.type === 'negative');

    categories.forEach(category => {
      let categorySum = 0;

      expenses.forEach((expense: TransactionData) => {
        if(expense.category === category.key){
          categorySum += Number(expense.amount);
        }
      });

      if(categorySum > 0) {
        const total = categorySum
        .toLocaleString('pt-BR', {
          style: 'currency',
          currency: 'BRL'
        });

        totalByCategoryList.push({
          key: category.key,
          name: category.name,
          color: category.color,
          total
        });
      }
    });
    
    setTotalByCategory(totalByCategoryList);
  }

  
  useEffect(() => {
    loadData();
  }, []);

  return(
    <Container>
      <Header>
        <Title>Resumo por categoria</Title>
      </Header>

      <Content>
        {
          totalByCategory.map(item => (
            <HistoryCard
            key={item.key}
            title={item.name}
            amount={item.total}
            color={item.color}
          />
          ))   
        }
      </Content>
    </Container>
  );
}
