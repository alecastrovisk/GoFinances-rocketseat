import React, { useCallback, useEffect, useState } from 'react';
import AsyncStorageLib from '@react-native-async-storage/async-storage';
import { VictoryPie } from 'victory-native';
import { RFValue } from 'react-native-responsive-fontsize';

import { HistoryCard } from '../../Components/HistoryCard';

import theme from '../../global/styles/theme';
import { categories } from '../../utils/categories';

import {
  Container, 
  Header, 
  Title,
  Content,
  ChartContainer
} from './styles';
import { useFocusEffect } from '@react-navigation/native';
import { ScrollView } from 'react-native';


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
  total: number;
  totalFormatted: string;
  color: string;
  percent: string;
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

    const expensesTotal = expenses
    .reduce((acumullator: number, expense: TransactionData) => {
      return acumullator + Number(expense.amount);
    }, 0);

    categories.forEach(category => {
      let categorySum = 0;

      expenses.forEach((expense: TransactionData) => {
        if(expense.category === category.key){
          categorySum += Number(expense.amount);
        }
      });

      if(categorySum > 0) {
        const totalFormatted = categorySum
        .toLocaleString('pt-BR', {
          style: 'currency',
          currency: 'BRL'
        });

        const percent = `${(categorySum / expensesTotal * 100).toFixed(0)}%`

        totalByCategoryList.push({
          key: category.key,
          name: category.name,
          color: category.color,
          total: categorySum,
          totalFormatted,
          percent
        });
      }
    });
    
    setTotalByCategory(totalByCategoryList);
  }

  useFocusEffect(useCallback(() => {
    loadData();
  }, []));

  return(
    <Container>
      <Header>
        <Title>Resumo por categoria</Title>
      </Header>
      <Content>
        <ChartContainer>
          <VictoryPie
            data={totalByCategory}
            colorScale={totalByCategory.map(category => category.color)}
            style={{
              labels: {
                fontSize: RFValue(18),
                fontWeight: 'bold',
                fill: theme.colors.shape
              }
            }}
            labelRadius={50}
            x="percent"
            y="total"
          />
        </ChartContainer>
        {
          totalByCategory.map(item => (
            <HistoryCard
            key={item.key}
            title={item.name}
            amount={item.totalFormatted}
            color={item.color}
          />
          ))   
        }
      </Content>
    </Container>
  );
}
