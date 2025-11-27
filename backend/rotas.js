import taskController from "./controller/taskController.js";

export  async function rotas(api){
    api.use(taskController);
}