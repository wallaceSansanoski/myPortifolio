import { useEffect, useRef,useState } from 'react';
import ProjectModel from '../../Components/ProjectModel/ProjectModel';
import style from './project.module.css'
import  './style.css'
import flappy from '../../assets/flappy.jpg'
import chat from '../../assets/coolChat.png'
import blog from '../../assets/blog.png'
import weather from '../../assets/weaterApp.png'
import randomMatch from '../../assets/randomMatch.png'

const Project = () => {

    const projectList = [ 
        {
            name : 'Flappy Bird Challange',
            file: flappy,
            description : 'Play this classic and challange game',
            stacks : ['JS', 'HTML', 'CSS'],
            github : 'https://github.com/wallaceSansanoski/FlappyBird'
        },
        {
            name : 'Real Time Chat APP',
            file: chat,
            description : 'Have a fun conversation using real time chat application.Register user can have concersation with many friend, share pictures and audio.',
            stacks : ['React','React Context', 'React Router', 'Firebase','Firebase Auth', 'HTML', 'CSS'],
            github : 'https://github.com/wallaceSansanoski/cool-chat'
        },
        {
            name : 'Blog',
            file: blog,
            description :'Intersting blog about programming made to programmer.Register user can add, delete, update and create new post to share new ideas',
            stacks : ['React','React Context', 'React Router', 'Firebase', 'Firebase Auth', 'Firebase Store ', 'HTML', 'CSS'],
            github : 'https://github.com/wallaceSansanoski/miniBlog'
        },
        {
            name : 'Weather Application',
            file: weather,
            description :'Cheack Forecasting today and five days ahead using this app.',
            stacks : ['JS', 'Local Storage', 'HTML', 'CSS'],
            github : 'https://github.com/wallaceSansanoski/weatherAPP'
        },
        {
            name : 'Random Team',
            file: randomMatch,
            description :'To have a fun game and have a balance competicion with, use this app  to balance team, record score and set timer',
            stacks : ['React', 'React Router', 'Firebase', 'Firebase Auth','Firebase Store', 'HTML', 'CSS'],
            github : 'https://github.com/wallaceSansanoski/random-match'
        }

    ]

    // const ref= useRef()
    // const  [ isIntersecting, setIsIntersection ] = useState(false)

    // useEffect(() => {
    //     const observer = new IntersectionObserver(entries => {
    //     entries.forEach(el => {
    //         if(el.isIntersecting) {
    //             el.target.classList.add('display')
    //         }
    //         el.target.classList.remove('display')
    //     })
           
    //     } ,{threshold : 1})

    //     observer.observe(Array.from(ref.current.children)[0])
    // }, [])

    return (
        <div className={style.wrapper}>
            <div>
                <h1 className={style.title}>projects</h1>
            </div>
            <div className={style.wrapperProjects}>
                {
                    projectList.map(project => {
                        return (
                             <ProjectModel project={project} />
                        )
                    })
                }

            </div>
        </div>
    )
}

export default Project;