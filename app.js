$(document).ready(function () {
  // GRID DEMENSIONS
  const maxRows = 20
  const maxCols = 20

  // GRID DATA STORAGE
  let activeCells = {}

  // SET INITIAL UI STATE
  $('#stop-tick-btn').attr('disabled', true)

  $('#dump-config-btn').click(dumpConfigBtnClick)
  $('#clear-btn').click(clearBtnClick)
  $('#one-tick-btn').click(oneTickBtnClick)
  $('#start-tick-btn').click(startTickBtnClick)
  $('#stop-tick-btn').click(stopTickBtnClick)

  // DRAW INITIAL GRID
  displayUIGrid()

  // UI GRID FUNCTIONS
  function displayUIGrid() {
    for (let i = 0; i < maxRows; i++) {
      const row = $('<tr>')
      for (let j = 0; j < maxCols; j++) {
        const cell = $('<td>')
        const rowCallString = `${i}, ${j}`
        cell.attr('data-row-col', rowCallString)
        cell.click(uiGridCellClick)
        row.append(cell)
      }
      $('#ui-grid').append(row)
    }
  }

  function uiGridCellClick(event){
    event.preventDefault()
    const rowCallString = $(this).attr('data-row-col')
    $(this).toggleClass('on')
    if($(this).hasClass('on')){
      activeCells[rowCallString] = true
    } else {
      delete activeCells[rowCallString]
    }

    // console.log(rowCallString);
  }

  // BUTTON EVENT HANDLERS
  function stopTickBtnClick(event) {
    event.preventDefault()

    $('#dump-config-btn').removeAttr('disabled')
    $('#clear-btn').removeAttr('disabled')
    $('#one-tick-btn').removeAttr('disabled')
    $('#start-tick-btn').removeAttr('disabled')

    $('#stop-tick-btn').attr('disabled', true)

    console.log('stopBtnClick()')
  }

  function oneTickBtnClick(event) {
    event.preventDefault()
    console.log('oneTickBtnClick()')
  }

  function startTickBtnClick(event) {
    event.preventDefault()

    $('#dump-config-btn').attr('disabled', true)
    $('#clear-btn').attr('disabled', true)
    $('#one-tick-btn').attr('disabled', true)
    $('#start-tick-btn').attr('disabled', true)

    $('#stop-tick-btn').removeAttr('disabled')

    console.log('startTickBtnClick()')
  }

  function clearBtnClick(event) {
    event.preventDefault()
    $('td').removeClass('on')
    activeCells = {}
    console.log('clearBtnClick()')
  }

  function dumpConfigBtnClick(event) {
    event.preventDefault()
    console.log('dumpConfigBtnClick()')
  }
})
