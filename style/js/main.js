let initialMoney;
let initialSpending=0;
let initialIncome=0;
let allTransaction=[
    
];
const d=new Date();
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
//const months = ["Yanvar", "Fevral", "Mart", "Aprel", "May", "Iyun", "Iyul", "August", "Sentabr", "Oktabr", "Noyabr", "Dekabr"];
let sana=(d.getDate()+1)+'-'+months[d.getMonth()]+' '+d.getFullYear()+'-Year'




function drawSpending(){
    document.getElementById('sCard').innerHTML=' '
    document.getElementById('iCard').innerHTML=' '
    for(let i=0; i<allTransaction.length;i++){
        if(!allTransaction[i].isIncome){
            
            document.getElementById('allSpending').innerHTML=new Intl.NumberFormat().format(initialSpending);
            document.getElementById('sCard').innerHTML +=
        '<div class="card border-danger my-3">'+
        '<div class="card-body"> $'+ new Intl.NumberFormat().format(allTransaction[i].amount)+
        ' <span class="badge bg-danger float-end">'+allTransaction[i].time+'</span></div>'+
        '<div class="card-footer">'+ allTransaction[i].reason+' </div></div>'
        }else {
            
            document.getElementById('allIncome').innerHTML=new Intl.NumberFormat().format(initialIncome);
            document.getElementById('iCard').innerHTML +=
        '<div class="card border-success my-3">'+
        '<div class="card-body"> $'+ new Intl.NumberFormat().format(allTransaction[i].amount)+
        ' <span class="badge bg-success float-end">'+allTransaction[i].time+'</span></div>'+
        '<div class="card-footer">'+ allTransaction[i].reason+' </div></div>'
        }
    }
}


function startDay(){
    let fName=document.forms['myForm']['fName'].value;
    let money=document.forms['myForm']['money'].value;
    if (fName.trim().length>0 &&  money.trim().length >0){
        initialMoney=parseInt(money)
        document.getElementById('firstName').innerHTML=fName
        document.getElementById('initAmount').innerHTML='(Day started with $'+money)
        document.getElementById('totalAmount').innerHTML=new Intl.NumberFormat().format(money)
        document.getElementById('date').innerHTML=sana
        document.getElementById('sum').innerHTML="$";
        document.getElementById('startBtn').style.display='none'
        document.getElementById('main').style.display='block'   
    }else{
        alert('Please fill all fields!')
    }
}
function spending(){
    let b=new Date()
    let amount= document.forms['sForm']['sAmount'].value
    let reason= document.forms['sForm']['sReason'].value
    let time =(b.getHours()+':'+b.getMinutes());
    if(amount.trim().length>0 && reason.trim().length> 0){
        let newAction={
            amount,
            reason,
            time,
            isIncome: false
        }
        allTransaction.push(newAction);
        initialSpending+=parseInt(amount)
        initialMoney-=parseInt(amount);
        document.getElementById('totalAmount').innerHTML=new Intl.NumberFormat().format(initialMoney);
        drawSpending()
        document.forms['sForm'].reset();
    }else{
        alert("Fill all fields!")
    }
}
function income(){
    let b=new Date()
    let amount= document.forms['iForm']['iAmount'].value
    let reason= document.forms['iForm']['iReason'].value
    let time =(b.getHours()+':'+b.getMinutes());
    if(amount.trim().length>0 && reason.trim().length> 0){
        let newAction={
            amount,
            reason,
            time,
            isIncome: true
        }
        allTransaction.push(newAction);
        initialIncome+=parseInt(amount)
        initialMoney+=parseInt(amount);
        document.getElementById('totalAmount').innerHTML=new Intl.NumberFormat().format(initialMoney);
        drawSpending()
        document.forms['iForm'].reset();
        time=null;
    }else{
        alert("Fill all fields!")
    }
}
