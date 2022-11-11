let incr = document.getElementById("counter1")
let inc = document.getElementById("counter2")
let count=0
let cnt=0
function inc1()
{
  count+=1
  incr.textContent=count
}
function inc2()
{
  count+=2
  incr.textContent=count
}
function inc3()
{
  count+=3
  incr.textContent=count
}
function inc4()
{
  cnt+=1
  inc.textContent=cnt
}
function inc5()
{
  cnt+=2
  inc.textContent=cnt
}
function inc6()
{
  cnt+=3
  inc.textContent=cnt
}
function leader()
{
  var color = "green"
  if(count>cnt)
  {
    incr.style.color = color
  }
  else(cnt>count)
  {
    inc.style.color = color 
  }
}
