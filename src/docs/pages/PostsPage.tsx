import clsx from "clsx";
import { FormEvent, useState } from "react";
import { Heart, Image } from "react-bootstrap-icons"
import { Button } from "../../components/Button";
import { ThemifyLogo } from "../ThemifyLogo";

export interface PostsPageProps {

}

interface Post {
    content: string
    author: string,
    date: string,
    likes: number
}

export default function PostsPage({ }: PostsPageProps) {
    const [posts, setPosts] = useState<Post[]>([
        {
            content: "Hello, I just wanted to write something",
            author: "LGK",
            date: "20.06.2021 / 11:26",
            likes: 2
        },
        {
            content: "Nother one",
            author: "HGT",
            date: "20.06.2021 / 12:26",
            likes: 0
        }
    ])

    const [newPost, setNewPost] = useState<Post>({
        content: "",
        author: "USR",
        date: new Date().toDateString(),
        likes: 0
    })

    const submit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        let newPosts = [...posts]
        newPosts.push(newPost)
        setPosts(newPosts)
        setNewPost({
            content: "",
            author: "USR",
            date: new Date().toDateString(),
            likes: 0
        })
    }

    return (
        <>
            <header className="container mx-3">
                <h2 className="d-flex align-items-center"><ThemifyLogo className="me-1" /> Afflatus</h2>
            </header>

            <div className="container mx-3">
                <form className="my-3 form-control body-bg-stronger neumorphism-shadow rounded-3" onSubmit={submit}>
                    <label className="d-block">
                        <div className="mb-1 mx-3 mt-3"><strong>New post</strong></div>
                        <textarea className="form-control-input p-3 border-0 d-block w-100" placeholder="What's going on?"
                            value={newPost.content} onChange={({ target }) => setNewPost({ ...newPost, content: target.value })} />
                    </label>

                    <div className="p-3 d-flex justify-content-between">
                        <Button title="Upload image" silent type="button"><Image /></Button>

                        <Button primary type="submit">Submit post as {newPost.author}</Button>
                    </div>
                </form>

                {[...posts].reverse().map((post, key) =>
                    <div key={key} className={clsx("px-3 py-4", { "border-bottom": key !== posts.length - 1 })}>
                        <header className="d-flex justify-content-between">
                            <div>
                                <span className="rounded-circle d-inline-flex align-items-center justify-content-center me-2" style={{ width: "32px", height: "32px", backgroundColor: "#076d7f", color: "white" }}>{post.author}</span>
                                <a href="#">{post.date}</a>
                            </div>

                            <div className="d-flex">
                                <Button silent shadow={false} className="d-inline-flex align-items-center me-2" style={{ color: "red" }}><Heart className="me-1" /> {post.likes}</Button>
                                <Button shadow={false}>Reply</Button>
                            </div>
                        </header>
                        <div>{post.content}</div>
                    </div>
                )}
            </div>
        </>
    )
}