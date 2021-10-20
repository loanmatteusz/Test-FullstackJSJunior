class ApiError {
  constructor(
    public codeError: number,
    public message: string
  ) {}
}

export { ApiError }