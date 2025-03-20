AFRAME.registerComponent("page-controls",{
    schema:{
        pages:{
            type:"array",default:[
                {page:"1",color:"black"},
                {page:"2",color:"black"},
                {page:"3",color:"black"},
                {page:"4",color:"black"},
                {page:"5",color:"black"},

            ]
        },
        pageIndex:{type:"int",default:"0"}
    },
    init:function(){
        
        var pageEl=this.pageEl=document.querySelector("[layer]");
        pageEl.object3D.position.set(0,2,-2.5);
        var pageIndex=this.data.pageIndex;
        window.addEventListener("keydown",(e)=>{

            if (e.key==="ArrowRight" && pageIndex<this.data.pages.length-1){
                pageIndex=pageIndex+1;
                this.turnPage(pageIndex);
            }


            if (e.key==="ArrowLeft" && pageIndex>0){
                pageIndex=pageIndex-1;
                this.turnPage(pageIndex);
            }

        });

    },
    turnPage:function(pageIndex){
        var pages=this.data.pages;
        var pageID=pages[pageIndex].page;
        var color=pages[pageIndex].color;
        this.pageEl.setAttribute("layer","src","#"+pageID);
        this.el.sceneEl.setAttribute("background","color",color)
    }
});