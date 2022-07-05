import { useEffect, useState } from 'react';
import useInput from '../../hooks/useInput';
import { useContact } from '../../hooks/useContact';
import { NotificationType } from '../../model/enums';
import { useFormValidator } from '../../hooks/useFormValidator';

import Select from '../../components/forms/Select/Select';
import Button from '../../components/forms/Button/Button';
import TextInput from '../../components/forms/TextInput/TextInput';
import PageTitle from '../../components/atoms/PageTitle/PageTitle';
import PageWrapper from '../../components/pages-elements/PageWrapper/PageWrapper';
import Notification from '../../components/notifications/Notification/Notification';
import withTimer from '../../components/hocs/withTimer/withTimer';

import './styles.scss';

const NotificationWithTimer = withTimer(Notification);

const Contact = () => {
  const [isFormValid, setIsFormValid] = useState<boolean>(false);
  const {
    fetchContactPage,
    submitContactForm,
    status,
    contacts,
    token,
    formMessage,
    formStatus,
    resetContactFormMessage
  } = useContact();
  const { validateForm } = useFormValidator();

  const submitHandler = () => {
    submitContactForm({
      from: emailInput.value,
      message: messageInput.value,
      token: token,
      id_contact: '1',
      url: ''
    });
  };

  const emailInput = useInput({
    type: 'email',
    name: 'from',
    placeholder: 'name@email.com'
  });
  const messageInput = useInput({
    type: 'textarea',
    name: 'message',
    placeholder: 'A message'
  });

  useEffect(() => {
    fetchContactPage();
  }, [fetchContactPage]);

  useEffect(() => {
    setIsFormValid(validateForm({ emailInput, messageInput }));
  }, [emailInput, messageInput, validateForm]);

  return (
    <PageWrapper status={status}>
      <>
        <PageTitle title="Contact us" />
        <form className="contact-form">
          <Select selectName="id_contact" selectOptions={contacts} />
          <TextInput input={emailInput} />
          <TextInput input={messageInput} />
          <Button
            title="Send"
            disabled={!isFormValid}
            status={formStatus}
            clickHandler={submitHandler}
          />
        </form>
        {formMessage.success.length > 0 && (
          <NotificationWithTimer
            type={NotificationType.Info}
            message={formMessage.success}
            setMessage={resetContactFormMessage}
          />
        )}
        {formMessage.errors.length > 0 && (
          <NotificationWithTimer
            type={NotificationType.Error}
            message={formMessage.errors}
            setMessage={resetContactFormMessage}
          />
        )}
      </>
    </PageWrapper>
  );
};

export default Contact;
