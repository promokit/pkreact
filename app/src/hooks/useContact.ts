import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  ContactFormInterface,
  ContactPageContactsInterface,
  SelectInterface
} from '../model/interfaces';
import {
  contactPageSelector,
  contactPageStatusSelector,
  contactsSelector,
  formMessageSelector,
  formStatusSelector,
  tokenSelector
} from '../providers/pages/contact/selectors';
import {
  fetchContactPageAction,
  submitContactFormAction
} from '../providers/pages/contact/actions';
import { resetContactFormMessageAction } from '../providers/pages/contact/reducers';

const selectAdapter = (contactsList: ContactPageContactsInterface[]): SelectInterface[] => {
  if (!contactsList.length) {
    return [];
  }
  return contactsList.reduce(
    (options: SelectInterface[], contact) => [
      ...options,
      { id: contact.id_contact, name: contact.name }
    ],
    []
  );
};

export const useContact = () => {
  const dispatch = useDispatch();
  const status = useSelector(contactPageStatusSelector);
  const contactPage = useSelector(contactPageSelector);
  const contactsList = useSelector(contactsSelector);
  const formMessage = useSelector(formMessageSelector);
  const formStatus = useSelector(formStatusSelector);
  const token = useSelector(tokenSelector);
  const contacts = selectAdapter(Object.values(contactsList));

  const fetchContactPage = useCallback(() => dispatch(fetchContactPageAction()), [dispatch]);

  const submitContactForm = useCallback(
    (arg: ContactFormInterface) => dispatch(submitContactFormAction(arg)),
    [dispatch]
  );

  const resetContactFormMessage = useCallback(
    (_: string) => dispatch(resetContactFormMessageAction()),
    [dispatch]
  );

  return {
    token,
    status,
    contacts,
    formStatus,
    formMessage,
    contactPage,
    fetchContactPage,
    submitContactForm,
    resetContactFormMessage
  } as const;
};
