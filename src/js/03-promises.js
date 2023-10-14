 import Notiflix from 'notiflix';

const elements = {
  delay: document.querySelector('input[name=delay]'),
  step: document.querySelector('input[name=step]'),
  amount: document.querySelector('input[name=amount]'),
  btn: document.querySelector('button[type=submit]'),
  form: document.querySelector('.form')

}

elements.form.addEventListener('submit', event => {
  event.preventDefault();
  const valueDelay = Number(elements.delay.value);
  const valueStep = Number(elements.step.value);
  const valueAmount = Number(elements.amount.value);

  for (let i = 0; i < valueAmount; i++){
    let position = i + 1;
    const delay = valueDelay + valueStep * i;

    createPromise(position, delay)
      .then(({ position, delay }) => {
    Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
   
  })
  .catch(({ position, delay }) => {
    Notiflix.Notify.warning(`❌ Rejected promise ${position} in ${delay}ms`);
  });
  }
});

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;

    setTimeout(() => {
      if (shouldResolve) {
        // Fulfill
        resolve({ position, delay });
      } else {
        // Reject
        reject({ position, delay });
      }
      
    }, delay)
  });
};


