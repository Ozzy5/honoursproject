    //---Filter Fundraise (Start)---//
    filterSelection("all")
    function filterSelection(c) {
        var x, i;
        x = document.getElementsByClassName("column");
        if (c == "all") c = "";
        for (i = 0; i < x.length; i++) {
            w3RemoveClass(x[i], "show");
            if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
        }
    }

    function w3AddClass(element, name) {
        var i, arr1, arr2;
        arr1 = element.className.split(" ");
        arr2 = name.split(" ");
        for (i = 0; i < arr2.length; i++) {
            if (arr1.indexOf(arr2[i]) == -1) {
                element.className += " " + arr2[i];
            }
        }
    }

    function w3RemoveClass(element, name) {
        var i, arr1, arr2;
        arr1 = element.className.split(" ");
        arr2 = name.split(" ");
        for (i = 0; i < arr2.length; i++) {
            while (arr1.indexOf(arr2[i]) > -1) {
                arr1.splice(arr1.indexOf(arr2[i]), 1);
            }
        }
        element.className = arr1.join(" ");
    }

    var btnContainer = document.getElementById("myBtnFundContainer");
    var btns = btnContainer.getElementsByClassName("btnFund");
    for (var i = 0; i < btns.length; i++) {
        btns[i].addEventListener("click", function(){
            var current = document.getElementsByClassName("active");
            current[0].className = current[0].className.replace(" active", "");
            this.className += " active";
        });
    }
    //---Filter Fundraise (End)---//

    //---Filter Dropdown NavBar (Start)---//
    function myFunctionMen(){
        var x = document.getElementById("drpdwnMen-content");
        if (x.style.display === "block") {
            x.style.display = "none";
        }   else{
            x.style.display = "block";
        }
    }
    function myFunctionWomen(){
        var x = document.getElementById("drpdwnWomen-content");
        if (x.style.display === "block") {
            x.style.display = "none";
        }   else{
            x.style.display = "block";
        }
    }
    function myFunctionUnisex(){
        var x = document.getElementById("drpdwnUnisex-content");
        if (x.style.display === "block") {
            x.style.display = "none";
        }   else{
            x.style.display = "block";
        }
    }
    function myFunctionFurn(){
        var x = document.getElementById("drpdwnFurn-content");
        if (x.style.display === "block") {
            x.style.display = "none";
        }   else{
            x.style.display = "block";
        }
    }
    function myFunctionEnter(){
        var x = document.getElementById("drpdwnEnter-content");
        if (x.style.display === "block") {
            x.style.display = "none";
        }   else{
            x.style.display = "block";
        }
    }
    function myFunctionOther(){
        var x = document.getElementById("drpdwnOther-content");
        if (x.style.display === "block") {
            x.style.display = "none";
        }   else{
            x.style.display = "block";
        }
    }
    //---Filter Dropdown NavBar (END)---//

    //---Filter Search Shop (Start)---//
    filterSelection("all")
    function filterSelection(c) {
        var x, i;
        x = document.getElementsByClassName("column");
        if (c == "all") c = "";
        for (i = 0; i < x.length; i++) {
            w3RemoveClass(x[i], "show");
            if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
        }
    }

    function w3AddClass(element, name) {
        var i, arr1, arr2;
        arr1 = element.className.split(" ");
        arr2 = name.split(" ");
        for (i = 0; i < arr2.length; i++) {
            if (arr1.indexOf(arr2[i]) == -1) {
                element.className += " " + arr2[i];
            }
        }
    }

    function w3RemoveClass(element, name) {
        var i, arr1, arr2;
        arr1 = element.className.split(" ");
        arr2 = name.split(" ");
        for (i = 0; i < arr2.length; i++) {
            while (arr1.indexOf(arr2[i]) > -1) {
                arr1.splice(arr1.indexOf(arr2[i]), 1);
            }
        }
        element.className = arr1.join(" ");
    }

    var btnContainer = document.getElementById("myBtnContainer");
    var btns = btnContainer.getElementsByClassName("btn");
    for (var i = 0; i < btns.length; i++) {
        btns[i].addEventListener("click", function(){
            var current = document.getElementsByClassName("active");
            current[0].className = current[0].className.replace(" active", "");
            this.className += " active";
        });
    }
    //---Filter Search Shop (End)---//

    //---Mobile NavBar (Start)---//
    function myFunction(){
        var x = document.getElementById("myLinks");
        if (x.style.display === "block") {
            x.style.display = "none";
        }   else{
            x.style.display = "block";
        }
    }
    //---Mobile NavBar (End)---//