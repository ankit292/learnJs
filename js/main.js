// Browser object model
   //height & width
  function resizeFunc(){
    console.clear();
    
    var iHght = window.innerHeight;
    console.log('inner height : ' + iHght);
    var otrHght = window.outerHeight;
    console.log('outer height : ' + otrHght);
    var iWdth = window.innerWidth;
    console.log('inner width : ' + iWdth);
    var otrWdth = window.outerWidth;
    console.log('outer width :  ' + otrWdth);
  }
  //window open & close
  var wnOpnTrgt = document.getElementById('wdOpn');
  var opnWnd;
  wnOpnTrgt.addEventListener('click',()=>{
    opnWnd = window.open('file:///D:/learnJS/index.html','_blank','width=500px,height=500px,left=200px,top=200px');
  });
  var wnClsTrgt = document.getElementById('wdCls');
  wnClsTrgt.addEventListener('click',()=>{
    opnWnd.close();
  });


//setTime event

setInterval(()=>{
    var dt = new Date();
    document.getElementById('tm').innerHTML = dt.toLocaleTimeString();
},1000);

var outInt = setInterval(runFunc,1000);
var runBx = 0;
var runTop = 0;
var runRght = 0;
var runBtm = 0;
function runFunc(){
    runBx =  runBx + 10;
    
    var getBx = document.getElementById('bx2');
    if(runBx == 90){
        runBx = 90 + '%';
        var outInt2 = setInterval(runFunc2,1000);
        function runFunc2(){
            if(runTop == 80){
                clearInterval(outInt2);
            }else{
                runTop = runTop + 10;
                getBx.style.top = runTop + '%';
            }  
        }
    }else if(runTop == 80){
        runTop = 80 + '%';
        var outInt3 = setInterval(runFunc3,1000);
        function runFunc3(){
            if(runBx == 0){
                clearInterval(outInt3);
            }else{
                runBx = runBx - 10;
                getBx.style.left = runBx - '%';
            } 
        }
    }else{
        getBx.style.left = runBx + '%';
    }  
}
//setTimeout
var trgtBx = document.getElementById('tmOut');
var setTmOut = setTimeout(() => {
    trgtBx.style.width =  '200px';
}, 3000);
var btnClr = document.getElementById('btnClr');
btnClr.addEventListener('click',()=>{
   clearTimeout(setTmOut);
});

// form events

var addFcsFnc = document.querySelector('form');
// focus
addFcsFnc.addEventListener('focus', (event)=>{
    event.target.style.backgroundColor = "red";
},true);
// blur
addFcsFnc.addEventListener("blur", (event) => {
    event.target.style.background = "";
  },true);
//   input
addFcsFnc.addEventListener('input',(event)=>{
    var getVal = event.target.value;
    document.getElementById('dav').innerHTML = getVal;
},true);
//   onchange 
var addCgnFnc = document.querySelector('select');
addCgnFnc.addEventListener('change',(event)=>{
    var getVal = event.target.value;
    document.getElementById('dav2').innerHTML = getVal;
},true);
// select
addFcsFnc.addEventListener('select',(event)=>{
    var getVal = event.target.value;
    console.log(getVal);
},true);
// submit
addFcsFnc.addEventListener('submit',(event)=>{
    var y = event.target.value;
    var x =  document.getElementById('fname').value;
    alert(x)
})




//hasAttributes & hasChildNodes
var hasAttr = document.getElementById('crtElm').hasAttribute('class');
var hasAttr2 = document.getElementById('crtElm').hasChildNodes();
console.log(hasAttr);
console.log(hasAttr2);

// dom methods 
     // isEqualNodes
     var trgtEq1 = document.getElementById('equal1').firstElementChild;
     var trgtEq2 = document.getElementById('equal2').firstElementChild;
     var cnslEq = trgtEq1.isEqualNode(trgtEq2);
     console.log(cnslEq);


      // append methods

      var crtEl = document.createElement('p');

      var crtTxtnode = document.createTextNode('just example');
      crtEl.appendChild(crtTxtnode);
      document.getElementById('crtElm').appendChild(crtEl);
      var newText = document.getElementById('crtElm');
      newText.insertBefore(crtEl,newText.childNodes[0])
      console.log(crtEl);
      console.log(crtTxtnode);

      // insert Adjacent methods
      // insert Adjacent element
      var newInserTeg = document.createElement('p');
      var newInsertTeg = document.createTextNode('insert adjacent element beforebegin');
      newInserTeg.appendChild(newInsertTeg);
      var trgtcrtElme = document.getElementById('crtElme');
      // try afterbegin,afterend,beforeend
      trgtcrtElme.insertAdjacentElement('beforebegin',newInserTeg);

      // insert Adjacent HTML
      var insertTeg = '<h2>insert adjacent HTML afterbegin</h2>';
      var trgtTeg = document.getElementById('crtElmen');
      // try afterend,beforebegin,beforeend
      trgtTeg.insertAdjacentHTML('afterbegin',insertTeg);

      // replace and remove
      var crtFrtEl = document.createElement('li');
      var crtFrt = document.createTextNode('PineApple');
      crtFrtEl.appendChild(crtFrt);
      var trgtFrt = document.getElementById('fruit');
      var rplcFrt =   trgtFrt.children[0];
      // replacechild
      trgtFrt.replaceChild(crtFrtEl,rplcFrt);
      // remove child
      var rmvFrt =   trgtFrt.children[1];
      trgtFrt.removeChild(rmvFrt);
      console.log(trgtFrt);

      //cloneNode
      var clTrgt = document.getElementById('fruit').children[1];
      var copyCln = clTrgt.cloneNode(true);
      document.getElementById('fruit2').appendChild(copyCln);
      
      //contains method
      var ctchCnt = document.getElementById('inner');
      var findCnt = document.getElementById('h2');
      var trgtCnt = ctchCnt.contains(findCnt);
      console.log(trgtCnt);

