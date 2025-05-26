# ToDoApp

## running the program - 
before running the program make sure you have mongo db installed and running -

### run mongodb
#### Windows

##### 1. Download MongoDB
- Visit: [https://www.mongodb.com/try/download/community](https://www.mongodb.com/try/download/community)
- Choose:
  - **Windows**
  - Version: Latest stable
  - Package: MSI
- Run the installer and check **"Install MongoDB as a Service"** during setup.

##### 2. Start MongoDB
MongoDB will start automatically as a Windows service.

To verify it's running:
powershell Get-Service -Name "MongoDB"

for running manually - 
net start MongoDB

#### MacOS
make sure you have homebrew installed

run-
brew tap mongodb/brew
brew install mongodb-community
brew services start mongodb-community

#### linux 
run - 
wget -qO - https://www.mongodb.org/static/pgp/server-6.0.asc | sudo apt-key add -
echo "deb [ arch=amd64 ] https://repo.mongodb.org/apt/ubuntu focal/mongodb-org/6.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-6.0.list
sudo apt update
sudo apt install -y mongodb-org
sudo systemctl start mongod

### run the program

to run the program you need to enter the todo-app and run the following in terminal -
npm run init
npm run start

now everything is set and you can reach http://localhost:4200 