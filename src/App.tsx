import { useState } from 'react'
import { Banner } from './components/Banner'
import { Header } from './components/Header'
import { NavBar } from './components/NavBar'
import { GroupedList } from './components/GroupedList'
import { ArticlesPane } from './components/ArticlesPane'
import { MediaPost } from './components/MediaPost'
import { BlogPost } from './components/BlogPost'
import {
  blog,
  projects,
  site,
  type NavSection,
} from './content'
import './App.css'

export default function App() {
  const [section, setSection] = useState<NavSection>('projects')

  return (
    <>
      <Banner profile={site} />
      <div className="page">
        <Header profile={site} />
        <NavBar active={section} onChange={setSection} />
        <main
          className="page__main"
          id="content-panel"
          role="tabpanel"
          aria-labelledby={`tab-${section}`}
          key={section}
        >
          {section === 'projects' ? (
            <GroupedList
              groups={projects}
              renderItem={(item) => (
                <MediaPost key={item.title} post={item} />
              )}
            />
          ) : null}
          {section === 'articles' ? <ArticlesPane /> : null}
          {section === 'blog' ? (
            <GroupedList
              groups={blog}
              renderItem={(item) => (
                <BlogPost key={`${item.date}-${item.title}`} post={item} />
              )}
            />
          ) : null}
        </main>
      </div>
    </>
  )
}
