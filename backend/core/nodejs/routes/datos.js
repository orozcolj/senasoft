import express from 'express';
import mysql from 'mysql2/promise';

const app = express.Router();

const connectionSettings = {
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'senasoft',
    waitForConnections: true,
    connectionLimit: 15,
    queueLimit: 0
};

const dbPool = mysql.createPool(connectionSettings);

async function executeQuery(sqlQuery, parameters = []) {
    try {
        const [result] = await dbPool.execute(sqlQuery, parameters);
        return result;
    } catch (err) {
        console.error('Error ejecutando consulta:', err);
        throw err;
    }
}

app.get('/estadisticas-departamentos-centros', async (req, res) => {
    try {
        const consulta = `
            SELECT
                d.name AS departamento,
                c.name AS centro_formacion,
                COUNT(*) AS total_inscritos
            FROM apprentices AS a
            INNER JOIN centers AS c ON a.id_center_fk = c.id
            INNER JOIN departments AS d ON c.id_department_fk = d.id
            GROUP BY d.name, c.name
            ORDER BY total_inscritos DESC
        `;

        const resultados = await executeQuery(consulta);

        res.status(200).json({
            status: 'success',
            info: "Datos obtenidos correctamente",
            results: resultados
        });
    } catch (error) {
        console.error('Error en estadísticas departamentos-centros:', error);
        res.status(500).json({
            status: 'error',
            info: 'Error al obtener la información solicitada.',
            details: error.message
        });
    }
});

app.get('/instructores-mejor-evaluados', async (req, res) => {
    try {
        const consulta = `
            SELECT
                c.name AS centro_formacion,
                CONCAT(i.name, ' ', i.last_name) AS nombre_instructor,
                COUNT(*) AS total_recomendaciones
            FROM apprentices a
            JOIN centers c ON a.id_center_fk = c.id
            JOIN recommendations r ON a.id = r.id_aprendiz_fk
            JOIN instructors i ON r.id_instructor_fk = i.id
            GROUP BY c.name, i.id, i.name, i.last_name
            ORDER BY c.name, total_recomendaciones DESC
        `;

        const resultados = await executeQuery(consulta);

        res.status(200).json({
            status: 'success',
            info: "Información recuperada exitosamente",
            results: resultados
        });
    } catch (error) {
        console.error('Error en instructores mejor evaluados:', error);
        res.status(500).json({
            status: 'error',
            info: 'No se pudo acceder a los datos requeridos.',
            details: error.message
        });
    }
});

app.get('/distribucion-centros-programas', async (req, res) => {
    try {
        const consulta = `
            SELECT
                c.name AS centro_formacion,
                p.name AS programa_formacion,
                COUNT(a.id) AS numero_matriculados
            FROM apprentices a
            JOIN programs p ON a.id_program_fk = p.id
            JOIN centers c ON a.id_center_fk = c.id
            WHERE p.name IN (?, ?, ?, ?)
            GROUP BY c.name, p.name
            ORDER BY c.name
        `;

        const programasEspecificos = [
            'Análisis y Desarrollo de Software',
            'Gestión de Proyectos de Software',
            'Producción de Multimedia',
            'Tecnología en Animación 3D'
        ];

        const resultados = await executeQuery(consulta, programasEspecificos);

        res.status(200).json({
            status: 'success',
            info: "Consulta procesada correctamente",
            results: resultados
        });
    } catch (error) {
        console.error('Error en distribución centros-programas:', error);
        res.status(500).json({
            status: 'error',
            info: 'Fallo en la recuperación de datos.',
            details: error.message
        });
    }
});

app.get('/resumen-departamentos', async (req, res) => {
    try {
        const consulta = `
            SELECT
                d.name AS departamento,
                COUNT(a.id) AS aprendices_totales
            FROM apprentices a
            JOIN centers c ON a.id_center_fk = c.id
            JOIN departments d ON c.id_department_fk = d.id
            GROUP BY d.name
            ORDER BY aprendices_totales DESC
        `;

        const resultados = await executeQuery(consulta);

        res.status(200).json({
            status: 'success',
            info: "Resumen generado exitosamente",
            results: resultados
        });
    } catch (error) {
        console.error('Error en resumen departamentos:', error);
        res.status(500).json({
            status: 'error',
            info: 'Error al generar el resumen solicitado.',
            details: error.message
        });
    }
});

app.get('/perfiles-github-activos', async (req, res) => {
    try {
        const consulta = `
            SELECT 
                COUNT(a.github_user) AS usuarios_github_activos
            FROM apprentices AS a
            WHERE a.github_user IS NOT NULL 
            AND a.github_user != ''
        `;

        const resultados = await executeQuery(consulta);

        res.status(200).json({
            status: 'success',
            info: "Conteo realizado correctamente",
            results: resultados
        });
    } catch (error) {
        console.error('Error en perfiles GitHub:', error);
        res.status(500).json({
            status: 'error',
            info: 'No se pudo completar el conteo.',
            details: error.message
        });
    }
});

app.get('/centros-nivel-ingles-alto', async (req, res) => {
    try {
        const consulta = `
            SELECT 
                c.name AS centro_formacion,
                COUNT(*) AS aprendices_nivel_avanzado
            FROM apprentices a
            INNER JOIN centers c ON c.id = a.id_center_fk
            WHERE a.level_english IN (?, ?)
            GROUP BY c.name
            ORDER BY aprendices_nivel_avanzado DESC
        `;

        const nivelesAvanzados = ['B1', 'B2'];
        const resultados = await executeQuery(consulta, nivelesAvanzados);

        res.status(200).json({
            status: 'success',
            info: "Análisis de niveles completado",
            results: resultados
        });
    } catch (error) {
        console.error('Error en centros nivel inglés:', error);
        res.status(500).json({
            status: 'error',
            info: 'Fallo en el análisis de niveles.',
            details: error.message
        });
    }
});

// Manejo de cierre de la aplicación
process.on('SIGTERM', async () => {
    console.log('Finalizando conexiones de base de datos...');
    await dbPool.end();
    process.exit(0);
});

export default app;