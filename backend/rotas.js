import taskController from "./controller/taskController.js";

export function rotas(api){
    api.use(taskController);
}