import style from './projectModel.module.css'
import { ContextActiveLLink } from '../../Context/ContextActiveLink';
import { useContext } from 'react';

const ProjectModel = ({ project: { name, file, github } }) => {

    const {setActive, setNameProject} = useContext(ContextActiveLLink)

    return (
        <div
            className={style.container}>
            <h1 className={style.nameProject}>{name}</h1>
            <div>
                <div className={style.containerImage}>
                    <img className={style.img} src={file} alt='image project'/>
                </div>
                <div className={style.wrapperBtn}>
                    <button onClick={(e) => {
                        setNameProject(e.target.name)
                        setActive(true)
                    }} name={name} className={style.socialMediaBtn}>
                        Learn More
                    </button>
                    <button className={style.socialMediaBtn}><a href={github} target='_blank'>Github</a></button>
                </div>
            </div>
        </div>
    )
}

export default ProjectModel;