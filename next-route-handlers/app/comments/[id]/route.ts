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