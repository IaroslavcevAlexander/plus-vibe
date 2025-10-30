import type { FC } from "react"

interface CatProps {
    data: Data
}

interface Hobby {
    name: string
    experienceAge: number
}

interface Data {
    name: string
    age: number
    email: string
    avatarUrl: string
    isOnline: boolean
    hobby: Hobby[]
}

const info = [
    {
        name: 'Artemas',
        age: 16,
        email: 'atr69@gmail.com',
        avatarUrl: '/img/avatar/Artemas',
        isOnline: false,
        hobby: [
            { name: 'Arm wrestling', experienceAge: 3 },
            { name: 'play music', experienceAge: 5 }
        ]
    },
    {
        name: 'Danyk',
        age: 27,
        email: 'fdmyticher@mail.com',
        avatarUrl: '/img/avatar/Danyk',
        isOnline: false,
        hobby: [
            { name: 'drink coffe', experienceAge: 19 },
            { name: 'bitcoin', experienceAge: 12 }
        ]
    },
        {
        name: 'Franchesko',
        age: 16,
        email: 'frfrfr4et@gmail.com',
        avatarUrl: '/img/avatar/Franchesko',
        isOnline: false,
        hobby: [
            { name: 'GIM', experienceAge: 1.3 },
            { name: 'CS', experienceAge: 2 }
        ]
    }
]

const Users = () => {
    return(
        <div>
            {info.map((cat, index) => {
                return <User data={cat} key={index} />
            })}
        </div>    )
}

const User: FC<CatProps>= ({ data }) => {
    const {name, age, email, avatarUrl, isOnline, hobby} = data
    return(
        <div>
            <div>{name}</div>
            <div>{age}</div>
            <div>{email}</div>
            <img src={avatarUrl} alt={name} />
            <div>{isOnline}</div>   

            <div>
                {hobby.map((hobby, index) => (
                    <div key={index}>
                        <h3>{hobby.name} </h3>
                        <p>рпыт:{hobby.experienceAge}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Users