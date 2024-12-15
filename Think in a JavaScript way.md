# JavaScript Scopes - the ultimate weirdo! 

[JavaScript Scopes - the ultimate weirdo!  by Sumit ](https://www.youtube.com/watch?v=YJMdjddGMmQ&list=PLHiZ4m8vCp9Nflbo9a0pZuLscG_Xc7DKq&index=2)

![3:34](/images/Think%20in%20a%20JavaScript%20way/JavaScript%20Scopes%20-%20the%20ultimate%20weirdo!/global.PNG)

ekhane myFunc() er vitore ja ase ta child er dhuniya r myFunc() er bahire ja ase ta parent er dhuniya x ekhane parent er dhuniya te ase.

![5](/images/Think%20in%20a%20JavaScript%20way/JavaScript%20Scopes%20-%20the%20ultimate%20weirdo!/global2.PNG)

in this case we are accessing the value of x in myFunc()
which is not possible in other programming laguage.

JS onekta amader choto belar moto.amader baba ma kichu khele lagle amra onk time ei tader theke niye kheye feltam but jokhn amra kichu khetam tokhn tader ke ditam na. JS er khetre o jinish ta same. JS er vitor parent je se tar access child ke diye dey kintu child parent ke dey na. ekhane parent er dhuniya te x ase jeita child access korte parbe kintu child er vitore jei y ache sheita parent access korte parbe na.

![8:29](/images/Think%20in%20a%20JavaScript%20way/JavaScript%20Scopes%20-%20the%20ultimate%20weirdo!/global3.PNG)

child shudhu parent ke access korte parbe na chaile change o kore dite parbe.. jemon ekhane x er value change kore diyeche

![9:56](/images/Think%20in%20a%20JavaScript%20way/JavaScript%20Scopes%20-%20the%20ultimate%20weirdo!/global4.PNG)

kintu ekhane myFunc() er vitor jokhn var x=10; dewa holo tokhn myFunc() er vitor x=10 dekhacche but bahire 23 show krtese. cause ekhane parent er dhuniyar x r myFunc() er dhuniyar x totally alada. var x=23 window er vitor create hoyche and var x=10 myFunc() vitor create hoyeche tai myFunc() er vitor jokhn x ke console.log(x) korlo tokhn myFunc() nijer x ta ke nise tar r parent er kache jawa lage nai

![12:17](/images/Think%20in%20a%20JavaScript%20way/JavaScript%20Scopes%20-%20the%20ultimate%20weirdo!/global5.PNG)

amra jodi var na diye direct x=10 likhi tahole JS nije nije **(var x = 10)** kore ney jar jonno amder ekhane x er value 10 show kortese.ekhane x window oject e add hobe jeita parent scope

![12:46](/images/Think%20in%20a%20JavaScript%20way/JavaScript%20Scopes%20-%20the%20ultimate%20weirdo!/global6.PNG)

amra jodi ei ta off korte chai like amra chai je myFunc() er dhuniya te x thakbe.. tahole amader **("use strict")** use korte hobe. tahole amra jodi bhul boshoto evabe window object er vitor kono variable create kori tahole js amader error dibe.

JS normally amader desher baba mar moto kaj kore parent er dhuniyar shob ksu child ney kintu child er dhuniyar kono kisu parent nite pare na.. amra jodi etake western baba mar moto banaite chai like parent er dhuniya parent er child er dhuniya child er tahole amader **("use strict")** use korte hobe.


![14:34](/images/Think%20in%20a%20JavaScript%20way/JavaScript%20Scopes%20-%20the%20ultimate%20weirdo!/global7.PNG)

amra jodi "use strict" use kora chara child er jonno separate variable create korte chai tahole variable er age var likhe dibo tahole r parent er dhuniyar sathe add hobe na. like ekhane myFunc() er x er access shudhu myFunc() er ase tar parent er nai.

# JavaScript var, let, const - Not so simple! 
[JavaScript var, let, const - Not so simple! ](https://www.youtube.com/watch?v=6LvKgfLP8uU&list=PLHiZ4m8vCp9Nflbo9a0pZuLscG_Xc7DKq&index=3)


![var and let](/images/Think%20in%20a%20JavaScript%20way/JavaScript%20var,%20let,%20const%20-%20Not%20so%20simple!/var%20&%20let.PNG)

ekhane 2ta if condition e true but var diye declare kora varVariable if er scope er bahir theke console kora jacche but let diye declare kora letVariable if er scope er bahire console kora jacche na. ekhane var console howar karon hocche var **(function scope)** r let hocche **(block scope)** tar jonno var diye declare kora variable if block er bahire console kora jaitese but let diye declare kora variable if block er bahire console kora jaitese na.

## function scope: 
function scope bolte bujay amra function er vitore jei variable create korbo sheta shudhu function er vitorey kebol use kora jabe tar bahire use kora jabe na.

## block scope:




![var and let](/images/Think%20in%20a%20JavaScript%20way/JavaScript%20var,%20let,%20const%20-%20Not%20so%20simple!/var%20&%20let2.PNG)

ekhane let diye declare kora variable jokhn oi block er vitorei console kora hocche tokhn thik e console.log hocche cause letVariable oi block er vitorei console.log kora hoise.2015 er age js e shudhu var diye e variable declare kora jeto kintu **(es6)** e let r const ashar por let and const diye o variable declare kora jay. behsir vag language ei variable block scope er moto kaj kore.mani onnanno language eta kolpona o kora jay na je block er bahire scope kaj korbe. var diye variable declare korar main disadvantage chilo amra jokhn kono third party library use korbo tokhn jodi library er vitoreo same name e kono variable thake tokhn 2ta variable conflict korbe ami somehow library er variable change korte pari abr library o some how amr variable change kore dite pare jeta khub e weird.

![let and const](/images/Think%20in%20a%20JavaScript%20way/JavaScript%20var,%20let,%20const%20-%20Not%20so%20simple!/var%20&%20let3.PNG)

let and const block scope howar karone kono third party library te same name e variable thakleo conflict howar chance thake na. jemon leVariable amra shudhu mark kora scope er vitorei use korte parbo er bahire parbo na.This is the main difference between var and let 

![var](/images/Think%20in%20a%20JavaScript%20way/JavaScript%20var,%20let,%20const%20-%20Not%20so%20simple!/var%20&%20let4.PNG)

var diye variable amra joto khushi toto bar declare korte parbo and shobar last e jeita declare kora hobe variable er vitor oita store thakbe 

![var](/images/Think%20in%20a%20JavaScript%20way/JavaScript%20var,%20let,%20const%20-%20Not%20so%20simple!/var%20&%20let5.PNG)

ekhane first e jokhn varVariable console kori tokhn "This is var" store kore rakhe kintu jokhn abr var varVariable = "This is var again" store kori tokhn oi ager varVariable manipulate hoye "This is var again" store kore.line 3 er niche varVariable er value "This is var again" and tar upore value "This is var".bar bar same variable declare kora onk ta weird tai js 2015 te let introduce kore..

![let](/images/Think%20in%20a%20JavaScript%20way/JavaScript%20var,%20let,%20const%20-%20Not%20so%20simple!/var%20&%20let6.PNG)

ekhane let diye jokhn second time variable declare kori tokhn  console e error dekhacche "letVariable has already declared" tar mani amra let diye second time same variable declare korte parbo na.

![let](/images/Think%20in%20a%20JavaScript%20way/JavaScript%20var,%20let,%20const%20-%20Not%20so%20simple!/let.PNG)

let variable diye ami redeclare korte parbo na but chaile reassign korte parbo. ekhane jemon letVariable = "This is let Again" assign korte partesi.


![const](/images/Think%20in%20a%20JavaScript%20way/JavaScript%20var,%20let,%20const%20-%20Not%20so%20simple!/const.PNG)

const let er motoi just let amra bar bar reassign korte pari const er belay sheta pari na. jemon ekhane const reassign kora hoyche dekhe error show kortese.

kintu constVariable jodi object hoto tokhn different way te kaj korto

![const](/images/Think%20in%20a%20JavaScript%20way/JavaScript%20var,%20let,%20const%20-%20Not%20so%20simple!/const2.PNG)

object nile  15 number line e jevabe object reassign kortese evabe parbo na kintu object er property change korte parbo

![const](/images/Think%20in%20a%20JavaScript%20way/JavaScript%20var,%20let,%20const%20-%20Not%20so%20simple!/const3.PNG)

15 number line e jevabe property value change kora hoise eivabe joto khushi toto bar change korte parbo.mani amra const diye obect declare korle amra "constVariable={}" assign korte parbo na but object er property change korte parbo.


let r const blcok er bahire use kora jabe na kintu var function er vitor pawa jabe.kintu var diye variable function scope er bahire use kora jabe na 

![var](/images/Think%20in%20a%20JavaScript%20way/JavaScript%20var,%20let,%20const%20-%20Not%20so%20simple!/const4.PNG)

ekhane f() er vitor var diye a declare kora hoise and 12,15 line e console kora hoise tai 12 te consloe hole o 15 te hobe na f() call er agei a console korar karone agei error peye gese and f() er vitor r dhuke nai.


