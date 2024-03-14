import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

import style from './contact.module.css'

const contacts = [
    {
        name: 'email',
        icon: <SiGmail />,
        adress: 'mendessansanoski@gmail.com'
    },
    {
        name: 'github',
        icon: <FaGithub />,
        adress: 'https://github.com/wallaceSansanoski'
    },
    {
        name: 'linkedin',
        icon: <FaLinkedin />,
        adress: 'https://www.linkedin.com/in/wallace-sansanoski-3b14a1140/'
    }
]

function Contacts() {
    return (
        <div className={style.containerContact}>
            <h1 className={style.title}>contacts</h1>
            <div className={style.contacts}>
                {contacts.map(value => {
                    return (
                        <div key={value.name} className={style.singleContact}>
                            <span className={style.icon}>{value.icon}</span>
                            {
                                value.name === 'email'
                                    ? <p className={style.NameContact}>{value.adress}</p>
                                    : <a className={style.NameContact} href={value.adress}>{value.name}</a>
                            }
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Contacts;
