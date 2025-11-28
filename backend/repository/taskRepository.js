import connection from "./conection.js";

export async function consultarTasks(){
    const comando = `
    select * from task
    `

    const[registro] = await connection.query(comando);
    return registro;
}

export async function inserirTask(novaTask){
    const comando = `
    insert into task (taskName, descritionTask)
    values (?, ?)
    `

    const [registro] = await connection.query(comando,[novaTask.nome,  novaTask.descricao]);
    return registro.insertId;
}

export async function atualizarTask(taskId,novaTask){
    const comando = 
    `
        update task
        set taskName = ?,
            descritionTask = ?
            where taskId=?
            `

            const [registro] = await connection.query(comando,[novaTask.nome,  novaTask.descricao, taskId]);
            return registro.affectedRows;

}

export async function deletarTask(taskId){
    const comando = 
    `
    delete from task 
    where taskId=?
    `

    const [registro] = await connection.query(comando,[taskId]);
    return registro
}