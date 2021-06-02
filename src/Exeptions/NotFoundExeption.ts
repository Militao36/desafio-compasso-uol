class NotFoundExeption extends Error {
  private statusCode: number
  constructor (message: string) {
    super()
    this.statusCode = 404
    this.message = message || 'NOT_FOUND'
  }
}

export { NotFoundExeption }
