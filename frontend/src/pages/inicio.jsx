import { useState } from "react"
import './index.scss'
import api from "../../api"

export default function Task(){
    let [taskname, setTaskname] = useState("")
    let [taskstatus, setTaskstatus] = useState(false)
    let [descritiontask, setDescritiontask] = useState("")

    async function salvar(e){
        e.preventDefault()

        const novaTask = {
            nome : taskname,
            status : taskstatus,
            descricao : descritiontask
        }

        try{
            let resposta = await api.post("inserirtask",novaTask)
            alert("Task cadastrada! ID:" + resposta.data.idTask)
        }catch{
            console.error(err)
            alert("Erro ao salvar task!")
        }
    }
    
    return(
        <div>
            <header>Tasks</header>
            <h1>
                Abaixo estão suas tarefas
            </h1>
            <main>
                <form onSubmit={salvar}>
                    <div className="campo">
                        <label htmlFor="taskName">Nome da Tarefa</label>
                        <input type="text" 
                        value={taskname}
                        onChange={(e)=> setTaskname(e.target.value)}/>
                    </div>
                    

                     <div className="checkbox" >
                        <label htmlFor="taskStatus">Concluido?</label>
                        <input type="checkbox"
                        checked={taskstatus}
                        onChange={(e)=> setTaskstatus(e.target.value)}/>
                    </div>   
                    
                    <div className="campo">
                        <label htmlFor="descritionTask">Descrição</label>
                        <input type="text" 
                        value={descritiontask}
                        onChange={(e)=> setDescritiontask(e.target.value)}/>
                    </div>
                    
                    <div className="botao">
                        <button type="submit">Enviar</button>
                    </div>
                    
                </form>
            </main>
        </div>
    )
}