import { useEffect, useState } from 'react';
import useInput from '../../hooks/useInput';
import { useContact } from '../../hooks/useContact';
import { useFormValidator } from '../../hooks/useFormValidator';
import { NotificationType, StatusType } from '../../model/enums';

import Select from '../../components/forms/Select/Select';
import Button from '../../components/forms/Button/Button';
import TextInput from '../../components/forms/TextInput/TextInput';
import PageTitle from '../../components/atoms/PageTitle/PageTitle';
import Notification from '../../components/notifications/Notification/Notification';
import ComponentLoader from '../../components/atoms/loaders/ComponentLoader/ComponentLoader';

import './styles.scss';

const Contact = () => {
  const [isFormValid, setIsFormValid] = useState<boolean>(false);
  const { fetchContactPage, submitContactForm, status, contacts, contactPage } = useContact();
  const { validateForm } = useFormValidator();

  const emailInput = useInput({
    type: 'email',
    name: 'useremail',
    placeholder: 'name@email.com'
  });
  const messageInput = useInput({
    type: 'textarea',
    name: 'usermessage',
    placeholder: 'A message'
  });

  useEffect(() => {
    fetchContactPage();
  }, [fetchContactPage]);

  useEffect(() => {
    setIsFormValid(validateForm({ emailInput, messageInput }));
  }, [emailInput, messageInput, validateForm]);

  if (status === StatusType.Loading) {
    return <ComponentLoader />;
  }

  if (status === StatusType.Error) {
    return <Notification type={NotificationType.Error} message="Unable to load Contact Page" />;
  }

  return (
    <>
      <PageTitle title="Contact us" />
      <form className="contact-form">
        <Select selectName="id_contact" selectOptions={contacts} />
        <TextInput input={emailInput} />
        <TextInput input={messageInput} />
        <Button title="Send" disabled={!isFormValid} clickHandler={() => {}} />
        <input type="hidden" name="token" value={contactPage.token} />
        <input type="hidden" name="url" value="" />
      </form>
    </>
  );
};

export default Contact;
