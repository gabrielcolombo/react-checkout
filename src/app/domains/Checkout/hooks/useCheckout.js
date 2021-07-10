import { store } from './../../../store';
import {
  updateCheckoutStage,
} from '../store/actions';

const useCheckout = (props) => {
  return {
    getState: () => store.getState().checkout,
    updateStage: (stage) => store.dispatch(updateCheckoutStage(stage)),
  }  
}

export default useCheckout;