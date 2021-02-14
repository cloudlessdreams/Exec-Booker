// saves the data to localStorage
function handleSubmit () {
  const datetime = document.getElementById('datetimepick').value;
  const from = document.getElementById('pickup').value;
  const to = document.getElementById('destination').value;

  const passenger = document.getElementById('people').value;

  const rtnDatetime = document.getElementById('datetimepick2').value;
  const rtnFrom = document.getElementById('rtn-pickup').value;
  const rtnTo = document.getElementById('rtn-destination').value;

  localStorage.setItem("datetimepick", datetime)
  localStorage.setItem("pickup", from)
  localStorage.setItem("destination", to)
  localStorage.setItem("people", passenger)

  localStorage.setItem("datetimepick2", rtnDatetime)
  localStorage.setItem("rtn-pickup", rtnFrom)
  localStorage.setItem("rtn-destination", rtnFrom)


  return;

}
