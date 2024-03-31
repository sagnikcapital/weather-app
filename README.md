# Weather Monitoring Application

![](https://cdn.iconscout.com/icon/free/png-256/free-react-1-282599.png)


A weather monitoring system is a technological solution designed to collect, process, analyze, and present data related to atmospheric conditions, such as temperature, humidity, pressure, wind speed, precipitation, and more. These systems are crucial for various applications, including agriculture, aviation, transportation, disaster management, and scientific research. Here's a comprehensive description of a typical weather monitoring system:

- Real-time Data Collection
- Data Processing and Analysis
- Forecasting
- Alerting and Notification

## Technology
- React JS (18.0)
- Open weather API

## Compatibility
- [NPM  (8.14.0)](https://monovm.com/blog/install-npm-on-ubuntu)
- [Node (16.0.0)]()
- [NPX  (8.14.0)]()
- [React Cli (5.0.0)](https://www.npmjs.com/package/react-cli)
## Installation and setup
> Clone the Application
```sh
$ git clone https://github.com/sagnikcapital/weather-app.git
```
```sh
$ cd weather-app
```
> Setup 
```sh
$ npm install
```
> Create .env file and add the API key there. Please refer this link: https://home.openweathermap.org/api_keys
```sh
$ cp .env.example .env
```
> Fille the details at .env file
```env
REACT_APP_API_KEY=''
REACT_APP_WEATHER_API_URL='https://api.openweathermap.org/data/2.5/weather'
REACT_APP_CONTACT_SUBMIT=''
REACT_APP_POST_CONTACTS_URL=''
```
```sh
$ npm start
```
### Preview
![Alt Text](blobs/Preview.png)
### Pages
- Home:  `/`
- Contact Us: `/contact-us`
- About Us: `/about-us`

### Demo
- Refer: https://sagnikd-weather-app.vercel.app/
### API Details:
| URL     |     Parameters    |    Method
|---------|-------------------|--------------
|https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key} |  `lat`, `lon` | GET |
|REACT_APP_CONTACT_SUBMIT| `name`, `email`, `message` | POST|
|https://api.openweathermap.org/data/2.5/weather?q={city name},{country code}&appid={API key} | `city_name`, `api_key`, `country_code` | GET |
### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

### [Sagnik Dey](https://in.linkedin.com/in/sagnik-dey-483423a9)

 ---
## 💻 Tech Stack
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=plastic&logo=css3&logoColor=white) ![PHP](https://img.shields.io/badge/php-%23777BB4.svg?style=plastic&logo=php&logoColor=white) ![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=plastic&logo=html5&logoColor=white) ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=plastic&logo=javascript&logoColor=%23F7DF1E) ![AWS](https://img.shields.io/badge/AWS-%23FF9900.svg?style=plastic&logo=amazon-aws&logoColor=white) ![Vue.js](https://img.shields.io/badge/vuejs-%2335495e.svg?style=plastic&logo=vuedotjs&logoColor=%234FC08D) ![Vuetify](https://img.shields.io/badge/Vuetify-1867C0?style=plastic&logo=vuetify&logoColor=AEDDFF) ![NPM](https://img.shields.io/badge/NPM-%23000000.svg?style=plastic&logo=npm&logoColor=white) ![jQuery](https://img.shields.io/badge/jquery-%230769AD.svg?style=plastic&logo=jquery&logoColor=white) ![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=plastic&logo=express&logoColor=%2361DAFB) ![Laravel](https://img.shields.io/badge/laravel-%23FF2D20.svg?style=plastic&logo=laravel&logoColor=white) ![NuxtJS](https://img.shields.io/badge/Nuxt-black?style=plastic&logo=nuxt.js&logoColor=white) ![Socket.io](https://img.shields.io/badge/Socket.io-black?style=plastic&logo=socket.io&badgeColor=010101) ![Apache](https://img.shields.io/badge/apache-%23D42029.svg?style=plastic&logo=apache&logoColor=white) ![MariaDB](https://img.shields.io/badge/MariaDB-003545?style=plastic&logo=mariadb&logoColor=white) ![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=plastic&logo=mongodb&logoColor=white) ![MySQL](https://img.shields.io/badge/mysql-%2300f.svg?style=plastic&logo=mysql&logoColor=white) ![SQLite](https://img.shields.io/badge/sqlite-%2307405e.svg?style=plastic&logo=sqlite&logoColor=white) ![Inkscape](https://img.shields.io/badge/Inkscape-e0e0e0?style=plastic&logo=inkscape&logoColor=080A13) ![Jira](https://img.shields.io/badge/jira-%230A0FFF.svg?style=plastic&logo=jira&logoColor=white) ![Vagrant](https://img.shields.io/badge/vagrant-%231563FF.svg?style=plastic&logo=vagrant&logoColor=white)
![Shell](https://img.shields.io/badge/shell-%231563FF.svg?style=plastic&logo=shell&logoColor=white) ![Cakephp](https://img.shields.io/badge/cakephp-%23FF2D20.svg?style=plastic&logo=cakephp&logoColor=white) ![Arduino](https://img.shields.io/badge/arduino-%231563FF.svg?style=plastic&logo=arduino&logoColor=white) ![C++](https://img.shields.io/badge/c++-%231563FF.svg?style=plastic&logo=cplusplus&logoColor=white) ![MsSQLServer](https://img.shields.io/badge/mssql-%23FF2D20.svg?style=plastic&logo=microsoft-sql-server&logoColor=white) ![CodeIgniter](https://img.shields.io/badge/CodeIgniter-%23FF2D20.svg?style=plastic&logo=codeigniter&logoColor=white) ![Lumen](https://img.shields.io/badge/Lumen-%23FF2D20.svg?style=plastic&logo=lumen&logoColor=white) ![Node.js](https://img.shields.io/badge/Node.js-%2343853D.svg?style=plastic&logo=node.js&logoColor=white)
