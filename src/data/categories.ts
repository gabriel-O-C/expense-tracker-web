import theme from "../styles/theme";
import { Category } from '../types/Category'
export const categories: Category = {
  food: { title: 'Alimentação', color: theme.colors.light_blue, expense: true},
  salary: { title: 'salário', color: theme.colors.green, expense: false },
  internet: { title: 'conta de internet', color: theme.colors.purple, expense: true },
  water: { title: 'conta de água', color: theme.colors.blue, expense: true },
  power: { title: 'conta de luz', color: theme.colors.yellow, expense: true },
  entertainment: { title: 'entretenimento', color: theme.colors.dark_gray, expense: true },
  rent: { title: 'aluguel', color: theme.colors.blue, expense: true },
  dividends: {title: 'dividendos', color: theme.colors.black, expense: false}
}