
    var donutShoppe = function(location,min,max,adpp) {
     this.location = location;
     this.min = min;
     this.max = max;
     this.adpp = adpp;
     this.hourlyDonuts = []
   }

    donutShoppe.prototype.custGen = function(){
      return Math.floor(Math.random() * ((this.max - this.min) + 1) + this.min);
      };

      
   donutShoppe.prototype.donutsPerHour = function(){
    var customers = this.custGen();
      return Math.round(customers*this.adpp)
    }

   

    donutShoppe.prototype.numDonutsDay = function(){
      var donutDay = 0;
      for (var i = 0; i <= 11; i++){
        var donutsPerHr = this.donutsPerHour();
        this.hourlyDonuts.push(donutsPerHr);
        donutDay += donutsPerHr;
      }
      return donutDay;
    }

    donutShoppe.prototype.render = function(){
      var totalDonuts = this.numDonutsDay();
      //var getLocation = document.getElementById(this.location);
      var Tr = document.createElement('tr');
      var Th = document.createElement('th')
      var elTd = document.createElement('td');
      Th.textContent = this.location;
      Tr.appendChild(Th);
      elTd.textContent=[];
      Tr.appendChild(elTd);
      for (var i=0;i<12; i++){
        var elTd = document.createElement('td');
        elTd.textContent=this.hourlyDonuts[i];
        Tr.appendChild(elTd);
      }
      elTd.textContent = totalDonuts;
      Tr.appendChild(elTd);
      document.getElementById('bodyTable').appendChild(Tr);
      
      };
    
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
  window.donutShoppe = donutShoppe;
