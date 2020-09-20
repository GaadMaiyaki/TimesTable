
        'use strict'
        let start, newStart, end = 13, mySign, myAns, output;
        let myIndex = document.getElementById('myVal').selectedIndex;
        const myVal = document.getElementById('myVal');
        const myDisp = document.getElementById('myDisp');
        let notifyBar = document.getElementById('notify');
        
        let checkSign = () =>{
            switch(myVal.selectedIndex){
                case 1:
                    mySign= '*';
                    notifyBar.innerHTML = "<h6>My Multiplication Table 1-12</h6>";
                break;
                case 2:
                    mySign= '+';
                    notifyBar.innerHTML = "<h6>My Addition Table 1-12</h6>";
                break;
                case 3:
                    mySign= '-';
                    notifyBar.innerHTML = "<h6>My Subtraction Table 1-12</h6>"; 
                break;
                case 4:
                    mySign= '/';
                    notifyBar.innerHTML = "<h6>My Division Table 1-12</h6>";
                break;
                //default: myDisp.innerHTML = "Choose an option";
            }
        }
        
        let cal = () =>{
            checkSign();
            theTable.innerHTML = "";
            let theCols;
            for(start=1; start<end; start++){
                //method3
                let theTable = document.getElementById('theTable');
                let theRows = document.createElement('tr');
                for(newStart=1; newStart<end; newStart++){
                    //method3 cont
                    myAns = eval(`${newStart} ${mySign} ${start}`);
                    output = `${newStart} ${mySign} ${start} = ${myAns}`;
                    let div= document.createElement('DIV');
                    div.setAttribute('id', 'div');
                    div.append(output);
                    theCols = document.createElement('td');
                    let outcome = document.createTextNode(output);
                    theCols.append(div);
                    theRows.append(theCols);
                    theTable.append(theRows);
                }
            

            }
           

        }
        let footer=()=>{
            let tableParent = document.getElementById('tableParent');
            let footer = document.createElement('FOOTER');
            footer.setAttribute('id', 'footer')
            let footerText = document.createTextNode('Developed by GaadMaiyaki 2020');
            footer.append(footerText);
            myDisp.append(footer);
        }
        footer();
        myVal.addEventListener('change', cal);
   