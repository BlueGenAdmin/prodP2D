
function changeLanguage() {
    var languageSelect = document.getElementById("languageSelect");
    var selectedLanguage = languageSelect.value;
    var appInstallation = document.getElementById("appInstallation");
    var appInstallationTwo = document.getElementById("appInstallationTwo");
    var playStore = document.getElementById("playStore");
    var pPlaystore = document.getElementById("pPlaystore");
    var pSearch = document.getElementById("pSearch");
    var appReg = document.getElementById("appReg");
    var signUp = document.getElementById("signUp");
    var signUpTxt = document.getElementById("signUpTxt");
    var changeUser = document.getElementById("changeUser");
    var changeUserTxt = document.getElementById("changeUserTxt");
    var joinLobby = document.getElementById("joinLobby");
    var joinLobbyTxt = document.getElementById("joinLobbyText");
    switch (selectedLanguage) {
        case "chi":
            appInstallation.innerText = "应用程序安装";
            appInstallationTwo.innerText="应用程序安装";
            playStore.innerText="应用商店/应用商店";
            pPlaystore.innerText="单击设备上的 应用商店 或 应用商店 安装，现在您可以开始搜索 Mil Poker";
            pSearch.innerText="在搜索栏上搜索 Mil Poker 并点击安装";
            appReg.innerText ="APP注册";
            signUp.innerText="报名";
            signUpTxt.innerText="注册以注册您的帐户。 输入用户名和密码。接下来输入您的邀请码（可选）并点击注册。";
            changeUser.innerText="更改用户名";
            changeUserTxt.innerText ="更改游戏名称中的用户名";
            joinLobby.innerText ="加入大厅";
            joinLobbyTxt.innerText ="点击并加入游戏";

            break;
        case "en":
            window.location.reload();
            break;
  
        default:
            textElement.innerText = "Hello, world!";
            break;
    }
}



function appReg(){
    var languageSelect = document.getElementById("languageSelect");
    var selectedLanguage = languageSelect.value;
    var appReg = document.getElementById("appReg");
    var signUp = document.getElementById("signUp");
    var signUpTxt = document.getElementById("signUpTxt");
    var changeUser = document.getElementById("changeUser");
    var changeUserTxt = document.getElementById("changeUserTxt");
    var joinLobby = document.getElementById("joinLobby");
    var joinLobbyTxt = document.getElementById("joinLobbyText");

    switch (selectedLanguage) {
        case "chi":
        appReg.innerText ="APP注册";
        signUp.innerText="报名";
        signUpTxt.innerText="注册以注册您的帐户。 输入用户名和密码。接下来输入您的邀请码（可选）并点击注册。";
        changeUser.innerText="更改用户名";
        changeUserTxt.innerText ="更改游戏名称中的用户名";
        joinLobby.innerText ="加入大厅";
        joinLobbyTxt.innerText ="点击并加入游戏";

        break;
        case "en":
            window.location.reload();
            break;
  
        default:
            textElement.innerText = "Hello, world!";
            break;
    }
}


function passReset(){
    var languageSelect = document.getElementById("languageSelect");
    var selectedLanguage = languageSelect.value;
    var forgotPass  = document.getElementById("forgotPass")
    var messageUs = document.getElementById("messageUs")
    var communicate = document.getElementById("communicate")
    var clubA = document.getElementById("clubA")
    var clubOwner =document.getElementById("clubOwner")



    switch (selectedLanguage) {
        case "chi":
            forgotPass.innerText = "忘记密码"
            messageUs.innerText ="（玩家）"
            communicate.innerText="单击 milpoker 应用程序上的“忘记密码”并使用您的绑定电子邮件找回密码。"
            clubA.innerText="（俱乐部老板或代理人）"
            clubOwner.innerText="我们可以重置他们的密码，以便他们可以找回俱乐部的密码。"

        

        break;
        case "en":
            window.location.reload();
            break;
  
        default:
            textElement.innerText = "Hello, world!";
            break;
    }


}

