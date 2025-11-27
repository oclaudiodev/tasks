import connection from "./conection.js";

export async function consultarTasks(){
    const comando = `
    select * from task
    `

    const[registro] = await connection.query(comando);
    return registro;
}

export async function inserirTask(task){
    const comando = `
    insert into task (taskName, taskStatus, descritionTask)
    values (?, ?, ?)
    `

    const [registro] = await connection.query(comando,[task.taskName, task.taskStatus, task.descritionTask]);
    return registro.insertId;
}

export async function atualizarTask(taskId,task){
    const comando = 
    `
        update task
        set taskName = ?,
            taskStatus = ?,
            descritionTask = ?
            where taskId=?
            `

            const [registro] = await connection.query(comando,[task.taskName, task.taskStatus, task.descritionTask, taskId]);
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