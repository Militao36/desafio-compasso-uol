class ConflictExeption extends Error {
  private statusCode: number
  constructor (message: string) {
    super()
    this.statusCode = 409
    this.message = message || 'Conflict'
  }
}

export { ConflictExeption }