function managementApp(){
    var languageSelect = document.getElementById("languageSelect");
    var selectedLanguage = languageSelect.value;
    var managementApp = document.getElementById("managementApp")
    var messageUs = document.getElementById("messageUs")
    var communicate = document.getElementById("communicate")




    switch (selectedLanguage) {
        case "chi":

        managementApp.innerText = "管理层批准"
        messageUs.innerText = "给我们留言"
        communicate.innerText="如果您想成为俱乐部所有者，请单击顶部的按钮与 Ace Advantage 营销团队进行交流"
         
        break;
        case "en":
            window.location.reload();
            break;
  
        default:
            textElement.innerText = "Hello, world!";
            break;
    }


}


function mChips(){
    var languageSelect = document.getElementById("languageSelect");
    var selectedLanguage = languageSelect.value;
    var mChip = document.getElementById("mChip")
    var cashin = document.getElementById("cashin")




    switch (selectedLanguage) {
        case "chi":
            mChip.innerText = "俱乐部 Mchips 购买"
            cashin.innerText = "现金客栈"


         
        break;
        case "en":
            window.location.reload();
            break;
  
        default:
            textElement.innerText = "Hello, world!";
            break;
    }


}

function cashOut(){
    var languageSelect = document.getElementById("languageSelect");
    var selectedLanguage = languageSelect.value;
    var mChip = document.getElementById("mChip")
    var cashOut = document.getElementById("cashOut")




    switch (selectedLanguage) {
        case "chi":
            mChip.innerText = "俱乐部 Mchips 提现"
            cashOut.innerText = "兑现"


         
        break;
        case "en":
            window.location.reload();
            break;
  
        default:
            textElement.innerText = "Hello, world!";
            break;
    }


}


function clubPannel(){
    var languageSelect = document.getElementById("languageSelect");
    var selectedLanguage = languageSelect.value;
    var clubPannel = document.getElementById("clubPannel")
    var clubCreation = document.getElementById("clubCreation")
    var one = document.getElementById("one")
    var two  = document.getElementById("two")
    var three  = document.getElementById("three")
    var four = document.getElementById("four")
    var five  = document.getElementById("five")
    var six  = document.getElementById("six")
    var seven  = document.getElementById("seven")
    var clubOwner = document.getElementById("clubOwner")
    var eight  = document.getElementById("eight")
    var nine  = document.getElementById("nine")
    var ten  = document.getElementById("ten")
    var eleven  = document.getElementById("eleven")
    var clubInfo = document.getElementById("clubInfo")
    var twelve  = document.getElementById("twelve")
    var thirth  = document.getElementById("thirth")
    var fourth = document.getElementById("fourth")
    var fifth = document.getElementById("fifth")
    var sixth = document.getElementById("sixth")
    var egtht = document.getElementById("egtht")
    var ninent = document.getElementById("ninent")
    var tent = document.getElementById("tent")




    switch (selectedLanguage) {
        case "chi":
            clubPannel.innerText = "俱乐部小组"
            clubCreation.innerText = "俱乐部创建过程"
            one.innerText = "1. 首先下载官方网站："
            two.innerText = "2. 在网站上注册帐户。"
            three.innerText = "3. 点击“俱乐部”部分下的“+”按钮申请加入俱乐部。"
            four.innerText = "4.使用联盟ID：1002。"
            five.innerText = "5. 佣金为 3%，上限为 3 个大盲注 (BB)。"
            six.innerText = "6、俱乐部老板可以获得每场比赛产生的服务费的90%和球员缴纳的保险费的50%作为利润。 （注：俱乐部需要存入至少5000元作为抵押才能提供保险，否则将无法提供保险服务。）"
            seven.innerText = "7. 访问后端网站club.milpoker.com/index.html。"
            clubOwner.innerText = "对于俱乐部业主"
            eight.innerText = "- 俱乐部需要满足 10 名会员。"
            nine.innerText = "- 俱乐部的最低存款金额为 5,000 菲律宾比索。"
            ten.innerText = "- 1000以上可以提现，低于1000则不能提现。"
            eleven.innerText = "-如果活跃会员超过10名，我们将限时免费升级您的俱乐部。"
            clubInfo.innerText = "俱乐部老板信息"
            twelve.innerText = "请提供以下信息："
            thirth.innerText = "1.手机号码："
            fourth.innerText = "2.电子邮件地址："
            fifth.innerText = "3.脸书："
            sixth.innerText = "4.俱乐部名称："
            egtht.innerText = "5.俱乐部ID："
            ninent.innerText = "这样如果您以后有任何问题我们可以及时联系您。"
            tent.innerText = "如果有什么问题，以后可以在这个群里问我们，我们可以方便的解决。"
          


         
        break;
        case "en":
            window.location.reload();
            break;
  
        default:
            textElement.innerText = "Hello, world!";
            break;
    }


}


