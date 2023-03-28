import * as Yup from 'yup';

export const validateRegister = Yup.object({
	registerName: Yup.string()
		.min(3, 'Imię powinno zawierać min. 3 znaki')
		.max(46, 'Wprowadzono zbyt wiele znaków')
		.required('Musisz podać imię'),
	registerLastname: Yup.string()
		.min(3, 'Nazwisko powinno zawierać min. 3 znaki')
		.max(46, 'Wprowadzono zbyt wiele znaków')
		.required('Musisz podać nazwisko'),
	registerEmail: Yup.string()
		.email('Wprowadź poprawny e-mail')
		.required('E-mail jest wymagany'),
	registerPassword: Yup.string()
		.min(7, 'Co najmniej 7 znaków')
		.max(46, 'Wprowadzono zbyt wiele znaków')
		.required('Musisz podać hasło'),
	registerConsent: Yup.boolean().oneOf([true], 'Musisz zaakceptować regulamin'),
});
