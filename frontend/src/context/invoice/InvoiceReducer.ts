import { ActionType, invoiceProps } from '../types';

export function InvoiceReducer(state: { invoice: invoiceProps }, action: ActionType) {
    switch (action.type) {
      case "CREATE_USER": {
        return { ...state, ...action.payload };
      }
      default: {
        return state;
      }
    }
  }