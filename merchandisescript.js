
    function clear(){
                Gtart1.innerHTML = "";
                Gtart2.innerHTML = "";
                Ktart1.innerHTML = "";
                Ktart2.innerHTML = "";
                
            }
      document.getElementById("g1").addEventListener("click",function() {
                clear();
                Gtart1.innerHTML = "Kobe grinches, known for its green colorway, amazing traction, and an overall comfortable design. This shoe is known for its supreme performance and its a must have for any basketball player who wants the best of the best.";
            });
            document.getElementById("g2").addEventListener("click",function() {
                clear();
                Gtart2.innerHTML = "Buy Kobe Grinches for $899.00. Available here: https://stockx.com/nike-kobe-6-protro-grinch?msockid=039055529ec56fbd1579404f9fd16ead";
            });
            document.getElementById("k1").addEventListener("click",function() {
                clear();
                Ktart1.innerHTML = "Kobe protos, known for its amazing traction and dominant performance. It is collection of Kobe's best shoes ever made, its durable, reliable, and a good investment.";
            });
            document.getElementById("k2").addEventListener("click",function() {
                clear();
                Ktart2.innerHTML = "Buy Kobe Protos. Available here: https://stockx.com/search?s=kobe+protos";
            });
