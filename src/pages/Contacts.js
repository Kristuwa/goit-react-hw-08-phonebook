import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { Helmet } from 'react-helmet';
import ContactForm from '../components/ContactForm/ContactForm';
import ContactList from '../components/ContactList/ContactList';
import { Toaster } from 'react-hot-toast';
import {
  Container,
  TitleForm,
  TitleContacts,
  ContentBlock,
  ScrollBar,
  Message,
} from './Contacts.styled';

import { selectFilterList } from 'redux/selectors';
import Filter from 'components/Filter';
import {
  selectError,
  selectIsLoading,
  selectContacts,
} from 'redux/contacts/selectors';
import { fetchContacts } from 'redux/contacts/operations';
import { Notification } from 'components/Notification/Notification';
import { Loader } from 'components/Loader/Loader';
import { RiContactsFill } from 'react-icons/ri';

const Contacts = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const filterList = useSelector(selectFilterList);
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  return (
    <Container>
      {/* <Helmet>
        <title>Your contacts</title>
      </Helmet> */}
      <ContentBlock>
        <TitleForm>Phonebook</TitleForm>
        <ContactForm />
      </ContentBlock>
      <Toaster
        position="top-center"
        toastOptions={{
          style: {
            background: '#363636',
            color: '#fff',
          },
        }}
      />
      <ContentBlock>
        <TitleContacts>Contacts</TitleContacts>

        {error && <Notification message="Contacts no found" />}
        {!isLoading && !error && contacts.length === 0 && (
          <Message>
            You have no contacts, add your first contact <RiContactsFill />
          </Message>
        )}
        {contacts.length > 0 && <Filter />}
        {isLoading && !error && <Loader />}
        {filterList.length > 0 && (
          <ScrollBar>
            <ContactList />
          </ScrollBar>
        )}
      </ContentBlock>
    </Container>
  );
};

export default Contacts;
