// const { addListener } = require("process");

todoMain(); // (3a) MODULE name

// (3b) create function for todoMain()
function todoMain(){
    // define elements (4)
    var myInputElement;
    // define elements (5)
    var ulElement;

    getElements(); //(3c)
    addListeners(); //(3d)

    //(3c - Definition)
    function getElements(){
        // (4)
        myInputElement = document.getElementsByTagName("input")[0];    // get user input at index 0 *inspect console if not sure why it is @ [0]
        // console.log(myInputElement);

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
        //
        myInputElement.addEventListener("change", onChange, false); // (6a) next define the onChange function 
    }

    // (6a) -- Define onChange function
    //(8) -> pass the 'event'
    function onChange(event){
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

        /** (11) Vulnerability.
         * 
         * WARNING: if someone types HTML or CSS styling into our input box it could be very BAD
         * i.e. --> user types: "   <style>body{background:black};</style>  " into your input box
                            * Turns page all black!!!!
         */

         // (12) fix vulnerability issue with typing in HTML/CSS into input box
                // instead, just create NEW <li> element
         var liElement = document.createElement("li");
         // (12a)
         liElement.innerText = inputValue;
         // (12b) append the NEW <li> elemnt to your <ul> element
         ulElement.appendChild(liElement);

        console.log(inputValue); // prints input to console in browser window
    }
}