function useClub(){
    var languageSelect = document.getElementById("languageSelect");
    var selectedLanguage = languageSelect.value;
    var useClub = document.getElementById("useClub")
    var one = document.getElementById("one")
    var two = document.getElementById("two")
    var three  = document.getElementById("three")
    var four = document.getElementById("four")
    var five = document.getElementById("five")
    var six = document.getElementById("six")
    var seven = document.getElementById("seven")
    var eight = document.getElementById("eight")
    var nine = document.getElementById("nine")
    var ten = document.getElementById("ten")
    var eleven = document.getElementById("eleven")
   



    switch (selectedLanguage) {
        case "chi":
            useClub.innerText="使用俱乐部面板"
            one.innerText="1. 输入您的帐户用户名和密码。"
            two.innerText="2. 输入来自您的绑定电子邮件地址的代码。"
            three.innerText="（在这里您可以看到您俱乐部的所有活动。）"
            four.innerText="（您可以在此处查看和购买俱乐部级别。）"
            five.innerText="（在这里您可以看到您的会员排名和会员列表）"
            seven.innerText="（在这里您可以购买钻石，也可以将钻石分配给您的玩家。）"
            eight.innerText="（在这里你可以购买水晶来提升你的俱乐部等级。）"
            nine.innerText="（在这里您可以看到工会批准的耙子。）"
            ten.innerText="（在这里您可以存入或提取您的俱乐部资金，也可以在这里管理您的球员提现或提现。）"
            eleven.innerText="（这里可以查看经纪人排名、经纪人收入、经纪人名单，还可以在这里结算经纪人佣金。）"
          

         


         
        break;
        case "en":
            window.location.reload();
            break;
  
        default:
            textElement.innerText = "Hello, world!";
            break;
    }


}


function clubPasswordReset(){
    var languageSelect = document.getElementById("languageSelect");
    var selectedLanguage = languageSelect.value;
    var useClubPannel = document.getElementById("useClubPannel")
    var mtt = document.getElementById("mtt")
    var communicate =document.getElementById("communicate")
 



    switch (selectedLanguage) {
        case "chi":
            useClubPannel.innerText="使用俱乐部面板"
            mtt.innerText="忘记密码（俱乐部）"
            communicate.innerText = "进入Boss控制面板，搜索下线账户管理，搜索俱乐部名称后，搜索俱乐部列表，点击俱乐部信息，点击重置密码。"         
   
        break;
        case "en":
            window.location.reload();
            break;
  
        default:
            textElement.innerText = "Hello, world!";
            break;
    }


}

function tableManagement(){

    var languageSelect = document.getElementById("languageSelect")
    var selectedLanguage = languageSelect.value;
    var createTable = document.getElementById("createTable")
    var steps  = document.getElementById("steps")
    var one = document.getElementById("one")
    var two = document.getElementById("two")
    var three = document.getElementById("three")
    var four = document.getElementById("four")
    var five = document.getElementById("five")
    var six = document.getElementById("six")
    var seven = document.getElementById("seven")
    var eight = document.getElementById("eight")
    var nine = document.getElementById("nine")
    var ten = document.getElementById("ten")
    var eleven = document.getElementById("eleven")
    var twelve = document.getElementById("twelve")
    var thirth = document.getElementById("thirth")



    switch (selectedLanguage) {
        case "chi":

        createTable.innerText="经管理层批准后创建表"
        steps.innerText="1. 打开 Union 控制面板。"
        one.innerText="2. 管理。"
        two.innerText="3.游戏列表。"
        three.innerText="4.自动匹配游戏常规牌桌。"
        four.innerText="5. 选择（NLH、奥马哈、6+、Pusoy）"
        five.innerText="6.新游戏。"
        six.innerText="（贵宾桌）"
        seven.innerText=""
        eight.innerText=""
        nine.innerText=""
        ten.innerText=""
        eleven.innerText=""
        twelve.innerText=""
        thirth.innerHTML=""
         
        break;
        case "en":
            window.location.reload();
            break;
  
        default:
            textElement.innerText = "Hello, world!";
            break;
    }

}





