

import { queryExecute } from "./db";

export async function DELETE(req, {params}){   
    await queryExecute(`delete from member where num=?`,[params.num])
    const data = await queryExecute('select * from member');
    return Response.json(data);
}

export async function PUT(req, {params}){   
    const data = await req.json();
    const q = await queryExecute(`update member set name=? where num=?`,[data.name,params.num])

    const getData = await queryExecute('select * from member');
    
    return Response.json(getData);
}




// const data = await queryExecute('SELECT * from memeber')
    
    /* const data = await queryExecute('drop table contact') */
    
    
    
    
    /*  const data = await queryExecute(`
        create table contact(
            name varchar(30),
            email varchar(100),
            contents text,
            num int not null auto_increment,
            primary key(num)
        )
    `) */


    // const data = await queryExecute(`delete from memeber where num=3`)
    
    
    /* const data = await queryExecute(
        `update memeber set name='김호성' 
        where num = 3`
        );
     */

    /* const data = await queryExecute(`
    insert into memeber 
    (id,name,email) 
    values 
    ('abc','홍길순','hong@gmail.com')`) */
