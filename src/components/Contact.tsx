import { motion } from 'framer-motion'
import { useState } from 'react'

export const Contact = () => {
  const [{ name, subject, content }, setFormValues] = useState({
    name: '',
    subject: '',
    content: '',
  })

  const handleFormSubmission = (e: any) => {
    e.preventDefault()
    window.location.href = `mailto:jeremiahlena13@gmail.com?subject=${subject}&body=Hi, My name is ${name}.%0D%0A%0D%0A${content.replaceAll('\n', '%0D%0A')}`
  }

  return (
    <motion.div className="contact min-h-screen items-center flex flex-col" id = 'contact'>
      <h1 className="text-center text-5xl md:text-8xl uppercase text-white font-bold primary">
        CONTACT
      </h1>
      <form onSubmit={handleFormSubmission} className="contactForm">
        <div>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Your Name"
            value={name}
            onChange={(e) =>
              setFormValues({ name: e.currentTarget.value, subject, content })
            }
          />
        </div>
        <div>
          <input
            type="text"
            name="subject"
            id="subject"
            placeholder="Subject"
            value={subject}
            onChange={(e) =>
              setFormValues({ subject: e.currentTarget.value, name, content })
            }
          />
        </div>
        <div>
          <textarea
            placeholder="Type your message here..."
            name="content"
            value={content}
            onChange={(e) =>
              setFormValues({
                name,
                subject,
                content: e.currentTarget.value,
              })
            }
          ></textarea>
        </div>
        <button type="submit">Say Hi!</button>
      </form>
    </motion.div>
  )
}
