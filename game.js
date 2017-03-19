$(function(){

   var i,j,t,I,J,T,s=0,x,a,jj,S=0,u,v,UK=2,DK=2,LK=2,RK=2,xx,z=0,SL=0,zr=0,SR=0,zl=0,D=0,SS=0,II=125,III=125;
   var CA=-625,CB=-875,CC=-1125,CAA=-5,CBB=-5,CCC=-5,CAP=60,CBP=240,CCP=540,im=7,im2=8,im3=9;
   var I=500; J=330;//initial postion
    var add='';
    
var N = new Array(150);
	for ( i = 0; i < 150; i++) {
	  N[i] = new Array(72);
	}
    
var M = new Array(150);   
    
var G1 = new Array(150);
	for ( i = 0; i < 150; i++) {
	  G1[i] = new Array(15);
	}
     
var G2 = new Array(150);
	for ( i = 0; i < 150; i++) {
	  G2[i] = new Array(35);
	}
         
    
    add='<table class="tablet">';
    
    for(i=0;i<150;i++)
    {
        add=add+'<tr>';
        for(j=0;j<72;j++){
            t=i*72+j;
            add=add+'<td id=i'+t+' ></td>';
        }
            
        add=add+'</tr>';    
    }
    
    add=add+'</table>';
    
    $('#road').append(add);   // main road

    add='<table class="tableg1">';
    
    for(i=0;i<150;i++)
    {
        add=add+'<tr>';
        for(j=0;j<15;j++){
            t=i*15+j;
            add=add+'<td id=igo'+t+' ></td>';
        }
            
        add=add+'</tr>';    
    }
    
    add=add+'</table>';
    
    $('#green1').append(add);    // greenary 1
    
    
    for(i=0;i<150;i++){
        for(j=0;j<8;j++)
        G1[i][j]=4;    
        if(i%6<3){
        G1[i][10]=0;
        G1[i][11]=1;
        G1[i][12]=0;    
        G1[i][8]=3;
        G1[i][9]=3;
        G1[i][13]=2;
        G1[i][14]=2;    
        }
        if(i%6>2){
        G1[i][10]=1;
        G1[i][11]=0;
        G1[i][12]=1;    
        G1[i][8]=2;
        G1[i][9]=2;
        G1[i][13]=3;
        G1[i][14]=3;    
        }
    }
    
     i=123;
       G1[i][0]=1;
        G1[i][1]=0;
        G1[i][2]=1;    
        G1[i][3]=0;
        G1[i][4]=1;
        G1[i][5]=0;
        G1[i][6]=1;
        G1[i][7]=0;
    
    i=124;
       G1[i][0]=0;
        G1[i][1]=1;
        G1[i][2]=0;    
        G1[i][3]=1;
        G1[i][4]=0;
        G1[i][5]=1;
        G1[i][6]=0;
        G1[i][7]=1;
    
        i=0;
       G1[i][0]=1;
        G1[i][1]=0;
        G1[i][2]=1;    
        G1[i][3]=0;
        G1[i][4]=1;
        G1[i][5]=0;
        G1[i][6]=1;
        G1[i][7]=0;
    
    i=1;
       G1[i][0]=0;
        G1[i][1]=1;
        G1[i][2]=0;    
        G1[i][3]=1;
        G1[i][4]=0;
        G1[i][5]=1;
        G1[i][6]=0;
        G1[i][7]=1;
    
    i=2;
       G1[i][0]=1;
        G1[i][1]=0;
        G1[i][2]=1;    
        G1[i][3]=0;
        G1[i][4]=1;
        G1[i][5]=0;
        G1[i][6]=1;
        G1[i][7]=0;
    
    for(i=0;i<150;i++)
        for(j=0;j<15;j++){
            t=i*15+j;
            if(G1[i][j]==0)
            $('#igo'+t).attr('class','white');
            else if(G1[i][j]==1)
            $('#igo'+t).attr('class','black');
            else if(G1[i][j]==2)
            $('#igo'+t).attr('class','green');
            else if(G1[i][j]==3)
            $('#igo'+t).attr('class','tree1');
            else if(G1[i][j]==4)
            $('#igo'+t).attr('class','grey');
        }                                         //road side1
    
    for(i=125;i<150;i++)
        for(j=1;j<7;j++){
            t=i*15+j;
            $('#igo'+t).remove();
        }
     
    t=125*15;
     a=t+1;
    
    $('#igo'+t).after('<td id="igo'+a+'"  rowspan="25" colspan="6" ></td>');
    
    $('#igo'+a).css({
        "background-color":"grey",
        "background-image":"url('car-clipart-top-view-clipart-nioubiteul-7634%20(6).png')"
       });
        
        add='<table class="tableg2">';
    
    for(i=0;i<150;i++)
    {
        add=add+'<tr>';
        for(j=0;j<35;j++){
            t=i*35+j;
            add=add+'<td id=ig'+t+' ></td>';
        }
            
        add=add+'</tr>';    
    }
    
    add=add+'</table>';
    
    $('#green2').append(add);    // greenary 2
    
    
    for(i=0;i<150;i++){
        for(j=0;j<72;j++)
     if((i>=0 && i<25 ) || (i>=50 && i<75 ) || (i>=100 && i<125 ))
                M[i]=1;
            else if((i>=25 && i<50 ) || (i>=75 && i<100 ) || (i>=125 && i<150 ))
                M[i]=0;
    }
        
    for(i=0;i<150;i++){
        for(j=0;j<10;j++)
            G2[i][j]=0;
        for(j=10;j<12;j++)
            G2[i][j]=1;
        for(j=12;j<23;j++)
            G2[i][j]=2;
        for(j=23;j<25;j++)
            G2[i][j]=1;
        for(j=25;j<35;j++)
            G2[i][j]=0;
        if(i%6<3){   
        G2[i][3]=3;
        G2[i][4]=3;
        G2[i][27]=3;
        G2[i][28]=3;    
        }
        }
    
    
    G2[30][15]=4;
    G2[31][15]=4;
    G2[32][15]=4;
    G2[33][15]=4;
    G2[34][15]=4;
    G2[35][15]=5;
    G2[36][15]=5;
    G2[37][15]=4;
    G2[38][15]=4;
    G2[39][15]=4;
    G2[40][15]=4;
    G2[30][16]=4;
    G2[31][16]=4;
    G2[32][16]=4;
    G2[33][16]=4;
    G2[34][16]=4;
    G2[35][16]=5;
    G2[36][16]=5;
    G2[37][16]=4;
    G2[38][16]=4;
    G2[39][16]=4;
    G2[40][16]=4;
    G2[30][17]=4;
    G2[31][17]=4;
    G2[32][17]=4;
    G2[33][17]=4;
    G2[34][17]=4;
    G2[35][17]=5;
    G2[36][17]=5;
    G2[37][17]=4;
    G2[38][17]=4;
    G2[39][17]=4;
    G2[40][17]=4;  //boat1
    
    
    G2[105][15]=4;
    G2[106][15]=4;
    G2[107][15]=4;
    G2[108][15]=4;
    G2[109][15]=4;
    G2[110][15]=5;
    G2[111][15]=5;
    G2[112][15]=4;
    G2[113][15]=4;
    G2[114][15]=4;
    G2[115][15]=4;
    G2[105][16]=4;
    G2[106][16]=4;
    G2[107][16]=4;
    G2[108][16]=4;
    G2[109][16]=4;
    G2[110][16]=5;
    G2[111][16]=5;
    G2[112][16]=4;
    G2[113][16]=4;
    G2[114][16]=4;
    G2[115][16]=4;
    G2[105][17]=4;
    G2[106][17]=4;
    G2[107][17]=4;
    G2[108][17]=4;
    G2[109][17]=4;
    G2[110][17]=5;
    G2[111][17]=5;
    G2[112][17]=4;
    G2[115][17]=4;
    G2[113][17]=4;
    G2[114][17]=4;  //boat2
    
    
    
     for(i=0;i<150;i++)
        for(j=0;j<35;j++){
            t=i*35+j;
            if(G2[i][j]==0)
            $('#ig'+t).attr('class','green');
            else if(G2[i][j]==1)
            $('#ig'+t).attr('class','sand');
            else if(G2[i][j]==2)
            $('#ig'+t).attr('class','blue');
            else if(G2[i][j]==3) 
            $('#ig'+t).attr('class','tree');
            else if(G2[i][j]==4)
            $('#ig'+t).attr('class','boat');
             else if(G2[i][j]==5)
            $('#ig'+t).attr('class','boat1');
        }
    
    
        for(i=0;i<150;i++){
        for(j=0;j<72;j++)
            N[i][j]=0; // 0= grey
            
            N[i][2]=1;      //1= white
            N[i][3]=1;
            N[i][68]=1;
            N[i][69]=1;
            N[i][35]=M[i];
            N[i][36]=M[i];
            
    }
    
   
    for(i=0;i<25;i++)
     for(j=0;j<6;j++){
         N[I/5+i][J/10+j]=2;
     }
    
    for(i=0;i<150;i++)
        for(j=0;j<72;j++){
            t=i*72+j;
            if(N[i][j]==0)
            $('#i'+t).attr('class','grey');
            if(N[i][j]==1)
            $('#i'+t).attr('class','white');
        }
    
  for(i=100;i<125;i++)
        for(j=0;j<72;j++){
         t=i*72+j;   
    if(N[i][j]==2){
            $('#i'+t).remove();
            //console.log('t = ',t);
            }
        }
            
    t=I/5*72+J/10-1; 

     a=t+1;
    //console.log('t = ',t,' a = ',a);
    
    $('#i'+t).after('<td id="i'+a+'"  rowspan="25" colspan="6" ></td>');
    
    $('#i'+a).css({
        "background-color":"grey",
        "background-image":"url('car-clipart-top-view-clipart-nioubiteul-7634%20(6).png')"
       });
    
    
    
    $(document).on('keypress',function(event){   
     x = event.which || event.keyCode;
        
    if(x==37 || x==39){
        
        if(x==37){
            //console.log('Left');
                LK=1;
            }  
            
            if(x==39){
                //console.log('right');
                RK=1;
            }        
                 
        
        }
        
        if(x==38 || x==40){
          
            if(x==38){
                UK=1;
                   // console.log('UK = ',UK);
            }  
            
            if(x==40){
                DK=1;
            }        
                 }
    
    
    });
        

    function lrmotion(){
           
        if(RK==1){
            SL=0;
            SR++;
            if(SR>3)
                SR=3;
        }
        if(LK==1){
            SR=0;
            SL++;
            if(SL>3)
                SL=3;
        }
        
        if(SL!=0 || SR!=0){
        
            jj=J;
        
         // console.log(' SL = ',SL,' SR = ',SR,' zl = ',zl,' zr = ',zr,' RK = ',RK,' LK = ',LK); 
            if(LK==1)
            J=J-20*SL;
            if(RK==1)
            J=J+20*SR;
            
                if(J<=30)
                 J=30;
            
                if(J>=630)
                   J=630;
        
         t=I/5*72+jj/10-1; 

     a=t+1;
     
     $('#i'+a).remove();
        
         for(i=100;i<125;i++){
              add='';         
        for(j=jj/10;j<jj/10+6;j++){
         t=i*72+j;   
        add=add+'<td id=i'+t+' ></td>';
        }
           t=I/5*72+jj/10-1+(i-100)*72;     
        $('#i'+t).after(add);     
         }
    

        for(i=100;i<125;i++){
        for(j=jj/10;j<jj/10+6;j++)
            N[i][j]=0; // 0= grey

            N[i][2]=1;      //1= white
            N[i][3]=1;
            N[i][68]=1;
            N[i][69]=1;   
            N[i][35]=M[i];
            N[i][36]=M[i];
    }
        
    for(i=100;i<125;i++)
        for(j=jj/10;j<jj/10+6;j++){
            t=i*72+j;
            
            if(N[i][j]==0)
            $('#i'+t).attr('class','grey');
            if(N[i][j]==1)
            $('#i'+t).attr('class','white');
        }
    
        for(i=0;i<25;i++)
     for(j=0;j<6;j++)
         N[I/5+i][J/10+j]=2;
    
  for(i=100;i<125;i++)
        for(j=J/10;j<J/10+6;j++){
         t=i*72+j;   
    if(N[i][j]==2){
            $('#i'+t).remove();
            }
        }
            
    t=I/5*72+J/10-1; 

     a=t+1;
    $('#i'+t).after('<td id="i'+a+'"  rowspan="25" colspan="6" ></td>');
    
    $('#i'+a).css({
        "background-color":"grey",
        "background-image":"url('car-clipart-top-view-clipart-nioubiteul-7634%20(6).png')"
       });

        }
    
    if(zr>=2){
        zr=0;
        SR--;
        if(SR<0)
        SR=0;
        }
        zr++;
        
        if(zl>=2){
        zl=0;
        SL--;
        if(SL<0)
        SL=0;
        }
        zl++;
        
     motion();   
        
    }//lrmotion
    
    
function move(){

        for(i=0;i<150;i++){
        for(j=0;j<72;j++)
            N[i][j]=0; // 0= grey

            N[i][2]=1;      //1= white
            N[i][3]=1;
            N[i][68]=1;
            N[i][69]=1;   
            N[i][35]=M[i];
            N[i][36]=M[i];
    }
        
    for(i=0;i<150;i++)
        for(j=0;j<72;j++){
            t=i*72+j;
            if(N[i][j]==0)
            $('#i'+t).attr('class','grey');
            if(N[i][j]==1)
            $('#i'+t).attr('class','white');
        } 
} //move
    
    
var tim = setInterval(lrmotion,250);    
    
function motion(){
    
    if(UK==1){
        S++;
        if(S>10)
            S=10;       
                }
    
      if(DK==1){
        S--;
        if(S<0)
            S=0;
            }    
    
    moveboat();
    
    car1();
    car2();
    car3();
    
    check();
    
    if(S!=0){
                
        var queue = new Queue();
        var queue1 = new Queue();
        for(u=0;u<150;u++){
            if(u<150-S){
                if(N[u][35]==2 && (N[u-25][35]==1 || N[u+25][35]==1 ))
                queue.enqueue(0);
                else if(N[u][35]==2 && (N[u-25][35]==0 || N[u+25][35]==0 ))
                queue.enqueue(1); 
                else 
                 queue.enqueue(N[u][35]);   
            }
            else{
               if(N[u][35]==2 && (N[u-25][35]==1 || N[u+25][35]==1 ))
                queue1.enqueue(0);
                else if(N[u][35]==2 && (N[u-25][35]==0 || N[u+25][35]==0 ))
                queue1.enqueue(1); 
                else 
                 queue1.enqueue(N[u][35]); 
                
            }
                
        }
        
        D=D+S;
        smallcar();
        
        for(u=S;u<150;u++)
        M[u]=queue.dequeue();
        
        for(u=0;u<S;u++)
        M[u]=queue1.dequeue();
        
        movegreen();
        
        if(z>=2){
            z=0;
            S--;
            if(S<0)
                S=0;
        }
        z++;
        
        move();
    }
        
 UK=0;
 DK=0;
 LK=0;
 RK=0;   
  
    
    
}
    
function movegreen(){
    
   var queue = new Queue();
    var queue1 = new Queue();
    
    for(i=0;i<150-S;i++)
        queue.enqueue(G2[i][3]);
        
    for(i=150-S-1;i<150;i++)
        queue1.enqueue(G2[i][3]);
    
    for(i=0;i<S;i++){
     G2[i][3]=queue1.dequeue();
    G2[i][4]=G2[i][3];  
    G2[i][27]=G2[i][3];
    G2[i][28]=G2[i][3];    
    }
    
    for(i=S;i<150;i++){
     G2[i][3]=queue.dequeue();
    G2[i][4]=G2[i][3];  
    G2[i][27]=G2[i][3];
    G2[i][28]=G2[i][3];    
    }
    
    for(i=0;i<150;i++)
        for(j=0;j<35;j++){
            t=i*35+j;
            if(G2[i][j]==0)
            $('#ig'+t).attr('class','green');
            else if(G2[i][j]==3)
            $('#ig'+t).attr('class','tree');
        }
    
    
}    
    
function moveboat(){
    
    SS=1;
    if(S>0)
    SS=S;    
    
    var queue = new Queue();
    var queue1 = new Queue();
    
    for(i=0;i<150-SS;i++)
        queue.enqueue(G2[i][15]);
        
    for(i=150-SS-1;i<150;i++)
        queue1.enqueue(G2[i][15]);
    
    for(i=0;i<SS;i++){
     G2[i][15]=queue1.dequeue();
    G2[i][16]=G2[i][15];  
    G2[i][17]=G2[i][15];   
    }
    
    for(i=SS;i<150;i++){
     G2[i][15]=queue.dequeue();
    G2[i][16]=G2[i][15];  
    G2[i][17]=G2[i][15];
    }
    
    for(i=0;i<150;i++)
        for(j=0;j<35;j++){
            t=i*35+j;
            if(G2[i][j]==2)
            $('#ig'+t).attr('class','blue');
            else if(G2[i][j]==4)
            $('#ig'+t).attr('class','boat');
             else if(G2[i][j]==5)
            $('#ig'+t).attr('class','boat1');
        }
    moveroad();
    
}    
    
function moveroad(){
    
    var queue = new Queue();
    var queue1 = new Queue();
    
    for(i=0;i<150-S;i++)
        queue.enqueue(G1[i][11]);
        
    for(i=150-S-1;i<150;i++)
        queue1.enqueue(G1[i][11]);
    
    for(i=0;i<S;i++){
     G1[i][11]=queue1.dequeue();
    if(G1[i][11]==1){
        G1[i][10]=0;
        G1[i][12]=0;    
        G1[i][8]=3;
        G1[i][9]=3;
        G1[i][13]=2;
        G1[i][14]=2; 
    }
        else if(G1[i][11]==0){
        G1[i][10]=1;
        G1[i][12]=1;    
        G1[i][8]=2;
        G1[i][9]=2;
        G1[i][13]=3;
        G1[i][14]=3; 
        }
    }
    
    for(i=S;i<150;i++){
        G1[i][11]=queue.dequeue();
    if(G1[i][11]==1){
        G1[i][10]=0;
        G1[i][12]=0;    
        G1[i][8]=3;
        G1[i][9]=3;
        G1[i][13]=2;
        G1[i][14]=2; 
    }
        else if(G1[i][11]==0){
        G1[i][10]=1;
        G1[i][12]=1;    
        G1[i][8]=2;
        G1[i][9]=2;
        G1[i][13]=3;
        G1[i][14]=3; 
        }
    }
    
    
    for(i=0;i<150;i++)
        for(j=8;j<15;j++){
            t=i*15+j;
            if(G1[i][j]==0)
            $('#igo'+t).attr('class','white');
            else if(G1[i][j]==1)
            $('#igo'+t).attr('class','black');
            else if(G1[i][j]==2)
            $('#igo'+t).attr('class','green');
            else if(G1[i][j]==3)
            $('#igo'+t).attr('class','tree1');
        }                                         
    
}
    
function smallcar(){
    
    II=125-(D/100 | 0);
    //console.log('II = ',II,' III = ',III,' D = ',D);
    if(III!=II){
    
    t=III*15;
     a=t+1;
    $('#igo'+a).remove();
      
    for(i=III;i<III+25;i++){
              add='';         
        for(j=1;j<7;j++){
         t=i*15+j;   
        add=add+'<td id=igo'+t+' ></td>';
            G1[i][j]=4;
        }
           t=i*15;     
        $('#igo'+t).after(add);
         } 
        
        for(i=III;i<III+25;i++)
        for(j=1;j<7;j++){
        t=i*15+j;        
        $('#igo'+t).attr('class','grey');
            }
        
        if(II<107){
            i=123;
       G1[i][0]=1;
        G1[i][1]=0;
        G1[i][2]=1;    
        G1[i][3]=0;
        G1[i][4]=1;
        G1[i][5]=0;
        G1[i][6]=1;
        G1[i][7]=0;
    
    i=124;
       G1[i][0]=0;
        G1[i][1]=1;
        G1[i][2]=0;    
        G1[i][3]=1;
        G1[i][4]=0;
        G1[i][5]=1;
        G1[i][6]=0;
        G1[i][7]=1;
        
        for(i=123;i<125;i++)
        for(j=0;j<15;j++){
            t=i*15+j;
            if(G1[i][j]==0)
            $('#igo'+t).attr('class','white');
            else if(G1[i][j]==1)
            $('#igo'+t).attr('class','black');
        }
            
        }
        
        
        for(i=II;i<II+25;i++)
        for(j=1;j<7;j++){
            t=i*15+j;
            $('#igo'+t).remove();
        }
     
    t=II*15;
     a=t+1;
    
    $('#igo'+t).after('<td id="igo'+a+'"  rowspan="25" colspan="6" ></td>');
    
    $('#igo'+a).css({
        "background-color":"grey",
        "background-image":"url('car-clipart-top-view-clipart-nioubiteul-7634%20(6).png')"
       });
        
        III=II;
    }
    
    }
    
   function car1(){
        
        if(S!=0){
            if(S<5)
            CA=CA+20;
            else
            CA=CA+30;    
        }
        else
            CA=CA+10;
       
       //console.log(' CA = ',CA);
       if(CA>=625)
       CA=625;
           
        if(CA>=0 && CA<=625){
       // console.log(' CA = ',CA,' CAA = ',CAA);
            
        if(CAA>0){
            
        t=CAA/5*72+CAP/10-1; 
        a=t+1;
     
     $('#i'+a).remove();
        
         for(i=CAA/5;i<(CAA+125)/5;i++){
              add='';         
        for(j=CAP/10;j<(CAP/10)+6;j++){
         t=i*72+j;   
        add=add+'<td id=i'+t+' ></td>';
        }
           t=i*72+(CAP/10)-1;     
        $('#i'+t).after(add);     
         }
            
        for(i=CAA/5;i<(CAA+125)/5;i++)
        for(j=CAP/10;j<(CAP/10)+6;j++){
            t=i*72+j;
            if(N[i][j]==0)
            $('#i'+t).attr('class','grey');
            if(N[i][j]==1)
            $('#i'+t).attr('class','white');
        }
                
        if(CA==625){
            CA=-125;
            CAP=((Math.random()*11)|0)*60+40;
            if(CAP<170)
                im=6;
            else if(CAP<290)
                im=7;
            else if(CAP<410)
                im=8;
            else if(CAP<530)
                im=9;
            else if(CAP<650)
                im=10;
           // console.log('CAP = ',CAP);
        }    
            
        }
        
        for(i=CA/5;i<(CA+125)/5;i++)
        for(j=CAP/10;j<(CAP/10)+6;j++){
         t=i*72+j;
            $('#i'+t).remove();
        }
            
    t=CA/5*72+CAP/10-1; 

     a=t+1;
    $('#i'+t).after('<td id="i'+a+'"  rowspan="25" colspan="6" ></td>');
    
    if(im==7)        
    $('#i'+a).css({
        "background-color":"grey",
        "background-image":"url('img7.png')"
       }); 
    else if(im==8)        
    $('#i'+a).css({
        "background-color":"grey",
        "background-image":"url('img8.png')"
       });
     else if(im==9)        
    $('#i'+a).css({
        "background-color":"grey",
        "background-image":"url('img9.png')"
       });       
    else if(im==10)        
    $('#i'+a).css({
        "background-color":"grey",
        "background-image":"url('img10.png')"
       });
    else if(im==6)        
    $('#i'+a).css({
        "background-color":"grey",
        "background-image":"url('img6.png')"
       });
            
        CAA=CA;    
            
        }
        
    }

 function car2(){
        
        if(S!=0){
            if(S<5)
            CB=CB+20;
            else
            CB=CB+30;    
        }
        else
            CB=CB+10;
       
       //console.log(' CA = ',CA);
       if(CB>=625)
       CB=625;
           
        if(CB>=0 && CB<=625){
       // console.log(' CA = ',CA,' CAA = ',CAA);
            
        if(CBB>0){
            
        t=CBB/5*72+CBP/10-1; 
        a=t+1;
     
     $('#i'+a).remove();
        
         for(i=CBB/5;i<(CBB+125)/5;i++){
              add='';         
        for(j=CBP/10;j<(CBP/10)+6;j++){
         t=i*72+j;   
        add=add+'<td id=i'+t+' ></td>';
        }
           t=i*72+(CBP/10)-1;     
        $('#i'+t).after(add);     
         }
            
        for(i=CBB/5;i<(CBB+125)/5;i++)
        for(j=CBP/10;j<(CBP/10)+6;j++){
            t=i*72+j;
            if(N[i][j]==0)
            $('#i'+t).attr('class','grey');
            if(N[i][j]==1)
            $('#i'+t).attr('class','white');
        }
                
        if(CB==625){
            CB=-125;
            CBP=((Math.random()*11)|0)*60+40;
            if(CBP<170)
                im2=10;
            else if(CBP<290)
                im2=9;
            else if(CBP<410)
                im2=6;
            else if(CBP<530)
                im2=7;
            else if(CBP<650)
                im2=8;
           // console.log('CAP = ',CAP);
        }    
            
        }
        
        for(i=CB/5;i<(CB+125)/5;i++)
        for(j=CBP/10;j<(CBP/10)+6;j++){
         t=i*72+j;
            $('#i'+t).remove();
        }
            
    t=CB/5*72+CBP/10-1; 

     a=t+1;
    $('#i'+t).after('<td id="i'+a+'"  rowspan="25" colspan="6" ></td>');
    
    if(im2==7)        
    $('#i'+a).css({
        "background-color":"grey",
        "background-image":"url('img7.png')"
       }); 
    else if(im2==8)        
    $('#i'+a).css({
        "background-color":"grey",
        "background-image":"url('img8.png')"
       });
     else if(im2==9)        
    $('#i'+a).css({
        "background-color":"grey",
        "background-image":"url('img9.png')"
       });       
    else if(im2==10)        
    $('#i'+a).css({
        "background-color":"grey",
        "background-image":"url('img10.png')"
       });
    else if(im2==6)        
    $('#i'+a).css({
        "background-color":"grey",
        "background-image":"url('img6.png')"
       });
            
        CBB=CB;    
            
        }
        
    }

     function car3(){
        
        if(S!=0){
            if(S<5)
            CC=CC+20;
            else
            CC=CC+30;    
        }
        else
            CC=CC+10;
       
       //console.log(' CA = ',CA);
       if(CC>=625)
       CC=625;
           
        if(CC>=0 && CC<=625){
       // console.log(' CA = ',CA,' CAA = ',CAA);
            
        if(CCC>0){
            
        t=CCC/5*72+CCP/10-1; 
        a=t+1;
     
     $('#i'+a).remove();
        
         for(i=CCC/5;i<(CCC+125)/5;i++){
              add='';         
        for(j=CCP/10;j<(CCP/10)+6;j++){
         t=i*72+j;   
        add=add+'<td id=i'+t+' ></td>';
        }
           t=i*72+(CCP/10)-1;     
        $('#i'+t).after(add);     
         }
            
        for(i=CCC/5;i<(CCC+125)/5;i++)
        for(j=CCP/10;j<(CCP/10)+6;j++){
            t=i*72+j;
            if(N[i][j]==0)
            $('#i'+t).attr('class','grey');
            if(N[i][j]==1)
            $('#i'+t).attr('class','white');
        }
                
        if(CC==625){
            CC=-125;
            CCP=((Math.random()*11)|0)*60+40;
            if(CCP<170)
                im3=8;
            else if(CCP<290)
                im3=10;
            else if(CCP<410)
                im3=9;
            else if(CCP<530)
                im3=7;
            else if(CCP<650)
                im3=6;
           // console.log('CAP = ',CAP);
        }    
            
        }
        
        for(i=CC/5;i<(CC+125)/5;i++)
        for(j=CCP/10;j<(CCP/10)+6;j++){
         t=i*72+j;
            $('#i'+t).remove();
        }
            
    t=CC/5*72+CCP/10-1; 

     a=t+1;
    $('#i'+t).after('<td id="i'+a+'"  rowspan="25" colspan="6" ></td>');
    
    if(im3==7)        
    $('#i'+a).css({
        "background-color":"grey",
        "background-image":"url('img7.png')"
       }); 
    else if(im3==8)        
    $('#i'+a).css({
        "background-color":"grey",
        "background-image":"url('img8.png')"
       });
     else if(im3==9)        
    $('#i'+a).css({
        "background-color":"grey",
        "background-image":"url('img9.png')"
       });       
    else if(im3==10)        
    $('#i'+a).css({
        "background-color":"grey",
        "background-image":"url('img10.png')"
       });
    else if(im3==6)        
    $('#i'+a).css({
        "background-color":"grey",
        "background-image":"url('img6.png')"
       });
            
        CCC=CC;    
            
        }
        
    }
    
    function check(){
        if((I>CA && I<CA+125 && CAP>J && CAP<J+60) || (I>CA && I<CA+125 && CAP<J && CAP+60>J) || (I<CA && I+125>CA && CAP>J && CAP<J+60) || (I<CA && I+125>CA && CAP<J && CAP+60>J) )
            $('table').hide();
    }

    
});
