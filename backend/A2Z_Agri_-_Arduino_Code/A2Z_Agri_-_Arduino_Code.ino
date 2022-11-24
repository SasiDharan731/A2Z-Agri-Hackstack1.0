#include<AFMotor.h>
#include <VarSpeedServo.h> 
#define SPEED 40
VarSpeedServo myservo1, myservo2, myservo3;
AF_DCMotor mot1(1);
AF_DCMotor mot2(2);
AF_DCMotor mot3(3);
AF_DCMotor mot4(4);

int val;
void setup() {
  // put your setup code here, to run once:
  Serial.begin(9600);
  

  myservo1.attach(9);  // attaches the servo on pin 9 to the servo object 
  myservo2.attach(10);
  myservo3.attach(6);
  neutral();
  delay(15000);
}


void arm_right(){
  delay(1000);
   myservo1.write(160, SPEED, true); 
   delay(1000);
   myservo2.write(160, SPEED, true);
   delay(1000);
}

void neutral(){
   myservo1.write(140, SPEED, true); 
   myservo2.write(0, SPEED, true);
   delay(1000);
}

void arm_left(){
  delay(1000);
  myservo1.write(80, SPEED, true); 
   delay(1000);
   myservo2.write(50, SPEED, true);
   delay(1000);
}

void loop() {
//   put your main code here, to run repeatedly:
  int sensi = 45;

  val = analogRead(A0);
//  Serial.println(val);
  if(val >= sensi){
    Serial.println("Front");
    //plant();
front();
    
  }else{
    val = analogRead(A1);
    if(val >= sensi){
      Serial.println("Back");
      back();
    }else{
      val = analogRead(A2);
      if(val >= sensi){
        Serial.println("Left");
//        plant();
left();
      }else{
        val = analogRead(A3);
        if(val >= sensi){
          Serial.println("Right");
//          Stop();
right();
        }else{
           val = analogRead(A5);
           if(val >= sensi){
            Serial.println("Plant");
//            left();
plant();
           }else{
             Serial.println("Stop");
             Stop();
           }
        }
      }
    }
  }

//plant();
}

void front(){
  mot1.setSpeed(255);
   mot2.setSpeed(255);
    mot3.setSpeed(255);
     mot4.setSpeed(255);

     mot1.run(FORWARD);
      mot2.run(FORWARD);
       mot3.run(FORWARD);
        mot4.run(FORWARD);
  
}

void back(){
  mot1.setSpeed(255);
   mot2.setSpeed(255);
    mot3.setSpeed(255);
     mot4.setSpeed(255);

      mot1.run(BACKWARD);
      mot2.run(BACKWARD);
       mot3.run(BACKWARD);
        mot4.run(BACKWARD);
  
}

void right(){

  mot1.setSpeed(255);
   mot2.setSpeed(255);
    mot3.setSpeed(255);
     mot4.setSpeed(255);

      mot1.run(FORWARD);
      mot2.run(FORWARD);
       mot3.run(BACKWARD);
        mot4.run(BACKWARD);

  
}

void left(){

  mot1.setSpeed(255);
   mot2.setSpeed(255);
    mot3.setSpeed(255);
     mot4.setSpeed(255);

     mot4.run(FORWARD);
      mot3.run(FORWARD);
       mot1.run(BACKWARD);
        mot2.run(BACKWARD);
  
}


void Stop(){

 myservo1.write(140, SPEED, true); 
 myservo2.write(0, SPEED, true);
  mot1.setSpeed(0);
   mot2.setSpeed(0);
    mot3.setSpeed(0);
     mot4.setSpeed(0);  
  
}

void plant(){
  front();
  delay(1000);
  Stop();
  arm_left();
  arm_right();
  neutral();
  
//  front();
//  delay(1000);
//  Stop();
//  arm_left();
//  arm_right();
//  neutral();
//  delay(1000);`
//
//  front();
//  delay(1000);
//  Stop();
//  arm_left();
//  arm_right();
//  neutral();
//  delay(1000);

//  Stop();

  
}
