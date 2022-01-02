import React, { Fragment, /* useState */ } from 'react'
import { Header } from './Header'
import { Footer } from './Footer'

const NewArticleForm: React.FC = () => {

    interface ArticleFormValues {
        articleName: string
        primaryImage: File
        otherImages: File[]
        githubURL: string
        liveURL: string
    }

    // const [formValues, setFormValues] = useState<ArticleFormValues>()

    const handleAddProject = (): ArticleFormValues | null => {
        return null;
    }

    return (
        <Fragment>
            <Header />
            <form onSubmit={handleAddProject}>
                <h1>Add a new project</h1>
                <input type="text" name="projectName" id="" />

                <button type="submit">Add Project</button>
            </form>
            <Footer />
        </Fragment>
    )
}


export { NewArticleForm }