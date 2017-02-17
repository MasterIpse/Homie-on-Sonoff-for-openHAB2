/*
Use mqtt-spy to test if your Homie openHAB 2 binding is working properly.
Sleep funktion from: https://www.sitepoint.com/delay-sleep-pause-wait/
*/
function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}

function publish(){
  mqttspy.publish("homie/test/$homie","2.0.0",1,true);
  sleep(50);
  mqttspy.publish("homie/test/$implementation","Test Device",1,true);
  sleep(50);
  mqttspy.publish("homie/test/$online","true",1,true);
  sleep(50);
  mqttspy.publish("homie/test/$name","test",1,true);
  sleep(50);
  mqttspy.publish("homie/test/$localip","127.0.0.1",1,true);
  sleep(50);
  mqttspy.publish("homie/test/$mac","ab:cd:ef:12:34:56",1,true);
  sleep(50);
  mqttspy.publish("homie/test/$stats/uptime","0",1,true);
  sleep(50);
  mqttspy.publish("homie/test/$stats/signal","80",1,true);
  sleep(50);
  mqttspy.publish("homie/test/$stats/interval","5",1,true);
  sleep(50);
  mqttspy.publish("homie/test/$fw/name","SonoffTest",1,true);
  sleep(50);
  mqttspy.publish("homie/test/$fw/version","v1.1",1,true);
  sleep(50);
  mqttspy.publish("homie/test/$fw/checksum","79af87723dc295f95bdb277a61189a2a",1,false);
  sleep(50);
  mqttspy.publish("homie/test/switch/$type","ESH:PowerOutlet",1,true);
  sleep(50);
  mqttspy.publish("homie/test/switch/$properties","value:settable,value,Switch",1,true);
  sleep(50);
  mqttspy.publish("homie/test/switch/itemtype","Switch",1,true)
  sleep(50);;
  mqttspy.publish("homie/test/switch/value","OFF",1,true);
}
publish()
