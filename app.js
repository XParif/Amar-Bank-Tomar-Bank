const depositInput = document.getElementById('deposit-input')
const withdrawInput = document.getElementById('withdraw-input')
const depositBtn = document.getElementById('deposit-btn')
const withdrawBtn = document.getElementById('withdrawBtn')

depositBtn.addEventListener('click', () => {
    changeBalance('deposit', parseInt(depositInput.value))
})

withdrawBtn.addEventListener('click', () => {
    changeBalance('withdraw', 0-parseInt(withdrawInput.value))
})

const changeBalance = (classId, value) => {
    if (isNaN(value)) return
    const data = document.querySelector(`#${classId}`).innerText
    document.querySelector(`#${classId}`).innerText = Math.abs(parseInt(data) + value)
    const balance = document.querySelector('#balance').innerText
    document.querySelector('#balance').innerText = parseInt(balance) + value;
    document.querySelector(`#${classId}-input`).value = ''
}