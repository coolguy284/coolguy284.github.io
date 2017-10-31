/**
 * This is a simulation of a fission type nuclear reactor
 * Neutrons can be clicked to release a neutron into the reactor
 * Temp is the reactor temperature in Celsius
 * Uranium is the amount of uranium in the reactor in Grams
 * Control Rod has multiple clickable sections for rod extension:
   set |+10%|+1% |set
   to  |----|----|to
   0   |-10%|-1% |100
 * Generate Power can be clicked to toggle whether power is being generated
 * Power is the kilowattage of the generator
 * Temp Reg can be clicked to toggle whether temperature is regulated with control rods
   Much easier than doing it manually
 * Reg Temp has multiple clickable sections for the regulation of reactor temperature:
   +1000| +100|  +10|   +1
   -----|-----|-----|-----
   -1000| -100|  -10|   -1
 * Vent Neutrons can be clicked to toggle whether neutrons are being vented away
 * Zero Neutrons is whether there is exactly zero neutrons in the reactor
 * Struct Integ is structural integrity, which decreases if the reactor surpasses it's 
   maximum temperature
 * Repair can be clicked to repair the reactor
 * Temp Unit can be clicked to toggle the unit of temperature measurement
 * Emer Cooling can be clicked to toggle Emergency Cooling
 * Safety Mode can be clicked to toggle Safety Mode
 * SCRAM can be cicked to toggle SCRAM
*/
var neutrons = 0;
var temp = 22;
var uranium = 100;
var bktemp = 22; //background tempaeature
var cf = 0.02; //air cooling factor
var md = 1.1; //maximum dampening for control rod
var neuf = 0.0000001; //neutron factor
var melt = false;
var tmax = 5000; //cladding melting temperature
var gf = 0.97; //temperature reduction factor
var nf2 = 15000000; //neutron factor
var ulf = 1000000000000; //uranium loss factor
var strint = 100;
var wf = 10000; //rate of weakening for integrity
var voltage = 0;
var emc = 0.70;
var conf = 18.18181818181818; //gen off control rod dampening
var conf2 = 15.37019681349576; //control rod dampening
var control = 0;
var emcool = false; //emergency cooling
var gen = false; //generate power
var regulate = 0; //regulate temperature
var doreg = false; //regulate
var vent = false; //vent neutrons
var tu = true; //temperature unit
var saft = false; //safety mode
var scram = false; //SCRAM
var broun = function(num) {
    return round(num * 100) / 100;
};
var mouin = function(lx, ly, gx, gy) {
    return mouseX > lx && mouseY > ly && mouseX < gx && mouseY < gy;
};
mouseClicked = function() {
    if (mouin(0, 90, 200, 110)) {
        neutrons += 1;
    } else if (mouin(200, 110, 250, 130)) {
        control = 0;
    } else if (mouin(250, 110, 300, 120)) {
        control += 10;
    } else if (mouin(250, 120, 300, 130)) {
        control -= 10;
    } else if (mouin(300, 110, 350, 120)) {
        control += 1;
    } else if (mouin(300, 120, 350, 130)) {
        control -= 1;
    } else if (mouin(350, 110, 400, 130)) {
        control = 100;
    } else if (mouin(0, 130, 200, 150)) {
        gen = !gen;
    } else if (mouin(0, 150, 200, 170)) {
        doreg = !doreg;
    } else if (mouin(200, 150, 250, 160)) {
        regulate += 1000;
    } else if (mouin(200, 160, 250, 170)) {
        regulate -= 1000;
    } else if (mouin(250, 150, 300, 160)) {
        regulate += 100;
    } else if (mouin(250, 160, 300, 170)) {
        regulate -= 100;
    } else if (mouin(300, 150, 350, 160)) {
        regulate += 10;
    } else if (mouin(300, 160, 350, 170)) {
        regulate -= 10;
    } else if (mouin(350, 150, 400, 160)) {
        regulate += 1;
    } else if (mouin(350, 160, 400, 170)) {
        regulate -= 1;
    } else if (mouin(0, 170, 200, 190)) {
        vent = !vent;
    } else if (mouin(200, 190, 400, 210)) {
        strint += 5;
    } else if (mouin(0, 210, 200, 230)) {
        tu = !tu;
    } else if (mouin(200, 210, 400, 230)) {
        emcool = !emcool;
    } else if (mouin(0, 230, 200, 250)) {
        saft = !saft;
    } else if (mouin(200, 230, 400, 250)) {
        scram = !scram;
    }
};
draw = function() {
    background(255);
    stroke(170);
    fill(0);
    textSize(50);
    textAlign(CENTER, CENTER);
    textFont(createFont('Arial'));
    text('Nuclear Reactor', 200, 50);
    textSize(18);
    if (!melt) {
        temp += (bktemp - temp) * cf;
        if (uranium > 0) {
            neutrons = neutrons * (1.2 - (control / 100 * md));
            uranium -= neutrons / ulf;
        } else {
            neutrons = 0;
            uranium = 0;
        }
        temp += neutrons * neuf;
        if (doreg) {
            if (!gen) {
                control = (temp / regulate) * conf;
            } else {
                control = (temp / regulate) * conf2;
            }
        }
        if (gen) {
            neutrons = neutrons * gf;
            voltage = neutrons / nf2;
        }
        if (temp > tmax && saft) {
            control = 100;
            vent = true;
            emcool = true;
        }
        if (vent) {
            neutrons *= 0.5;
        }
        if (emcool) {
            temp *= emc;
        }
        if (scram) {
            doreg = false;
            control = 100;
            vent = true;
            emcool = true;
        }
        control = constrain(control, 0, 100);
        if (temp > tmax) {
            strint -= (temp - tmax) / wf;
        }
        if (strint <= 0) {
            melt = true;
        } else if (strint > 100) {
            strint = 100;
        }
        line(0, 90, 398, 90);
        line(398, 90, 398, 250);
        line(0, 90, 0, 250);
        line(0, 110, 398, 110);
        line(0, 130, 398, 130);
        line(0, 150, 398, 150);
        line(0, 170, 398, 170);
        line(0, 190, 398, 190);
        line(0, 210, 398, 210);
        line(0, 230, 398, 230);
        line(0, 250, 398, 250);
        line(200, 90, 200, 250);
        line(250, 110, 250, 130);
        line(300, 110, 300, 130);
        line(350, 110, 350, 130);
        line(250, 120, 350, 120);
        line(250, 150, 250, 170);
        line(300, 150, 300, 170);
        line(350, 150, 350, 170);
        line(200, 160, 398, 160);
        text('Neutrons: ' + round(neutrons), 100, 100);
        text('Uranium: ' + broun(uranium) + 'g', 100, 120);
        text('Control Rod: ' + broun(control) + '%', 300, 120);
        text('Generate Power: ' + gen, 100, 140);
        text('Power: ' + broun(voltage) + 'KW', 300, 140);
        text('Temp Reg: ' + doreg, 100, 160);
        text('Vent Neutrons: ' + vent, 100, 180);
        text('Zero Neutrons: ' + (neutrons === 0), 300, 180);
        text('Struct Integ: ' + broun(strint) + '%', 100, 200);
        text('Repair', 300, 200);
        text('Emer Cooling: ' + emcool, 300, 220);
        text('Safety Mode: ' + saft, 100, 240);
        text('SCRAM: ' + scram, 300, 240);
        if (tu) {
            text('Temp: ' + broun(temp) + 'C', 300, 100);
            text('Reg Temp: ' + regulate + 'C', 300, 160);
        } else {
            text('Temp: ' + broun(temp * 1.8 + 32) + 'F', 300, 100);
            text('Reg Temp: ' + (regulate * 1.8 + 32) + 'F', 300, 160);
        }
        if (tu) {
            text('Temp Unit: Celsius', 100, 220);
        } else {
            text('Temp Unit: Fahrenheit', 100, 220);
        }
    } else {
        fill(255, 0, 0);
        textSize(50);
        text('MELTDOWN!', 200, 200);
    }
};