
  document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');

    form.addEventListener('submit', function(event) {
      event.preventDefault(); 
      
      // Validación de campos
      const nombre = document.querySelector('input[name="nombre"]').value;
      const apellido = document.querySelector('input[name="apellido"]').value;
      const correo = document.querySelector('input[name="correo"]').value;
      const telefono = document.querySelector('input[name="telefono"]').value;
      const mensaje = document.querySelector('textarea[name="mensaje"]').value;

      // Verifica que los campos no estén vacíos
      if (nombre === '' || apellido === '' || correo === '' || telefono === '' || mensaje === '') {
        alert('Por favor, completa todos los campos, incluyendo el mensaje.');
        return; 
      }

      // Validación de formato de correo electrónico 
      const emailFormat = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailFormat.test(correo)) {
        alert('Por favor, ingresa un correo electrónico válido.');
        return;
      }

      // Validación de formato de teléfono 
      const phoneFormat = /^\d{9}$/;
      if (!phoneFormat.test(telefono)) {
        alert('Por favor, ingresa un número de teléfono válido de 9 dígitos.');
        return; 
      }

      // Validación de que el nombre y apellido no contengan números
      const nameRegex = /^[A-Za-záéíóúüñÁÉÍÓÚÜÑ\s]+$/;
      if (!nameRegex.test(nombre) || !nameRegex.test(apellido)) {
        alert('Por favor, ingresa un nombre y apellido válidos (sin números ni caracteres especiales).');
        return; 
      }

    
      alert('Formulario enviado correctamente!');
      form.reset(); 
    });
  });

