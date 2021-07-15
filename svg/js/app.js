class Game{
    //class properties
    foundCirlces = 0;
    totalCircles = 0;
    searchColor = "#ff6666";
    normalColor = "#1aa3ff";
    gameZone = document.getElementById("gameZone");
    foundBar = new FoundBar();
    
    constructor(){
    //male the circles
        for(var i=0 ; i < 25; i++ ){
            let newCirc = document.createElementNS("http://www.w3.org/2000/svg", "circle" );
            
            //circle style class
            newCirc.classList.add("gameCirc");
            newCirc.setAttribute("cx",Math.random() * 400);
            newCirc.setAttribute("cy",Math.random() * 400);

            //randomly choose what reveal color the circle is
            if(Math.random()< .3 ){
                newCirc.dataset.hiddenColor = this.searchColor;
                this.totalCircles ++;
            }else{
            newCirc.dataset.hiddenColor = this.normalColor;
            }

            //mouse events
            //on mouse over , show  the hidden color in data-hidden color attribute
            newCirc.addEventListener("mouseover", (event)=>{
                event.target.style.fill= event.target.dataset.hiddenColor;
            })

            newCirc.addEventListener("mouseout", (event)=>{
                event.target.style.fill= "#000";
            })

            newCirc.addEventListener("click", (event) =>{
                //if the user clicked on the looking for circle
                if(event.target.dataset.hiddenColor == this.searchColor){
                    event.target.remove();

                    //store how many have been clicked on
                    this.foundCircles ++;

                    //update the found UI
                    this.foundBar.setPercent(this.foundCirlces / this.totalCircles);
                }
            })
            //add the circle to screen 
            this.gameZone.appendChild(newCirc);
        }

    }
}

class FoundBar{
    element = document.getElementById("foundBar")
    maxSize = 130;
    percent = 0;

    setPercent(percent){
        this.percent = percent;
        this.element.setAttribute("width" , this.percent * this.maxSize);
    }
}


let g = new Game();

