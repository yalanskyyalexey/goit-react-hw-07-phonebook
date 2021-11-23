import ContactList from './components/ContactList/ContactList';
import Form from './components/Form/Form';
import Filter from './components/Filter/Filter';
import s from './App.module.css';

export default function App() {
	return (
		<>
			<div className={s.appWrapper}>
				<h1>Phonebook</h1>
				<Form />
				<h2>Contacts</h2>
				<Filter />
				<ContactList />
			</div>
		</>
	);
}
