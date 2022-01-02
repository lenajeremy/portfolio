import axios from '../axios'

import React, {
    useEffect,
    useState
} from 'react'

import {
    ProjectInterface,
    getSingleProjectFromRequest
} from './Projects'

import { useParams } from 'react-router'
import { Loader } from './Loader'

const ArticleView: React.FC = () => {

    const { projectSlug } = useParams()

    useEffect(() => {
        (async function () {
            const { data } = await axios.get('/project/' + projectSlug)
            setProject(getSingleProjectFromRequest(data))
            setTimeout(() => {
                setLoading(false)
            }, 2000)
        })()
    }, [projectSlug])

    const [loading, setLoading] = useState(true)
    const [project, setProject] = useState<ProjectInterface>()

    return (
        <div className='article'>
            {
                loading ?
                    <Loader /> :
                    <div>
                        <img className='primaryImage' src={project?.primaryImageURL} alt={project?.title} />
                        <div className='mt-10'>
                            <h1 className='text-4xl font-bold leading-loose'>{project?.title}</h1>
                            <h6 className='w-3/4 leading-8 text-xl text-gray-700'>{project?.description}</h6>
                            <div dangerouslySetInnerHTML={{ __html: project?.content as string }} className = 'projectContent'>

                            </div>
                        </div>
                    </div>
            }
        </div>
    )
}

export { ArticleView }