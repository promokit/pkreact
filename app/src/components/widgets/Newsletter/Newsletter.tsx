import { useCallback, useEffect, useState } from 'react';
import useInput from '../../../hooks/useInput';
import { useSubscription } from '../../../hooks/useSubscription';
import { useFormValidator } from '../../../hooks/useFormValidator';
import { NotificationType, StatusType } from '../../../model/enums';

import Button from '../../forms/Button/Button';
import TextInput from '../../forms/TextInput/TextInput';
import Notification from '../../notifications/Notification/Notification';
import WithWidgetWrapper from '../../../hocs/WithWidgetWrapper/WithWidgetWrapper';

import './styles.scss';

const Newsletter = () => {
  const { validateForm } = useFormValidator();
  const { submitSubscription, formMessage, formStatus } = useSubscription();
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
    <WithWidgetWrapper id="newsletter" title="Newsletter">
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
          <Notification
            type={formStatus === StatusType.Error ? NotificationType.Error : NotificationType.Info}
            message={formMessage}
          />
        )}
      </>
    </WithWidgetWrapper>
  );
};

export default Newsletter;
