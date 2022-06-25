import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SubscribeInterface } from '../model/interfaces';
import { subscribeAction } from '../providers/context/actions';
import { subscriptionSelector } from '../providers/context/selectors';

export const useSubscription = () => {
  const dispatch = useDispatch();
  const { formStatus, formMessage } = useSelector(subscriptionSelector);

  const submitSubscription = useCallback(
    (arg: SubscribeInterface) => dispatch(subscribeAction(arg)),
    [dispatch]
  );

  return {
    formStatus,
    formMessage,
    submitSubscription
  } as const;
};
