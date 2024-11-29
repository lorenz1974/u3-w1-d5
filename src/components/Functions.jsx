// Funzione che manda messaggi all'utente
const sendMessage = (message, level) => {
  document.getElementById('alertMessage').innerHTML = message
  document.getElementById('alertMessage').classList.add(`alert-${level}`)
  document.getElementById('alertMessage').classList.toggle('d-none')
}

export { sendMessage }
