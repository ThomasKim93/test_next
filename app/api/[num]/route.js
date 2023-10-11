import {queryExecute} from '../db';


export async function DELETE(req, {params}){

    console.log( params)

    const data = await queryExecute(`delete from memeber where num=?, [params.num]`)
    const getData = await queryExecute(`select * from memeber`, [])
    return Response.json([]);

}