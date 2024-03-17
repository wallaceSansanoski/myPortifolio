import flappy from '../assets/flappy.jpg'
import chat from '../assets/coolChat.png'
import blog from '../assets/blog.png'
import weather from '../assets/weaterApp.png'
import randomMatch from '../assets/randomMatch.png'
import  blogVideo from '../assets/blogVideo.mp4'
import  coolChatVideo from '../assets/coolChatVideo.mp4'
import  flappyVideo from '../assets/filmFlappy.mp4'
import  randomMatchVideo from '../assets/randomTeamVideo.mp4'
import  weatherApp from '../assets/weatherApp.mp4'

const projectList = [ 
    {
        name : 'Flappy Bird Challange',
        file: flappy,
        description : 'Play this classic and challange game',
        stacks : 'Javascript, HTML and CSS',
        github : 'https://github.com/wallaceSansanoski/FlappyBird',
        video : flappyVideo
    },
    {
        name : 'Real Time Chat APP',
        file: chat,
        description : 'Have a fun conversation using real time chat application.Register user can have concersation with many friend, share pictures and audio.',
        stacks : 'React, React Router, React Context API, Firebase Database, Firebase Auth, Firebase Store, HTML and CSS',
        github : 'https://github.com/wallaceSansanoski/cool-chat',
        video : coolChatVideo
    },
    {
        name : 'Blog',
        file: blog,
        description :'Intersting blog about programming made to programmer.Register user can add, delete, update and create new post to share new ideas',
        stacks : 'React, React Router, React Context API, Firebase Database, Firebase Auth, Firebase Store, HTML and CSS',
        github : 'https://github.com/wallaceSansanoski/miniBlog',
        video : blogVideo
    },
    {
        name : 'Weather Application',
        file: weather,
        description :'Cheack Forecasting today and five days ahead using this app.',
        stacks : 'Javascript, Local Storage, HTML and CSS',
        github : 'https://github.com/wallaceSansanoski/weatherAPP',
        video : weatherApp
    },
    {
        name : 'Random Team',
        file: randomMatch,
        description :'To have a fun game and have a balance competicion with, use this app  to balance team, record score and set timer',
        stacks : 'React, React Router, React Context API, Firebase Database, Firebase Auth, Firebase Store, HTML and CSS',
        github : 'https://github.com/wallaceSansanoski/random-match',
        video : randomMatchVideo
    }

]

export default projectList;