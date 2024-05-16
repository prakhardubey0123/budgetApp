export interface BudgetState {
    budgetEntries: any[]; // Update this type according to your actual data structure
  }
  
  const initialState: BudgetState = {
    budgetEntries: [],
  };
  
  const reducer = (state = initialState, action: any): BudgetState => {
    switch (action.type) {
      case 'ADD_BUDGET_ENTRY':
        return {
          ...state,
          budgetEntries: [...state.budgetEntries, action.payload],
        };
        case 'DELETE_BUDGET_ENTRY':
            return {
              ...state,
              budgetEntries: state.budgetEntries.filter((entry, index) => index !== action.payload),
            };
      default:
        return state;
    }
  };
  
  export default reducer;
  