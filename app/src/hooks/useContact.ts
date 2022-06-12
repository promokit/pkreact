import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  contactPageSelector,
  contactPageStatusSelector,
  contactsSelector
} from '../providers/pages/contact/selectors';
import {
  fetchContactPageAction,
  submitContactFormAction
} from '../providers/pages/contact/actions';
import {
  ContactFormInterface,
  ContactPageContactsInterface,
  SelectInterface
} from '../model/interfaces';

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
  const contacts = selectAdapter(Object.values(contactsList));

  const fetchContactPage = useCallback(() => dispatch(fetchContactPageAction()), [dispatch]);

  const submitContactForm = useCallback(
    (arg: ContactFormInterface) => dispatch(submitContactFormAction(arg)),
    [dispatch]
  );

  return {
    status,
    contacts,
    contactPage,
    fetchContactPage,
    submitContactForm
  } as const;
};
