import { FC, memo, useCallback, useMemo, useState } from 'react';

interface FormData {
  name: string;
  email: string;
  message: string;
}

const ContactForm: FC = memo(() => {
  const defaultData = useMemo(
    () => ({
      name: '',
      email: '',
      message: '',
    }),
    []
  );

  const [data, setData] = useState<FormData>(defaultData);

  const onChange = useCallback(
    <T extends HTMLInputElement | HTMLTextAreaElement>(event: React.ChangeEvent<T>): void => {
      const { name, value } = event.target;

      const fieldData: Partial<FormData> = { [name]: value };

      setData({ ...data, ...fieldData });
    },
    [data]
  );

  const handleSendMessage = useCallback(
    async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      try {
        // Enviar el formulario y obtener la respuesta del servidor
        const response = await fetch('http://localhost:8380/api/send-email', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        });

        if (response.ok) {
          // Si la respuesta es exitosa, mostrar un mensaje de éxito al usuario
          alert('Email enviado. Por favor, verifica tu correo electrónico.');
        } else {
          // Si la respuesta no es exitosa, mostrar un mensaje de error al usuario
          alert('Error al enviar el correo electrónico.');
        }

        // Resetear los campos del formulario después de enviar
        setData(defaultData);
      } catch (error) {
        console.error('Error:', error);
        alert('Error al enviar el correo electrónico.');
      }
    },
    [data, defaultData]
  );

  const inputClasses =
    'bg-neutral-700 border-0 focus:border-0 focus:outline-none focus:ring-1 focus:ring-orange-600 rounded-md placeholder:text-neutral-400 placeholder:text-sm text-neutral-200 text-sm';

  return (
    <form className="grid min-h-[320px] grid-cols-1 gap-y-4" method="POST" onSubmit={handleSendMessage}>
      <input className={inputClasses} name="name" onChange={onChange} placeholder="Nombre" required type="text" />
      <input
        autoComplete="email"
        className={inputClasses}
        name="email"
        onChange={onChange}
        placeholder="Email"
        required
        type="email"
      />
      <textarea
        className={inputClasses}
        maxLength={250}
        name="message"
        onChange={onChange}
        placeholder="Mensaje"
        required
        rows={6}
      />
      <button
        aria-label="Submit contact form"
        className="w-max rounded-full border-2 border-orange-600 bg-stone-900 px-4 py-2 text-sm font-medium text-white shadow-md outline-none hover:bg-stone-800 focus:ring-2 focus:ring-orange-600 focus:ring-offset-2 focus:ring-offset-stone-800"
        type="submit">
        Enviar Mensaje
      </button>
    </form>
  );
});

ContactForm.displayName = 'ContactForm';
export default ContactForm;