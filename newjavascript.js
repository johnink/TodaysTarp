/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function classTrans(visibleClass){
    $('.about, .Boattarps, .Oilrigtarps').parent(".changything").animate({'top':'-10px'});
    $('.about, .Boattarps, .Oilrigtarps').animate({'opacity' :0,'zIndex':0}).css("display","none");
    $(visibleClass).parent(".changything").animate({'top':'0px'});
    $(visibleClass).css("display","block").animate({'opacity' :1, 'zIndex':1});
}

function whichImg(thisImg){
    $('.bigimage,#info, #imageviewer,'+thisImg).animate({'opacity':0}).css('display','none');
    $('#imageviewer,'+thisImg).css("display","block").animate({'opacity':1});
}

function backToNormal(){
    $('.bigimage, #info, #imageviewer').animate({'opacity':0}).css('display','none');
    $('#info').css("display","block").animate({'opacity':1});
}

//function titleappear(x){
//    $(x.lastChild).animate({'width':'100px','color':'#777'},'fast');
//}

//function titledisappear(x){
//    $(x.lastChild).animate({'width':'0','color':'#fff'},'fast');
//}