import theme from "../styles/theme";
import { Category } from '../types/Category'
export const categories: Category = {
  food: { title: 'Alimentação', color: theme.colors.category_food, expense: true},
  salary: { title: 'bolsa estágio', color: theme.colors.category_salary, expense: false },
  internet: { title: 'conta de internet', color: theme.colors.category_salary, expense: true },
  water: { title: 'conta de água', color: theme.colors.category_water, expense: true },
  power: { title: 'conta de luz', color: theme.colors.category_power, expense: true }
}