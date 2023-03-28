import * as Yup from 'yup';

export const validateLogin = Yup.object({
	loginEmail: Yup.string()
		.email('Wprowadź poprawny e-mail')
		.required('E-mail jest wymagany'),
	loginPassword: Yup.string()
		.min(7, 'Hasło ma min. 7 znaków')
		.max(36, 'Hasło moze mieć maks. 36 znaków')
		.required('Hasło jest wymagane'),
});
