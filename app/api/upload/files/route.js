import { queryExecute } from "../../db";

export async function GET(){
    const host = process.env.NEXT_PUBLIC_HOST;
    
    console.log(host)
    const q = 'select * from files'
    const data = await queryExecute(q)
    return Response.json(data);    
}

export async function POST(req){   
    const {title, imgUrl} = await req.json();
    const q = 'insert into files (title,imgUrl) values (?,?)'
    await queryExecute(q,[title, imgUrl])
    return Response.json({done:'성공!!!'});    
}