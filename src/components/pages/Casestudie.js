import React from "react"
import { Navigate, useParams } from "react-router-dom"
import Markdown from "react-markdown"
// import Layout from "../components/layout"
import postlist from "../../posts.json"
import "./pages.css"

const Casestudy = (props) => {
    // const id = parseInt(props.match.params.id)
    const { id } = useParams()
    if (!id) {
        return <Navigate to="/404" />
    }
    const fetchedPost = {}
    let postExists = false
    postlist.forEach((post, i) => {
        if (parseInt(id) === post.id) {
            fetchedPost.title = post.title ? post.title : "No title given"
            fetchedPost.date = post.date ? post.date : "No date given"
            fetchedPost.author = post.author ? post.author : "No author given"
            fetchedPost.content = post.content ? post.content : "No content given"
            postExists = true
        }
    })
    if (postExists === false) {
        return <Navigate to="/404" />
    }
    return (
        <div className="post">
            <h2>{fetchedPost.title}</h2>
            <small>Published on {fetchedPost.date} by {fetchedPost.author}</small>
            <hr/>
            <Markdown source={fetchedPost.content} escapeHtml={false} />
        </div>
    )
}

export default Casestudy