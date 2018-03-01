$(document).ready(function () {

  // SET INITIAL UI STATE
  $('#stop-tick-btn').attr('disabled', true)

  $('#dump-config-btn').click(dumpBtnClick)
  $('#clear-btn').click(clearBtnClick)
  $('#one-tick-btn').click(oneTickBtnClick)
  $('#start-tick-btn').click(startBtnClick)
  $('#stop-tick-btn').click(stopBtnClick)

  // BUTTON EVENT HANDLERS
  function stopBtnClick(event) {
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

  function startBtnClick(event) {
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
    console.log('clearBtnClick()')
  }

  function dumpBtnClick(event) {
    event.preventDefault()
    console.log('dumpConfigBtnClick()')
  }
})
