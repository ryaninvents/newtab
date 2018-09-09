import React, { Component } from 'react'
import './App.css'
import './bootstrap.min.css'
import Card from './Card'

const BOOKMARKS = [
  {
    title: 'Smashing Magazine',
    link: 'https://www.smashingmagazine.com',
    description: 'Articles for professional web designers and developers.'
  },
  {
    title: 'A List Apart',
    link: 'https://alistapart.com/',
    description: 'A List Apart explores the design, development, and meaning of web content, with a special focus on web standards and best practices.'
  },
  {
    title: 'Farnam Street',
    link: 'https://fs.blog/',
    description: 'Mental models, decision making, learning, reading, and the art of living.'
  },
  {
    title: 'Rands in Repose',
    link: 'http://randsinrepose.com',
    description: 'Interesting posts about leadership, career planning, and finding decent stationary.'
  },
  {
    title: 'The Changelog',
    link: 'https://changelog.com/',
    description: 'News and podcasts for developers'
  },
  {
    title: 'dev.to',
    link: 'https://dev.to/',
    description: 'Where programmers share ideas and help each other grow.'
  }
]

class App extends Component {
  render () {
    return (
      <div className="m-4 text-center">
        <h1 className="text-center">New tab</h1>
        <div className="container">
          <div className="row">
            {BOOKMARKS.map((bookmark, i) => (
              <div className="col-md-4 py-3" key={i}>
                <Card title={bookmark.title} href={bookmark.link}>{bookmark.description}</Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
}

export default App
