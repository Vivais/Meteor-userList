# Meteor-userList
simple meteor user list app  

I'm a new meteor user (italian, sorry for my bad english ) and I wont to share my first simple app, a very simple users list
based on username password login. I use windows so i work a lot to add correct packages. This is the creation app steeps (I don't know if it's the correct way, but ...)  

# for very beginer user like me 
if( skilled ) jump("# packages");
- install meteor from https://www.meteor.com/    
- make a folder named C:\data\db  
- I have to manualy set path values (http://www.computerhope.com/issues/ch000549.htm) <b>change username value!</b>   
  C:\Users\username\AppData\Local\.meteor\;  
  C:\Users\username\AppData\Local\.meteor\packages\meteor-tool\1.4.2_3\mt-os.windows.x86_32\dev_bundle\mongodb\bin\  
  C:\Users\username\AppData\Local\.meteor\packages\meteor-tool\1.4.2_3\mt-os.windows.x86_32\dev_bundle\bin\  
- create a folder for your apps  (ex: C:\yourApp)  
- open a cmd in your applications path (shift + rightClick on this folder)  

# make a standard app
C:\yourApps>meteor create userList  
C:\yourApps>cd userList  
C:\yourApps\userList>meteor run  
no errors i hope ...  

# open the app  
open a browser and insert http://localhost:3000  

# packages
- STOP THE SERVER!!! press CTRL+C on the command line window and press Y (now you need some time ...)
C:\yourApps\userList>meteor update --all-packages  
C:\yourApps\userList>meteor npm install --save babel-runtime  
C:\yourApps\userList>npm install --save bcryptjs  
C:\yourApps\userList>meteor add accounts-password accounts-ui  
C:\yourApps\userList>meteor add session  

# view the basic app  
- start meteor server
C:\yourApps\userList>meteor run  
- refresh the browse page with F5 key (or wait)
- If no errors now you have a standard app with login based on email and password. For now don't create users please

# overwrite the files
- client/main.js
- client/main.html
- client/main.css
- server/main.js
