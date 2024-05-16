export const addBudgetEntry = (itemName:string,plannedAmount:number,actualAmount:number) => ({
    type: 'ADD_BUDGET_ENTRY',
    payload: {
      itemName: itemName,
      plannedAmount: plannedAmount,
      actualAmount:actualAmount
    },
  });

export const deleteBudgetEntry = (index) => {
    return {
      type: 'DELETE_BUDGET_ENTRY',
      payload: index,
    };
  };
