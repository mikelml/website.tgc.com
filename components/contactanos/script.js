// Attach submit handler for the contact form
(function registerContactFormHandler() {
	function onReady(callback) {
		if (document.readyState === 'loading') {
			document.addEventListener('DOMContentLoaded', callback, { once: true });
		} else {
			callback();
		}
	}

	onReady(() => {
		const form = document.querySelector('.contactanos-form');
		if (!form) return;

		const submitButton = form.querySelector('button[type="submit"]');

		form.addEventListener('submit', async (event) => {
			event.preventDefault();

			const formData = new FormData(form);
			// Optional configs for FormSubmit
			formData.append('_captcha', 'false');
			// formData.append('_next', window.location.href + '#contactanos'); // optional redirect anchor

			if (submitButton) {
				submitButton.disabled = true;
				submitButton.textContent = 'Enviando...';
			}

			try {
				const response = await fetch('https://formsubmit.co/hello@thegrowers.club', {
					method: 'POST',
					body: formData,
				});

				if (response.ok) {
					console.log('Correo enviado');
					form.reset();
					alert('Gracias por contactarnos, pronto te responderemos.');
				} else {
					console.error('Error al enviar');
					alert('Hubo un problema al enviar el formulario. Intenta nuevamente.');
				}
			} catch (error) {
				console.error('Error de red o CORS', error);
				alert('No se pudo enviar el formulario por un problema de conexión.');
			} finally {
				if (submitButton) {
					submitButton.disabled = false;
					submitButton.textContent = 'Enviar';
				}
			}
		});
	});
})();


