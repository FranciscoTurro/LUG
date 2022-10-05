import { Router } from 'express';
import { blogController } from '../../../controllers/blog';
// se instancia un nuevo router el cual se utilizara para nestear rutas.
const router = Router();
// cuando la url coincida con esta ruta, se ejecuta el codigo dentro de la funcion.
// en este caso la url deberia ser --> localhost:PORT/api/blogs/ con un metodo GET.
router.get('/', blogController.get);
router.put('/:title', blogController.put);
router.post('/', blogController.post);
router.delete('/:title', blogController.delete);
router.post('/:id/comment', blogController.addComment);
// se exporta el router para poder enlazarlo con las rutas que estan dentro de /api.
export default router;
