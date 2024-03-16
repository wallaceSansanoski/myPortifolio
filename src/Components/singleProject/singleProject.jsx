import { useContext} from "react";
import projectList from "../../database/infoProject";
import { ContextActiveLLink } from "../../Context/ContextActiveLink";
import style from './singleProject.module.css'

const SingleProject = () => {

    const  {setActive, nameProject } = useContext(ContextActiveLLink)
    const  { video, name, description, stacks }  = projectList.find(({name}) => nameProject === name)
    return (
        <div className={style.wrapper}>
            <h1 className={style.title}>{name}</h1>
            <video
                className={style.video}
                controls
                controlsList="nodownload nofullscreen"
                disablePictureInPicture
                src={video}></video>
                <p>{description}</p>
                <p>{stacks}</p>
            <button onClick={() => setActive(false)}>Back</button>
        </div>
    )
}

export default SingleProject;