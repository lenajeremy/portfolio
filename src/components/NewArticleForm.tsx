import React, { Fragment /* useState */ } from 'react'

/* @ts-ignore */
import CKEditor from '@ckeditor/ckeditor5-react'

/* @ts-ignore */
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'

import { Header } from './Header'
import { Footer } from './Footer'

const NewArticleForm: React.FC = () => {
  interface ArticleFormValues {
    articleName: string
    primaryImage: File
    otherImages: File[]
    githubURL: string
    // liveURL: string
  }

  // const [formValues, setFormValues] = useState<ArticleFormValues>()

  const handleAddProject = (): ArticleFormValues | null => {
    return null
  }

//   alert('helo')

  return (
    <Fragment>
      <Header />
      <form onSubmit={handleAddProject}>
        <h1>Add a new project</h1>
        <input type="text" name="projectName" id="" />
        <button type="submit">Add Project</button>
      </form>
      <CKEditor editor={ClassicEditor} onChange = {(e: any, editor: any) => console.log(e)}/>
      <Footer />
    </Fragment>
  )
}

export { NewArticleForm }
