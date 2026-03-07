import { comments } from "../data";

export async function GET(_request: Request, {params}: {params: Promise<{id: string}>}) {
    const {id} = await params;
    const comment = comments.find(c => c.id === parseInt(id));
    if(comment) {
        return new Response(JSON.stringify(comment));
    } else {
        return new Response(JSON.stringify({error: "Comment not found"}), { status: 404 });
    }
}

export async function PATCH(request: Request, {params} : {params: Promise<{id: string}>}) {
    const {id} = await params;
    const body = await request.json();
    const comment = comments.findIndex(c => c.id === parseInt(id));
    if(comment !== -1) {
        comments[comment].text = body.text;
        return new Response(JSON.stringify(comments[comment]));
    } else {
        return new Response(JSON.stringify({error: "Comment not found"}), { status: 404 });
    }
}

export async function DELETE(_request: Request, {params}: {params: Promise<{id: string}>}) {
    const {id} = await params;
    const commentIndex = comments.findIndex(c => c.id === parseInt(id));
    const deletedComment = comments[commentIndex];
    if(commentIndex !== -1) {
        comments.splice(commentIndex, 1);
        return new Response(JSON.stringify(deletedComment));
    } else {
        return new Response(JSON.stringify({error: "Comment not found"}), { status: 404 });
    }
}