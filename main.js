const area = (x, y) => { return x * y }

const updateWithArea = async (event) => {
    document.querySelector('#result').innerHTML = ''
    if (document.querySelector('#width').checkValidity() && document.querySelector('#length').checkValidity()) {
      const regex = /[^a-zA-Z_]/g
      const i = parseInt(document.querySelector('#width').value)
      const j = parseInt(document.querySelector('#length').value)
      const ans = `Your area is ${area(i, j)} ft^2.`
      document.querySelector('#result').innerHTML = ans
    }
  }

document.addEventListener('click', event => {
    if (event.target && event.target.id === 'calculate') { updateWithArea(event) }
  })