function xyz(){
  return 'Ayush Arya'
 }
function Again(){
    console.log('Ayush Arya Again');
   }
class self{
    constructor(names,ages){
        this.sName = names;
        this.sAge = ages;
    }
    myself(){
        return console.log(`my name is ${this.sName}, i'm ${this.sAge} years old`) 
    }
}
export{Again,xyz,self}
