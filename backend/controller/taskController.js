import { deletarTask,inserirTask,atualizarTask,consultarTasks } from "../repository/taskRepository.js";
import { Router } from "express";

const endpoint = Router();

endpoint.get('/consultartasks',async(req,resp)=>{
    let consulta = await consultarTasks();
    resp.send(consulta);
})

endpoint.post('/inserirtask',async(req,resp)=>{
    const task = req.body
    let id = await inserirTask(task);
     resp.send({idTask:id})
})


endpoint.put('/atualizartask/:taskId',async(req,resp)=>{
    const id = req.params.taskId
    let task = req.body
    let taskAtt = await atualizarTask(id,task)
    resp.send(taskAtt)
})

endpoint.delete('/deletartask/:taskId',async(req,resp)=>{
    const id = req.params.taskId
    let taskDel = await deletarTask(id)
    resp.send(taskDel)
})

export default endpoint;