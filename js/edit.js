$(document).ready(() => {
  let atualDate = new Date();
  let month = atualDate.getMonth();
  var months = ['JANEIRO', 'FEVEREIRO', 'MARÇO', 'ABRIL', 'MAIO', 'JUNHO', 'JULHO', 'AGOSTO', 'SETEMBRO', 'OUTUBRO', 'NOVEMBRO', 'DEZEMBRO'];
  $('#mes').html(months[month])

  let days = [`DOM`,`SEG`,`TER`,`QUA`,`QUI`,`SEX`,`SAB`]
  for (index = 0; index < days.length; index++) {

    let content = `
    <div class="row">
    <div class="col-3 text-end">
      <div  id='${days[index]}' class="feature-icon d-inline-flex align-items-center justify-content-center diaSemana fs-2 mb-1" style='width:2.8em;'>
        ${days[index]}
      </div>
    </div>
    <div class="col-9" style='margin-left:-1em;'>
      <h3 class="fs-2">
        <input type="text" class="form-control" id="culto${days[index]}" placeholder='Digite o culto aqui'>
      </h3>
      <p class='opacity-50 text-nowrap'>
        <input type="text" id="horario${days[index]}" class="form-control" value='De  às '>
      </p>
    </div>
  </div>
  `
    $('#edit').append(content)
  }
})


function generateProgramation(){
  $('#form').hide()
  const cultoDom = $(`#cultoDOM`).val()
  const cultoSeg = $(`#cultoSEG`).val()
  const cultoTer = $(`#cultoTER`).val()
  const cultoQua = $(`#cultoQUA`).val()
  const cultoQui = $(`#cultoQUI`).val()
  const cultoSex = $(`#cultoSEX`).val()
  const cultoSab = $(`#cultoSAB`).val()

  const horarioDom = $(`#horarioDOM`).val()
  const horarioSeg = $(`#horarioSEG`).val()
  const horarioTer = $(`#horarioTER`).val()
  const horarioQua = $(`#horarioQUA`).val()
  const horarioQui = $(`#horarioQUI`).val()
  const horarioSex = $(`#horarioSEX`).val()
  const horarioSab = $(`#horarioSAB`).val()

  let days = []
  let programs = []
  let hours = []

  cultoDom != '' ? days.push('DOM') : ''
  cultoSeg != '' ? days.push('SEG') : ''
  cultoTer != '' ? days.push('TER') : ''
  cultoQua != '' ? days.push('QUA') : ''
  cultoQui != '' ? days.push('QUI') : ''
  cultoSex != '' ? days.push('SEX') : ''
  cultoSab != '' ? days.push('SAB') : ''

  cultoDom != '' ? programs.push(cultoDom) : ''
  cultoSeg != '' ? programs.push(cultoSeg) : ''
  cultoTer != '' ? programs.push(cultoTer) : ''
  cultoQua != '' ? programs.push(cultoQua) : ''
  cultoQui != '' ? programs.push(cultoQui) : ''
  cultoSex != '' ? programs.push(cultoSex) : ''
  cultoSab != '' ? programs.push(cultoSab) : ''

  horarioDom != '' ? hours.push(horarioDom) : ''
  horarioSeg != '' ? hours.push(horarioSeg) : ''
  horarioTer != '' ? hours.push(horarioTer) : ''
  horarioQua != '' ? hours.push(horarioQua) : ''
  horarioQui != '' ? hours.push(horarioQui) : ''
  horarioSex != '' ? hours.push(horarioSex) : ''
  horarioSab != '' ? hours.push(horarioSab) : ''

  showProgamation(days, hours, programs)
  
}

function showProgamation(days, hours, programs){
  console.log(days)
  console.log(hours)
  console.log(programs)
  $('#ret').html()
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
}