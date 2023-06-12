import express, { Application } from 'express'
import cors from 'cors'
import { UserRoutes } from './app/modules/user/users.route'
// import ApiError from './errors/ApiError'
import globalErrorHandler from './app/middlewares/globalErrorHandler'
const app: Application = express()

app.use(cors())
//parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//application routes

app.use('/api/v1/users/', UserRoutes)

// app.get('/', async (req: Request, res: Response, next: NextFunction) => {
//   // res.send('Working Successfully')
//   throw new ApiError(400,'Testing Error logger')
// })

app.use(globalErrorHandler)

export default app
