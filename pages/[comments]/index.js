import { MongoClient, ObjectId } from "mongodb";
import Head from "next/head";
import { Fragment } from "react";
import Comment from '../../components/comments/CommentsList';

function Comments(props) {
    return (
        <Comment text={props.commentData.text} />
    );
}

export async function getStaticPaths() {
    const client = await MongoClient.connect(
      "mongodb+srv://A57c1992:A57c1992@cluster0.esg3msz.mongodb.net/meetups?retryWrites=true&w=majority"
    );
    const db = client.db();

    const commentsCollection = db.collection('comments');

    const comments = await commentsCollection.find({}, { _id: 1 }).toArray();

    client.close();

    return {
        fallback: 'blocking',
        paths: comments.map(comments => ({
            params: {
                commentId: comment._id.toString(),
            }
        })),
    };
};

export async function getStaticProps(context) {
    const commentId = context.params.commentId;

    const client = await MongoClient.connect(
      "mongodb+srv://A57c1992:A57c1992@cluster0.esg3msz.mongodb.net/meetups?retryWrites=true&w=majority"
    );
    const db = client.db();

    const commentsCollection = db.collection('comments');

    const viewComments = await commentsCollection.find({
        _id: ObjectId(commentId),
    });

    client.close();

    return {
        props: {
            commentData: {
                id: viewComments._id.toString(),
                text: viewComments.text,
            }
        }
    };
};

export default Comments;