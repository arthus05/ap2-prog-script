import http from 'http';
import express, { Express } from 'express';
import morgan from 'morgan';
import routes from './routes/posts';

const router: Express = express();

/* Logando */
router.use(morgan('dev'));
/* 'Parsear' a requisição */
router.use(express.urlencoded({ extended: false }));
/* Utilizando JSON */
router.use(express.json());

/* Regras da API */
router.use((req, res, next) => {
    // CORS policy
    res.header('Access-Control-Allow-Origin', '*');
    // CORS headers
    res.header('Access-Control-Allow-Headers', 'origin, X-Requested-With,Content-Type,Accept, Authorization');
    // CORS method headers
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'GET PATCH DELETE POST');
        return res.status(200).json({});
    }
    next();
});

/* Rotas */
router.use('/', routes);

/* Gerenciamento de erro */
router.use((req, res, next) => {
    const error = new Error('Não encontrado');
    return res.status(404).json({
        message: error.message
    });
});

/* Servidor */
const httpServer = http.createServer(router);
const PORT: any = process.env.PORT ?? 6060;
httpServer.listen(PORT, () => console.log(`O servidor está rodando na porta ${PORT}`));