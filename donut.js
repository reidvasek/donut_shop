  <script>
    var donutShoppe = function(location,min,max,adpp) {
     this.location = location;
     this.min = min;
     this.max = max;
     this.adpp = adpp;
     this.hourlyDonuts = []
   }

    donutShoppe.prototype.donutsPerHour = function(){
      var customers = Math.floor(Math.random() * this.max - this.min + 1) + this.min;
    return Math.round(customers * this.adpp);
      };
      
   

    donutShoppe.prototype.numDonutsDay = function(){
      var donutDay = 0;
      for (var i = 7; i <= 18; i++){
        var donutsPerHr = this.donutsPerHour();
        this.hourlyDonuts.push(donutsPerHr);
        donutDay += donutsPerHr;
      }
      return donutDay;
    }
    donutShoppe.prototype.render = function(){
      var totalDonuts = this.numDonutsDay()
        var elTr = document.getElementById(this.location);
        for (var i = 0; i<= this.hourlyDonuts.length;i++) {
          var el = document.createElement('td');
          el.textContent = this.hourlyDonuts[i];
          elTr.appendChild(el);
        }
        el.textContent = totalDonuts;
        elTr.appendChild(el);
      }
    
    var dT = new donutShoppe('Downtown',8,43,4.5);
    var cH = new donutShoppe('Capitol Hill',4,37,2);
    var sLU = new donutShoppe('South Lake Union', 9, 23, 6.33);
    var wW = new donutShoppe('Wedgewood', 2, 28, 1.25);
    var bD = new donutShoppe ('Ballard', 8,58, 3.75);
    dT.render();
    cH.render();
    sLU.render();
    wW.render();
    bD.render();
  ;
      </script>