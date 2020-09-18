todoMain(); // (3a) MODULE name

// (3b) create function for todoMain()
function todoMain(){
    // define elements (4)
    var myInputElement;
    // define elements (5)
    var ulElement;

    // (28) define another inputBox element
    var myInputElmnt2;
    var addButton;

    getElements(); //(3c)
    addListeners(); //(3d)

    //(3c - Definition)
    function getElements(){
        // (4)
        myInputElement = document.getElementsByTagName("input")[0];    // get user input at index 0 *inspect console if not sure why it is @ [0]
        // console.log(myInputElement);

        // (29) 2nd input box is the second index /or index @ [1]
        myInputElmnt2 = document.getElementsByTagName("input")[1];

        //(32) set up button variable
        addButton = document.getElementById("addBtn");

        // (5)
        ulElement = document.getElementsByTagName("ul")[0];
        // console.log(ulElement);
    }


    //(3d - Definition)
    function addListeners(){
        /** ---------------------   (6)
         * Appends an event listener for events whose type attribute value is type. 
         * The callback argument sets the callback that will be invoked when the
         *  event is dispatched.

                * (Boolean) The options argument sets listener-specific options. 
                    * For compatibility this can be a boolean, in which case
                    *  the method behaves exactly as if the value was 
                    * specified as options's capture.
         */
        /** myInputElement.addEventListener("input", onChange, false); if this is 
        used, it will call the onChange every letter that is typed into the "input" field */ 
        //
        // .. change from "change" to "click" -> myInputElement.addEventListener("change", onChange, false); // (6a) next define the onChange function 
        // (33)
        // addButton.addEventListener("click", onChange, false);
        //
        
        // (35) Create new function called addEntry() - more meaningful than onChange()
        addButton.addEventListener("click", addEntry, false);
    }

    // (6a) -- Define onChange function
    //(8) -> pass the 'event'
    // (35b) change name from onChage() to ---> addEntry()
    function addEntry(event){
        // (20a) add variable to watch flag in your onClick() function
        var flag = true;


        // (8a) event.target will retrieve the 'input' *inspect page with console.log(event) to see 'target' 
        //console.log(event.target); 

        // (7) retrieve the input value

                // var inputValue = myInputElement.value; myInputElement.value, changes to event.target.value 

        // (7a && 8b) 
        // 1st way
        var inputValue = myInputElement.value; // myInputElement.value, could also use -> event.target.value 
        //
        //          -- OR -->
        // (8b)
        // (2nd way)
        //var inputValue = event.target.value;    // cleaner code, as it is pulling data from same event
        // console.log("DEBUG: onChange running...." + inputValue);
        //
        //          -- OR -->
        // (8b) (3rd way) - this refers to target that is event..
        //let inputValue = this.value; // 'this' refers to the parameter being passed 
        //console.log(inputValue);


        /** (9) Add <li></li> elements for when the onChange function is called,
         *  the HTML will populate new HTML <li></li> *list* elements */
        // ulElement.innerHTML += "<li>" + "</li>"; // this adds a BLANK entry for the <li> element
        // ---------> For es5 <---------------
        
        //ulElement.innerHTML += "<li>" + inputValue + "</li>"; // add the inputValue variable to the HTML <li></li> tags
        // ----------> For es6 [ES6, template literal syntax....]<--------------
        
        //ulElement.innerHTML += `<li>${inputValue}</li>`; // WARNING: Vulnerability issue -> jump to step 12
        
        /** NOTE: There is also another javaScript attribute called ->
         * ulElement.innerText  ....
         * This will populate the entire contents that is being set to your <ul> HTML element...
         * e.g. (   <li>egg</li>    ) will populate on screen.
         */


        // (10) --> Reset the input box back to being blank after user hits enter
        myInputElement.value = "";


        // (30) save input elemnt 2 to inputValue2 variable
        var inputValue2 = myInputElmnt2.value;
        myInputElmnt2.value = ""; // clear the input field.




        //  (37)    Table Variable
        var tables = document.getElementById("todo-table");
        //  (38)    Variable to add(create) a new table: ROW element
        var rW_Elemnt = document.createElement("tr");
        //  (38b)   now, append the table row element to your Table variable
        tables.appendChild(rW_Elemnt);

        //  (39)    - Table cells:
        //      checkbox cell
        //      todo cell
        //      category cell
        //      delete cell


        // (39a)
        //      Checkbox cell: Create it
        var checkboxElmnt = document.createElement("input");
        //  (39b) select type of checkbox
        checkboxElmnt.type = "checkbox";
        //  (39c) Table Column (td) Variable: td will the store checkbox 
        var Td_elemn1 = document.createElement("td");

        // (39e)     append the checkbox to our <td> elements
        Td_elemn1.appendChild(checkboxElmnt);

        //  (39f)    append the <td> element to your <tr> elmnt!
        rW_Elemnt.appendChild(Td_elemn1);


        // (40)
        //          todo cell
        //  (40a)      Create a table column
        var Td_elemn2 = document.createElement("td");
        //  (40b)       Set inner text of the column/<td> elmnt to top input box value
        Td_elemn2.innerText = inputValue;
        //  (40c)
        rW_Elemnt.appendChild(Td_elemn2);


                // (41)
        //          Category cell
        //  (41a)      Create a table column
        var Td_elemn3 = document.createElement("td");
        //  (41b)       Set inner text of the column/<td> elmnt from top input box's value
        Td_elemn3.innerText = inputValue2;
        //  (41c)
        rW_Elemnt.appendChild(Td_elemn3);


                        // (42)
        //              Delete cell
        //  (42a)      Create a table column
            //     // () create SPAN element
        //var spanElement = document.createElement("span");
        // (15a) add the material-icon variable to HTML <span>'s InnerText && remove from liElement.innerText
        //spanElement.innerText = "delete";
        // (15c) create class name for spanElement
            // className - Returns the value of element's class content attribute. Can be set to change it.
        //spanElement.className = "material-icons"; // (15d) can remove concatinated <span class='material-icon'></span> now from (15b)
       
       
       
                         // (42)
        //             Delete cell
        //  (42a)       Create a span element
        var spanElemnt = document.createElement("span");
        //  (42b)   Set the span element to the "delete" trash can icon
        spanElemnt.innerText = "delete";
        // (42c)    set the class name of the <span class='material-icons'></span> in the HTML page
        spanElemnt.className = "material-icons";
        // (42d)        create a <td> column element
        var Td_elemn4 = document.createElement("td");
        //  (42e)       append the <span> elemnt "delete"/trash can icon -->
                        // ... to the <td> column elemnt
        Td_elemn4.appendChild(spanElemnt);
        //append the span element to the table
        rW_Elemnt.appendChild(Td_elemn4);


        // (43) Add event listeners to:
        // spanElemnt.addEventListener("click", deleteItem, false);

        // //  (43b)   Define function for deleteItem()
        //     //  Tells the event listener what to do when clicked
        // function deleteItem(){
        //     rW_Elemnt.remove();
        // }




       
       
       
       
       
       
       
        //_____________________________________________________________________
    // (36) Depracated: Updating to new table rows instead of <li> and <ul> elements
    //          ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
                // ----------> JavaScript| List, Span elements. checkboxes, delete buttons,
                                    // Event listening (clicks(), onChange(), dblClick()),
                                    // appending nodes, 
                                    // checking user input/ vulnerabilities
        //
    //     /** (11) Vulnerability.
    //      * 
    //      * WARNING: if someone types HTML or CSS styling into our input box it could be very BAD
    //      * i.e. --> user types: "   <style>body{background:black};</style>  " into your input box
    //                         * Turns page all black!!!!
    //      */

    //      // (12) fix vulnerability issue with typing in HTML/CSS into input box
    //             // instead, just create NEW <li> element
    //     var liElement = document.createElement("li");

    //     // (22a) Create CheckBox
    //     var checkBoxElement = document.createElement("input");
    //     // (22b) specify type of "check box"
    //     checkBoxElement.type = "checkbox";


    //     // (23) append checkBox Elemnt to <li> element
    //     liElement.appendChild(checkBoxElement);

    //     // (14) create a material icon for "remove"
    //     //liElement.innerText = inputValue + "<span class='material-icons'> delete </span>";
    //     // ... (14a) -> change innerText to innerHTML (* See step 14b)
    //     //liElement.innerHTML = inputValue + " <span class='material-icons'> delete </span>";
        
    //     // (14b) innerHTML causes vulernability so we need to make it liElement.innerText
        
        
    //     // (15b) REMOVE the "delete" from innerText <span> ->  
    //     //liElement.innerText = inputValue + " <span class='material-icons'> delete </span>";
    //     // (15d) remove <span class='material-icon'></span> as you will handle this in (15c)
    //     //liElement.innerText = inputValue + " <span class='material-icons'></span>";
        
    //     /* 
    //     (24a) -> change to make checkbox element
    //     liElement.innerText = inputValue;

    //     // (18a) add event listener to liElement for when clicked
    //     liElement.addEventListener("click", onClick, false);
    //     */

    //    // (25) create another span element for input text
    //    var textSpanElem = document.createElement("span");
    //    // (25b) set input value to text span elmnt
    // //    textSpanElem.innerText = inputValue; // change (25b) to (31)
    //    textSpanElem.innerText = inputValue + " - " + inputValue2;
    //    liElement.appendChild(textSpanElem);

    //     // (15) create SPAN element
    //     var spanElement = document.createElement("span");
    //     // (15a) add the material-icon variable to HTML <span>'s InnerText && remove from liElement.innerText
    //     spanElement.innerText = "delete";
    //     // (15c) create class name for spanElement
    //         // className - Returns the value of element's class content attribute. Can be set to change it.
    //     spanElement.className = "material-icons"; // (15d) can remove concatinated <span class='material-icon'></span> now from (15b)


    //      // (13a) add event kistener for double click
    //     //liElement.addEventListener("dblclick", onDblClick, false); // after (15-15e) we can change this to single click..
    //     // (16a) -----> changed (13a) component to only one click with a more meaningful named function to call "deleteItem"
    //     spanElement.addEventListener("click", deleteItem, false);

    //     // (18b)

    //     // (15e) append new span <span> HTML elemnt to our <li> elemnt
    //     liElement.appendChild(spanElement);

    //     // (12a) add inputValue to innerText
    //     //liElement.innerText = inputValue;
    //      // (12b) append the NEW <li> elemnt to your <ul> element
    //     ulElement.appendChild(liElement);
        
    
    
    
    //_____________________________________________________________________
    //      END OF (36) Considered Depracated: Updating app to new table row style instead 
                    //      of <li> and <ul> elements to hold user input
    //          ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
                // ----------> JavaScript| List, Span elements. checkboxes, delete buttons,
                                    // Event listening (clicks(), onChange(), dblClick()),
                                    // appending nodes, 
                                    // checking user input/ vulnerabilities






        





            // (13b) define double click function
        // function onDblClick(){
        //     this.remove();  // "this" refers to the <liElement> that's being double Clicked
        // }




// (36) Deprecated due to no use of li elements here
        // (16b) -----> changed (13a/b) function name to be more meaningful
        function deleteItem(){
            //this.remove(); // will only remove either the <span>s "delete"-icon
            
            // (16c) removes entire <li> elmnt rather than the <span>s - "delete"-icon ||(or) the <li> elmnt
                // the parent node to our "delete"-icon BUTTON is your <li> *list* item..
            //this.parentNode.remove(); // (16c) removes entire <li> elmnt rather than the <span>s - "delete"-icon ||(or) the <li> elmnt
            
            // (17) Closures -> [instead of (16c)]
                // remove the <li> HTML element.
                    // when "delete" icon is clicked, will still call eventListener on 
                    // the spanElement which calls deleteItem() and deletes the
                    // <li> HTML element 
                    // *NOTE* 
                        // if unsure, look at structure in your browsers-Console and 
                        // you will see the <li> item contains the <span> tag that contains
                        // the class for <span class="material-icons">delete</span> - button/icon
            liElement.remove(); // can remove this using javasript idea of "CLOSUREs"
        }

        

        // (18b) Define function for liElements evvent listener "onClick"
        function onClick(){
            // (20b)
            // Set a flag (boolean) to change  your "line-through" back and forth
            if(flag){
                // (19a) add line-through to "check" off your todo-list
                // this refers to the liElement variable
                //this.style.textDecoration = "line-through";
                // (21a) [JS classList APi]
                        // instead of (19b) --> Create a CSS class attribute w/ classList to add a strike.
                        //  use classList to make CSS attribute for .strike
                this.classList.add("strike");
                flag = !flag;
            }else{
                // (19b) set text decoration to "none" if already lined through, when clicked
                //this.style.textDecoration = "none";
                // (21a) [JS classList APi] change (19b) --> now creating a CSS class attribute w/ classList to REMOVE* the strike-through
                this.classList.remove("strike");
                flag = !flag;
            }
            // (19a) add line-through to "check" off your todo-list
            // this refers to the liElement variable
            //this.style.textDecoration = "line-through";
        }
        console.log(inputValue); // prints input to console in browser window
    }
}