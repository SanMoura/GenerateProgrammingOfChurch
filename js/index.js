$(document).ready(() => {
  let days = [`DOM`, `QUA`, `SEX`, `SAB`]
  let programs = [`MISSÕES / CEIA`, `ENSINO`, `CULTO DA VITÓRIA`, `FESTIVIDADE`]
  let hours = [`De 18h às 20h`, `De 19:30h às 21h`, `De 19:30h às 21h`, `De 19:30h às 21h`]
  for (index = 0; index < days.length; index++) {

    let content = `
    <div class="row">
      <div class="col-3 text-end">
        <div class="feature-icon d-inline-flex align-items-center justify-content-center diaSemana fs-2 mb-1" style='width:2.8em;'>${days[index]}</div>
      </div>
      <div class="col-9" style='margin-left:-1em;'>
        <h3 class="fs-2">${programs[index]}</h3>
        <p class='opacity-50 text-nowrap'>${hours[index]}</p>
      </div>
    </div>
  `
    $('#ret').append(content)
    
  }
})