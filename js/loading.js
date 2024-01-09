var csslinks = document.getElementsByTagName("link");

document.onreadystatechange = function() {  
            csslinks[1].href = "css/loading.css";
            if (document.readyState !== "complete") {
                document.querySelector(
                  ".site").style.visibility = "hidden";
                document.querySelector(
                  ".spinner-box").style.visibility = "visible";
            } else {
              setTimeout(function(){
                document.querySelector(
                  ".site").style.visibility = "visible";
                document.querySelector(
                  ".spinner-box").style.display = "none";
                  
                csslinks[1].href = "css/style.css";

              }, 1200);
            }
        };