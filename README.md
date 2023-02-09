# microservices-react-blog

Projet is setup using Vite + React

`npm create vite@latest client --template react`

### For Each Microservices (posts/comments/query/event-bus)

`mkdir posts`

`npm init -y`

`npm install cors express nodemon axios`


### Setting Git Bash alias 

`nano ~/.bashrc`

Copy the following commands,

`cd ~`

`alias cd_microreactblog_proj=" cd '.\Work Folders\Documents\GitHub\microservices-react-blog\blog\' && ls"`

`alias cd_git_repo="cd '.\Work Folders\Documents\GitHub\' && ls"`

Note: CTRL + O saves a Nano file. CTRL + X exits Nano


## Install and Run Micro Services

### CLIENT 
`cd ~ && cd_microreactblog_proj && cd client && npm install && npm run dev`

### POSTS
`cd ~ && cd_microreactblog_proj && cd posts && npm install && npm start`

### COMMENTS
`cd ~ && cd_microreactblog_proj && cd comments && npm install && npm start`

### Query
`cd ~ && cd_microreactblog_proj && cd query && npm install && npm start`

### Event-Bus
`cd ~ && cd_microreactblog_proj && cd event-bus && npm install && npm start`


## Find PID and PORT

`netstat -ano -p tcp |findstr ":400*"`

Active Connections

`  Proto  Local Address          Foreign Address        State           PID`

`  TCP    0.0.0.0:4000           0.0.0.0:0              LISTENING       24780`

`kill 24780`
