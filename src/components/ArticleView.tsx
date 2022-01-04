import axios from '../axios'

import React, {
    useEffect,
    useState
} from 'react'

import { motion } from 'framer-motion'

import {
    ProjectInterface,
    getSingleProjectFromRequest
} from './Projects'

import { useParams, useLocation } from 'react-router'
import { Loader } from './Loader'

const ArticleView: React.FC = () => {

    const { projectSlug } = useParams()
    const {state} = useLocation()

    // useEffect(() => {
    //     (async function () {
    //         const { data } = await axios.get('/project/' + projectSlug)
    //         setProject(getSingleProjectFromRequest(data))
    //         setTimeout(() => {
    //             setLoading(false)
    //         }, 2000)
    //     })()
    // }, [projectSlug])

    const [loading, setLoading] = useState(false)
    const [project, setProject] = useState<ProjectInterface>(state as ProjectInterface)

    // alert(JSON.stringify(state))
    return (
        <div className='article'>
            {
                loading ?
                    <Loader /> :
                    <div>
                        <motion.img layoutId = {project.primaryImageURL} className='primaryImage' src={project?.primaryImageURL} alt={project?.title} />
                        <div className='mt-10'>
                            <h1 className='text-4xl font-bold mb-2 md:leading-loose'>{project?.title}</h1>
                            <h6 className='w-4/5 leading-8 text-xl text-gray-700'>{project?.description}</h6>
                            <div dangerouslySetInnerHTML={{ __html: project?.content as string }} className = 'projectContent'>

                            </div>
                        </div>
                    </div>
            }
        </div>
    )
}

export { ArticleView }