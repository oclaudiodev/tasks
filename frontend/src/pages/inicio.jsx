import { useState, useEffect } from "react"
import './index.scss'
import api from "../../api"

export default function Task(){
    let [nome, setNome] = useState("")
    let [descricao, setDescricao] = useState("")
    const [tasks,setTasks] = useState([]);
    let [editId,setEditId] = useState(null);

    async function carregar(){
        try{
            let resposta = await api.get("/consultartasks")
            setTasks(resposta.data);
        }
        catch(err){
            console.error(err)
        }
    }

    useEffect(()=>{
        carregar()
    },[])
   
    async function salvar(e){
        e.preventDefault()

        const novaTask = {
            nome : nome,
            descricao : descricao
        }

        try{
            let resposta;

            if(editId ===null){
                resposta = await api.post("/inserirtask",novaTask)
                alert("Task cadastrada! ID:" + resposta.data.idTask)
            }
            else{
                await api.put(`/atualizartask/${editId}`,novaTask)
                alert("Task atualizada com sucesso!")
            }

            setNome("")
            setDescricao("")
            carregar()
            
        }catch(err){
            console.error(err)
            alert("Erro ao salvar task!")
        }
    }

    
    async function deletar(taskId){
        try{
            await api.delete(`/deletartask/${taskId}`)
            alert("Task Deletada!")
        }catch(err){
            console.error(err);
            alert("Erro ao deletar.");
        }
    }

    function Editar(task){
        setEditId(task.taskId)
        setNome(task.taskName)
        setDescricao(task.descritionTask)
    }

    return(
        <div className="body">
            <header>
                    <h1>
                        Tasks
                    </h1>
                </header>
            <h1>
                Insira uma nova Tarefa
            </h1>
            <main>
                <form onSubmit={salvar}>
                    <div className="campo">
                        <label htmlFor="nome">Nome da Tarefa:</label>
                        <input type="text" 
                        value={nome}
                        onChange={(e)=> setNome(e.target.value)}/>
                    </div>
                      
                    
                    <div className="campo">
                        <label htmlFor="descricao">Descrição da tarefa:</label>
                        <input type="text" 
                        value={descricao}
                        onChange={(e)=> setDescricao(e.target.value)}/>
                    </div>
                    
                    <div className="botao">
                        <button type="submit">Enviar</button>
                    </div>
                    
                </form>

                <section className="tarefas">
                    <h2>Lista de Tarefas</h2>
                    <div className="n">
                        {tasks.map(t=>(
                            <p key={t.taskId}>
                                {t.taskName} - {t.descritionTask}
                                <button onClick={()=>Editar(t)}>Editar</button>
                                <button onClick={()=>deletar(t.taskId)}>Deletar</button>
                            </p>
                        ))}
                    </div>
                </section>
            </main>
        </div>
    )
}