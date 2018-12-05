var normalPos=[
    {left:0,top:0},
    {left:200,top:0},
    {left:400,top:0},
    {left:0,top:200},
    {left:200,top:200},
    {left:400,top:200},
    {left:0,top:400},
    {left:200,top:400},
    {left:400,top:400},
];
var blankRecord={left:400,top:400}
var isGameStarted=false
var avoidClickStartTimes=true
var secs = 0;
var mins = 0;
var hours = 0;
var timer=null;
var timer1=null
function move(id) {
        //点击开始后，才可以玩儿游戏
        if(isGameStarted){
            var number=document.getElementById(id)
            var left= parseInt(window.getComputedStyle(number, null).left)
            var top=parseInt(window.getComputedStyle(number, null).top)
            //判断是否可以移动
            if((Math.abs(blankRecord.left-left)==200&&Math.abs(blankRecord.top-top)!=200&&Math.abs(blankRecord.top-top)!=400)||
                (Math.abs(blankRecord.top-top)==200&&Math.abs(blankRecord.left-left)!=200&&Math.abs(blankRecord.left-left)!=400)){
                var styleLeft=blankRecord.left+'px!important'
                var styleTop=blankRecord.top+'px!important'
                number.style.cssText='left:'+styleLeft;
                number.style.cssText+='top:'+styleTop
                blankRecord.left=left;
                blankRecord.top=top;
                //检测是否完成拼图
                isBingo()
            }
        }

}

function startGame() {
        if(avoidClickStartTimes){
    //1.随机摆放数字 下
    var posArray = [
        {left: 0, top: 0},
        {left: 200, top: 0},
        {left: 400, top: 0},
        {left: 0, top: 200},
        {left: 200, top: 200},
        {left: 400, top: 200},
        {left: 0, top: 400},
        {left: 200, top: 400},
        {left: 400, top: 400},
    ];
    var startPosArray = [];
    var total = 9;
    for (var i = 0; i < 8; i++) {
        var num = Math.ceil(Math.random() * total) - 1
        startPosArray.push(posArray[num])
        posArray.splice(num, 1)
        total--
    }
    blankRecord = posArray[0]
    // console.log(startPosArray);
    //console.log(blankRecord);
    //获取数字板块，从新设置数字顺序
    arrangeNumber(startPosArray)
    isGameStarted = true;

    //如在展示

    //调用定时器记录游戏用时
    clearInterval(timer);
    timer = null;
    timer = setInterval(countTime, 1000)
    //鼓励完游戏者加油
    clearInterval(timer1)
    timer1 = null;
    timer1 = setInterval(function () {
        $('.goInfo').addClass('show')
        setTimeout(function () {
            $('.goInfo').removeClass('show')
        }, 1000)
    }, 60000)

            avoidClickStartTimes=false
}
}

function resetGame() {
    var restPos=normalPos
    arrangeNumber(restPos)
    isGameStarted=false;
    if(timer){
        clearInterval(timer);
        timer=null;
    }
    if(timer1){
        clearInterval(timer1)
        timer1=null;
    }
    document.getElementById('timeRecording').innerHTML='00:00:00';
    secs=0;
    mins=0;
    hours=0;
    if($('.finishInfo').show){
        $('.finishInfo').removeClass('show')
    }
    avoidClickStartTimes=true;
}




/*嵌套使用的函数 下*/
function arrangeNumber(startPosArray) {
    var No1=document.getElementById('No1');
    var No2=document.getElementById('No2');
    var No3=document.getElementById('No3');
    var No4=document.getElementById('No4');
    var No5=document.getElementById('No5');
    var No6=document.getElementById('No6');
    var No7=document.getElementById('No7');
    var No8=document.getElementById('No8');

    No1.style.cssText='left:'+startPosArray[0].left+'px';
    No1.style.cssText+='top:'+startPosArray[0].top+'px';
    No2.style.cssText='left:'+startPosArray[1].left+'px';
    No2.style.cssText+='top:'+startPosArray[1].top+'px';
    No3.style.cssText='left:'+startPosArray[2].left+'px';
    No3.style.cssText+='top:'+startPosArray[2].top+'px';
    No4.style.cssText='left:'+startPosArray[3].left+'px';
    No4.style.cssText+='top:'+startPosArray[3].top+'px';
    No5.style.cssText='left:'+startPosArray[4].left+'px';
    No5.style.cssText+='top:'+startPosArray[4].top+'px';
    No6.style.cssText='left:'+startPosArray[5].left+'px';
    No6.style.cssText+='top:'+startPosArray[5].top+'px';
    No7.style.cssText='left:'+startPosArray[6].left+'px';
    No7.style.cssText+='top:'+startPosArray[6].top+'px';
    No8.style.cssText='left:'+startPosArray[7].left+'px';
    No8.style.cssText+='top:'+startPosArray[7].top+'px';
}

function isBingo() {
    var finalPos=[
        {left:0,top:0},
        {left:200,top:0},
        {left:400,top:0},
        {left:0,top:200},
        {left:200,top:200},
        {left:400,top:200},
        {left:0,top:400},
        {left:200,top:400}
    ];
    var No1=document.getElementById('No1');
    var No2=document.getElementById('No2');
    var No3=document.getElementById('No3');
    var No4=document.getElementById('No4');
    var No5=document.getElementById('No5');
    var No6=document.getElementById('No6');
    var No7=document.getElementById('No7');
    var No8=document.getElementById('No8');

    var currentPos=[];
    currentPos.push({left:parseInt(window.getComputedStyle(No1, null).left),top:parseInt(window.getComputedStyle(No1, null).top)})
    currentPos.push({left:parseInt(window.getComputedStyle(No2, null).left),top:parseInt(window.getComputedStyle(No2, null).top)})
    currentPos.push({left:parseInt(window.getComputedStyle(No3, null).left),top:parseInt(window.getComputedStyle(No3, null).top)})
    currentPos.push({left:parseInt(window.getComputedStyle(No4, null).left),top:parseInt(window.getComputedStyle(No4, null).top)})
    currentPos.push({left:parseInt(window.getComputedStyle(No5, null).left),top:parseInt(window.getComputedStyle(No5, null).top)})
    currentPos.push({left:parseInt(window.getComputedStyle(No6, null).left),top:parseInt(window.getComputedStyle(No6, null).top)})
    currentPos.push({left:parseInt(window.getComputedStyle(No7, null).left),top:parseInt(window.getComputedStyle(No7, null).top)})
    currentPos.push({left:parseInt(window.getComputedStyle(No8, null).left),top:parseInt(window.getComputedStyle(No8, null).top)})

   // console.log(JSON.stringify(currentPos));
   // console.log(JSON.stringify(finalPos));

    if(JSON.stringify(currentPos)==JSON.stringify(finalPos)){
            clearInterval(timer);
            timer=null;
            clearInterval(timer1)
             timer1=null;
            var html=document.getElementById('timeRecording').innerHTML;
            document.getElementById('finalTime').innerHTML='用时:'+html;
            $('.finishInfo').addClass('show')
    }

}
function countTime() {
    secs+=1;
    if(secs>=60){
        mins+=1;
        secs = 0;
    }
    if( mins>=60){
        hours+=1;
        mins = 0;
    }

    if(secs<10){
         var s='0'+secs
    }else{
        var s=secs
    }

    if(mins<10){
       var m='0'+mins
    }else{
        var m=mins
    }
    if(hours<10){
        var h='0'+hours
    }else{
        var h=hours
    }
    document.getElementById('timeRecording').innerHTML=h+':'+m+':'+s
}
/*嵌套使用的函数 上*/
