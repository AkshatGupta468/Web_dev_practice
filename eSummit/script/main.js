// import speakers from '.\speakers.json';
        // fs= require('fs');
        // var name="speakers.json";
        // var sp=JSON.stringify(name);
        // var spkrs=JSON.parse(fs.readFileSync(name).toString());
        function readTextFile(file, callback) {
            var rawFile = new XMLHttpRequest();
            rawFile.overrideMimeType("application/json");
            rawFile.open("GET", file, true);
            rawFile.onreadystatechange = function() {
                if (rawFile.readyState === 4 && rawFile.status == "200") {
                    callback(rawFile.responseText);
                }
            }
            rawFile.send(null);
        }
        
        //usage:
        readTextFile("speakers.json", function(text){
            var data = JSON.parse(text);
            // var s=data.speakers[1].Name;
            // console.log(s);
            for(let i=1;i<12;i++)
            {
                show_image("http://e-summit-iitbbs.com/img/speakers/s"+String(i)+".jpg",i,240,250,"s"+String(i),data);
            }
        });
        
        function show_image(src,i, width, height, alt,data) {
            var img = document.createElement("img");
            var mdiv=document.createElement("div");
            var name=document.createElement("h4");
            var desgn=document.createElement("h5");
            
            mdiv.appendChild(img);
            mdiv.appendChild(name);
            mdiv.appendChild(desgn);
            mdiv.style.width="253px";
            mdiv.style.height="340px";
            mdiv.style.display="inline-block";
            name.style.padding="0px";
            name.style.margin="0px";
            desgn.style.padding="0px";
            desgn.style.margin="0px";
            desgn.style.color="rgb(62,90,200)";
            img.src=src;
            img.height=height;
            img.width=width;
            img.alt=alt;
            name.innerText=data.speakers[i-1].Name+"\n"
            desgn.innerText=data.speakers[i-1].desgn+"\n";
            
            // mdiv.style.backgroundImage=src;
            // mdiv.innerText="sdfs\n\n\n\n\\n\n\n\n";
            mdiv.style.textAlign="center";
            mdiv.style.overflow="hidden"
            mdiv.style.margin="10px";

            // img.style.borderBottom="3px groove white"
            // mdiv.style.border="4px white";
            // mdiv.style.borderStyle="groove";
            // img.innerText="jsfdsdf"
            // img.style.zIndex=
            // This next line will just add it to the <body> tag
            //    const spek= document.querySelector("id:speakers");
                document.getElementById("speakers").appendChild(mdiv);
        }

        