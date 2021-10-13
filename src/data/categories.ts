import theme from "../styles/theme";
import { Category } from '../types/Category'
export const categories: Category = {
  food: { title: 'Alimentação', color: theme.colors.light_blue, expense: true},
  salary: { title: 'bolsa estágio', color: theme.colors.green, expense: false },
  internet: { title: 'conta de internet', color: theme.colors.purple, expense: true },
  water: { title: 'conta de água', color: theme.colors.blue, expense: true },
  power: { title: 'conta de luz', color: theme.colors.yellow, expense: true }
}