//


//callback function but not run yet
      function myDisplaying(some){
        document.getElementById('demo')
        }
        function myCalculator(num1,num2,myCallback){
          let sum = num1 + num2 ;
          myCallback(sum);
        }
        myCalculator(5,5,myDisplaying);

//filter method
        var arr = ['apple','orange','mango','apple','apple','grapes','pineapple','orange'];
        function removeDuplicate(arr){
          return arr.filter((item,index)=>
            arr.indexOf(item) === index
          );
        }
        console.log(removeDuplicate(arr));
        //Set method
        function rmvDblct(arr){
          return [...new Set(arr)]
        }
        console.log(rmvDblct(arr));
 //indexOf method
        function rmvDblct2(arr){
          var uniq = [];
          for(let i = 0; i < arr.length; i++){
            if(uniq.indexOf(arr[i]) === -1){
              uniq.push(arr[i]);
            }
          }
          return uniq;
        }
        console.log(rmvDblct2(arr))
      //last night update 9 40
// for loop

      for(let a = 1; a <= 5 ;a++){
        for(let b = 1; b <= a; b++){
          document.write(b)
        }
        document.write('<br>')
      }

      for(let a = 1; a <= 5;a++){
        let bc = a ;
        for(let b = 1; b <= bc;b++){
          document.write(a);
        }
        document.write('<br>')
      }
      for(let a = 5; a>= 1; a--){
        let bc = a;
        for(let b = 1; b <= bc; b++){
          document.write(bc);
        }
        document.write('<br>')
      }
      for(let a = 5; a>=1;a--){
        for(let b = a; b >=1;b--){
          document.write(b);
        }
        document.write('<br>')
      }
      for(let a = 5;a>=1; a--){
        for(let b = a;b<=5;b++){
          document.write(a);
        }
        document.write('<br>')
      }
      for(let a = 5;a>=1;a--){
        for(let b = 1;b<=a;b++){
          document.write(b);
        }
        document.write('<br>')
      }

      let Day;
      var date = new Date();
      var days = date.getDay()
      console.log(date.getDate())
//switch case
      switch (days) {
        case 0:  Day = "Sunday";
          break;
          case 1:  Day = "Monday";
          break;
          case 2:  Day = "Tuesday";
          break;
          case 3:  Day = "Wednesday";
          break;
          case 4:  Day = "Thursday";
          break;
          case 5:  Day = "Friday";
          break;
          case 6:  Day = "Saturday";
          break;
      
        default:
          break;
      }
      document.write(Day);
// ternary operator
      let xv = 5;
      let zv;
      (xv > 10)? zv="true": zv="false";
      console.log(zv);
      // var prmt = confirm("this is Promt");
      // alert(prmt)
      // prmt? alert(true):alert(false)
      document.write('<br>')
      var tblData = [
        ['Ankit',28,'UI Developer','3 Years','3.5 LPA'],
        ['Rishabh',26,'Frontend Developer','3 Years','7 LPA'],
        ['Hemant',24,'UI/UX Designer', '2 Years','5 LPA']
      ]
// map method
      var mapa = tblData.map((item,index)=>{
        return index + ' ' + item + '<br>';
      }) 
      document.write(mapa);

      for(var aData = 0; aData < tblData.length;aData++){
        console.log(tblData)
      }
//filter 
      var arrData = [18,23,12,14,20];
      var arrB = arrData.filter(chck);
      function chck(age){
        return age >= 18;
      }
      console.log(arrB);
 //forEach
      var feach = [18,23,12,14,20];
      feach.forEach(loop);
      function loop(value,index){
        document.write(index + ' : ' + value + '<br>');
      }
//object
      var obj1 = {
        fname: 'Ankit',
        lname: 'Kumar',
        age: 28,
        fullName: function(){
        return this.fname + ' ' + this.lname
        }
      }
      console.log(obj1.fullName());
//for in loop
      var obj2 = {
        fname: 'ankit',
        lname: 'kumar',
        age: 25,
        city: 'delhi'
      }
      for(var key1 in obj2){
        document.write(obj2[key1] + '<br>');
      }
//map method
      var mapb = [
        {
          name: 'Ankit',
          age: 25,
          city: 'delhi',
          
        },
        {
          name: 'rishabh',
          age: 25,
          city: 'gaziyabad'
        }
      ];
      var mapc = mapb.map((item,index)=>{
        return item.name ;
      });
      document.write(mapc)
      // function mapFunc(x){
      //   return x.name + x.age + x.city;
      // }

      //math method
      // var matharr = [13,23,45,56,32]
      var mathmax = Math.max(13,23,45,56,32);
      console.log(mathmax);
      var mathmin = Math.min(13,23,45,56,32);
      console.log(mathmin);
// date method
      var dt = new Date();
      var todaydt = dt.toDateString();
      console.log(todaydt);
      var birthdt = dt.getDate() + '/' + (dt.getMonth()+1) + '/' + dt.getFullYear();

      console.log(birthdt );