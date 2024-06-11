function enviar(event) {
    // Previne o comportamento padrão do formulário
    event.preventDefault();
    
    // Exibe o alerta
    alert("Botao");
    
    // Obtém os valores do formulário
    const paymentMethod = document.getElementById('paymentMethod').value;
    const value = document.getElementById('value').value;
    const entryExit = document.getElementById('entryExit').value;
    const product = document.getElementById('product').value;
    
    // Exemplo de chamada para um endpoint de backend
    fetch('https://seu-backend.com/api/processForm', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ paymentMethod, value, entryExit, product })
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
        alert('Form submitted successfully!');
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Error submitting form');
    });
}
