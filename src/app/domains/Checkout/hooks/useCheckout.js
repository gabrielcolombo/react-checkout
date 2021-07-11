import { store } from './../../../store';
import {
  updateCheckoutStage,
} from '../store/actions';

const useCheckout = () => {
  return {
    getState: () => store.getState().checkout,
    updateStage: (stage) => store.dispatch(updateCheckoutStage(stage)),
    subscribe: (callback) => store.subscribe(callback) 
  }  
}

export default useCheckout;