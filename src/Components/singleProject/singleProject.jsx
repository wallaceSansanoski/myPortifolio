import { useContext} from "react";
import projectList from "../../database/infoProject";
import { ContextActiveLLink } from "../../Context/ContextActiveLink";
import style from './singleProject.module.css'

const SingleProject = () => {

    const  {setActive, nameProject } = useContext(ContextActiveLLink)
    const  { video, name, description, stacks }  = projectList.find(({name}) => nameProject === name)

    console.log(stacks)

    return (
        <div className={style.wrapper}>
            <h1 className={style.title}>{name}</h1>
            <video
                className={style.video}
                controls
                controlsList="nodownload nofullscreen"
                disablePictureInPicture
                autoPlay
                muted
                src={video}></video>
                <p className={style.paragraph}>{description}</p>
                <p className={style.paragraph}><span style={{color :'gold'}}>Stacks: </span>{stacks}</p>
            <button 
                onClick={() => setActive(false)}
                className={style.btnBack}
            >Back
            </button>
        </div>
    )
}

export default SingleProject;