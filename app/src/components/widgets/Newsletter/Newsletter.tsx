import { useCallback, useEffect, useState } from 'react';
import useInput from '../../../hooks/useInput';
import { useSubscription } from '../../../hooks/useSubscription';
import { useFormValidator } from '../../../hooks/useFormValidator';
import { NotificationType, StatusType } from '../../../model/enums';

import withTimer from '../../hocs/withTimer/withTimer';
import Button from '../../forms/Button/Button';
import TextInput from '../../forms/TextInput/TextInput';
import WidgetWrapper from '../WidgetWrapper/WidgetWrapper';
import Notification from '../../notifications/Notification/Notification';

import './styles.scss';

const NotificationWithTimer = withTimer(Notification);

const Newsletter = () => {
  const { validateForm } = useFormValidator();
  const { submitSubscription, formMessage, formStatus, setSubscriptionMessage } = useSubscription();
  const [isFormValid, setIsFormValid] = useState<boolean>(false);

  const emailInput = useInput({
    type: 'email',
    name: 'email',
    placeholder: 'name@email.com'
  });

  const submitHandler = useCallback(() => {
    submitSubscription({
      email: emailInput.value
    });
  }, [emailInput, submitSubscription]);

  useEffect(() => {
    setIsFormValid(validateForm({ emailInput }));
  }, [emailInput, validateForm]);

  useEffect(() => {
    formStatus === StatusType.Success && emailInput.resetInput();
  }, [formStatus]);

  return (
    <WidgetWrapper id="newsletter" title="Newsletter">
      <>
        <form className="form flex">
          <TextInput input={emailInput} />
          <Button
            title="Subscribe"
            disabled={!isFormValid}
            clickHandler={submitHandler}
            status={formStatus}
          />
        </form>
        {formMessage && (
          <NotificationWithTimer
            type={NotificationType.Error}
            message={formMessage}
            setMessage={setSubscriptionMessage}
          />
        )}
      </>
    </WidgetWrapper>
  );
};

export default Newsletter;
