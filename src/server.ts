import app from './app'
import 'dotenv/config'

const HOST = process.env.HOST || 'localhost'
const PORT = process.env.PORT || 3000

app.listen(PORT, () => console.log(`${HOST}:${PORT}`))
