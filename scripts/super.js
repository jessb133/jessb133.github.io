var simplicitySwap = ['Simplicity', 'Solutions', 'Success'],
    simplicitySpan = document.querySelector('.simplicity'),
    i,
    ii = 0,

    //take array values and split the inner contents into separate characters,
    //from here we return/call the spansAdded function passing in the singular characters
    sArrInArr = simplicitySwap.map(function(val){
      return val.split('').map(function(iv){
        return spansAdded(iv)
      })
    })

//basic function takes a string value and adds a span around it
function spansAdded(v){
  var span = document.createElement('span')
  span.textContent = v
  return span
}

//function that operates the timing for css classes

function outerTimeout(v, it){

  //we take the "length" as separate values,
  //and use them as an incrementing value for staggering effect
  setTimeout(function(){
    v.classList.add('active')
  }, (it + 1) * 100)

  //from here we want to remove active and add up-and-away,
  //set an outer timeout and an inner for the staggering effect
  setTimeout(function(){
    setTimeout(function(){
      v.classList.remove('active')
      v.classList.add('up-and-away')
    }, (it + 1) * 100)
  }, 5400)

  //after completion, regardless of where we are in the process, we remove
  //up-and-away
  setTimeout(function(){
    v.classList.remove('up-and-away')
  }, 7000)
}

//first word to appear should have same animation

sArrInArr[0].forEach(function(val){
  simplicitySpan.appendChild(val)
  outerTimeout(val, ii)
  ii++
})

//interval for word swap

i = 1
setInterval(function(){
  //clear simplicitySpan's innerHTML per call
  simplicitySpan.innerHTML = ''

  //check to see where we are in the array
  if(i >= sArrInArr.length) i = 0
  ii = 0

  //each letter in the current array index will append, and animation timer will be called
  sArrInArr[i].forEach(function(val){
    simplicitySpan.appendChild(val)
    outerTimeout(val, ii)
    ii++
  })
  i++
}, 7000)
