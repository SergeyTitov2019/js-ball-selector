
дл€ добавлени€ в DOM € использовал

for (let i = 0; i < num; i++)
main.insertAdjacentHTML('beforeend', `<div class="ball random ${ball.classList}"> ${ball.innerHTML}`)

ошибкой было объ€вление
const ball = document.createElement('div')
на самом верху, поскольку объект передаетс€ по ссылке в цикле € получал только ссылку на один объект
