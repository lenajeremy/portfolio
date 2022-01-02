import axios from '../axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Loader } from './Loader'
import me from '../assets/images/me.jpg'

export interface ProjectInterface {
    title: string
    description: string
    content: string
    primaryImageURL: string
    otherImages: string[]
    liveURL: string
    githubURL: string
    slug: string
}

export function getSingleProjectFromRequest(projectRequest:any): ProjectInterface{
    return {
        title: projectRequest.title,
        description: projectRequest.description,
        content: projectRequest.content,
        primaryImageURL: projectRequest.main_image.imageURL,
        otherImages: projectRequest.other_images,
        liveURL: projectRequest.live_url,
        githubURL: projectRequest.github_url,
        slug: projectRequest.slug
    }
}

export function getProjectArrayFromRequest(projectsRequest: any): ProjectInterface[] {
    return projectsRequest.map((project: any) => ({
        title: project.title,
        description: project.description,
        content: project.content,
        primaryImageURL: project.main_image.imageURL,
        otherImages: project.other_images,
        liveURL: project.live_url,
        githubURL: project.github_url,
        slug: project.slug
    }))
}


const Projects = () => {
    const [projects, setProjects] = useState<ProjectInterface[]>([])
    const [loading, setLoading] = useState<boolean>(true)

    useEffect(() => {
        (async function () {
            const { data } = await axios.get('/get_projects')
            setProjects(getProjectArrayFromRequest(data.projects))
            setTimeout(() => {
                setLoading(false)
            },2000)
        })()
    }, [])

    return (
        <div className='bg-green-500 md:my-20 md:p-20'>
            <h1 className='text-center text-4xl text-white font-bold custom_underline primary'>Projects</h1>
            <section id="section2" className='p-2 h-screen place-content-center grid gap-8 grid-cols-4 grid-rows-2 px-32'>
                {
                    loading ? 
                    <Loader dotColor = 'bg-white'/> : 
                    projects.map((project, index) => <Project key={index} project = {project}/>)
                }
            </section>
        </div>
    )
}

const Project: React.FC<{project: ProjectInterface}> = ({project}) => {

    return (
        <div className="project relative shadow-xl rounded-lg bg-green-50">
            <img src={project.primaryImageURL} className='project__image w-full h-full object-cover' alt={project.title} />
            <div
                className="project__content p-10 flex flex-col justify-around text-center absolute h-full inset-0 space-y-4 project__content--hover w-full">
                <img src={me} alt="javascript" className='w-16 h-16 mx-auto block object-cover object-center rounded-full' />
                <h1 className="project__title text-white font-bold text-4xl leading-8 ">{project.title}</h1>
                <div className='flex space-x-4 justify-center'>
                    <Link to = {`/project/${project.slug}`}
                        className='hover:bg-gray-100 hover:border-green-500 hover:text-green-500 rounded-full bg-green-500 border border-transparent text-white tracking-wide px-5 py-2 font-bold'
                    > View Project
                    </Link>
                </div>
            </div>
        </div>
    )
}
export { Projects }