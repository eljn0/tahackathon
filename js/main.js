function myFunction() {
      var x = document.getElementById("menulinksid");
      if (x.style.display === "block") {
        x.style.display = "none";
      } else {
        x.style.display = "block";
      }
    }

    function talk(){  
        var know = {  
         "Hi": " Hi, How can I help you?",
         "Who are you?" : "Hi, I am Turkish Airlines' chatbot. How can I help you? ",
         "Who are you" : "Hi, I am Turkish Airlines' chatbot. How can I help you?",  
         "How are you" : "I am feeling good to help you.",   
         "How are you?" : "I am feeling good to help you.",  
         "Hwy" : "I am feeling good to help you.",   
         "Bye" : "Okay! Will meet soon..",
         "Weight restrictions": "In Economy class you can bring maximum 8kg bagage.",
         "Is there a medical assistance service at the airport?": "Turkish Airlines does not provide this kind of service. However, you can use the medical services provided by the airport.",
         "Help" : "If you are asking for help during the flight, call stewards for your issue.",
         "When can I check-in online?": "Online check-in starts 24 hours before the flight and ends 90 minutes before the flight.",
         "How are Miles earnings and spending calculated?":"The amount of Miles deducted or added to your account is calculated according to the program terms at the time of the activity that earned the Miles.",
         "When does check-in close at the airport?":"The check-in desk closes 45 minutes before departure for domestic flights and 60 minutes beforehand for international flights.",
         "What does check-in mean?": "Check-in refers to all the essential ticket and baggage procedures you need to go through at the airport by a specific time before the flight departure.",
         "What happens if I reserved assignment a seat during reservation?": "For tickets purchased from all our sales channels, you can use the same seat number (paid / free) at the online check-in if you have selected your seat number at the time of reservation.",
         "What is Known Traveler number?":"This number is used for flights to the US and shows that the pre-flight checks and safety scans required for the trip have been completed.",
         "What is the maximum number of passengers I can check in online?":"You can check in online for up to 9 passengers with the same reservation booking (PNR).",




         "what is the maximum number of passengers I can check in online?":"You can check in online for up to 9 passengers with the same reservation booking (PNR).",
         "what is Known Traveler number?":"This number is used for flights to the US and shows that the pre-flight checks and safety scans required for the trip have been completed.",
         "what happens if I reserved assignment a seat during reservation?": "For tickets purchased from all our sales channels, you can use the same seat number (paid / free) at the online check-in if you have selected your seat number at the time of reservation.",
         "what does check-in mean?": "Check-in refers to all the essential ticket and baggage procedures you need to go through at the airport by a specific time before the flight departure.",
         "hi": " Hi, How can I help you?",
         "who are you?" : "Hi, I am Turkish Airlines' chatbot. How can I help you? ",
         "who are you" : "Hi, I am Turkish Airlines' chatbot. How can I help you?",  
         "how are you" : "I am feeling good to help you.",   
         "how are you?" : "I am feeling good to help you.",  
         "hwy" : "I am feeling good to help you.",   
         "bye" : "Okay! Will meet soon..",
         "weight restrictions": "In Economy class you can bring maximum 8kg bagage.",
         "is there a medical assistance service at the airport?": "Turkish Airlines does not provide this kind of service. However, you can use the medical services provided by the airport.",
         "help" : "If you are asking for help during the flight, call stewards for your issue.",
         "when can I check-in online?": "Online check-in starts 24 hours before the flight and ends 90 minutes before the flight.",
         "how are Miles earnings and spending calculated?":"The amount of Miles deducted or added to your account is calculated according to the program terms at the time of the activity that earned the Miles.",
         "when does check-in close at the airport?":"The check-in desk closes 45 minutes before departure for domestic flights and 60 minutes beforehand for international flights.",
        }
        var user = document.getElementById('userBox').value;  
         document.getElementById('chatLog').innerHTML = user + "<br>";  
        
        if (user in know) {  
         document.getElementById('chatLog').innerHTML = know[user] + "<br>"; 
        }else{  
         document.getElementById('chatLog').innerHTML = "Sorry, I could not find information related with your question. Contact to our live support. <br>";  
        ;
        }
       }     