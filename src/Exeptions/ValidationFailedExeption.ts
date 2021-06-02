class ValidationFailedExeption extends Error {
  private statusCode: number
  private body: object
  constructor (message: string, body: object) {
    super()
    this.statusCode = 422
    this.message = message || 'Conflict'
    this.body = body
  }
}

export { ValidationFailedExeption }
