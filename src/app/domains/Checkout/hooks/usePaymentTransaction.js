const TRANSACTION_CONFIG = {
  accessId: 'D61EC9BAF0BB369B9438',
  merchantId: '1004314986',
  metadata: { demo: 'enabled' },
  paymentType: 'Deferred',
  description: 'Gabriel Colombo (gcolombo07@gmail.com)',
  merchantReference: 'f01f35f8db0a',
  returnUrl: '#success',
  cancelUrl: '#cancel'
}

const usePaymentTransaction = () => {
  const establish = (transaction) => {
    window.PayWithMyBank.establish({ ...TRANSACTION_CONFIG, ...transaction });
  }

  const initPaymentStatusHandler = ({ onSuccess, onFailure }) => {
    window.PayWithMyBank.addPanelListener(function(command, event) {
      if (command === 'event' && event.type === 'new_location') {
        if (event.data.indexOf('#success') === 0) {
          onSuccess();
        } else {
          onFailure();
        }

        return false;
      }
    });
  }

  return {
    establish,
    initPaymentStatusHandler,
  }
}

export default usePaymentTransaction;