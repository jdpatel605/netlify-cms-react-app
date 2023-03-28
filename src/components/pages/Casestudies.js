import React from "react"
import { Link }  from "react-router-dom"
import Markdown from "react-markdown"
import casestudylist from "../../casestudies.json"

import "../components.css"

const Home = () => {
    const excerptList = casestudylist.map(post => {
        return post.content.split(" ").slice(0, 20).join(" ") + "..."
    })

    return (
        <div className="casestudylist">
            <h1 className="title">All Posts</h1>
            {casestudylist.length && 
                casestudylist.map((post, i) => {
                    return (
                        <div key={i} className="post-card">
                             <div className="img-container">
                                {post.thumbnail && <img className="thumbnail" width={80} src={post.thumbnail} alt=""/> }
                                <h2 className="post-title"><Link className="links" to={`/post/${post.id}`}>{post.title}</Link></h2>
                            </div>
                            <small>Published on {post.date} by {post.author}</small>
                            <hr/>
                            <Markdown source={excerptList[i]} escapeHtml={false} />
                            <small>
                                <Link className="links" to={`/post/${post.id}`}>Read more</Link>
                            </small>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Home