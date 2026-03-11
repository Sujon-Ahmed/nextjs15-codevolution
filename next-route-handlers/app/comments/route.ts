import { comments } from "./data";
import { type NextResponse } from "next/server";

export async function GET(request: NextResponse) {
    const searchParams = request.nextUrl.searchParams;
    const query = searchParams.get('query');
    const fillteredComments = query ? comments.filter(c => c.text.includes(query)) : comments;
    
    return Response.json(fillteredComments);
}

export async function POST(request: Request) {
    const comment = await request.json();
    const newComment = {
        id: comments.length + 1,
        text: comment.text
    };
    comments.push(newComment);
    return new Response(JSON.stringify(newComment), { status: 201 });   
}

