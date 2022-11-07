const fs = require('fs');
const path = require('path');


function lookinside(word){
    fs.readdir(__dirname, (err,files)=>{
        if (err) {
            console.log(err.message);
        } else {
            files.forEach(file =>{
                if (path.extname(file) == ".txt"){
                    console.log("text we can look in ");
                    console.log(file);
                    // now lazm n9raw file donc
                    fs.readFile(file,'utf8',function(error,data) {
                        if (error) {
                            console.log(error.message);
                        } else {
                            theFileText =  data.toString()
                            if (theFileText.match(word) == null) {
                              console.log("none matchs found here");
                            }
                            else{
                                console.log("kayn ${word} f file li ismo  :  ");
                                console.log(file);
                            }
                        }
                       
                      })
                }
            
              
            })
        }
    })
}


lookinside("chihabb")