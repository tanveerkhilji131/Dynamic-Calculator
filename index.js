let text = document.createElement("input")
text.readOnly = true
document.body.prepend(text)
let parentBtn = document.createElement("div")
parentBtn.id = "parent"
document.body.append(parentBtn)
let arr = ["AC","Del",..."%/789*456-123+0.="]

let opr = ["+","-","*","/","%"]

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i])
   let btn= document.createElement("button")
    btn.value = arr[i]
    btn.innerHTML = arr[i]
    parentBtn.append(btn)
    
}
parentBtn.addEventListener("click",(e)=>{
    e.preventDefault()

    let condtion1 = text.value.slice(-2,-1);
let condition2 = text.value.slice(-1)
    if(opr.includes(e.target.value) !==  true && e.target.value !== "AC" && e.target.value !== "Backspace"){
        text.value += e.target.value
    }
    if(e.target.value == "="){
        let value = text.value.slice(0,-1)
        text.value = eval(value)
    }
    
    if(e.target.value == "AC"){
        text.value = ""
    }
    if(e.target.value == "Del"){
        text.value = text.value.slice(0,-4)
    }
    if(opr.includes(e.target.value)){
   let total =  text.value = text.value + e.target.value
      if(opr.includes(text.value[0])){
            text.value = ""
      }
      if(opr.includes(total.slice(-2,-1)) && opr.includes(total.slice(-1))) {
       let a =[...total]
       a.pop()
       a.pop()
       a.push(e.target.value)
       text.value = a.join("")
      }

    }
    
   
    
})