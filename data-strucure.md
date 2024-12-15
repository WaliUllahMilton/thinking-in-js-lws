# Stack :
[Stack (LIFO) | Data Structure by Farhan Hossan](https://www.youtube.com/watch?v=TkVjobVL6GA&t=125s)

A stack is a list of elements in which an element  maybe inserted or deleted only at one end,called the top of the stack,stack sometimes known as the LIFO(Last in first out) also know as FILO(First in Last Out)
## Operation in Stack :
1. push() : Insert an element into the Stack.
2. pop() : Delete an element from the stack.
3. top() : wants to see the element which is at the top of the stack.
4. display() : wants to see all the element in the stack



![stack in real life](/images/Stack%20and%20Queue//java-stack-realtime-example.png)
amader real life e amra jokhon ekta boi er upor arekta boi rakhi tokhn boier stack toiri hoy so amra boi nite hole shobar last e jeita rakhsi sheta shobar first e nite hobe **(LIFO)** r jeita shobar first e rakha hobe sheta shobar last e newa hobe tai stack ke **FILO(First in Last Out)** o bole. plate or CD o same ektar upor arekta rakha hoy and jei plate ta shobar last e or CD ta shobar last e rakha hoy shetai kintu shobar first e newa hoy **(LIFO)**.r ekhane shobar **top** e insert or delete kora hocche. mane boi rakhte gele o top e rakha lagtese boi nite geleo top theke nite hocche.

![Stack](/images/Stack%20and%20Queue/stack.drawio2.png)
uporer img e shobar last e **C** push hoy ja shobar top e and pop korar time **C** pop hoy karon c shobar top e thake.stack ke LIFO system bole cause stack e jeta last e insert hoy sheta first e delete hoy
stack insertion or deletion duitai top theke hoy like ami jodi **C** er por **D** push dite jai tokhn o top ei push hobe abar delete dite gele o **D** top ei thakbe so we can say **insertion or deletion will be from the top in Stack** 

### Overflow in Stack :
![overflow](/images/Stack%20and%20Queue/overflow.PNG)

suppose ekta stack er size 3,mane ami ei stack e 3 tar beshi elements rakhte parbo na.3 ta elements rakhar por tokhn ami jodi notun kono elements ei stack e push korte jai tokhn eta overflow hobe.cause ei stack tar maximum size e hocche 3. 


### Underflow in Stack :
![underflow](/images/Stack%20and%20Queue/undeflow.PNG)

suppose amader kache ekta empty stack ache tokhn amra jodi oi stack e pop() operation chalai tokhn sheta underflow hobe cause empty stack e delete dewar moto kichu nei

# Queue : 
[Queue (FIFO) | Data Structure](https://www.youtube.com/watch?v=EJIfzSLts68)
A queue is another special kind of list,where items are inserted at the one end called rear and deleted at the other end called front another name for a **Queue** is **FIFO(First in First Out)**.
## Operation in Queue : 
1. enqueue() : insert an element at the end of the queue.
2. dequeue() : delete the first element of queue.
3. display() : display all the element in the queue.

![queue real life example](/images/Stack%20and%20Queue/queue%20real%20life%20example.jpeg)

eikhane shobai ekta queue er vitor ase shobar front e je ase she first e bill dibe cause she shobar age ashche r je rear e ache she shobar last e bill dibe cause she shobar last e ashche.

![queue how works](/images/Stack%20and%20Queue/queue1.PNG)

ekhane amra ekta **Queue** niyechi jar size 5. **Queue** ta ekhn empty obosthay ase tai (f = r = -1).mani fron r rear same place e ache.
![queue how works](/images/Stack%20and%20Queue/queue2.PNG)
ekhon ami **enqueue(5)** operation chalanor por front 0 index and rear o 0 index.
![queue how works](/images/Stack%20and%20Queue/queue3.PNG)
ekhon abar **enqueue(7)** operation chalano holo. ekhon front 0 index ei ache but rear 1 index.
![queue how works](/images/Stack%20and%20Queue/queue4.PNG)
**enqueue(10)** operation chalanor por front 0 index and rear 2 index.
ekhon **dequeue()** operation chalale front theke 5 delete hoy jabe and front 1 index er 7 ke point korbe
![queue how works](/images//Stack%20and%20Queue/queue5.PNG)
evabe prottek ta operation chalabe front er ager jei value gula delete kora hoise oi gula queue the ekhn r nai shob gulo garbage collector e chole gese.. abar insert kole over write hoye jabe.
![queue how works(12:21)](/images//Stack%20and%20Queue//queue6.PNG)
ekhane enqueue(25) operation chalanor por abar jokhon enqueue(30) chalanor try kore tokhn overflow hoy cause [r=(n-1)] hole **Overflow** hoy ekhane r(rear)=4 and n=5(maximum size of queue) so (r4=5-1) so overflow hoise.r jokhn fron and rear equal to -1 index tokhn dequeue() operation chalale **Underflow** hoy
***
***
# Breadth First Search(BFS) and Depth First Search(DFS) : 

[5.1 Graph Traversals - BFS & DFS -Breadth First Search and Depth First Search by Abdul Bari](https://www.youtube.com/watch?v=pcKY4hjDrxk)

BFS and DFS are graph triversal methods.

![example of how dfs bfs work](/images/BFS_DFS_1.PNG)


1. Visiting a Vertex : going on a particular vertex(choose any vertex as starting vertex).
2. Exploration of Vertex : Explploration means if i'm on some particular vertex then visiting all its adjacent vertices is called as Exploration.

ei duita term er upor depend korei taversal kaj kore

### BFS :
- select a vertex as starting vertex(can be choose any vertex)
- we can start from any vertex from the graph

supppose, amra ekhane starting vertex 1 choose korlam now i will start exploring,now find all of the adjacent vertices.uporer graph e 1 er adjacent vertices are 2,4,5(can be visit in any order)

![example of how bfs work](/images/BFS_DFS_2.PNG)

BFS: 1,2,4,5
now i should explore 2(BFS follow queue method)
here adjacent vertices of 2 are : 7,3,6(there are no order to take vertex),here all the vertices are visited there are no vertex left for exploration,this is Breadht First Search.
BFS: 1,2,4,5,7,3,6

![example of how bfs work](/images/BFS_DFS_3.PNG)

### DFS :
in DFS suppose 1 (DFS: 1)hocche starting vertex ekhon 1 ke ekbar explore kore 2(DFS: 1,2) pailam,now ami 1 ke hold korbo and 2 ke explore kora start korbo,2 ke
ekbar explore kore 3(DFS:1,2,3) pailam.

![example of how dfs work](/images/BFS_DFS_4.PNG)

ekhon ami 3 ke explore kora start korbo, so if i start exploring 3 there are nothing connected to 3 so it means 3 is completely explored.3 jehetu exploration complete kore felse shehetu 3 will comeback to 2 and 2 will again start exploration,now 2 explore kore ebar 6 pelo so DFS will be 1,2,3,6. 

![example of how dfs work](/images/BFS_DFS_5.PNG)

now 6 will start exploration but there are nothing to explore so it will comeback to 2 and 2 will start again explore.so now DFS: 1,2,3,6,7

![example of how dfs work](/images/BFS_DFS_6.PNG)

now 7 will start explore but there are nothing to explore so it will goes to 2 and 2 is also explored completely,there are nothing to explore 2 so it will goes to 1 and 1 will explore.so DFS:1,2,3,6,7,4

![example of how dfs work](/images/BFS_DFS_7.PNG)

now it will visit 4 and start exploring 4 but there are nothing to explore so it will comeback to 1 and 1 will start the exploring.so DFS: 1,2,3,6,7,4,5

![example of how dfs work](/images//BFS_DFS_8.PNG)

all the vertices are explore so DFS is complete.

***
in BFS we will visit a vertex and explore the full vertex thin we will go to the next vertex.But in DFS once we starte exploring once we visit a new vertex we will suspend the preious vertex and start exploring the visited vertex (BFS is level order binary tree and DFS is pre-order binary tree)


# BFS and DFS more details : 

### BFS in details :

![BFS](/images/BFS_DFS_9.PNG)

here is a graph and i have take a Queue.initial step is start exploration from anyone of the vertex(we can select any vertext as starting vertex).I have choose 1 as starting vertex so BFS:1, 1 will be in Queue and i will start the graph with 1.this is the inital or first step of BFS

![BFS](/images/BFS_DFS_10.PNG)

now i will start exploring 1,explore korar por 4,2 pailam.so, 4 and 2 BFS er result,Queue  and graph e add hobe and 1 is completely explore so 1 will be out from the queue

![BFS](/images/BFS_DFS_11.PNG)

 now 4 will start explore,after explore for i get 3.so BFS:1,4,2,3 .vertex 3 will insert to the queue.and 4 will be out from the queue

 ![BFS](/images/BFS_DFS_12.PNG)

 2 will start exploring and 2 get 3,5,7,8.here 3 is allready explode so i will make a connection with 3 by (---) and else 3 every vertex will explore.2 will be out from queue

 ![BFS](/images/BFS_DFS_13.PNG)

 now 3 will start exploration with the same proccess.and after completing exploration 3 will be out from queue

 ![BFS](/images/BFS_DFS_14.PNG)

 now 5 will start

 ![BFS](/images/BFS_DFS_15.PNG)

 now 8

 ![BFS](/images/BFS_DFS_16.PNG)

 in 7,10,9 and 6 there are nothing to explore so after exploring them one by one the BFS is-

 ![BFS](/images/BFS_DFS_17.PNG) 

amra jei new graph ta paisi eta ke BFS spanning tree bole and dotted diye jei connection dekhacchi sheta ke cross edges bole

### DFS in details : 

DFS er jonno amader stack nite hobe.stack data structure used in DFS.

![DFS](/images/BFS_DFS_18.PNG)

at first amra jekono ekta vertex choose korbo as initial vertext.

![DFS](/images/BFS_DFS_19.PNG)

ekhon 1 exploration start korbe 1 explore 4 now 1 will suspend and keep in stack for later exploration.

![DFS](/images/BFS_DFS_20.PNG)

now 4 will start exploration and after once exploration 4 get 3 now 4 will suspend and keep in stack for later exploration.

![DFS](/images/BFS_DFS_21.PNG)

now 3 will start exploration after once exploration 3 find 10 now 3 will suspend and keep in stack for later exploration.

![DFS](/images/BFS_DFS_22.PNG)

now 10 will start explore but there are nothing to explore so it will go back to 3 and 3 will start again exploration after once exploring 3 find 9.9 pawar por 3 abar suspend hobe and stack e thakbe future exploration er jonno and 9 will start exploration
![DFS](/images/BFS_DFS_23.PNG)
9 will start exploration but there are nothing to explore so 9 will go back to 3 and 3 will start exploration and after once exploration 9 explore 2 now 2 will start explore.2 ekbar exploration korar por 8 pai so 2 will suspend and keep in stack and 8 will start exploration.

![DFS](/images/BFS_DFS_24.PNG)

now 8 will start exploration after once exploration 8 is explore 7,after explode 7 8 will suspend and keep in stack and 7 will start exploration.

![DFS](/images/BFS_DFS_25.PNG)

now 7 will start exploration,7 explore 5 after exploring 5 7 will suspend and keep in stack.
![DFS](/images/BFS_DFS_26.PNG)

now 5 will start exploration after once exploration 5 explore 6.now 5 will suspend and keep in stack and 6 will start exploring
![DFS](/images/BFS_DFS_27.PNG)

now 6 is start exploration.There are nothin to explore so 6 will go back to 5 and 5 will start exploring
![DFS](/images/BFS_DFS_28a.PNG)

5 will explore and find there are a connection with 2 but 2 is already explode so 5 will start again exploration and explore 8 but 8 is also explode so there will make a connection by dotted with 5,2 and 5,8(back edges).5 is completely explode so it will be out from stack and 7 will start exploring.

![DFS](/images/BFS_DFS_29a.PNG)

7 with start exploration but there are nothing to explore  so 7 will make a back edges connection with 2.7 is completely explode nothing to explore left so 7 will out from the stack
![DFS](/images/BFS_DFS_30.PNG)
now 8 will start exploration but there is nothing to explore so 8 will be out from the stack
![DFS](/images/BFS_DFS_31.PNG)
now 2 will start exploration there are nothing to explore but there will make e back edges between 2 and 1.cause there are no connection between them.and 2 will out from the stack.
![DFS](/images/BFS_DFS_32.PNG)
4 will start exploration but there are nothing to explore so 4 will out from the stack.
![DFS](/images/BFS_DFS_33.PNG)
now 1 will start exploring but there are nothing to explore so 1 will also out from the stack.
![DFS](/images/BFS_DFS_34.PNG)
the tree we find is called DFS spanning tree and dotted edges are called back edges.
![DFS](/images/BFS_DFS_35.PNG)


# Function : 
[Function](https://www.youtube.com/watch?v=X3wH6gaAKpk)
function is set of statement that perform a single task.we can perform repeating task by function.
![function](/images/function/f1.PNG)
ekhane main function er vitor shobe instructions.jokhn ekhane thousand of line code thakbe tokhn eta manage kora onk tough hoye jabe r same calculation difference value diye korte gele abar same code ta lekhte hobe which is not good in programming.evabe code kora ke **Monolithic Programmin** bole.

![function](/images/function/f2.PNG)

shob code gula ke jodi part by part alada kore function banano hoy then main function e call korle shob gulo function run korbe ekhane benefit holo ekhane team work kora jay suppose func1() ekjon korlo func2() ekjon korlo r func3() arek jon korlo tahole khub fast develop kora jay r ekhaner kono function jodi abar use kora lage tahole sei function ke just call korlei hobe abr new kore code lekha lagbe na.ei vabe programming kora ke **Modula Programming** or **Procedural Programming** bole.

![function](/images/function/f3.PNG)

ekhane **int add(int a, int b)** is function declaration or function prototype.and the red mark with carly braces is function defination and blue mark is function call. 


![function](/images/function/f4a.PNG)

inside the main memory all the code are converted to machine code


![function](/images/function/f5.PNG) 

ekhane inside the stack main function er record shuru hobe at first 3 ta variable create holo 

![function](/images/function/f6.PNG)

ekhane main er vitor x and y er value store hoye jay but y te gele function call hoy
![function](/images/function/f7.PNG)

function call howar por function er stack e personal ekta record create hobe ekhabe a,b and c

![function](/images/function/f8.PNG)

then all the execution will happen and value will be stored.

![function](/images/function/f9a.PNG)

function return korar por jekhane function call kora hoyechilo shekhane return data store hoye jabe and function er record stack theke remove hoye jabe. that is how a function work.

# Recursion : 
[🔥 Recursion Full course BY ABDUL BARI](https://www.youtube.com/watch?v=ETiZpSajasI)
Recursion meaning a function calling itself.so,if a function is calling itself then that is called as recursive function.

![recursion ](/images/function/rf1.PNG)

ekhane fun function nijeke abar call kortese so fun is a recursive function.recursion function create korar khetre ekta base condition dite hobe jeita fun call off korbe otherwise it will create infinite fun call.in this image if base condition become false then it will terminate fun call.

## Tracing tree of recursive function : 

![tracing tree of recursive function(8mins)](/images/function/rf2.PNG)
ekhane first e main function call hobe then x=3 store hobe and fun1(x) call hobe. fun1(3) jokhn call hobe tokhn fun1(3) ekta alda record create hobe stack e then code run kora start korbe ekhane n=3 so 3 print korbe and then fun1(3-1) call hobe then abar fun1(2) er jonno stack e record create hobe and task complete kora start kobe.. if(2>0) check korbe true hobe then abar 2 print korbe and fun1(2-1) call korbe. similar way te stack e record create korbe fun1(1) execute kora start kobe if(1>0) true hobe tahole 1 print korbe  then abr o fun1(1-1) call hobe kintu ebar fun1(0) run korar time e if(0>0) failed korbe so fun1(0) theke ber hoye jabe and fun1(1) e jabe **(blue arrow mark)** and execution complete kore ber hoye jabe then fun1(2) evabe ek ek kore shob gular execution complete korbe evabe prottek ta function run kora ke tracing tree of recursive function bole and jei function er excution complete hobe shete sathe sathe stack theke remove hoye jabe.

![recursive function](/images/function/rf3.PNG)

ekhane left r righ side er output er differance er karon holo right side e age print kortechilo and then function call kintu left side a age function call then print so jokhn fun2(3) call hoy tokhn if(3>0) true and call fun2(3-1) then again fun2(2) call abar if(2>0) true evabe fun2(0) te jay then if(0>0) false hoy and fun2(1) e jay and baki code execute kore like ekhane printf("%d",n=1)print hoy evabe 2 and 3 print hoy

![recursive function](/images/function/rf4.PNG)

ekhane 1,2,3 hocche number of room.upore  first instruction is **switch on bulb** and second instruction is **go to next room** so output ashche : 1,2,3(first e 1 no room er bulb on then 2 then 3)
and niche first instruction is **go to next room** and second instruction is **switch on bulb** so ekhane  first e 1 no room e jabe then 2 then 3. 3 e jawar por bulb on korbe then 2 e jabe bulb on korbe then 1 jabe bolb on korbe then ber hoye jabe so output is : 3,2,1

![recursive function](/images/function/rf5.PNG)

ekhane fun(n-1) er upore je shokol instruction thakbe shei gula function call er time e run hobe r jei gula niche thakbe shegula function return er time e run hobe.jei gula calling time e run hobe shegula **Ascending** r jei gula returning er time e run hobe shei gula **Descending**.Recusion hase two phases **Ascending and Descending**

![recursive function(20-30mins)](/images/function/rf6.PNG)

ekhane first e code machine code e convert hobe then main function call hoy. stack e main er jonno record create hobe x=3 store hobe and fun1(3) call hobe then fun1(3) er jonno stack e record create hobe n=3 store hobe then if(3>0) condition check krbe true hobe print korbe and abr fun1(3-1) call hobe so fun1(2) stack e abar record create hobe n=2 store hobe abar if(2>0) true hobe then n=2 print hobe and again fun1(2-1) call hobe fun1(1) er jonno stack e record create hobe n=1 store hobe and if(1>0) check hobe then 1 print korbe abar fun1(1-1) call hobe fun1(0) er jonno stack e record create hobe then if(0>0) false hobe then fun1(0) return korbe and fun1(0) stack theke remove hoye jabe then fun1(1) theke fun1(2) fun1(3) return kore stack theke remove hoye jabe.. recursion function (call=n+1) mani fun1(3) hoy tahole function call hobe 4 bar jemon upore fun1(3) to fun1(0) 4 bar call hoy and stack e add hoy.





